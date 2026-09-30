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
    label: "BAWON Produits",
    eyebrow: "Marques · objets · culture",
    image: "/images/demo/bawon-cuvee-demo.jpg",
    headline: "Des objets qui racontent une origine.",
    intro: "Un espace de démonstration pour penser les collections BAWON : pièces culturelles, textile, cadeaux, collaborations et éditions limitées.",
    metrics: [["4", "collections en conception"], ["12", "références à documenter"], ["3", "partenaires créatifs à qualifier"]],
    cards: [["Collection Lakwa", "Textile & accessoires", "Moodboards, matières et série pilote."], ["Objets de table", "Culture & maison", "Coffrets, verrerie et pièces d’histoire."], ["Éditions diaspora", "Distribution", "Sélection pensée pour les marchés internationaux."]],
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
};
