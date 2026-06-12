# .guing/ — Guing AI Merge Artifacts

This directory is maintained by the [guing](https://guing.app) AI pipeline.

## baselines/

Each `<ComponentName>.tsx` file is a snapshot of the last machine-generated version
of that component. On re-sync, guing uses these as the **base** for 3-way merging:

```
base   = .guing/baselines/<Name>.tsx  (last generated)
ours   = current <Name>.tsx in repo   (may have developer edits)
theirs = new generation from AI
```

**Do not edit or delete baseline files manually** — guing uses them to detect
and preserve your local edits. Delete a baseline to force a full overwrite on
the next sync.

## @guing:locked

Add `// @guing:locked` anywhere in a component file to exclude it from
AI regeneration entirely. guing will read this marker on every sync and skip
that component. Remove the marker to re-enable generation.
