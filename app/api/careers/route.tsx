import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  req: Request
) {

  console.log("CAREERS API HIT");

  try {

    const formData =
      await req.formData();

    const role =
      formData.get("role") as string;

    const name =
      formData.get("name") as string;

    const email =
      formData.get("email") as string;

    const phone =
      formData.get("phone") as string;

    const company =
      formData.get("company") as string;

    const experience =
      formData.get("experience") as string;

    const message =
      formData.get("message") as string;

    const resume =
      formData.get("resume") as File;

    let attachments = [];

    if (resume) {

      const bytes =
        await resume.arrayBuffer();

      const buffer =
        Buffer.from(bytes);

      attachments.push({
        filename: resume.name,
        content: buffer,
      });
    }

    const data =
      await resend.emails.send({

        from:
          "PolyVerb AI <mani@polyverbai.com>",

        to: [
          "mani@polyverbai.com",
        ],

        replyTo: email,

        subject:
          `New Career Application - ${role}`,

        attachments,

        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6;">

            <h2>
              New Career Application
            </h2>

            <p>
              <strong>Role:</strong>
              ${role}
            </p>

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone}
            </p>

            <p>
              <strong>Current Company:</strong>
              ${company}
            </p>

            <p>
              <strong>Experience:</strong>
              ${experience}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <p>
              ${message}
            </p>

          </div>
        `,
      });

    console.log(
      "CAREERS EMAIL SENT:",
      data
    );

    return Response.json({
      success: true,
      data,
    });

  } catch (error) {

    console.error(
      "CAREERS API ERROR:",
      error
    );

    return Response.json(
      {
        success: false,
        error,
      },
      {
        status: 500,
      }
    );
  }
}