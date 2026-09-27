# Open-source inventory

No external repository code or assets have been copied into BAWON+ during this migration. Commit hashes and licence files must be re-verified immediately before any reuse; public visibility alone is not permission to copy.

| Repository | Status | Licence / reuse decision | Notes |
| --- | --- | --- | --- |
| `jiaamasum/crowdfunding-trading-platform-ctr` | Evaluated, architecture adapted | MIT, `LICENSE`, commit `cb1628c613f0d9ae6b7073b8dd8d5144a0eacb00` | Its public project/investor workflow informed BAWON demo spaces; no source file copied and no payment/auth code imported. |
| `amirulislambd/ZendaFund` | Rejected for code reuse | No explicit licence file found at verified commit `f21df96930f0d56226a80b49141f129ce92adc40` | No code or assets copied. Its Next 16 / React 19 / Stripe stack is also incompatible with the retained baseline. |
| `Sereja-dev/client-portal-crm` | Rejected for code reuse | No explicit licence file found at verified commit `d02a3956cc6fe8920cb158d66841f58e68b76dba` | No code or assets copied. |
| `supabase-community/partner-gallery-example` | Evaluated, pattern adapted | MIT, `LICENSE`, commit `bb5b36d2f39248d50669c15a3fe5049ab6989709` | The grouped partner-card presentation informed the BAWON demo partner directory; no source file copied and no obsolete Supabase dependency added. |
| `silicon-roundabout-ventures/roundabout-ventures-dashboard` | Not integrated | MIT with visible attribution requirement, `LICENSE`, commit `8efdde922000139165d589716f526ebb77b6675f` | No code copied, because BAWON would need visible Silicon Roundabout Ventures attribution for any reuse. |
| `magicuidesign/magicui` | Selectively integrated | MIT, `LICENSE.md`, commit `d7207e5692d14c00dceafa8488d6d01f197fa0e4` | Adapted only `apps/www/registry/magicui/orbiting-circles.tsx` into `components/OrbitingSatellites.jsx`; copyright and MIT notice retained in `docs/THIRD_PARTY_NOTICES.md`. No Magic UI dependency added. |
| `aceternity/aceternity-ui` | Pending | Not verified | No code copied. |
| `itsjwill/motion-primitives-website` | Rejected for code reuse | No explicit licence file found at verified commit `cff72d82aa48ecefba79d9ec5996f1eafe98e107` | No code or assets copied; concepts only are not an integration. |
| `pmndrs/react-three-next` | Evaluated, not integrated | MIT, `LICENSE`, commit `bb29a61949601e1c563688faf33a12d062ec3710` | Current project uses a lightweight DOM/CSS fallback. React Three Fiber/Three.js is deferred until a specific 3D scene justifies its added runtime weight. |
| `design-sparx/crowdup` | Rejected for code reuse | No explicit licence file found at verified commit `57c984beca3aedec91477ceacab9aa199567d960` | No code or assets copied. |
| `aceternity/aceternity-ui` | Not available for audit | Repository clone denied from the supplied URL on 2026-09-27 | No code or assets copied. |

For any accepted reuse, record: exact commit, licence text path, files imported, adaptations, copyright/attribution notice, dependencies and a security review. Concepts alone require no attribution but are not an integration.
