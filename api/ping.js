import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return res.status(500).json({ error: 'Variabili d\'ambiente mancanti' });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {
    // Tentiamo la lettura su una tua tabella.
    const { error } = await supabase
      .from('contact_requests') 
      .select('id')
      .limit(1);

    // Se ci blocca per privacy, va bene lo stesso: abbiamo comunque contattato il server!
    if (error) {
        console.log("Risposta dal DB (avviso di sicurezza ignorato):", error.message);
    }

    // Rispondiamo con un 200 OK a Vercel in ogni caso
    res.status(200).json({ status: 'Ping inviato! Database contattato con successo.' });
  } catch (error) {
    res.status(500).json({ status: 'Errore generico', error: error.message });
  }
}