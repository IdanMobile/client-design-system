# GUING Integration Guide

- Execution ID: `2026-05-13T12-49-23-602Z`
- Repository: `IdanMobile/client-design-system`
- Branch: `guing/publish-2026-05-13-562893`
- Apply mode: `scaffold`

## What was generated
- Component files under `guing-generated/src/components/`
- Storybook stories under `guing-generated/stories/`
- Token stylesheet `guing-generated/src/tokens.css`
- Package + tsconfig + Storybook configs + CI workflow scaffolds

## Suggested adopt steps
1. Review generated component/story files and align naming/props to repo conventions.
2. Map generated tokens to your existing design token pipeline.
3. Merge or copy `.storybook` entries into your repo's canonical Storybook config.
4. Wire CI workflow to your preferred job structure and publish policy.
5. Keep `.guing/publish-requests/LATEST.json` for traceability.

## Safety notes
- This PR is non-destructive and intended for human review.
- Generated outputs are scaffolds and may require project-specific refinement.