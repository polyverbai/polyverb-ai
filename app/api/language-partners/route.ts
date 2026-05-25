import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

export async function POST(
  req: Request
) {

  console.log(
    "LANGUAGE PARTNERS API HIT"
  );

  try {

    const formData =
      await req.formData();

    const formType =
      formData.get("formType") as string;

    const name =
      formData.get("name") as string;

    const email =
      formData.get("email") as string;

    const phone =
      formData.get("phone") as string;

    const location =
      formData.get("location") as string;

    const experience =
      formData.get("experience") as string;

    const availability =
      formData.get("availability") as string;

    const message =
      formData.get("message") as string;

    const website =
      formData.get("website") as string;

    const establishment =
      formData.get("establishment") as string;

    const indianLanguages = JSON.parse(
  (formData.get("indianLanguages") as string) || "[]"
);

const asianLanguages = JSON.parse(
  (formData.get("asianLanguages") as string) || "[]"
);

const europeanLanguages = JSON.parse(
  (formData.get("europeanLanguages") as string) || "[]"
);

const middleEastLanguages = JSON.parse(
  (formData.get("middleEastLanguages") as string) || "[]"
);

        const services = JSON.parse(
  (formData.get("services") as string) || "[]"
);

    const domains = JSON.parse(
  (formData.get("domains") as string) || "[]"
);

    const tools = JSON.parse(
  (formData.get("catTools") as string) || "[]"
);

    const publishingTools = JSON.parse(
  (formData.get("dtpTools") as string) || "[]"
);

    const resume =
      formData.get("resume") as File;

    const companyRegistration =
      formData.get(
        "companyRegistration"
      ) as File;

    const gstCertificate =
      formData.get(
        "gstCertificate"
      ) as File;

    const msmeCertificate =
      formData.get(
        "msmeCertificate"
      ) as File;

      const companyProfile =
  formData.get(
    "companyProfile"
  ) as File;

    let attachments = [];

    const files = [
      resume,
      companyRegistration,
      gstCertificate,
      msmeCertificate,
    ];

    for (const file of files) {

  if (
    file &&
    typeof file === "object" &&
    "size" in file &&
    file.size > 0
  ) {

    const bytes =
      await file.arrayBuffer();

    const buffer =
      Buffer.from(bytes);

    attachments.push({
      filename: file.name,
      content: buffer,
    });
  }
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
          formType === "vendor"
            ? "New Vendor Registration"
            : "New Individual Linguist Registration",

        attachments,

        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.7;">

            <h2>
              ${
                formType === "vendor"
                  ? "New Vendor Registration"
                  : "New Individual Linguist Registration"
              }
            </h2>

            <hr />

            <p>
              <strong>Registration Type:</strong>
              ${formType}
            </p>

            <p>
              <strong>Name / Business Name:</strong>
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
              <strong>Location:</strong>
              ${location}
            </p>

            ${
              formType === "vendor"
                ? `
                  <p>
                    <strong>Website:</strong>
                    ${website}
                  </p>

                  <p>
                    <strong>Year of Establishment:</strong>
                    ${establishment}
                  </p>
                `
                : `
                  <p>
                    <strong>Experience:</strong>
                    ${experience}
                  </p>
                `
            }

            <p>
              <strong>Availability:</strong>
              ${availability}
            </p>

            <p>
              <p>
  <strong>Indian Languages:</strong>
  ${indianLanguages.join(", ")}
</p>

<p>
  <strong>Asian Languages:</strong>
  ${asianLanguages.join(", ")}
</p>

<p>
  <strong>European Languages:</strong>
  ${europeanLanguages.join(", ")}
</p>

<p>
  <strong>Middle East Languages:</strong>
  ${middleEastLanguages.join(", ")}
</p>

            <p>
              <strong>Services:</strong>
${services.join(", ")}
            </p>

            <p>
              <strong>Publishing Tools:</strong>
${publishingTools.join(", ")}
            </p>

            <p>
              <strong>Domain Expertise:</strong>
${domains.join(", ")}
            </p>

            <p>
              <strong>CAT Tools:</strong>
${tools.join(", ")}
            </p>

${
  formType === "individual"
    ? `
      <p>
        <strong>Resume / Profile:</strong>
        ${
          resume &&
          typeof resume === "object" &&
          "size" in resume &&
          resume.size > 0
            ? "Uploaded"
            : "Not Uploaded"
        }
      </p>
    `
    : `
      <p>
        <strong>Company Registration Certificate:</strong>
        ${
          companyRegistration &&
          typeof companyRegistration === "object" &&
          "size" in companyRegistration &&
          companyRegistration.size > 0
            ? "Uploaded"
            : "Not Uploaded"
        }
      </p>

      <p>
        <strong>GST Registration Certificate:</strong>
        ${
          gstCertificate &&
          typeof gstCertificate === "object" &&
          "size" in gstCertificate &&
          gstCertificate.size > 0
            ? "Uploaded"
            : "Not Uploaded"
        }
      </p>

      <p>
        <strong>MSME Registration Certificate:</strong>
        ${
  msmeCertificate &&
  typeof msmeCertificate === "object" &&
  "size" in msmeCertificate &&
  msmeCertificate.size > 0
    ? "Uploaded"
    : "Not Uploaded"
}
      </p>

      <p>
  <strong>Company Profile:</strong>
  ${
    companyProfile &&
    typeof companyProfile === "object" &&
    "size" in companyProfile &&
    companyProfile.size > 0
      ? "Uploaded"
      : "Not Uploaded"
  }
</p>
      
    `
}

            <p>
              <strong>Additional Information:</strong>
            </p>

            <p>
              ${message}
            </p>

          </div>
        `,
      });

    console.log(
      "LANGUAGE PARTNERS EMAIL SENT:",
      data
    );

    return Response.json({
      success: true,
      data,
    });

  } catch (error) {

    console.error(
      "LANGUAGE PARTNERS API ERROR:",
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