import Link from "next/link";
import Layout from "../components/Layout";

const pages = {
  "financer-mon-projet": ["Financer mon projet", "Préparez un dossier clair avant toute revue.", "Le parcours complet comprendra identité, projet, objectif, équipe, marché, besoins, budget, financement recherché, documents, impact, revue et soumission. La sauvegarde de brouillon et la soumission nécessitent une authentification et un espace de données sécurisé : elles ne sont pas encore ouvertes."],
  soutenir: ["Soutenir un projet", "Soutenir n'est pas investir.", "Les modalités de don ou de contribution ne sont pas ouvertes. Aucun paiement n'est collecté sur ce site à ce stade. Lorsqu'un dispositif réel sera disponible, ses conditions, son porteur et le traitement des fonds seront publiés clairement."],
  investir: ["Investir", "Aucune opportunité d'investissement n'est ouverte.", "BAWON+ ne garantit ni rendement ni capital. L'accès à des opportunités ne pourra être activé qu'après cadre réglementaire, documentation, contrôles et validation de l'éligibilité appropriés."],
  "bawon-connect": ["Bawon Connect", "Mettre un besoin en relation avec une solution.", "Bawon Connect ne vend pas des produits entre particuliers. Il aidera les projets à documenter leurs besoins et à suivre les mises en relation, décisions et résultats avec investisseurs, experts, entreprises, diaspora, institutions, ONG et partenaires internationaux."],
  accompagnement: ["Accompagnement Bawon", "Structurer avant d'accélérer.", "Le futur parcours couvrira le diagnostic, le business plan, le prévisionnel, la structuration financière, la préparation investisseurs, la recherche de financement, la mise en relation et le développement international. Les activités réglementées seront traitées uniquement par des professionnels habilités."],
  partenaires: ["Nos partenaires", "Un répertoire fondé sur des confirmations.", "Aucun partenaire n'est affiché car aucune relation vérifiée n'est disponible dans le référentiel public. Une entreprise accompagnée, soutenue ou financée ne sera jamais présentée comme une participation BAWON sans preuve de détention vérifiée."],
  actualites: ["Actualités", "Une information sourcée, pas un flux décoratif.", "Aucune actualité vérifiée n'est actuellement publiée. Les catégories prévues sont Bawon, Finance, Projets, Participations, Partenariats, Haïti, Diaspora, International et Innovation. Chaque publication future indiquera au minimum sa date, son auteur et sa source si pertinente."],
};

export default function PublicRoute({ slug }) {
  const [title, lead, body] = pages[slug];
  return <Layout><main className="mx-auto max-w-3xl py-16"><p className="bawon-eyebrow">BAWON+</p><h1 className="mt-3 text-4xl font-bold">{title}</h1><p className="mt-5 text-xl text-[#d6b26f]">{lead}</p><div className="bawon-card mt-10"><p className="leading-7 text-white/75">{body}</p></div><Link href="/" className="mt-8 inline-block text-sm text-white/70 hover:text-white">← Retour à l'accueil</Link></main></Layout>;
}
export function getStaticPaths() { return { paths: Object.keys(pages).map((slug) => ({ params: { slug } })), fallback: false }; }
export function getStaticProps({ params }) { return { props: { slug: params.slug } }; }
