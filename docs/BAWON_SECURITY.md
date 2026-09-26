# BAWON+ security baseline

## Current audit

- No authentication or API/database code is tracked, so RBAC and data isolation do not yet exist.
- The existing home page contains demo alerts and inactive form behaviour; it must not represent collection of submissions or investment/payment capability.
- No environment files or Vercel configuration are tracked. An externally configured integration cannot be inferred absent from the repository.

## Required before private data or finance is enabled

- Server-side authentication and organisation-scoped RBAC; default-deny authorization tests.
- Private document storage, signed short-lived access, MIME/content validation, size limits and malware scanning policy.
- Server validation, CSRF protection for cookie sessions, strict CORS, rate limiting and audit logging.
- CSP, security headers, secrets only on the server, dependency review, backup/restore test and incident contacts.
- Verified legal/compliance review for donations, financing, investments, payment processing and any Web3 use.

Finance and Web3 flags are disabled by default. They cannot be enabled by a client request.
