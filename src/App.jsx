import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
export default function App() {
  return <div className="flex min-h-screen flex-col"><Header />
    <main id="accueil" className="container-site flex min-h-[48vh] flex-1 flex-col items-center justify-center py-20 text-center">
      <span className="mb-4 rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#0891B2]">Zone réservée aux autres composants</span>
      <h1 className="max-w-2xl text-3xl font-extrabold text-[#17243B] sm:text-5xl">Explorez le monde avec <span className="text-[#0891B2]">AZURA VOYAGES</span></h1>
      <p className="mt-5 max-w-xl text-slate-500">Seules la barre de navigation et le pied de page sont développés dans cette version. Remplacez cette zone par vos pages.</p>
    </main><Footer /></div>;
}
