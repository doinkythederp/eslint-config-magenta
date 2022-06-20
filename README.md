# eslint-config-magenta

This shared ESLint config for TypeScript + Node.js is a strict, opinionated set of rules enforcing best practices.

[![NPM Version](https://img.shields.io/npm/v/eslint-config-magenta?style=flat-square)](https://www.npmjs.com/package/eslint-config-magenta) ![License](https://img.shields.io/npm/l/eslint-config-magenta) ![Supported ESLint Versions](https://img.shields.io/npm/dependency-version/eslint-config-magenta/peer/eslint) ![Supported TypeScript Versions](https://img.shields.io/npm/dependency-version/eslint-config-magenta/peer/typescript) ![Unit Test Results](https://github.com/doinkythederp/eslint-config-magenta/actions/workflows/tests.yml/badge.svg)

## Installation

This package has several peer dependencies that must be present for it to work properly.

- `eslint` (linter)
- `@typescript-eslint/`
  - `parser` (typescript parser for ESLint)
  - `eslint-plugin` (linter rules for ESLint)
- `typescript` (type checker)

Use your favorite package manager to install. If your package manager does not install peer dependencies automatically (default behavior with pnpm and yarn), you can copy one of these commands to install everything at once.

```sh
pnpm add -D eslint-config-magenta @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
# or
yarn add -D eslint-config-magenta @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
# or
npm i -D eslint-config-magenta @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
```

## Usage

Add one of the following to your ESLint config:

```js
// .eslintrc.cjs
module.exports = {
    extends: ['magenta'],
    parserOptions: {
        project: './tsconfig.json'
    }
};
```

```jsonc
// .eslintrc.json
{
    "extends": ["magenta"],
    "parserOptions": {
        "project": "./tsconfig.json"
    }
}
```

```yaml
# .eslintrc.yaml
extends:
    - magenta
parserOptions:
    project: ./tsconfig.json
```
