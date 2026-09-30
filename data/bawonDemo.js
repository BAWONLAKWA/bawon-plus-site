export const demoProjects = [
  { id: "spirit", sector: "Boissons · marque", title: "BAWON Spirit — première série", location: "Haïti ↔ diaspora", objective: "180 000 €", committed: "115 200 €", progress: 64, backers: "38", ticket: "2 500 €", deadline: "42 jours", stage: "Analyse documentaire", tag: "Production & distribution", image: "/images/demo/bawon-spirit-demo.jpg", milestone: "Étape 1/3 · identité, prototype et conformité" },
  { id: "cacao", sector: "Agro-industrie", title: "Cacao Lakay", location: "Nord, Haïti", objective: "245 000 €", committed: "93 100 €", progress: 38, backers: "21", ticket: "5 000 €", deadline: "58 jours", stage: "Préparation", tag: "Transformation locale", image: "/images/demo/bawon-bottle-demo.jpg", milestone: "Étape 1/3 · sourcing et capacité de production" },
  { id: "export", sector: "Commerce · diaspora", title: "Caribbean Trade Link", location: "Haïti ↔ Montréal", objective: "95 000 €", committed: "68 400 €", progress: 72, backers: "17", ticket: "1 500 €", deadline: "18 jours", stage: "Revue du comité", tag: "Export", image: "/images/demo/bawon-cuvee-demo.jpg", milestone: "Étape 2/3 · réseau de distribution et premiers lots" },
];

export const demoFundingSummary = [
  ["3", "dossiers en revue"],
  ["520 000 €", "objectif cumulé démo"],
  ["276 700 €", "engagements démo"],
  ["53 %", "avancement pondéré"],
];

export const demoPartners = [
  { name: "Atelier Finance Caraïbes", type: "Conseil financier", country: "Haïti", match: "Prévisionnel & structuration" },
  { name: "North Atlantic Distribution", type: "Distribution", country: "Canada", match: "Ouverture marché" },
  { name: "Impact Bridge Network", type: "Réseau diaspora", country: "France", match: "Mise en relation" },
];

export const demoUpdates = [
  ["Analyse", "Cacao Lakay", "Pièces financières reçues", "Il y a 2 h"],
  ["Connect", "Caribbean Trade Link", "Partenaire de distribution identifié", "Hier"],
  ["Accompagnement", "Soley Kominotè", "Atelier prévisionnel planifié", "Jeudi"],
];

export const ecosystemSpaces = {
  "bawon-produits": {
    label: "BAWON Produits & Alimentation",
    eyebrow: "Alimentation · boissons · objets · culture",
    image: "/images/demo/bawon-cuvee-demo.jpg",
    headline: "Des produits et saveurs qui racontent une origine.",
    intro: "Le pôle BAWON Produits & Alimentation réunit les boissons, spiritueux, cacao, objets, textile, cadeaux et collaborations. Boissons est une catégorie de produits, pas une division isolée.",
    metrics: [["6", "gammes à structurer"], ["12", "références à documenter"], ["3", "partenaires créatifs à qualifier"]],
    cards: [["BAWON Boissons", "Alimentation & boissons", "Spiritueux, cocktails, formats découverte et distribution sélective."], ["Cacao & gourmandises", "Alimentation", "Transformation, coffrets et circuits de distribution à structurer."], ["Collection Lakwa", "Objets & textile", "Accessoires, cadeaux, collaborations et séries limitées."]],
  },
  "bawon-boissons": {
    label: "BAWON Boissons",
    eyebrow: "Spiritueux · cocktails · distribution",
    image: "/images/demo/bawon-spirit-demo.jpg",
    headline: "Une gamme pensée pour l’expérience, pas seulement le produit.",
    intro: "La vitrine de démonstration des futures lignes BAWON : spiritueux, cocktails, formats découverte et distribution sélective.",
    metrics: [["3", "gammes à structurer"], ["2", "formats pilotes"], ["5", "marchés à étudier"]],
    cards: [["BAWON Spirit", "Série signature", "Identité, prototype, conformité et premiers lots."], ["BAWON Cocktails", "Expérience", "Recettes, service et formats événementiels."], ["Diaspora Select", "Distribution", "Préparation de l’export et des partenaires locaux."]],
  },
  "bawon-industrie": {
    label: "BAWON Industrie",
    eyebrow: "Production · transformation · logistique",
    image: "/images/demo/bawon-bottle-demo.jpg",
    headline: "Transformer localement, grandir durablement.",
    intro: "Un espace de démonstration pour les capacités de production, les ateliers, la qualité et les chaînes de distribution BAWON.",
    metrics: [["3", "axes de production"], ["6", "jalons opérationnels"], ["2", "scénarios logistiques"]],
    cards: [["Atelier pilote", "Capacité", "Étude des équipements, volumes et standards qualité."], ["Chaîne de valeur", "Transformation", "Sourcing, emballage, stockage et traçabilité."], ["Distribution", "Logistique", "Parcours local, régional et international à comparer."]],
  },
  "bawon-tech": {
    label: "BAWON Tech", eyebrow: "Innovation · plateformes · données", image: "/images/bawon-earth-network.webp", headline: "Des outils utiles, pensés depuis Haïti vers le monde.", intro: "Un espace pour les futures plateformes, outils de connexion, services numériques et innovations BAWON.", metrics: [["3", "produits numériques à cadrer"], ["2", "cas d’usage prioritaires"], ["1", "réseau d’innovation à structurer"]], cards: [["Bawon Connect", "Plateforme", "Mise en relation structurée entre besoins et solutions."], ["Données & suivi", "Outils", "Tableaux de bord, documentation et pilotage."], ["Innovation locale", "Écosystème", "Repérage de solutions haïtiennes à faire connaître."]],
  },
  "bawon-sante": {
    label: "BAWON Santé", eyebrow: "Prévention · accès · bien-être", image: "/images/bawon-earth-network.webp", headline: "Faire grandir des initiatives utiles au bien-être.", intro: "Un espace pour les projets santé, prévention, distribution responsable et partenariats d’impact.", metrics: [["3", "axes d’impact"], ["4", "étapes de qualification"], ["0", "programme ouvert"]], cards: [["Prévention", "Sensibilisation", "Formats d’information accessibles et ancrés localement."], ["Accès", "Partenariats", "Réseaux et solutions à qualifier avec les professionnels habilités."], ["Bien-être", "Innovation", "Initiatives responsables à étudier avec les acteurs concernés."]],
  },
  "bawon-creatif": {
    label: "BAWON Créatif", eyebrow: "Culture · image · création", image: "/images/demo/bawon-cuvee-demo.jpg", headline: "Faire rayonner les histoires, les talents et les marques.", intro: "Un espace pour la photographie, la direction artistique, le contenu, la musique et les collaborations culturelles BAWON.", metrics: [["5", "formats créatifs"], ["3", "collaborations à imaginer"], ["1", "univers de marque"]], cards: [["Studio BAWON", "Image", "Photographie, campagnes et direction artistique."], ["Label & contenu", "Culture", "Musique, récit et formats éditoriaux."], ["Collaborations", "Création", "Projets communs avec des talents et marques sélectionnés."]],
  },
  "bawon-hospitality": {
    label: "BAWON Hospitality", eyebrow: "Accueil · tourisme · expériences", image: "/images/demo/bawon-spirit-demo.jpg", headline: "Créer des expériences qui font découvrir Haïti autrement.", intro: "Un espace pour l’hospitalité, le tourisme culturel, les événements et les collaborations d’accueil BAWON.", metrics: [["3", "formats d’expérience"], ["2", "territoires à explorer"], ["4", "jalons de préparation"]], cards: [["Expériences BAWON", "Événementiel", "Moments culturels, dégustations et rencontres."], ["Hospitalité", "Accueil", "Partenariats avec lieux et professionnels qualifiés."], ["Tourisme culturel", "Découverte", "Parcours responsables autour des cultures haïtiennes."]],
  },
};

export const referenceProfiles = [
  { name: "Atelier Finance Caraïbes", category: "Conseil financier", relationship: "Partenaire · démo", summary: "Profil de démonstration : structuration financière, prévisionnels et préparation de dossiers.", status: "À qualifier" },
  { name: "Lakwa Studio", category: "Création & image", relationship: "Entreprise accompagnée · démo", summary: "Profil de démonstration : direction artistique, image de marque et contenus culturels.", status: "À documenter" },
  { name: "Nord Export Lab", category: "Distribution", relationship: "Partenaire commercial · démo", summary: "Profil de démonstration : préparation des réseaux de distribution et accès marché.", status: "À qualifier" },
  { name: "Soley Kominotè", category: "Énergie & impact", relationship: "Projet suivi · démo", summary: "Profil de démonstration : initiative locale avec dossier, jalons et besoins identifiés.", status: "En revue" },
];
