'use strict'

var isObject = require('is-obj')

module.exports = function assertCoordinates (obj) {
  var valid = isObject(obj) && isNumber(obj.x) && isNumber(obj.y)
  if (!valid) {
    throw new TypeError('coordinates {x, y} are required')
  }
}

function isNumber (value) {
  return typeof value === 'number'
}
