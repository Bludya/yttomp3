# ytomp4.com — YouTube to MP4 & MP3 converter (frontend)

Static Astro site. One landing page per language + English-only legal pages.

## Develop
    source ~/.nvm/nvm.sh
    npm install
    npm run dev        # http://localhost:4321

## Deploy (Cloudflare Pages)
Connect the repo in Cloudflare Pages → framework preset **Astro**,
build command `npm run build`, output directory `dist`.
Or from the CLI: `npx wrangler pages deploy dist --project-name ytomp4`.

## Add a language
1. Copy `src/i18n/en.ts` to `src/i18n/<code>.ts`, translate strings, type it as `Dict`.
2. Register it in `src/i18n/index.ts`.
3. Set `enabled: true` for that locale in `src/i18n/locales.ts`.
The page `/<code>/`, hreflang tags, switcher link and sitemap entry are generated automatically.

## Backend hook
`src/components/Converter.astro` dispatches a `ytomp4:convert` event with
`{ url, id, list, format, quality }` on submit — replace the placeholder
timeout there with the API call.
# yttomp3
