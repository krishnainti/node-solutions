// create Domain
// const formData = require("form-data");
// const Mailgun = require("mailgun.js");
// const mailgun = new Mailgun(formData);
// const mg = mailgun.client({
//   username: "api",
//   key: "7b31654ec5f4e8cedc6e518f4493889c-ca9eeb88-807398a6",
// });
// mg.messages
//   .create("sandbox593b4dce08b64888950e9aa2382bf3ab.mailgun.org", {
//     from: "Mailgun Sandbox <postmaster@sandbox593b4dce08b64888950e9aa2382bf3ab.mailgun.org>",
//     to: ["ivkrish143007@gmail.com"],
//     subject: "Hello",
//     text: "Testing some Mailgun awesomness!",
//   })
//   .then((msg) => console.log(msg)) // logs response data
//   .catch((err) => console.log(err)); // logs any error`;

// send email
const mailgun = require("mailgun-js");

const DOMAIN = "sandbox593b4dce08b64888950e9aa2382bf3ab.mailgun.org";
const API_KEY = "key";

const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN });

const data = {
  from: "venkatakrishnainti@gmail.com",
  to: "ivkrish143007@gmail.com",
  subject: "Hello",
  html: "<h1>Testing some Mailgun awesomness!</h1>",
};

mg.messages().send(data, function (error, body) {
  console.log(body);
});
