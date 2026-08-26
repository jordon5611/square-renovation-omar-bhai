export type Language = 'fr' | 'en';

export interface Translations {
  common: {
    phone: string;
    email: string;
    address: string;
    addressCity: string;
    companySubtitle: string;
    valuesTagline: string;
    freeQuoteBtn: string;
    directLine: string;
    quoteTitle: string;
    yearsExp: string;
    completedProjects: string;
    decennialInsurance: string;
    guaranteedDelays: string;
    seeProjects: string;
    viewDetails: string;
    sqm: string;
    duration: string;
    seeOnGoogleMaps: string;
    close: string;
    back: string;
    next: string;
    send: string;
    loading: string;
    required: string;
  };
  nav: {
    home: string;
    company: string;
    aboutUs: string;
    ourMethod: string;
    insurance: string;
    portfolio: string;
    haussmannien: string;
    contemporain: string;
    familial: string;
    loft: string;
    maison: string;
    pro: string;
    mapProjects: string;
    woodwork: string;
    guide: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    ctaQuote: string;
    ctaProjects: string;
    trades: {
      electricity: string;
      painting: string;
      parquet: string;
      tiling: string;
      placo: string;
      plumbing: string;
    };
  };
  philosophy: {
    tag: string;
    title: string;
    description: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    discoverBtn: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    viewProjects: string;
  };
  method: {
    tag: string;
    title: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      desc: string;
    }[];
  };
  map: {
    tag: string;
    title: string;
    subtitle: string;
    filters: {
      all: string;
      haussmannien: string;
      contemporain: string;
      loft: string;
    };
    discoverBtn: string;
    viewFullSheet: string;
    coverageNote: string;
    freeEstimateNote: string;
  };
  testimonials: {
    tag: string;
    title: string;
    verifiedScore: string;
  };
  faq: {
    tag: string;
    title: string;
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    quoteBtn: string;
  };
  footer: {
    decennialTitle: string;
    decennialDesc: string;
    allTradesTitle: string;
    allTradesDesc: string;
    valuesTitle: string;
    valuesDesc: string;
    quoteTitle: string;
    quoteDesc: string;
    sixTradesIntegrated: string;
    brandDesc: string;
    ourProjectsTitle: string;
    servicesGuidesTitle: string;
    contactTitle: string;
    legalNotice: string;
    privacy: string;
    copyright: string;
  };
  companyPage: {
    badge: string;
    title: string;
    subtitle: string;
    philosophyTag: string;
    philosophyTitle: string;
    desc1: string;
    desc2: string;
    statTrades: string;
    statTradesLabel: string;
    statQuotes: string;
    statQuotesLabel: string;
    domainsTag: string;
    domainsTitle: string;
    domains: {
      title: string;
      desc: string;
    }[];
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
    ctaCall: string;
  };
  portfolioPage: {
    badge: string;
    title: string;
    subtitle: string;
    allCategories: string;
    zoneLabel: string;
    allZones: string;
    hoverDetails: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  woodworkPage: {
    badge: string;
    title: string;
    subtitle: string;
    savoirFaireTag: string;
    savoirFaireTitle: string;
    savoirFaireDesc: string;
    highlights: {
      title: string;
      desc: string;
    }[];
    catalogueTag: string;
    catalogueTitle: string;
    catalogueItems: {
      title: string;
      desc: string;
    }[];
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  guidePage: {
    badge: string;
    title: string;
    subtitle: string;
    matrixTitle: string;
    matrixSubtitle: string;
    tier1: {
      tag: string;
      title: string;
      price: string;
      desc: string;
      features: string[];
    };
    tier2: {
      badge: string;
      tag: string;
      title: string;
      price: string;
      desc: string;
      features: string[];
    };
    tier3: {
      tag: string;
      title: string;
      price: string;
      desc: string;
      features: string[];
    };
    factorsTitle: string;
    factors: {
      title: string;
      desc: string;
    }[];
    bottomCtaTitle: string;
    bottomCtaBtn: string;
  };
  contactPage: {
    badge: string;
    title: string;
    subtitle: string;
    coordsTitle: string;
    coordsSubtitle: string;
    headquartersTitle: string;
    headquartersSub: string;
    phoneTitle: string;
    phoneSub: string;
    emailTitle: string;
    emailSub: string;
    ourTradesTitle: string;
    quickQuoteTitle: string;
    quickQuoteDesc: string;
    quickQuoteBtn: string;
    formTitle: string;
    formSubtitle: string;
    tradeLabel: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    messageLabel: string;
    submitBtn: string;
    successTitle: string;
    successDesc: (name: string, phone: string) => string;
    sendAnotherBtn: string;
  };
  quoteWizard: {
    badge: string;
    title: string;
    stepIndicator: (step: number) => string;
    stepNames: {
      step1: string;
      step2: string;
      step3: string;
      step4: string;
    };
    step1: {
      propertyTypeLabel: string;
      surfaceLabel: string;
      postalCodeLabel: string;
      types: string[];
    };
    step2: {
      tradesLabel: string;
      tradesDesc: string;
    };
    step3: {
      startPeriodLabel: string;
      periods: string[];
      uploadLabel: string;
      uploadHint: string;
      uploadBtn: string;
      filesUploaded: (count: number) => string;
      notesLabel: string;
      notesPlaceholder: string;
    };
    step4: {
      nameLabel: string;
      phoneLabel: string;
      emailLabel: string;
      termsLabel: string;
    };
    success: {
      title: string;
      desc: (name: string, surface: number, postalCode: string) => string;
      commitmentsTitle: string;
      commitment1: string;
      commitment2: string;
      commitment3: string;
      callBtn: string;
      closeBtn: string;
    };
  };
  projectModal: {
    locationLabel: string;
    surfaceLabel: string;
    durationLabel: string;
    warrantyLabel: string;
    warrantyValue: string;
    sliderTab: string;
    galleryTab: (count: number) => string;
    scopeTitle: string;
    similarProjectText: string;
    quoteForMyProperty: string;
    fullscreen: string;
  };
}
