
CREATE TABLE public.students (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  university TEXT NOT NULL,
  academic_year TEXT NOT NULL,
  specialization TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public registration form)
CREATE POLICY "Anyone can register"
  ON public.students FOR INSERT
  WITH CHECK (true);

-- Only authenticated users (admin) can view
CREATE POLICY "Authenticated users can view students"
  ON public.students FOR SELECT
  USING (auth.role() = 'authenticated');
