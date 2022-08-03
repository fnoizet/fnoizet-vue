const appDatas = {
  description: "Travaillant depuis 2005 dans le domaine du web, pour des portails à trafic élevé ou à travers des applications à forte orientation métier, tant côté développement que gestion, les nombreuses missions auxquelles j’ai pu prendre part sont aujourd’hui un atout lorsqu’il est nécessaire de prendre du recul sur une situation. D’un naturel très calme et patient, bon communicant, j’aime pouvoir exprimer ma créativité dans le travail quotidien.",
  descriptionDev: "Fort d’une expérience de 13 ans en tant que développeur, durant laquelle j’ai pu travailler sur des sites vitrine et e-commerce, ou applications métier, mais aussi sur des portails à grande affluence, j’ai toujours manipulé les bases qui font le web, sans m’enfermer dans le carcan d’un seul framework, tout en évoluant avec les technologies. Je suis donc capable de développer dans les langages natifs, comme utiliser les frameworks de dernière génération.",
  descriptionSM: "A partir de 2015, j’ai commencé à travailler dans des environnements AGILE d’abord en tant que développeur, puis Business Analyst et Scrum Master à partir de 2018, consolidant la communication entre développeurs et utilisateurs en affinant les besoins. Dans un rôle à la fois fonctionnel, pour créer la meilleure UX possible, mais aussi technique pour absorber toutes les contraintes, et organisationnel en optimisant le travail d’équipe, j’ai pu me maintenir dans l’analyse et la conception, tout en appréhendant l’aspect humain de la gestion d’équipe et de projet.",
  descriptionDots: [
    ((new Date()).getFullYear() - 2005) + " années d'expérience",
    "Technique & fonctionnel",
    "Bon relationnel",
    "Esprit d'équipe"
  ],
  descriptionDevDots: [
    "Front & Back",
    "Développement Natif",
    "Frameworks JS et PHP modernes",
    "Contraintes et composantes métier fortes"
  ],
  descriptionSMDots: [
    "Environnements Agile depuis "+ ((new Date()).getFullYear() - 2015) +" ans",
    "Scrum & Kanban",
    "Mise en place de KPI",
    "Communication interne (dev / PO) et externe (clients)"
  ],
  generaltags: ["Analyse", "Conception", "Developpement", "Scrum"],
  skills: {
    functionnal: [
      "Analyse fonctionnelle",
      "Conception",
      "Développement",
      "Programmation objet",
      "Design patterns",
      "Outils de versionning",
      "Scrum",
      "Kanban"
    ],
    technical: ["HTML", "Javascript", "Php", "Java", "ASP", "SQL", "CSS", "XML"]
  },
  techLogos: [
    "html",
    "css",
    "javascript",
    "jquery",
    "react",
    "Vue",
    "typescript",
    "php",
    "laravel",
    "phalcon",
    "sql",
    "xml",
    "agile",
    "scrum"
  ],
  experiences: [
    {
      display: true,
      companyLogoPath: "logo_fdj.jpg",
      bgcolor: "#FFF",
      color: "#0097da",
      company: "FDJ",
      place: "Alpes-Martimes",
      date: "05/2021 - aujourd'hui",
      job: "Lead technique / Scrum Master",
      desc:
        "Dans une équipe d'un dizaine de développeurs et testeurs, maintenance et évolutions des widgets Front Compte FDJ",
      desc2:
        "Dans une équipe d'un dizaine de développeurs et testeurs, maintenance et évolutions des widgets d'inscription, d'authentification et consultation du compte Joueur FDJ.",
      tasks: [
        "Maintenance corrective et évolutive des widgets",
        "Collecte des données techniques définissant les solutions",
        "Point de contact entre l'équipe de développement et les différents acteurs du périmètre fonctionnel",
        "Analyse et conception des solutions",
        "Refonte de compte Joueur",
        "Intégration des données et fonctionnalités du SI"
      ],
      techEnv: [
        "Javascript, React Js, TypeScript, Redux, Redux-Toolkit",
        "Material UI, Styled Component",
        "API",
        "Unix / MacOs",
        "Gitlab / Git-CI"
      ],
      tags: ["Javascript", "React JS", "TypeScript", "Redux", "Redux-Toolkit"]
    },
    {
      display: true,
      companyLogoPath: "logo_waiabe.jpg",
      bgcolor: "#FFF",
      color: "#0AB",
      company: "WAIABE",
      place: "Nice",
      date: "01/2021 - 04/2021",
      job: "Développeur",
      desc:
        "Dans une équipe de 3 développeurs, maintenance et évolution d'un ERP orienté éducation",
      desc2:
        "Dans une équipe de 3 développeurs, maintenance et évolution d'un ERP à l'attention des universités et organismes de formation.",
      tasks: [
        "Maintenance corrective et évolutive du framework",
        "Refonte de la suppression et restauration des fichiers",
        "Mise en place d'appel à l'API INSEE Siren",
        "Refonte du système de note libre / notation continue"
      ],
      techEnv: [
        "Php, Javascript, JQuery, JSON, XML",
        "MySql",
        "Templating Handlebars",
        "API",
        "Windows",
        "Git, Sonar"
      ],
      tags: [
        "Php",
        "Javascript",
        "Jquery",
        "Ajax",
        "Handlebars",
        "Windows",
        "HTML",
        "CSS",
        "API"
      ]
    },
    {
      display: true,
      companyLogoPath: "logo_kinaxia.jpg",
      bgcolor: "#FFF",
      color: "#CF2",
      company: "KCITYLABS",
      place: "Sophia-Antipolis",
      date: "01/2018 - 07/2020",
      job: "Analyste fonctionnel, MOE",
      desc:
        "Gestion d’équipe et de projet, conduite des évolutions d’une application permettant de réaliser des documents d’urbanisme. Maintenance corrective. Conduite de l’intégration de nouveaux clients à l’application, rédaction de documents techniques et fonctionnels, proposition d’évolutions techniques à l’équipe. Collecte de besoins et rédaction des tâches. Gestion scrum.",
      desc2:
        "Dans une équipe de 6 personnes, gestion d’équipe et de projet sur une application de réalisation de documents d’urbanisme.",
      tasks: [
        "Lien entre le Product Owner et l’équipe de développement",
        "Collecter et analyser les besoins et les traduires en tâches techniques",
        "Contact avec les intégrateurs API, analyse des besoins et conception de solutions",
        "Suivi de l’intégration client",
        "Rédaction de la documentation technique et des contrats d’interfaces",
        "Suivi des réalisations et livraisons",
        "Analyse de bug pour maintenance corrective",
        "Proposition d’évolutions techniques et fonctionnelles",
        "Cadrage du SCRUM",
        "Amélioration de la gestion du versionning"
      ],
      tags: [
        "Analyse fonctionnelle",
        "Scrum Master",
        "ScrumBan",
        "Agile",
        "Documentation technique",
        "Int&eacute;gration client API",
        "Gestion d'&eacute;quipe"
      ]
    },
    {
      display: true,
      companyLogoPath: "logo_orange.jpg",
      company: "ORANGE",
      bgcolor: "#F60",
      color: "#F60",
      place: "Sophia-Antipolis",
      date: "11/2012 - 12/2017",
      job: "Développeur",
      desc:
        "Maintenance et évolution de l’espace client Orange dans un environnement soumis à des contraintes de charges. Evolution du système d’appel aux webservices, mise en place d’un système de validation et de prétraitement de formulaire, gestion de cache et tests unitaires. Maintenance corrective et évolutive sur le framework JS. Développement front responsive pour un projet en méthodologie Agile Scrum. Maintenance et évolution de l’assistance Orange, enrichissement de parcours client (question / réponse) avec une API REST.",
      desc2:
        "Maintenance et évolution de l’espace client et de l’assistance ORANGE dans un environnement soumis à de fortes contraintes de charge.",
      tasks: [
        "Maintenance corrective et évolution du framework PHP",
        "Evolution du système d’appel aux webservices (REST et SOAP)",
        "Mécanisme de validation et de pré-traitement de formulaires en ajax",
        "Gestion de cache",
        "Maintenance corrective et évolution du framework Javascript (Fork DOJO)",
        "Développement front responsive pour vue web et mobile, en méthodologie Agile Scrum",
        "Maintenance évolutive de l’assistance Orange, en méthodologie SCRUM",
        "Enrichissement de parcours client via API REST",
        "Rédaction de la documentation technique et des contrats d’interfaces",
        "Suivi des réalisations et livraisons"
      ],
      techEnv: [
        "Php, Javascript (Dojo, JQuery), JSON, XML",
        "API SOAP et REST",
        "Template Smarty",
        "Windows / Linux",
        "Jenkins, Sonar, Git, Bazaar"
      ],
      tags: [
        "Php",
        "Javascript",
        "Dojo",
        "Jquery",
        "Ajax",
        "Smarty",
        "Linux",
        "Windows",
        "Scrum Agile",
        "Rest",
        "SOAP",
        "HTML",
        "CSS",
        "API"
      ]
    },
    {
      display: true,
      companyLogoPath: "logo_lagardere.jpg",
      bgcolor: "#E4E4E4",
      color: "#6ACAD9",
      company: "LAGARDERE S.A.",
      place: "Nice",
      date: "03/2012 - 10/2012",
      job: "Développeur",
      desc:
        "Dans un service informatique de 4 personnes, maintenance, optimisation et évolution d’un CRM pour une équipe commerciale de 40 personnes. Gestion de la vie d’un client, devis et commande. Mise à jour bidirectionnelle de base de données, Création d’outils spécifiques de gestion de demande de devis par email. Traitement par lots pour la mise à jour des stocks produits. Maintenance du site de la société et création du système de site vitrine configurable.",
      desc2:
        "Dans un service informatique de 4 personnes, maintenance, optimisation et évolution d’un CRM pour une équipe commerciale de 40 personnes.",
      tasks: [
        "Reprise du parcours de création de client (formulaire client et admin)",
        "Mise à jour bidirectionnelle de base de données MySql / MsAccess pour synchroniser l’ERP",
        "Création d’outils spécifiques de gestion de demande de devis par email",
        "Traitement par lots pour la mise à jour des stocks produits",
        "Maintenance du site vitrine de la société",
        "Création du système de site vitrine configurable",
        "Reprise du parcours de création de client (formulaire client et admin)",
        "Mise à jour bidirectionnelle de base de données MySql / MsAccess pour synchroniser l’ERP",
        "Création d’outils spécifiques de gestion de demande de devis par email",
        "Traitement par lots pour la mise à jour des stocks produits"
      ],
      techEnv: [
        "Php, Javascript (JQuery), JSON, XML, CSV",
        "MySql, MsAccess",
        "Windows / Linux"
      ],
      tags: [
        "Php",
        "Javascript",
        "Jquery",
        "Ajax",
        "Windows",
        "HTML",
        "CSS",
        "SQL",
        "Batch"
      ]
    },
    {
      display: true,
      companyLogoPath: "logo_amadeus.jpg",
      bgcolor: "#005DBA",
      color: "#005DBA",
      company: "AMADEUS",
      place: "Sophia-Antipolis",
      date: "05/2010 - 12/2011",
      job: "Développeur",
      desc:
        "Dans une équipe de 8 personnes, pour Amadeus SAS, création, maintenance et optimisation d’applications WEB de réservations de billet d’avion, et services annexes (choix du siège, repas). Rédaction de documents d’intégration. Création d’interface de communication AJAX / JSON et intégration aux applications des services propres au client.",
      desc2:
        "Dans une équipe de 8 personnes, pour Amadeus SAS, création, maintenance et optimisation d’applications WEB de réservations de billets d’avion.",
      tasks: [
        "Développement de parcours client pour la prise de commandes",
        "Analyse des besoins spécifiques du client pour adapter les parcours",
        "Refonte des classes pour rendre le code générique",
        "Rédaction de documents d’intégration",
        "Création d’interface de communication AJAX / JSON et intégration aux applications du client"
      ],
      techEnv: ["Java, JSTL, Javascript (JQuery), JSON", "MySql", "Windows"],
      tags: [
        "Java",
        "JSTL",
        "Javascript",
        "Jquery",
        "Ajax",
        "Windows",
        "SOAP",
        "HTML",
        "CSS"
      ]
    },
    {
      display: true,
      companyLogoPath: "logo_voila.jpg",
      bgcolor: "#333",
      color: "#F60",
      company: "ORANGE PORTAILS",
      place: "Sophia-Antipolis",
      date: "06/2009 - 04/2010",
      job: "Développeur",
      desc:
        "Dans une équipe d'une dizaine de personnes, pour Orange et le site Voila.fr, créations de services WEB partagés disponibles pour tous les sites du groupe : système de vote, système de partage d'articles, système de validation par captcha. Développement de chaînes complètes pour les sites, générations de fichiers HTML avec  Smarty. Traitement par lots de flux xml et fichiers.",
      desc2:
        "Dans une équipe d'une dizaine de personnes, pour Orange et le site Voila.fr, créations de services WEB partagés disponibles pour tous les sites du groupe ORANGE.",
      tasks: [
        "Conception et développement de webservices, API REST",
        "Développement d’un service de Captcha",
        "Développement, maintenance et évolution d’un mécanisme de déploiement de site web",
        "Génération de page web statiques par lot",
        "Traitement par lot de flux XML et contenus de dossiers"
      ],
      techEnv: [
        "Php, Javascript (Dojo), XML, JSON, template Smarty",
        "MySql",
        "Windows / Linux"
      ],
      tags: [
        "Php",
        "Javascript",
        "Dojo",
        "Ajax",
        "Smarty",
        "Linux",
        "Windows",
        "Rest",
        "SOAP",
        "HTML",
        "CSS",
        "API",
        "Batch",
        "SQL"
      ]
    },
    {
      display: true,
      companyLogoPath: "logo_alcatel.jpg",
      bgcolor: "#FFF",
      color: "#663AB5",
      company: "ALCATEL LUCENT",
      place: "Sophia-Antipolis",
      date: "02/2008 - 05/2009",
      job: "Développeur",
      desc:
        "Dans une équipe de 5 personnes, interfaces Web dynamiques en Javascript et mise en place d'un système de normalisation des communications en XML pour une application de gestion d'événements, tâches et contacts. Test de charge et fonctionnalités, mise en place et spécifications pour un moteur de recherche intégré à cette même application.",
      desc2:
        "Dans une équipe de 5 personnes, développement d’une solution d’entreprise de gestion d'événements, tâches et contacts.",
      tasks: [
        "Développement de modules Javascript avec le framework ExtJs",
        "Gestion de la communication entre les différents modules de l’application",
        "Benchmark et intégration d’un moteur de recherche en Java"
      ],
      techEnv: ["Javascript (ExtJs), XML, JSON, Java", "Windows / Tomcat"],
      tags: [
        "Javascript",
        "ExtJs",
        "Java",
        "Windows",
        "SOAP",
        "HTML",
        "CSS",
        "XML"
      ]
    },
    {
      display: true,
      companyLogoPath: "logo_alcyonis.jpg",
      bgcolor: "#FFF",
      color: "#E63392",
      company: "ALCYONIS",
      place: "Sophia-Antipolis",
      date: "11/2005 - 01/2008",
      job: "Développeur",
      desc:
        "Création de sites et applications WEB (site vitrine, Boutique en ligne, Intranet, Extranet). Analyse conception, réalisation des projets seul ou en équipe. Intégration des clients aux solutions techniques.",
      desc2:
        "Création de sites et applications WEB (site vitrine, Boutique en ligne, Intranet, Extranet). Analyse, conception et réalisation des projets seul ou en équipe.",
      tasks: [
        "Développement de sites vitrine et d’applications Web permettant de gérer les contenus",
        "Développement d’application Web orientée métier, maintenance corrective et évolution",
        "Collecte des besoins des clients et rédaction de cahier des charges.",
        "Maintenance et évolution d’un framework PHP"
      ],
      techEnv: [
        "Php, CSS, Javascript, Ajax, XML",
        "PostgresSql / MySql",
        "Windows / Linux / Apache"
      ],
      tags: [
        "Php",
        "Asp",
        "Ajax",
        "Javascript",
        "Linux",
        "Windows",
        "HTML",
        "CSS",
        "SQL",
        "XML",
        "Apache"
      ]
    }
  ],
  displayPostComponents : false,
  work: [
    {
      code: "CustomCheckbox",
      name: "Custom checkbox",
      type: "Graphics",
      pic: "work_snakejs.jpg",
      display: false
    },
    {
      code: "Snake",
      name: "Snake JS",
      type: "Game",
      pic: "work_snakejs.jpg",
      display: false
    },
    {
      code: "FunWithJs3",
      name: "Fun with JS 3",
      type: "Graphics",
      pic: "work_funwithjs3.jpg",
      display: false
    },
    {
      code: "FunWithJs2",
      name: "Fun with JS 2",
      type: "Graphics",
      pic: "work_funwithjs2.jpg",
      display: true
    },
    {
      code: "VueComponent",
      name: "Vue Weather",
      type: "dev",
      pic: "work_vuemeteo.jpg",
      display: true,
      linked_to: ["ReactComponent"]
    },
    {
      code: "ReactComponent",
      name: "React Weather",
      type: "dev",
      pic: "work_reactmeteo.jpg",
      display: true,
      linked_to: ["VueComponent"]
    },
    {
      code: "LightWater",
      name: "Underwater light",
      type: "Graphics",
      pic: "work_lightwater.jpg",
      display: true
    },
    {
      code: "FunWithJs",
      name: "Fun with JS",
      type: "Graphics",
      pic: "work_funwithjs.jpg",
      display: true
    },
    {
      code: "AlphaBlank",
      name: "Alpha Blank",
      type: "website",
      url: "http://alphablankband.com/",
      targetUrl: "_blank",
      pic: "work_alphablank.jpg",
      display: true
    }
  ],
  studies: [
    {
      name: "Licence Professionnelle Informatique et Multimedia",
      place: "Nice",
      date: "2004-2005"
    },
    {
      name: "DUT Informatique Analyse et Conception",
      place: "Reims",
      date: "2002-2004"
    }
  ]
};

export { appDatas };
