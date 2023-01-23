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
         * ${code}
         */
        ${key}: ${code},
        /** 
         * ${code}
         */
        ${key}_CODE: ${code}, 
        /** 
         * ${message}
         */
        ${key}_TEXT: "${message}",
        /** 
         * ${code}
         */
        ${key}_${code}: ${code},
        /** 
         * ${code}
         */
        ${key}_${code}_CODE: ${code},
        /** 
         * ${message}
         */
        ${key}_${code}_TEXT: "${message}",
    `;

    // Generate table for the readme on the console
    // console.log(`|${key} | ${code}|`);
    // console.log(`|${key}_CODE | ${code}|`);
    // console.log(`|${key}_TEXT | ${message}|`);
    // console.log(`|${key}_${code}| ${code}|`);
    // console.log(`|${key}_${code}_CODE| ${code}|`);
    // console.log(`|${key}_${code}_TEXT| ${message}|`);
}

content = `
/* Automatically generated via build script. */
module.exports = {
${content}
};
`;

fs.writeFileSync(path.join(__dirname, "..", "index.js"), content);
