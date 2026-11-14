export const site = {
  name: 'Ankan Poddar',
  handle: 'ankan',
  url: 'https://ankan17.github.io',
  headline: 'Senior full-stack engineer building AI products.',
  now: 'I design systems that hold up at scale. At Avoca, I build AI voice and text agents. Before that, I spent five years at HyperVerge building VideoKYC and its data platform, and leading the team behind them.',
  description:
    'Ankan Poddar, senior full-stack engineer designing systems that scale. AI voice and text agents at Avoca; previously built and led VideoKYC at HyperVerge.',
  location: 'Bangalore, India',
  // Headshot for search engines (schema.org Person image). Metadata stripped.
  photo: '/ankan-poddar.jpg',
  email: 'apoddar1701@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ankan-poddar-86a6b6163',
  github: 'https://github.com/ankan17',
  // Set to the published PDF path (for example '/ankan-poddar-resume.pdf') once a
  // version without phone number and address is in /public. Until then the
  // résumé button points to the experience page.
  resumeUrl: null as string | null,
};

export const nav = [
  { key: 'home', n: 1, label: 'home', href: '/' },
  { key: 'work', n: 2, label: 'work', href: '/work/' },
  { key: 'experience', n: 3, label: 'experience', href: '/experience/' },
  { key: 'contact', n: 4, label: 'contact', href: '/contact/' },
] as const;

export type NavKey = (typeof nav)[number]['key'];
