export default function Brand({ inverted = false }) {
  return <a href="#accueil" className="inline-flex min-w-0 shrink-0 items-center" aria-label="AZURA VOYAGES — Accueil">
    <img src="/logo.svg" alt="AZURA VOYAGES" className={`block h-10 w-auto max-w-[170px] object-contain sm:h-12 sm:max-w-[210px] ${inverted ? 'rounded-lg bg-white px-2 py-1' : ''}`} />
  </a>;
}
