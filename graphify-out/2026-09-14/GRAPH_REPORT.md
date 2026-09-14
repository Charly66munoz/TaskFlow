# Graph Report - frontend  (2026-09-14)

## Corpus Check
- 66 files · ~116,172 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 7 file(s) not represented in the graph (top: .example 1, (none) 1, .toml 1)

## Summary
- 927 nodes · 1088 edges · 46 communities (17 shown, 28 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 23 edges (avg confidence: 0.88)
- Token cost: 270,888 input · 0 output

## Community Hubs (Navigation)
- TaskEvent Prisma Types
- Prisma Runtime Namespace
- User Prisma Types
- Task Prisma Types
- Dashboard App & Task Form
- Prisma Common Input Filters
- Package Dependencies
- Landing Page Components
- Tech Decisions vs Old Roadmap
- Design System Colors
- DB Seed & Client Setup
- TypeScript Config
- Prisma Query Compiler WASM
- Prisma Browser Client
- Task Delegate (Prisma CRUD)
- TaskEvent Delegate (Prisma CRUD)
- User Delegate (Prisma CRUD)
- Dev Dependencies
- Folder Structure Conventions
- TaskEvent Client Relations
- User Client Relations
- App Layout, Header & Sidebar
- Task Client Relations
- Next.js Config
- Prisma Client Options Types
- Old Roadmap: JWT Phase
- ESLint Config
- PostCSS Config
- Commit Conventions
- Naming Conventions
- React + TypeScript Decision
- Old Roadmap: Quality Phase
- Old Roadmap: Deploy Phase
- Greeting Background Image
- Landing Background Image
- TaskFlow Logo
- Sprint 0 Milestone
- Sprint 1 Milestone
- Sprint 2 Milestone
- Sprint 3 Milestone
- Sprint 4 Milestone
- Sprint 5 Milestone
- Sprint 6 Milestone
- Sprint 7 Milestone
- Sprint 8 Milestone

## God Nodes (most connected - your core abstractions)
1. `Task` - 25 edges
2. `compilerOptions` - 21 edges
3. `User` - 20 edges
4. `TaskDelegate` - 18 edges
5. `TaskEventDelegate` - 18 edges
6. `UserDelegate` - 18 edges
7. `PrismaClient` - 13 edges
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
- `Decision: separate frontend/backend into independent apps` --conceptually_related_to--> `TaskFlow`  [INFERRED]
  docs/decisiones_tecnicas.md → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **TaskFlow Sprint Roadmap (Sprints 0-8)** — readme_sprint0, readme_sprint1, readme_sprint2, readme_sprint3, readme_sprint4, readme_sprint5, readme_sprint6, readme_sprint7, readme_sprint8 [EXTRACTED 0.90]
- **Project folder structure convention (src organization)** — docs_decisiones_tecnicas_organizacion_src, docs_estructura_carpetas_components, docs_estructura_carpetas_pages, docs_estructura_carpetas_services, docs_estructura_carpetas_hooks, docs_estructura_carpetas_types, docs_estructura_carpetas_utils, docs_estructura_carpetas_layouts, docs_estructura_carpetas_routes, docs_estructura_carpetas_assets, docs_estructura_carpetas_mocks [INFERRED 0.85]
- **Original FastAPI backend phase (superseded plan)** — docs_proyect_roadmap__fase2_backend, docs_proyect_roadmap__sprint6_fastapi, docs_proyect_roadmap__sprint7_dominio_backend, docs_proyect_roadmap__sprint8_crud_backend, docs_proyect_roadmap__fastapi, docs_proyect_roadmap__sqlalchemy, docs_proyect_roadmap__pydantic [EXTRACTED 0.85]

## Communities (46 total, 28 thin omitted)

### Community 0 - "TaskEvent Prisma Types"
Cohesion: 0.02
Nodes (123): AggregateTaskEvent, EnumTaskEventTypeFieldUpdateOperationsInput, GetTaskEventAggregateType, GetTaskEventGroupByPayload, NullableEnumStatusFieldUpdateOperationsInput, TaskEvent$actorArgs, TaskEvent$fromAssigneeArgs, TaskEvent$toAssigneeArgs (+115 more)

### Community 1 - "Prisma Runtime Namespace"
Cohesion: 0.02
Nodes (117): AnyNull, Args, At, AtLeast, AtLoose, AtStrict, BatchPayload, Boolean (+109 more)

### Community 2 - "User Prisma Types"
Cohesion: 0.02
Nodes (105): AggregateUser, EnumRoleFieldUpdateOperationsInput, GetUserAggregateType, GetUserGroupByPayload, StringFieldUpdateOperationsInput, User$actedTaskEventsArgs, User$assignedTasksArgs, User$fromAssigneeTaskEventsArgs (+97 more)

### Community 3 - "Task Prisma Types"
Cohesion: 0.02
Nodes (94): AggregateTask, DateTimeFieldUpdateOperationsInput, EnumStatusFieldUpdateOperationsInput, GetTaskAggregateType, GetTaskGroupByPayload, NullableDateTimeFieldUpdateOperationsInput, NullableEnumPriorityFieldUpdateOperationsInput, NullableStringFieldUpdateOperationsInput (+86 more)

### Community 4 - "Dashboard App & Task Form"
Cohesion: 0.10
Nodes (44): react, Page(), AddTaskButton(), AddTaskButtonProp, Greeting(), propsGreting, KanbanBoard(), kanbanBoardProps (+36 more)

### Community 5 - "Prisma Common Input Filters"
Cohesion: 0.04
Nodes (47): DateTimeFilter, DateTimeNullableFilter, DateTimeNullableWithAggregatesFilter, DateTimeWithAggregatesFilter, EnumPriorityNullableFilter, EnumPriorityNullableWithAggregatesFilter, EnumRoleFilter, EnumRoleWithAggregatesFilter (+39 more)

### Community 6 - "Package Dependencies"
Cohesion: 0.04
Nodes (44): dependencies, @fortawesome/free-regular-svg-icons, @fortawesome/react-fontawesome, @heroicons/react, next, postcss, @prisma/adapter-neon, @prisma/client (+36 more)

### Community 7 - "Landing Page Components"
Cohesion: 0.10
Nodes (21): About(), concepts, CtaSection(), Features, Footer(), Hero(), HowItWorks(), steps (+13 more)

### Community 8 - "Tech Decisions vs Old Roadmap"
Cohesion: 0.07
Nodes (34): Decision: separate frontend/backend into independent apps, Decision: start with native fetch over Axios, Decision: use createBrowserRouter over BrowserRouter+Routes, Axios, FASE 2 — Backend, FASE 6 — Marca personal, FastAPI, fetch() (+26 more)

### Community 9 - "Design System Colors"
Cohesion: 0.07
Nodes (32): Border radius system (rounded-xl/rounded-2xl), TaskFlow Design System v1.0, Grayscale palette (slate-900/800/700), Iconography (Heroicons), Primary brand color (purple-600), Priority colors (Alta/Media/Baja), Shadow system (shadow-lg/shadow-xl), Spacing scale (p-6/gap-4/gap-2) (+24 more)

### Community 10 - "DB Seed & Client Setup"
Cohesion: 0.10
Nodes (20): main(), seedTasks(), seedUsers(), @prisma/adapter-neon, uuid, adapter, globalForPrisma, $Enums (+12 more)

### Community 11 - "TypeScript Config"
Cohesion: 0.08
Nodes (23): compilerOptions, allowJs, esModuleInterop, exactOptionalPropertyTypes, forceConsistentCasingInFileNames, incremental, isolatedModules, jsx (+15 more)

### Community 12 - "Prisma Query Compiler WASM"
Cohesion: 0.10
Nodes (4): config, LogOptions, PrismaClient, PrismaClientConstructor

### Community 13 - "Prisma Browser Client"
Cohesion: 0.10
Nodes (17): $Enums, Task, TaskEvent, User, AnyNull, DbNull, Decimal, JsonNull (+9 more)

### Community 17 - "Dev Dependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, @eslint/js, eslint-plugin-react-hooks, globals, prisma, tsx (+5 more)

### Community 18 - "Folder Structure Conventions"
Cohesion: 0.20
Nodes (10): Decision: organize src/ by responsibility, assets/ — images, icons, etc., components/ — reusable components, hooks/ — custom hooks, layouts/ — common visual structure, pages/ — full screens, routes/ — navigation configuration, services/ — API calls (+2 more)

### Community 24 - "Prisma Client Options Types"
Cohesion: 0.67
Nodes (3): PrismaClientBaseOptions, PrismaClientOptionsWithAccelerateUrl, PrismaClientOptionsWithAdapter

## Ambiguous Edges - Review These
- `Next.js (App Router)` → `FASE 2 — Backend`  [AMBIGUOUS]
  docs/proyect_roadmap_.md · relation: conceptually_related_to
- `Next.js (App Router)` → `FastAPI`  [AMBIGUOUS]
  docs/proyect_roadmap_.md · relation: semantically_similar_to

## Knowledge Gaps
- **663 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `private`, `version` (+658 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 762 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **28 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Next.js (App Router)` and `FASE 2 — Backend`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Next.js (App Router)` and `FastAPI`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **Why does `@prisma/adapter-neon` connect `DB Seed & Client Setup` to `Package Dependencies`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **Why does `Task` connect `Dashboard App & Task Form` to `DB Seed & Client Setup`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `TaskDelegate` connect `Task Delegate (Prisma CRUD)` to `Task Prisma Types`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _663 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TaskEvent Prisma Types` be split into smaller, more focused modules?**
  _Cohesion score 0.016129032258064516 - nodes in this community are weakly interconnected._