/**
 *  get-npm-version - Returns the NPM version installed in your environment
 *  @version: v1.1.1
 *  @link: https://github.com/tutyamxx/get-npm-version
 *  @license: MIT
 **/

const { execSync } = require('child_process');

/**
 * Returns the currently installed npm version.
 * If npm is not installed or an error occurs, returns `null`.
 *
 * @returns {string|null} The npm version (e.g., "9.8.1") or `null` if not available.
 *
 * @example
 * const version = await getNpmVersion();
 * console.log(version); // "9.8.1"
 */
const getNpmVersion = () => {
    try {
        const result = execSync('npm --v', { encoding: 'utf-8' });
        return result ? result.trim() : '';
    } catch (error) {
        return null;
    }
};

// --| CommonJS export
module.exports = getNpmVersion;

// --| ESM default export for `import` statements
module.exports.default = getNpmVersion;
