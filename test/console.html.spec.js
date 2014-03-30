var expect = require('expect.js');
var sinon = require('sinon');

describe('console.html', function () {
  beforeEach(function () {
    // make sure the module is loaded without caching
    delete require.cache[require.resolve('../index')];
  });

  afterEach(function () {
    delete console.html;
  });

  it('fills missing method', function () {
    expect(console.html).to.be(undefined);
  });

  it('installs html method', function () {
    require('../index');
    expect(typeof console.html).to.be('function');
  });

  it('calls console.log ultimately', function () {
    require('../index');
    sinon.spy(console, 'log');
    var str = '<h1>hi</h1>';
    console.html(str);
    expect(console.log.callCount).to.be(1);
    expect(console.log.calledWith(str)).to.be(true);
    console.log.restore();
  });

  it('calls console.log with value of html()', function () {
    require('../index');
    sinon.spy(console, 'log');
    console.html({
      html: function () {
        return 'foo';
      }
    });
    expect(console.log.calledWith('foo')).to.be(true);
    console.log.restore();
  });

  it('calls console.log with value of innerHTML', function () {
    require('../index');
    sinon.spy(console, 'log');
    console.html({
      innerHTML: 'foo'
    });
    expect(console.log.calledWith('foo')).to.be(true);
    console.log.restore();
  });

  it('logs nothing if no html found', function () {
    require('../index');
    sinon.spy(console, 'log');
    console.html({
      other: 'foo'
    });
    expect(console.log.calledWith('foo')).to.be(false);
    expect(console.log.called).to.be(false);
    console.log.restore();
  });
});
