const Ajv = require("ajv").default;

const schema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 3,
            maxLength: 10,
        },
        email: {
            type: "string",
            format: "email",
        },
        birthDate: {
            type: "string",
            maxLength: 10,
        },
        cv: {
            type: "string",
            minLength: 4,
        },
        job: {
            type: "string",
            minLength: 2,
        },
    },
    required: ["name", "email", "job"], // required means must be sent
};

const addFormats = require("ajv-formats");

const ajv = new Ajv();
addFormats(ajv);
module.exports = ajv.compile(schema);
