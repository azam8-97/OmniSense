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
    title: 'Starter Street Kit',
    price: 'Rs. 40,000',
    details: '1 Central Node + 4 Household Nodes',
    useCase: 'Small streets'
  },
  {
    title: 'Standard Street Kit',
    price: 'Rs. 65,000',
    details: '1 Central Node + 8 Household Nodes',
    useCase: 'Medium streets',
    highlighted: true
  },
  {
    title: 'Community Kit',
    price: 'Rs. 120,000',
    details: '2 Central Nodes + 15 Household Nodes',
    useCase: 'Large communities / societies'
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
