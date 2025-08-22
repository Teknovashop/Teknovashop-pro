'use client';

import { useState } from 'react';

export default function NewsletterPage(){
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/newsletter/subscribe', {
      method: 'POST', headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    setStatus(data.ok ? 'ok' : 'error');
  };

  return (
    <div className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-bold">Newsletter</h1>
      <p>Recibe un resumen con noticias y ofertas tech.</p>
      <form onSubmit={submit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
          required
          placeholder="Tu correo electrónico"
          className="w-full rounded-xl border border-gray-300 px-3 py-2"
        />
        <button className="rounded-xl bg-brand-600 px-4 py-2 font-semibold text-white">Suscribirme</button>
      </form>
      {status === 'ok' && <div className="text-sm text-green-600">¡Suscrito!</div>}
      {status === 'error' && <div className="text-sm text-red-600">No se pudo suscribir. Revisa el email.</div>}
    </div>
  );
}
