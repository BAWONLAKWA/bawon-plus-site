import React, { useState } from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Header />
      <Hero />
      <Story />
      <Poles />
      <LifestyleShowcase />
      <InvestorsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

/* ---------------- HEADER ---------------- */

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl tracking-[0.35em] font-semibold text-purple-300 uppercase">
            BAWON
          </span>
          <span className="text-2xl font-bold text-purple-400">+</span>
        </div>

      {/* Nav */}
        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#hero" className="text-white/70 hover:text-white transition-colors">
            Accueil
          </a>
          <a href="#story" className="text-white/70 hover:text-white transition-colors">
            Histoire
          </a>
          <a href="#poles" className="text-white/70 hover:text-white transition-colors">
            Nos pôles
          </a>
          <a href="#invest" className="text-white/70 hover:text-white transition-colors">
            Investisseurs
          </a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA droite */}
        <div className="flex items-center gap-3">
          <button className="hidden rounded-full border border-purple-400 px-4 py-1 text-xs font-medium uppercase tracking-widest text-purple-200 hover:bg-purple-600/20 md:inline-block">
            Réserver
          </button>
          <div className="flex gap-3 text-sm text-white/70">
            <span className="hover:text-white cursor-pointer">IG</span>
            <span className="hover:text-white cursor-pointer">X</span>
            <span className="hover:text-white cursor-pointer">YT</span>
          </div>
        </div>
      </div>
    </header>
  );
};

/* ---------------- HERO INTERACTIF ---------------- */

const Hero = () => {
  const [transform, setTransform] = useState(
    "rotateX(7deg) rotateY(-8deg) scale(1.02)"
  );

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`);
  };

  const resetTransform = () => {
    setTransform("rotateX(7deg) rotateY(-8deg) scale(1.02)");
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Image de fond principale */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/bawon-hero-still-life.png')",
        }}
      />
      {/* Voile sombre */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      {/* Contenu */}
      <div className="relative z-10 mt-16 flex w-full max-w-6xl flex-col items-center gap-10 px-4 text-center md:flex-row md:items-center md:text-left">
        {/* Bloc texte */}
        <div className="flex-1 space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-purple-200/80">
            Maison BAWON+
          </p>
          <h1 className="text-4xl font-semibold tracking-[0.35em] text-purple-200 md:text-5xl">
            BAWON<span className="text-purple-400">+</span>
          </h1>
          <p className="max-w-xl text-lg text-white/85 md:text-xl italic">
            L’excellence haïtienne, du passé vers le futur. Une maison où
            spiritueux, cacao, lifestyle et art se rencontrent dans un univers
            nocturne et mystique.
          </p>

          <div className="mt-6 flex flex-col gap-4 md:flex-row">
            <a
              href="#poles"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-slate-100 transition"
            >
              Découvrir l’univers
            </a>
            <a
              href="#invest"
              className="inline-flex flex-1 items-center justify-center rounded-full bg-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/60 hover:bg-purple-500 transition"
            >
              Espace investisseurs
            </a>
          </div>
        </div>

        {/* Bloc visuel 3D interactif */}
        <div
          className="mt-10 flex flex-1 items-center justify-center md:mt-0"
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTransform}
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative h-72 w-72 rounded-[2rem] border border-purple-500/40 bg-gradient-to-br from-purple-900/40 via-black/60 to-black shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden"
            style={{
              transform: transform,
              transformStyle: "preserve-3d",
              transition: "transform 0.12s ease-out",
            }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/bawon-spirits-1.png')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-purple-200/80">
                Collection Signature
              </p>
              <p className="text-sm text-white/90">
                Spiritueux BAWON+, servis comme des rituels modernes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- HISTOIRE ---------------- */

const Story = () => {
  return (
    <section
      id="story"
      className="relative bg-[#111] py-20 text-white/90 border-t border-white/10"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
        {/* Image gauche */}
        <div className="relative flex-1">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-purple-500/30 bg-black shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/bawon-spirits-2.png')",
              }}
            />
          </div>
          <div className="pointer-events-none absolute -bottom-6 -right-4 rounded-full border border-purple-500/40 bg-black/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-purple-200/80">
            Haïti · Nocturne · Luxe
          </div>
        </div>

        {/* Texte droit */}
        <div className="flex-1 space-y-6">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-purple-200/80">
            À propos
          </p>
          <h2 className="text-3xl font-semibold text-purple-100">
            L’histoire de BAWON+
          </h2>
          <p className="text-sm leading-relaxed text-white/80">
            BAWON+ est né d’une ambition : révéler l’excellence haïtienne au
            monde. Inspirée par l’héritage culturel et spirituel d’Haïti, la
            maison BAWON+ transforme rites, symboles et savoir-faire en
            expériences contemporaines, luxueuses et exigeantes.
          </p>
          <p className="text-sm leading-relaxed text-white/80">
            Des spiritueux aux créations lifestyle, chaque pièce BAWON+ est
            pensée comme un rituel moderne : un moment de nuit suspendue où
            l’on célèbre la mémoire, la fête, la beauté et la profondeur
            d’une culture trop souvent méconnue.
          </p>
          <p className="text-sm leading-relaxed text-white/80">
            BAWON+ construit un pont entre passé et futur, entre spiritualité et
            design, entre Haïti et le reste du monde. Une maison de nuit, de
            lumière violette et d’élégance radicale.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ---------------- NOS PÔLES ---------------- */

const Poles = () => {
  const poles = [
    {
      name: "Spiritueux",
      desc: "Rhum, liqueurs et créations nocturnes signées BAWON+.",
      color: "from-purple-700/40 to-black",
      border: "border-purple-500/40",
      image: "/images/bawon-spirits-1.png",
    },
    {
      name: "Cacao",
      desc: "Chocolats noirs d’exception, issus d’un terroir caribéen.",
      color: "from-amber-700/40 to-black",
      border: "border-amber-500/40",
      image: "/images/bawon-chocolate.png",
    },
    {
      name: "Mode & Lifestyle",
      desc: "Vestiaire nocturne, tailoring et pièces de soirée BAWON+.",
      color: "from-purple-900/40 to-black",
      border: "border-purple-400/40",
      image: "/images/bawon-fashion.png",
    },
    {
      name: "Santé & Bien-être",
      desc: "Pôle orienté prévention, accompagnement et solutions santé.",
      color: "from-emerald-700/40 to-black",
      border: "border-emerald-500/40",
      image: "/images/bawon-health.png",
    },
    {
      name: "Hébergement & Hôtellerie",
      desc: "Expériences nocturnes, hospitalité haut de gamme, lieux BAWON+.",
      color: "from-purple-800/40 to-black",
      border: "border-purple-500/40",
      image: "/images/bawon-hotel.png",
    },
    {
      name: "Musique & Expériences",
      desc: "Événements, DJ sets, live sessions : la nuit version BAWON+.",
      color: "from-indigo-700/40 to-black",
      border: "border-indigo-500/40",
      image: "/images/bawon-music.png",
    },
  ];

  return (
    <section
      id="poles"
      className="relative border-t border-white/10 bg-black py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-purple-200/80">
            Univers
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-purple-100">
            Nos pôles BAWON+
          </h2>
          <p className="mt-3 text-sm text-white/60 max-w-xl mx-auto">
            Une maison, plusieurs univers. Chaque pôle possède sa signature, sa
            couleur et son langage, reliés par le même esprit : BAWON+.
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
      className={`group relative overflow-hidden rounded-3xl border ${pole.border} bg-gradient-to-br ${pole.color} shadow-[0_20px_60px_rgba(0,0,0,0.9)]`}
    >
      <div className="relative h-40 overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url('${pole.image}')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="space-y-3 px-5 pb-5 pt-4">
        <h3 className="text-lg font-semibold text-white">{pole.name}</h3>
        <p className="text-xs text-white/70 leading-relaxed">{pole.desc}</p>
        <button className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-purple-200 group-hover:text-white transition">
          Explorer ce pôle
          <span className="text-sm">↗</span>
        </button>
      </div>
    </article>
  );
};

/* ---------------- VITRINE LIFESTYLE ---------------- */

const LifestyleShowcase = () => {
  return (
    <section className="relative border-t border-white/10 bg-[#09030f] py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center">
        <div className="flex-1 space-y-5">
          <p className="text-xs uppercase tracking-[0.4em] text-purple-200/80">
            Maison BAWON+
          </p>
          <h2 className="text-3xl font-semibold text-purple-100">
            Une vision globale, un projet en mouvement
          </h2>
          <p className="text-sm text-purple-50/80 leading-relaxed">
            BAWON+ se construit pas à pas : collections limitées, lieux pilotes,
            collaborations, évènements nocturnes et programmes d’impact. Chaque
            soutien, chaque partenariat nous aide à accélérer la construction de
            cet écosystème haïtien d’excellence.
          </p>
          <p className="text-sm text-purple-50/75 leading-relaxed">
            Marque, maison de spiritueux, label lifestyle, projet culturel :
            BAWON+ est pensé pour devenir une plateforme qui relie création,
            diaspora et investissements responsables.
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-purple-400/50 px-3 py-1 text-purple-100/90">
              Terroir & savoir-faire
            </span>
            <span className="rounded-full border border-purple-400/50 px-3 py-1 text-purple-100/90">
              Culture & musique
            </span>
            <span className="rounded-full border border-purple-400/50 px-3 py-1 text-purple-100/90">
              Impact & transmission
            </span>
          </div>
        </div>

        <div className="flex-1">
          <div className="grid gap-4 md:grid-cols-2">
            <MiniShowcaseCard
              image="/images/bawon-chocolate.png"
              label="Cacao & chocolats"
            />
            <MiniShowcaseCard
              image="/images/bawon-fashion.png"
              label="Mode & lifestyle"
            />
            <MiniShowcaseCard
              image="/images/bawon-music.png"
              label="Musique & expériences"
            />
            <MiniShowcaseCard
              image="/images/bawon-hotel.png"
              label="Hospitalité & lieux"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const MiniShowcaseCard = ({ image, label }) => (
  <div className="group relative overflow-hidden rounded-3xl border border-purple-500/30 bg-black shadow-[0_18px_50px_rgba(0,0,0,0.9)]">
    <div
      className="h-32 w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
      style={{ backgroundImage: `url('${image}')` }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
    <div className="absolute bottom-3 left-4 text-xs font-medium text-purple-50">
      {label}
    </div>
  </div>
);

/* ---------------- INVESTISSEURS ---------------- */

const InvestorsSection = () => {
  return (
    <section
      id="invest"
      className="relative border-t border-white/10 bg-black py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-purple-200/80">
            Investisseurs
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-purple-100">
            Espace investisseurs BAWON+
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-2xl mx-auto">
            Cet espace permet aux personnes et institutions intéressées par le
            projet BAWON+ de manifester leur intérêt et de recevoir des
            informations dédiées. Il ne s’agit pas d’une offre publique
            d’investissement, mais d’une prise de contact qualifiée.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Visuel */}
          <div className="relative overflow-hidden rounded-3xl border border-purple-500/40 bg-gradient-to-br from-purple-900/40 via-black to-black shadow-[0_22px_70px_rgba(0,0,0,0.95)]">
            <div
              className="h-64 w-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/bawon-hotel.png')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 space-y-1 text-sm text-purple-50">
              <p className="text-xs uppercase tracking-[0.3em] text-purple-200/80">
                Vision long terme
              </p>
              <p>
                Développement de lieux BAWON+, distribution sélective,
                activations culturelles et impact sur le territoire haïtien et
                la diaspora.
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="rounded-3xl border border-purple-500/40 bg-[#0b0712] p-6 shadow-[0_18px_55px_rgba(0,0,0,0.9)]">
            <h3 className="mb-4 text-lg font-semibold text-purple-100">
              Manifester son intérêt
            </h3>
            <p className="mb-5 text-xs text-purple-100/70">
              Remplissez ce formulaire pour être recontacté·e avec des
              informations adaptées à votre profil (particulier, partenaire,
              institution).
            </p>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Formulaire investisseurs soumis. Tu pourras ensuite connecter ce formulaire à un back-end (email, base de données, etc.)."
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
                  <label className="text-xs text-purple-100/80">
                    Adresse e-mail
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-lg border border-purple-500/40 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-purple-300"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-purple-100/80">
                  Montant envisagé (indicatif)
                </label>
                <input
                  type="text"
                  placeholder="Ex : 5 000 €, 20 000 €…"
                  className="mt-1 w-full rounded-lg border border-purple-500/40 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-purple-300"
                />
              </div>
              <div>
                <label className="text-xs text-purple-100/80">
                  Type d’intérêt
                </label>
                <select className="mt-1 w-full rounded-lg border border-purple-500/40 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-purple-300">
                  <option>Don / soutien</option>
                  <option>Participation future au capital</option>
                  <option>Partenariat stratégique</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-purple-100/80">Message</label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-purple-500/40 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-purple-300"
                  placeholder="Présentez en quelques lignes votre intérêt pour BAWON+."
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white hover:bg-purple-500 transition shadow-lg shadow-purple-900/70"
              >
                Envoyer ma demande
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- CONTACT ---------------- */

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative border-t border-white/10 bg-[#070509] py-20"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-purple-200/80">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-purple-100">
            Contacter la maison BAWON+
          </h2>
          <p className="mt-3 text-sm text-white/65 max-w-xl mx-auto">
            Presse, collaborations, événements, demandes générales : utilisez
            ce formulaire ou contactez-nous via nos réseaux.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Formulaire */}
          <form
            className="space-y-4 rounded-3xl border border-purple-500/40 bg-black/70 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.9)]"
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Formulaire contact soumis. Tu pourras ensuite relier ce formulaire à un service d’e-mail."
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
                Objet de la demande
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-purple-500/40 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-purple-300"
                placeholder="Presse, partenariat, réservation…"
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

          {/* Infos / réseaux */}
          <div className="space-y-5 text-sm text-white/75">
            <h3 className="text-lg font-semibold text-purple-100">
              Informations & réseaux
            </h3>
            <p>
              BAWON+ est un projet en développement. Les informations présentées
              sur ce site ont vocation à présenter l’univers, la vision et les
              pôles de la maison.
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
          <a href="#hero" className="hover:text-white">
            Accueil
          </a>
          <a href="#story" className="hover:text-white">
            Histoire
          </a>
          <a href="#poles" className="hover:text-white">
            Nos pôles
          </a>
          <a href="#invest" className="hover:text-white">
            Investisseurs
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
