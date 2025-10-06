export async function SendEmail({ to, subject, body }) {
  // Stub: Logga invece di inviare
  console.log(`Invio email a ${to}: Subject: ${subject}, Body: ${body}`);
  return { success: true }; // Simula successo
  // Per reale: Integra EmailJS o Nodemailer (richiede backend).
}
export async function InvokeLLM(prompt) {
  // Stub: Risposta fissa
  return `Risposta mock a "${prompt}"`;
  // Per reale: Integra OpenAI API (installa openai, aggiungi key).
}
export async function UploadFile(file) {
  // Stub: Logga file
  console.log(`Upload file: ${file.name}`);
  return { url: `https://fake-url.com/${file.name}` }; // URL mock
  // Per reale: Usa FileReader per local, o cloud storage.
}