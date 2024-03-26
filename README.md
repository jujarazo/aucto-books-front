## Aucto book frontend

- 🔥 [Next.js](https://nextjs.org) bootstrapped with create-next-app.
- 🌼 [React-Query](https://react-query-v2.tanstack.com/) to handle server state.
- ༄ [Tailwind](https://tailwindcss.com/) for the CSS.
- 📲 [shadcn](https://ui.shadcn.com/) for the UI.
- 📋 [React Hook Form](https://react-hook-form.com/) to handle the forms.
- ✅ [Zod](https://zod.dev/) for schema validation.

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

Add a .env file to connect the BE with the following:

```bash
BACKEND_URL=http://localhost:8080
```

## App structure

```
.
├── app
│   ├── layout.tsx                # Layout for all the pages
│   ├── page.tsx                  # Home page
│   ├── authors
│   │   ├── api                   # Nextjs server author endpoints
│   │   └── create                # Create author page
│   └── books
│   │   ├── api                   # Nextjs server books endpoints
│   │   └── create                # Create books page
├── components
│   ├── ui                        # shadcn UI components
│   │   ├── card.tsx
│   │   ├── button.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   ├── forms                     # Components for the Create author and book pages
│   └── home                      # Components for the Home page
├── hooks                         # Custom hooks
├── lib
│   └── utils.ts
├── services                      # Contains the requests to the Nextjs server routes
├── types                         # Types and schemas for form validation
```
