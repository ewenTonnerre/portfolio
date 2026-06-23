export const translations = {
  en: {
    nav: { about: 'ABOUT', expertise: 'EXPERTISE', parcours: 'EXPERIENCE', contact: 'CONTACT' },
    hero: {
      label: 'Fullstack Developer / AI-driven',
      heading1: 'Build.',
      heading2: 'Innovate.',
      bio: 'I build robust digital solutions, specializing in full-stack development, applied statistics, and artificial intelligence engineering.',
    },
    phone: {
      name: 'Ewen Tonnerre',
      level: 'Fullstack & AI · Bordeaux',
      skills: [
        { title: 'Fullstack Dev', sub: 'Front & Back' },
        { title: 'AI-driven Development', sub: 'Agentic systems' },
        { title: 'Statistics Dev', sub: 'Analysis & Logic' },
        { title: 'Robust Tests', sub: 'Quality Assurance' },
      ],
    },
    expertise: {
      heading: 'Areas of Expertise',
      cards: [
        { title: 'Fullstack Development', desc: 'Building responsive, scalable web/mobile applications from frontend to backend. Integrating APIs and managing databases efficiently.' },
        { title: 'AI-driven Development', desc: 'Designing AI agents equipped with skills and rich context to solve real-world problems. Agentic systems, prompt engineering.' },
        { title: 'Applied Statistics', desc: 'Data extraction and development of interactive dashboards for statistics-driven, informed decision-making.' },
        { title: 'Robust Testing', desc: 'Ensuring software reliability through comprehensive automated testing, CI/CD pipelines, and rigorous quality assurance.' },
      ],
    },
    experience: {
      heading: 'Experience',
      education: 'Education',
      items: [
        {
          title: 'Fullstack developer — ELSAN',
          period: 'Current position - Full-time',
          desc: 'Design, development and deployment of digital tools for ELSAN clinic staff and patients. Implementing AI agents with skills and context directly into our products, and building an internal agent development system.',
          current: true,
        },
        {
          title: 'Fullstack developer — ELSAN',
          period: '2022–2024 - Work-Study',
          desc: 'Development of digital tools such as websites and mobile applications for ELSAN clinics.',
          current: false,
        },
        {
          title: 'Mobile & Fullstack developer — Alienor.org',
          period: '2021–2022 - Work-Study',
          desc: 'Development and maintenance of mobile applications and back-office tools for museums in the Nouvelle-Aquitaine region.',
          current: false,
        },
      ],
      education_items: [
        { degree: 'Master — Computer Science', school: 'Ynov Campus Bordeaux', period: '2022–2024', option: 'Software, Mobile & IoT Development / Work-Study' },
        { degree: 'LP — Mobile Development', school: 'IUT de La Rochelle', period: '2021–2022', option: 'Full Stack / Work-Study' },
        { degree: 'DUT — Computer Science', school: 'IUT de La Rochelle', period: '2019–2021', option: 'Web Development' },
      ],
    },
    projects: {
      heading: 'Projects',
      items: [
        {
          title: 'Influx',
          subtitle: 'Matchmaking application',
          desc: 'Influx is an application that connects small businesses with micro-influencers. With filters and categories, users can easily find what they are looking for using a swipe-based interface. We also built a back-office to manage app content and users.',
          tags: ['Flutter', 'Laravel', 'React'],
          href: null,
        },
        {
          title: 'Scan Order',
          subtitle: 'Mobile application',
          desc: 'Scan Order is a mobile app I developed for my LP project. It lets customers scan a QR code on a restaurant table and place an order directly. Built with Firebase, it was deployed to the Play Store for a demo.',
          tags: ['Flutter', 'Firebase'],
          href: null,
        },
        {
          title: 'Un repas Un sourire',
          subtitle: 'Associative website',
          desc: 'A website developed for a student association project at IUT de Sceaux.',
          tags: ['HTML/CSS/JS', 'Association'],
          href: 'https://1repas1sourire.netlify.app/',
        },
        {
          title: 'Hackathon — La Rochelle',
          subtitle: '2021 — 1st place',
          desc: 'Took part in the La Rochelle Technopole Hackathon in 2021 with a small team. We finished in first place.',
          tags: ['Hackathon', 'Design', 'Teamwork', '1st place'],
          href: null,
          award: true,
        },
      ],
    },
    contact: {
      heading: 'Contact',
      sub: 'Bordeaux and surrounding areas',
      cta: 'Get in touch',
    },
  },
  fr: {
    nav: { about: 'À PROPOS', expertise: 'EXPERTISE', parcours: 'PARCOURS', contact: 'CONTACT' },
    hero: {
      label: 'Développeur fullstack / orienté IA',
      heading1: 'Construire.',
      heading2: 'Innover.',
      bio: "Spécialisé dans le développement full-stack, la conception et le développement par l'IA, je construis des solutions numériques robustes.",
    },
    phone: {
      name: 'Ewen Tonnerre',
      level: 'Fullstack & IA · Bordeaux',
      skills: [
        { title: 'Dév Fullstack', sub: 'Front & Back' },
        { title: 'Dév orienté IA', sub: 'Systèmes agentiques' },
        { title: 'Dév Stats', sub: 'Analyse & Logique' },
        { title: 'Tests Robustes', sub: 'Assurance Qualité' },
      ],
    },
    expertise: {
      heading: "Domaines d'Expertise",
      cards: [
        { title: 'Développement Fullstack', desc: "Création d'applications web et mobiles réactives et évolutives du front-end au back-end. Intégration d'API et gestion de bases de données." },
        { title: 'Développement orienté IA', desc: "Conception d'agents IA dotés de skills et d'un contexte riche pour résoudre de vrais problèmes. Systèmes agentiques, prompt engineering." },
        { title: 'Statistiques Appliquées', desc: "Extraction de données et développement de dashboards interactifs pour une prise de décision éclairée par statistiques." },
        { title: 'Tests Robustes', desc: "Garantir la fiabilité des logiciels grâce à des tests automatisés complets, des pipelines CI/CD et une assurance qualité rigoureuse." },
      ],
    },
    experience: {
      heading: 'Parcours',
      education: 'Formation',
      items: [
        {
          title: 'Développeur Fullstack — ELSAN',
          period: 'Poste actuel — CDI',
          desc: "Conception, développement et déploiement d'outils numériques pour le personnel des cliniques Elsan et pour les patients. Intégration d'agents IA dotés de skills et d'un contexte métier dans nos produits, et développement d'un système de développement d'agents.",
          current: true,
        },
        {
          title: 'Développeur Fullstack — ELSAN',
          period: '2022–2024 — Alternance',
          desc: "Développement d'outils numériques tels que des sites web ou des applications mobiles pour les cliniques Elsan.",
          current: false,
        },
        {
          title: 'Développeur Mobile & Fullstack — Alienor.org',
          period: '2021–2022 — Alternance',
          desc: "Développement et maintenance d'applications mobiles et back-office à destination des musées de la région Nouvelle-Aquitaine au sein de l'association Alienor.org.",
          current: false,
        },
      ],
      education_items: [
        { degree: 'Master Informatique', school: 'Ynov Campus Bordeaux', period: '2022–2024', option: 'Option Développement Logiciel, Mobile & IoT / En alternance' },
        { degree: 'LP Développement Mobile', school: 'IUT de La Rochelle', period: '2021–2022', option: 'Option Full Stack / En alternance' },
        { degree: 'DUT Informatique', school: 'IUT de La Rochelle', period: '2019–2021', option: 'Option Développement Web' },
      ],
    },
    projects: {
      heading: 'Projets',
      items: [
        {
          title: 'Influx',
          subtitle: 'Application de mise en relation',
          desc: "Influx est une application permettant de mettre en relation des petites entreprises et des micro-influenceurs. Comprenant des filtres et des catégories, les utilisateurs peuvent y trouver facilement ce qu'ils recherchent sous le principe du swipe. Nous avons également développé un back-office permettant de gérer le contenu de l'application et administrer les utilisateurs.",
          tags: ['Flutter', 'Laravel', 'React'],
          href: null,
        },
        {
          title: 'Scan Order',
          subtitle: 'Application mobile',
          desc: "Scan Order est une application que j'ai développée pour mon projet tutoré de LP. Elle permet de scanner un QR Code sur une table de restaurant et de passer une commande. L'application utilisait Firebase et avait été déployée sur le Play Store pour une démo.",
          tags: ['Flutter', 'Firebase'],
          href: null,
        },
        {
          title: 'Un repas Un sourire',
          subtitle: 'Site web associatif',
          desc: "Site web développé pour un projet d'association étudiante de l'IUT de Sceaux.",
          tags: ['HTML/CSS/JS', 'Association'],
          href: 'https://1repas1sourire.netlify.app/',
        },
        {
          title: 'Hackathon — La Rochelle',
          subtitle: '2021 — Première place',
          desc: "Participation au hackathon de La Rochelle Technopole en 2021 avec une petite équipe avec laquelle nous nous sommes issus à la première place.",
          tags: ['Hackathon', 'Conception', "Travail d'équipe", '1ère place'],
          href: null,
          award: true,
        },
      ],
    },
    contact: {
      heading: 'Contact',
      sub: 'Bordeaux et alentours',
      cta: 'Me contacter',
    },
  },
}
