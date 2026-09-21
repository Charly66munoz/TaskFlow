# Graph Report - frontend  (2026-09-21)

## Corpus Check
- 69 files · ~116,743 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 2, .example 1, .toml 1)

## Summary
- 931 nodes · 1067 edges · 49 communities (19 shown, 29 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 23 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `669f85cd`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- TaskEvent.ts
- prismaNamespace.ts
- models/User.ts
- models/Task.ts
- CreateTaskForm.tsx
- commonInputTypes.ts
- package.json
- index.ts
- TaskFlow
- TaskFlow Design System v1.0
- prismaNamespaceBrowser.ts
- compilerOptions
- PrismaClient
- dependencies
- TaskDelegate
- TaskEventDelegate
- UserDelegate
- devDependencies
- Decision: organize src/ by responsibility
- Prisma__TaskEventClient
- Prisma__UserClient
- (dashboard)/layout.tsx
- Prisma__TaskClient
- next.config.mjs
- PrismaClientBaseOptions
- FASE 3 — Profesionalización (Auth, JWT, Roles)
- eslint.config.js
- postcss.config.mjs
- Commit message conventions
- Naming conventions (folders, components, functions, constants)
- Decision: use React with TypeScript from the start
- FASE 4 — Calidad (Testing, Lint, Prettier)
- FASE 5 — Deploy
- Greeting Checklist Tablet Photo
- Bg-img.png (Background Gradient Image)
- TaskFlow Logo (Brand Mark)
- Sprint 0 — Pre-migration cleanup
- Sprint 1 — Migration to Next.js
- Sprint 2 — PostgreSQL + Prisma
- Sprint 3 — Real CRUD
- Sprint 4 — Authentication
- Sprint 5 — Drag & drop
- Sprint 6 — Metrics + AI summary
- Sprint 7 — Deployment + polish
- Sprint 8 — Documentation
- seed.ts
- scripts
- app/layout.tsx

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 22 edges
2. `TaskDelegate` - 18 edges
3. `TaskEventDelegate` - 18 edges
4. `UserDelegate` - 18 edges
5. `Task` - 16 edges
6. `PrismaClient` - 13 edges
7. `User` - 13 edges
8. `TaskFlow` - 12 edges
9. `TaskFlow Design System v1.0` - 11 edges
10. `Decision: organize src/ by responsibility` - 9 edges

## Surprising Connections (you probably didn't know these)
- `FastAPI` --semantically_similar_to--> `Next.js (App Router)`  [AMBIGUOUS] [semantically similar]
  docs/proyect_roadmap_.md → README.md
- `PostgreSQL` --semantically_similar_to--> `PostgreSQL`  [INFERRED] [semantically similar]
  docs/proyect_roadmap_.md → README.md
- `Sprint 3 — Dominio y modelo de datos` --semantically_similar_to--> `Task (domain model)`  [INFERRED] [semantically similar]
  docs/proyect_roadmap_.md → README.md
- `Sprint 3 — Dominio y modelo de datos` --semantically_similar_to--> `User (domain model)`  [INFERRED] [semantically similar]
  docs/proyect_roadmap_.md → README.md
- `FASE 2 — Backend` --conceptually_related_to--> `Next.js (App Router)`  [AMBIGUOUS]
  docs/proyect_roadmap_.md → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Original FastAPI backend phase (superseded plan)** — docs_proyect_roadmap__fase2_backend, docs_proyect_roadmap__sprint6_fastapi, docs_proyect_roadmap__sprint7_dominio_backend, docs_proyect_roadmap__sprint8_crud_backend, docs_proyect_roadmap__fastapi, docs_proyect_roadmap__sqlalchemy, docs_proyect_roadmap__pydantic [EXTRACTED 0.85]
- **TaskFlow Sprint Roadmap (Sprints 0-8)** — readme_sprint0, readme_sprint1, readme_sprint2, readme_sprint3, readme_sprint4, readme_sprint5, readme_sprint6, readme_sprint7, readme_sprint8 [EXTRACTED 0.90]
- **Project folder structure convention (src organization)** — docs_decisiones_tecnicas_organizacion_src, docs_estructura_carpetas_components, docs_estructura_carpetas_pages, docs_estructura_carpetas_services, docs_estructura_carpetas_hooks, docs_estructura_carpetas_types, docs_estructura_carpetas_utils, docs_estructura_carpetas_layouts, docs_estructura_carpetas_routes, docs_estructura_carpetas_assets, docs_estructura_carpetas_mocks [INFERRED 0.85]

## Communities (49 total, 29 thin omitted)

### Community 0 - "TaskEvent.ts"
Cohesion: 0.02
Nodes (123): AggregateTaskEvent, EnumTaskEventTypeFieldUpdateOperationsInput, GetTaskEventAggregateType, GetTaskEventGroupByPayload, NullableEnumStatusFieldUpdateOperationsInput, TaskEvent$actorArgs, TaskEvent$fromAssigneeArgs, TaskEvent$toAssigneeArgs (+115 more)

### Community 1 - "prismaNamespace.ts"
Cohesion: 0.02
Nodes (117): AnyNull, Args, At, AtLeast, AtLoose, AtStrict, BatchPayload, Boolean (+109 more)

### Community 2 - "models/User.ts"
Cohesion: 0.02
Nodes (105): AggregateUser, EnumRoleFieldUpdateOperationsInput, GetUserAggregateType, GetUserGroupByPayload, StringFieldUpdateOperationsInput, User$actedTaskEventsArgs, User$assignedTasksArgs, User$fromAssigneeTaskEventsArgs (+97 more)

### Community 3 - "models/Task.ts"
Cohesion: 0.02
Nodes (94): AggregateTask, DateTimeFieldUpdateOperationsInput, EnumStatusFieldUpdateOperationsInput, GetTaskAggregateType, GetTaskGroupByPayload, NullableDateTimeFieldUpdateOperationsInput, NullableEnumPriorityFieldUpdateOperationsInput, NullableStringFieldUpdateOperationsInput (+86 more)

### Community 4 - "CreateTaskForm.tsx"
Cohesion: 0.08
Nodes (45): react, Page(), AddTaskButton(), AddTaskButtonProp, Greeting(), propsGreting, KanbanBoard(), kanbanBoardProps (+37 more)

### Community 5 - "commonInputTypes.ts"
Cohesion: 0.04
Nodes (47): DateTimeFilter, DateTimeNullableFilter, DateTimeNullableWithAggregatesFilter, DateTimeWithAggregatesFilter, EnumPriorityNullableFilter, EnumPriorityNullableWithAggregatesFilter, EnumRoleFilter, EnumRoleWithAggregatesFilter (+39 more)

### Community 6 - "package.json"
Cohesion: 0.07
Nodes (26): name, private, type, version, bcryptjs, eslint, eslint-config-next, @eslint/js (+18 more)

### Community 7 - "index.ts"
Cohesion: 0.09
Nodes (21): About(), concepts, CtaSection(), Features, Footer(), Hero(), HowItWorks(), steps (+13 more)

### Community 8 - "TaskFlow"
Cohesion: 0.07
Nodes (34): Decision: separate frontend/backend into independent apps, Decision: start with native fetch over Axios, Decision: use createBrowserRouter over BrowserRouter+Routes, Axios, FASE 2 — Backend, FASE 6 — Marca personal, FastAPI, fetch() (+26 more)

### Community 9 - "TaskFlow Design System v1.0"
Cohesion: 0.07
Nodes (32): Border radius system (rounded-xl/rounded-2xl), TaskFlow Design System v1.0, Grayscale palette (slate-900/800/700), Iconography (Heroicons), Primary brand color (purple-600), Priority colors (Alta/Media/Baja), Shadow system (shadow-lg/shadow-xl), Spacing scale (p-6/gap-4/gap-2) (+24 more)

### Community 10 - "prismaNamespaceBrowser.ts"
Cohesion: 0.08
Nodes (21): $Enums, Task, TaskEvent, User, Priority, Role, Status, TaskEventType (+13 more)

### Community 11 - "compilerOptions"
Cohesion: 0.08
Nodes (24): compilerOptions, allowJs, esModuleInterop, exactOptionalPropertyTypes, forceConsistentCasingInFileNames, incremental, isolatedModules, jsx (+16 more)

### Community 12 - "PrismaClient"
Cohesion: 0.07
Nodes (12): @prisma/adapter-neon, adapter, globalForPrisma, $Enums, PrismaClient, Task, TaskEvent, User (+4 more)

### Community 13 - "dependencies"
Cohesion: 0.14
Nodes (14): dependencies, bcryptjs, @fortawesome/free-regular-svg-icons, @fortawesome/react-fontawesome, @heroicons/react, next, postcss, @prisma/adapter-neon (+6 more)

### Community 17 - "devDependencies"
Cohesion: 0.14
Nodes (14): devDependencies, eslint, eslint-config-next, @eslint/js, eslint-plugin-react-hooks, globals, prisma, tsx (+6 more)

### Community 18 - "Decision: organize src/ by responsibility"
Cohesion: 0.20
Nodes (10): Decision: organize src/ by responsibility, assets/ — images, icons, etc., components/ — reusable components, hooks/ — custom hooks, layouts/ — common visual structure, pages/ — full screens, routes/ — navigation configuration, services/ — API calls (+2 more)

### Community 24 - "PrismaClientBaseOptions"
Cohesion: 0.67
Nodes (3): PrismaClientBaseOptions, PrismaClientOptionsWithAccelerateUrl, PrismaClientOptionsWithAdapter

### Community 46 - "seed.ts"
Cohesion: 0.31
Nodes (8): main(), seedTasks(), seedUsers(), uuid, deadline, mockTasks, today, users

### Community 47 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

## Ambiguous Edges - Review These
- `FASE 2 — Backend` → `Next.js (App Router)`  [AMBIGUOUS]
  docs/proyect_roadmap_.md · relation: conceptually_related_to
- `FastAPI` → `Next.js (App Router)`  [AMBIGUOUS]
  docs/proyect_roadmap_.md · relation: semantically_similar_to

## Knowledge Gaps
- **678 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+673 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 775 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **29 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `FASE 2 — Backend` and `Next.js (App Router)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `FastAPI` and `Next.js (App Router)`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **Why does `@prisma/adapter-neon` connect `PrismaClient` to `package.json`?**
  _High betweenness centrality (0.092) - this node is a cross-community bridge._
- **Why does `TaskDelegate` connect `TaskDelegate` to `models/Task.ts`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `TaskEventDelegate` connect `TaskEventDelegate` to `TaskEvent.ts`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _678 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TaskEvent.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.016129032258064516 - nodes in this community are weakly interconnected._