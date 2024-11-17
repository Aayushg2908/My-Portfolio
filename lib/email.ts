import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  firstname,
  lastname,
  topic,
  email,
  message,
}: {
  firstname: string;
  lastname: string;
  topic: string;
  email: string;
  message: string;
}) => {
  await resend.emails.send({
    from: "contact@aayu.me",
    to: "aayushg2908@gmail.com",
    subject: `${topic} from ${firstname} ${lastname}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333;">${topic}</h2>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 5px 0;"><strong>Name:</strong> ${firstname} ${lastname}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong>Topic:</strong> ${topic}</p>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          <h3 style="margin-top: 0; color: #333;">Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  });
};
