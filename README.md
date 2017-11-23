# [@fav/text.starts-with][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Checks if a string starts with given string.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/text.starts-with
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/text.starts-with/` directory manually.*


## Usage

For Node.js:

```js
var startsWith = require('@fav/text.starts-with');
startsWith('abc', 'a'); // => true
startsWith('abc', 'b'); // => false
startsWith('abc', 'b', 1); // => true
```

For Web browsers:

```html
<script src="fav.text.starts-with.min.js"></script>
<script>
var startsWith = fav.text.startsWith;
startsWith('abc', 'a'); // => true
startsWith('abc', 'b'); // => false
startsWith('abc', 'b', 1); // => true
</script>
```


## API

### <u>startsWith(string, target [, startIndex]) : boolean</u>

Checks if *string* starts with *target*.
If *startIndex* is specified this function starts comparison from *startIndex*.

**NOTE:** This function doesn't check data types of the arguments, and assumes that they are given as per the specific data types.

#### Parameters:

| Parameter    |  Type  | Description                               |
|--------------|:------:|-------------------------------------------|
| *string*     | string | The string to be checked.                 |
| *target*     | string | The string to search for.                 |
| *startIndex* | number | The index to search from.                 | 

#### Return:

True, if *string* starts with *target*, otherwise false.

**Type:** boolean


## Checked                                                                      

### Node.js (4〜8)

| Platform  |   4    |   5    |   6    |   7    |   8    |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.7   |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-text.starts-with/
[npm-img]: https://img.shields.io/badge/npm-v0.1.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/text.starts-with
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-text.starts-with.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-text.starts-with
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-text.starts-with?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-text-starts-with
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-text.starts-with/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-text.starts-with?branch=master
