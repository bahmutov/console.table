# console.json

> Adds console.json method for convenience

[![NPM][console.json-icon] ][console.json-url]

[![Build status][console.json-ci-image] ][console.json-ci-url]
[![dependencies][console.json-dependencies-image] ][console.json-dependencies-url]
[![devdependencies][console.json-devdependencies-image] ][console.json-devdependencies-url]

Install: `npm install console.json --save`

Use:

```js
// call once somewhere in the beginning
require('console.json');
var foo = {
    n: 21,
    bar: {
      a: ['first', 'second']
    }
};
// console.json('foo', foo); prints
foo {
  "n": 21,
  "bar": {
    "a": [
      "first",
      "second"
    ]
  }
}
// console.log('foo', foo) prints
foo { n: 21, bar: { a: [ 'first', 'second' ] } }
```
## Options

You can pass arguments to be used inside `JSON.stringify` to `console.json`

```js
require('console.json')(null, 4);
// aligns printed properties using 4 spaces
```

For exact meaning of these two arguments, see
[JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/console.json/issues) on Github

## MIT License

Copyright (c) 2014 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[console.json-icon]: https://nodei.co/npm/console.json.png?downloads=true
[console.json-url]: https://npmjs.org/package/console.json
[console.json-ci-image]: https://travis-ci.org/bahmutov/console.json.png?branch=master
[console.json-ci-url]: https://travis-ci.org/bahmutov/console.json
[console.json-dependencies-image]: https://david-dm.org/bahmutov/console.json.png
[console.json-dependencies-url]: https://david-dm.org/bahmutov/console.json
[console.json-devdependencies-image]: https://david-dm.org/bahmutov/console.json/dev-status.png
[console.json-devdependencies-url]: https://david-dm.org/bahmutov/console.json#info=devDependencies
