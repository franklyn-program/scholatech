-- SQL Schema for Scholatech Quote Requests
-- Execute this script in your new Scholatech Supabase Project SQL Editor

CREATE TABLE IF NOT EXISTS public.quote_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  school_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_needed TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous lead insertions
CREATE POLICY "Allow public lead insertion" 
  ON public.quote_requests 
  FOR INSERT 
  TO anon, authenticated 
  WITH CHECK (true);
