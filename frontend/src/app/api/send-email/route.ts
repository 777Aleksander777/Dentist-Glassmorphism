
import nodemailer from 'nodemailer';

export async function POST(req: any) {
  
  try {
    const { email, title, message } = await req.json();
    console.log(email);
    // Konfiguracja transportera Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // lub inny dostawca poczty
      auth: {
        user: process.env.EMAIL_USER, // Twój email
        pass: process.env.EMAIL_PASS, // Hasło do emaila lub App Password (np. w Gmail)
      },
    });

    // Dane wiadomości
    const mailOptions = {
      from: email, // Adres nadawcy
      to: process.env.EMAIL_USER, // Adres odbiorcy
      subject: title, // Temat wiadomości
      text: message, // Treść wiadomości
    };

    // Wyślij wiadomość
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Błąd podczas wysyłania e-maila:', error);
    return new Response(JSON.stringify({ success: false, error: error }), { status: 500 });
  }
}