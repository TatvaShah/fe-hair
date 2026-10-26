import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Fiona",
  tagline: "Licensed hairstylist in Scarborough and Toronto. Hairstyling and hair colour, booked by Instagram DM.",
  category: "Licensed hairstylist",
  schemaType: "BeautySalon",
  area: "Scarborough / Toronto, ON",
  siteUrl: "https://fe-hair.vercel.app",

  theme: { preset: "salon-chic" },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Licensed hairstylist in Scarborough",
    headline: "Hairstyling and colour by Fiona",
    subhead: "A licensed stylist from India working in Toronto and Scarborough. Send a DM on Instagram to book your appointment.",
    images: [
      { src: "/images/post-4.jpg", alt: "Hairstyle by Fiona" },
      { src: "/images/post-1.jpg", alt: "Hair work by Fiona" },
      { src: "/images/post-5.jpg", alt: "Hair by Fiona" },
    ],
    primaryCta: { label: "DM to book", href: "https://ig.me/m/f.e_hair" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: ["Licensed hairstylist", "Hairstyling and hair colour", "Scarborough and Toronto", "Book by Instagram DM"],

  about: {
    title: "About Fiona",
    body: [
      "Fiona is a licensed hairstylist in Toronto and Scarborough, originally from India, and an advocate for self empowerment.",
      "She offers hairstyling and hair colour. Booking is done through Instagram DM.",
    ],
    image: { src: "/images/post-2.jpg", alt: "Fiona's hair work" },
  },

  menu: {
    label: "Services",
    title: "Services",
    variant: "list",
    showPrices: false,
    priceNote: "Message on Instagram for pricing.",
    groups: [
      { title: "Hair", note: "Price on consultation", items: [{ name: "Hairstyling" }, { name: "Hair colour" }] },
    ],
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-1.jpg", width: 1440, height: 1440, alt: "Hair work by Fiona", caption: "Pinned post", href: "https://www.instagram.com/p/C-2wTqYORbI/" },
      { src: "/images/post-2.jpg", width: 1379, height: 1042, alt: "Hair work by Fiona", caption: "Pinned post", href: "https://www.instagram.com/p/CALU4veAe8z/" },
      { src: "/images/post-4.jpg", width: 640, height: 1136, alt: "Hair reel still", caption: "From a reel", href: "https://www.instagram.com/reel/DeIx7xIRniZ/" },
      { src: "/images/post-5.jpg", width: 540, height: 960, alt: "Hair reel still", caption: "From a reel", href: "https://www.instagram.com/reel/DaS_PavxJhM/" },
      { src: "/images/post-6.jpg", width: 640, height: 1136, alt: "Hair reel still", caption: "From a reel", href: "https://www.instagram.com/reel/DZd5LkSxHit/" },
      { src: "/images/post-7.jpg", width: 640, height: 1136, alt: "Hair reel still", caption: "From a reel", href: "https://www.instagram.com/reel/DZQ6YjhRl4I/" },
    ],
  },

  instagram: {
    handle: "f.e_hair",
    embeds: ["https://www.instagram.com/p/C-2wTqYORbI/"],
    embedsTitle: "From Instagram",
  },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Appointments are booked through Instagram. Tap the button to copy a starter message, then paste it into the chat.",
    dmMessage: "Hi Fiona! I would like to book an appointment.\nService (style or colour):\nPreferred date:\nPreferred time:",
    links: [],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a DM to @f.e_hair on Instagram with the service and the date you would like." },
    { q: "What services are offered?", a: "Hairstyling and hair colour by a licensed hairstylist." },
    { q: "Where are you located?", a: "Fiona works in Scarborough and Toronto, Ontario." },
  ],

  contact: { title: "Contact and booking", area: "Scarborough / Toronto, Ontario", socials: [] },

  seo: {
    title: "Fiona | Licensed hairstylist in Scarborough",
    description: "Fiona is a licensed hairstylist in Scarborough and Toronto offering hairstyling and hair colour. Book your appointment by Instagram DM at @f.e_hair today.",
    keywords: ["hairstylist Scarborough", "hair colour Scarborough", "licensed hairstylist Toronto", "Scarborough stylist"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
