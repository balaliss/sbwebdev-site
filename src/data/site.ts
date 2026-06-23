export const site = {
  name: 'Steven Balalis',
  title: 'Steven Balalis — Technical Leader',
  tagline: 'Engineering leadership · AI systems · data platforms · hands-on builder',
  email: 'Steven.Balalis@gmail.com',
  location: 'Lansdale, PA',
  linkedin: 'https://linkedin.com/in/stevenbalalis',
  github: 'https://github.com/balaliss',
  careerOps: 'https://github.com/balaliss/career-ops',
  substack: 'https://stevenbalalis.substack.com',
  url: 'https://sbwebdev.net',
} as const;

export const certs = [
  'Professional Scrum Product Owner I (PSPO I)',
  'Lean Six Sigma Black Belt',
  'AWS Cloud Practitioner',
  'Salesforce AI Associate',
  'AWS Certified AI Practitioner (in progress)',
] as const;

export const caseStudies = [
  {
    slug: 'network-funnel',
    title: 'Network Funnel',
    company: 'Personal project',
    meta: 'Built job-search analytics tool',
    metric: 'Outreach → interview funnel analytics',
    excerpt:
      'Scoped, built, and shipped networking conversion analytics to complement application trackers — funnel stages from outreach through interview.',
    href: '/work/network-funnel',
    external: null,
  },
  {
    slug: 'transcarent',
    title: 'Data Integration Portfolio',
    company: 'Transcarent',
    meta: 'Led integration platform delivery',
    metric: '20+ programs · 30+ partners',
    excerpt:
      'Led delivery for a healthcare data integration portfolio — SLO/SLA governance, observability, and a P0 warehouse migration.',
    href: '/work/transcarent',
    external: null,
  },
  {
    slug: 'persevere',
    title: 'B2B Platform Operations',
    company: 'Persevere Now',
    meta: 'Led 14-person platform team',
    metric: '14 direct reports · A/B onboarding',
    excerpt:
      'Led platform roadmap, Scrum backlog, and a 14-person team for a B2B SaaS platform — including A/B tests that reduced onboarding drop-off.',
    href: '/work/persevere',
    external: null,
  },
] as const;

export const howIWork = [
  {
    title: 'Set technical direction',
    body: 'Align the team on the system problem, reliability targets, and what shipped means before committing engineering time.',
  },
  {
    title: 'Make systems visible',
    body: 'Dashboards, intake standards, and delivery cadence so engineering, analytics, and leadership share one picture of platform health.',
  },
  {
    title: 'Ship in slices',
    body: 'Phased plans for migrations and integrations — dependencies tracked, scope bounded, outcomes measured each sprint.',
  },
  {
    title: 'Stay in the build loop',
    body: 'LLMs in requirements drafts, triage notes, and status reporting — hands-on AI literacy, not slide-deck strategy.',
  },
] as const;
