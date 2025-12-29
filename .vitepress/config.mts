import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Sangeeta Gupta",
  description: "A VitePress Site",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Experience", link: "/experience" },
      { text: "Projects", link: "/projects" },
      {
        text: "Download Resume",
        link: "/resume.pdf",
        target: "_blank", // opens in new tab
      },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: "github", link: "https://github.com/sangeeta2701" },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/sangeeta-gupta-074123214/",
      },
    ],
  },
});
