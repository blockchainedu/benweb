module.exports = {
    "parser": "babel-eslint",
    "ecmaFeatures": {
        "classes": true
    },
    'extends': 'airbnb',
    'rules': {
        'arrow-body-style': ['off'],
        'arrow-parens': ['off'],
        'comma-dangle': ['off'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'consistent-return': ['off'],
        'default-case': 'off',
        'eol-last': ['off'],
        'eqeqeq': 'off',
        'func-names': ['off'],
        'global-require': ['off'],
        'import/prefer-default-export': ['off'],
        'import/no-extraneous-dependencies': 'off',
        'class-methods-use-this': ['off'],
        'indent': ['error', 4],
	'jsx-a11y/img-has-alt': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'keyword-spacing': ['error', { 'after': true }],
        'linebreak-style': ['error', 'unix'],
        'max-len': 'off',
        'new-cap': 'off',
        'no-bitwise': 'off',
        'no-cond-assign': 'off',
        'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
        'no-class-assign': 'off',
        'no-else-return': 'off',
        'no-path-concat': 'off',
        'no-param-reassign': 'off',
        'no-plusplus': 'off',
        'no-return-assign': 'off',
        'no-self-compare': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'no-unreachable': 'off',
        'no-useless-escape': 'off',
        'no-use-before-define': 'off',
        'no-useless-constructor': 'off',
        'no-throw-literal': 'off',
        'no-trailing-spaces': 'off',
        'no-var': ['off'],
        'object-shorthand': 'off',
        'padded-blocks': 'off',
        'prefer-arrow-callback': 'off',
        'prefer-template': 'off',
        'quotes': ['error', 'single'],
        'react/jsx-filename-extension': ['off'],
        'react/jsx-space-before-closing': ['off'],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/self-closing-comp': ['warn'],
        'react/prop-types': 'off',
        'semi': 'off',
        'space-before-function-paren': ['off'],
        'spaced-comment': ['off'],
        'strict': ['off'],
        'vars-on-top': ['off'],
        'wrap-iife': ['off']
    }
};
