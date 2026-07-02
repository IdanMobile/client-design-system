# Vendored: visual-gate CLI

This is a **vendored copy** of the visual-gate pixel-diff CLI, kept here so each
tenant's `visual-gate.yml` CI is self-contained (no clone of the private
`design-system-brain` repo, no token required).

- **Upstream source of truth:** `server/brain-packages/visual-gate/`
- **Emitted into tenant repos** by `server/functions/src/services/template-builder.ts`
  (`readPlaygroundDir(".guing/visual-gate")`) → committed at `.guing/visual-gate/`.
- The CI workflow runs it from the repo root:
  `node --experimental-strip-types .guing/visual-gate/src/cli.ts ...`

If you change the upstream CLI, re-copy `src/` + `package.json` here so new
scaffolds/syncs pick up the update.
