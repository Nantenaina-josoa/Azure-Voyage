export default function FooterColumn({ title, children }) {
  return <section className="min-w-0"><h3 className="mb-4 text-base font-bold text-white">{title}</h3><div className="flex min-w-0 flex-col gap-3 text-sm leading-6 text-slate-300">{children}</div></section>;
}
