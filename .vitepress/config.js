import { defineConfig } from "vitepress";
import baseConfig from "@eox/pages-theme-eox/config";
import { name as packageName } from "../package.json";

const brandId = packageName.replace("pages-", "");

export default defineConfig({
  extends: baseConfig(brandId),
  // Change the page config here
  themeConfig: {
    nav: [
      { text: "Documentation", link: "#" },
      { text: "Pricing", link: "#" },
      { text: "Support", link: "#" },
      { text: "Contact sales", link: "/contact", action: "secondary" },
      {
        text: "Launch workspace",
        link: "https://hub.eox.at/hub",
        action: "primary",
      },
    ],
  },
});
