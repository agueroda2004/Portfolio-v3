# Agregar un nuevo proyecto

## 1. Registrar el proyecto en `src/constants/data/projects.ts`

Agrega un nuevo objeto al array `projects`:

```ts
{
  id: "mi-proyecto",
  imageUrl: "https://ik.imagekit.io/...",
  githubClient: "https://github.com/user/repo-client",
  githubServer: "https://github.com/user/repo-server",
  liveUrl: "https://mi-proyecto.vercel.app",
  showFrontend: true,
  showBackend: true,
  frontendMessage: null,
  backendMessage: null,
  desktopImages: ["url1", "url2", ...],
  mobileImages: ["url1", "url2", ...],
  deploy: [
    {
      name: "Vercel",
      icon: "vercel",
      translationKey: "work.projects.mi-proyecto.deploy.vercel",
    },
  ],
  technologies: {
    frontend: [
      {
        name: "React",
        icon: "react",
        translationKey: "work.projects.mi-proyecto.technologies.frontend.react",
      },
    ],
    backend: [],
    database: [],
  },
},
```

### Campos especiales

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `showFrontend` | `boolean` | `true` = muestra techs, `false` = muestra mensaje |
| `showBackend` | `boolean` | Igual para backend |
| `frontendMessage` | `string \| null` | TranslationKey del mensaje si `showFrontend: false` |
| `backendMessage` | `string \| null` | TranslationKey del mensaje si `showBackend: false` |

### Nombres de iconos disponibles

Revisar en `src/constants/data/technologyIcons.tsx` los keys del objeto `technologyIcons`.

---

## 2. Agregar traducciones en los 3 idiomas

### Estructura en `src/i18n/locales/{es,en,pt}/translation.json`

Dentro de `work.projects`, agrega:

```json
"mi-proyecto": {
  "title": "Nombre del Proyecto",
  "category": "CATEGORÍA",
  "imageAlt": "Descripción de la imagen",
  "description": "Texto descriptivo del proyecto.",
  "problem": "Descripción del problema que resuelve.",
  "solution": "Descripción de la solución implementada.",
  "deploy": {
    "vercel": "Frontend desplegado en Vercel para distribución global rápida...",
    "railway": "Backend desplegado en Railway como servicio de API..."
  },
  "technologies": {
    "frontend": {
      "react": {
        "explanation": "Lo que hace esta tecnología.",
        "problemSolved": "Qué problema resolvió en el proyecto."
      }
    }
  },
  "messages": {
    "backend": "Solo si showBackend: false — explicación del BaaS usado."
  }
}
```

> **Nota**: Los 3 archivos (`es`, `en`, `pt`) deben tener la misma estructura. Si un proyecto no usa mensajes, omite el bloque `messages`.

---

## 3. Flujo rápido

1. Editar `projects.ts` (imágenes, deploy, tecnologías, show flags)
2. Editar `es/translation.json` (todos los textos en español)
3. Traducir a `en/translation.json`
4. Traducir a `pt/translation.json`
5. Ejecutar `npm run build` para verificar

---

## 4. Referencia: estructura de carpetas

```
src/
├── constants/data/
│   ├── projects.ts        ← datos del proyecto (imágenes, deploy, techs)
│   ├── personal.ts        ← datos personales
│   └── technologyIcons.tsx ← SVGs de iconos
├── i18n/locales/
│   ├── es/translation.json
│   ├── en/translation.json
│   └── pt/translation.json
└── components/
    ├── sections/
    │   └── ProjectDetail.tsx  ← renderiza tech cards y deploy cards
    └── cards/
        ├── TechnologyCard.tsx
        └── DeployCard.tsx
```
