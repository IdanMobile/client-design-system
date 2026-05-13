# GUING Integration Guide

- Execution ID: `2026-05-13T13-33-09-894Z`
- Repository: `IdanMobile/client-design-system`
- Branch: `guing/publish-2026-05-13-189314`
- Apply mode: `apply`

## What was generated
- Component files under `src/components/`
- Storybook stories under `stories/`
- Token stylesheet `src/tokens.css`
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