# get-npm-version

<p align="center"><a href="https://nodei.co/npm/get-npm-version/"><img src="https://nodei.co/npm/get-npm-version.png"></a></a></p>

* Simple NPM package that returns installed NPM version or `null`.

# Install via [NPM](https://www.npmjs.com/package/get-npm-version)

`$ npm i get-npm-version`

# Usage

- Returns a `String` with the currently installed NPM version, or `null` on error.

```javascript
const getNpmVersion = require('get-npm-version');

console.log('Your installed NPM Version is: ' + getNpmVersion());
```
