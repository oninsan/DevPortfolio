# Niño Abao — Developer Portfolio

Personal portfolio for Niño Abao, web developer and IT instructor in Cebu, Philippines.

**Live site:** https://oninsan.github.io/DevPortfolio/

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

- Projects: `src/lib/data/project.ts`. Omit `liveUrl` or `githubUrl` when no public destination exists.
- Skills: `src/lib/data/skills.ts` and `src/lib/data/skillCategory.ts`.
- Bio, contact details, and page sections: `src/lib/components/pages/`.
- Visual styles: `src/app.css`.

The contact form opens a prefilled draft in the visitor’s email app. Visitors send it there; the site does not claim to deliver messages or store submissions.
