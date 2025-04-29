# EOxHub Pages Instance

## Brand config

In order to change the brand config (name, description, logo, favicon, etc.) please edit the [brand-configs repository](https://gitlab.eox.at/eox/hub/eoxhub-portal/brand-configs).

## Site config

Site config following [VitePress Site Config options](https://vitepress.dev/reference/site-config) is to be done in [.vitepress/config.js](./.vitepress/config.js).

## Theme config

Should you need to adjust or enhance the theme, please consider if this is a generic change (applicable to all EOX-themed pages) or to this instance specifically.
- if generic: update the [@eox/pages-theme-eox package](https://gitlab.eox.at/eox/hub/eoxhub-portal/pages-theme-eox)
- if specific: change the [.vitepress/theme/index.js](./.vitepress/theme/index.js) file according to the [VitePress theming docs](https://vitepress.dev/guide/custom-theme#theme-interface)
