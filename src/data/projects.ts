export interface Project {
  slug: string;
  dir: string;
  title: string;
  /** Short descriptor appended to the page title, e.g. "Studio, a desktop video editor". */
  kind: string;
  tagline: string;
  summary: string;
  /** Search snippet; keep under 155 characters. */
  description: string;
  languages: string[];
  figure: string;
  figureLabel: string;
  repo?: string;
  repoNote: string;
  stack: string;
  sections: { heading: string; body?: string; points?: string[] }[];
}

export const projects: Project[] = [
  {
    slug: 'studio',
    dir: 'studio/',
    title: 'Studio',
    kind: 'a desktop video editor',
    description:
      'Studio is a desktop video editor for macOS, built on Electron and Remotion to run on an 8GB Mac, with strict memory budgets and crash-safe saves.',
    languages: ['TypeScript'],
    tagline: 'A desktop video editor designed around your time and your machine’s limits',
    summary:
      'A video editor for macOS built on Remotion and Electron, designed from the start to run on a base 8GB Apple Silicon machine.',
    figureLabel: 'Studio memory budgets',
    figure: `editor    under 600 MB
total     under 1.2 GB
export    under 1.5 GB peak`,
    repo: 'https://github.com/ankan17/studio',
    repoNote: 'Source on GitHub',
    stack: 'TypeScript, Electron, React, Remotion, Zod, pnpm monorepo',
    sections: [
      {
        heading: 'What it does',
        body: 'Import footage, cut it on a timeline, add titles and transitions, and export an MP4. Version 0.7.0 is an unsigned build, with all seven planned milestones complete: desktop foundation, media import, preview, timeline, editing features, export, and reliability.',
      },
      {
        heading: 'How it is built',
        points: [
          'A pnpm monorepo: the Electron Forge and Vite app, plus separate packages for the project schema (Zod), the editing core and the project store.',
          'The editing core is pure TypeScript commands. Each command produces an inverse patch with immer, which gives 200 steps of undo and redo without coupling to the UI.',
          'Importing a clip creates a 720p proxy, so preview stays smooth while the original is kept for export.',
          'Export renders through the web renderer in a hidden window and writes an MP4.',
        ],
      },
      {
        heading: 'What I cared about',
        points: [
          'Memory as a budget, not an afterthought: the editor stays under 600 MB, the whole app under 1.2 GB, and an export peaks under 1.5 GB.',
          'Never losing a project. Saves are atomic and recovery snapshots are kept; a test kills the writer process 12 times and the project reopens every time.',
          'A small attack surface for a desktop app: a sandboxed renderer, typed IPC validated with Zod at the boundary, and a hardened media:// protocol.',
          'Each milestone is verified by driving the real app with Playwright over the Chrome DevTools Protocol.',
        ],
      },
    ],
  },
  {
    slug: 'agentreplay',
    dir: 'agentreplay/',
    title: 'AgentReplay',
    kind: 'replay debugging for LLM agents',
    description:
      'AgentReplay is a TypeScript library that records LLM agent runs, so failures can be replayed, forked and diffed without repeating side effects.',
    languages: ['TypeScript'],
    tagline: 'A TypeScript record/replay debugger for agent failures, without repeating side effects',
    summary:
      'A TypeScript library that records every model call and tool call an agent makes, so a failed run can be replayed exactly, forked with a fix, and compared, without repeating side effects like a refund.',
    figureLabel: 'AgentReplay replay modes',
    figure: `record  log every call
replay  all from the log
fork    model live,
        tools from log`,
    repo: 'https://github.com/ankan17/AgentReplay',
    repoNote: 'Source on GitHub',
    stack: 'TypeScript, Node 22, npm workspaces',
    sections: [
      {
        heading: 'What it does',
        body: 'Agents fail in the middle of a run, and re-running them is slow, non-deterministic and sometimes harmful. AgentReplay wraps the model and the tools, records each call, and lets you replay the run from the log. You can fork it with changed instructions and see the first point where the two runs diverge.',
      },
      {
        heading: 'How it is built',
        points: [
          'An SDK with wrapModel, wrapTool and startRun, plus a small CLI to list runs, show one, and diff two.',
          'A local dashboard with a timeline, a context-window inspector and a run diff, reading the same trace store.',
          'A demo support agent with a planted failure at step 5, where a refund goes wrong, used to test replay and fork end to end.',
          'The SDK and dashboard share only the trace store format, so the dashboard can later read from S3, Postgres or a hosted collector without SDK changes.',
        ],
      },
      {
        heading: 'What I cared about',
        points: [
          'Replay must never repeat a side effect. Write tools are blocked by default during replay, and can be stubbed or allowed explicitly.',
          'Calls are matched on span path, target, call number and request hash, ignoring timestamps and ids. A hash mismatch at the same key is the divergence.',
          'Divergence is an event, not just an error: strict replay throws, while fork records it and carries on live.',
          'Payloads are stored as exact bytes and matched on canonical hashes, because re-serialising a payload changes every request hash after it.',
        ],
      },
      {
        heading: 'Where it is',
        body: 'Early and run from source. Next on the list: a Vercel AI SDK adapter, streaming capture, forking at a chosen step, and redaction at record time.',
      },
    ],
  },
  {
    slug: 'clothtrends',
    dir: 'clothtrends/',
    title: 'ClothTrends',
    kind: 'shop inventory and billing',
    description:
      'ClothTrends is an inventory and billing app for shops: barcode point of sale, stock by supplier lot, and Bluetooth receipt and label printing.',
    languages: ['TypeScript', 'Kotlin'],
    tagline: 'An inventory and billing app for running a shop and making better decisions, on existing hardware',
    summary:
      'Inventory and billing for a cloth shop: point of sale at the counter, stock tracked by supplier lot, and labels and receipts printed over Bluetooth.',
    figureLabel: 'ClothTrends counter flow',
    figure: `scan -> bill -> print receipt
stock -> label -> print label`,
    repoNote: 'Source is private for now',
    stack: 'Next.js, Supabase (Postgres, Auth, RLS), Kotlin, Android WebView',
    sections: [
      {
        heading: 'What it does',
        body: 'A shop runs billing from a barcode scanner: scan an item, build the bill, print the receipt. Stock is tracked by supplier lot, labels are printed with CODE_128 barcodes, and past bills are searchable.',
      },
      {
        heading: 'How it is built',
        points: [
          'A Next.js progressive web app on Supabase: Postgres, Auth, and row level security for multi-tenancy.',
          'A Kotlin Android app wraps the web app in a WebView and bridges two Bluetooth thermal printers, one for receipts (ESC/POS) and one for labels (TSPL), plus the native camera scanner.',
          'An earlier Express and CouchDB backend came first and was replaced by the Supabase version.',
        ],
      },
      {
        heading: 'What I cared about',
        points: [
          'Software that works at a busy counter: scanning, billing and printing without friction.',
          'Isolation between shops enforced in the database through row level security, not only in application code.',
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
