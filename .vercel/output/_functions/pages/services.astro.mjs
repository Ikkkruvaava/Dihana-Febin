/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_5S5MEE25.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_HoaepB6U.mjs';
import { $ as $$Card } from '../chunks/Card_prvYPjm4.mjs';
import { c as c2, a as c3, b as c4, d as c5, e as c6, $ as $$ServiceCard } from '../chunks/card-pic6_9obraezi.mjs';
import { c as c1 } from '../chunks/card-pic1_CFcHYfs3.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      index: 1,
      titleTop: "Social Media",
      titleBottom: "Marketing",
      img: c1,
      alt: "Social Media Marketing",
      description: "Managing and growing brand accounts on Instagram, Facebook, and LinkedIn through consistent, engaging content strategies.",
      benefits: ["Increased followers & engagement", "Consistent brand presence", "Content calendar management", "Community building"],
      cta: "Get Started",
      link: "/#contact"
    },
    {
      index: 2,
      titleTop: "SEO & Content",
      titleBottom: "Strategy",
      img: c2,
      alt: "SEO & Content Strategy",
      description: "Driving organic traffic with keyword research, on-page SEO, and content that ranks and resonates with the right audience.",
      benefits: ["Higher search rankings", "Increased organic traffic", "Keyword-optimized content", "Long-term visibility"],
      cta: "Learn More",
      link: "/#contact"
    },
    {
      index: 3,
      titleTop: "Meta & Google",
      titleBottom: "Ads",
      img: c3,
      alt: "Meta & Google Ads",
      description: "Planning and executing targeted paid ad campaigns on Meta and Google \u2014 optimized for reach, clicks, and conversions.",
      benefits: ["Targeted reach", "Measurable results", "Budget optimization", "Lead generation"],
      cta: "Start Campaign",
      link: "/#contact"
    },
    {
      index: 1,
      titleTop: "Graphic",
      titleBottom: "Design",
      img: c4,
      alt: "Graphic Design",
      description: "Creating scroll-stopping visuals \u2014 from social media graphics and reels to brand assets \u2014 using Photoshop and Illustrator.",
      benefits: ["Professional brand visuals", "Social media graphics", "Brand asset creation", "Creative consistency"],
      cta: "View Portfolio",
      link: "/#work"
    },
    {
      index: 2,
      titleTop: "Content",
      titleBottom: "Creation",
      img: c5,
      alt: "Content Creation",
      description: "Producing engaging ad copies, captions, blogs, and creative content that tells your brand's story effectively.",
      benefits: ["Compelling copy", "Brand storytelling", "Multi-platform content", "Creative strategy"],
      cta: "Get Content",
      link: "/#contact"
    },
    {
      index: 3,
      titleTop: "Campaign",
      titleBottom: "Analytics",
      img: c6,
      alt: "Campaign Analytics",
      description: "Tracking performance with analytics tools and turning data into actionable insights through clear, detailed reports.",
      benefits: ["Performance tracking", "Data-driven insights", "Clear reporting", "ROI measurement"],
      cta: "Analytics Setup",
      link: "/#contact"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "What I Do \u2014 Dihana Febin", "description": "Explore Dihana Febin's digital marketing services including social media marketing, SEO, Meta Ads, graphic design, content creation, and campaign analytics.", "data-astro-cid-ucd2ps2b": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-16 px-4 mx-auto max-w-screen-xl lg:py-24 lg:px-6" data-astro-cid-ucd2ps2b> <div class="text-center mb-16" data-astro-cid-ucd2ps2b> <h1 class="mb-4 text-5xl font-medium leading-none tracking-tight md:text-6xl" data-astro-cid-ucd2ps2b>What I Do</h1> <p class="text-xl font-normal leading-7 mx-auto max-w-3xl" data-astro-cid-ucd2ps2b>
From strategy to execution — here's how I help brands grow online. Each service is tailored to your unique needs and goals.
</p> </div> <div class="space-y-24" data-astro-cid-ucd2ps2b> ${services.map((service, index) => renderTemplate`<div class="service-item" data-astro-cid-ucd2ps2b> <div class="mb-12" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "ServiceCard", $$ServiceCard, { "index": service.index, "titleTop": service.titleTop, "titleBottom": service.titleBottom, "img": service.img, "alt": service.alt, "link": service.link, "data-astro-cid-ucd2ps2b": true })} </div> <div class="grid md:grid-cols-2 gap-10 px-4" data-astro-cid-ucd2ps2b> <div data-astro-cid-ucd2ps2b> <h3 class="text-2xl font-medium mb-4" data-astro-cid-ucd2ps2b>What I offer</h3> <p class="mb-6" data-astro-cid-ucd2ps2b>${service.description}</p> <a${addAttribute(service.link, "href")} class="inline-flex items-center px-8 py-4 bg-green text-dark rounded-2xl hover:bg-dark hover:text-white transition-all font-medium" data-astro-cid-ucd2ps2b> ${service.cta} <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ucd2ps2b> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-ucd2ps2b></path> </svg> </a> </div> <div class="bg-gray rounded-2xl p-8" data-astro-cid-ucd2ps2b> <h3 class="text-2xl font-medium mb-4" data-astro-cid-ucd2ps2b>Benefits</h3> <ul class="space-y-4" data-astro-cid-ucd2ps2b> ${service.benefits.map((benefit) => renderTemplate`<li class="flex items-start" data-astro-cid-ucd2ps2b> <svg class="mr-2 w-5 h-5 mt-1 text-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ucd2ps2b> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-ucd2ps2b></path> </svg> <span data-astro-cid-ucd2ps2b>${benefit}</span> </li>`)} </ul> </div> </div> </div>`)} </div> <div class="mt-24 text-center" data-astro-cid-ucd2ps2b> ${renderComponent($$result2, "Card", $$Card, { "data-astro-cid-ucd2ps2b": true }, { "default": ($$result3) => renderTemplate` <div class="p-10 md:p-16" data-astro-cid-ucd2ps2b> <h2 class="text-3xl md:text-4xl font-medium mb-6" data-astro-cid-ucd2ps2b>Ready to grow your brand online?</h2> <p class="mb-10 text-xl max-w-2xl mx-auto" data-astro-cid-ucd2ps2b>
Let's work together to build a strategy that puts your brand in front of the right people — at the right time.
</p> <a href="/#contact" class="inline-flex items-center px-10 py-5 bg-dark text-white rounded-2xl hover:bg-green hover:text-dark transition-all font-medium text-xl" data-astro-cid-ucd2ps2b>
Get in Touch
</a> </div> ` })} </div> </div> ` })} `;
}, "D:/Code/Web/Portfolio-Websites/Dihana/Positivus/src/pages/services.astro", void 0);

const $$file = "D:/Code/Web/Portfolio-Websites/Dihana/Positivus/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
