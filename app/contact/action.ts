"use server";

import { sendEmail } from "@/lib/email";

export const sendContactEmail = async ({
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
  await sendEmail({ firstname, lastname, topic, email, message });
};
