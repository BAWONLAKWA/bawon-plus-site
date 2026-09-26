import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pillars = [
  ["Soutenir un projet", "Une contribution n'est pas un investissement. Aucun rendement ni capital n'est garanti.", "/soutenir"],
  ["Investir", "Les opportunités n'apparaissent que lorsqu'elles sont effectivement ouvertes, autorisées et documentées.", "/investir"],
  ["Financer mon projet", "Un dossier structuré pour présenter un projet, ses besoins et les pièces nécessaires à une revue.", "/financer-mon-projet"],
  ["Trouver des partenaires", "Bawon Connect organise des mises en relation selon un besoin et une solution, sans être une marketplace.", "/bawon-connect"],
  ["Accompagnement Bawon", "Diagnostic, structuration, préparation et développement avec les professionnels habilités lorsque nécessaire.", "/accompagnement"],
  ["Nos partenaires", "Le répertoire public ne présente que des partenaires confirmés. Il est vide tant qu'aucune information n'est vérifiée.", "/partenaires"],
];

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  return <main className="min-h-screen bg-[#05030a] text-white">
    <Header />
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 -z-20 bg-[url('/images/bawon-hero-still-life.png')] bg-cover bg-center opacity-35" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(122,60,255,.38),transparent_32%),linear-gradient(90deg,rgba(5,3,10,.98),rgba(5,3,10,.65),rgba(5,3,10,.9))]" />
      <motion.div aria-hidden="true" animate={reduceMotion ? undefined : { y: [0, -16, 0], opacity: [.35, .75, .35] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute right-[-8rem] top-[-8rem] -z-10 h-80 w-80 rounded-full bg-[#d6b26f]/20 blur-3xl" />
      <div className="mx-auto grid min-h-[680px] max-w-6xl items-end px-4 pb-20 pt-36 md:px-6 md:pb-28"><div className="max-w-3xl">
        <p className="mb-6 text-xs font-medium uppercase tracking-[.28em] text-[#d6b26f]">Haïti connecté au monde</p>
        <h1 className="text-5xl font-black tracking-[-.06em] text-white sm:text-7xl md:text-8xl">BAWON<span className="text-[#d6b26f]">+</span></h1>
        <p className="mt-7 max-w-2xl text-xl font-semibold leading-relaxed text-white sm:text-2xl">FINANCER. INVESTIR. ACCOMPAGNER. CONNECTER.</p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">BAWON+ prépare des projets, des partenariats et des connexions qui relient Haïti, sa diaspora et l'international. Les services financiers réglementés ne sont proposés que lorsqu'ils sont autorisés et opérationnels.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/accompagnement" className="bawon-button-primary">Découvrir Bawon</Link><Link href="/financer-mon-projet" className="bawon-button-secondary">Financer mon projet</Link></div>
        <div className="mt-5 flex gap-5 text-sm text-white/75"><Link href="/investir" className="hover:text-white">Investir →</Link><Link href="/soutenir" className="hover:text-white">Soutenir →</Link></div>
      </div></div>
    </section>
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6"><p className="bawon-eyebrow">Six parcours</p><h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">Une porte d'entrée claire selon votre besoin.</h2><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{pillars.map(([title, description, href], index) => <Link key={href} href={href} className="bawon-card group"><span className="text-xs text-[#d6b26f]">0{index + 1}</span><h3 className="mt-6 text-xl font-semibold group-hover:text-[#d6b26f]">{title}</h3><p className="mt-3 text-sm leading-6 text-white/70">{description}</p><span className="mt-7 inline-block text-sm text-white">Découvrir →</span></Link>)}</div></section>
    <section className="border-y border-white/10 bg-white/[.03]"><div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1.1fr_.9fr] md:px-6"><div><p className="bawon-eyebrow">Bawon Connect</p><h2 className="mt-3 text-3xl font-bold">Besoin ↔ solution.</h2><p className="mt-5 max-w-xl leading-7 text-white/70">Un projet peut rechercher un financeur, un investisseur, un fournisseur, un distributeur, un mentor, une expertise, une technologie ou une ouverture internationale. Bawon Connect structure ces besoins, facilite la mise en relation et garde une trace des décisions.</p><Link href="/bawon-connect" className="mt-7 inline-block text-sm font-semibold text-[#d6b26f]">Comprendre Bawon Connect →</Link></div><div className="bawon-card border-[#d6b26f]/25"><p className="text-sm font-semibold">Répertoire public</p><p className="mt-3 text-sm leading-6 text-white/70">Aucun partenaire, financement, participation ou opportunité n'est affiché sans vérification. Les sections concernées restent volontairement vides tant que BAWON+ ne peut pas en établir l'exactitude.</p><Link href="/partenaires" className="mt-6 inline-block text-sm text-white hover:text-[#d6b26f]">Voir l'état actuel →</Link></div></div></section>
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6"><p className="bawon-eyebrow">Bawon en direct</p><h2 className="mt-3 text-3xl font-bold">Actualités, rapports et appels à projets.</h2><div className="mt-8 bawon-card"><p className="font-semibold">Aucune actualité vérifiée à publier pour le moment.</p><p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">Le futur flux distinguera actualités BAWON+, projets, partenariats, financements, participations, événements et rapports, avec date, auteur et source.</p><Link href="/actualites" className="mt-5 inline-block text-sm text-[#d6b26f]">Accéder aux actualités →</Link></div></section>
    <Footer />
  </main>;
}
