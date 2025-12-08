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

/* ---------------- HEADER AVEC MENU + SOUS-MENUS ---------------- */

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl tracking-[0.35em] font-semibold text-yellow-300 uppercase">
            BAWON
          </span>
          <span className="text-2xl font-bold text-purple-400">+</span>
        </div>

        {/* Nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a
            href="#top"
            className="text-white/70 hover:text-white transition-colors"
          >
            Accueil
          </a>

          {/* Services */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
              Services
              <span className="text-xs">▾</span>
            </button>
            {openMenu === "services" && (
              <div className="absolute right-0 mt-2 w-48 rounded-xl border border-white/10 bg-black/95 shadow-lg text-xs">
                <a
                  href="#poles"
                  className="block px-4 py-2 hover:bg-white/5"
                >
                  BAWON Spirit
                </a>
                <a
                  href="#poles"
                  className="block px-4 py-2 hover:bg-white/5"
                >
                  BAWON Label
                </a>
                <a
                  href="#poles"
                  className="block px-4 py-2 hover:bg-white/5"
                >
                  BAWON Lifestyle
                </a>
              </div>
            )}
          </div>

          {/* Investissement */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("invest")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="text-white/70 hover:text-white transition-colors flex items-center gap-1">
              Investissement
              <span className="text-xs">▾</span>
            </button>
            {openMenu === "invest" && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-white/10 bg-black/95 shadow-lg text-xs">
                <a
                  href="#invest"
                  className="block px-4 py-2 hover:bg-white/5"
                >
                  Investissements
                </a>
                <a
                  href="#invest"
                  className="block px-4 py-2 hover:bg-white/5"
                >
                  Partenariats
                </a>
                <a
                  href="#invest"
                  className="block px-4 py-2 hover:bg-white/5"
                >
                  Dons & mécénat
                </a>
              </div>
            )}
          </div>

          <a
            href="#about"
            className="text-white/70 hover:text-white transition-colors"
          >
            Qui sommes-nous
          </a>

          <a
            href="#contact"
            className="text-white/70 hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* CTA droite */}
        <div className="hidden md:flex items-center gap-3">
          <button className="rounded-full border border-purple-400 px-4 py-1 text-xs font-medium uppercase tracking-widest text-purple-200 hover:bg-purple-600/20">
            Call to action
          </button>
        </div>
      </div>
    </header>
  );
};

/* ---------------- HERO 1 : ÉCRAN NOIR, BAWON + BULLE + + QUI CHANGE ---------------- */

const IntroHero = () => {
  const [currentPole, setCurrentPole] = useState(0);

  const poles = ["Spirit", "Santé", "Musique", "Hôtel", "Label"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPole((prev) => (prev + 1) % poles.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [poles.length]);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center bg-black"
    >
      {/* déco légère en fond */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-purple-800/40 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-700/30 blur-3xl" />
      </div>

      <div className="relative z-10 flex max-w-6xl flex-col items-center gap-10 px-4 text-center md:flex-row md:items-center md:text-left">
        {/* Bloc gauche : BAWON + bulle qui tourne */}
        <div className="flex-1 flex flex-col gap-8 items-center md:items-start">
          <div className="flex items-center gap-8">
            {/* BAWON + bulle orbitale */}
            <div className="relative w-40 h-40">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-3xl tracking-[0.35em] text-yellow-300 font-semibold uppercase">
                  BAWON
                </span>
              </div>
              {/* bulle qui tourne */}
              <div className="bawon-orbit-dot absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.9)]" />
            </div>

            {/* Signe + et label qui change */}
            <div className="flex flex-col items-start gap-3">
              <span className="text-5xl font-bold text-purple-400">+</span>
              <span className="text-xs uppercase tracking-[0.4em] text-white/70">
                BAWON {poles[currentPole]}
              </span>
            </div>
          </div>

          <p className="max-w-md text-sm text-white/70 md:text-base">
            Une maison noire & or, qui se décline en pôles : spiritueux, santé,
            musique, hôtellerie, label… Un même univers, plusieurs signes.
          </p>
        </div>

        {/* Bloc droit : call à scroller */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-6">
          <p className="text-sm text-white/60 max-w-xs">
            Faites défiler pour entrer dans l’univers BAWON+ et découvrir nos
            pôles, nos projets et nos opportunités d’investissement.
          </p>
          <a
            href="#universe"
            className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/60 hover:text-white"
          >
            <span>Entrer dans l’univers</span>
            <span className="h-10 w-px bg-white/30" />
            <span className="animate-bounce text-lg">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
};

/* ---------------- HERO 2 : IMAGE AVEC ÉVENTAIL / TAMBOUR ---------------- */

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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

      <div className="relative z-10 max-w-4xl px-4 text-center space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-purple-200/80">
          L’univers BAWON+
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold text-purple-100">
          Une maison nocturne, entre tambour, éventail et verre de nuit.
        </h2>
        <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
          Cette image est la porte d’entrée de BAWON+ : un assemblage de
          symboles haïtiens, de matières, d’objets et de lumières qui résument
          notre vision : luxe, profondeur, chaleur et mystique.
        </p>
      </div>
    </section>
  );
};

/* ---------------- NOS PÔLES : FOND ANIMÉ + CARTES HOVER ---------------- */

const Poles = () => {
  const poles = [
    {
      name: "Spiritueux",
      short: "BAWON Spirit",
      desc: "Rhum, liqueurs et créations nocturnes signées BAWON+.",
      image: "/images/bawon-spirits-1.png",
    },
    {
      name: "Cacao",
      short: "BAWON Cacao",
      desc: "Chocolats noirs d’exception, issus d’un terroir caribéen.",
      image: "/images/bawon-chocolate.png",
    },
    {
      name: "Mode & Lifestyle",
      short: "BAWON Label",
      desc: "Vestiaire nocturne, tailoring et pièces de soirée.",
      image: "/images/bawon-fashion.png",
    },
    {
      name: "Santé & Bien-être",
      short: "BAWON Santé",
      desc: "Prévention, accompagnement et écosystème santé BAWON+.",
      image: "/images/bawon-health.png",
    },
    {
      name: "Hébergement & Hôtellerie",
      short: "BAWON Hôtel",
      desc: "Lieux de nuit, hospitalité, expériences immersives.",
      image: "/images/bawon-hotel.png",
    },
    {
      name: "Musique & Expériences",
      short: "BAWON Music",
      desc: "Événements, DJ sets, live et scénographies.",
      image: "/images/bawon-music.png",
    },
  ];

  return (
    <section
      id="poles"
      className="relative border-t border-white/10 py-20 overflow-hidden"
    >
      {/* fond animé simple */}
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
            Chaque pôle possède sa couleur, son symbole et sa matière. Passez
            le curseur pour révéler l’image qui lui est associée.
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
    <article className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/70 shadow-[0_20px_60px_rgba(0,0,0,0.9)] cursor-pointer transition-transform duration-300 hover:scale-105">
      {/* Fond image qui apparaît au hover */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ backgroundImage: `url('${pole.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Contenu texte au-dessus */}
      <div className="relative z-10 flex flex-col justify-between h-full px-5 pb-5 pt-6 space-y-4">
        <div className="space-y-1">
          <p className="text-[11px] uppercase tracking-[0.35em] text-purple-200/80">
            {pole.short}
          </p>
          <h3 className="text-lg font-semibold text-white">{pole.name}</h3>
        </div>
        <p className="text-xs text-white/75 leading-relaxed">{pole.desc}</p>

        <div className="flex items-center justify-between pt-2 text-[11px] text-purple-200/85">
          <span>Découvrir ce pôle</span>
          <span className="text-sm">↗</span>
        </div>
      </div>
    </article>
  );
};

/* ---------------- INVESTISSEMENTS / PARTENARIATS / DONS ---------------- */

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
      title: "Dons & soutien",
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

/* ---------------- ACTUALITÉS / PROJETS À VENIR ---------------- */

const NewsSection = () => {
  const items = [
    {
      tag: "Projet à venir",
      title: "Lancement de la première collection BAWON Spirit",
      text: "Une série limitée pensée comme un premier manifeste de la maison : matières, verre, nuit et rites revisités.",
    },
    {
      tag: "Écosystème",
      title: "Développement du pôle BAWON Cacao",
      text: "Travail en cours sur le sourcing, les partenariats avec des producteurs et le design des premières tablettes.",
    },
    {
      tag: "Investissement",
      title: "Ouverture d’un cercle d’intérêt investisseurs",
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

/* ---------------- CONTACT & INFOS ---------------- */

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
          {/* Formulaire simplifié */}
          <form
            className="space-y-4 rounded-3xl border border-purple-500/40 bg-black/70 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.9)]"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Formulaire contact soumis (démo). Tu pourras ensuite connecter ce formulaire à un service d’e-mail."
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

          {/* Infos côté droit */}
          <div className="space-y-5 text-sm text-white/75" id="about">
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
              <p>contact@bawon-plus.com (exemple à remplacer)</p>
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
            Nos pôles
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

