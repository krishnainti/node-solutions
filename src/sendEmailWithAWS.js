const AWS = require("aws-sdk");

const SES_CONFIG = {
  accessKeyId: "accessKeyId",
  secretAccessKey: "secretAccessKey",
  region: "ap-northeast-1",
};

const AWS_SES = new AWS.SES(SES_CONFIG);

let params = {
  Source: "ivkrish143007@gmail.com",
  Destination: {
    ToAddresses: ["ivkrish143007@gmail.com"],
  },
  ReplyToAddresses: [],
  Message: {
    Body: {
      Html: {
        Charset: "UTF-8",
        Data: "<h1>This is the body of my email!</h1>",
      },
    },
    Subject: {
      Charset: "UTF-8",
      Data: `Hello, krishna!`,
    },
  },
};

AWS_SES.sendEmail(params).promise();
