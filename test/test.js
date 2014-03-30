require('..');

console.assert(typeof console.html === 'function',
  'installed a function');
console.html('<body><h1>hi</h1></body>');
var foo = {
  html: function () {
    return '<foo>bar</foo>';
  }
};
console.html('several arguments', '<h1>hi again</h1>', foo);
delete console.html;
