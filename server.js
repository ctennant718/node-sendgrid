require("dotenv").config();

const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;
console.log("API KEY: ", SENDGRID_API_KEY);

sgMail.setApiKey(SENDGRID_API_KEY);

const msg = {
  to: "jbetennant@gmail.com",
  from: "cwright718@gmail.com",
  subject: 'To my wonderful husband',
  text: 'I just learnt how to do this',
  html: '<strong>YAYYY</strong>',
};

(async () => {
  try {
    const resp = await sgMail.send(msg);
    console.log('message sent', resp)
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
})();
