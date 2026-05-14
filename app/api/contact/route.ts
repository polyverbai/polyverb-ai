import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {

  console.log("API HIT");

  try {

    const body = await req.json();

    console.log("REQUEST BODY:", body);

    console.log(
      "RESEND KEY EXISTS:",
      !!process.env.RESEND_API_KEY
    );

    const {
      name,
      email,
      phone,
      company,
      message,
    } = body;

    const data = await resend.emails.send({

  from: "PolyVerb AI <noreply@polyverbai.com>",

  to: ["mani@polyverbai.com", "molmanz@hotmail.com"],

  replyTo: email,

  subject: `New Contact Form Submission from ${name}`,

  html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          
          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Company:</strong> ${company}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>

        </div>
      `,
    });

    console.log("EMAIL SENT:", data);

    console.log(
      "EMAIL ID:",
      data?.data?.id
    );

    return Response.json({
      success: true,
      data,
    });

  } catch (error) {

    console.error(
      "CONTACT API ERROR:",
      error
    );

    return Response.json(
      {
        success: false,
        error,
      },
      { status: 500 }
    );
  }
}