
exports.chop = function chop (obj, options, cb) {
  var res = JSON.stringify(obj, function chopFilter (key, value) {
    if (options.keyBlacklist && // bail if not present
        options.keyBlacklist.indexOf(key) > -1) {
      return undefined
    }

    if (options.valueBlacklist && // bail if not present
        (options.valueBlacklist.indexOf(value) > -1 ||
         value === undefined ||
         value.length === 0)) {
      return undefined
    }
    return value
  })

  if (!cb || (typeof cb !== 'function')) {
    return res
  }

  return cb(res)
}
