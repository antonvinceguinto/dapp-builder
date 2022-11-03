module.exports = {
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'max-len': ['error', { code: 100 }],
    'no-unused-vars': 1,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'no-console': 1,
    'linebreak-style': 0,
    'jsx-quotes': [2, 'prefer-single'],
    'import/no-unresolved': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        '': 'never',
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.ts'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
  },
  settings: {
    react: {
      version: '999.999.999',
    },
  },
};
