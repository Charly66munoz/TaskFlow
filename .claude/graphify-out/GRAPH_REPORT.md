# Graph Report - frontend  (2026-09-17)

## Corpus Check
- 40 files · ~87,276 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .example 1, (none) 1, .css 1)

## Summary
- 262 nodes · 330 edges · 16 communities (10 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6843cd97`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Task
- index.ts
- package.json
- posicionamiento.md
- colors.md
- Sprint 1 - Día 1
- compilerOptions
- dependencies
- devDependencies
- TaskFlow
- (dashboard)/layout.tsx
- next.config.mjs
- eslint.config.js
- postcss.config.mjs

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 21 edges
2. `Task` - 16 edges
3. `TaskFlow` - 9 edges
4. `Sprint 1 - Día 1` - 8 edges
5. `SectionTitle()` - 6 edges
6. `scripts` - 5 edges
7. `taskStatus` - 5 edges
8. `Escala de Grises` - 5 edges
9. `Estados` - 5 edges
10. `Convenciones` - 5 edges

## Surprising Connections (you probably didn't know these)
- `AddTaskButtonProp` --references--> `Task`  [EXTRACTED]
  src/components/dashboard/AddTaskButton.tsx → src/types/entity/Task.ts
- `propKanbanColum` --references--> `Task`  [EXTRACTED]
  src/components/dashboard/KanbanColumn.tsx → src/types/entity/Task.ts
- `CreateTaskFormProp` --references--> `Task`  [EXTRACTED]
  src/components/task/CreateTaskForm.tsx → src/types/entity/Task.ts
- `TaskCardProp` --references--> `Task`  [EXTRACTED]
  src/components/task/TaskCard.tsx → src/types/entity/Task.ts
- `propsGreting` --references--> `Task`  [EXTRACTED]
  src/components/dashboard/Greeting.tsx → src/types/entity/Task.ts

## Import Cycles
- None detected.

## Communities (16 total, 4 thin omitted)

### Community 0 - "Task"
Cohesion: 0.10
Nodes (28): @fortawesome/free-regular-svg-icons, @fortawesome/react-fontawesome, react, uuid, AddTaskButton(), AddTaskButtonProp, Greeting(), propsGreting (+20 more)

### Community 1 - "index.ts"
Cohesion: 0.10
Nodes (21): About(), concepts, CtaSection(), Features, Footer(), Hero(), HowItWorks(), steps (+13 more)

### Community 2 - "package.json"
Cohesion: 0.06
Nodes (29): name, private, scripts, build, dev, lint, start, type (+21 more)

### Community 3 - "posicionamiento.md"
Cohesion: 0.07
Nodes (26): 1. Position: static, 2. Position: relative, 3. Position: absolute, 4. Position: fixed, Absolute, Absolute, Absolute vs Fixed, Aplicación en TaskFlow (+18 more)

### Community 4 - "colors.md"
Cohesion: 0.08
Nodes (25): Bordes, Bordes, Cards, Colores de Marca, Error, Escala de Grises, Espaciado, Estados (+17 more)

### Community 5 - "Sprint 1 - Día 1"
Cohesion: 0.08
Nodes (25): Arquitectura del proyecto, Carpetas, COMMITS, Componentes, Constantes, Convenciones, Decisiones Técnicas - TaskFlow, Decisión (+17 more)

### Community 6 - "compilerOptions"
Cohesion: 0.08
Nodes (23): compilerOptions, allowJs, esModuleInterop, exactOptionalPropertyTypes, forceConsistentCasingInFileNames, incremental, isolatedModules, jsx (+15 more)

### Community 7 - "dependencies"
Cohesion: 0.15
Nodes (13): dependencies, @fortawesome/free-regular-svg-icons, @fortawesome/react-fontawesome, @heroicons/react, next, postcss, @prisma/adapter-neon, @prisma/client (+5 more)

### Community 8 - "devDependencies"
Cohesion: 0.17
Nodes (12): devDependencies, eslint, eslint-config-next, @eslint/js, eslint-plugin-react-hooks, globals, prisma, @types/node (+4 more)

### Community 9 - "TaskFlow"
Cohesion: 0.20
Nodes (9): Current Features, Current Migration, Getting Started, In process, Project Status, Roadmap, TaskFlow, Tech Stack (+1 more)

## Knowledge Gaps
- **151 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `private`, `version` (+146 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 162 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `react` connect `Task` to `package.json`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _151 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Task` be split into smaller, more focused modules?**
  _Cohesion score 0.1048780487804878 - nodes in this community are weakly interconnected._
- **Should `index.ts` be split into smaller, more focused modules?**
  _Cohesion score 0.10317460317460317 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.0625 - nodes in this community are weakly interconnected._