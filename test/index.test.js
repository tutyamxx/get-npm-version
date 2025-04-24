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

    test('Should return npm version when command succeeds', () => {
        execSync.mockReturnValue('22.15.0');

        const version = getNpmVersion();

        expect(execSync).toHaveBeenCalledWith('npm --v', { encoding: 'utf-8' });
        expect(version).toBe('22.15.0');
    });

    test('Should return null when command fails', () => {
        execSync.mockImplementation(() => {
            throw new Error('Command failed');
        });

        const version = getNpmVersion();

        expect(execSync).toHaveBeenCalledWith('npm --v', { encoding: 'utf-8' });
        expect(version).toBeNull();
    });

    test('Should handle empty response', () => {
        execSync.mockReturnValue('');

        const version = getNpmVersion();

        expect(execSync).toHaveBeenCalledWith('npm --v', { encoding: 'utf-8' });
        expect(version).toBe('');
    });
})
