import { NextResponse } from 'next/server';

export async function POST(req){
  const { email } = await req.json();
  if(!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){
    return NextResponse.json({ ok: false, message: 'Email no válido' }, { status: 400 });
  }
  // Aquí podrías integrar Mailchimp/SendGrid. Lo simulamos con éxito.
  return NextResponse.json({ ok: true });
}
