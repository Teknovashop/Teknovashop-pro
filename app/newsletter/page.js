
'use client';
import { useState } from 'react';

export default function Newsletter(){
  const [email,setEmail] = useState('');
  const [status,setStatus] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/newsletter',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ email }) });
    setStatus(res.ok ? 'ok' : 'error');
    if(res.ok) setEmail('');
  };

  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-2xl font-bold">Suscríbete al newsletter</h1>
      <p className="text-gray-600">Te mandaremos un resumen con las mejores noticias y ofertas.</p>
      <form onSubmit={submit} className="flex gap-2">
        <input value={email} onChange={e=>setEmail(e.target.value)} required placeholder="tu@email.com"
               className="flex-1 rounded-full border px-4 py-2 outline-none" />
        <button className="btn">Suscribirme</button>
      </form>
      {status==='ok' && <div className="text-sm text-green-600">¡Listo! Te hemos guardado.</div>}
      {status==='error' && <div className="text-sm text-red-600">Ha fallado el envío. Inténtalo más tarde.</div>}
    </div>
  );
}
