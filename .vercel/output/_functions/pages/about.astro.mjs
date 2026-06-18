/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_5S5MEE25.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_HoaepB6U.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About \u2014 Dihana Febin", "description": "Learn more about Dihana Febin, a Digital Marketer at Iberr Technologies LLP specializing in social media marketing, SEO, Meta Ads, and creative content strategy." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-3"> <div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:pb-20 md:pt-10"> <div class="text-center space-y-10"> <h2 class="text-5xl font-medium leading-none md:text-6xl">Hi, I'm <span class="greenhead">Dihana</span> — <br> a Digital Marketer <br> who connects brands <br> with people.</h2> <p class="mt-6 mb-8 text-xl font-normal leading-7 sm:mb-12 max-w-3xl mx-auto">Digital marketing is how I think — not just what I do. I'm currently working at Iberr Technologies LLP, building brand presence through content, campaigns, and creative strategy. I blend Photoshop, Illustrator, SEO, and Meta Ads with creativity and data to make marketing that actually connects.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a class="px-9 py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-2xl inline-flex justify-center" href="/#work"> <h2 class="text-center text-xl font-normal leading-7">View My Work</h2> </a> <a class="px-9 py-5 bg-transparent hover:bg-zinc-900 text-black hover:text-white border border-zinc-900 rounded-2xl inline-flex justify-center" href="/#contact"> <h2 class="text-center text-xl font-normal leading-7">Get in Touch</h2> </a> </div> </div> </div> </div> <!-- Education & Certifications --> <div class="max-w-4xl mx-auto mt-16"> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-gray rounded-[45px] p-10 border border-dark/10 shadow-[0px_5px_0px_#191a23]"> <h3 class="text-2xl font-medium mb-6 greenhead inline-block">Education</h3> <div class="space-y-4"> <div> <p class="font-medium text-lg">B.Com</p> <p class="text-dark/70">University of Calicut</p> <p class="text-sm text-dark/50">2021 – 2024</p> </div> </div> </div> <div class="bg-gray rounded-[45px] p-10 border border-dark/10 shadow-[0px_5px_0px_#191a23]"> <h3 class="text-2xl font-medium mb-6 greenhead inline-block">Certifications</h3> <div class="space-y-4"> <div> <p class="font-medium">Digital Marketing Course</p> <p class="text-dark/70">ETUDEMY · Jan 2025</p> <p class="text-sm text-dark/50">Credential ID: EDDM022-579</p> </div> <div> <p class="font-medium">Graphic Designing Professional</p> <p class="text-dark/70">ETUDEMY · Mar 2025</p> <p class="text-sm text-dark/50">Credential ID: EDP025-651</p> </div> </div> </div> </div> </div> </div> </main> ` })}`;
}, "D:/Code/Web/Portfolio-Websites/Dihana/Positivus/src/pages/about.astro", void 0);

const $$file = "D:/Code/Web/Portfolio-Websites/Dihana/Positivus/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$About,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
