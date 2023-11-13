module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
      'jest/globals': true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'unused-imports', 'jest'],
    ignorePatterns: [
    ],
    rules: {
      'no-console': 'off',
      // prop types are dead! use TS
      'react/prop-types': 'off',
      // shouldn't need them React 17 and beyond
      // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      // TODO turn it off once we fix the type error at the API end
      '@typescript-eslint/ban-ts-comment': 'off',
    },
  };
  