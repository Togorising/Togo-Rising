import type { Locale } from "./i18n";

export type Section = { title: string; description: string };
export type NavItem = { label: string; href: string };
export type Pillar = { title: string; description: string; href: string };

export type Dictionary = {
  meta: {
    titleSuffix: string;
    homeDescription: string;
  };
  nav: NavItem[];
  mission: string;
  heroOverlay: string;
  footer: {
    tagline: string;
    socialComingSoon: string;
    disclaimer: string;
  };
  home: {
    eyebrow: string;
    title: string;
    joinCommunity: string;
    exploreOpportunities: string;
    whereToStart: string;
    readyTitle: string;
    readyBody: string;
  };
  pillars: Pillar[];
  news: {
    title: string;
    disclaimer: string;
    sourcesLabel: string;
    errorText: string;
    emptyText: string;
  };
  networking: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    sections: Section[];
  };
  opportunities: {
    eyebrow: string;
    title: string;
    description: string;
    ctaJoin: string;
    ctaSubmit: string;
    disclaimer: string;
    sections: Section[];
  };
  newcomers: {
    eyebrow: string;
    title: string;
    description: string;
    ctaStart: string;
    ctaMentor: string;
    usaLink: string;
    sections: Section[];
  };
  usaPathways: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    sections: Section[];
  };
  professionals: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    sections: Section[];
  };
  shopTogo: {
    eyebrow: string;
    title: string;
    description: string;
    listedTitle: string;
    listedBody: string;
    cta: string;
    categoriesLabel: string;
    categories: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    emailHeading: string;
    emailBody: string;
    followHeading: string;
    followBody: string;
  };
  forms: {
    common: {
      nameLabel: string;
      emailLabel: string;
      cityLabel: string;
      submitLabel: string;
      sendingLabel: string;
      successTitle: string;
      successBody: string;
      errorTitle: string;
      errorBody: string;
      configMissingBody: string;
      requiredHint: string;
    };
    join: {
      title: string;
      description: string;
      lookingForLabel: string;
      lookingForPlaceholder: string;
    };
    opportunity: {
      title: string;
      description: string;
      opportunityTitleLabel: string;
      typeLabel: string;
      typeOptions: string[];
      detailsLabel: string;
      linkLabel: string;
    };
    newcomerIntake: {
      title: string;
      description: string;
      needHelpLabel: string;
      needHelpPlaceholder: string;
    };
    mentor: {
      title: string;
      description: string;
      fieldLabel: string;
      fieldPlaceholder: string;
      lookingForLabel: string;
      lookingForPlaceholder: string;
    };
    businessListing: {
      title: string;
      description: string;
      businessNameLabel: string;
      ownerNameLabel: string;
      categoryLabel: string;
      websiteLabel: string;
      descriptionLabel: string;
    };
  };
};

const en: Dictionary = {
  meta: {
    titleSuffix: "Togo Rising",
    homeDescription:
      "Togo Rising connects the Togolese diaspora: students, professionals, entrepreneurs, and newcomers, so no one has to figure it out alone.",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Networking", href: "/networking" },
    { label: "Opportunities", href: "/opportunities" },
    { label: "Newcomer Hub", href: "/newcomers" },
    { label: "Rising Professionals", href: "/professionals" },
    { label: "Shop Togo", href: "/shop-togo" },
    { label: "Contact", href: "/contact" },
  ],
  mission:
    "Togo Rising connects the Togolese diaspora: students, professionals, entrepreneurs, and newcomers, so no one has to figure it out alone. We share opportunities, mentorship, and pathways to succeed wherever you are.",
  heroOverlay: "Togolese, everywhere",
  footer: {
    tagline: "Empowering Togolese Everywhere",
    socialComingSoon: "Social links coming soon.",
    disclaimer:
      "Togo Rising shares opportunities and connects mentors to support the community. Participating doesn't guarantee a job, scholarship, or any other outcome.",
  },
  home: {
    eyebrow: "Togo Rising",
    title: "No one has to figure it out alone.",
    joinCommunity: "Join the Community",
    exploreOpportunities: "Explore Opportunities",
    whereToStart: "Where to start",
    readyTitle: "Ready to connect?",
    readyBody:
      "Join Togo Rising and get access to the directory, opportunities, and mentors already inside the community.",
  },
  pillars: [
    {
      title: "Networking",
      description:
        "A member directory, events, and warm introductions to Togolese diaspora wherever you're based.",
      href: "/networking",
    },
    {
      title: "Opportunities",
      description:
        "Jobs, scholarships, contracts, and grants shared inside the community first.",
      href: "/opportunities",
    },
    {
      title: "Newcomer Hub",
      description:
        "Mentor matching, language learning, school navigation, and career paths for those just arriving.",
      href: "/newcomers",
    },
    {
      title: "Rising Professionals",
      description:
        "Career mentorship, business start-up support, home buying, and FAFSA help as you build.",
      href: "/professionals",
    },
    {
      title: "Shop Togo",
      description:
        "Discover and support Togolese-owned businesses across the diaspora.",
      href: "/shop-togo",
    },
  ],
  news: {
    title: "Togo News",
    disclaimer:
      "Headlines aggregated automatically from multiple independent outlets. Togo Rising doesn't write, select, or endorse this coverage.",
    sourcesLabel: "Sources",
    errorText: "News couldn't be loaded right now. Try again later.",
    emptyText: "No headlines available right now. Check back soon.",
  },
  networking: {
    eyebrow: "Networking",
    title: "Find your people, wherever you are.",
    description:
      "A member directory, events, and warm introductions, built so the Togolese diaspora can find each other without starting from zero.",
    cta: "Join the Directory",
    sections: [
      {
        title: "Member Directory",
        description:
          "Find and connect with Togolese diaspora by city, industry, and interest. Search for people building in your field or living near you.",
      },
      {
        title: "Events",
        description:
          "Virtual meetups and in-person gatherings: mixers, cultural celebrations, and city meetups organized by the community.",
      },
      {
        title: "Introductions",
        description:
          "Ask for a warm introduction to someone in your field, your city, or your situation. No cold outreach required.",
      },
    ],
  },
  opportunities: {
    eyebrow: "Opportunities",
    title: "Opportunities shouldn't depend on who you know.",
    description:
      "Jobs, scholarships, contracts, and grants, shared inside the community first. New opportunities go out to members as they come in.",
    ctaJoin: "Join to Get Opportunities",
    ctaSubmit: "Submit an Opportunity",
    disclaimer:
      "Togo Rising shares these opportunities to support the community. Participating doesn't guarantee a job offer, scholarship, or any other outcome.",
    sections: [
      {
        title: "Jobs",
        description:
          "Openings shared by community members and partner employers: inside referrals, not just job board listings.",
      },
      {
        title: "Scholarships",
        description:
          "Funding opportunities for Togolese students and professionals pursuing further education.",
      },
      {
        title: "Contracts",
        description:
          "Freelance, consulting, and project work shared within the network.",
      },
      {
        title: "Grants",
        description:
          "Funding for entrepreneurs, nonprofits, and community initiatives led by Togolese diaspora.",
      },
    ],
  },
  newcomers: {
    eyebrow: "Newcomer Hub",
    title: "Landing somewhere new? Start here.",
    description:
      "Mentor matching, language learning, school navigation, and career paths, from people who've already been where you are.",
    ctaStart: "Get Started",
    ctaMentor: "Request a Mentor",
    usaLink: "Building a life in the U.S.? See USA Pathways →",
    sections: [
      {
        title: "Mentor Matching",
        description:
          "Get paired with someone who has already navigated what you're facing: a new city, a new job market, new systems.",
      },
      {
        title: "Language Learning",
        description:
          "Resources and conversation partners to build confidence in English, French, or both.",
      },
      {
        title: "School Navigation",
        description:
          "Help understanding enrollment, financial aid, and the school system for you or your kids.",
      },
      {
        title: "Career Paths",
        description:
          "Guidance on credential recognition, licensing, and translating your experience into your new market.",
      },
    ],
  },
  usaPathways: {
    eyebrow: "Newcomer Hub / USA Pathways",
    title: "Building a life in the United States.",
    description:
      "Military service, citizenship, higher education, and career pipelines, with guidance from people who've navigated these systems themselves.",
    cta: "Talk to Someone Who's Done It",
    sections: [
      {
        title: "Military",
        description:
          "Connect with Togolese military veterans across the community who are ready to share their firsthand experience with those considering military service.",
      },
      {
        title: "Citizenship",
        description:
          "Connect with community members who've been through naturalization themselves, from eligibility to interview preparation.",
      },
      {
        title: "Higher Education",
        description:
          "Connect with Togolese graduates in the community who can help with U.S. college applications, credential evaluation, and choosing the right path.",
      },
      {
        title: "Career Pipelines",
        description:
          "Structured routes into in-demand fields, built with people who've gone through the process themselves.",
      },
    ],
  },
  professionals: {
    eyebrow: "Rising Professionals",
    title: "Keep climbing, with people who've got your back.",
    description:
      "Career mentorship, business start-up support, home buying, and FAFSA help as you build your future.",
    cta: "Get Matched with a Mentor",
    sections: [
      {
        title: "Career Mentorship",
        description:
          "One-on-one guidance from professionals further along in your field, for promotions, transitions, or starting over.",
      },
      {
        title: "Start a Business",
        description:
          "Connect with Togolese entrepreneurs in the community who've already built their own, from first idea to formation, funding, and first customers.",
      },
      {
        title: "Home Buying",
        description:
          "Connect with licensed real estate agents and loan officers in the community who can walk you through the process before you make the biggest purchase of your life.",
      },
      {
        title: "FAFSA Help",
        description:
          "Hands-on help from community members who've done it before, completing financial aid forms for you or your children heading to college.",
      },
    ],
  },
  shopTogo: {
    eyebrow: "Shop Togo",
    title: "Support Togolese-owned businesses, wherever they are.",
    description:
      "A directory of Togolese entrepreneurs across the diaspora: food, fashion, services, and more. Shop Togo is just getting started.",
    listedTitle: "Be one of the first businesses listed.",
    listedBody:
      "Shop Togo is a new directory of Togolese-owned businesses across the diaspora. List yours now and be featured as soon as the directory launches.",
    cta: "List Your Business",
    categoriesLabel: "Categories",
    categories: [
      "Food & Catering",
      "Fashion & Textiles",
      "Beauty & Wellness",
      "Professional Services",
      "Import / Export",
      "Arts & Media",
      "Real Estate",
      "Other",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's talk.",
    description:
      "Questions, partnership ideas, or just want to say hello? Reach out anytime.",
    emailHeading: "Email us",
    emailBody: "For general inquiries, partnerships, or press.",
    followHeading: "Follow along",
    followBody: "Social links coming soon.",
  },
  forms: {
    common: {
      nameLabel: "Name",
      emailLabel: "Email",
      cityLabel: "City",
      submitLabel: "Submit",
      sendingLabel: "Sending…",
      successTitle: "Thank you.",
      successBody: "We received your submission and will be in touch soon.",
      errorTitle: "Something went wrong.",
      errorBody: "Please try again, or email us directly.",
      configMissingBody:
        "This form isn't fully set up yet. Please email us directly instead.",
      requiredHint: "Required",
    },
    join: {
      title: "Join the Community",
      description: "Tell us a bit about yourself and we'll get you connected.",
      lookingForLabel: "What are you hoping to find? (optional)",
      lookingForPlaceholder: "Job leads, mentorship, friends nearby, all of it…",
    },
    opportunity: {
      title: "Submit an Opportunity",
      description: "Share a job, scholarship, contract, or grant with the community.",
      opportunityTitleLabel: "Opportunity title",
      typeLabel: "Type",
      typeOptions: ["Job", "Scholarship", "Contract", "Grant"],
      detailsLabel: "Details",
      linkLabel: "Link (optional)",
    },
    newcomerIntake: {
      title: "Get Started",
      description: "Tell us where you are and what would help most right now.",
      needHelpLabel: "What do you need help with?",
      needHelpPlaceholder: "Housing, school enrollment, finding a mentor…",
    },
    mentor: {
      title: "Request a Mentor",
      description: "We'll match you with someone who's already been where you are.",
      fieldLabel: "Field or industry",
      fieldPlaceholder: "Nursing, software engineering, small business…",
      lookingForLabel: "What are you looking for in a mentor?",
      lookingForPlaceholder: "Career advice, resume review, someone to talk through options with…",
    },
    businessListing: {
      title: "List Your Business",
      description: "Tell us about your business and we'll feature it in the directory.",
      businessNameLabel: "Business name",
      ownerNameLabel: "Owner name",
      categoryLabel: "Category",
      websiteLabel: "Website or Instagram (optional)",
      descriptionLabel: "Tell us about your business",
    },
  },
};

const fr: Dictionary = {
  meta: {
    titleSuffix: "Togo Rising",
    homeDescription:
      "Togo Rising connecte la diaspora togolaise : étudiants, professionnels, entrepreneurs et nouveaux arrivants, pour que personne n'ait à tout comprendre seul.",
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Réseautage", href: "/networking" },
    { label: "Opportunités", href: "/opportunities" },
    { label: "Espace Nouveaux Arrivants", href: "/newcomers" },
    { label: "Professionnels en Ascension", href: "/professionals" },
    { label: "Shop Togo", href: "/shop-togo" },
    { label: "Contact", href: "/contact" },
  ],
  mission:
    "Togo Rising connecte la diaspora togolaise : étudiants, professionnels, entrepreneurs et nouveaux arrivants, pour que personne n'ait à tout comprendre seul. Nous partageons des opportunités, du mentorat et des parcours de réussite, où que vous soyez.",
  heroOverlay: "Togolais, partout",
  footer: {
    tagline: "Empowering Togolese Everywhere",
    socialComingSoon: "Liens vers les réseaux sociaux à venir.",
    disclaimer:
      "Togo Rising partage des opportunités et met en relation des mentors pour soutenir la communauté. Votre participation ne garantit ni emploi, ni bourse, ni aucun autre résultat.",
  },
  home: {
    eyebrow: "Togo Rising",
    title: "Personne ne devrait avoir à tout comprendre seul.",
    joinCommunity: "Rejoindre la communauté",
    exploreOpportunities: "Découvrir les opportunités",
    whereToStart: "Par où commencer",
    readyTitle: "Prêt à vous connecter ?",
    readyBody:
      "Rejoignez Togo Rising et accédez à l'annuaire, aux opportunités et aux mentors déjà présents dans la communauté.",
  },
  pillars: [
    {
      title: "Réseautage",
      description:
        "Un annuaire de membres, des événements et des mises en relation chaleureuses avec la diaspora togolaise, où que vous soyez.",
      href: "/networking",
    },
    {
      title: "Opportunités",
      description:
        "Emplois, bourses, contrats et subventions partagés en priorité au sein de la communauté.",
      href: "/opportunities",
    },
    {
      title: "Espace Nouveaux Arrivants",
      description:
        "Jumelage avec un mentor, apprentissage des langues, orientation scolaire et parcours professionnels pour les nouveaux arrivants.",
      href: "/newcomers",
    },
    {
      title: "Professionnels en Ascension",
      description:
        "Mentorat de carrière, accompagnement à la création d'entreprise, achat immobilier et aide FAFSA pour vous accompagner dans votre progression.",
      href: "/professionals",
    },
    {
      title: "Shop Togo",
      description:
        "Découvrez et soutenez les entreprises togolaises à travers la diaspora.",
      href: "/shop-togo",
    },
  ],
  news: {
    title: "Actualités du Togo",
    disclaimer:
      "Titres agrégés automatiquement à partir de plusieurs sources indépendantes. Togo Rising ne rédige, ne sélectionne, ni n'approuve ce contenu.",
    sourcesLabel: "Sources",
    errorText: "Impossible de charger les actualités pour le moment. Réessayez plus tard.",
    emptyText: "Aucun titre disponible pour le moment. Revenez bientôt.",
  },
  networking: {
    eyebrow: "Réseautage",
    title: "Retrouvez les vôtres, où que vous soyez.",
    description:
      "Un annuaire de membres, des événements et des mises en relation chaleureuses, pensés pour que la diaspora togolaise puisse se retrouver sans repartir de zéro.",
    cta: "Rejoindre l'annuaire",
    sections: [
      {
        title: "Annuaire des membres",
        description:
          "Trouvez et connectez-vous avec la diaspora togolaise par ville, secteur d'activité et centre d'intérêt. Recherchez des personnes qui évoluent dans votre domaine ou vivent près de chez vous.",
      },
      {
        title: "Événements",
        description:
          "Rencontres virtuelles et événements en personne : cocktails, célébrations culturelles et rencontres locales organisés par la communauté.",
      },
      {
        title: "Mises en relation",
        description:
          "Demandez une mise en relation chaleureuse avec quelqu'un de votre domaine, de votre ville ou de votre situation. Pas besoin de démarchage à froid.",
      },
    ],
  },
  opportunities: {
    eyebrow: "Opportunités",
    title: "Les opportunités ne devraient pas dépendre de qui vous connaissez.",
    description:
      "Emplois, bourses, contrats et subventions, partagés en priorité au sein de la communauté. Les nouvelles opportunités sont envoyées aux membres dès leur arrivée.",
    ctaJoin: "Rejoindre pour recevoir les opportunités",
    ctaSubmit: "Soumettre une opportunité",
    disclaimer:
      "Togo Rising partage ces opportunités pour soutenir la communauté. Votre participation ne garantit ni offre d'emploi, ni bourse, ni aucun autre résultat.",
    sections: [
      {
        title: "Emplois",
        description:
          "Offres partagées par les membres de la communauté et des employeurs partenaires : des recommandations internes, pas seulement des annonces classiques.",
      },
      {
        title: "Bourses",
        description:
          "Opportunités de financement pour les étudiants et professionnels togolais poursuivant leurs études.",
      },
      {
        title: "Contrats",
        description:
          "Missions freelance, de conseil et de projet partagées au sein du réseau.",
      },
      {
        title: "Subventions",
        description:
          "Financements pour les entrepreneurs, associations et initiatives communautaires portés par la diaspora togolaise.",
      },
    ],
  },
  newcomers: {
    eyebrow: "Espace Nouveaux Arrivants",
    title: "Vous arrivez quelque part de nouveau ? Commencez ici.",
    description:
      "Jumelage avec un mentor, apprentissage des langues, orientation scolaire et parcours professionnels, par des personnes qui sont déjà passées par là.",
    ctaStart: "Commencer",
    ctaMentor: "Demander un mentor",
    usaLink: "Vous vous installez aux États-Unis ? Découvrez USA Pathways →",
    sections: [
      {
        title: "Jumelage avec un mentor",
        description:
          "Soyez mis en relation avec quelqu'un qui a déjà traversé ce que vous vivez : nouvelle ville, nouveau marché du travail, nouveaux systèmes.",
      },
      {
        title: "Apprentissage des langues",
        description:
          "Ressources et partenaires de conversation pour gagner en confiance en anglais, en français, ou dans les deux langues.",
      },
      {
        title: "Orientation scolaire",
        description:
          "Un accompagnement pour comprendre les inscriptions, l'aide financière et le système scolaire, pour vous ou vos enfants.",
      },
      {
        title: "Parcours professionnels",
        description:
          "Conseils sur la reconnaissance des diplômes, les certifications et la valorisation de votre expérience sur votre nouveau marché.",
      },
    ],
  },
  usaPathways: {
    eyebrow: "Espace Nouveaux Arrivants / USA Pathways",
    title: "Construire sa vie aux États-Unis.",
    description:
      "Service militaire, naturalisation, études supérieures et parcours professionnels, avec des conseils de personnes qui ont elles-mêmes traversé ces démarches.",
    cta: "Parler à quelqu'un qui est passé par là",
    sections: [
      {
        title: "Service militaire",
        description:
          "Connectez-vous avec des vétérans togolais de la communauté prêts à partager leur expérience avec celles et ceux qui envisagent le service militaire.",
      },
      {
        title: "Naturalisation",
        description:
          "Connectez-vous avec des membres de la communauté déjà passés par la naturalisation, de l'éligibilité à la préparation de l'entretien.",
      },
      {
        title: "Études supérieures",
        description:
          "Connectez-vous avec des diplômés togolais de la communauté qui peuvent vous aider avec les candidatures universitaires américaines, l'évaluation de vos diplômes et le choix du bon parcours.",
      },
      {
        title: "Parcours professionnels",
        description:
          "Des parcours structurés vers des secteurs porteurs, conçus avec des personnes ayant elles-mêmes vécu ce processus.",
      },
    ],
  },
  professionals: {
    eyebrow: "Professionnels en Ascension",
    title: "Continuez à progresser, entouré de personnes qui vous soutiennent.",
    description:
      "Mentorat de carrière, accompagnement à la création d'entreprise, achat immobilier et aide FAFSA pour construire votre avenir.",
    cta: "Être mis en relation avec un mentor",
    sections: [
      {
        title: "Mentorat de carrière",
        description:
          "Un accompagnement individuel par des professionnels plus avancés dans votre domaine, pour une promotion, une reconversion ou un nouveau départ.",
      },
      {
        title: "Créer une entreprise",
        description:
          "Connectez-vous avec des entrepreneurs togolais de la communauté qui ont déjà créé la leur, de la première idée à la création, au financement et aux premiers clients.",
      },
      {
        title: "Achat immobilier",
        description:
          "Connectez-vous avec des agents immobiliers et courtiers en prêts agréés de la communauté qui peuvent vous accompagner avant l'achat le plus important de votre vie.",
      },
      {
        title: "Aide FAFSA",
        description:
          "Une aide concrète de membres de la communauté qui sont déjà passés par là, pour remplir les formulaires d'aide financière, pour vous ou vos enfants qui entrent à l'université.",
      },
    ],
  },
  shopTogo: {
    eyebrow: "Shop Togo",
    title: "Soutenez les entreprises togolaises, où qu'elles soient.",
    description:
      "Un annuaire d'entrepreneurs togolais à travers la diaspora : restauration, mode, services et plus encore. Shop Togo n'en est qu'à ses débuts.",
    listedTitle: "Soyez parmi les premières entreprises référencées.",
    listedBody:
      "Shop Togo est un nouvel annuaire d'entreprises togolaises à travers la diaspora. Inscrivez la vôtre dès maintenant et soyez mis en avant dès le lancement de l'annuaire.",
    cta: "Référencer votre entreprise",
    categoriesLabel: "Catégories",
    categories: [
      "Restauration & Traiteur",
      "Mode & Textiles",
      "Beauté & Bien-être",
      "Services professionnels",
      "Import / Export",
      "Arts & Médias",
      "Immobilier",
      "Autre",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Parlons-en.",
    description:
      "Des questions, des idées de partenariat, ou simplement envie de dire bonjour ? Contactez-nous à tout moment.",
    emailHeading: "Écrivez-nous",
    emailBody: "Pour toute question générale, partenariat ou demande presse.",
    followHeading: "Suivez-nous",
    followBody: "Liens vers les réseaux sociaux bientôt disponibles.",
  },
  forms: {
    common: {
      nameLabel: "Nom",
      emailLabel: "Email",
      cityLabel: "Ville",
      submitLabel: "Envoyer",
      sendingLabel: "Envoi en cours…",
      successTitle: "Merci.",
      successBody: "Nous avons bien reçu votre message et reviendrons vers vous bientôt.",
      errorTitle: "Une erreur s'est produite.",
      errorBody: "Veuillez réessayer, ou nous écrire directement.",
      configMissingBody:
        "Ce formulaire n'est pas encore entièrement configuré. Merci de nous écrire directement.",
      requiredHint: "Obligatoire",
    },
    join: {
      title: "Rejoindre la communauté",
      description: "Parlez-nous un peu de vous et nous vous mettrons en relation.",
      lookingForLabel: "Que recherchez-vous ? (facultatif)",
      lookingForPlaceholder: "Des offres d'emploi, du mentorat, des amis à proximité…",
    },
    opportunity: {
      title: "Soumettre une opportunité",
      description: "Partagez un emploi, une bourse, un contrat ou une subvention avec la communauté.",
      opportunityTitleLabel: "Titre de l'opportunité",
      typeLabel: "Type",
      typeOptions: ["Emploi", "Bourse", "Contrat", "Subvention"],
      detailsLabel: "Détails",
      linkLabel: "Lien (facultatif)",
    },
    newcomerIntake: {
      title: "Commencer",
      description: "Dites-nous où vous en êtes et ce qui vous aiderait le plus en ce moment.",
      needHelpLabel: "De quelle aide avez-vous besoin ?",
      needHelpPlaceholder: "Logement, inscription scolaire, trouver un mentor…",
    },
    mentor: {
      title: "Demander un mentor",
      description: "Nous vous mettrons en relation avec quelqu'un qui est déjà passé par là.",
      fieldLabel: "Domaine ou secteur",
      fieldPlaceholder: "Infirmerie, développement logiciel, petite entreprise…",
      lookingForLabel: "Que recherchez-vous chez un mentor ?",
      lookingForPlaceholder: "Des conseils de carrière, une relecture de CV, quelqu'un avec qui réfléchir…",
    },
    businessListing: {
      title: "Référencer votre entreprise",
      description: "Parlez-nous de votre entreprise et nous la mettrons en avant dans l'annuaire.",
      businessNameLabel: "Nom de l'entreprise",
      ownerNameLabel: "Nom du propriétaire",
      categoryLabel: "Catégorie",
      websiteLabel: "Site web ou Instagram (facultatif)",
      descriptionLabel: "Parlez-nous de votre entreprise",
    },
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
