/* empty css                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, e as renderScript, u as unescapeHTML, m as maybeRenderHead } from '../chunks/astro/server_BujwWpIy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_NnFsh4ST.mjs';
import { D as DecryptedText } from '../chunks/DecryptedText_BN2liUxe.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Dossier = createComponent(async ($$result, $$props, $$slots) => {
  const casesData = await import('../chunks/cases_BNafHacD.mjs').then((m) => m.default);
  const title = "Dossier \u2014 1985007";
  const CASES = casesData.map((caseItem) => ({
    id: caseItem.id,
    slug: caseItem.slug,
    title: `${caseItem.id} \u2022 ${caseItem.title.split(": ")[1] || caseItem.title}`,
    date: new Date(caseItem.date).getFullYear().toString(),
    summary: caseItem.summary,
    tags: caseItem.tags,
    year: caseItem.year
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="dossier-main loading" data-swup-transition> <a class="back-btn" href="/" aria-label="Back to Home">\u2190 BACK</a> <section class="dossier-access" aria-labelledby="dossier-heading"> <div class="access-meta"> <h1 id="dossier-heading" class="uppercase">Accessing case-file: <span class="mono"> ', ' </span> </h1> <div class="access-panel" role="status" aria-live="polite" aria-atomic="true"> <div class="access-header"> <span class="access-badge">ACCESSING</span> <span class="access-title">CLASSIFIED FILES</span> </div> <div class="progress-wrap" aria-hidden="true"> <div class="progress-track"> <div class="progress-fill" id="decrypt-line"></div> </div> </div> <div class="loader-info small">Decrypting... <span id="decrypt-percent">0</span>%</div> </div> </div> </section> <div class="dossier-content" style="opacity: 0; pointer-events: none;"> <section class="dossier-main-content"> <h2 class="dossier-title">DOSSIER</h2> <nav class="timeline-nav" role="navigation" aria-label="Timeline filter"> <h3 class="sr-only">TIMELINE NAV BAR</h3> <div class="pills" role="tablist" aria-label="Filter timeline by decade"> <button class="pill" data-year="all" aria-pressed="true">All</button> <button class="pill" data-year="1985">1985</button> <button class="pill" data-year="1990s">1990s</button> <button class="pill" data-year="2001">2001</button> <button class="pill" data-year="2010s">2010s</button> <button class="pill" data-year="Present">Present</button> </div> </nav> <section class="timeline-entries" aria-label="Timeline entries"> <h3 class="section-title"> ', ' </h3> <div class="grid cases-grid" id="cases-grid" aria-live="polite" aria-busy="true"> <!-- Dynamic cards will be rendered here by client-side script. Skeletons are shown while data loads. --> </div> </section> </section> </div> </main>  <script>', "<\/script> ", " "])), maybeRenderHead(), renderComponent($$result2, "DecryptedText", DecryptedText, { "client:load": true, "text": "LIFE OF SHADE'S", "initialDisplay": "1985-007", "client:component-hydration": "load", "client:component-path": "D:/VC/STORY-BOOK/src/components/DecryptedText.jsx", "client:component-export": "default" }), renderComponent($$result2, "DecryptedText", DecryptedText, { "client:load": true, "text": "Case-Study Chapters", "initialDisplay": "TIMELINE ENTRIES", "client:component-hydration": "load", "client:component-path": "D:/VC/STORY-BOOK/src/components/DecryptedText.jsx", "client:component-export": "default" }), unescapeHTML(`window.__CASES = ${JSON.stringify(CASES)};`), renderScript($$result2, "D:/VC/STORY-BOOK/src/pages/dossier.astro?astro&type=script&index=0&lang.ts")) })}`;
}, "D:/VC/STORY-BOOK/src/pages/dossier.astro", void 0);

const $$file = "D:/VC/STORY-BOOK/src/pages/dossier.astro";
const $$url = "/dossier";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dossier,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
