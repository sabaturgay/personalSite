module.exports = {
	extends: ["airbnb", ],
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
				jsx: true
		},
		sourceType: "module"
	},
	env: {
		browser: true,
		es6: true
	},
	rules: {
		'linebreak-style': [
			'error',
			'unix',
		],
		quotes: [
			'error',
			'single',
		],
		semi: [
			'error',
			'never',
		],
		'import/prefer-default-export': 0,
		'consistent-return': 0,
		"no-return-await": 0,
		"react/jsx-filename-extension": 0,
		"no-unused-vars": ["error", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^React" }],
		"class-methods-use-this": ["error", { "exceptMethods": ["render", "componentDidMount"] }],
		"no-underscore-dangle": 0,
		"react/prefer-stateless-function": 0,
		"jsx-a11y/label-has-for": 0,
		"jsx-a11y/label-has-associated-control": 0,
		"react/forbid-prop-types": 0,
		"react/prop-types": 0,
		"react/jsx-max-props-per-line": [1, { "maximum": 1}],
		"no-loop-func": 0,
		"react/sort-comp": [2, {
			order: [
				'static-methods',
				'lifecycle',
				'everything-else',
				'render',
				'/^_.+$/'
			],
			groups: {
				rendering: [
					'/^render.+$/',
					'render'
				]
			}
		}],
		"no-unused-expressions": 0,
		"no-use-before-define": 0,
		"import/no-extraneous-dependencies": 0
	},
	
};