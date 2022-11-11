const sanitize_code = message => {
    return message
        .replace("'", "")
        .replace(/\-|\s+/g, "_")
        .toUpperCase();
};

module.exports = {
    sanitize_code,
};
