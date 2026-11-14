export interface Role {
  title: string;
  lead: string;
  period: string;
  points: string[];
}

export interface Employer {
  company: string;
  place: string;
  span: string;
  roles: Role[];
}

export const experience: Employer[] = [
  {
    company: 'Avoca',
    place: 'Remote',
    span: 'Aug 2026 to present',
    roles: [
      {
        title: 'Deployed Engineer',
        lead: 'Hardening production AI voice and text agents.',
        period: 'Aug 2026 to present',
        points: [
          'Build integrations for production AI voice and text agents: an API-based integration for home services and a browser automation for restoration workflows.',
          'Design agent workflows to be idempotent and recoverable, hardened against race conditions, duplicate execution, partial API failures and browser-automation failures.',
        ],
      },
    ],
  },
  {
    company: 'HyperVerge',
    place: 'Bangalore',
    span: 'Jan 2021 to Jul 2026',
    roles: [
      {
        title: 'Engineering Manager',
        lead: 'Led a team of 5 and halved lead time to production.',
        period: 'Apr to Jul 2026',
        points: [
          'Led a team of 5 and halved lead time to production.',
          'Built a cloud-agnostic VideoKYC architecture for bring-your-own-cloud deployments.',
        ],
      },
      {
        title: 'SDE3',
        lead: 'LLM support automation, security audits and quieter alerts.',
        period: 'Apr 2024 to Mar 2026',
        points: [
          'Built an LLM support-automation system with Freshdesk that cut mean time to resolution by 30 to 40%.',
          'Moved alerting to alerts as code, taking noisy alerts from 70% to 10%.',
          'Completed 10+ security audits, including RBI and ISO 27018.',
          'Built an archival pipeline on Step Functions, Lambda and DynamoDB that brought Redshift CPU from over 90% to 50 to 60%.',
        ],
      },
      {
        title: 'SDE2',
        lead: 'Scaled VideoKYC from 1K to 100K+ users a day.',
        period: 'Jan 2022 to Mar 2024',
        points: [
          'Scaled the VideoKYC system from 1K to 100K+ users a day using WebSockets.',
          'Migrated the VideoKYC platform to SDK-based integration.',
          'Built the RudderStack event architecture and an in-house ETL platform handling 100M+ events a day.',
        ],
      },
      {
        title: 'SDE1',
        lead: 'Conversion above 90%, infrastructure cost cut by half.',
        period: 'Jan to Dec 2021',
        points: [
          'Raised conversion from under 70% to over 90%.',
          'Cut infrastructure cost by more than 50%.',
        ],
      },
    ],
  },
];

export const education = {
  degree: 'B.Tech, Computer Science and Engineering',
  school: 'NIT Durgapur',
  period: '2016 to 2020',
  note: 'CGPA 9.3',
};

export const achievements = [
  'GATE CSE 2020, All India Rank 20.',
  'Google Summer of Code 2018 with UC Santa Cruz (CROSS), working on the Popper CLI. 30 merged pull requests.',
];

// `core` marks the tools used day to day; they render filled.
export const skills: { name: string; items: string[]; core?: string[] }[] = [
  { name: 'languages', items: ['TypeScript', 'JavaScript', 'Python', 'SQL'], core: ['TypeScript'] },
  { name: 'backend', items: ['Node.js', 'Express', 'NestJS', 'WebSockets', 'event-driven systems'], core: ['Node.js'] },
  { name: 'data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB'], core: ['PostgreSQL'] },
  { name: 'cloud', items: ['AWS'], core: ['AWS'] },
  { name: 'frontend', items: ['React', 'Next.js'] },
  { name: 'ai', items: ['OpenAI APIs', 'voice AI', 'tool calling', 'agentic workflows', 'LLM evaluation'], core: ['agentic workflows'] },
];

export const stats = [
  { value: '100K+', label: 'users a day on the VideoKYC system I scaled' },
  { value: '100M+', label: 'events a day through an in-house ETL platform' },
  { value: '30-40%', label: 'lower mean time to resolution with LLM support automation' },
  { value: '10+', label: 'security audits, including RBI and ISO 27018' },
];
