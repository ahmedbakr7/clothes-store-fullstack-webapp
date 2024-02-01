const Ajv = require("ajv").default;

const schema = {
    type: "object",
    properties: {
        username: {
            type: "string",
            minLength: 3,
            maxLength: 10,
        },
        email: {
            type: "string",
            format: "email",
        },
        password: {
            type: "string",
            minLength: 4,
        },
    },
    required: ["username", "email", "password"], // required means must be sent
};

const addFormats = require("ajv-formats")



const ajv = new Ajv();
addFormats(ajv)
module.exports = ajv.compile(schema);
