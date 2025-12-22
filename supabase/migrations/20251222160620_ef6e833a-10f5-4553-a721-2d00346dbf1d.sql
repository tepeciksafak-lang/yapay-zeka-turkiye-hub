-- Create leads table for storing form submissions
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT,
  source TEXT DEFAULT 'quick_analysis_modal',
  language TEXT DEFAULT 'tr',
  page_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  n8n_synced BOOLEAN DEFAULT false
);

-- Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert leads (for anonymous form submissions)
CREATE POLICY "Anyone can insert leads" ON public.leads
  FOR INSERT WITH CHECK (true);

-- Policy: Only authenticated users can read leads
CREATE POLICY "Authenticated users can read leads" ON public.leads
  FOR SELECT USING (auth.role() = 'authenticated');