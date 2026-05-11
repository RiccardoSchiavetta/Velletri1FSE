import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return res.status(500).json({ error: 'Variabili d\'ambiente mancanti' });
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  try {

    const { data, error } = await supabase
      .from('contact_requests') 
      .select('id')
      .limit(1);

    if (error) throw error;

    res.status(200).json({ status: 'Ping completato, database attivo!', data });
  } catch (error) {
    res.status(500).json({ status: 'Errore nel ping', error: error.message });
  }
}