import { navigation } from '../../data/navigation';
export default function NavLinks({ mobile = false, onNavigate = () => {} }) {
  return navigation.map(({ label, href }) => <a key={href} href={href} onClick={onNavigate}
    className={mobile ? 'block rounded-xl px-4 py-3 text-sm font-semibold text-[#17243B] hover:bg-cyan-50 hover:text-[#0891B2] focus-visible:outline-2 focus-visible:outline-cyan-600' : 'whitespace-nowrap text-xs font-semibold text-[#17243B] transition hover:text-[#0891B2] focus-visible:outline-2 focus-visible:outline-cyan-600 xl:text-sm'}>{label}</a>);
}
