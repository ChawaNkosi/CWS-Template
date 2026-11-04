/*
  THE ONLY FILE YOU EDIT FOR EACH NEW COMPANY.
  Change the text below, save, and the whole site updates.
  Leave a section out (or empty) and it disappears from the page and the menu.
  To change the colours, see the README.
*/

var site = {
  name: "Sunrise Plumbing",
  logoImage: "",                 // e.g. "images/logo.png". Leave "" to use the name as text.
  description: "Plumbing repairs, installations and emergency call-outs in Pretoria East.",

  // A thin bar at the very top while you are showing the draft. Set show to false to remove it.
  preview: {
    show: true,
    text: "Draft website built for Sunrise Plumbing by CWS Digital Studio.",
    linkText: "Contact us to take it live",
    linkUrl: "mailto:hello@yourdomain.co.za"
  },

  hero: {
    headline: "Plumbing repairs done right the first time",
    text: "Leaks, blocked drains, geysers and bathroom installations. We arrive on time, quote before we start, and clean up after ourselves.",
    image: "",                   // optional photo URL or "images/hero.jpg". Leave "" for a plain colour.
    primaryButton: "Call us now",
    secondaryButton: "WhatsApp us"
  },

  about: {
    nav: "About",
    title: "About us",
    text: [
      "Sunrise Plumbing has served homes and businesses in Pretoria East for over 12 years.",
      "We are a small team of qualified plumbers. You deal with the same people from the first call to the final check."
    ],
    image: "C:\\Users\\Chawa\\Downloads\\files\\about-img.jpg"                    // optional
  },

  services: {
    nav: "Services",
    title: "What we do",
    items: [
      { title: "Leaks and repairs", text: "Taps, pipes, toilets and burst geysers fixed, usually on the same day." },
      { title: "Blocked drains", text: "Drains cleared with proper equipment, not just chemicals." },
      { title: "Geyser installations", text: "Supply and installation of new geysers, with a written warranty." },
      { title: "Bathroom installations", text: "Full bathroom fitting, from basins to showers." },
      { title: "Emergency call-outs", text: "Burst pipe at night? Call us and we will come out." },
      { title: "Maintenance plans", text: "Regular check-ups for businesses and body corporates." }
    ]
  },

  why: {
    nav: "Why us",
    title: "Why customers choose us",
    items: [
      { title: "Clear prices", text: "You get a quote before any work starts." },
      { title: "Qualified and insured", text: "Registered plumbers with cover for every job." },
      { title: "We turn up", text: "If we say 10:00, we are there at 10:00." }
    ]
  },

  contact: {
    nav: "Contact",
    title: "Get in touch",
    text: "Call or message us for a free quote. We usually reply within the hour during opening hours.",
    phone: "012 345 6789",
    whatsapp: "27123456789",     // country code, no + or spaces
    email: "info@sunriseplumbing.co.za",
    address: "12 Example Street, Pretoria East",
    mapUrl: "",                  // paste a Google Maps link to show a "Get directions" link
    hours: [
      ["Monday to Friday", "07:30 - 17:00"],
      ["Saturday", "08:00 - 13:00"],
      ["Sunday", "Emergencies only"]
    ]
  },

  social: {
    facebook: "",
    instagram: ""
  },

  credit: { text: "Website by CWS Digital Studio", url: "" }
};
