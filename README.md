# get-npm-version

<p align="center"><a href="https://nodei.co/npm/get-npm-version/"><img src="https://nodei.co/npm/get-npm-version.png"></a></a></p>

* Simple NPM package that returns installed NPM version or `null`.
* ♻️ Works seamlessly with `CommonJS`, `ESM` and `TypeScript`

# Install via [NPM](https://www.npmjs.com/package/get-npm-version)

`$ npm i get-npm-version`

# Usage

- Returns a `String` with the currently installed NPM version, or `null` on error.

## CommonJS
```javascript
const getNpmVersion = require('get-npm-version');

console.log(`Your installed NPM Version is: ${getNpmVersion()}`);
```

## ESM
```javascript
import getNpmVersion from 'get-npm-version';

console.log(`Your installed NPM Version is: ${getNpmVersion()}`);
```

## TypeScript
```javascript
import getNpmVersion from 'get-npm-version';

const npmVersion: string = getNpmVersion() ?? 'unknown';
console.log(`Your installed NPM Version is: ${npmVersion}`);
```
