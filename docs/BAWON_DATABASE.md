# BAWON+ data model (design, not deployed)

No database migration has been executed. The following is the minimum coherent model for a future production database.

| Area | Core records | Notes |
| --- | --- | --- |
| Identity | users, profiles, organisations, organisation_memberships, roles | Roles are `visitor`, `member`, `project_owner`, `donor`, `investor`, `mentor`, `expert`, `partner`, `advisor`, `moderator`, `admin`, `super_admin`. |
| Projects | projects, project_stages, project_needs, project_documents, project_reviews | Lifecycle: `draft`, `submitted`, `under_review`, `changes_requested`, `approved`, `rejected`, `published`, `fundraising`, `funded`, `in_progress`, `completed`, `suspended`. |
| Relationships | bawon_relationships, relationship_evidence | Separates ownership/participation from funding, support and accompaniment. |
| Connect | connections, connection_participants, connection_decisions, connection_outcomes | Matches a need to a verified solution and records the result. |
| Finance | campaigns, contributions, investments, milestones, disbursements, transactions | Kept disabled until a provider, legal basis and controls are approved. Amounts retain their original currency. |
| Operations | partners, news_items, messages, tasks, contracts, notifications, audit_events | Public news stores author, date, category, source and publication state. |

Every tenant-owned record needs organisation scoping. If Supabase is selected, Row Level Security must default to deny and grants must be tested for every role.
