import { promisify } from 'util'
import { exec } from 'child_process';
import { expect } from '@jest/globals';
import { jest } from '@jest/globals';

const asyncExec = promisify(exec);

async function runCommand(command) {
  const out = await asyncExec(command)
  return out.stdout.replace(/(\r\n|\n|\r)/gm, "") // remove line breaks
}

describe("1. File", () => {
    test("file `stars.js` exists", async () => {
        const stars = await import('../stars.js')
    })
});

describe("2. Function", () => {
    test("file `stars.js` has default export", async () => {
        const stars = await import('../stars.js')
        expect(stars.default).toBeDefined()
    })

    test("file `stars.js` exports function", async () => {
        const stars = await import('../stars.js')
        expect(typeof stars.default).toBe('function')
    })

    test("exported function takes 2 arguments and prints output based on arguments", async () => {
        const stars = await import('../stars.js')
        const randNum = Math.floor(Math.random() * 20) + 1
        const testStr = 'hello'
        console.log = jest.fn();
        stars.default(randNum, testStr)

        const expectedString = `${'*'.repeat(randNum)}${testStr}${'*'.repeat(randNum)}`;
        expect(console.log.mock.calls.join('').replace(/(\r\n|\n|\r)/gm,"")).toContain(expectedString);
    })
});

describe("3. Import", () => {
    test("file `solution.js` exists", async () => {
        const solution = await import('../solution.js')
    })
});

describe("4. Output", () => {
    test("program creates correct output based on passed arguments", async () => {
        const randNum = Math.floor(Math.random() * 20) + 1
        const testStr = 'hello'
        const result = await runCommand(`node solution.js ${randNum} ${testStr}`)
        const cleanedResult = result.replace(/(\r\n|\n|\r)/gm,"");// remove line breaks

        expect(cleanedResult).toBe(`${'*'.repeat(randNum)}${testStr}${'*'.repeat(randNum)}`)
    })
});