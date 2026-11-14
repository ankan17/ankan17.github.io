// Build-time Open Graph images for project pages: a 1200x630 terminal card
// matching the site, rendered with satori (layout) and resvg (PNG).
import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { projects, type Project } from '../../data/projects';
import { site } from '../../data/site';

const require = createRequire(import.meta.url);
const font = (weight: 400 | 700) =>
  readFile(require.resolve(`@fontsource/atkinson-hyperlegible-mono/files/atkinson-hyperlegible-mono-latin-${weight}-normal.woff`));

const c = {
  ground: '#060c1f',
  chrome: '#0e1a3d',
  text: '#f4f6fb',
  soft: '#c9d3ec',
  garnet: '#a50044',
  blue: '#004d98',
  gold: '#edbb00',
};

// Minimal element helper so the tree reads without JSX.
type Node = { type: string; props: Record<string, unknown> };
const h = (style: Record<string, unknown>, ...children: (Node | string)[]): Node => ({
  type: 'div',
  props: { style: { display: 'flex', ...style }, children },
});

const card = (p: Project): Node =>
  h(
    { width: 1200, height: 630, flexDirection: 'column', background: c.ground, color: c.text, fontFamily: 'Atkinson Hyperlegible Mono Variable' },
    h(
      { height: 52, alignItems: 'center', gap: 14, padding: '0 28px', background: c.chrome },
      h({ width: 18, height: 18, borderRadius: 9, background: c.garnet }),
      h({ width: 18, height: 18, borderRadius: 9, background: c.gold }),
      h({ width: 18, height: 18, borderRadius: 9, background: c.blue }),
    ),
    h(
      { flex: 1, flexDirection: 'column', padding: '64px 80px 0' },
      h(
        { alignItems: 'center', fontSize: 30 },
        h({ padding: '6px 20px', background: c.garnet, fontWeight: 700 }, site.handle),
        h({ padding: '6px 20px', background: c.blue, fontWeight: 700 }, `~/work/${p.slug}`),
        h({ marginLeft: 20 }, 'cat README.md'),
      ),
      h({ marginTop: 44, fontSize: 92, fontWeight: 700, letterSpacing: -2 }, p.title),
      h({ marginTop: 18, fontSize: 36, lineHeight: 1.35, color: c.soft, maxWidth: 1000 }, p.tagline),
    ),
    h(
      { height: 56, alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', background: c.blue, fontSize: 26 },
      h({}, `${new URL(site.url).host}/work/${p.slug}`),
      h({}, site.name),
    ),
  );

export const getStaticPaths: GetStaticPaths = () => projects.map((project) => ({ params: { slug: project.slug }, props: { project } }));

export const GET: APIRoute = async ({ props }) => {
  const svg = await satori(card((props as { project: Project }).project) as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Atkinson Hyperlegible Mono Variable', data: await font(400), weight: 400, style: 'normal' },
      { name: 'Atkinson Hyperlegible Mono Variable', data: await font(700), weight: 700, style: 'normal' },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
