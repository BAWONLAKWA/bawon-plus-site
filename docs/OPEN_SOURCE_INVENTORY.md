# Open-source inventory

No external repository code or assets have been copied into BAWON+ during this migration. Commit hashes and licence files must be re-verified immediately before any reuse; public visibility alone is not permission to copy.

| Repository | Status | Licence / reuse decision | Notes |
| --- | --- | --- | --- |
| `jiaamasum/crowdfunding-trading-platform-ctr` | Studied as a concept | README search result reports MIT; no code copied | Architecture ideas only. Verify exact commit and `LICENSE` before reuse. |
| `amirulislambd/ZendaFund` | Not integrated | Licence needs direct file verification | Different modern stack and payment/auth choices; no wholesale import. |
| `Sereja-dev/client-portal-crm` | Not integrated | Licence needs direct file verification | Useful CRM reference only; no code copied. |
| `supabase-community/partner-gallery-example` | Studied as a concept | MIT reported by repository and licence page | Consider patterns only until exact commit is pinned. |
| `silicon-roundabout-ventures/roundabout-ventures-dashboard` | Pending | Not verified | No code copied. |
| `magicuidesign/magicui` | Selectively integrated | MIT, `LICENSE.md`, commit `d7207e5692d14c00dceafa8488d6d01f197fa0e4` | Adapted only `apps/www/registry/magicui/orbiting-circles.tsx` into `components/OrbitingSatellites.jsx`; copyright and MIT notice retained in `docs/THIRD_PARTY_NOTICES.md`. No Magic UI dependency added. |
| `aceternity/aceternity-ui` | Pending | Not verified | No code copied. |
| `itsjwill/motion-primitives-website` | Rejected for code reuse | No explicit licence file found at verified commit `cff72d82aa48ecefba79d9ec5996f1eafe98e107` | No code or assets copied; concepts only are not an integration. |
| `pmndrs/react-three-next` | Evaluated, not integrated | MIT, `LICENSE`, commit `bb29a61949601e1c563688faf33a12d062ec3710` | Current project uses a lightweight DOM/CSS fallback. React Three Fiber/Three.js is deferred until a specific 3D scene justifies its added runtime weight. |
| `design-sparx/crowdup` | Pending | Not verified | No code copied. |

For any accepted reuse, record: exact commit, licence text path, files imported, adaptations, copyright/attribution notice, dependencies and a security review. Concepts alone require no attribution but are not an integration.
