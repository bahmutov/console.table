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
console.table('console.table can print arrays', [1, 'foo', 2]);
console.table('it can print arrays of objects', names);
console.log('print array of values with titles');

var values = [
  ['max', 20],
  ['joe', 30]
];
console.table(['name', 'age'], values);

delete console.table;
