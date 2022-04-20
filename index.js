const http = require("http");

const STATUS_CODES = {};

for (const [code, message] of Object.entries(http.STATUS_CODES)) {
    let key = message
        .replace("'", "")
        .replace(/\-|\s+/g, "_")
        .toUpperCase();

    STATUS_CODES[key] = parseInt(code);
}

module.exports = STATUS_CODES;
