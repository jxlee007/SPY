/* empty css                                 */
import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BujwWpIy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_NnFsh4ST.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const casesData = await import('../../chunks/cases_BNafHacD.mjs').then((m) => m.default);
  return casesData.map((caseItem) => ({
    params: { id: caseItem.id },
    props: { caseData: caseItem }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { caseData } = Astro2.props;
  const title = `${caseData.title} - Shadow Protocol`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "data-astro-cid-2axr4lkg": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main id="main-content" class="case-detail min-h-screen" data-astro-cid-2axr4lkg> <a class="back-btn" href="/dossier" aria-label="Back to Dossier" data-astro-cid-2axr4lkg>← BACK TO DOSSIER</a> <div class="case-content max-w-4xl mx-auto p-8 pt-20" data-astro-cid-2axr4lkg> <div class="case-header text-center mb-12" data-astro-cid-2axr4lkg> <div class="case-number text-yellow-400 font-mono text-lg mb-2" data-astro-cid-2axr4lkg>CASE FILE #${caseData.id}</div> <h1 class="text-4xl font-bold text-yellow-400 mb-4" data-astro-cid-2axr4lkg>${caseData.title.split(": ")[1] || caseData.title}</h1> <p class="text-xl text-gray-300 mb-2" data-astro-cid-2axr4lkg>Date: ${new Date(caseData.date).toLocaleDateString()}</p> <p class="text-gray-400 italic" data-astro-cid-2axr4lkg>"${caseData.content.quote}"</p> </div> <div class="case-classification bg-red-900/20 border border-red-400/30 p-4 mb-8 text-center" data-astro-cid-2axr4lkg> <div class="text-red-400 font-mono text-sm" data-astro-cid-2axr4lkg>CLASSIFICATION: TOP SECRET</div> <div class="text-red-300 text-xs mt-1" data-astro-cid-2axr4lkg>ACCESS LEVEL: SHADOW PROTOCOL PERSONNEL ONLY</div> </div> <div class="case-sections space-y-12" data-astro-cid-2axr4lkg> <section class="case-summary" data-astro-cid-2axr4lkg> <h2 class="text-2xl font-bold text-yellow-400 mb-6" data-astro-cid-2axr4lkg>Mission Summary</h2> <div class="text-gray-300 space-y-4" data-astro-cid-2axr4lkg> ${caseData.content.missionSummary.map((paragraph) => renderTemplate`<p data-astro-cid-2axr4lkg>${paragraph}</p>`)} </div> </section> <section class="case-evidence" data-astro-cid-2axr4lkg> <h2 class="text-2xl font-bold text-yellow-400 mb-6" data-astro-cid-2axr4lkg>Key Evidence</h2> <div class="evidence-grid grid md:grid-cols-2 gap-6" data-astro-cid-2axr4lkg> ${caseData.content.evidence.map((evidence) => renderTemplate`<div class="evidence-item bg-yellow-400/5 border border-yellow-400/20 p-4" data-astro-cid-2axr4lkg> <h3 class="text-yellow-400 font-bold mb-2" data-astro-cid-2axr4lkg>${evidence.title}</h3> <p class="text-gray-300 text-sm" data-astro-cid-2axr4lkg>${evidence.description}</p> <div class="evidence-tags mt-2" data-astro-cid-2axr4lkg> ${evidence.tags.map((tag) => renderTemplate`<span class="text-xs bg-yellow-400/10 px-2 py-1 rounded mr-2" data-astro-cid-2axr4lkg>${tag}</span>`)} </div> </div>`)} </div> </section> <section class="case-outcome" data-astro-cid-2axr4lkg> <h2 class="text-2xl font-bold text-yellow-400 mb-6" data-astro-cid-2axr4lkg>Mission Outcome</h2> <div class="outcome-status bg-green-900/20 border border-green-400/30 p-6 mb-6" data-astro-cid-2axr4lkg> <div class="text-green-400 font-bold text-lg" data-astro-cid-2axr4lkg>STATUS: ${caseData.content.outcome.status}</div> <div class="text-green-300 mt-2" data-astro-cid-2axr4lkg>${caseData.content.outcome.statusDescription}</div> </div> <div class="text-gray-300 space-y-4" data-astro-cid-2axr4lkg> ${caseData.content.outcome.details.map((detail) => renderTemplate`<p data-astro-cid-2axr4lkg>${detail}</p>`)} </div> </section> <section class="case-connections" data-astro-cid-2axr4lkg> <h2 class="text-2xl font-bold text-yellow-400 mb-6" data-astro-cid-2axr4lkg>Connected Cases</h2> <div class="connections-grid grid md:grid-cols-3 gap-4" data-astro-cid-2axr4lkg> ${caseData.content.connections.map((connection) => renderTemplate`<a${addAttribute(`/case/${connection.caseId}`, "href")} class="connection-card bg-gray-900/50 border border-yellow-400/20 p-4 hover:border-yellow-400/50 transition-all" data-astro-cid-2axr4lkg> <div class="text-yellow-400 text-sm font-mono" data-astro-cid-2axr4lkg>CASE #${connection.caseId}</div> <div class="text-white font-bold" data-astro-cid-2axr4lkg>${connection.title}</div> <div class="text-gray-400 text-xs mt-1" data-astro-cid-2axr4lkg>→ ${connection.connection}</div> </a>`)} </div> </section> </div> </div> </main> ` })} `;
}, "D:/VC/STORY-BOOK/src/pages/case/[id].astro", void 0);

const $$file = "D:/VC/STORY-BOOK/src/pages/case/[id].astro";
const $$url = "/case/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
