'use strict'
const test = require('tape')

test('init test', function (t) {
  t.plan(3)
  let chop = require('../')
  t.ok(chop, 'chop could be required')

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
    t.deepEquals(res, JSON.stringify({somekey: {nestedKey: 'hello'}}))
  })

  let res = chop.chop(obj, options)
  t.deepEquals(res, JSON.stringify({somekey: {nestedKey: 'hello'}}))
})
