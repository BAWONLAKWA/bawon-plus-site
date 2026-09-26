# BAWON+ migration log

## Lot 0 — baseline and restore point (2026-09-27)

- Remote `main` inspected: `0c60b30d4d1106687baac3189938c853e54e4d3f` — `Update symbols in IntroHero component`.
- Local restore tag created: `bawon-pre-migration-2026-09-27` -> `0c60b30d4d1106687baac3189938c853e54e4d3f`.
- Remote read access: verified with `git ls-remote`.
- Remote write access: blocked. A tag push was attempted and Git returned `could not read Username for 'https://github.com': No such device or address`.
- No remote GitHub or Vercel publication has occurred in this migration.
- A `bawon-main-migration.patch` was not present in this workspace when this log was created. It must be reviewed with `git apply --check` against the then-current `main` before application.

## Lot 1 — audit and architecture baseline (2026-09-27)

- Sources: local repository at the baseline SHA; public repository metadata only for the open-source inventory.
- Important files audited: `package.json`, `pages/`, `components/`, `styles/globals.css`, `next.config.mjs`, public images.
- Findings and proposed target architecture are recorded in the companion documents in this directory.
- Migrations: none. No external service, database, payment provider, wallet, or production environment was contacted.
- Tests: pending dependency install and production build on the local baseline.
- Commit: `1c48fba3320ead5bff771a318088fd63fde7648e` — `docs: add BAWON migration architecture baseline`.

## Lot 2 — public navigation and truthful public states (2026-09-27)

- Replaced the former lifestyle-oriented home copy with BAWON+ financing, investment, accompaniment and connection positioning while retaining the existing hero asset and dark/gold/violet identity.
- Added public routes for the six core journeys, Bawon Connect and Actualités. They clearly state when a service is unavailable instead of simulating collection, investment, payment or publishing.
- Added reduced-motion support and keyboard focus states to the shared design classes.
- Files: `pages/index.js`, `pages/[slug].js`, `components/Header.jsx`, `styles/globals.css`.
- Tests: `npm run build` passed (16 static routes generated). `npm run lint` is not yet runnable non-interactively because the repository lacks an ESLint configuration and Next.js opens its setup prompt.
- Commit: `a6e168d7ad2ccf2c2550a0442c6249368b00c8c0` — `feat: add BAWON public journeys and truthful states`.

## Next safe step

Implement the public information architecture and replace misleading demo interactions with honest, usable routes. Authentication, database migrations, payments and Web3 remain intentionally disabled until their providers, data target, legal review and deployment configuration are confirmed.

## Validation update — ESLint (2026-09-27)

- Added the missing ESLint configuration using `next/core-web-vitals` and ignored generated local artifacts.
- Replaced legacy internal footer anchors with Next.js `Link` components.
- Tests: `npm run lint` passed with no warnings or errors; `npm run build` passed with 16 generated static routes.
- Commit: `1a7287262c7dce2bf002672712f8a82edcef9b76` — `chore: configure linting and ignore build artifacts`.
