export type Technology = {
  name: string;
  icon: string;
  translationKey: string;
};

export type DeployService = {
  name: string;
  icon: string;
  translationKey: string;
};

export type TechnologyStack = {
  frontend: readonly Technology[];
  backend: readonly Technology[];
  database: readonly Technology[];
};

export const projects = [
  {
    id: "livestock-pro",
    imageUrl:
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto19.png?updatedAt=1784561244815",
    githubClient: "https://github.com/agueroda2004/LivestockPro-CLIENT",
    githubServer: "https://github.com/agueroda2004/LivestockPro-SERVER",
    liveUrl: "https://livestockpro-client.vercel.app",
    desktopImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto19.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto1.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto2.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto3.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto4.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto5.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto6.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto7.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto8.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto9.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto10.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto11.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto12.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto13.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto14.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto15.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto16.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto17.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Foto18.png",
    ],
    mobileImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto20.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto21.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto22.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto23.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto24.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto25.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto26.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto27.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto28.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto29.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto30.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto31.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto32.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto33.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto34.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto35.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto36.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto37.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto38.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/foto39.png",
    ],
    showFrontend: true,
    showBackend: true,
    frontendMessage: null,
    backendMessage: null,
    deploy: [
      {
        name: "Vercel",
        icon: "vercel",
        translationKey: "work.projects.livestock-pro.deploy.vercel",
      },
      {
        name: "Railway",
        icon: "railway",
        translationKey: "work.projects.livestock-pro.deploy.railway",
      },
      {
        name: "TiDB",
        icon: "tidb",
        translationKey: "work.projects.livestock-pro.deploy.tidb",
      },
    ],
    technologies: {
      frontend: [
        {
          name: "React",
          icon: "react",
          translationKey:
            "work.projects.livestock-pro.technologies.frontend.react",
        },
        {
          name: "TypeScript",
          icon: "typescript",
          translationKey:
            "work.projects.livestock-pro.technologies.frontend.typescript",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwindcss",
          translationKey:
            "work.projects.livestock-pro.technologies.frontend.tailwindcss",
        },
        {
          name: "Vite",
          icon: "vite",
          translationKey:
            "work.projects.livestock-pro.technologies.frontend.vite",
        },
        {
          name: "TanStack Query",
          icon: "tanstack",
          translationKey:
            "work.projects.livestock-pro.technologies.frontend.tanstack",
        },
        {
          name: "Axios",
          icon: "axios",
          translationKey:
            "work.projects.livestock-pro.technologies.frontend.axios",
        },
        {
          name: "Zustand",
          icon: "zustand",
          translationKey:
            "work.projects.livestock-pro.technologies.frontend.zustand",
        },
        {
          name: "Zod",
          icon: "zod",
          translationKey:
            "work.projects.livestock-pro.technologies.frontend.zod",
        },
        {
          name: "Chart.js",
          icon: "chartjs",
          translationKey:
            "work.projects.livestock-pro.technologies.frontend.chartjs",
        },
        {
          name: "React Router",
          icon: "reactRouter",
          translationKey:
            "work.projects.livestock-pro.technologies.frontend.react-router",
        },
        {
          name: "React Host Toast",
          icon: "reactHostToast",
          translationKey:
            "work.projects.livestock-pro.technologies.frontend.react-host-toast",
        },
      ],
      backend: [
        {
          name: "Node.js",
          icon: "nodejs",
          translationKey:
            "work.projects.livestock-pro.technologies.backend.nodejs",
        },
        {
          name: "TypeScript",
          icon: "typescript",
          translationKey:
            "work.projects.livestock-pro.technologies.backend.typescript",
        },
        {
          name: "Express.js",
          icon: "express",
          translationKey:
            "work.projects.livestock-pro.technologies.backend.express",
        },
        {
          name: "Prisma",
          icon: "prisma",
          translationKey:
            "work.projects.livestock-pro.technologies.backend.prisma",
        },
        {
          name: "Zod",
          icon: "zod",
          translationKey:
            "work.projects.livestock-pro.technologies.backend.zod",
        },
        {
          name: "Vitest",
          icon: "vitest",
          translationKey:
            "work.projects.livestock-pro.technologies.backend.vitest",
        },
        {
          name: "JSON Web Tokens",
          icon: "jsonwebtoken",
          translationKey:
            "work.projects.livestock-pro.technologies.backend.json-web-tokens",
        },
        {
          name: "Pino",
          icon: "pino",
          translationKey:
            "work.projects.livestock-pro.technologies.backend.pino",
        },
      ],
      database: [
        {
          name: "PostgreSQL",
          icon: "postgresql",
          translationKey:
            "work.projects.livestock-pro.technologies.database.postgresql",
        },
      ],
    },
  },
  {
    id: "post-destete",
    imageUrl:
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto18.png?updatedAt=1784572794461",
    githubClient: "https://github.com/agueroda2004/PostDestete-CLIENT",
    githubServer: "https://github.com/agueroda2004/PostDestete-SERVER",
    liveUrl:
      "https://post-destete.vercel.app",
    desktopImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto18.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto11.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto12.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto13.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto14.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto15.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto17.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto16.png",
    ],
    mobileImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto1.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto10.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto3.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto5.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto4.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto6.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto7.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto9.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/foto8.png",
    ],
    showFrontend: true,
    showBackend: true,
    frontendMessage: null,
    backendMessage: null,
    deploy: [
      {
        name: "Vercel",
        icon: "vercel",
        translationKey: "work.projects.post-destete.deploy.vercel",
      },
      {
        name: "Railway",
        icon: "railway",
        translationKey: "work.projects.post-destete.deploy.railway",
      },
      {
        name: "TiDB",
        icon: "tidb",
        translationKey: "work.projects.post-destete.deploy.tidb",
      },
    ],
    technologies: {
      frontend: [
        {
          name: "React",
          icon: "react",
          translationKey:
            "work.projects.post-destete.technologies.frontend.react",
        },
        {
          name: "TypeScript",
          icon: "typescript",
          translationKey:
            "work.projects.post-destete.technologies.frontend.typescript",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwindcss",
          translationKey:
            "work.projects.post-destete.technologies.frontend.tailwindcss",
        },
        {
          name: "TanStack",
          icon: "tanstack",
          translationKey:
            "work.projects.post-destete.technologies.frontend.tanstack",
        },
        {
          name: "Axios",
          icon: "axios",
          translationKey:
            "work.projects.post-destete.technologies.frontend.axios",
        },
        {
          name: "Zustand",
          icon: "zustand",
          translationKey:
            "work.projects.post-destete.technologies.frontend.zustand",
        },
        {
          name: "Zod",
          icon: "zod",
          translationKey:
            "work.projects.post-destete.technologies.frontend.zod",
        },
        {
          name: "Recharts",
          icon: "recharts",
          translationKey:
            "work.projects.post-destete.technologies.frontend.recharts",
        },
        {
          name: "React Router",
          icon: "reactRouter",
          translationKey:
            "work.projects.post-destete.technologies.frontend.react-router",
        },
        {
          name: "React Host Toast",
          icon: "reactHostToast",
          translationKey:
            "work.projects.post-destete.technologies.frontend.react-host-toast",
        },
        {
          name: "Vite",
          icon: "vite",
          translationKey:
            "work.projects.post-destete.technologies.frontend.vite",
        },
      ],
      backend: [
        {
          name: "Node.js",
          icon: "nodejs",
          translationKey:
            "work.projects.post-destete.technologies.backend.nodejs",
        },
        {
          name: "TypeScript",
          icon: "typescript",
          translationKey:
            "work.projects.post-destete.technologies.backend.typescript",
        },
        {
          name: "Express.js",
          icon: "express",
          translationKey:
            "work.projects.post-destete.technologies.backend.express",
        },
        {
          name: "Prisma",
          icon: "prisma",
          translationKey:
            "work.projects.post-destete.technologies.backend.prisma",
        },
        {
          name: "Zod",
          icon: "zod",
          translationKey: "work.projects.post-destete.technologies.backend.zod",
        },
        {
          name: "Vitest",
          icon: "vitest",
          translationKey:
            "work.projects.post-destete.technologies.backend.vitest",
        },
        {
          name: "JSON Web Tokens",
          icon: "jsonwebtoken",
          translationKey:
            "work.projects.post-destete.technologies.backend.json-web-tokens",
        },
        {
          name: "MySQL",
          icon: "mysql",
          translationKey:
            "work.projects.post-destete.technologies.backend.mysql",
        },
      ],
      database: [],
    },
  },
  {
    id: "tenis-fresonas",
    imageUrl:
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto1.png?updatedAt=1784587520362",
    githubClient: "https://github.com/agueroda2004/TenisFresonas",
    githubServer: null,
    liveUrl: "https://tenis-fresonas-omega.vercel.app",
    desktopImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto1.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto2.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto3.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto4.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto5.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto6.png",
    ],
    mobileImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto7.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto8.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto9.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto10.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto11.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto12.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/foto13.png",
    ],
    showFrontend: true,
    showBackend: false,
    frontendMessage: null,
    backendMessage: "work.projects.tenis-fresonas.messages.backend",
    deploy: [
      {
        name: "Vercel",
        icon: "vercel",
        translationKey: "work.projects.tenis-fresonas.deploy.vercel",
      },
      {
        name: "Supabase",
        icon: "supabase",
        translationKey: "work.projects.tenis-fresonas.deploy.supabase",
      },
      {
        name: "ImageKit",
        icon: "imagekit",
        translationKey: "work.projects.tenis-fresonas.deploy.imagekit",
      },
    ],
    technologies: {
      frontend: [
        {
          name: "React",
          icon: "react",
          translationKey:
            "work.projects.tenis-fresonas.technologies.frontend.react",
        },
        {
          name: "TypeScript",
          icon: "typescript",
          translationKey:
            "work.projects.tenis-fresonas.technologies.frontend.typescript",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwindcss",
          translationKey:
            "work.projects.tenis-fresonas.technologies.frontend.tailwindcss",
        },
        {
          name: "Vite",
          icon: "vite",
          translationKey:
            "work.projects.tenis-fresonas.technologies.frontend.vite",
        },
        {
          name: "React Router",
          icon: "reactRouter",
          translationKey:
            "work.projects.tenis-fresonas.technologies.frontend.react-router",
        },
        {
          name: "React Host Toast",
          icon: "reactHostToast",
          translationKey:
            "work.projects.tenis-fresonas.technologies.frontend.react-host-toast",
        },
        {
          name: "Zod",
          icon: "zod",
          translationKey:
            "work.projects.tenis-fresonas.technologies.frontend.zod",
        },
      ],
      backend: [],
      database: [],
    },
  },
] as const;

export type Project = (typeof projects)[number];
