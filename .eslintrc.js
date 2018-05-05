module.exports = {
	root: true,
	extends: [
		'react-app',
		'prettier',
		'prettier/react',
// 		'plugin:jsx-a11y/recommended',
	],
	parser: 'babel-eslint',
	parserOptions: {
		'ecmaVersion': 8,
		'experimantalObjectRestSpread': true,
		'impliedStrict': true,
		'classes': true
	},
	env: {
		browser: true,
	},
	plugins: [
// 		'jsx-a11y',
		'prettier'
	],
	rules: {
		'no-console': 0,
		'func-names': 0,
		'space-before-function-paren': 0,
		'comma-dangle': 0,
		'max-len': 0,
		'import/extensions': 0,
		'no-underscore-dangle': 0,
		'consistent-return': 0,
		'react/display-name': 1,
		'react/react-in-jsx-scope': 0,
		'react/forbid-prop-types': 0,
		'react/no-unescaped-entities': 0,
		'prettier/prettier': [
			'error',
			{
				'trailingComma': 'es5',
				'singleQuote': true,
				'printWidth': 120,
				'jsxBracketSameLine': true,
				'useTabs': true,
				'tabWidth': 4,
			}
		],
		'jsx-a11y/accessible-emoji': 0,
		'jsx-a11y/href-no-hash': 'off',
		'jsx-a11y/anchor-is-valid': [
			'warn',
			{
				'aspects': [
					'invalidHref'
				]
			}
		],
		'jsx-a11y/anchor-has-content': 0, // i18n-calypso translate triggers false failures
		'camelcase': 0, // REST API objects include underscores
		'max-len': [ 2, { code: 140 } ],
		'no-restricted-imports': [ 2, 'lib/sites-list', 'lib/mixins/data-observe' ],
		'no-restricted-modules': [ 2, 'lib/sites-list', 'lib/mixins/data-observe' ],
		'no-unused-expressions': 0, // Allows Chai `expect` expressions
		'react/jsx-filename-extension': [
			1,
			{
				extensions: [
					'.js',
					'.jsx'
				]
			}
		]
	},
}
