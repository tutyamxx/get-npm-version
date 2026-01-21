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
declare function getNpmVersion(): string | null;

export = getNpmVersion;
