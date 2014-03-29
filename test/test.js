require('..');

console.assert(typeof console.html === 'function',
  'installed a function');
console.html('<body><h1>hi</h1></body>');
