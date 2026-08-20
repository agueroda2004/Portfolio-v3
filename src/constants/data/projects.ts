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
    id: "quizy",
    imageUrl: "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc9.png",
    githubClient: null,
    githubServer: null,
    liveUrl: "",
    desktopImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc1.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc2.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc3.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc4.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc5.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc6.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc7.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc8.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc9.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc10.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc11.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc12.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc13.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc14.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc15.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc16.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc17.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc18.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc19.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc20.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc21.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc22.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc23.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc24.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc25.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc26.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc27.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc28.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/PC/pc29.png",
    ],
    mobileImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph1.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph2.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph3.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph4.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph5.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph6.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph7.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph8.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph9.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph10.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph11.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph12.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph13.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph14.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph15.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph16.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph17.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph18.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph19.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph20.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph21.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph22.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph23.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph24.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph25.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph26.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph27.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph28.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph29.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph30.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Quizy/Phone/ph31.png",
    ],
    showFrontend: true,
    showBackend: true,
    frontendMessage: null,
    backendMessage: null,
    deploy: [],
    technologies: {
      frontend: [
        {
          name: "JavaScript",
          icon: "javascript",
          translationKey:
            "work.projects.quizy.technologies.frontend.javascript",
        },
        {
          name: "Tailwind CSS",
          icon: "tailwindcss",
          translationKey:
            "work.projects.quizy.technologies.frontend.tailwindcss",
        },
      ],
      backend: [
        {
          name: ".NET",
          icon: "dotnet",
          translationKey: "work.projects.quizy.technologies.backend.dotnet",
        },
        {
          name: "C#",
          icon: "csharp",
          translationKey: "work.projects.quizy.technologies.backend.csharp",
        },
        {
          name: "SQL",
          icon: "sql",
          translationKey: "work.projects.quizy.technologies.backend.sql",
        },
      ],
      database: [],
    },
  },
  {
    id: "livestock-pro",
    imageUrl: "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/3.png",
    githubClient: "https://github.com/agueroda2004/LivestockPro-CLIENT",
    githubServer: "https://github.com/agueroda2004/LivestockPro-SERVER",
    liveUrl: "https://livestockpro-client.vercel.app",
    desktopImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/1.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/2.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/3.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/4.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/5.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/6.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/7.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/8.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/9.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/10.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/11.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/12.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/13.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/14.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/15.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/16.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/17.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/18.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/19.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/20.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Pc/21.png",
    ],
    mobileImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/1.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/2.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/3.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/4.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/5.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/6.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/8.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/9.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/10.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/11.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/12.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/13.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/14.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/15.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/16.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/17.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/18.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/19.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/20.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/LivestockPro/Phone/21.png",
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
    imageUrl: "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Pc/7.png",
    githubClient: "https://github.com/agueroda2004/PostDestete-CLIENT",
    githubServer: "https://github.com/agueroda2004/PostDestete-SERVER",
    liveUrl: "https://post-destete.vercel.app",
    desktopImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Pc/1.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Pc/2.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Pc/3.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Pc/4.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Pc/5.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Pc/6.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Pc/7.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Pc/8.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Pc/9.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Pc/10.png",
    ],
    mobileImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Phone/1.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Phone/2.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Phone/3.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Phone/4.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Phone/5.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Phone/6.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Phone/7.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Phone/8.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Phone/9.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Phone/10.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Phone/11.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/Post-Destete/Phone/12.png",
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
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/PC/pc2.png",
    githubClient: "https://github.com/agueroda2004/TenisFresonas",
    githubServer: null,
    liveUrl: "https://tenis-fresonas-omega.vercel.app",
    desktopImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/PC/pc1.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/PC/pc2.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/PC/pc3.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/PC/pc4.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/PC/pc5.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/PC/pc6.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/PC/pc7.png",
    ],
    mobileImages: [
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/Phone/phone1.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/Phone/phone2.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/Phone/phone3.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/Phone/phone4.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/Phone/phone5.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/Phone/phone6.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/Phone/phone7.png",
      "https://ik.imagekit.io/5zi86k8wt/Projects/TenisFresonas/Phone/phone8.png",
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
