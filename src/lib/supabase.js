import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://educzwtlturtubfadfuw.supabase.co'
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkdWN6d3RsdHVydHViZmFkZnV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4MzM4NzgsImV4cCI6MjAwMDQwOTg3OH0.Gd0RuR50fFm0o7IRh14WTIM8VnPUHpPyHQm5nkQoEHc

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
