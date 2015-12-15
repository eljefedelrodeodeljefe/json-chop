
exports.chop = function chop (obj, options, cb) {
  var res = JSON.stringify(obj, function chopFilter (key, value) {
    if (options.keyBlacklist.indexOf(key) > -1) {
      return undefined
    }

    if (options.valueBlacklist.indexOf(value) > -1 || value === undefined || value.length === 0) {
      return undefined
    }
    return value
  })

  if (!cb || (typeof cb !== 'function')) {
    return res
  }

  return cb(res)
}
