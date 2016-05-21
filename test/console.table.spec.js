'use strict';

var expect = require('expect.js');
var assert = require('better-assert');
var sinon = require('sinon');

function loadMethod() {
  require('../index');
}

function cleanLoadedCache() {
  // make sure the module is loaded without caching
  delete require.cache[require.resolve('../index')];
}

function deleteTableMethod() {
  delete console.table;
}

describe('console.table', function () {
  beforeEach(cleanLoadedCache);
  afterEach(deleteTableMethod);

  it('fills missing method', function () {
    expect(console.table).to.be(undefined);
  });

  it('installs html method', function () {
    loadMethod();
    expect(typeof console.table).to.be('function');
  });

  it('logs simple string', function () {
    loadMethod();
    sinon.spy(console, 'log');
    console.table('foo');
    assert(console.log.firstCall.calledWith('foo'));
    console.log.restore();
  });

  it('logs several strings separately', function () {
    loadMethod();
    sinon.spy(console, 'log');
    console.table('foo', 'bar');
    assert(console.log.firstCall.calledWith('foo'));
    assert(console.log.secondCall.calledWith('bar'));
    console.log.restore();
  });

  it('can print title', function () {
    loadMethod();
    console.table('These are numbers', [1, 2, 3]);
  });

  it('objects with title', function () {
    var objects = [
      {
        name: 'foo',
        age: 10
      },
      {
        name: 'bar',
        age: 20
      },
      {
        name: 'baz',
        age: 30
      }
    ];
    loadMethod();
    console.table('Several objects', objects);
  });
});

describe('console.table object', function () {
  beforeEach(function () {
    cleanLoadedCache();
    loadMethod();
  });

  afterEach(deleteTableMethod);

  it('prints an object', function () {
    console.table({ foo: 'foo', bar: 'bar' });
  });

  it('prints an object', function () {
    console.table('this is an object', { foo: 'foo', bar: 'bar' });
  });
});
