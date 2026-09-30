import Link from "next/link";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const pillars = [
  ["Faire financer mon projet", "Présenter un besoin précis et construire un dossier qui peut évoluer par étapes.", "/financer-mon-projet"],
  ["Investir avec BAWON+", "Découvrir les opportunités réellement ouvertes et leur documentation, lorsqu’un cadre autorisé existe.", "/investir"],
  ["Devenir partenaire", "Mettre une expertise, un marché, une distribution ou un réseau au service d’un projet sélectionné.", "/bawon-connect"],
  ["Être accompagné", "Structurer l’idée, le budget, l’équipe et les prochaines décisions avant de chercher de l’argent.", "/accompagnement"],
  ["Soutenir une initiative", "Contribuer à un projet de manière encadrée, sans confondre contribution et investissement.", "/soutenir"],
  ["Consulter le répertoire", "Découvrir uniquement les relations et participations qui pourront être publiées et vérifiées.", "/repertoire-bawon"],
];

const workstreams = [
  { title: "Créer une marque qui voyage", text: "Du produit à l’image, BAWON veut préparer des lignes qui puissent être comprises ici, dans la Caraïbe et dans la diaspora.", image: "/images/demo/bawon-spirit-demo.jpg", href: "/bawon-produits" },
  { title: "Transformer sur place", text: "L’industrie n’est pas un décor : c’est la réflexion sur les ateliers, les matières, la qualité et les chemins de distribution.", image: "/images/demo/bawon-bottle-demo.jpg", href: "/bawon-industrie" },
  { title: "Relier les bonnes personnes", text: "Un projet sérieux a besoin de documents, de partenaires et parfois de financement. BAWON construit ce cadre étape par étape.", image: "/images/demo/bawon-cuvee-demo.jpg", href: "/bawon-connect" },
];

function SectionTitle({ eyebrow, title, description }) {
  return <div className="max-w-3xl"><p className="bawon-eyebrow">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>{description && <p className="mt-4 text-base leading-7 text-white/70">{description}</p>}</div>;
}

function CinematicIntro({ onEnter, reduceMotion }) {
  const poles = [
    ["BAWON+ Finance", "/investir", "Financer · investir · prendre part"],
    ["BAWON Produits & Alimentation", "/bawon-produits", "Boissons, cacao, objets et créations"],
    ["BAWON Industrie", "/bawon-industrie", "Production et transformation"],
    ["BAWON Tech", "/bawon-tech", "Solutions, plateformes et innovation"],
    ["BAWON Santé", "/bawon-sante", "Prévention, accès et bien-être"],
    ["BAWON Créatif", "/bawon-creatif", "Culture, image et contenus"],
    ["BAWON Hospitality", "/bawon-hospitality", "Accueil, tourisme et expériences"],
  ];
  return <main className="min-h-screen overflow-hidden bg-[#05030a] text-white">
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-10">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_50%_43%,rgba(104,55,184,.28),transparent_24%),radial-gradient(circle_at_74%_70%,rgba(214,178,111,.14),transparent_29%),linear-gradient(135deg,#05030a_10%,#120d1b_50%,#05030a_100%)]" />
      <div aria-hidden="true" className={`bawon-intro-grain absolute inset-0 ${reduceMotion ? "bawon-orbit-still" : ""}`} />
      <motion.div initial={reduceMotion ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .9 }} className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[.88fr_1.12fr]">
        <div className="order-2 text-center lg:order-1 lg:text-left"><p className="text-xs font-medium uppercase tracking-[.34em] text-[#d6b26f]">Haïti · Caraïbes · Monde</p><h1 className="mt-5 text-5xl font-black tracking-[-.065em] sm:text-7xl">BAWON<span className="text-[#d6b26f]">+</span></h1><p className="mx-auto mt-5 max-w-md text-lg leading-8 text-white/75 lg:mx-0">Le plus qui ouvre des portes : du premier financement à la croissance d’une entreprise.</p><button type="button" onClick={onEnter} className="mt-8 rounded-full border border-[#d6b26f]/70 bg-[#d6b26f]/10 px-6 py-3 text-sm font-semibold text-[#f3d99d] transition hover:scale-105 hover:bg-[#d6b26f]/20">Entrer dans BAWON+ <span aria-hidden="true">→</span></button><p className="mt-4 text-xs text-white/45">Financer · accompagner · prendre part · connecter</p></div>
        <div className="order-1 flex justify-center lg:order-2"><div className={`bawon-earth-asset ${reduceMotion ? "bawon-earth-still" : ""}`}><img src="/images/bawon-earth-network.webp" alt="Globe Terre reliant Haïti au monde" /><span>HAÏTI · AU CENTRE DU RÉSEAU</span></div></div>
      </motion.div>
      <div className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-center text-[10px] uppercase tracking-[.26em] text-white/35">La vision se déploie</div>
    </section>
    <section id="ecosystem" className="relative border-t border-white/10 bg-[#08050e] px-4 py-20"><div className="mx-auto max-w-6xl"><div className="text-center"><p className="bawon-eyebrow">La carte BAWON</p><h2 className="mt-3 text-3xl font-bold sm:text-5xl">Un groupe. Des activités qui se parlent.</h2><p className="mx-auto mt-5 max-w-2xl leading-7 text-white/70">La finance soutient les projets. Les produits créent une présence. L’industrie permet de produire. La technologie, la santé, la création et l’hospitalité ouvrent de nouveaux chemins.</p></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{poles.map(([title, href, description]) => <Link key={title} href={href} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[.035] p-6 transition hover:-translate-y-2 hover:border-[#d6b26f]/55"><p className="text-xs uppercase tracking-[.17em] text-[#d6b26f]">Espace BAWON</p><h3 className="mt-9 text-2xl font-semibold group-hover:text-[#f3d99d]">{title}</h3><p className="mt-3 text-sm leading-6 text-white/60">{description}</p><span className="mt-7 block text-sm text-white/80">Entrer dans l’espace →</span></Link>)}</div><div className="mt-12 text-center"><button type="button" onClick={onEnter} className="bawon-button-primary">Accéder au site BAWON</button></div></div></section>
  </main>;
}

function EcosystemMap({ onOpenSite, reduceMotion }) {
  const poles = [
    ["BAWON+ Finance", "/investir", "Financement progressif · participation · partenaires", "bawon-map-finance"],
    ["BAWON Produits & Alimentation", "/bawon-produits", "Boissons, cacao, objets et créations", "bawon-map-products"],
    ["BAWON Industrie", "/bawon-industrie", "Production et transformation", "bawon-map-industry"],
    ["BAWON Tech", "/bawon-tech", "Solutions et innovation", "bawon-map-drinks"],
    ["BAWON Santé", "/bawon-sante", "Prévention et bien-être", "bawon-map-health"],
    ["BAWON Créatif", "/bawon-creatif", "Culture, image et contenus", "bawon-map-creative"],
    ["BAWON Hospitality", "/bawon-hospitality", "Accueil et expériences", "bawon-map-hospitality"],
  ];
  return <main className="min-h-screen overflow-hidden bg-[#05030a] text-white"><section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-20"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(104,55,184,.25),transparent_24%),radial-gradient(circle_at_50%_75%,rgba(214,178,111,.12),transparent_30%)]" /><div className="relative z-10 mx-auto w-full max-w-6xl"><div className="mb-10 text-center"><p className="bawon-eyebrow">Carte interactive</p><h1 className="mt-3 text-3xl font-bold sm:text-5xl">BAWON+ : le capital qui met en mouvement</h1><p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/65">BAWON+ Finance est le moteur : il prépare, finance et peut prendre part à des entreprises sélectionnées. Les autres espaces montrent ce que ce moteur peut faire grandir.</p></div><div className={`bawon-ecosystem-map ${reduceMotion ? "bawon-map-still" : ""}`}><div aria-hidden="true" className="bawon-map-ring bawon-map-ring-one" /><div aria-hidden="true" className="bawon-map-ring bawon-map-ring-two" /><button type="button" onClick={onOpenSite} className="bawon-map-core"><span className="text-2xl font-black tracking-[.14em] sm:text-3xl">BAWON<span className="text-[#d6b26f]">+</span></span><small>Le moteur</small></button>{poles.map(([title, href, description, position]) => <Link key={title} href={href} className={`bawon-map-pole ${position}`}><span className="text-[10px] uppercase tracking-[.17em] text-[#d6b26f]">Espace</span><strong>{title}</strong><small>{description}</small><i>Entrer →</i></Link>)}</div><div className="mt-8 text-center"><Link href="/repertoire-bawon" className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-[#d6b26f] hover:text-[#f3d99d]">Répertoire BAWON · profils qualifiés →</Link><p className="mt-4 text-xs text-white/45">Le répertoire est contrôlé : partenaires validés, entreprises accompagnées ou participations documentées.</p></div></div></section></main>;
}

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const [view, setView] = useState("intro");
  if (view === "intro") return <CinematicIntro reduceMotion={reduceMotion} onEnter={() => { setView("ecosystem"); window.scrollTo({ top: 0, behavior: "smooth" }); }} />;
  if (view === "ecosystem") return <EcosystemMap reduceMotion={reduceMotion} onOpenSite={() => { setView("site"); window.scrollTo({ top: 0, behavior: "smooth" }); }} />;
  return <main className="min-h-screen overflow-hidden bg-[#05030a] text-white">
    <Header />
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05030a]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(97,46,174,.32),transparent_30%),linear-gradient(120deg,#05030a_10%,#120d1b_60%,#05030a_100%)]" />
      <div className="mx-auto grid min-h-[680px] max-w-6xl items-center gap-10 px-4 py-24 md:px-6 lg:grid-cols-[1fr_.82fr]"><div className="max-w-3xl">
        <p className="mb-6 text-xs font-medium uppercase tracking-[.28em] text-[#d6b26f]">Haïti connecté au monde</p>
        <h1 className="text-5xl font-black tracking-[-.06em] text-white sm:text-7xl md:text-8xl">BAWON<span className="text-[#d6b26f]">+</span></h1>
        <p className="mt-7 max-w-2xl text-2xl font-medium leading-tight text-white sm:text-3xl">Le capital doit pouvoir circuler là où les idées existent déjà.</p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">BAWON+ finance et accompagne des projets haïtiens par étapes : un premier besoin concret, la préparation du dossier, puis — pour les entreprises sélectionnées — un investissement et une prise de participation possibles.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/financer-mon-projet" className="bawon-button-primary">Présenter mon projet</Link><Link href="/investir" className="bawon-button-secondary">Comprendre BAWON+ Finance</Link></div>
        <p className="mt-7 text-sm text-white/55">Le « + » est ce qui manque parfois : capital, méthode, réseau, partenaire ou première porte ouverte.</p>
      </div><motion.figure initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-white/15 bg-[#100a15] p-3 shadow-2xl shadow-black/50"><img src="/images/demo/bawon-spirit-demo.jpg" alt="Expression visuelle d’une activité BAWON accompagnée" className="aspect-[4/5] w-full rounded-[1.45rem] object-cover" /><figcaption className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/15 bg-[#0b0710]/85 p-4 backdrop-blur"><p className="text-xs uppercase tracking-[.18em] text-[#d6b26f]">Le capital au service d’un projet</p><p className="mt-2 text-sm leading-6 text-white/75">BAWON+ n’investit pas dans une idée seule : il aide à la préparer, à l’éprouver et à la rendre défendable.</p></figcaption></motion.figure></div>
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
      <div className="relative mx-auto max-w-6xl px-4 md:px-6"><SectionTitle eyebrow="Le modèle BAWON+" title="Du petit coup de pouce à la prise de participation." description="Tout projet ne commence pas par une grande levée de fonds. BAWON+ veut pouvoir intervenir au bon moment, avec le bon niveau de capital, et avancer seulement lorsque les preuves sont là." />
        <div className="mt-8 grid gap-3 border-y border-white/10 py-6 md:grid-cols-3"><div><p className="text-xs uppercase tracking-[.16em] text-[#d6b26f]">01 · Amorçage</p><h3 className="mt-3 text-xl font-semibold">Faire démarrer</h3><p className="mt-2 text-sm leading-6 text-white/60">Premier besoin précis : prototype, matière, étude, équipement, test marché ou dossier.</p></div><div><p className="text-xs uppercase tracking-[.16em] text-[#d6b26f]">02 · Accélération</p><h3 className="mt-3 text-xl font-semibold">Faire tenir le projet</h3><p className="mt-2 text-sm leading-6 text-white/60">Budget, équipe, partenaires, conformité, distribution et préparation à une croissance responsable.</p></div><div><p className="text-xs uppercase tracking-[.16em] text-[#d6b26f]">03 · Participation</p><h3 className="mt-3 text-xl font-semibold">Grandir ensemble</h3><p className="mt-2 text-sm leading-6 text-white/60">Pour certains projets sélectionnés, BAWON+ peut envisager une entrée au capital selon un cadre à définir.</p></div></div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">{workstreams.map((stream, index) => <motion.article key={stream.title} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .45, delay: index * .08 }} className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b0710]"><img src={stream.image} alt="Univers visuel BAWON" className="h-56 w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100" /><div className="p-6"><h3 className="text-2xl font-semibold">{stream.title}</h3><p className="mt-3 text-sm leading-6 text-white/65">{stream.text}</p><Link href={stream.href} className="mt-6 inline-block text-sm font-semibold text-[#f3d99d]">Voir cet espace →</Link></div></motion.article>)}</div>
        <p className="mt-8 max-w-3xl border-l border-[#d6b26f]/60 pl-5 text-sm leading-7 text-white/60">Les financements, chiffres, partenaires et opportunités ne seront publiés que lorsqu’ils existeront et pourront être vérifiés. En attendant, le site montre une direction, pas une fausse activité.</p>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><SectionTitle eyebrow="Une conversation, pas un formulaire sans suite" title="Pourquoi venez-vous vers BAWON ?" description="Les parcours restent simples parce qu’ils commencent tous par une même chose : comprendre ce que vous essayez de faire." /><div className="divide-y divide-white/10 border-y border-white/10">{pillars.map(([title, description, href]) => <Link key={href} href={href} className="group flex items-start justify-between gap-5 py-5"><div><h3 className="text-lg font-semibold group-hover:text-[#f3d99d]">{title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-white/60">{description}</p></div><span className="mt-1 text-[#d6b26f]">↗</span></Link>)}</div></div></section>
    <section className="border-y border-white/10 bg-white/[.03]"><div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1.1fr_.9fr] md:px-6"><div><p className="bawon-eyebrow">Bawon Connect</p><h2 className="mt-3 text-3xl font-bold">Besoin ↔ solution.</h2><p className="mt-5 max-w-xl leading-7 text-white/70">Un projet peut rechercher un financeur, un investisseur, un fournisseur, un distributeur, un mentor, une expertise, une technologie ou une ouverture internationale. Bawon Connect structure ces besoins, facilite la mise en relation et garde une trace des décisions.</p><Link href="/bawon-connect" className="mt-7 inline-block text-sm font-semibold text-[#d6b26f]">Comprendre Bawon Connect →</Link></div><div className="bawon-card border-[#d6b26f]/25"><p className="text-sm font-semibold">Répertoire public</p><p className="mt-3 text-sm leading-6 text-white/70">Aucun partenaire, financement, participation ou opportunité n'est affiché comme réel sans vérification. L'aperçu ci-dessus est explicitement fictif.</p><Link href="/partenaires" className="mt-6 inline-block text-sm text-white hover:text-[#d6b26f]">Voir l'état actuel →</Link></div></div></section>
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6"><SectionTitle eyebrow="Bawon en direct" title="Actualités, rapports et appels à projets." /><div className="mt-8 bawon-card"><p className="font-semibold">Aucune actualité vérifiée à publier pour le moment.</p><p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">Le futur flux distinguera actualités BAWON+, projets, partenariats, financements, participations, événements et rapports, avec date, auteur et source.</p><Link href="/actualites" className="mt-5 inline-block text-sm text-[#d6b26f]">Accéder aux actualités →</Link></div></section>
    <Footer />
  </main>;
}
