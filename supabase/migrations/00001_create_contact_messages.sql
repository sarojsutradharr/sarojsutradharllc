
CREATE TABLE contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit messages (public form)
CREATE POLICY "Allow anonymous insert" ON contact_messages
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow anonymous insert auth" ON contact_messages
  FOR INSERT TO authenticated WITH CHECK (true);

-- Only admins can read submissions
CREATE POLICY "Admin can view all" ON contact_messages
  FOR SELECT TO authenticated USING (auth.jwt()->>'role' = 'admin');

-- No update/delete policies — submissions are immutable records
