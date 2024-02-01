
const Ajv = require('ajv').default;

const schema = {
    type:"object",
    properties:
    {
        title: {
            type: "string",
            maxLength: 50,
        },
        imgsrc: {
            type: "string",
        },
        price: {
            type: "number",
            minimum:0,
        },
        description: {
            type: "string",
            maxLength: 1000,
        },
        details: {
            type: "string",
            maxLength: 1000,
        },
        productType: {
            type: "string",
            maxLength: 50,
        },
        gender: {
            type: "string",
            maxLength: 10,
        },
    },
    "required":["title","price","imgsrc","gender","producttype"],   // required means must be sent
}


const ajv=new Ajv()
module.exports=ajv.compile(schema)