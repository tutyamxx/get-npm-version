/**
 *  get-npm-version - Returns the NPM version installed in your environment
 *  @version: v1.0.1
 *  @link: https://github.com/tutyamxx/get-npm-version
 *  @license: MIT
 **/

const execSync = require('child_process').execSync;

module.exports = () => (execSync('npm --v', { encoding: 'utf-8' }))?.toString() || null;
