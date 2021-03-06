module.exports = {
  rules: {
    'array-type': false,
    'arrow-parens': false,
    deprecation: {
      severity: 'warning'
    },
    'import-blacklist': [true, 'rxjs/Rx'],
    'interface-name': false,
    'max-classes-per-file': false,
    'max-line-length': [
      true,
      {
        limit: 180,
        "check-strings": true,
        "check-regex": false,
        'ignore-pattern': '^import |^export {(.*?)}'
      }
    ],
    'member-access': [true, 'check-accessor', 'check-parameter-property'],
    'member-ordering': [true, {
      order: [
        'public-static-field',
        'protected-static-field',
        'private-static-field',
        'public-instance-field',
        'protected-instance-field',
        'private-instance-field',
        'public-constructor',
        'protected-constructor',
        'private-constructor',
        'public-static-method',
        'protected-static-method',
        'private-static-method',
        'public-instance-method',
        'protected-instance-method',
        'private-instance-method'
      ],
      alphabetize: true
    }],
    'no-consecutive-blank-lines': true,
    'no-console': {
      severity: 'warning',
      options: ['debug', 'info', 'time', 'timeEnd', 'trace']
    },
    'no-empty': false,
    'no-inferrable-types': false,
    'no-non-null-assertion': true,
    'no-redundant-jsdoc': true,
    'no-switch-case-fall-through': true,
    'no-var-requires': false,
    'object-literal-key-quotes': [true, 'as-needed'],
    'object-literal-sort-keys': true,
    'ordered-imports': true,
    quotemark: [true, 'single'],
    'trailing-comma': false,
    'variable-name': {
      options: [
        'ban-keywords',
        'check-format',
        'allow-leading-underscore',
        'allow-pascal-case',
        'require-const-for-all-caps'
      ]
    },
    whitespace: [true, 'check-module'],
    ban: [
      true,
      {
        name: 'eval',
        message: 'This is a joke right? Remember eval is evil'
      },
      '$'
    ],
    'class-name': true
  },
};
