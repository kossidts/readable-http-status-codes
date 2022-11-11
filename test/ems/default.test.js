import http from "node:http";

import randomName from "../../wrapper.mjs";

describe("Import default module and works as expected", () => {
    it("is an object", () => {
        expect(Object.prototype.toString.call({})).toBe("[object Object]");
    });

    it("returns valid http code and message.", async () => {
        expect(randomName.OK).toBe(200);
        expect(randomName.OK_200).toBe(200);
        expect(randomName.OK_CODE).toBe(200);
        expect(randomName.OK_200_CODE).toBe(200);

        expect(randomName.OK_TEXT).toBe(http.STATUS_CODES["200"]);
        expect(randomName.OK_200_TEXT).toBe(http.STATUS_CODES["200"]);
    });
});
