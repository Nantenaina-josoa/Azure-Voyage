import { socialLinks } from '../../data/navigation';
export default function SocialLinks() {
  return <div className="flex gap-3" aria-label="Réseaux sociaux">{socialLinks.map(({ label, icon, href }) =>
    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-[#0891B2] focus-visible:outline-2 focus-visible:outline-white">
      <i className={`bx ${icon}`} aria-hidden="true" /></a>)}</div>;
}
