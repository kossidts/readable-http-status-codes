const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const { sanitize_code } = require("./utils.js");

let content = "";

for (let [code, message] of Object.entries(http.STATUS_CODES)) {
    const key = sanitize_code(message);
    code = +code;

    content += `
        /** 
         * Integer: ${code}
         */
        ${key}: ${code},
        /** 
         * Integer: ${code}
         */
        ${key}_CODE: ${code}, 
        /** 
         * String: ${message}
         */
        ${key}_TEXT: "${message}",
        /** 
         * Integer: ${code}
         */
        ${key}_${code}: ${code},
        /** 
         * Integer: ${code}
         */
        ${key}_${code}_CODE: ${code},
        /** 
         * String: ${message}
         */
        ${key}_${code}_TEXT: "${message}",
    `;
}

content = `
/* Automatically generated via build script. */
module.exports = {
${content}
};
`;

fs.writeFileSync(path.join(__dirname, "..", "index.js"), content);
