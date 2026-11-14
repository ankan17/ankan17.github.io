export interface Role {
  title: string;
  period: string;
  points: string[];
}

export interface Employer {
  company: string;
  place: string;
  roles: Role[];
}

export const experience: Employer[] = [
  {
    company: 'Avoca',
    place: 'Remote',
    roles: [
      {
        title: 'Deployed Engineer',
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
    roles: [
      {
        title: 'Engineering Manager',
        period: 'Apr to Jul 2026',
        points: [
          'Led a team of 5 and halved lead time to production.',
          'Built a cloud-agnostic VideoKYC architecture for bring-your-own-cloud deployments.',
        ],
      },
      {
        title: 'SDE3',
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
        period: 'Jan 2022 to Mar 2024',
        points: [
          'Scaled the VideoKYC system from 1K to 100K+ users a day using WebSockets.',
          'Migrated the VideoKYC platform to SDK-based integration.',
          'Built the RudderStack event architecture and an in-house ETL platform handling 100M+ events a day.',
        ],
      },
      {
        title: 'SDE1',
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

export const skills = [
  { name: 'languages', items: 'TypeScript, JavaScript, Python, SQL' },
  { name: 'backend', items: 'Node.js (Express, NestJS), WebSockets, event-driven systems' },
  { name: 'data', items: 'PostgreSQL, MongoDB, Redis, Elasticsearch, DynamoDB' },
  { name: 'cloud', items: 'AWS' },
  { name: 'frontend', items: 'React, Next.js' },
  { name: 'ai', items: 'OpenAI APIs, voice AI, tool calling, agentic workflows, LLM evaluation' },
];
