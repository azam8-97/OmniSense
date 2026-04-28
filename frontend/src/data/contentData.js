export const navItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'problem', label: 'Problem', path: '/problem' },
  { id: 'solution', label: 'Solution', path: '/solution' },
  { id: 'how-it-works', label: 'How It Works', path: '/how-it-works' },
  { id: 'pricing', label: 'Pricing', path: '/pricing' },
  { id: 'team', label: 'Team', path: '/team' },
  { id: 'contact', label: 'Contact', path: '/contact' }
];

export const stats = [
  '1,000+ deaths in 2025 monsoon (NDMA)',
  '$40B lost in 2022 floods',
  'Zero street-level warning systems in Pakistan'
];

export const pricingTiers = [
  {
    title: 'Starter Kit',
    sku: 'OS-SK-01',
    price: 'Rs. 24,999',
    highlights: [
      '1 Outdoor Flood Unit',
      '1 Indoor Safety Unit',
      'Pre-paired, ready in 15 min',
      '12-month warranty',
      'Blynk app setup guide'
    ],
    footer: 'First shared cost in a new network'
  },
  {
    title: 'Indoor Node',
    sku: 'OS-IN-01',
    badge: 'Best Value',
    price: 'Rs. 7,999',
    highlights: [
      '1 Indoor Safety Unit',
      'Joins existing mesh via Ref ID',
      'All gas, fire, SOS features',
      'Gets alerts from outdoor unit',
      'Blynk app access'
    ],
    footer: 'Subsequent household on the street',
    highlighted: true
  },
  {
    title: 'Premium Bundle',
    sku: 'OS-PB-01',
    price: 'Rs. 39,999',
    highlights: [
      '1 Outdoor Unit + 4 Indoor Units',
      'Multi-floor coverage',
      'Extended package',
      'Rs. 4,998 saving vs separate',
      'Custom sensors added to indoor and outdoor units'
    ],
    footer: 'Large communities & enterprise solutions'
  }
];

export const teams = [
  {
    name: 'Tayyab Khan',
    role: 'CEO & Co-Founder',
    scope: 'Company strategy, investor relations, government/NGO sales'
  },
  {
    name: 'Azam Rafique',
    role: 'CTO & Co-Founder',
    scope: 'Firmware, algorithm development, embedded systems'
  },
  {
    name: 'Shahim Riaz',
    role: 'CPO & Co-Founder',
    scope: 'Hardware design, enclosures, component sourcing'
  },
  {
    name: 'Taha Sadat',
    role: 'COO & Co-Founder',
    scope: 'Operations, deployment logistics, after-sales'
  },
  {
    name: 'Asheer Adnan',
    role: 'CMO & Co-Founder',
    scope: 'Marketing, branding, community outreach'
  }
];

export const quotes = {
  problem: [
    {
      text: "Every monsoon season, we lose lives we could have saved with just one sensor on the street.",
      author: "Disaster Response Expert, NDMA"
    }
  ],
  solution: [
    {
      text: "OmniSense brings street-level intelligence to flood early warning systems.",
      author: "IoT Security Researcher"
    }
  ],
  howItWorks: [
    {
      text: "Simple. Automatic. Works when the grid fails.",
      author: "Field Test Coordinator"
    }
  ],
  team: [
    {
      text: "Built by engineers who have lived through the floods and understand what's needed.",
      author: "Community Leader"
    }
  ]
};
