## Aucto book frontend

- 🔥 [Next.js](https://nextjs.org) bootstrapped with create-next-app
- 🌼 [React-Query](https://react-query-v2.tanstack.com/) to handle server state.
- ༄ [Tailwind](https://tailwindcss.com/) for the CSS.
- 📲 [shadcn](https://ui.shadcn.com/) for the UI
- 📋 [React Hook Form](https://react-hook-form.com/) to handle the forms
- ✅ [Zod](https://zod.dev/) for schema validation

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## App structure

```
.
├── app
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── ui
│   │   ├── alert-dialog.tsx
│   │   ├── button.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── ...
│   ├── main-nav.tsx
│   ├── page-header.tsx
│   └── ...
├── lib
│   └── utils.ts
├── styles
│   └── globals.css
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```
