# Daniel Agüero — Portfolio

Personal portfolio showcasing 3 projects. Built with modern tooling and fully internationalized (ES/EN/PT).

> **[Visit live site →](https://portfolio-eight-inky-42.vercel.app)**

## Stack

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-8-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black)
![i18next](https://img.shields.io/badge/i18next-26-26A69A?style=for-the-badge&logo=i18next&logoColor=black)

## Projects

| Project | Category | Deploy |
|---------|----------|--------|
| **LivestockPro** | Livestock management | Vercel + Railway + TiDB |
| **Post-Destete** | Swine production | Vercel + Railway + TiDB |
| **TenisFresonas** | Virtual catalog | Vercel + Supabase + ImageKit |

## Scripts

```bash
npm run dev       # start dev server
npm run build     # typecheck + build for production
npm run preview   # preview production build
npm run lint      # run ESLint
```

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer, LanguageSelector
│   ├── sections/      # Hero, About, Work, Contact, Projects, ProjectDetail
│   └── cards/         # TechnologyCard, DeployCard
├── constants/data/    # projects.ts, personal.ts, technologyIcons.tsx
├── i18n/locales/      # es/, en/, pt/ (translation.json)
└── App.tsx            # main router
```

## Adding a Project

See `docs/agregar-proyecto.md`.
