/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_5S5MEE25.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_HoaepB6U.mjs';
import { $ as $$Card } from '../chunks/Card_prvYPjm4.mjs';
export { renderers } from '../renderers.mjs';

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Hire Me \u2014 Dihana Febin", "description": "Looking for a Digital Marketer? Let's work together to grow your brand online with social media marketing, SEO, Meta Ads, and creative content strategy." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-3"> <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12"> <h1 class="mb-6 text-5xl font-medium leading-none md:text-6xl">Let's Work <span class="greenhead">Together</span></h1> <p class="mb-8 text-xl font-normal leading-7">
Whether you need someone to manage your social media, run ad campaigns, create content, or build a complete marketing strategy — I'm here to help your brand grow.
</p> </div> <div class="max-w-4xl mx-auto"> <div class="grid md:grid-cols-2 gap-8 mb-12"> ${renderComponent($$result2, "Card", $$Card, { "isUnderline": true }, { "default": ($$result3) => renderTemplate` <div class="p-8 bg-gray rounded-[45px]"> <h3 class="text-2xl font-medium mb-4">What I Bring</h3> <ul class="space-y-3"> <li class="flex items-start gap-2"> <span class="text-green text-xl">✦</span> <span>Social media management & growth</span> </li> <li class="flex items-start gap-2"> <span class="text-green text-xl">✦</span> <span>SEO-driven content strategy</span> </li> <li class="flex items-start gap-2"> <span class="text-green text-xl">✦</span> <span>Meta & Google ad campaigns</span> </li> <li class="flex items-start gap-2"> <span class="text-green text-xl">✦</span> <span>Graphic design for brands</span> </li> <li class="flex items-start gap-2"> <span class="text-green text-xl">✦</span> <span>Content creation & copywriting</span> </li> <li class="flex items-start gap-2"> <span class="text-green text-xl">✦</span> <span>Campaign analytics & reporting</span> </li> </ul> </div> ` })} ${renderComponent($$result2, "Card", $$Card, { "isUnderline": true }, { "default": ($$result3) => renderTemplate` <div class="p-8 bg-dark text-gray rounded-[45px]"> <h3 class="text-2xl font-medium mb-4 text-green">How It Works</h3> <ul class="space-y-3"> <li class="flex items-start gap-2"> <span class="text-green font-medium">01.</span> <span>We start with a discovery call</span> </li> <li class="flex items-start gap-2"> <span class="text-green font-medium">02.</span> <span>I research and build your strategy</span> </li> <li class="flex items-start gap-2"> <span class="text-green font-medium">03.</span> <span>Creative assets get produced</span> </li> <li class="flex items-start gap-2"> <span class="text-green font-medium">04.</span> <span>Campaigns launch & content goes live</span> </li> <li class="flex items-start gap-2"> <span class="text-green font-medium">05.</span> <span>I track, optimize & report results</span> </li> </ul> </div> ` })} </div> <div class="text-center mt-16"> ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` <div class="p-10 md:p-16 bg-green rounded-[45px]"> <h2 class="text-3xl md:text-4xl font-medium mb-6 text-dark">Ready to get started?</h2> <p class="mb-8 text-lg max-w-xl mx-auto text-dark/80">
Send me a message and let's talk about how I can help your brand grow online.
</p> <a href="/#contact" class="inline-flex items-center px-10 py-5 bg-dark text-white rounded-2xl hover:bg-white hover:text-dark transition-all font-medium text-xl">
Get in Touch
</a> </div> ` })} </div> </div> </div> </main> ` })}`;
}, "D:/Code/Web/Portfolio-Websites/Dihana/Positivus/src/pages/pricing.astro", void 0);

const $$file = "D:/Code/Web/Portfolio-Websites/Dihana/Positivus/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Pricing,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
