import Brand from './Brand';
import FooterColumn from './FooterColumn';
import Newsletter from './Newsletter';
import SocialLinks from './SocialLinks';
import { navigation, services } from '../../data/navigation';
export default function Footer() {
  return <footer className="w-full min-w-0 bg-[#0B1D33] text-white">
    <div className="container-site grid min-w-0 grid-cols-1 gap-x-8 gap-y-10 py-12 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4 lg:py-16">
      <div className="min-w-0"><Brand inverted /><p className="mb-5 mt-4 max-w-xs text-sm leading-7 text-slate-300">Votre partenaire de confiance pour des voyages inoubliables. Explorez le monde avec AZURA VOYAGES.</p><SocialLinks /></div>
      <FooterColumn title="Navigation">{navigation.map(({ label, href }) => <a key={href} href={href} className="break-words transition hover:text-cyan-300">{label}</a>)}</FooterColumn>
      <FooterColumn title="Nos services">{services.map(service => <span key={service} className="break-words">{service}</span>)}</FooterColumn>
      <Newsletter />
    </div>
    <div className="border-t border-white/10"><div className="container-site flex min-w-0 flex-col items-center justify-between gap-4 py-6 text-center text-xs text-slate-400 md:flex-row md:text-left">
      <p>© {new Date().getFullYear()} AZURA VOYAGES. Tous droits réservés.</p>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-2"><a href="#mentions-legales" className="hover:text-white">Mentions légales</a><a href="#confidentialite" className="hover:text-white">Confidentialité</a></div>
    </div></div>
  </footer>;
}
