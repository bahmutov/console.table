require('..');

console.assert(typeof console.table === 'function',
  'console.table is a function');

var names = [
  {
    name: 'foo'
  },
  {
    name: 'bar'
  },
  {
    name: 'baz'
  }
];

console.table('console.table can print arrays', [1, 'foo', 2], 'and arrays of objects', names);
delete console.table;
