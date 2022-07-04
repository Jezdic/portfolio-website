import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    const { fullname, email, company, message } = req.body;
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "jezdicpaladins@gmail.com", // Your email where you'll receive emails
      from: "jezdicn15@gmail.com", // your website email address here
      subject: `portfolio form`,
      html: `<div>
                <div>
                name: ${fullname}
                </div>
                <div>
                email: ${email}
                </div>
                <div>
                company: ${company || "not specified"}
                </div>
                <div>
                message: ${message}
                </div>
            </div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
