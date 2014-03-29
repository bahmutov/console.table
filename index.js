var beautify = require('js-beautify').html;
module.exports = function () {
  setConsoleHtml();
};

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
    });
  };
}

setConsoleHtml();
