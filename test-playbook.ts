
import { sendPlaybook } from './src/app/actions/send-playbook';
import dotenv from 'dotenv';

// Carregar variáveis do .env
dotenv.config();

// Mock do FormData para o Node.js
class MockFormData {
  private data: Record<string, string> = {};
  append(key: string, value: string) { this.data[key] = value; }
  get(key: string) { return this.data[key]; }
}

async function runTest() {
  console.log('--- Testando Envio de Playbook ---');
  console.log('Nome: Fernando Teles');
  console.log('Email: fernandotalves@gmail.com');

  const formData = new MockFormData() as any;
  formData.append('name', 'Fernando Teles');
  formData.append('email', 'fernandotalves@gmail.com');

  try {
    const result = await sendPlaybook(formData);
    
    if (result.success) {
      console.log('✅ SUCESSO: E-mail enviado com sucesso!');
    } else {
      console.log('❌ FALHA:', result.error);
    }
  } catch (error) {
    console.error('💥 ERRO FATAL no teste:', error);
  }
}

runTest();
