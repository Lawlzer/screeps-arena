// This file is for removing things we don't want to push, but will use temporarily (temporary imports, empty functions, no console.log, etc)
// This should not be used for general development, but only when pushed.
// This file is automatically ran from the pre-commit hook (husky -> lint-staged)

module.exports = {
	extends: ['./.eslintrc.js'], // Extend the base config
	overrides: [
		// TypeScript
		{
			files: ['**/*.ts', '**/*.tsx', '**/*.json'],
			parser: '@typescript-eslint/parser',
			plugins: [
				'@typescript-eslint',
				'simple-import-sort', // eslint-plugin-simple-import-sort
				'import', // eslint-plugin-import
				'unused-imports', // eslint-plugin-unused-imports
			],
			rules: {
				strict: 2,
				// remove unnecessary imports
				'unused-imports/no-unused-imports': 'error',

				// sort the imports
				'simple-import-sort/imports': 'error',
				'simple-import-sort/exports': 'error',
				'import/first': 'error',
				'import/newline-after-import': 'error',
				'import/no-duplicates': 'error',

				// Empty interface
				'@typescript-eslint/no-empty-interface': 'error',

				// No using functions without code inside them
				'@typescript-eslint/no-empty-function': 'error',

				// // This also removes variables from functions, so we can't use potential generics.
				// 'no-unused-vars': 'error',
				// '@typescript-eslint/no-unused-vars': 'error',

				// Will complain if you use "let" and don't reassign the value.
				'prefer-const': 'error',

				// Empty functions - Useful for "future" functions, or for when dev testing.
				'no-empty': 'error',

				// disallow console.log, but allow other console methods (console.info, console.error, etc)
				'no-console': [
					'error',
					{
						allow: ['info', 'warn', 'error', 'debug', 'trace'],
					},
				],
			},
		},

		// JavaScript
		{
			files: ['**/*.ts', '**/*.tsx', '**/*.json'],
			// parser: '',
			plugins: [
				'simple-import-sort', // eslint-plugin-simple-import-sort
				'import', // eslint-plugin-import
				'unused-imports', // eslint-plugin-unused-imports
			],
			rules: {
				strict: 2,
				// remove unnecessary imports
				'unused-imports/no-unused-imports': 'error',

				// sort any imports (may be useful in ESM files)
				'simple-import-sort/imports': 'error',
				'simple-import-sort/exports': 'error',
				'import/first': 'error',
				'import/newline-after-import': 'error',
				'import/no-duplicates': 'error',

				// Will complain if you use "let" and don't reassign the value.
				'prefer-const': 'error',

				// Empty functions - Useful for "future" functions, or for when dev testing.
				'no-empty': 'error',

				// disallow console.log, but allow other console methods (console.info, console.error, etc)
				'no-console': [
					'error',
					{
						allow: ['info', 'warn', 'error', 'debug', 'trace'],
					},
				],
			},
		},
	],
};
