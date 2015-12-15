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
