// CORS headers for Supabase edge functions
export const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Be cautious with this in production
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Credentials": "true"
};
