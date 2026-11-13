import { useEffect, useState } from 'react';
import Brand from './Brand';
import NavLinks from './NavLinks';
export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKeyDown = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
  return <header className="sticky top-0 z-50 w-full min-w-0 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-lg">
    <div className="container-site flex h-18 min-w-0 items-center justify-between gap-3 sm:h-20 lg:gap-5">
      <Brand />
      <nav className="hidden min-w-0 items-center gap-4 lg:flex xl:gap-6" aria-label="Navigation principale"><NavLinks /></nav>
      <a href="#contact" className="hidden shrink-0 items-center gap-2 rounded-full bg-[#0891B2] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#0E7490] lg:inline-flex xl:px-5 xl:text-sm"><i className="bx bxs-send text-lg" aria-hidden="true" /> Demander un devis</a>
      <button type="button" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-2xl text-[#17243B] lg:hidden" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={open} aria-controls="menu-mobile" onClick={() => setOpen(v => !v)}>
        <i className={`bx ${open ? 'bx-x' : 'bx-menu'}`} aria-hidden="true" />
      </button>
    </div>
    {open && <nav id="menu-mobile" aria-label="Navigation mobile" className="absolute left-0 right-0 top-full max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-xl lg:hidden">
      <div className="mx-auto max-w-7xl"><NavLinks mobile onNavigate={() => setOpen(false)} />
        <a href="#contact" onClick={() => setOpen(false)} className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#0891B2] px-4 py-3 text-sm font-bold text-white"><i className="bx bxs-send" aria-hidden="true" /> Demander un devis</a>
      </div>
    </nav>}
  </header>;
}
