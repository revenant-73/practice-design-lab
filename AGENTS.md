# Repository Guidelines

## Project Structure & Module Organization
This is a **React + Vite** course platform for **The Practice Design Lab**. The application is structured as a single-page interactive learning experience.

- **`.\src\screens\`**: Organized by module (e.g., `Module1`, `Module2`). Each screen is a standalone React component representing a single step in the course.
- **`.\src\store.js`**: Central state management using **Zustand**. Handles course progress, user ID, and the `activityUpgradePlan` data.
- **`.\src\db\`**: Database schema and configuration using **Drizzle ORM**.
- **`.\api\`**: Serverless functions (e.g., `sync.js`) for data persistence to **Turso (LibSQL)**.

The architecture follows a "One Screen, One Job" rule, where each screen focuses on a single teaching or interaction point.

## Build, Test, and Development Commands
The project uses `npm` for task execution:

- **`npm run dev`**: Starts the Vite development server.
- **`npm run build`**: Builds the production-ready application.
- **`npm run lint`**: Executes ESLint to check for code quality issues.
- **`npm run db:generate`**: Generates Drizzle migration files.
- **`npm run db:push`**: Pushes schema changes directly to the database.

## Coding Style & Naming Conventions
- **React Components**: Use `.jsx` extension. Follow functional component patterns with hooks.
- **Styling**: Uses **Tailwind CSS** for layout and design.
- **Linting**: Enforced via ESLint with `eslint-plugin-react` and `eslint-plugin-react-hooks`.
- **Database**: Drizzle ORM for schema definition and type-safe queries.

## Design Rules (from `.\the_practice_design_lab_course_design_rules.md`)
- **Interactivity**: Modules should feel like building something, not just reading.
- **Language**: Use plain coaching language; avoid academic/ecological jargon unless necessary.
- **Visuals**: Use "field-guide" inspired visuals (warm cream background, ink linework, teal highlights).

## Commit & Pull Request Guidelines
Commit messages should follow the **Conventional Commits** pattern seen in the repository history:
- `feat: <description>` for new features.
- `fix: <description>` for bug fixes.
- `chore: <description>` for maintenance tasks.
- Example: `feat: implement API sync for user progress`
