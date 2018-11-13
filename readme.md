# assert-coordinates [![Build Status](https://travis-ci.org/bendrucker/assert-coordinates.svg?branch=master)](https://travis-ci.org/bendrucker/assert-coordinates) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/assert-coordinates.svg)](https://greenkeeper.io/)

> Assert that an object has x/y coordinates


## Install

```
$ npm install --save assert-coordinates
```


## Usage

```js
var assertCoordinates = require('assert-coordinates')

assertCoordinates({x: 0, y: 2})
//=> noop

assertCoordinates({})
//=> throw new TypeError(...)
```

## API

#### `assertCoordinates(obj)` -> `undefined`

##### obj

*Required*  
Type: `object`

An object to check for x/y number coordinates.


## License

MIT © [Ben Drucker](http://bendrucker.me)
