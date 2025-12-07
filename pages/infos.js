import React from "react";
import Layout from "../components/Layout";

export default function InfosPage() {
  return (
    <Layout>
      <section className="mt-6 mb-10">
        <h1 className="text-2xl font-semibold text-white mb-3">
          Réseaux & mentions légales
        </h1>

        <p className="text-sm text-white/80 mb-4 max-w-2xl">
          Cette section présente les principaux points d’information à propos de
          BAWON+ : présence en ligne, mentions légales de base et premiers
          éléments de politique de confidentialité. Le contenu détaillé pourra
          être ajusté avec ton avocat ou expert-comptable plus tard.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/15 p-4 bg-white/5">
            <h2 className="text-sm font-semibold text-white mb-2">
              Réseaux sociaux
            </h2>
            <ul className="text-sm text-white/80 space-y-1">
              <li>Instagram : @bawonplus (exemple, à adapter)</li>
              <li>TikTok : @bawonplus</li>
              <li>LinkedIn : BAWON+ Holding (à créer si besoin)</li>
              <li>Autres plateformes : à compléter</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/15 p-4 bg-white/5">
            <h2 className="text-sm font-semibold text-white mb-2">
              Mentions légales (version courte)
            </h2>
            <p className="text-xs text-white/70 mb-2">
              Les informations ci-dessous sont indicatives. Une version complète
              des mentions légales devra être validée par un professionnel du
              droit (avocat, juriste, expert-comptable) selon la forme juridique
              retenue et le pays d’implantation.
            </p>
            <ul className="text-xs text-white/70 space-y-1">
              <li>Dénomination : BAWON+ (projet de holding culturelle)</li>
              <li>Activités : spiritueux, cacao, musique, hospitality, etc.</li>
              <li>Siège social : à définir</li>
              <li>Directeur / direction de la publication : à définir</li>
              <li>Hébergeur du site : à préciser (ex. Vercel + registrar)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/15 p-4 bg-white/5 text-xs text-white/70">
          <p className="mb-1 font-semibold">Données & confidentialité</p>
          <p>
            Ce site est en cours de construction. Les formulaires de contact,
            comptes investisseurs et autres espaces connectés devront être mis
            en conformité avec la réglementation applicable (ex. RGPD pour
            l’Europe) avant leur mise en production.
          </p>
        </div>
      </section>
    </Layout>
  );
}
