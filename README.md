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

This is a static Vite app and can be deployed to GitHub Pages, Vercel, Netlify, or any static hosting provider.

### GitHub Pages

1. Run `npm run build`.
2. Deploy the generated `dist` directory using a GitHub Pages workflow or a deployment action.
3. Configure a custom domain if needed.

### Vercel / Netlify

1. Connect the GitHub repository.
2. Use `npm run build` as the build command.
3. Use `dist` as the publish directory.
