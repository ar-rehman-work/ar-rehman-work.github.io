# Abdul Rehman Portfolio

A clean, responsive React portfolio for Abdul Rehman, a full stack software engineer focused on backend engineering, REST API development, scalable systems, and practical full stack product delivery.

## Tech Stack

- React 19
- TypeScript
- Vite
- SCSS / Sass
- ESLint

## Portfolio Sections

- Hero introduction with recruiter-friendly positioning
- About section
- Skills grouped by backend, frontend, and infrastructure
- Featured URL Shortener project
- Experience highlights
- Resume/CV request call-to-action
- Contact links
- Footer

## Featured Project

The portfolio highlights a URL Shortener project with:

- Authentication
- Custom aliases
- Expiration support
- Search and filtering
- Pagination
- Base62 short-code generation
- Clean REST API design
- Redis caching roadmap

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Deployment

This is a static Vite app that deploys automatically to GitHub Pages with GitHub Actions. The production build outputs to the `dist` folder.

### GitHub Pages

1. Push changes to the `main` branch.
2. Open the GitHub repository: `ar-rehman-work/ar-rehman-work.github.io`.
3. Go to **Settings → Pages**.
4. Set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and check the deployment workflow result.
6. The site should be available at `https://ar-rehman-work.github.io`.

The workflow installs dependencies with `npm ci`, runs lint, builds with `npm run build`, uploads `dist` as a Pages artifact, and deploys using the official GitHub Pages actions.

### Vercel / Netlify

1. Connect the GitHub repository.
2. Use `npm run build` as the build command.
3. Use `dist` as the publish directory.
