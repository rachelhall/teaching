var Mailchimp = require("mailchimp-api-v3");

function subscribe(data) {
  const key = process.env.MAILCHIMP_API_KEY;
  const mailchimp = new Mailchimp(key);
  const { email, fName, lName, id, phone } = data;

  return mailchimp.request({
    method: "post",
    path: `/lists/${id}/members`,
    body: {
      email_address: email,
      merge_fields: {
        FNAME: fName,
        LNAME: lName,
        PHONE: phone
      },
      status: "subscribed"
    }
  });
}

export default (req, res) => {
  res.setHeader("Content-Type", "application/json");
  if (req.method === "POST") {
    subscribe(req.body)
      .then(data => {
        res.statusCode = 200;
        res.end(JSON.stringify(data));
      })
      .catch(e => {
        res.statusCode = e.status;
        res.end(JSON.stringify(e));
      });
  }
};
