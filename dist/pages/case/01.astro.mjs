/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BujwWpIy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_NnFsh4ST.mjs';
/* empty css                                 */
export { renderers } from '../../renderers.mjs';

const $$01 = createComponent(async ($$result, $$props, $$slots) => {
  const casesData = await import('../../chunks/cases_BNafHacD.mjs').then((m) => m.default);
  const caseData = casesData.find((c) => c.id === "01");
  if (!caseData) {
    throw new Error("Case 01 not found");
  }
  const title = `${caseData.title} - Shadow Protocol`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-wdtmsp22": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main-content" class="case-detail min-h-screen" data-astro-cid-wdtmsp22> <a class="back-btn" href="/dossier" aria-label="Back to Dossier" data-astro-cid-wdtmsp22>← BACK TO DOSSIER</a> <div class="case-content max-w-4xl mx-auto p-8 pt-20" data-astro-cid-wdtmsp22> <div class="case-header text-center mb-12" data-astro-cid-wdtmsp22> <div class="case-number text-yellow-400 font-mono text-lg mb-2" data-astro-cid-wdtmsp22>CASE FILE #${caseData.id}</div> <h1 class="text-4xl font-bold text-yellow-400 mb-4" data-astro-cid-wdtmsp22>${caseData.title.split(": ")[1] || caseData.title}</h1> <p class="text-xl text-gray-300 mb-2" data-astro-cid-wdtmsp22>Date: ${new Date(caseData.date).toLocaleDateString()}</p> <p class="text-gray-400 italic" data-astro-cid-wdtmsp22>"${caseData.content.quote}"</p> </div> <div class="case-classification bg-red-900/20 border border-red-400/30 p-4 mb-8 text-center" data-astro-cid-wdtmsp22> <div class="text-red-400 font-mono text-sm" data-astro-cid-wdtmsp22>CLASSIFICATION: TOP SECRET</div> <div class="text-red-300 text-xs mt-1" data-astro-cid-wdtmsp22>ACCESS LEVEL: SHADOW PROTOCOL PERSONNEL ONLY</div> </div> <div class="case-sections space-y-12" data-astro-cid-wdtmsp22> <section class="case-summary" data-astro-cid-wdtmsp22> <h2 class="text-2xl font-bold text-yellow-400 mb-6" data-astro-cid-wdtmsp22>Mission Summary</h2> <div class="text-gray-300 space-y-4" data-astro-cid-wdtmsp22> ${caseData.content.missionSummary.map((paragraph) => renderTemplate`<p data-astro-cid-wdtmsp22>${paragraph}</p>`)} </div> </section> <section class="case-evidence" data-astro-cid-wdtmsp22> <h2 class="text-2xl font-bold text-yellow-400 mb-6" data-astro-cid-wdtmsp22>Key Evidence</h2> <div class="evidence-grid grid md:grid-cols-2 gap-6" data-astro-cid-wdtmsp22> ${caseData.content.evidence.map((evidence) => renderTemplate`<div class="evidence-item bg-yellow-400/5 border border-yellow-400/20 p-4" data-astro-cid-wdtmsp22> <h3 class="text-yellow-400 font-bold mb-2" data-astro-cid-wdtmsp22>${evidence.title}</h3> <p class="text-gray-300 text-sm" data-astro-cid-wdtmsp22>${evidence.description}</p> <div class="evidence-tags mt-2" data-astro-cid-wdtmsp22> ${evidence.tags.map((tag) => renderTemplate`<span class="text-xs bg-yellow-400/10 px-2 py-1 rounded mr-2" data-astro-cid-wdtmsp22>${tag}</span>`)} </div> </div>`)} </div> </section> <section class="case-outcome" data-astro-cid-wdtmsp22> <h2 class="text-2xl font-bold text-yellow-400 mb-6" data-astro-cid-wdtmsp22>Mission Outcome</h2> <div class="outcome-status bg-green-900/20 border border-green-400/30 p-6 mb-6" data-astro-cid-wdtmsp22> <div class="text-green-400 font-bold text-lg" data-astro-cid-wdtmsp22>STATUS: ${caseData.content.outcome.status}</div> <div class="text-green-300 mt-2" data-astro-cid-wdtmsp22>${caseData.content.outcome.statusDescription}</div> </div> <div class="text-gray-300 space-y-4" data-astro-cid-wdtmsp22> ${caseData.content.outcome.details.map((detail) => renderTemplate`<p data-astro-cid-wdtmsp22>${detail}</p>`)} </div> </section> <section class="case-connections" data-astro-cid-wdtmsp22> <h2 class="text-2xl font-bold text-yellow-400 mb-6" data-astro-cid-wdtmsp22>Connected Cases</h2> <div class="connections-grid grid md:grid-cols-3 gap-4" data-astro-cid-wdtmsp22> ${caseData.content.connections.map((connection) => renderTemplate`<a${addAttribute(`/case/${connection.caseId}`, "href")} class="connection-card bg-gray-900/50 border border-yellow-400/20 p-4 hover:border-yellow-400/50 transition-all" data-astro-cid-wdtmsp22> <div class="text-yellow-400 text-sm font-mono" data-astro-cid-wdtmsp22>CASE #${connection.caseId}</div> <div class="text-white font-bold" data-astro-cid-wdtmsp22>${connection.title}</div> <div class="text-gray-400 text-xs mt-1" data-astro-cid-wdtmsp22>→ ${connection.connection}</div> </a>`)} </div> </section> </div> </div> </main> ` })} `;
}, "D:/VC/STORY-BOOK/src/pages/case/01.astro", void 0);

const $$file = "D:/VC/STORY-BOOK/src/pages/case/01.astro";
const $$url = "/case/01";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$01,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
