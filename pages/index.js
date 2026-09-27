import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OrbitingSatellites from "../components/OrbitingSatellites";

const pillars = [
  ["Soutenir un projet", "Une contribution n'est pas un investissement. Aucun rendement ni capital n'est garanti.", "/soutenir"],
  ["Investir", "Des opportunités documentées, lorsqu'elles sont effectivement ouvertes et autorisées.", "/investir"],
  ["Financer mon projet", "Un dossier structuré pour présenter un projet, ses besoins et les pièces nécessaires à une revue.", "/financer-mon-projet"],
  ["Trouver des partenaires", "Bawon Connect organise des mises en relation selon un besoin et une solution, sans être une marketplace.", "/bawon-connect"],
  ["Accompagnement Bawon", "Diagnostic, structuration, préparation et développement avec les professionnels habilités lorsque nécessaire.", "/accompagnement"],
  ["Nos partenaires", "Le répertoire public ne présente que des partenaires confirmés.", "/partenaires"],
];

const conceptProjects = [
  { sector: "Agro-industrie", title: "Filière cacao & transformation", country: "Haïti ↔ export", stage: "Exemple de dossier", tone: "from-amber-300/20 via-[#18100d] to-black" },
  { sector: "Énergie", title: "Accès énergétique local", country: "Étude de besoin", stage: "Exemple de dossier", tone: "from-violet-400/25 via-[#120d1e] to-black" },
  { sector: "Diaspora", title: "Connexion PME & marchés", country: "Haïti ↔ international", stage: "Exemple de dossier", tone: "from-[#d6b26f]/20 via-[#17130d] to-black" },
];

const orbitItems = [
  { label: "Financer", href: "/financer-mon-projet", color: "border-[#d6b26f]/70 text-[#f3d99d]" },
  { label: "Connect", href: "/bawon-connect", color: "border-violet-300/60 text-violet-100" },
  { label: "Investir", href: "/investir", color: "border-white/35 text-white" },
  { label: "Accompagner", href: "/accompagnement", color: "border-[#d6b26f]/45 text-[#f3d99d]" },
];

function SectionTitle({ eyebrow, title, description }) {
  return <div className="max-w-3xl"><p className="bawon-eyebrow">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-white/70">{description}</p>}</div>;
}

function BawonOrbit({ reduceMotion }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const move = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    setTilt({ x: ((event.clientY - bounds.top) / bounds.height - .5) * -10, y: ((event.clientX - bounds.left) / bounds.width - .5) * 12 });
  };
  return <div className="relative flex min-h-[355px] items-center justify-center overflow-hidden sm:min-h-[460px] lg:min-h-[520px]" style={{ perspective: "1200px" }} onMouseMove={move} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
    <div className="relative h-[355px] w-[355px] transition-transform duration-500 ease-out sm:h-[440px] sm:w-[440px]" style={{ transformStyle: "preserve-3d", transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}>
      <motion.div aria-hidden="true" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="absolute inset-[7%] rounded-full border border-[#d6b26f]/35" />
      <motion.div aria-hidden="true" animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-[18%] rounded-full border border-violet-300/25" style={{ transform: "rotateX(68deg)" }} />
      <motion.div aria-hidden="true" animate={reduceMotion ? undefined : { y: [0, -12, 0], opacity: [.35, .85, .35] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b26f]/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/25 bg-[#09060e]/90 text-center shadow-[0_0_70px_rgba(122,60,255,.32)] backdrop-blur-xl sm:h-40 sm:w-40" style={{ transform: "translate(-50%, -50%) translateZ(48px)" }}><span className="text-xl font-black tracking-[.12em] sm:text-2xl sm:tracking-[.15em]">BAWON<span className="text-[#d6b26f]">+</span></span><span className="mt-2 text-[8px] uppercase tracking-[.22em] text-white/55 sm:text-[9px] sm:tracking-[.28em]">Écosystème</span></div>
      <OrbitingSatellites radius="clamp(122px, 36vw, 170px)" duration={16} className={reduceMotion ? "bawon-orbit-still" : ""}>{orbitItems.map((item) => <Link key={item.label} href={item.href} className={`block rounded-full border bg-black/80 px-2.5 py-1.5 text-[10px] font-semibold shadow-xl backdrop-blur ${item.color} transition hover:scale-110 hover:bg-white/10 sm:px-4 sm:py-2 sm:text-xs`}>{item.label}</Link>)}</OrbitingSatellites>
      <OrbitingSatellites radius="clamp(76px, 23vw, 102px)" duration={10} reverse className={reduceMotion ? "bawon-orbit-still" : ""}><span className="block h-2.5 w-2.5 rounded-full bg-[#d6b26f] shadow-[0_0_18px_5px_rgba(214,178,111,.32)]" /><span className="block h-2 w-2 rounded-full bg-violet-200 shadow-[0_0_16px_5px_rgba(196,181,253,.25)]" /><span className="block h-2 w-2 rounded-full bg-white shadow-[0_0_16px_5px_rgba(255,255,255,.3)]" /></OrbitingSatellites>
      <span aria-hidden="true" className="absolute left-[26%] top-[14%] h-2 w-2 rounded-full bg-[#d6b26f] shadow-[0_0_18px_5px_rgba(214,178,111,.32)]" /><span aria-hidden="true" className="absolute right-[18%] top-[42%] h-1.5 w-1.5 rounded-full bg-violet-200 shadow-[0_0_16px_5px_rgba(196,181,253,.25)]" /><span aria-hidden="true" className="absolute bottom-[28%] left-[44%] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_16px_5px_rgba(255,255,255,.3)]" />
    </div>
  </div>;
}

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  return <main className="min-h-screen overflow-hidden bg-[#05030a] text-white">
    <Header />
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05030a]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_22%,rgba(97,46,174,.38),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(214,178,111,.16),transparent_24%)]" />
      <motion.div aria-hidden="true" animate={reduceMotion ? undefined : { y: [0, -18, 0], opacity: [.3, .72, .3] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute right-[-8rem] top-[-8rem] -z-10 h-80 w-80 rounded-full bg-[#d6b26f]/20 blur-3xl" />
      <div className="mx-auto grid min-h-[680px] max-w-6xl items-end px-4 pb-20 pt-36 md:px-6 md:pb-28 lg:grid-cols-[1fr_.82fr]"><div className="max-w-3xl">
        <p className="mb-6 text-xs font-medium uppercase tracking-[.28em] text-[#d6b26f]">Haïti connecté au monde</p>
        <h1 className="text-5xl font-black tracking-[-.06em] text-white sm:text-7xl md:text-8xl">BAWON<span className="text-[#d6b26f]">+</span></h1>
        <p className="mt-7 max-w-2xl text-xl font-semibold leading-relaxed text-white sm:text-2xl">FINANCER. INVESTIR. ACCOMPAGNER. CONNECTER.</p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">Une plateforme pensée pour faire émerger, structurer et relier des projets haïtiens, caribéens et internationaux — avec une exigence financière, humaine et opérationnelle.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/accompagnement" className="bawon-button-primary">Découvrir Bawon</Link><Link href="/financer-mon-projet" className="bawon-button-secondary">Financer mon projet</Link></div>
        <div className="mt-6 flex gap-5 text-sm text-white/75"><Link href="/investir" className="hover:text-[#d6b26f]">Explorer l'investissement →</Link><a href="#vision" className="hover:text-[#d6b26f]">Découvrir l'univers ↓</a></div>
      </div><BawonOrbit reduceMotion={reduceMotion} /></div>
    </section>
    <section id="vision" className="relative isolate min-h-[760px] overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 -z-20 bg-[url('/images/bawon-hero-still-life.png')] bg-cover bg-[center_58%]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,3,10,.90)_0%,rgba(5,3,10,.52)_47%,rgba(5,3,10,.16)_100%),linear-gradient(0deg,rgba(5,3,10,.76)_0%,transparent_58%,rgba(5,3,10,.18)_100%)]" />
      <div className="mx-auto flex min-h-[760px] max-w-6xl items-end px-4 py-16 md:px-6 md:py-24"><motion.div initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .7 }} className="max-w-xl rounded-3xl border border-white/20 bg-[#07040c]/80 p-7 shadow-2xl shadow-black/40 backdrop-blur-md md:p-10">
        <p className="bawon-eyebrow">L'univers BAWON+</p><h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">Une identité forte. Une méthode financière rigoureuse.</h2><p className="mt-5 leading-7 text-white/85">Le noir garde la profondeur de la marque ; l'image apparaît progressivement au fil de la page comme une signature. BAWON+ relie une vision culturelle haïtienne à la préparation concrète des projets, des réseaux et des financements.</p><a href="#apercu-investissement" className="mt-8 inline-flex text-sm font-semibold text-[#f3d99d] hover:text-white">Voir l'aperçu investisseur ↓</a>
      </motion.div></div>
    </section>
    <section id="apercu-investissement" className="relative border-b border-white/10 bg-[#08050e] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(104,55,184,.22),transparent_28%),radial-gradient(circle_at_16%_88%,rgba(214,178,111,.12),transparent_23%)]" />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionTitle eyebrow="Aperçu plateforme" title="L'investissement, présenté avec clarté." description="Une prévisualisation du futur espace opportunités : sélection, documentation, suivi et transparence. Les cartes ci-dessous sont fictives et servent uniquement à montrer le design." /><span className="w-fit rounded-full border border-[#d6b26f]/40 bg-[#d6b26f]/10 px-3 py-1.5 text-xs font-semibold text-[#f3d99d]">MODE CONCEPT · DONNÉES FICTIVES</span></div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">{conceptProjects.map((project, index) => <motion.article key={project.title} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} whileHover={reduceMotion ? undefined : { y: -10, rotateX: 3, rotateY: index === 1 ? 0 : index === 0 ? -2 : 2 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .45, delay: index * .08 }} style={{ transformStyle: "preserve-3d" }} className={`group min-h-[330px] rounded-3xl border border-white/10 bg-gradient-to-b ${project.tone} p-6 transition hover:border-[#d6b26f]/45`}><div className="flex items-center justify-between gap-3"><span className="text-xs font-semibold uppercase tracking-[.2em] text-[#f3d99d]">{project.sector}</span><span className="rounded-full border border-white/15 bg-black/25 px-2.5 py-1 text-[10px] font-medium text-white/75">{project.stage}</span></div><div className="mt-24"><p className="text-sm text-white/55">{project.country}</p><h3 className="mt-2 text-2xl font-semibold">{project.title}</h3><div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm"><span className="text-white/60">Dossier en préparation</span><span className="text-[#f3d99d]">Voir le format →</span></div></div></motion.article>)}</div>
        <div className="mt-5 grid gap-3 rounded-2xl border border-white/10 bg-white/[.035] p-5 text-sm text-white/65 md:grid-cols-4"><span><b className="block text-white">01 · Sourcing</b>Projet identifié</span><span><b className="block text-white">02 · Analyse</b>Données et risques</span><span><b className="block text-white">03 · Comité</b>Décision documentée</span><span><b className="block text-white">04 · Suivi</b>Étapes et reporting</span></div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6"><SectionTitle eyebrow="Six parcours" title="Une porte d'entrée claire selon votre besoin." /><div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{pillars.map(([title, description, href], index) => <Link key={href} href={href} className="bawon-card group"><span className="text-xs text-[#d6b26f]">0{index + 1}</span><h3 className="mt-6 text-xl font-semibold group-hover:text-[#d6b26f]">{title}</h3><p className="mt-3 text-sm leading-6 text-white/70">{description}</p><span className="mt-7 inline-block text-sm text-white">Découvrir →</span></Link>)}</div></section>
    <section className="border-y border-white/10 bg-white/[.03]"><div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1.1fr_.9fr] md:px-6"><div><p className="bawon-eyebrow">Bawon Connect</p><h2 className="mt-3 text-3xl font-bold">Besoin ↔ solution.</h2><p className="mt-5 max-w-xl leading-7 text-white/70">Un projet peut rechercher un financeur, un investisseur, un fournisseur, un distributeur, un mentor, une expertise, une technologie ou une ouverture internationale. Bawon Connect structure ces besoins, facilite la mise en relation et garde une trace des décisions.</p><Link href="/bawon-connect" className="mt-7 inline-block text-sm font-semibold text-[#d6b26f]">Comprendre Bawon Connect →</Link></div><div className="bawon-card border-[#d6b26f]/25"><p className="text-sm font-semibold">Répertoire public</p><p className="mt-3 text-sm leading-6 text-white/70">Aucun partenaire, financement, participation ou opportunité n'est affiché comme réel sans vérification. L'aperçu ci-dessus est explicitement fictif.</p><Link href="/partenaires" className="mt-6 inline-block text-sm text-white hover:text-[#d6b26f]">Voir l'état actuel →</Link></div></div></section>
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6"><SectionTitle eyebrow="Bawon en direct" title="Actualités, rapports et appels à projets." /><div className="mt-8 bawon-card"><p className="font-semibold">Aucune actualité vérifiée à publier pour le moment.</p><p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">Le futur flux distinguera actualités BAWON+, projets, partenariats, financements, participations, événements et rapports, avec date, auteur et source.</p><Link href="/actualites" className="mt-5 inline-block text-sm text-[#d6b26f]">Accéder aux actualités →</Link></div></section>
    <Footer />
  </main>;
}
