# console.html

> Adds console.html method for convenience

[![NPM][console.html-icon] ][console.html-url]

[![Build status][console.html-ci-image] ][console.html-ci-url]
[![dependencies][console.html-dependencies-image] ][console.html-dependencies-url]
[![devdependencies][console.html-devdependencies-image] ][console.html-devdependencies-url]

Install: `npm install console.html --save`

Use:

```js
// call once somewhere in the beginning
require('console.html');
console.html('<body><h1>Hello, world!</h1></body>');
// prints
<body>
  <h1>Hello, world!</h1>
</body>
```
console.html($('#selector'));
// prints nicely formatted HTML from jQuery / D3 selectors

### Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/console.html/issues) on Github

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

[console.html-icon]: https://nodei.co/npm/console.html.png?downloads=true
[console.html-url]: https://npmjs.org/package/console.html
[console.html-ci-image]: https://travis-ci.org/bahmutov/console.html.png?branch=master
[console.html-ci-url]: https://travis-ci.org/bahmutov/console.html
[console.html-dependencies-image]: https://david-dm.org/bahmutov/console.html.png
[console.html-dependencies-url]: https://david-dm.org/bahmutov/console.html
[console.html-devdependencies-image]: https://david-dm.org/bahmutov/console.html/dev-status.png
[console.html-devdependencies-url]: https://david-dm.org/bahmutov/console.html#info=devDependencies
