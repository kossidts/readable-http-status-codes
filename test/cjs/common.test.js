const http = require("node:http");

const { sanitize_code } = require("../../scripts/utils.js");
const status_codes = require("../../index.js");

describe("Import default commonjs and works as expected", () => {
    it("is an object", () => {
        expect(Object.prototype.toString.call({})).toBe("[object Object]");
    });
});

let cases = [];
for (const [code, message] of Object.entries(http.STATUS_CODES)) {
    const key = sanitize_code(message);

    cases.push(
        { key, expected: +code },
        { key: `${key}_CODE`, expected: +code },
        { key: `${key}_${code}`, expected: +code },
        { key: `${key}_${code}_CODE`, expected: +code },
        { key: `${key}_TEXT`, expected: message },
        { key: `${key}_${code}_TEXT`, expected: message }
    );
}

describe.each(cases)("status_codes.$key", ({ key, expected }) => {
    it(`returns ${expected}`, () => {
        expect(status_codes[key]).toBe(expected);
    });
});
