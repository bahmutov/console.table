require('..');

console.assert(typeof console.table === 'function',
  'console.table is a function');

var names = [
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

console.log('printing');
console.table('console.table can print arrays', [1, 'foo', 2], 'and arrays of objects', names);
delete console.table;
