# eslint-config-magenta

This shared ESLint config for TypeScript + Node.js is a strict, opinionated set of rules enforcing best practices.

[![NPM Version](https://img.shields.io/npm/v/eslint-config-magenta)](https://www.npmjs.com/package/eslint-config-magenta) ![License](https://img.shields.io/npm/l/eslint-config-magenta) ![Supported ESLint Versions](https://img.shields.io/npm/dependency-version/eslint-config-magenta/peer/eslint) ![Supported TypeScript Versions](https://img.shields.io/npm/dependency-version/eslint-config-magenta/peer/typescript) ![Unit Test Results](https://github.com/doinkythederp/eslint-config-magenta/actions/workflows/tests.yml/badge.svg)

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

### Why can't I import Node.js core modules (fs, util, child_process, etc)?

This linter config prefers using the `node:` protocol to import core modules. Consider adding this prefix (e.g. `node:fs`, `node:assert/strict`) or disabling `@typescript-eslint/no-restricted-imports`.

### Why can't I use complex `if` statements (if + else if + else)?

Code with a high amount of ciclomatic complexity can be hard to understand. Consider turning your complex `if` statement into guard clauses:

```ts
// Fails
function a(x: number) {
    if (true) {
        return x;
    } else if (false) {
        return x + 1;
    } else {
        return 4; // 3rd path
    }
}

// Passes
function a(x: number) {
    if (true) return x;
    if (false) return x + 1;
    return 4;
}
```

Check out this video if you want more information: <https://www.youtube.com/watch?v=EumXak7TyQ0>.
