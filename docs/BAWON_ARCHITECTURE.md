# BAWON+ architecture

## Baseline

The repository is a Pages Router application using Next.js 14.2, React 18.3, Tailwind CSS 3.4 and Framer Motion 11. It has static public pages and image assets; it has no tracked API route, authentication, database client, CMS, payment integration, Vercel configuration, middleware or environment file.

## Preserve

- The existing Next.js/Tailwind/Framer Motion foundation.
- The dark, gold and violet BAWON identity and the existing image set.
- The public routes as redirects or evolved content, so existing links do not break.

## Target modules

1. **Core**: locale-aware public site, content, design tokens, access control and audit events.
2. **Projects**: organisation, project, lifecycle, needs, review, evidence and documents.
3. **Connect**: structured need-to-solution matching and connection tracking; never a consumer marketplace.
4. **Finance** (off): campaign, contribution, investment, payment-provider abstraction and milestone disbursement.
5. **Web3** (off): optional, non-custodial traceability adapter. No token, key custody or wallet transaction is enabled.

## Public truth model

Public content is publishable only after review. `project`, `relationship` and `activity` are separate records. A relationship has a type such as `owned_by_bawon`, `funded`, `supported` or `accompanied`; only an evidence-backed `owned_by_bawon` relation may be displayed as a BAWON participation.

## Application boundaries

Future write actions belong in server-side API routes or server actions with server-side role checks. Client-only feature flags are presentation controls, never authorisation. Documents use private storage and signed access. No secret, payment data, seed phrase or private key is shipped to the browser.
