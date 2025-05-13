import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nom, email, telephone, type_projet, message } = body;

    const data = await resend.emails.send({
      from: 'France Rénovation <no-reply@francerenovation.fr>',
      to: ['renovationfrance45@gmail.com'],
      subject: `Nouvelle demande de contact - ${type_projet}`,
      text: `
Nouveau message de contact :

Nom : ${nom}
Email : ${email}
Téléphone : ${telephone}
Type de projet : ${type_projet}

Message :
${message}
      `,
      replyTo: email
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Erreur lors de l&apos;envoi du message' }, { status: 500 });
  }
} 