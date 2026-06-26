# AI Agent Guidance for ERS Portal

## Overview
This workspace contains two primary application projects:

- `backend/` — Spring Boot 4.1.0 application using Java 21, Spring Data JPA, Spring Web MVC, and MySQL runtime connectivity.
- `frontend/` — Angular 21 application using Angular CLI, TypeScript, and Vitest for unit tests.

Ignore the `ers-portal.worktrees/` directory unless explicitly asked to inspect Git worktree configuration or branch-specific experimental files.

## Build and Run

### Backend
- Build and test: `./mvnw test`
- Run application: `./mvnw spring-boot:run`
- Key config files: `backend/pom.xml`, `backend/src/main/resources/application.properties`

### Frontend
- Start dev server: `npm start` (from `frontend/`)
- Build: `npm run build` (from `frontend/`)
- Unit tests: `npm test` (from `frontend/`)
- Key config files: `frontend/package.json`, `frontend/src/app/`, `frontend/angular.json`

## Project Conventions
- Backend entities, controllers, repositories, and services are located under `backend/src/main/java/com/example/`.
- Frontend views, features, and services live under `frontend/src/app/`.
- Use the existing frontend and backend documentation before adding large or duplicate guidance:
  - `frontend/README.md`
  - `backend/HELP.md`

## Best matches for tasks
- For Spring Boot or Java work, focus on `backend/` and use Maven wrapper commands.
- For UI, routing, forms, and Angular logic, focus on `frontend/`.
- Do not assume there is a mono-repo build integration at the workspace root; treat backend and frontend as separate projects.

## Notes
- `backend/pom.xml` contains empty `<license>` and `<developers>` entries to override inherited parent POM metadata.
- `frontend/package.json` indicates Angular CLI 21 and Vitest for unit testing.
- If changes require environment or dependency details, prefer inspecting the respective `pom.xml` or `package.json` files directly.
