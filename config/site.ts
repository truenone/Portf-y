export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Truen Developer",
  description: "Web sitelerinizi en güzel hale getirelim.",
  navItems: [
    {
      label: "Ana sayfa",
      href: "/",
    },
    {
      label: "Öz geçmiş",
      href: "/resume",
    },
    {
      label: "Hakkımda",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Ana sayfa",
      href: "/",
    },
    {
      label: "Öz geçmiş",
      href: "/resume",
    },
    {
      label: "Hakkımda",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/truenone",
    twitter: "https://x.com/TruenDev",
    discord: "https://discord.gg/aUDnNpQkkV",
  },
};
