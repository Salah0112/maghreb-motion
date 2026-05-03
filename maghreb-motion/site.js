(() => {
  const originalForm = document.getElementById("reservationForm");
  if (!originalForm) return;

  const freshForm = originalForm.cloneNode(true);
  originalForm.replaceWith(freshForm);

  const navToggle = document.getElementById("navToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const headerNav = document.querySelector("header nav");
  const langSwitch = document.querySelector(".lang-switch");
  const languageButtons = Array.from(document.querySelectorAll("[data-lang-trigger]"));
  const desktopNavLinks = Array.from(document.querySelectorAll(".nav__links a"));
  const mobileNavLinks = Array.from(document.querySelectorAll("#mobileMenu .nav__menu-body > a:not(.btn)"));
  const desktopNavCta = document.querySelector(".nav__actions .btn--primary");
  const mobileNavCta = document.querySelector("#mobileMenu .btn--primary");

  const metaDescription = document.querySelector('meta[name="description"]');
  const metaOgTitle = document.querySelector('meta[property="og:title"]');
  const metaOgDescription = document.querySelector('meta[property="og:description"]');

  const heroTitle = document.querySelector(".hero__copy h1");
  const heroBody = document.querySelector(".hero__copy p");
  const heroPrimaryCta = document.querySelector(".hero__actions .btn--primary");
  const heroSecondaryCta = document.querySelector(".hero__actions .btn--ghost");
  const heroStatus = document.querySelector(".hero__status");

  const kpiFeatureLabel = document.querySelector(".kpi-feature__label");
  const kpiFeatureTitle = document.querySelector(".kpi-feature__title");
  const kpiFeatureBody = document.querySelector(".kpi-feature p");
  const kpiFeatureCta = document.querySelector(".kpi-feature__cta");
  const kpiCardLabels = Array.from(document.querySelectorAll(".kpi-card span"));

  const bandText = document.querySelector(".band__inner p");
  const bandPills = Array.from(document.querySelectorAll(".band__pills span"));

  const servicesHead = document.querySelector("#services .section-head");
  const approachHead = document.querySelector("#approche .section-head");
  const voicesHead = document.querySelector("#temoignages .section-head");
  const projectsHead = document.querySelector("#realisations .section-head");
  const teamHead = document.querySelector("#equipe .section-head");

  const serviceCards = Array.from(document.querySelectorAll(".service-card"));
  const processCards = Array.from(document.querySelectorAll(".process-card"));
  const noteCards = Array.from(document.querySelectorAll(".note-card"));
  const quoteCards = Array.from(document.querySelectorAll(".quote-card"));
  const projectCards = Array.from(document.querySelectorAll(".project-card"));

  const reservationKicker = document.querySelector(".reservation__intro .section-kicker");
  const reservationTitle = document.querySelector(".reservation__intro h2");
  const reservationBody = document.querySelector(".reservation__intro > p");
  const reservationFocusLabel = document.querySelector(".reservation__focus-label");
  const selectedServiceLabel = document.querySelector("[data-selected-service]");
  const reservationSteps = Array.from(document.querySelectorAll(".reservation__step p"));
  const reservationMail = document.querySelector(".reservation__mail");
  const formCardTitle = document.querySelector(".form-card__header h3");
  const formCardLead = document.querySelector(".form-card__lead");
  const formCardPill = document.querySelector(".form-card__pill");
  const formCardMeta = document.querySelector(".form-card__meta");

  const footerBrandText = document.querySelector(".footer__brand p");
  const footerCtas = Array.from(document.querySelectorAll(".footer__ctas .btn"));
  const footerLabels = Array.from(document.querySelectorAll(".footer__label"));
  const footerNav = document.querySelector(".footer__col nav");
  const footerNavLinks = Array.from(document.querySelectorAll(".footer__col nav a"));
  const footerCopyright = document.querySelector(".footer__bottom span");
  const footerBadge = document.querySelector(".footer__bottom-badge");

  const whatsappFab = document.querySelector(".whatsapp-fab");
  const backToTopBtn = document.getElementById("backToTop");
  const serviceTriggers = Array.from(document.querySelectorAll("[data-service]"));

  const reservationForm = freshForm;
  const serviceSelect = reservationForm.querySelector("#serviceSelect");
  const subjectField = reservationForm.querySelector("#reservationSubject");
  const accessKeyField = reservationForm.querySelector("#web3formsAccessKey");
  const replyToField = reservationForm.querySelector("#replyToField");
  const reservationSummary = reservationForm.querySelector("#reservationSummary");
  const visitorEmail = reservationForm.querySelector("#visitorEmail");
  const feedback = reservationForm.querySelector("#reservationFeedback");
  const localFallbackActions = reservationForm.querySelector("#localFallbackActions");
  const mailtoFallback = reservationForm.querySelector("#mailtoFallback");
  const submitButton = reservationForm.querySelector("#submitButton");

  const formFieldNames = {
    fullName: "Nom complet",
    email: "Email",
    company: "Entreprise",
    phone: "T?l?phone / WhatsApp",
    service: "Service demand?",
    budget: "Budget estim?",
    date: "Date souhait?e",
    time: "Moment pr?f?r?",
    timeline: "D?lai souhait?",
    brief: "Brief du projet"
  };

  const formFields = {
    fullName: reservationForm.querySelector('input[name="Nom complet"]'),
    email: reservationForm.querySelector('input[name="Email"]'),
    company: reservationForm.querySelector('input[name="Entreprise"]'),
    phone: reservationForm.querySelector('input[name="T?l?phone / WhatsApp"]'),
    service: reservationForm.querySelector('select[name="Service demand?"]'),
    budget: reservationForm.querySelector('select[name="Budget estim?"]'),
    date: reservationForm.querySelector('input[name="Date souhait?e"]'),
    time: reservationForm.querySelector('input[name="Moment pr?f?r?"]'),
    timeline: reservationForm.querySelector('select[name="D?lai souhait?"]'),
    brief: reservationForm.querySelector('textarea[name="Brief du projet"]')
  };

  const formLabels = {
    fullName: formFields.fullName?.closest(".field")?.querySelector("span"),
    email: formFields.email?.closest(".field")?.querySelector("span"),
    company: formFields.company?.closest(".field")?.querySelector("span"),
    phone: formFields.phone?.closest(".field")?.querySelector("span"),
    service: formFields.service?.closest(".field")?.querySelector("span"),
    budget: formFields.budget?.closest(".field")?.querySelector("span"),
    date: formFields.date?.closest(".field")?.querySelector("span"),
    time: formFields.time?.closest(".field")?.querySelector("span"),
    timeline: formFields.timeline?.closest(".field")?.querySelector("span"),
    brief: formFields.brief?.closest(".field")?.querySelector("span")
  };

  const arrowIcon = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  `;

  const translations = {
    en: {
      meta: {
        title: "Maghreb Motion | AI, web & automation agency in Morocco",
        description: "Maghreb Motion is an AI, web and automation agency in Morocco. We design websites, digital tools and premium service reservation journeys for ambitious companies.",
        ogTitle: "Maghreb Motion | AI, web & automation agency in Morocco",
        ogDescription: "A premium digital presence inspired by the Maghreb Motion logo, with direct service reservations."
      },
      nav: {
        aria: "Main navigation",
        links: ["Services", "Approach", "Testimonials", "Projects", "Team", "R?servation", "Contact"],
        cta: "Book a brief",
        mobileCta: "Start your reservation",
        openMenu: "Open menu",
        closeMenu: "Close menu",
        languageLabel: "Language switcher"
      },
      hero: {
        title: 'Digital experiences that give your brand more <span>presence</span>.',
        body: "Maghreb Motion designs websites, AI solutions and automation systems to help ambitious companies present themselves better, sell better and operate better.",
        primaryCta: "Book a service",
        secondaryCta: "Explore services",
        status: "Available for new projects - reply within 24h"
      },
      kpis: {
        label: "Our edge",
        title: "A compact technical team that delivers quickly and accurately.",
        body: "Web, AI, automation and acquisition - four mastered pillars to help you reach a real next stage, without detours or empty promises.",
        cta: "Explore our services",
        stats: ["Clients supported", "Projects delivered", "First response"]
      },
      band: {
        text: "We help companies move from a blurry digital presence to a clearer, more credible and more effective brand image.",
        pills: ["Morocco & Africa", "Applied AI", "Automation", "Tailor-made"]
      },
      services: {
        kicker: "Services",
        title: "Four pillars to build, automate and grow your digital presence.",
        body: "From showcase websites to internal automation, we build concrete, clear and useful solutions that support your company's growth.",
        cards: [
          {
            badge: "Web",
            title: "Websites & applications",
            body: "Fast, premium experiences designed to build trust from the very first scroll.",
            items: [
              "Professional showcase website built for positioning, credibility and conversion.",
              "Clear, mobile-first e-commerce store designed around purchase flow.",
              "Custom web application for your internal operations or client services."
            ],
            note: "Showcase, e-commerce, apps",
            cta: "Book this service",
            serviceValue: "Professional showcase website"
          },
          {
            badge: "AI",
            title: "Artificial intelligence solutions",
            body: "Practical AI use cases that save time, improve client relations and structure information.",
            items: [
              "WhatsApp or website chatbot to answer prospects without friction.",
              "Customer support automation for recurring requests and follow-up.",
              "Document analysis, sorting and data extraction from business files."
            ],
            note: "Bots, support, documents",
            cta: "Book this service",
            serviceValue: "WhatsApp / website chatbot"
          },
          {
            badge: "Systems",
            title: "Automation & business tools",
            body: "Cleaner workflows, less repetition and tools that match your day-to-day operations.",
            items: [
              "Custom CRM adapted to your sales cycle and internal process.",
              "Client, sales and reservation management from one central space.",
              "Dashboards and reporting tools to steer decisions with clarity."
            ],
            note: "CRM, op?rations, dashboards",
            cta: "Book this service",
            serviceValue: "Custom CRM / business tool"
          },
          {
            badge: "Growth",
            title: "Digital marketing & acquisition",
            body: "Campaigns and lead generation systems that connect design, offer and conversion.",
            items: [
              "Meta and Google Ads campaigns with clear conversion angles.",
              "Marketing content creation aligned with your positioning.",
              "Lead generation systems with automated commercial follow-up."
            ],
            note: "Ads, content, leads",
            cta: "Book this service",
            serviceValue: "Meta / Google Ads"
          }
        ]
      },
      approach: {
        kicker: "Approach",
        title: "A clear process to move from idea to a system in production.",
        body: "We start by clarifying the need, then we build a simple, prioritised and executable response.",
        steps: [
          {
            title: "Discovery",
            body: "We frame the need, the audience, current blockers and the best product entry point."
          },
          {
            title: "Direction",
            body: "We define a clear recommendation: site structure, experience, tool or automation to prioritise."
          },
          {
            title: "Production",
            body: "We deliver premium design and a clean, fast system aligned with your brand image."
          },
          {
            title: "Optimisation",
            body: "We study the feedback, refine the journey and strengthen what converts best."
          }
        ],
        notes: [
          {
            title: "A stronger identity",
            body: "A more precise design strengthens how your company is perceived and builds trust from the first contact."
          },
          {
            title: "A clearer offer",
            body: "We organise the content so visitors quickly understand what you do and who it is for."
          },
          {
            title: "A more direct journey",
            body: "The right calls to action reduce hesitation and make contact easier."
          }
        ]
      },
      voices: {
        kicker: "Testimonials",
        title: "A few client impressions across web, AI and growth projects.",
        body: "A simple, human and reassuring way to show the impact of the work delivered.",
        starsLabel: "5 out of 5",
        quotes: [
          {
            name: "Meryem A.",
            role: "Founder, beauty brand",
            text: "The positioning is much clearer, the site feels more trustworthy and our first commercial conversations are far better.",
            label: "Showcase website & digital identity",
            city: "Casablanca"
          },
          {
            name: "Karim L.",
            role: "Operations director, logistics",
            text: "We needed more flow. The automation put in place simplified our internal processing and saved us real time.",
            label: "AI & automation",
            city: "Rabat"
          },
          {
            name: "Salma N.",
            role: "Business development lead, B2B",
            text: "I liked the balance between design, clarity and execution. You can feel a team that understands both image and business stakes.",
            label: "Acquisition & conversion journey",
            city: "Marrakech"
          }
        ]
      },
      projects: {
        kicker: "Projects",
        title: "A selection of projects we built for our clients.",
        body: "Websites, systems and tools delivered for Moroccan and African companies with a wide range of needs.",
        cta: "Similar project",
        items: [
          {
            badge: "Web",
            title: "Dar Zitoun",
            body: "Premium showcase website for a luxury restaurant in Marrakech, with integrated online booking and an immersive brand experience.",
            city: "Marrakech"
          },
          {
            badge: "Systems",
            title: "LogiPro Dashboard",
            body: "Custom CRM and operational dashboard for a logistics company: delivery tracking, client management and real-time reporting.",
            city: "Casablanca"
          },
          {
            badge: "Web + AI",
            title: "Beaut? Id?ale",
            body: "Premium e-commerce store for a cosmetics brand, with a WhatsApp chatbot for support and automated product recommendations.",
            city: "Rabat"
          },
          {
            badge: "Web",
            title: "Atlas Invest",
            body: "Premium institutional website for an investment firm, with a refined digital identity, fund presentation and an optimised contact journey.",
            city: "Casablanca"
          },
          {
            badge: "AI",
            title: "MedConnect",
            body: "End-to-end appointment automation for a private clinic: pre-qualification chatbot, automatic reminders and simplified patient handling.",
            city: "Rabat"
          },
          {
            badge: "Growth",
            title: "GrowthLab MA",
            body: "Complete lead generation system for a B2B agency: Meta Ads campaigns, optimised landing pages and an automated sales pipeline with weekly reporting.",
            city: "Casablanca"
          }
        ]
      },
      team: {
        kicker: "Team",
        title: "A compact, technical team focused on results.",
        body: "Complementary profiles that connect strategy, technical execution and growth."
      },
      reservation: {
        kicker: "R?servation",
        title: "Tell us about your project.",
        body: "A few details are enough to help us understand your needs and get back to you with an initial direction.",
        focusLabel: "Selected service",
        focusDefault: "Select the service that best matches your need",
        steps: [
          "Choose the service closest to your need.",
          "Share your context, budget and preferred timeline.",
          "Our team reviews your request and gets back to you quickly."
        ],
        mail: "Reply within 24 business hours",
        formTitle: "Project inquiry",
        formLead: "Fill in this quick brief to receive a first response tailored to your needs.",
        formPill: "First contact",
        labels: {
          fullName: "Full name",
          email: "Email",
          company: "Company",
          phone: "Phone / WhatsApp",
          service: "Requested service",
          budget: "Estimated budget",
          date: "Preferred date",
          time: "Preferred time",
          timeline: "Desired timeline",
          brief: "Project brief"
        },
        placeholders: {
          fullName: "Your name",
          email: "you@company.com",
          company: "Company name",
          phone: "+212 ...",
          time: "Example: morning, 2:00 PM, after 5:00 PM",
          brief: "Tell us what you want to launch, improve or automate."
        },
        servicePlaceholder: "Choose a service",
        serviceOptions: [
          { value: "Professional showcase website", label: "Professional showcase website" },
          { value: "E-commerce / online store", label: "E-commerce / online store" },
          { value: "Custom web application", label: "Custom web application" },
          { value: "WhatsApp / website chatbot", label: "WhatsApp / website chatbot" },
          { value: "Customer support automation", label: "Customer support automation" },
          { value: "Document analysis and processing", label: "Document analysis and processing" },
          { value: "Custom CRM / business tool", label: "Custom CRM / business tool" },
          { value: "Client, sales and reservation management", label: "Client, sales and reservation management" },
          { value: "Dashboard and reporting", label: "Dashboard and reporting" },
          { value: "Meta / Google Ads", label: "Meta / Google Ads" },
          { value: "Automated lead generation", label: "Automated lead generation" },
          { value: "Digital audit and strategy", label: "Digital audit and strategy" }
        ],
        budgetPlaceholder: "Select a range",
        budgetOptions: [
          { value: "Under 5,000 MAD", label: "Under 5,000 MAD" },
          { value: "5,000 - 15,000 MAD", label: "5,000 - 15,000 MAD" },
          { value: "15,000 - 40,000 MAD", label: "15,000 - 40,000 MAD" },
          { value: "40,000 MAD and above", label: "40,000 MAD and above" }
        ],
        timelinePlaceholder: "Select a timeline",
        timelineOptions: [
          { value: "Urgent - under 7 days", label: "Urgent - under 7 days" },
          { value: "2 to 3 weeks", label: "2 to 3 weeks" },
          { value: "1 to 2 months", label: "1 to 2 months" },
          { value: "To be defined", label: "To be defined" }
        ],
        submit: "Send request",
        meta: "Your information is used only to process your request. Our team replies as quickly as possible.",
        fallback: "Contact the agency directly"
      },
      footer: {
        brand: "Websites, applied AI, automation and acquisition for companies that want to level up with a stronger image and more useful tools.",
        ctas: ["Start a project", "View services"],
        navLabel: "Navigation",
        contactLabel: "Contact",
        navLinks: ["Services", "Approach", "Testimonials", "Projects", "Team", "R?servation", "Back to top"],
        navAria: "Useful links",
        copyright: "© 2026 Maghreb Motion. All rights reserved.",
        badge: "Available for new projects"
      },
      misc: {
        whatsapp: "Contact us on WhatsApp",
        backToTop: "Back to top"
      },
      feedback: {
        notConfigured: "The form is not configured yet. Please contact us directly by email.",
        localFile: "The form must be opened through a web server to work properly.",
        sending: "Sending...",
        success: "Thanks, your request has been sent successfully. Our team will get back to you shortly.",
        error: "An error occurred while sending. Please try again or contact us directly by email."
      },
      mail: {
        subjectPrefix: "New inquiry",
        fallbackService: "R?servation",
        fallbackName: "Lead",
        heading: "NEW INQUIRY - MAGHREB MOTION",
        customerInfo: "CLIENT INFORMATION",
        projectDetails: "PROJECT DETAILS",
        projectBrief: "PROJECT BRIEF",
        directTitle: "New Maghreb Motion inquiry",
        noValue: "-",
        labels: {
          fullName: "Full name",
          email: "Email",
          company: "Company",
          phone: "Phone / WhatsApp",
          service: "Requested service",
          budget: "Estimated budget",
          date: "Preferred date",
          time: "Preferred time",
          timeline: "Desired timeline",
          brief: "Project brief"
        }
      }
    },
    fr: {
      meta: {
        title: "Maghreb Motion | Agence IA, web & automatisation au Maroc",
        description: "Maghreb Motion est une agence IA, web et automatisation au Maroc. Nous concevons des sites, des outils digitaux et des parcours de reservation premium pour les entreprises ambitieuses.",
        ogTitle: "Maghreb Motion | Agence IA, web & automatisation au Maroc",
        ogDescription: "Une pr?sence digitale premium inspir?e du logo Maghreb Motion, avec r?servation directe de services."
      },
      nav: {
        aria: "Navigation principale",
        links: ["Services", "Approche", "T?moignages", "R?alisations", "?quipe", "R?servation", "Contact"],
        cta: "R?server un brief",
        mobileCta: "D?marrer la r?servation",
        openMenu: "Ouvrir le menu",
        closeMenu: "Fermer le menu",
        languageLabel: "Choix de langue"
      },
      hero: {
        title: 'Des exp?riences digitales qui donnent plus de <span>pr?sence</span> ? votre marque.',
        body: "Maghreb Motion con?oit des sites web, des solutions IA et des syst?mes d'automatisation pour aider les entreprises ambitieuses ? mieux se pr?senter, mieux vendre et mieux op?rer.",
        primaryCta: "R?server un service",
        secondaryCta: "Explorer les services",
        status: "Disponible pour de nouveaux projets - r?ponse sous 24h"
      },
      kpis: {
        label: "Notre force",
        title: "Une ?quipe technique compacte qui livre vite et juste.",
        body: "Web, IA, automatisation et acquisition - quatre piliers ma?tris?s pour vous aider ? passer un cap r?el, sans d?tour ni promesse vide.",
        cta: "D?couvrir nos services",
        stats: ["Clients accompagn?s", "Projets livr?s", "Premier retour"]
      },
      band: {
        text: "Nous aidons les entreprises ? passer d'une pr?sence digitale floue ? une image plus claire, plus cr?dible et plus performante.",
        pills: ["Maroc & Afrique", "IA appliqu?e", "Automatisation", "Sur mesure"]
      },
      services: {
        kicker: "Services",
        title: "Quatre p?les pour construire, automatiser et faire grandir votre pr?sence digitale.",
        body: "Du site de pr?sentation ? l'automatisation interne, nous construisons des solutions concr?tes, lisibles et utiles ? la croissance de votre entreprise.",
        cards: [
          {
            badge: "Web",
            title: "Sites web & applications",
            body: "Des exp?riences rapides, haut de gamme et pens?es pour inspirer confiance d?s le premier scroll.",
            items: [
              "Site vitrine professionnel pour pr?sentation, cr?dibilit? et conversion.",
              "Boutique e-commerce claire, mobile-first et orient?e achat.",
              "Application web sur mesure pour vos op?rations ou services clients."
            ],
            note: "Vitrine, e-commerce, application",
            cta: "R?server ce service",
            serviceValue: "Professional showcase website"
          },
          {
            badge: "IA",
            title: "Solutions d'intelligence artificielle",
            body: "Des usages concrets de l'IA qui font gagner du temps, fluidifient la relation client et structurent l'information.",
            items: [
              "Chatbot WhatsApp ou site web pour r?pondre sans friction.",
              "Automatisation du support client et des demandes r?currentes.",
              "Analyse, tri et extraction de donn?es depuis vos documents."
            ],
            note: "Bots, support, documents",
            cta: "R?server ce service",
            serviceValue: "WhatsApp / website chatbot"
          },
          {
            badge: "Syst?mes",
            title: "Automatisation & outils m?tier",
            body: "Des flux de travail plus propres, moins de r?p?tition et des outils qui suivent votre r?alit? terrain.",
            items: [
              "CRM sur mesure adapt? ? votre cycle commercial.",
              "Gestion clients, ventes et r?servations depuis un seul espace.",
              "Dashboards et reporting pour piloter sans zone grise."
            ],
            note: "CRM, op?rations, dashboards",
            cta: "R?server ce service",
            serviceValue: "Custom CRM / business tool"
          },
          {
            badge: "Croissance",
            title: "Marketing digital & acquisition",
            body: "Des campagnes et syst?mes de lead generation qui relient le design, l'offre et la conversion.",
            items: [
              "Publicit? Meta et Google Ads avec angles de conversion clairs.",
              "Cr?ation de contenu marketing adapt?e ? votre positionnement.",
              "Syst?mes de g?n?ration de leads et suivi commercial automatis?."
            ],
            note: "Ads, contenu, leads",
            cta: "R?server ce service",
            serviceValue: "Meta / Google Ads"
          }
        ]
      },
      approach: {
        kicker: "Approche",
        title: "Un processus net pour passer de l'id?e au syst?me en production.",
        body: "Nous commen?ons par clarifier le besoin, puis nous construisons une r?ponse simple, prioris?e et ex?cutable.",
        steps: [
          {
            title: "Diagnostic",
            body: "Nous cadrons le besoin, la cible, les blocages actuels et la meilleure porte d'entr?e produit."
          },
          {
            title: "Direction",
            body: "Nous posons une proposition claire : structure du site, exp?rience, outil ou automatisation ? prioriser."
          },
          {
            title: "Production",
            body: "Nous livrons un design premium et un syst?me propre, rapide et align? avec l'image de l'agence."
          },
          {
            title: "Optimisation",
            body: "Nous observons les retours, affinons le parcours et renfor?ons ce qui convertit le mieux."
          }
        ],
        notes: [
          {
            title: "Une identit? qui marque davantage",
            body: "Un design plus juste renforce la perception de votre entreprise et la confiance au premier contact."
          },
          {
            title: "Une offre mieux comprise",
            body: "Nous organisons le contenu pour que le visiteur identifie vite ce que vous faites et ? qui cela s'adresse."
          },
          {
            title: "Un parcours plus direct",
            body: "Les bons appels ? l'action r?duisent les h?sitations et facilitent la prise de contact."
          }
        ]
      },
      voices: {
        kicker: "T?moignages",
        title: "Quelques retours de clients accompagn?s sur des sujets web, IA et croissance.",
        body: "Une pr?sentation simple, humaine et rassurante pour montrer l'impact du travail r?alis?.",
        starsLabel: "5 sur 5",
        quotes: [
          {
            name: "Meryem A.",
            role: "Fondatrice, marque beauty",
            text: "Le positionnement est plus clair, le site inspire davantage confiance et nos premiers ?changes commerciaux sont bien meilleurs.",
            label: "Site vitrine & identit? digitale",
            city: "Casablanca"
          },
          {
            name: "Karim L.",
            role: "Directeur op?rations, logistique",
            text: "Nous avions besoin de fluidit?. L'automatisation mise en place a simplifi? le traitement interne et nous a fait gagner un temps r?el.",
            label: "IA & automatisation",
            city: "Rabat"
          },
          {
            name: "Salma N.",
            role: "Responsable d?veloppement, B2B",
            text: "J'ai aim? l'?quilibre entre design, clart? et ex?cution. On sent une ?quipe qui comprend autant l'image que les enjeux business.",
            label: "Acquisition & parcours de conversion",
            city: "Marrakech"
          }
        ]
      },
      projects: {
        kicker: "R?alisations",
        title: "Quelques projets que nous avons construits pour nos clients.",
        body: "Des sites, syst?mes et outils livr?s pour des entreprises marocaines et africaines aux besoins vari?s.",
        cta: "Projet similaire",
        items: [
          {
            badge: "Web",
            title: "Dar Zitoun",
            body: "Site vitrine haut de gamme pour un restaurant de luxe ? Marrakech, avec syst?me de r?servation en ligne int?gr? et exp?rience immersive.",
            city: "Marrakech"
          },
          {
            badge: "Syst?mes",
            title: "LogiPro Dashboard",
            body: "CRM sur mesure et tableau de bord op?rationnel pour une entreprise logistique : suivi des livraisons, gestion des clients et reporting en temps r?el.",
            city: "Casablanca"
          },
          {
            badge: "Web + IA",
            title: "Beaut? Id?ale",
            body: "Boutique e-commerce premium pour une marque de cosm?tiques, avec chatbot WhatsApp pour le support client et recommandations produit automatis?es.",
            city: "Rabat"
          },
          {
            badge: "Web",
            title: "Atlas Invest",
            body: "Site institutionnel premium pour un cabinet d'investissement : identit? digitale soign?e, pr?sentation des fonds et parcours de prise de contact optimis?.",
            city: "Casablanca"
          },
          {
            badge: "IA",
            title: "MedConnect",
            body: "Automatisation compl?te des rendez-vous m?dicaux : chatbot de pr?-qualification, rappels automatiques et dossier patient simplifi? pour une clinique priv?e.",
            city: "Rabat"
          },
          {
            badge: "Croissance",
            title: "GrowthLab MA",
            body: "Syst?me complet de g?n?ration de leads pour une agence B2B : campagnes Meta Ads, landing pages optimis?es et pipeline commercial automatis? avec reporting hebdo.",
            city: "Casablanca"
          }
        ]
      },
      team: {
        kicker: "?quipe",
        title: "Une ?quipe compacte, technique et orient?e r?sultat.",
        body: "Des profils compl?mentaires pour relier strat?gie, ex?cution technique et croissance."
      },
      reservation: {
        kicker: "R?servation",
        title: "Parlez-nous de votre projet.",
        body: "Quelques informations suffisent pour nous aider ? comprendre votre besoin et vous recontacter avec une premi?re orientation.",
        focusLabel: "Service choisi",
        focusDefault: "S?lectionnez le service qui correspond ? votre besoin",
        steps: [
          "Choisissez le service le plus proche de votre besoin.",
          "Partagez votre contexte, votre budget et le d?lai souhait?.",
          "Notre ?quipe ?tudie votre demande et revient vers vous rapidement."
        ],
        mail: "R?ponse sous 24h ouvrables",
        formTitle: "Demande de projet",
        formLead: "Remplissez ce brief rapide pour recevoir un premier retour adapt? ? votre besoin.",
        formPill: "Premier contact",
        labels: {
          fullName: "Nom complet",
          email: "E-mail",
          company: "Entreprise",
          phone: "T?l?phone / WhatsApp",
          service: "Service demand?",
          budget: "Budget estim?",
          date: "Date souhait?e",
          time: "Moment pr?f?r?",
          timeline: "D?lai souhait?",
          brief: "Brief du projet"
        },
        placeholders: {
          fullName: "Votre nom",
          email: "vous@entreprise.com",
          company: "Nom de l'entreprise",
          phone: "+212 ...",
          time: "Ex : matin, 14h00, apr?s 17h",
          brief: "Dites-nous ce que vous voulez lancer, am?liorer ou automatiser."
        },
        servicePlaceholder: "Choisir un service",
        serviceOptions: [
          { value: "Professional showcase website", label: "Site vitrine professionnel" },
          { value: "E-commerce / online store", label: "E-commerce / boutique en ligne" },
          { value: "Custom web application", label: "Application web sur mesure" },
          { value: "WhatsApp / website chatbot", label: "Chatbot WhatsApp / site web" },
          { value: "Customer support automation", label: "Automatisation du support client" },
          { value: "Document analysis and processing", label: "Analyse et traitement de documents" },
          { value: "Custom CRM / business tool", label: "CRM / outil m?tier sur mesure" },
          { value: "Client, sales and reservation management", label: "Gestion clients, ventes & r?servations" },
          { value: "Dashboard and reporting", label: "Dashboard & reporting" },
          { value: "Meta / Google Ads", label: "Publicit? Meta / Google Ads" },
          { value: "Automated lead generation", label: "G?n?ration de leads automatis?e" },
          { value: "Digital audit and strategy", label: "Audit & strat?gie digitale" }
        ],
        budgetPlaceholder: "S?lectionner une fourchette",
        budgetOptions: [
          { value: "Under 5,000 MAD", label: "Moins de 5 000 MAD" },
          { value: "5,000 - 15,000 MAD", label: "5 000 - 15 000 MAD" },
          { value: "15,000 - 40,000 MAD", label: "15 000 - 40 000 MAD" },
          { value: "40,000 MAD and above", label: "40 000 MAD et plus" }
        ],
        timelinePlaceholder: "S?lectionner un d?lai",
        timelineOptions: [
          { value: "Urgent - under 7 days", label: "Urgent - moins de 7 jours" },
          { value: "2 to 3 weeks", label: "2 ? 3 semaines" },
          { value: "1 to 2 months", label: "1 ? 2 mois" },
          { value: "To be defined", label: "? d?finir" }
        ],
        submit: "Envoyer la r?servation",
        meta: "Vos informations sont utilis?es uniquement pour traiter votre demande. Notre ?quipe vous r?pond dans les meilleurs d?lais.",
        fallback: "Contacter directement l'agence"
      },
      footer: {
        brand: "Sites web, IA appliqu?e, automatisation et acquisition pour les entreprises qui veulent passer un cap avec une image plus forte et des outils plus utiles.",
        ctas: ["D?marrer un projet", "Voir les services"],
        navLabel: "Navigation",
        contactLabel: "Contact",
        navLinks: ["Services", "Approche", "T?moignages", "R?alisations", "?quipe", "R?servation", "Retour en haut"],
        navAria: "Liens utiles",
        copyright: "© 2026 Maghreb Motion. Tous droits r?serv?s.",
        badge: "Disponible pour de nouveaux projets"
      },
      misc: {
        whatsapp: "Nous contacter sur WhatsApp",
        backToTop: "Retour en haut de page"
      },
      feedback: {
        notConfigured: "Le formulaire n'est pas encore configur?. Merci de nous contacter directement par e-mail.",
        localFile: "Le formulaire doit ?tre ouvert via un serveur web pour fonctionner correctement.",
        sending: "Envoi en cours...",
        success: "Merci, votre demande a bien ?t? envoy?e. Notre ?quipe vous recontacte rapidement.",
        error: "Une erreur est survenue pendant l'envoi. Merci de r?essayer ou de nous contacter directement par e-mail."
      },
      mail: {
        subjectPrefix: "Nouvelle r?servation",
        fallbackService: "R?servation",
        fallbackName: "Prospect",
        heading: "NOUVELLE R?SERVATION - MAGHREB MOTION",
        customerInfo: "INFORMATIONS CLIENT",
        projectDetails: "D?TAILS DU PROJET",
        projectBrief: "BRIEF DU PROJET",
        directTitle: "Nouvelle r?servation Maghreb Motion",
        noValue: "-",
        labels: {
          fullName: "Nom complet",
          email: "E-mail",
          company: "Entreprise",
          phone: "T?l?phone / WhatsApp",
          service: "Service demand?",
          budget: "Budget estim?",
          date: "Date souhait?e",
          time: "Moment pr?f?r?",
          timeline: "D?lai souhait?",
          brief: "Brief du projet"
        }
      }
    }
  };

  let currentLanguage = window.localStorage.getItem("maghrebMotionLanguage") === "fr" ? "fr" : "en";

  const setText = (element, value) => {
    if (element && typeof value === "string") {
      element.textContent = value;
    }
  };

  const setHtml = (element, value) => {
    if (element && typeof value === "string") {
      element.innerHTML = value;
    }
  };

  const setArrowLabel = (element, label) => {
    if (element && typeof label === "string") {
      element.innerHTML = `${label}${arrowIcon}`;
    }
  };

  const setSectionHead = (element, data) => {
    if (!element || !data) return;
    setText(element.querySelector(".section-kicker"), data.kicker);
    setText(element.querySelector("h2"), data.title);
    setText(element.querySelector("p"), data.body);
  };

  const populateSelect = (selectElement, placeholder, options) => {
    if (!selectElement) return;
    const previousValue = selectElement.value;
    selectElement.innerHTML = "";

    const placeholderOption = document.createElement("option");
    placeholderOption.value = "";
    placeholderOption.textContent = placeholder;
    selectElement.appendChild(placeholderOption);

    options.forEach((item) => {
      const option = document.createElement("option");
      option.value = item.value;
      option.textContent = item.label;
      selectElement.appendChild(option);
    });

    if (options.some((item) => item.value === previousValue)) {
      selectElement.value = previousValue;
    } else {
      selectElement.value = "";
    }
  };

  const getSelectedOptionLabel = (selectElement) => {
    if (!selectElement || selectElement.selectedIndex < 0) return "";
    const option = selectElement.options[selectElement.selectedIndex];
    if (!option || option.value === "") return "";
    return option.textContent.trim();
  };

  const getFormValue = (data, key) => String(data.get(formFieldNames[key]) || "").trim();

  const getDisplayValue = (data, key) => {
    if (key === "service") return getSelectedOptionLabel(formFields.service) || getFormValue(data, key);
    if (key === "budget") return getSelectedOptionLabel(formFields.budget) || getFormValue(data, key);
    if (key === "timeline") return getSelectedOptionLabel(formFields.timeline) || getFormValue(data, key);
    return getFormValue(data, key);
  };

  const updateNavToggleLabel = () => {
    if (!navToggle) return;
    const isOpen = mobileMenu?.classList.contains("is-open");
    navToggle.setAttribute("aria-label", isOpen ? translations[currentLanguage].nav.closeMenu : translations[currentLanguage].nav.openMenu);
  };

  const updateSelectedService = () => {
    if (!selectedServiceLabel) return;
    const label = getSelectedOptionLabel(serviceSelect);
    selectedServiceLabel.textContent = label || translations[currentLanguage].reservation.focusDefault;
  };

  const updateSubject = () => {
    if (!subjectField) return;
    const data = new FormData(reservationForm);
    const service = getDisplayValue(data, "service") || translations[currentLanguage].mail.fallbackService;
    const fullName = getDisplayValue(data, "fullName") || translations[currentLanguage].mail.fallbackName;
    subjectField.value = `${translations[currentLanguage].mail.subjectPrefix} | ${service} | ${fullName}`;
  };

  const updateReplyTo = () => {
    if (!replyToField || !visitorEmail) return;
    replyToField.value = visitorEmail.value.trim();
  };

  const updateR?servationSummary = () => {
    if (!reservationSummary) return;
    const data = new FormData(reservationForm);
    const t = translations[currentLanguage];
    const divider = "----------------------------------------------";
    const noValue = t.mail.noValue;

    reservationSummary.value = [
      divider,
      t.mail.heading,
      divider,
      "",
      t.mail.customerInfo,
      divider,
      `${t.mail.labels.fullName}: ${getDisplayValue(data, "fullName") || noValue}`,
      `${t.mail.labels.email}: ${getDisplayValue(data, "email") || noValue}`,
      `${t.mail.labels.company}: ${getDisplayValue(data, "company") || noValue}`,
      `${t.mail.labels.phone}: ${getDisplayValue(data, "phone") || noValue}`,
      "",
      t.mail.projectDetails,
      divider,
      `${t.mail.labels.service}: ${getDisplayValue(data, "service") || noValue}`,
      `${t.mail.labels.budget}: ${getDisplayValue(data, "budget") || noValue}`,
      `${t.mail.labels.date}: ${getDisplayValue(data, "date") || noValue}`,
      `${t.mail.labels.time}: ${getDisplayValue(data, "time") || noValue}`,
      `${t.mail.labels.timeline}: ${getDisplayValue(data, "timeline") || noValue}`,
      "",
      t.mail.projectBrief,
      divider,
      getDisplayValue(data, "brief") || noValue,
      "",
      divider
    ].join("\n");
  };

  const buildMailtoHref = () => {
    const data = new FormData(reservationForm);
    const t = translations[currentLanguage];
    const subject = subjectField ? subjectField.value : `${t.mail.subjectPrefix} - Maghreb Motion`;

    const lines = [
      t.mail.directTitle,
      "",
      `${t.mail.labels.fullName}: ${getDisplayValue(data, "fullName")}`,
      `${t.mail.labels.email}: ${getDisplayValue(data, "email")}`,
      `${t.mail.labels.company}: ${getDisplayValue(data, "company")}`,
      `${t.mail.labels.phone}: ${getDisplayValue(data, "phone")}`,
      `${t.mail.labels.service}: ${getDisplayValue(data, "service")}`,
      `${t.mail.labels.budget}: ${getDisplayValue(data, "budget")}`,
      `${t.mail.labels.date}: ${getDisplayValue(data, "date")}`,
      `${t.mail.labels.time}: ${getDisplayValue(data, "time")}`,
      `${t.mail.labels.timeline}: ${getDisplayValue(data, "timeline")}`,
      "",
      `${t.mail.labels.brief}:`,
      getDisplayValue(data, "brief")
    ];

    return `mailto:maghrebmotioncontact@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  };

  const setFeedbackState = (state, tone) => {
    if (!feedback) return;
    feedback.dataset.i18nState = state;
    feedback.textContent = translations[currentLanguage].feedback[state];
    feedback.className = `form-card__feedback is-visible ${tone === "success" ? "is-success" : "is-warning"}`;
  };

  const hasConfiguredAccessKey = () => {
    if (!accessKeyField) return false;
    const value = accessKeyField.value.trim();
    return value !== "" && value !== "PASTE_WEB3FORMS_ACCESS_KEY_HERE";
  };

  const applyLanguage = (language) => {
    currentLanguage = language === "fr" ? "fr" : "en";
    const t = translations[currentLanguage];
    window.localStorage.setItem("maghrebMotionLanguage", currentLanguage);
    document.documentElement.lang = currentLanguage;

    document.title = t.meta.title;
    metaDescription?.setAttribute("content", t.meta.description);
    metaOgTitle?.setAttribute("content", t.meta.ogTitle);
    metaOgDescription?.setAttribute("content", t.meta.ogDescription);

    headerNav?.setAttribute("aria-label", t.nav.aria);
    langSwitch?.setAttribute("aria-label", t.nav.languageLabel);

    desktopNavLinks.forEach((link, index) => setText(link, t.nav.links[index]));
    mobileNavLinks.forEach((link, index) => setText(link, t.nav.links[index]));
    setArrowLabel(desktopNavCta, t.nav.cta);
    setArrowLabel(mobileNavCta, t.nav.mobileCta);

    languageButtons.forEach((button) => {
      const isActive = button.getAttribute("data-lang-trigger") === currentLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    updateNavToggleLabel();

    setHtml(heroTitle, t.hero.title);
    setText(heroBody, t.hero.body);
    setArrowLabel(heroPrimaryCta, t.hero.primaryCta);
    setText(heroSecondaryCta, t.hero.secondaryCta);
    setText(heroStatus, t.hero.status);

    setText(kpiFeatureLabel, t.kpis.label);
    setText(kpiFeatureTitle, t.kpis.title);
    setText(kpiFeatureBody, t.kpis.body);
    setArrowLabel(kpiFeatureCta, t.kpis.cta);
    kpiCardLabels.forEach((label, index) => setText(label, t.kpis.stats[index]));

    setText(bandText, t.band.text);
    bandPills.forEach((pill, index) => setText(pill, t.band.pills[index]));

    setSectionHead(servicesHead, t.services);
    serviceCards.forEach((card, index) => {
      const data = t.services.cards[index];
      if (!data) return;
      setText(card.querySelector(".service-card__badge"), data.badge);
      setText(card.querySelector(".service-card__content h3"), data.title);
      setText(card.querySelector(".service-card__content p"), data.body);
      card.querySelectorAll(".service-card__list li").forEach((item, itemIndex) => {
        setText(item, data.items[itemIndex]);
      });
      setText(card.querySelector(".service-card__note"), data.note);
      setText(card.querySelector(".service-card__cta"), data.cta);
      card.querySelector(".service-card__cta")?.setAttribute("data-service", data.serviceValue);
    });

    setSectionHead(approachHead, t.approach);
    processCards.forEach((card, index) => {
      const data = t.approach.steps[index];
      if (!data) return;
      setText(card.querySelector("h3"), data.title);
      setText(card.querySelector("p"), data.body);
    });
    noteCards.forEach((card, index) => {
      const data = t.approach.notes[index];
      if (!data) return;
      setText(card.querySelector("strong"), data.title);
      setText(card.querySelector("p"), data.body);
    });

    setSectionHead(voicesHead, t.voices);
    quoteCards.forEach((card, index) => {
      const data = t.voices.quotes[index];
      if (!data) return;
      setText(card.querySelector(".quote-card__person strong"), data.name);
      setText(card.querySelector(".quote-card__person span"), data.role);
      card.querySelector(".quote-card__stars")?.setAttribute("aria-label", t.voices.starsLabel);
      setText(card.querySelector("p"), data.text);
      setText(card.querySelector(".quote-card__footer strong"), data.label);
      setText(card.querySelector(".quote-card__footer span"), data.city);
    });

    setSectionHead(projectsHead, t.projects);
    projectCards.forEach((card, index) => {
      const data = t.projects.items[index];
      if (!data) return;
      setText(card.querySelector(".project-card__badge"), data.badge);
      setText(card.querySelector(".project-card__body h3"), data.title);
      setText(card.querySelector(".project-card__body p"), data.body);
      setText(card.querySelector(".project-card__location"), data.city);
      setArrowLabel(card.querySelector(".project-card__link"), t.projects.cta);
    });

    setSectionHead(teamHead, t.team);

    setText(reservationKicker, t.reservation.kicker);
    setText(reservationTitle, t.reservation.title);
    setText(reservationBody, t.reservation.body);
    setText(reservationFocusLabel, t.reservation.focusLabel);
    reservationSteps.forEach((step, index) => setText(step, t.reservation.steps[index]));
    setText(reservationMail, t.reservation.mail);
    setText(formCardTitle, t.reservation.formTitle);
    setText(formCardLead, t.reservation.formLead);
    setText(formCardPill, t.reservation.formPill);

    setText(formLabels.fullName, t.reservation.labels.fullName);
    setText(formLabels.email, t.reservation.labels.email);
    setText(formLabels.company, t.reservation.labels.company);
    setText(formLabels.phone, t.reservation.labels.phone);
    setText(formLabels.service, t.reservation.labels.service);
    setText(formLabels.budget, t.reservation.labels.budget);
    setText(formLabels.date, t.reservation.labels.date);
    setText(formLabels.time, t.reservation.labels.time);
    setText(formLabels.timeline, t.reservation.labels.timeline);
    setText(formLabels.brief, t.reservation.labels.brief);

    if (formFields.fullName) formFields.fullName.placeholder = t.reservation.placeholders.fullName;
    if (formFields.email) formFields.email.placeholder = t.reservation.placeholders.email;
    if (formFields.company) formFields.company.placeholder = t.reservation.placeholders.company;
    if (formFields.phone) formFields.phone.placeholder = t.reservation.placeholders.phone;
    if (formFields.time) formFields.time.placeholder = t.reservation.placeholders.time;
    if (formFields.brief) formFields.brief.placeholder = t.reservation.placeholders.brief;

    populateSelect(formFields.service, t.reservation.servicePlaceholder, t.reservation.serviceOptions);
    populateSelect(formFields.budget, t.reservation.budgetPlaceholder, t.reservation.budgetOptions);
    populateSelect(formFields.timeline, t.reservation.timelinePlaceholder, t.reservation.timelineOptions);

    setArrowLabel(submitButton, t.reservation.submit);
    setText(formCardMeta, t.reservation.meta);
    setText(mailtoFallback, t.reservation.fallback);

    setText(footerBrandText, t.footer.brand);
    footerCtas.forEach((button, index) => setText(button, t.footer.ctas[index]));
    setText(footerLabels[0], t.footer.navLabel);
    setText(footerLabels[1], t.footer.contactLabel);
    footerNav?.setAttribute("aria-label", t.footer.navAria);
    footerNavLinks.forEach((link, index) => setText(link, t.footer.navLinks[index]));
    setText(footerCopyright, t.footer.copyright);
    setText(footerBadge, t.footer.badge);

    whatsappFab?.setAttribute("aria-label", t.misc.whatsapp);
    backToTopBtn?.setAttribute("aria-label", t.misc.backToTop);

    updateSelectedService();
    updateSubject();
    updateReplyTo();
    updateR?servationSummary();
    if (mailtoFallback) {
      mailtoFallback.href = buildMailtoHref();
    }
    if (feedback?.dataset.i18nState) {
      feedback.textContent = t.feedback[feedback.dataset.i18nState] || feedback.textContent;
    }
  };

  const syncR?servationState = () => {
    updateSelectedService();
    updateSubject();
    updateReplyTo();
    updateR?servationSummary();
    if (mailtoFallback) {
      mailtoFallback.href = buildMailtoHref();
    }
  };

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.getAttribute("data-lang-trigger"));
    });
  });

  navToggle?.addEventListener("click", () => {
    window.requestAnimationFrame(updateNavToggleLabel);
  });

  serviceSelect?.addEventListener("change", syncR?servationState);
  reservationForm.addEventListener("input", syncR?servationState);
  reservationForm.addEventListener("change", syncR?servationState);

  serviceTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const selected = trigger.getAttribute("data-service");
      if (!selected || !serviceSelect) return;
      serviceSelect.value = selected;
      syncR?servationState();
    });
  });

  if (feedback) {
    feedback.textContent = "";
    feedback.className = "form-card__feedback";
    delete feedback.dataset.i18nState;
  }

  reservationForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    syncR?servationState();

    if (window.location.protocol === "file:") {
      setFeedbackState("localFile", "warning");
      localFallbackActions?.classList.add("is-visible");
      return;
    }

    if (!hasConfiguredAccessKey()) {
      setFeedbackState("notConfigured", "warning");
      localFallbackActions?.classList.add("is-visible");
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = translations[currentLanguage].feedback.sending;
    }
    setFeedbackState("sending", "warning");

    try {
      const response = await fetch(reservationForm.action, {
        method: "POST",
        body: new FormData(reservationForm)
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || result?.body?.message || "Web3Forms submission failed");
      }

      reservationForm.reset();
      applyLanguage(currentLanguage);
      setFeedbackState("success", "success");
    } catch (error) {
      setFeedbackState("error", "warning");
      localFallbackActions?.classList.add("is-visible");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        setArrowLabel(submitButton, translations[currentLanguage].reservation.submit);
      }
    }
  });

  applyLanguage(currentLanguage);
})();
