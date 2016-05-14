# json-chop [![npm](https://img.shields.io/npm/v/json-chop.svg)](https://www.npmjs.com/package/json-chop) [![build status](https://secure.travis-ci.org/eljefedelrodeodeljefe/json-chop.svg)](http://travis-ci.org/eljefedelrodeodeljefe/json-chop) [![Coverage Status](https://coveralls.io/repos/eljefedelrodeodeljefe/json-chop/badge.svg?branch=master&service=github)](https://coveralls.io/github/eljefedelrodeodeljefe/json-chop?branch=master)
Minimal object-to-json formatting and chopping tool.

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
const chop = require('json-chop')
// an arbitrary object
let obj = {
  somekey: {
    nestedKey: 'hello',
    _id: 12234555,
    version: null,
    __v: '0.8.0',
    oneHunrdred: 100
  }
}
// define key and or value you want to finlter. `undefined` and empty
// arrays will be filtered automatically
let options = {
  keyBlacklist: ['__v', '_id'],
  valueBlacklist: ['', 100, null]
}
// async version with a callback
chop.chop(obj, options, (res) => {
  console.log(res)
  // {"somekey":{"nestedKey":"hello"}}
})
// sync version returns the value from the function
let res = chop.chop(obj, options)
console.log(res)
// {"somekey":{"nestedKey":"hello"}}
```

## Roadmap
- ~~Test suite~~
- Type checking for dev input
- optionally return an object
- safe mode (try ... catch)
- Chopping array of nulls

## Credits
[Robert Jefe Lindstaedt](https://github.com/eljefedelrodeodeljefe/)

## License
MIT
