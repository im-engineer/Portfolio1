import nodemailer from "nodemailer";

export const SendEmail = async (from, to, subject, text, delay = 5000) => {
  // Set up transporter object
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "awasthisameer150@gmail.com",
      pass: "ighskzhukejwjbdt",
    },
  });

  // Set email options
  const mailOptions = {
    from,
    to,
    subject,
    text,
  };

  // Send email with delay between each email
  try {
    await new Promise((resolve) => setTimeout(resolve, delay));
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return info;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to send email");
  }
};

// ighskzhukejwjbdt