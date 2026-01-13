/**
 *  get-npm-version - Returns the NPM version installed in your environment
 *  @version: v1.1.0
 *  @link: https://github.com/tutyamxx/get-npm-version
 *  @license: MIT
 **/

const execSync = require('child_process').execSync;

module.exports = () => {
  try {
    const result = execSync('npm --v', { encoding: 'utf-8' });
    return result ? result.trim() : '';
  } catch (error) {
    return null;
  }
};
