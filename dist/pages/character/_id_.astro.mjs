/* empty css                                 */
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BujwWpIy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_NnFsh4ST.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const charactersData = await import('../../chunks/characters_B_tH4eAG.mjs').then((m) => m.default);
  return charactersData.map((character) => ({
    params: { id: character.id },
    props: { character }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { character } = Astro2.props;
  const title = `${character.name} - Shadow Protocol`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-2kmvazza": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main-content" class="character-detail min-h-screen" data-astro-cid-2kmvazza> <a class="back-btn" href="/" aria-label="Back to Home" data-astro-cid-2kmvazza>← BACK</a> <div class="character-content max-w-4xl mx-auto p-8 pt-20" data-astro-cid-2kmvazza> <div class="character-header text-center mb-12" data-astro-cid-2kmvazza> <div class="character-ascii font-mono text-yellow-400 mb-6" data-astro-cid-2kmvazza> <div class="text-6xl leading-tight" data-astro-cid-2kmvazza> ${character.face.map((line) => renderTemplate`<div data-astro-cid-2kmvazza>${line}</div>`)} </div> </div> <h1 class="text-4xl font-bold text-yellow-400 mb-4" data-astro-cid-2kmvazza>${character.name}</h1> <p class="text-xl text-gray-300 mb-8" data-astro-cid-2kmvazza>${character.role}</p> </div> <div class="character-info grid md:grid-cols-2 gap-8" data-astro-cid-2kmvazza> <div class="character-bio" data-astro-cid-2kmvazza> <h2 class="text-2xl font-bold text-yellow-400 mb-4" data-astro-cid-2kmvazza>Profile</h2> <div class="space-y-4 text-gray-300" data-astro-cid-2kmvazza> <p data-astro-cid-2kmvazza> ${/* Parse any [[...]] segments in the bio and render them as redacted spans */
  (() => {
    const bio = character.profile?.bio || "";
    if (!bio) return "";
    const regex = /\[\[(.+?)\]\]/g;
    const nodes = [];
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(bio)) !== null) {
      const index = match.index;
      if (index > lastIndex) {
        nodes.push(renderTemplate`<span data-astro-cid-2kmvazza>${bio.slice(lastIndex, index)}</span>`);
      }
      nodes.push(
        renderTemplate`<span class="redacted-text" tabindex="0" title="Redacted" data-astro-cid-2kmvazza>${match[1]}</span>`
      );
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < bio.length) {
      nodes.push(renderTemplate`<span data-astro-cid-2kmvazza>${bio.slice(lastIndex)}</span>`);
    }
    return nodes.length ? nodes : bio;
  })()} </p> </div> <h3 class="text-xl font-bold text-yellow-400 mt-8 mb-4" data-astro-cid-2kmvazza>Specialties</h3> <ul class="text-gray-300 space-y-2" data-astro-cid-2kmvazza> ${character.profile.specialties.map((specialty) => renderTemplate`<li data-astro-cid-2kmvazza>• ${specialty}</li>`)} </ul> </div> <div class="character-stats" data-astro-cid-2kmvazza> <h2 class="text-2xl font-bold text-yellow-400 mb-4" data-astro-cid-2kmvazza>Key Metrics</h2> <div class="stats-grid space-y-4" data-astro-cid-2kmvazza> <div class="stat-item border border-yellow-400/20 p-4" data-astro-cid-2kmvazza> <div class="stat-label text-gray-400 text-sm" data-astro-cid-2kmvazza>Years Active</div> <div class="stat-value text-yellow-400 text-2xl font-mono" data-astro-cid-2kmvazza>${character.profile.years}</div> </div> <div class="stat-item border border-yellow-400/20 p-4" data-astro-cid-2kmvazza> <div class="stat-label text-gray-400 text-sm" data-astro-cid-2kmvazza>Operations Led</div> <div class="stat-value text-yellow-400 text-2xl font-mono" data-astro-cid-2kmvazza>${character.profile.operations}</div> </div> <div class="stat-item border border-yellow-400/20 p-4" data-astro-cid-2kmvazza> <div class="stat-label text-gray-400 text-sm" data-astro-cid-2kmvazza>Countries Operated</div> <div class="stat-value text-yellow-400 text-2xl font-mono" data-astro-cid-2kmvazza>${character.profile.countries}</div> </div> <div class="stat-item border border-yellow-400/20 p-4" data-astro-cid-2kmvazza> <div class="stat-label text-gray-400 text-sm" data-astro-cid-2kmvazza>Classification</div> <div class="stat-value text-yellow-400 text-lg font-mono" data-astro-cid-2kmvazza>${(() => {
    const text = character.profile?.classification || "";
    if (!text) return "";
    const regex = /\[\[(.+?)\]\]/g;
    const nodes = [];
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const index = match.index;
      if (index > lastIndex) nodes.push(renderTemplate`<span data-astro-cid-2kmvazza>${text.slice(lastIndex, index)}</span>`);
      nodes.push(renderTemplate`<span class="redacted-text" tabindex="0" title="Redacted" data-astro-cid-2kmvazza>${match[1]}</span>`);
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) nodes.push(renderTemplate`<span data-astro-cid-2kmvazza>${text.slice(lastIndex)}</span>`);
    return nodes.length ? nodes : text;
  })()}</div> </div> </div> </div> </div> <div class="character-timeline mt-12" data-astro-cid-2kmvazza> <h2 class="text-2xl font-bold text-yellow-400 mb-6" data-astro-cid-2kmvazza>Key Operations</h2> <div class="timeline-items space-y-6" data-astro-cid-2kmvazza> ${character.profile.timeline.map((item) => renderTemplate`<div class="timeline-item border-l-2 border-yellow-400/30 pl-6" data-astro-cid-2kmvazza> <div class="timeline-year text-yellow-400 font-mono" data-astro-cid-2kmvazza>${item.year}</div> <div class="timeline-title text-white font-bold" data-astro-cid-2kmvazza>${item.title}</div> <div class="timeline-desc text-gray-300" data-astro-cid-2kmvazza>${(() => {
    const text = item?.desc || "";
    if (!text) return "";
    const regex = /\[\[(.+?)\]\]/g;
    const nodes = [];
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(text)) !== null) {
      const index = match.index;
      if (index > lastIndex) nodes.push(renderTemplate`<span data-astro-cid-2kmvazza>${text.slice(lastIndex, index)}</span>`);
      nodes.push(renderTemplate`<span class="redacted-text" tabindex="0" title="Redacted" data-astro-cid-2kmvazza>${match[1]}</span>`);
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) nodes.push(renderTemplate`<span data-astro-cid-2kmvazza>${text.slice(lastIndex)}</span>`);
    return nodes.length ? nodes : text;
  })()}</div> </div>`)} </div> </div> </div> </main> ` })} `;
}, "D:/VC/STORY-BOOK/src/pages/character/[id].astro", void 0);

const $$file = "D:/VC/STORY-BOOK/src/pages/character/[id].astro";
const $$url = "/character/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
