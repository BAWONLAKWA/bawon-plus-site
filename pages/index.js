import React, { useState, useEffect } from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Header />
      <IntroHero />
      <UniverseSplash />
      <Poles />
      <InvestmentsSection />
      <NewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

/* ---------------- HEADER ---------------- */

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-black/75 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl tracking-[0.35em] font-semibold text-yellow-300 uppercase">
            BAWON
          </span>
          <span className="text-2xl font-bold text-purple-400">+</span>
        </div>

        {/* Nav simple (tu pourras ajouter des sous-menus plus tard) */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#top" className="text-white/70 hover:text-white">
            Accueil
          </a>
          <a href="#universe" className="text-white/70 hover:text-white">
            Univers
          </a>
          <a href="#poles" className="text-white/70 hover:text-white">
            Services / Pôles
          </a>
          <a href="#invest" className="text-white/70 hover:text-white">
            Investissement
          </a>
          <a href="#contact" className="text-white/70 hover:text-white">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button className="rounded-full border border-purple-400 px-4 py-1 text-xs font-medium uppercase tracking-widest text-purple-200 hover:bg-purple-600/20">
            Call to action
          </button>
        </div>
      </div>
    </header>
  );
};

/* ---------------- HERO : BAWON JAUNE + BULLES + SYMBOLE QUI CHANGE ---------------- */

const IntroHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const variants = [
    { label: "Plus", symbol: "+", color: "text-purple-400" },
    { label: "Santé", symbol: "⚕", color: "text-emerald-300" },
    { label: "Musique", symbol: "♪", color: "text-pink-300" },
    { label: "Hôtellerie", symbol: "🏨", color: "text-amber-300" },
    { label: "Cacao", symbol: "🍫", color: "text-orange-300" },
  ];

  useEffect(() => {
    const id = setInterval(
      () => setCurrentIndex((i) => (i + 1) % variants.length),
      2200
    );
    return () => clearInterval(id);
  }, [variants.length]);

  const current = variants[currentIndex];

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center bg-black"
    >
      {/* léger glow pour que ce soit visible */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-40 top-24 h-72 w-72 rounded-full bg-purple-800/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-700/30 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-10 px-4 text-center">
        {/* LOGO CENTRAL */}
        <div className="flex flex-col items-center gap-8 mt-20 md:mt-28">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* BAWON */}
            <div className="relative">
              <span className="text-6xl md:text-7xl font-extrabold tracking-[0.25em] text-yellow-400 uppercase">
                BAWON
              </span>

              {/* bulles translucides autour du AW */}
              <span className="pointer-events-none absolute -bottom-4 left-1/3 h-10 w-10 rounded-full bawon-bubble bawon-bubble-1" />
              <span className="pointer-events-none absolute -top-2 left-1/2 h-6 w-6 rounded-full bawon-bubble bawon-bubble-2" />
              <span className="pointer-events-none absolute -bottom-6 right-1/4 h-8 w-8 rounded-full bawon-bubble bawon-bubble-3" />
            </div>

            {/* barre verticale */}
            <div className="hidden md:block h-20 w-px bg-white/70" />

            {/* SYMBOLE QUI CHANGE */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <span
                className={`text-5xl md:text-6xl font-bold drop-shadow ${current.color}`}
              >
                {current.symbol}
              </span>
              <span className="text-[11px] uppercase tracking-[0.4em] text-white/70">
                BAWON {current.label}
              </span>
            </div>
          </div>

          {/* TAGLINE */}
          <p className="max-w-2xl text-base md:text-lg text-white/80 italic">
            L’excellence haïtienne, du passé vers le futur. Un univers noir,
            chocolat, or et violets – visible, lumineux, mais toujours
            mystérieux.
          </p>
        </div>

        {/* BOUTONS */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <a
            href="#universe"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-slate-100 transition"
          >
            Découvrir l’univers
          </a>
          <a
            href="#invest"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/60 hover:bg-purple-500 transition"
          >
            Investir / Soutenir
          </a>
        </div>

        {/* Indicateur scroll */}
        <a
          href="#universe"
          className="mt-4 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white"
        >
          <span>Faire défiler</span>
          <span className="h-8 w-px bg-white/40" />
          <span className="animate-bounce text-lg">⌄</span>
        </a>
      </div>
    </section>
  );
};

/* ---------------- UNIVERS : IMAGE AVEC ÉVENTAIL / TAMBOUR ---------------- */

const UniverseSplash = () => {
  return (
    <section
      id="universe"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bawon-hero-still-life.png')",
        }}
      />
      {/* voile plus clair pour que l’image soit bien visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/80" />

      <div className="relative z-10 max-w-4xl px-4 text-center space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-purple-200/80">
          L’univers BAWON+
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-100">
          Une maison nocturne, entre tambour, éventail, chocolat et verre de
          nuit.
        </h2>
        <p className="text-sm md:text-base text-white/85 max-w-2xl mx-auto">
          Cette composition résume notre vision : un mélange de symboles
          haïtiens, de matières, de lumière chaude et de profondeur. C’est la
          porte d’entrée des différents pôles BAWON+.
        </p>
      </div>
    </section>
  );
};

/* ---------------- NOS PÔLES ---------------- */

const Poles = () => {
  const poles = [
    {
      name: "Spiritueux",
      short: "BAWON Spirit",
      desc: "Rhum, liqueurs et créations nocturnes signées BAWON+.",
      image: "/images/bawon-spirits-1.png",
      color: "from-yellow-500/35 to-black",
      border: "border-yellow-400/60",
    },
    {
      name: "Cacao",
      short: "BAWON Cacao",
      desc: "Chocolats noirs d’exception, issus d’un terroir caribéen.",
      image: "/images/bawon-chocolate.png",
      color: "from-amber-900/55 to-black",
      border: "border-amber-700/70",
    },
    {
      name: "Mode & Lifestyle",
      short: "BAWON Label",
      desc: "Vestiaire nocturne, tailoring et pièces de soirée.",
      image: "/images/bawon-fashion.png",
      color: "from-purple-700/45 to-black",
      border: "border-purple-400/70",
    },
    {
      name: "Santé & Bien-être",
      short: "BAWON Santé",
      desc: "Prévention, accompagnement et écosystème santé BAWON+.",
      image: "/images/bawon-health.png",
      color: "from-slate-50/70 to-black",
      border: "border-slate-100/80",
    },
    {
      name: "Hébergement & Hôtellerie",
      short: "BAWON Hôtel",
      desc: "Lieux de nuit, hospitalité, expériences immersives.",
      image: "/images/bawon-hotel.png",
      color: "from-emerald-600/30 to-black",
      border: "border-emerald-400/70",
    },
    {
      name: "Musique & Expériences",
      short: "BAWON Music",
      desc: "Événements, DJ sets, live et scénographies.",
      image: "/images/bawon-music.png",
      color: "from-fuchsia-600/40 to-black",
      border: "border-fuchsia-400/70",
    },
  ];

  return (
    <section
      id="poles"
      className="relative border-t border-white/10 py-20 overflow-hidden"
    >
      {/* fond animé léger */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(250,204,21,0.12),_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-purple-200/80">
            Nos pôles
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-purple-100">
            Les signes de la maison BAWON+
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-xl mx-auto">
            Chaque pôle possède sa couleur, sa matière et son univers. Passez
            le curseur pour révéler l’image correspondante.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {poles.map((pole) => (
            <PoleCard key={pole.name} pole={pole} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PoleCard = ({ pole }) => {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border ${pole.border} bg-gradient-to-br ${pole.color} shadow-[0_20px_60px_rgba(0,0,0,0.9)] cursor-pointer transition-transform duration-300 hover:scale-105`}
    >
      {/* Fond image qui apparaît au hover */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundImage: `url('${pole.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Contenu texte */}
      <div className="relative z-10 flex flex-col justify-between h-full px-5 pb-5 pt-6 space-y-4">
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.35em] text-purple-50/85">
            {pole.short}
          </p>
          <h3 className="text-lg font-semibold text-white">{pole.name}</h3>
        </div>
        <p className="text-xs text-white/80 leading-relaxed">{pole.desc}</p>

        <div className="flex items-center justify-between pt-2 text-[11px] text-purple-100/90">
          <span>Découvrir ce pôle</span>
          <span className="text-sm">↗</span>
        </div>
      </div>
    </article>
  );
};

/* ---------------- INVESTISSEMENT / PARTENARIATS / DONS ---------------- */

const InvestmentsSection = () => {
  const cards = [
    {
      title: "Investissements",
      desc: "Manifester un intérêt pour accompagner BAWON+ dans le développement de ses pôles et de ses lieux.",
    },
    {
      title: "Partenariats",
      desc: "Collaborations, co-brandings, résidences, évènements et projets qui relient d’autres marques à l’univers BAWON+.",
    },
    {
      title: "Dons & mécénat",
      desc: "Soutenir la construction du projet, la mise en valeur des savoirs haïtiens et les actions à impact.",
    },
  ];

  return (
    <section
      id="invest"
      className="relative border-t border-white/10 bg-black py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-purple-200/80">
            Investissement & soutien
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-purple-100">
            Espace investisseurs & mécènes
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-2xl mx-auto">
            Cet espace présente les voies par lesquelles il est possible
            d’accompagner BAWON+ : investissement, partenariat, dons. Les
            formulaires sont informatifs et ne constituent pas une offre
            publique de titres.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-purple-500/40 bg-gradient-to-br from-purple-900/30 via-black to-black p-5 shadow-[0_18px_55px_rgba(0,0,0,0.95)] flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-purple-100">
                  {card.title}
                </h3>
                <p className="text-xs text-purple-50/80 leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <div className="mt-4">
                <button className="w-full rounded-full border border-purple-300/70 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-purple-100 hover:bg-purple-500/20 transition">
                  Laisser mes informations
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- ACTUALITÉS / PROJETS ---------------- */

const NewsSection = () => {
  const items = [
    {
      tag: "Projet à venir",
      title: "Première collection BAWON Spirit",
      text: "Une série limitée pensée comme manifeste : bouteilles, matières, nuit et rites revisités.",
    },
    {
      tag: "Écosystème",
      title: "Développement du pôle BAWON Cacao",
      text: "Travail sur le sourcing, les partenariats avec les producteurs et le design des premières tablettes.",
    },
    {
      tag: "Investissement",
      title: "Cercle d’intérêt investisseurs",
      text: "Un espace dédié pour les profils souhaitant suivre l’avancée du projet et les futures opportunités.",
    },
  ];

  return (
    <section className="relative border-t border-white/10 bg-[#09030f] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-purple-200/80">
            Actualités & projets
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-purple-100">
            Actualités & projets à venir
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-xl mx-auto">
            Une sélection de chantiers en cours et de projets en construction
            autour de la maison BAWON+.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-purple-500/30 bg-black/80 p-5 shadow-[0_18px_50px_rgba(0,0,0,0.9)] flex flex-col justify-between"
            >
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.3em] text-purple-200/80">
                  {item.tag}
                </p>
                <h3 className="text-sm font-semibold text-purple-100">
                  {item.title}
                </h3>
                <p className="text-xs text-white/75 leading-relaxed">
                  {item.text}
                </p>
              </div>
              <div className="mt-3 text-[11px] text-purple-200/90">
                En savoir plus bientôt.
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------------- CONTACT & QUI SOMMES-NOUS ---------------- */

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative border-t border-white/10 bg-[#070509] py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-purple-200/80">
            Contact & informations
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-purple-100">
            Contacter la maison BAWON+
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-xl mx-auto">
            Presse, collaborations, projets, soutien : utilisez ce formulaire
            ou contactez-nous via nos réseaux.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Formulaire */}
          <form
            className="space-y-4 rounded-3xl border border-purple-500/40 bg-black/70 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.9)]"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Formulaire contact soumis (démo). Tu pourras ensuite le connecter à un service d’e-mail."
              );
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="text-xs text-purple-100/80">
                  Nom complet
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-purple-500/40 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-purple-300"
                  required
                />
              </div>
              <div>
                <label className="text-xs text-purple-100/80">E-mail</label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-purple-500/40 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-purple-300"
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-purple-100/80">
                Sujet de la demande
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-purple-500/40 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-purple-300"
                placeholder="Presse, partenariat, don, investissement…"
              />
            </div>
            <div>
              <label className="text-xs text-purple-100/80">Message</label>
              <textarea
                rows={4}
                className="mt-1 w-full rounded-lg border border-purple-500/40 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-purple-300"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-slate-100 transition"
            >
              Envoyer le message
            </button>
          </form>

          {/* Qui sommes-nous + infos */}
          <div className="space-y-5 text-sm text-white/75">
            <h3 className="text-lg font-semibold text-purple-100">
              Qui sommes-nous ?
            </h3>
            <p>
              BAWON+ est une maison en construction, à la croisée du luxe, de la
              culture haïtienne, des spiritueux, du cacao, de la mode, de la
              santé et de la musique. Un projet pensé pour grandir étape par
              étape, avec des partenaires alignés et des soutiens engagés.
            </p>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-purple-200/80">
                E-mail
              </p>
              <p>contact@bawon-plus.com (à remplacer par ton vrai mail)</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.25em] text-purple-200/80">
                Réseaux sociaux
              </p>
              <ul className="space-y-1">
                <li>Instagram · @bawonplus</li>
                <li>TikTok · @bawonplus</li>
                <li>YouTube · Maison BAWON+</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- FOOTER ---------------- */

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-8 text-xs text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-sm tracking-[0.35em] text-purple-200 uppercase">
              BAWON
            </span>
            <span className="text-lg font-bold text-purple-400">+</span>
          </div>
          <p>L’excellence haïtienne, du passé vers le futur.</p>
        </div>

        <div className="flex flex-wrap gap-4 md:items-center md:justify-end">
          <a href="#top" className="hover:text-white">
            Accueil
          </a>
          <a href="#universe" className="hover:text-white">
            Univers
          </a>
          <a href="#poles" className="hover:text-white">
            Pôles
          </a>
          <a href="#invest" className="hover:text-white">
            Investissement
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>

      <div className="mt-6 border-t border-white/10 pt-4 text-center text-[11px] text-white/40">
        © {new Date().getFullYear()} BAWON+. Tous droits réservés.
      </div>
    </footer>
  );
};
