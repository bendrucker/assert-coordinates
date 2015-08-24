'use strict'

var test = require('tape')
var assertCoordinates = require('./')

test(function (t) {
  t.throws(assertCoordinates)
  t.throws(assertCoordinates.bind(null, {}))
  t.throws(assertCoordinates.bind(null, {x: '1', y: '2'}))
  t.doesNotThrow(assertCoordinates.bind(null, {x: 1, y: 2}))
  t.end()
})
