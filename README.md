# json-chop
Minimal object-to-json formatting and chopping tool.

[![build status](https://secure.travis-ci.org/eljefedelrodeodeljefe/json-chop.svg)](http://travis-ci.org/eljefedelrodeodeljefe/json-chop)

## Installation

```
npm install --save json-chop
```

## Description
If you don't want rely on libraries like `lodash` to do minimal object manipulation you can just use `JSON.stringify`'s built-in filter capabilities - or this library, which abstracts a thin layer over it.

This is believed to be much more performant then walking trees.

No dependencies.

## Usage

```js
'use strict'
var chop = require('./')

let obj = {
  somekey: {
    nestedKey: 'hello',
    _id: 12234555,
    version: null,
    __v: '0.8.0',
    oneHunrdred: 100
  }
}

let options = {
  keyBlacklist: ['__v', '_id'],
  valueBlacklist: ['', 100, null] // empty arrays and undefied are chopped of implicitly
}

chop.chop(obj, options, function (res) {
  console.log(res)
  // {"somekey":{"nestedKey":"hello"}}
})

let res = chop.chop(obj, options)
console.log(res)
// {"somekey":{"nestedKey":"hello"}}
```

## Roadmap
- Test suite
- Type checking for dev input
- optionally return an object
- safe mode (try ... catch)
- Chopping array of nulls

## Credits
[Robert Jefe Lindstaedt](https://github.com/eljefedelrodeodeljefe/)

## License
MIT
