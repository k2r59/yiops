const { MJ_APIKEY_PRIVATE_OXONE, MJ_APIKEY_PUBLIC_OXONE, MJ_EMAIL_EXP, MJ_EMAIL_EXP_NAME} = process.env;
const mailjet = require('node-mailjet').connect( MJ_APIKEY_PUBLIC_OXONE, MJ_APIKEY_PRIVATE_OXONE)
const qs = require('querystring');

exports.handler = async (event, context) => {

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  let query  = JSON.parse(event.body);

 let messagePart = "Email : "+query.email+"\n";
 let messageHTML  = "Email : "+query.email+"<br />";

  const sendmail = await mailjet
  .post("send", { version: "v3.1" })
  .request({
    Messages: [
      {
        From: {
          Email: MJ_EMAIL_EXP,
          Name: MJ_EMAIL_EXP_NAME,
        },
        To: [
          {
            Email: MJ_EMAIL_EXP,
          },
        ],
        Subject: "Contact : Yiops ",
        TextPart: messagePart,
        HTMLPart: messageHTML,
      },
    ],
  })
  .then((result) => {
    return {
      statusCode: 200,
      body: "Email Send to : "+query.email 
    };
  })
  .catch((err) => {
    return {
      statusCode: 500,
      body: `Email send Error`
    };
  });

  return {
    statusCode: 200,
    body: JSON.stringify(sendmail)
  };

};