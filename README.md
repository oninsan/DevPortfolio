# Niño Abao — Developer Portfolio

Personal portfolio for Niño Abao, web developer and IT instructor in Cebu, Philippines.

**Live site:** https://oninsan.github.io/DevPortfolio/

**Project stories:** https://oninsan.github.io/DevPortfolio/work/

## Development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

## Quality checks and production build

```sh
npm run check
BASE_PATH=/DevPortfolio npm run build
npm run preview
```

Visit `/DevPortfolio/` when previewing a build with the Pages base path.

## GitHub Pages

The deployment workflow checks the project, builds a fully prerendered site with the `/DevPortfolio` base path, and publishes the `build` directory. Pushes to `main` deploy automatically; it can also be run manually from GitHub Actions. Pages must use **GitHub Actions** as its source, with the custom domain field empty.

## Updating content

- Projects and case stories: `src/lib/data/project.ts`. Each featured project has a public source link; add a `liveUrl` only when there is a working public preview.
- Skills: `src/lib/data/skills.ts` and `src/lib/data/skillCategory.ts`.
- Bio, contact details, and page sections: `src/lib/components/pages/`.
- Visual styles: `src/app.css`.

The portfolio uses scroll reveals, subtle card tilt, and a decorative marquee. Visitors who prefer reduced motion get a still version. The sound toggle starts muted and generates a quiet ambient sequence with the Web Audio API after a visitor turns it on; no audio file or external service is required.

The contact form opens a prefilled draft in the visitor’s email app. Visitors send it there; the site does not claim to deliver messages or store submissions.
