(function () {
  'use strict';
  /* global window */
  var beautify = (typeof require === 'function' && require('js-beautify').html) ||
    (typeof window !== 'undefined' && window.html_beautify);
  if (typeof beautify !== 'function') {
    throw new Error('missing HTML beautify function');
  }

  if (typeof module === 'object') {
    // node
    module.exports = function () {
      setConsoleHtml();
    };
  }

  function setConsoleHtml() {
    if (typeof console === 'undefined') {
      throw new Error('Weird, console object is undefined');
    }
    if (typeof console.html === 'function') {
      return;
    }

    console.html = function () {
      var args = Array.prototype.slice.call(arguments);
      args.forEach(function (k) {
        if (typeof k === 'string') {
          return console.log(beautify(k));
        }
        if (typeof k === 'object' &&
          typeof k.html === 'function') {
          return console.log(beautify(k.html()));
        }
        if (typeof k.innerHTML === 'string') {
          return console.log(beautify(k.innerHTML));
        }
      });
    };
  }

  setConsoleHtml();
}());
