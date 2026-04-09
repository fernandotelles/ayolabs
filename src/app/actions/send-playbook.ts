'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendPlaybook(formData: FormData) {
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;

  if (!email || !name) {
    return { success: false, error: 'Nome e e-mail são obrigatórios.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'ayolabs <onboarding@resend.dev>', // Por padrão o Resend usa esse domínio antes de validar o seu
      to: email,
      subject: 'Seu Playbook de IA chegou! 🚀',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 10px;">
          <h2 style="color: #2563eb;">Olá, ${name}! 👋</h2>
          <p style="font-size: 16px; line-height: 1.6; color: #334155;">
            Ficamos felizes com seu interesse em escalar sua operação com IA. 
            Conforme prometido, aqui está o link para o nosso guia exclusivo.
          </p>
          <div style="text-align: center; margin: 40px 0;">
            <a href="https://ayolabs.vercel.app/playbook-ayolabs.pdf" 
               style="background-color: #2563eb; color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 18px;">
              Baixar Playbook (PDF)
            </a>
          </div>
          <p style="font-size: 14px; color: #64748b;">
            Se o botão acima não funcionar, copie e cole este link no seu navegador:<br>
            https://ayolabs.vercel.app/playbook-ayolabs.pdf
          </p>
          <hr style="border: 0; border-top: 1px solid #f0f0f0; margin: 30px 0;">
          <p style="font-size: 12px; color: #94a3b8; text-align: center;">
            &copy; ${new Date().getFullYear()} ayolabs - Engenharia de IA
          </p>
        </div>
      `
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Server Action Error:', error);
    return { success: false, error: 'Erro inesperado ao enviar e-mail.' };
  }
}
