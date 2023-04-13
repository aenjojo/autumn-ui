/** @type {import('jest').Config} */
module.exports = {
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'^#components': '<rootDir>/src/components',
		'\\.css$': '<rootDir>/src/tests/style.mock.js',
	},
};