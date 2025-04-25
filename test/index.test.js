const getNpmVersion = require('../index');
const { execSync } = require('child_process');

jest.mock('child_process', () => ({ execSync: jest.fn() }));

describe('getNpmVersion', () => {
    beforeEach(() => execSync.mockClear());

    test('Should return npm version when command succeeds', () => {
        execSync.mockReturnValue('v22.15.0\n');

        const version = getNpmVersion();

        expect(execSync).toHaveBeenCalledWith('npm --v', { encoding: 'utf-8' });
        expect(version).toBe('v22.15.0');
    });

    test('Should handle npm version with "v" prefix', () => {
        execSync.mockReturnValue('16.0.0');
        const version = getNpmVersion();
        expect(version).toBe('16.0.0');
    });

    test('Should handle npm version without "v" prefix', () => {
        execSync.mockReturnValue('16.0.0\n');
        const version = getNpmVersion();
        expect(version).toBe('16.0.0');
    });

    test('Should handle npm version with pre-release tag', () => {
        execSync.mockReturnValue('16.0.0-rc.1\n');
        const version = getNpmVersion();
        expect(version).toBe('16.0.0-rc.1');
    });

    test('Should handle npm version with leading/trailing whitespace', () => {
        execSync.mockReturnValue('  16.0.0  \n');
        const version = getNpmVersion();
        expect(version).toBe('16.0.0');
    });

    test('Should handle npm version with newline only response', () => {
        execSync.mockReturnValue('\n');
        const version = getNpmVersion();
        expect(version).toBe('');
    });

    test('Should return null when command fails', () => {
        execSync.mockImplementation(() => {
            throw new Error('Command failed');
        });

        const version = getNpmVersion();

        expect(execSync).toHaveBeenCalledWith('npm --v', { encoding: 'utf-8' });
        expect(version).toBeNull();
    });

    test('Should return null when npm command is not found', () => {
        execSync.mockImplementation(() => {
            throw new Error('Command not found: npm');
        });

        const version = getNpmVersion();
        expect(version).toBeNull();
    });
});
