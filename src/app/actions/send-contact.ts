'use server'

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactRequest(formData: FormData) {
  const email = formData.get('email') as string;

  if (!email) {
    return { success: false, error: 'O e-mail é obrigatório.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'ayolabs <onboarding@resend.dev>',
      to: 'contato@ayolabs.com.br', // Email onde você quer receber as notificações
      subject: 'Nova Solicitação de Diagnóstico 🩺',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 10px;">
          <h2 style="color: #2563eb;">Nova Lead de Diagnóstico! 🚀</h2>
          <p style="font-size: 16px; line-height: 1.6; color: #334155;">
            Um usuário solicitou um diagnóstico de IA através da landing page.
          </p>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-weight: bold; color: #64748b;">E-mail do Interessado:</p>
            <p style="margin: 5px 0 0 0; font-size: 18px; color: #0f172a;">${email}</p>
          </div>
          <p style="font-size: 14px; color: #94a3b8;">
            Essa solicitação foi gerada automaticamente pelo formulário de rodapé.
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
    return { success: false, error: 'Erro inesperado ao processar solicitação.' };
  }
}
