// @ts-check
// import { fixupConfigRules } from "@eslint/compat";
import astroParser from 'astro-eslint-parser';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import js from '@eslint/js';
// import preact from 'eslint-config-preact';
import jsxA11y from 'eslint-plugin-jsx-a11y';

import tseslint from 'typescript-eslint';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...eslintPluginAstro.configs.recommended,
  jsxA11y.flatConfigs.strict,
  // ...fixupConfigRules(jsxA11y["recommended"]),
  // ...fixupConfigRules(preact['recommended']),
  // ...preact.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tseslint.parser,
    },
  },

  // {
  //   files: ["**/*.tsx"],
  //   plugins: {
  //     "jsx-a11y": jsxA11y,
  //   },
  //   languageOptions: {
  //     parserOptions: {
  //       ecmaFeatures: {
  //         jsx: true,
  //       },
  //     },
  //   },

  //   rules: {
  //     "jsx-a11y/alt-text": "error",
  //   },
  // },

  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        processor: eslintPluginAstro.processors,
      },
    },
  },

  {
    files: ['**/*.js', '**/*.mjs'],
    ...tseslint.configs.disableTypeChecked,
  },

  {
    linterOptions: {
      reportUnusedDisableDirectives: 'warn',
    },
  },

  {
    ignores: [
      '**/_*.*',
      '**/temp.js',
      'config/*',
      'pnpm-lock.yaml',
      'types.generated.d.ts',
      '.astro/',
      'dist/',
      'my-custom-cache-directory',
      'src/env.d.ts',
    ],
  },
  eslintConfigPrettier,
);
