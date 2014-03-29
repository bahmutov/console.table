// use default parameters
require('..');

var foo = {
  n: 21,
  bar: {
    a: ['first', 'second']
  }
};
console.json('foo', foo);
console.log('foo', foo);

delete console.json;
require('..')(null, 4);
console.json('foo with 4 spaces', foo);

delete console.json;
require('..')(null, '**');
console.json('foo with **\n', foo);
