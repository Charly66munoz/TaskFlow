# TaskFlow

TaskFlow is a task management application that I'm building as my main portfolio project while learning modern frontend and backend development.

The goal is not only to finish the application, but also to practice building software following a structured process, making technical decisions, documenting them and improving the project sprint by sprint.

> ⚠️ This project is currently under active development.

---

## Tech Stack

Framework
- Next.js (App Router)

Language
- TypeScript

UI
- React
- Tailwind CSS

Data
- PostgreSQL
- Prisma

Authentication
- Auth.js

Planned
- dnd-kit
- LLM API
- Vercel
---

## Current Features

✅ Responsive application shell
✅ Kanban board with three task states
✅ Task grouping by status
✅ Task creation with validation
✅ Responsive sidebar
✅ TypeScript strict mode
✅ Domain models for Task and User

## In process

Migration from Vite to Next.js

---

## Roadmap

The project is being developed in phases.

Current progress:

-✅ Frontend foundation
-✅ UI and layout
-✅ Domain model and Kanban

After technical desition of migrate to Next.js

-✅ Sprint 0 — Pre-migration cleanup
-🚧 Sprint 1 — Migration to Next.js
-⬜ Sprint 2 — PostgreSQL + Prisma
-⬜ Sprint 3 — Real CRUD
-⬜ Sprint 4 — Authentication
-⬜ Sprint 5 — Drag & drop
-⬜ Sprint 6 — Metrics + AI summary
-⬜ Sprint 7 — Deployment + polish
-⬜ Sprint 8 — Documentation

A more detailed roadmap, including sprint planning and technical decisions, is available in the project documentation.

---

## Why this project?

I wanted a project that would allow me to practice more than just writing code.

While building TaskFlow I'm working on topics such as:

- Component architecture
- TypeScript
- React patterns
- Responsive design
- Clean code
- Git workflow
- Technical documentation

---

## Getting Started

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Project Status

TaskFlow is currently under active development and new features are added incrementally as each sprint is completed.

## Current Migration

TaskFlow originally started as a Vite + React Router SPA.

The project is currently being migrated incrementally to Next.js App Router.
The existing React components and domain model are being preserved where possible,
while Vite and React Router infrastructure is progressively removed.