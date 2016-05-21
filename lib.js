(function () {
  'use strict';

  module.exports = function setupConsoleTable(options) {
    if (typeof console === 'undefined') {
      throw new Error('Weird, console object is undefined');
    }
    if (typeof console.table === 'function') {
      return;
    }

    options || (options = {});

    var method = options.method || 'log';
    var Table = require('easy-table');

    function arrayToString(arr) {
      var t = new Table();
      var keys;

      if (options.useFirstRow && arr.length > 1 && arr.every(Array.isArray)) {
        keys = arr.shift();
      }

      arr.forEach(function (record) {
        if (typeof record === 'string' ||
          typeof record === 'number') {
          t.cell('item', record);
        } else if (keys) {
          //console.error('keys', keys, record.length);

          record.forEach(function (property, index) {
            t.cell(keys[index], property);
          });
        } else {
          //console.error('DOWN HERE', keys);
          // assume plain object
          Object.keys(record).forEach(function (property) {
            t.cell(property, record[property]);
          });
        }
        t.newRow();
      });

      return t.toString();
    }

    function printTitleTable(title, arr) {
      var str = arrayToString(arr);
      var rowLength = str.indexOf('\n');
      if (rowLength > 0) {
        if (title.length > rowLength) {
          rowLength = title.length;
        }
        console[method](title);
        var sep = '-', k, line = '';
        for (k = 0; k < rowLength; k += 1) {
          line += sep;
        }
        console[method](line);
      }
      console[method](str);
    }

    function objectToArray(obj) {
      var keys = Object.keys(obj);
      return keys.map(function (key) {
        return {
          key: key,
          value: obj[key]
        };
      });
    }

    function objectToString(obj) {
      return arrayToString(objectToArray(obj));
    }

    console.table = function () {
      var args = Array.prototype.slice.call(arguments);

      if (args.length === 2 &&
        typeof args[0] === 'string' &&
        Array.isArray(args[1])) {

        return printTitleTable(args[0], args[1]);
      }
      args.forEach(function (k) {
        if (typeof k === 'string') {
          return console[method](k);
        } else if (Array.isArray(k)) {
          console[method](arrayToString(k));
        } else if (typeof k === 'object') {
          console[method](objectToString(k));
        }
      });
    };
  };
}());
