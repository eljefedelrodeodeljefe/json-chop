'use strict'
var test = require('tape')

test('Regression [1] options not available', (t) => {
  t.plan(2)
  var chop = require('../')
  var obj = {
    somekey: {
      nestedKey: 'hello',
      _id: 12234555,
      version: null,
      __v: '0.8.0',
      oneHunrdred: 100
    }
  }

  var options_1 = {
    valueBlacklist: ['', 100, null] // empty arrays and undefied are chopped of implicitly
  }

  var res = chop.chop(obj, options_1)
  t.deepEquals(res, JSON.stringify({somekey: {nestedKey: 'hello',_id: 12234555,  __v: '0.8.0'}}))

  var options_2 = {
    keyBlacklist: ['__v', '_id'],
  }
  var res = chop.chop(obj, options_2)
  t.deepEquals(res, JSON.stringify({somekey: {nestedKey: 'hello',version: null,  oneHunrdred: 100}}))
})
