export const config = { runtime: 'edge' };

export default function handler() {
  const data = JSON.stringify({
    url: process.env.SUPABASE_URL || '',
    key: process.env.SUPABASE_KEY || '',
  });
  return new Response(data, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
  });
}
