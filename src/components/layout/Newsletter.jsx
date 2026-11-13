import { useState } from 'react';
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  function submit(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setMessage('Démonstration uniquement : aucun e-mail n’a été enregistré.');
    setEmail('');
  }
  return <section className="w-full min-w-0 max-w-full" aria-label="Newsletter">
    <h3 className="mb-3 text-base font-bold text-white">Newsletter</h3>
    <p className="mb-4 text-sm leading-relaxed text-slate-300">Recevez nos inspirations et nos offres de voyage.</p>
    <form onSubmit={submit} className="flex w-full min-w-0 max-w-full items-center gap-2 rounded-xl bg-white p-1.5 shadow-sm">
      <label className="sr-only" htmlFor="newsletter-email">Adresse e-mail</label>
      <input id="newsletter-email" type="email" autoComplete="email" required value={email} onChange={e => { setEmail(e.target.value); setMessage(''); }} placeholder="Votre e-mail"
        className="block w-0 min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:px-3" />
      <button type="submit" aria-label="S'inscrire à la newsletter" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0891B2] text-xl text-white transition hover:bg-[#0E7490]"><i className="bx bx-right-arrow-alt" aria-hidden="true" /></button>
    </form>
    {message && <p role="status" className="mt-2 text-xs text-cyan-200">{message}</p>}
  </section>;
}
