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

✅ Responsive application shell, running on Next.js App Router
✅ Kanban board with three task states (`toDo`, `inProgress`, `finished`)
✅ Task grouping by status
✅ Tasks and users persisted in PostgreSQL (Neon) through Prisma
✅ Task creation, editing, and deletion, wired end to end (UI → Server Action → service → database)
✅ Every task creation and every status/assignee change is recorded as a `TaskEvent`, so each task keeps a history
✅ TypeScript strict mode
✅ Domain models for Task and User, kept separate from the Prisma/database models

## In process

Sprint 3 — closing the remaining gaps in the real-CRUD flow (see project documentation for details) before starting authentication.

---

## Architecture (high level)

- **UI components** (`src/components/`) render the board and the create/edit/delete forms. Only one component (`Dashboard`) is a Client Component — everything interactive under it inherits that boundary. Everything else is a Server Component by default.
- **Server Actions** (`src/server/actions/`) are the entry point from client forms into the backend.
- **Services** (`src/service/`) hold the Prisma queries and translate database rows into the UI-facing `Task`/`User` types.
- **Prisma** (`prisma/schema.prisma`, `src/db/client.ts`) defines the database schema and connects to PostgreSQL on Neon.

## Database Models (high level)

- **User** — id, name, email, role.
- **Task** — id, title, description, assignee, status, priority, timestamps.
- **TaskEvent** — a history record for a task: what changed (task created, status changed, or assignee changed), the previous and new value, and when it happened. This is what powers the task history and will later power the productivity metrics and AI summary.

---

## Roadmap

The project is being developed in phases.

Current progress:

-✅ Frontend foundation
-✅ UI and layout
-✅ Domain model and Kanban

After technical desition of migrate to Next.js

-✅ Sprint 0 — Pre-migration cleanup
-✅ Sprint 1 — Migration to Next.js
-✅ Sprint 2 — PostgreSQL + Prisma
-🚧 Sprint 3 — Real CRUD (mostly implemented, being reviewed/closed out)
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

## History

TaskFlow originally started as a Vite + React Router SPA. It has since been fully migrated to Next.js App Router, and now persists its data in PostgreSQL through Prisma instead of in-memory mock data.