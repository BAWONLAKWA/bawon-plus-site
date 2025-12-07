import React from "react";
import { motion } from "framer-motion";
import Layout, { PALETTE } from "@/components/Layout";

const POLES = [
  { key: "cacao", label: "Cacao", tagline: "Terroirs, fèves & créations chocolatées", color: "#6a3e2f" },
  { key: "boutiques", label: "Boutiques", tagline: "Objets, lifestyle & éditions limitées", color: "#f5f2e9" },
  { key: "spiritueux", label: "Spiritueux", tagline: "Rhums Bawon+, liqueurs & mixologie", color: "#d6b26f" },
  { key: "parc", label: "Parc Nature", tagline: "Art vivant, botanique & immersion", color: "#2f5f3a" },
  { key: "divers", label: "Divers", tagline: "Projets spéciaux & collaborations", color: "#7b7f8a" },
  { key: "hotellerie", label: "Hôtellerie", tagline: "Séjours d'exception inspirés d'Haïti", color: "#1b2a4a" },
  { key: "sante", label: "Santé", tagline: "Bien-être & hospitalité soignante", color: "#3c6f8f" },
  { key: "music", label: "Bawon Music", tagline: "Label, live & sound-design", color: "#7a3cff" },
  { key: "habillages", label: "Habillages", tagline: "Design, packaging & identité visuelle", color: "#f0c272" }
];

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <PolesGrid />
      <InvestSection />
    </Layout>
  );
}

function Hero() {
  return (
    <motion.section
      id="univers"
      className="relative overflow-hidden rounded-3xl border mb-10"
      style={{
        borderColor: "#ffffff18",
        background:
          "radial-gradient(circle at 0% 0%, #7a3cff55, #05030a 55%, #d6b26f33 100%)"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid md:grid-cols-2 gap-0 min-h-[380px]">
        <div className="flex flex-col justify-center px-6 md:px-10 py-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/60 mb-2">
            L'excellence haïtienne
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
            Éveillez vos sens,
            <br />
            connectez-vous aux esprits,
            <br />
            explorez les mystères.
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/80 max-w-md">
            BAWON+ tisse un pont entre passé et futur, entre héritage haïtien,
            art spirituel et créations contemporaines : spiritueux, cacao, musique,
            hôtellerie, expériences.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#poles"
              className="rounded-2xl px-5 py-2 text-sm font-medium bg-white text-black hover:opacity-90"
            >
              Découvrir l'univers
            </a>
            <a
              href="#invest"
              className="rounded-2xl px-5 py-2 text-sm font-medium"
              style={{ background: PALETTE.accent2, color: "#ffffff" }}
            >
              Investir dans Bawon+
            </a>
          </div>
        </div>
        <div className="relative flex items-center justify-center bg-black/50">
          <div className="relative w-[85%] max-w-md aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 bg-black/60 flex items-center justify-center">
            <motion.button
              className="flex flex-col items-center gap-2 text-white/80"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center text-xl">
                ▶
              </span>
              <span className="text-xs tracking-wide uppercase">
                Imaginer un instant…
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="mb-10 grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border"
      style={{ borderColor: "#ffffff18" }}
    >
      <div className="hidden md:block bg-[url('https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg')] bg-cover bg-center min-h-[320px]" />
      <div className="bg-[#f8f3e6] text-[#221814] px-6 md:px-10 py-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">À propos</h2>
        <p className="text-sm md:text-base leading-relaxed mb-3">
          <strong>BAWON+</strong> est né d’une ambition : révéler l’excellence
          haïtienne au monde. Inspiré par les traditions, les symboles et
          l’héritage spirituel d’Haïti, BAWON+ transforme savoir-faire et
          imaginaires en expériences modernes, sensorielles et luxueuses.
        </p>
        <p className="text-sm md:text-base leading-relaxed mb-3">
          Nos rhums, nos chocolats et nos créations lifestyle ne sont pas de
          simples produits : ce sont des récits, des identités, des passerelles
          entre passé et futur.
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          BAWON+ explore, réinvente et fait rayonner une culture riche, profonde
          et mystique. L’univers s’étend du spiritueux à la musique, des lieux
          d’hospitalité aux expériences immersives.
        </p>
      </div>
    </section>
  );
}

function PolesGrid() {
  return (
    <section id="poles" className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-white">Nos pôles</h2>
        <p className="text-xs text-white/60 max-w-xs text-right hidden md:block">
          Un écosystème culturel et économique articulé autour de pôles
          complémentaires : produits, lieux, expériences et musique.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {POLES.map((pole, idx) => (
          <motion.article
            key={pole.key}
            className="relative rounded-3xl border p-5 flex flex-col justify-between min-h-[150px] overflow-hidden group"
            style={{ borderColor: "#d6b26f66", background: "#05030a" }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at 0 0, ${pole.color}44, transparent 60%)`
              }}
            />
            <div className="relative z-10">
              <h3 className="text-lg font-medium text-white mb-1">
                {pole.label}
              </h3>
              <p className="text-sm text-white/80">{pole.tagline}</p>
            </div>
            <div className="relative z-10 mt-4 flex items-center justify-between text-xs text-white/60">
              <span>Explorer</span>
              <span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                →
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function InvestSection() {
  return (
    <section
      id="invest"
      className="mb-10 rounded-3xl border p-6 md:p-8 grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-6"
      style={{ borderColor: "#ffffff22", background: "#0f0a19" }}
    >
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-2">
          Investisseurs & partenaires
        </p>
        <h2 className="text-2xl font-semibold text-white mb-2">
          Construire BAWON+ avec vous
        </h2>
        <p className="text-sm text-white/80 mb-3 max-w-md">
          BAWON+ se structure comme une plateforme de marques et d’expériences :
          spiritueux, cacao, musique, hôtellerie, parc nature… Les modalités
          d’investissement et de partenariat sont pensées sur-mesure avec nos
          conseils financiers et juridiques.
        </p>
        <p className="text-sm text-white/80 mb-3">
          Pour les investisseurs VIP, family offices, partenaires stratégiques
          et opérateurs, un espace dédié permet d’accéder à plus d’informations,
          sous réserve d’éligibilité.
        </p>
        <div className="flex flex-wrap gap-3 mt-4">
          <a
            href="/investisseurs"
            className="rounded-2xl px-5 py-2 text-sm font-medium bg-white text-black hover:opacity-90"
          >
            Accéder à la page investisseurs
          </a>
          <a
            href="/partenariats"
            className="rounded-2xl px-5 py-2 text-sm font-medium border border-white/30 text-white hover:bg-white/5"
          >
            Voir les types de partenariats
          </a>
        </div>
      </div>
      <div
        className="rounded-2xl border border-white/15 p-4 text-sm text-white/80 flex flex-col justify-between"
        style={{
          background:
            "radial-gradient(circle at 0 0, #d6b26f33, #0f0a19 60%)"
        }}
      >
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
            Note importante
          </p>
          <p className="text-xs">
            Les informations présentées sur ce site ont une vocation générale et
            ne constituent pas une offre publique de titres ni un conseil en
            investissement. Toute décision d’investissement devra être prise
            avec vos propres conseils juridiques, fiscaux et financiers.
          </p>
        </div>
      </div>
    </section>
  );
}
