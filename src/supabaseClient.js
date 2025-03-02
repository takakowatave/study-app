import { createClient } from '@supabase/supabase-js';

console.log("VITE_SUPABASE_URL:", process.env.VITE_SUPABASE_URL);
console.log("VITE_SUPABASE_ANON_KEY:", process.env.VITE_SUPABASE_ANON_KEY);

export const supabase = createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.VITE_SUPABASE_ANON_KEY
);
