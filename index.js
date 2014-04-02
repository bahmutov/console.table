(function () {
  'use strict';

  /* global window */
  var beautify = (typeof require === 'function' && require('js-beautify').html) ||
    (typeof window !== 'undefined' && window.html_beautify);
  if (typeof beautify !== 'function') {
    throw new Error('missing HTML beautify function');
  }
  var Table = require('easy-table');

  function setupConsoleTable() {
    if (typeof console === 'undefined') {
      throw new Error('Weird, console object is undefined');
    }
    if (typeof console.table === 'function') {
      return;
    }

    console.table = function () {
      var args = Array.prototype.slice.call(arguments);
      args.forEach(function (k) {
        if (typeof k === 'string') {
          return console.log(k);
        } else if (Array.isArray(k)) {
          var t = new Table();
          k.forEach(function (record) {
            if (typeof record === 'string' ||
              typeof record === 'number') {
              t.cell('item', record);
            } else {
              // assume plain object
              Object.keys(record).forEach(function (property) {
                t.cell(property, record[property]);
              });
            }
            t.newRow();
          });
          console.log(t.toString());
        }
      });
    };
  }

  setupConsoleTable();
}());
