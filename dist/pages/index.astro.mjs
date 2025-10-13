/* empty css                              */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BujwWpIy.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_NnFsh4ST.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import charactersData from '../chunks/characters_B_tH4eAG.mjs';
/* empty css                                 */
import { CCarousel, CCarouselItem } from '@coreui/react';
import { D as DecryptedText } from '../chunks/DecryptedText_BN2liUxe.mjs';
export { renderers } from '../renderers.mjs';

function ParallaxZoom() {
  try {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.6], [0.2, 1.3]);
    return /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "parallax-zoom fixed top-0 h-screen w-full flex items-center justify-center -z-10",
        style: { scale },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-full h-full bg-center bg-cover opacity-90",
            style: {
              backgroundImage: 'url("/images/c6138875-a9c0-4dab-a7f1-66a261c7671e.png")'
            }
          }
        )
      }
    );
  } catch (e) {
    return /* @__PURE__ */ jsx("div", { className: "parallax-zoom fixed top-0 h-screen w-full flex items-center justify-center -z-10", children: /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-full h-full bg-center bg-cover opacity-90",
        style: {
          backgroundImage: 'url("/images/c6138875-a9c0-4dab-a7f1-66a261c7671e.png")'
        }
      }
    ) });
  }
}

const characters = charactersData.map((char) => ({
  id: char.id,
  name: char.name,
  role: char.role.split("•")[0].trim(),
  // Get just the first part before bullet
  icon: char.icon,
  face: char.face
}));
function CharactersModal({ open: controlledOpen, onClose } = {}) {
  const [open, setOpen] = useState(() => controlledOpen !== void 0 ? controlledOpen : false);
  useEffect(() => {
    if (controlledOpen !== void 0) {
      setOpen(controlledOpen);
    }
  }, [controlledOpen]);
  useEffect(() => {
    function handleOpen() {
      setOpen(true);
    }
    function handleClose() {
      setOpen(false);
    }
    try {
      window.openCharactersModal = () => setOpen(true);
      window.closeCharactersModal = () => setOpen(false);
      window.addEventListener("open-characters-modal", handleOpen);
      window.addEventListener("close-characters-modal", handleClose);
      const handleEscape = (e) => {
        if (e.key === "Escape") handleClose();
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        delete window.openCharactersModal;
        delete window.closeCharactersModal;
        window.removeEventListener("open-characters-modal", handleOpen);
        window.removeEventListener("close-characters-modal", handleClose);
        document.removeEventListener("keydown", handleEscape);
      };
    } catch (e) {
    }
  }, []);
  if (!open) return null;
  const handleCharacterClick = (character) => {
    const targetPage = `/character/${character.id}`;
    setOpen(false);
    if (typeof onClose === "function") onClose();
    setTimeout(() => {
      window.location.href = targetPage;
    }, 200);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm",
      onClick: () => {
        setOpen(false);
        if (typeof onClose === "function") onClose();
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "bg-gray-900/95 p-8 rounded-lg max-w-4xl w-full mx-4 border border-yellow-400/30 shadow-2xl",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-8", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-yellow-400 tracking-wider", children: "CHARACTERS" }),
              /* @__PURE__ */ jsx(
                "button",
                {
                  className: "text-gray-400 hover:text-white text-2xl leading-none",
                  onClick: () => {
                    setOpen(false);
                    if (typeof onClose === "function") onClose();
                  },
                  "aria-label": "Close characters modal",
                  children: "×"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: characters.map((character) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "character-card bg-black/50 border border-yellow-400/20 p-6 text-center hover:border-yellow-400/60 hover:bg-yellow-400/5 transition-all duration-300 cursor-pointer group",
                onClick: () => handleCharacterClick(character),
                children: [
                  /* @__PURE__ */ jsx("div", { className: "font-mono text-sm text-yellow-400 mb-4 whitespace-pre-line leading-tight", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: character.face.map((line, index) => /* @__PURE__ */ jsx("div", { children: line }, index)) }) }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white group-hover:text-yellow-400 transition-colors", children: character.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-400 group-hover:text-gray-300 transition-colors", children: character.role })
                  ] })
                ]
              },
              character.id
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 text-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Click a character to view their detailed profile" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-xs mt-1", children: "→ swup transition to the right with back button" })
            ] })
          ]
        }
      )
    }
  );
}

const filmsData = [
	{
		id: "01",
		number: "01",
		title: "SHADOW PROTOCOL: LOREM INITIATION",
		tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		image: "/images/film-01.jpg",
		year: "2020"
	},
	{
		id: "02",
		number: "02",
		title: "SHADOW PROTOCOL: IPSUM DRIFT",
		tagline: "Nullam euismod lorem vitae risus tincidunt, sit amet vestibulum nisi.",
		image: "/images/film-02.jpg",
		year: "2020"
	},
	{
		id: "03",
		number: "03",
		title: "SHADOW PROTOCOL: DOLOR WALL",
		tagline: "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
		image: "/images/film-03.jpg",
		year: "2021"
	},
	{
		id: "04",
		number: "04",
		title: "SHADOW PROTOCOL: CONSECTETUR RULES",
		tagline: "Duis aute irure dolor in reprehenderit in voluptate velit.",
		image: "/images/film-04.jpg",
		year: "2021"
	},
	{
		id: "05",
		number: "05",
		title: "SHADOW PROTOCOL: ADIPISCING FOG",
		tagline: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
		image: "/images/film-05.jpg",
		year: "2022"
	},
	{
		id: "06",
		number: "06",
		title: "SHADOW PROTOCOL: ELIT GOLD",
		tagline: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut.",
		image: "/images/film-06.jpg",
		year: "2022"
	},
	{
		id: "07",
		number: "07",
		title: "SHADOW PROTOCOL: VESTIBULUM BURNS",
		tagline: "Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
		image: "/images/film-07.jpg",
		year: "2023"
	},
	{
		id: "08",
		number: "08",
		title: "SHADOW PROTOCOL: FINAL CONSEQUAT",
		tagline: "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
		image: "/images/film-08.jpg",
		year: "2023"
	}
];

function FilmsCarousel() {
  const films = filmsData;
  React.useEffect(() => {
    console.log("FilmsCarousel mounted");
  }, []);
  return /* @__PURE__ */ jsx("div", { className: " md:w-1/2 max-w-5xl mx-auto border-2 border-red-500/40 p-4 rounded", children: /* @__PURE__ */ jsx(CCarousel, { controls: true, indicators: true, className: "w-full", children: films.map((film) => /* @__PURE__ */ jsx(CCarouselItem, { children: /* @__PURE__ */ jsxs("div", { className: "p-6 bg-gray-900 rounded-xl min-h-96 flex flex-col items-center justify-end", children: [
    /* @__PURE__ */ jsx("div", { className: "text-yellow-400 text-sm font-mono mb-2", children: film.number }),
    /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold mb-3 text-white", children: film.title }),
    /* @__PURE__ */ jsxs("p", { className: "text-gray-400 text-sm italic", children: [
      '"',
      film.tagline,
      '"'
    ] })
  ] }) }, film.number)) }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "SHADOW OF SHADES - A Spy Thriller Series";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative min-h-screen overflow-x-hidden"> <!-- Background parallax zoom --> ${renderComponent($$result2, "ParallaxZoom", ParallaxZoom, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/VC/STORY-BOOK/src/components/ParallaxZoom.jsx", "client:component-export": "default" })} <!-- Main hero section --> <section class="hero-section relative z-10 min-h-screen"> <!-- Top header with title that disappears on scroll --> <header class="fixed top-0 left-0 right-0 z-20 transition-opacity duration-500"> <div class="max-w-4xl mx-auto p-6 text-center font-mono"> <h1 class="text-4xl md:text-6xl font-bold text-yellow-400/90 tracking-wider">
MAN IN ACTION
</h1> </div> </header> <!-- Vertical navigation buttons --> <div class="fixed left-4 top-1/2 transform -translate-y-1/2 z-30"> <a href="/dossier" class="vertical-btn vertical-btn-left" aria-label="Open timeline" data-swup-transition="slide-left"> <span class="vertical-text">DOSSIER</span> </a> </div> <div class="fixed right-4 top-1/2 transform -translate-y-1/2 z-30"> <button class="vertical-btn vertical-btn-right" aria-label="Open characters" onclick="window.dispatchEvent(new Event('open-characters-modal'))"> <span class="vertical-text">CHARACTERS</span> </button> </div> <!-- Scroll hint --> <div class="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"> <div class="text-white/60 text-sm">
⬇ scroll down
</div> </div> </section> <!-- Second hero section with story content --> <section class="relative z-10 min-h-screen bg-gradient-to-b from-transparent via-black/80 to-black"> <div class="max-w-6xl mx-auto px-6 py-20"> <!-- Title and tagline --> <div class="text-center mb-16"> <p class="text-xl md:text-2xl text-gray-300 mb-8">
One Global Myth. No One Able To Bust.
</p> </div> <!-- Story Overview --> <div class="mb-20"> <h3 class="text-3xl font-bold text-center mb-12 text-yellow-400">Story Overview</h3> <div class="text-center"> <h4 class="text-xl font-bold mb-4 text-yellow-400">Themes & Tone:</h4> <div class="grid grid-cols-2 gap-4 text-gray-300 max-w-md mx-auto"> <div>🎯 Global Conspiracy</div> <div>🔬 High‑Tech Espionage</div> <div>💔 Personal Stakes</div> <div>⚡ Relentless Pacing</div> </div> </div> </div> <!-- Films Carousel --> <div class="mb-20"> <h3 class="text-3xl font-bold text-center mb-12 text-yellow-400 uppercase">NEGETIVE TRUE'S</h3> ${renderComponent($$result2, "FilmsCarousel", FilmsCarousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/VC/STORY-BOOK/src/components/FilmsCarousel.jsx", "client:component-export": "default" })} </div> </div> </section> <section class="h-screen  text-yellow-500 flex items-center justify-center"> <div class="text-center px-6 font-semibold text-lg md:text-3xl"> <!-- <p > ENVISIONED BY &nbsp; &nbsp; </p> --> <p>  ${renderComponent($$result2, "DecryptedText", DecryptedText, { "client:load": true, "text": "ENVISIONED BY", "initialDisplay": "CREATED BY", "client:component-hydration": "load", "client:component-path": "D:/VC/STORY-BOOK/src/components/DecryptedText.jsx", "client:component-export": "default" })} &nbsp; &nbsp;
</p> <p>  ${renderComponent($$result2, "DecryptedText", DecryptedText, { "client:load": true, "text": "JAGMOHAN SINGH MALHI", "initialDisplay": "JXLEE", "client:component-hydration": "load", "client:component-path": "D:/VC/STORY-BOOK/src/components/DecryptedText.jsx", "client:component-export": "default" })} &nbsp; &nbsp;
</p> </div> </section> <!-- Characters Modal --> ${renderComponent($$result2, "CharactersModal", CharactersModal, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/VC/STORY-BOOK/src/components/CharactersModal.jsx", "client:component-export": "default" })} </main> ` })}`;
}, "D:/VC/STORY-BOOK/src/pages/index.astro", void 0);

const $$file = "D:/VC/STORY-BOOK/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
