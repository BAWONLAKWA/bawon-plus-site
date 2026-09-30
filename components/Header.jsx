import Link from "next/link";
const links = [["BAWON+ Finance", "/investir"], ["Financer", "/financer-mon-projet"], ["Connect", "/bawon-connect"], ["Accompagnement", "/accompagnement"], ["Le Groupe", "/repertoire-bawon"]];
export default function Header() {
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05030a]/90 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6"><Link href="/" className="text-lg font-black tracking-[.22em] text-white">BAWON<span className="text-[#d6b26f]">+</span></Link><nav aria-label="Navigation principale" className="hidden items-center gap-5 text-sm text-white/70 md:flex">{links.map(([label, href]) => <Link key={href} href={href} className="hover:text-white">{label}</Link>)}</nav><Link href="/financer-mon-projet" className="rounded-full border border-[#d6b26f]/70 px-3 py-2 text-xs font-semibold text-[#f3d99d] hover:bg-[#d6b26f]/10">Financer mon projet</Link></div></header>;
}
