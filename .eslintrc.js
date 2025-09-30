module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 2020, sourceType: 'module' },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    'prettier/prettier': 'warn',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        "selector": "variableLike", // biến, hằng, hàm
        "format": ["camelCase"]
      },
      {
        "selector": "typeLike", // class, interface, type alias
        "format": ["PascalCase"]
      },
      {
        "selector": "enumMember",
        "format": ["UPPER_CASE"]
      }
    ]
  },
};