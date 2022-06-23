# eslint-config-magenta

This shared ESLint config for TypeScript + Node.js is a strict, opinionated set of rules enforcing best practices.

[![NPM Version](https://img.shields.io/npm/v/eslint-config-magenta)](https://www.npmjs.com/package/eslint-config-magenta) ![License](https://img.shields.io/npm/l/eslint-config-magenta) ![Supported ESLint Versions](https://img.shields.io/npm/dependency-version/eslint-config-magenta/peer/eslint) ![Supported TypeScript Versions](https://img.shields.io/npm/dependency-version/eslint-config-magenta/peer/typescript) ![Unit Test Results](https://github.com/doinkythederp/eslint-config-magenta/actions/workflows/tests.yml/badge.svg)

eslint-config-magenta helps you…

- :rocket: …write readable code with enforced complexity limits and consistent style.
- :pencil: …avoid common pitfalls like dynamic `delete` and unguarded `for…in` loops.
- :construction: …remove debugging artifacts like `console.log` and `FIXME` comments before you commit.
- :mag: …discover ways to optimize your code for type safety and speed.

## Installation

This package has several peer dependencies that must be present for it to work properly.

- `eslint` (linter)
- `@typescript-eslint/`
  - `parser` (typescript parser for ESLint)
  - `eslint-plugin` (linter rules for ESLint)
- `typescript` (type checker)
- `eslint-plugin-unicorn`
- `eslint-plugin-node`
- `eslint-plugin-deprecation`

Use your favorite package manager to install. If your package manager does not install peer dependencies automatically (default behavior with pnpm and yarn), you can copy one of these commands to install everything at once.

```sh
pnpm add -D eslint-config-magenta eslint-plugin-deprecation eslint-plugin-unicorn eslint-plugin-node @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
# or
yarn add -D eslint-config-magenta eslint-plugin-deprecation eslint-plugin-unicorn eslint-plugin-node @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
# or
npm i -D eslint-config-magenta eslint-plugin-deprecation eslint-plugin-unicorn eslint-plugin-node @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
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

### Can I disable all of the node/unicorn rules?

Yes. You can use rulesets independently by extending `magenta/base`, `magenta/unicorn`, and/or `magenta/node` in your ESLint config. For example, to only enforce the base rules and `eslint-plugin-unicorn` rules:

```jsonc
{
    "extends": ["magenta/base", "magenta/unicorn"],
    // ...
}
```

If you're not using the configuration for one of `eslint-plugin-unicorn` or `eslint-plugin-node`, you can uninstall that plugin.

### Why can't I import Node.js core modules (fs, util, child_process, etc)?

This linter config prefers using the `node:` protocol to import core modules. Consider adding this prefix (e.g. `node:fs`, `node:assert/strict`) or disabling `@typescript-eslint/no-restricted-imports`.
