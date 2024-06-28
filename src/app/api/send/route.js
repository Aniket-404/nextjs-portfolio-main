import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}


// import { NextResponse } from "next/server";
// import { useNodeMailer } from "@react-email/render"; // Import for Node.js rendering

// // Import necessary components from react-email
// import { Email, Html, Head, Body, Text, Container } from "@react-email/components";

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);

//   const { nodemailerTransporter } = useNodeMailer({
//     host: process.env.SMTP_HOST, // Replace with your SMTP server details
//     port: process.env.SMTP_PORT, // Replace with your SMTP server port
//     auth: {
//       user: process.env.SMTP_USER, // Replace with your SMTP username
//       pass: process.env.SMTP_PASSWORD, // Replace with your SMTP password
//     },
//   });

//   try {
//     const emailContent = ( // Replace with your EmailTemplate component call
//       <Email>
//         <Head>
//           <title>{subject}</title>
//         </Head>
//         <Body>
//           <Container>
//             <Text>Thank you for contacting us!</Text>
//             <Text>New message submitted:</Text>
//             <Text>{message}</Text>
//           </Container>
//         </Body>
//       </Email>
//     );

//     const { info } = await nodemailerTransporter.sendMail({
//       from: process.env.FROM_EMAIL,
//       to: [process.env.FROM_EMAIL, email],
//       subject: subject,
//       html: await renderToString(emailContent), // Render email content
//     });

//     return NextResponse.json(info);
//   } catch (error) {
//     return NextResponse.json({ error: error.message });
//   }
// }
