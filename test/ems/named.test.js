import http from "node:http";

import { readable_http_status_codes } from "../../wrapper.mjs";

describe("Import named module and works as expected", () => {
    it("is an object", () => {
        expect(Object.prototype.toString.call({})).toBe("[object Object]");
    });

    it("returns valid http code and message.", async () => {
        expect(readable_http_status_codes.OK).toBe(200);
        expect(readable_http_status_codes.OK_200).toBe(200);
        expect(readable_http_status_codes.OK_CODE).toBe(200);
        expect(readable_http_status_codes.OK_200_CODE).toBe(200);

        expect(readable_http_status_codes.OK_TEXT).toBe(http.STATUS_CODES["200"]);
        expect(readable_http_status_codes.OK_200_TEXT).toBe(http.STATUS_CODES["200"]);
    });
});
