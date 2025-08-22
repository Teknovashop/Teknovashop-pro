
export const runtime = 'nodejs';
export async function POST(req){
  try {
    const { email } = await req.json();
    if(!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return new Response('Bad request', { status: 400 });
    // Aquí podrías guardar en BBDD/Sheet/Sendy/etc.
    return new Response('ok', { status: 200 });
  } catch(e){
    return new Response('fail', { status: 500 });
  }
}
