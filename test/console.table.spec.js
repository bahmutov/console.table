var expect = require('expect.js');
var assert = require('better-assert');
var sinon = require('sinon');

describe('console.table', function () {
  before(function () {
    // make sure the module is loaded without caching
    delete require.cache[require.resolve('..')];
  });

  beforeEach(function () {
    this.sinon = sinon.sandbox.create();
  });

  afterEach(function () {
    this.sinon.restore();
  });

  it('fills missing method', function () {
    expect(console.table).to.be(undefined);
  });

  it('installs html method', function () {
    require('..');
    expect(typeof console.table).to.be('function');
  });

  describe('installer', function () {
    before(function () {
      delete require.cache[require.resolve('..')];

      this.installer = require('../lib');
    });

    afterEach(function() {
      delete console.table;
    });

    it('should be a function', function() {
      assert(typeof this.installer === 'function');
    });

    it('should default to console.log', function () {
      var spy = this.sinon.spy(console, 'log');
      this.installer();

      console.table('test');

      sinon.assert.calledOnce(spy);
    });

    it('should be overridable', function() {
      var stub = this.sinon.stub(console, 'info');
      this.installer({method: 'info'});

      console.table('test');

      sinon.assert.calledOnce(stub);
    });
  });

  describe('installer(method = "info")', function () {
    before(function () {
      delete console.table;
      delete require.cache[require.resolve('..')];

      this.method = 'info';

      require('../lib')({method: this.method});
    });

    beforeEach(function () {
      this.stub = this.sinon.stub(console, this.method);
    });

    it('logs simple string', function () {
      console.table('foo');

      sinon.assert.calledOnce(this.stub);
      sinon.assert.calledWith(this.stub, 'foo');
    });

    it('logs several strings separately', function () {
      console.table('foo', 'bar');

      sinon.assert.calledTwice(this.stub);
      assert(this.stub.firstCall.calledWith('foo'));
      assert(this.stub.secondCall.calledWith('bar'));
    });

    it('can print title', function () {
      console.table('These are numbers', [1, 2, 3]);

      sinon.assert.calledThrice(this.stub);
      assert(this.stub.firstCall.calledWith('These are numbers'));
      assert(this.stub.secondCall.calledWith('-----------------'));
      assert(this.stub.thirdCall.calledWith('item\n----\n1   \n2   \n3   \n'));
    });

    it('objects with title', function () {
      console.table('Several objects', [
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
      ]);

      sinon.assert.calledThrice(this.stub);
      assert(this.stub.firstCall.calledWith('Several objects'));
      assert(this.stub.secondCall.calledWith('---------------'));
      assert(this.stub.thirdCall.calledWith(
        'name  age\n----  ---\nfoo   10 \nbar   20 \nbaz   30 \n'
      ));
    });

    describe('objects', function () {
      it('prints an object', function () {
        console.table({ foo: 'foo', bar: 'bar' });

        sinon.assert.calledOnce(this.stub);
        sinon.assert.calledWith(this.stub, 'key  value\n---  -----\nfoo  foo  \nbar  bar  \n');
      });

      it('prints an object with a title', function () {
        console.table('this is an object', { foo: 'foo', bar: 'bar' });

        sinon.assert.calledTwice(this.stub);
        assert(this.stub.firstCall.calledWith('this is an object'));
        assert(this.stub.secondCall.calledWith('key  value\n---  -----\nfoo  foo  \nbar  bar  \n'));
      });
    });

    describe('arrays', function () {
      it('prints an array', function () {
        console.table(['a', 'b', 'c']);

        sinon.assert.calledOnce(this.stub);
        sinon.assert.calledWith(this.stub, 'item\n----\na   \nb   \nc   \n');
      });

      it('prints an array with a title', function () {
        console.table('My title here', ['a', 'b', 'c']);

        sinon.assert.calledThrice(this.stub);
        assert(this.stub.firstCall.calledWith('My title here'));
        assert(this.stub.secondCall.calledWith('-------------'));
        assert(this.stub.thirdCall.calledWith('item\n----\na   \nb   \nc   \n'));
      });

      it('prints a two-dimensional array', function () {
        console.table([
          ['a', 'b', 'c'],
          ['d', 'e', 'f'],
          ['g', 'h', 'i']
        ]);

        assert(this.stub.calledOnce);
        sinon.assert.calledWith(this.stub, '0  1  2\n-  -  -\na  b  c\nd  e  f\ng  h  i\n');
      });

      it('prints a mixed type two-dimensional array', function () {
        console.table([
          ['a', 'b', 'c'],
          'd',
          ['e', 'f', 'g']
        ]);

        sinon.assert.calledOnce(this.stub);
        sinon.assert.calledWith(
          this.stub,
          '0  1  2  item\n-  -  -  ----\na  b  c      \n         d   \ne  f  g      \n'
        );
      });

      describe('installer(useFirstRow = true)', function () {
        beforeEach(function () {
          delete console.table;

          require('../lib')({
            method: this.method,
            useFirstRow: true
          });
        });

        it('prints an array', function () {
          console.table(['a', 'b', 'c']);

          sinon.assert.calledOnce(this.stub);
          sinon.assert.calledWith(this.stub, 'item\n----\na   \nb   \nc   \n');
        });

        it('prints a two-dimensional array', function () {
          console.table([
            ['a', 'b', 'c'],
            ['d', 'e', 'f'],
            ['g', 'h', 'i']
          ]);

          assert(this.stub.calledOnce);
          sinon.assert.calledWith(this.stub, 'a  b  c\n-  -  -\nd  e  f\ng  h  i\n');
        });

        it('prints a mixed type two-dimensional array', function () {
          console.table([
            ['a', 'b', 'c'],
            'd',
            ['e', 'f', 'g']
          ]);

          sinon.assert.calledOnce(this.stub);
          sinon.assert.calledWith(
            this.stub,
            '0  1  2  item\n-  -  -  ----\na  b  c      \n         d   \ne  f  g      \n'
          );
        });
      });
    });
  });
});
