import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://vzkusrrfcailypdoaddr.supabase.co';
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'sb_publishable_fhcMhRnjdXK-bpXi7XD2nw_wYrWYK6x';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface QuoteRequestPayload {
  name: string;
  school_name: string;
  email: string;
  phone: string;
  service_needed: string;
  message?: string;
  created_at?: string;
}
