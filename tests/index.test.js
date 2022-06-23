/// <reference types="jest" />

const { readdirSync } = require('node:fs');
const { readFile } = require('node:fs/promises');
const path = require('node:path');
const { ESLint } = require('eslint');

const passingDir = path.join(__dirname, 'passing');
const failingDir = path.join(__dirname, 'failing');
const passing = readdirSync(passingDir);
const failing = readdirSync(failingDir);

const eslint = new ESLint({
    overrideConfig: {
        extends: path.resolve(__dirname, '../.eslintrc.json'),
        parserOptions: {
            project: path.join(__dirname, 'tsconfig.json'),
        },
    },
});

/**
 * @param {string} file
 * @param {ESLint.LintResult} diagnostics
 */
function reportErrors(file, diagnostics) {
    const message = diagnostics.messages
        .reduce(
            (message, diagnostic) => [
                ...message,
                ` ${diagnostic.line}:${diagnostic.column} (${
                    diagnostic.severity === 1 ? 'warn' : 'error'
                }) ${diagnostic.message} (${diagnostic.ruleId})`,
            ],
            [`${file}:`]
        )
        .join('\n');
    console.error(message);
}

/**
 * @param {string[]} files
 * @param {boolean} shouldPass
 */
function runTests(files, filesRoot, shouldPass) {
    for (const file of files) {
        test(file, async () => {
            const [result] = await eslint.lintText(
                await readFile(path.join(filesRoot, file), 'utf-8'),
                {
                    filePath: path.join(filesRoot, file),
                }
            );

            if (shouldPass && result.messages.length)
                reportErrors(file, result);

            if (shouldPass) expect(result.messages.length).toBe(0);
            else expect(result.messages.length).not.toBe(0);
        });
    }
}

describe('passing', () => {
    runTests(passing, passingDir, true);
});

describe('failing', () => {
    runTests(failing, failingDir, false);
});
