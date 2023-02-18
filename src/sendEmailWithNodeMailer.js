const nodemailer = require("nodemailer");

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "user",
    pass: "pass",
  },
});

const message = {
  from: "ivkrish143007@gmail.com",
  to: "ivkrish143007@gmail.com",
  subject: "New Enquiry",
  html: getBody({
    email: "123@gmail.com",
    name: "Krishna",
    subject: "123",
    message: "ok ok",
  }),
};

transport.sendMail(message, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log(info);
  }
});

const getBody = (data) => {
  return `<div style="
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;">
  
    <h3> New request received from portfolio </h3>
  
    <div>
      <p>Name : ${data.name || "-"}</p>
      <p>Email : ${data.email || "-"}</p>
      <p>Subject : ${data.subject || "-"} </p>
      <p>Message : ${data.message || "-"} </p>
    </div>
    </div>`;
};
