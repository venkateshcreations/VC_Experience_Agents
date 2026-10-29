# VC_Experience_Agents

VC Experience Intelligence & Design Engineering Agents: an open-source, modular multi-agent ecosystem that helps AI coding agents perform the work of a coordinated experience-design and engineering team.

## Purpose

Support the full experience lifecycle: product discovery, UX research, experience strategy, information architecture, interaction design, visual design, design systems, frontend implementation, accessibility, validation, and continuous improvement. Works for new products and existing-product audits. No paid design tools required.

## Status

Initial implementation. 40 specialist skill definitions, a master orchestrator specification, skill catalog, validation tooling, and documentation. Runtime multi-agent execution is specified; adapters are provided as documented fallbacks.

## Quick start

```sh
npm install
npm run validate
npm run test
```

Commands (implemented):

- `npm run list` — list skills
- `npm run search -- "design systems"` — search catalog
- `npm run inspect -- design-system-architect` — inspect a skill
- `npm run validate` — validate skill structure and catalog
- `npm run test` — run tests

CLI (when installed globally): `vc-experience list|search|inspect|validate|test`.

## Repository structure

See `docs/architecture.md`.

## Open source

Core is MIT-licensed. Optional integrations (local/cloud model providers) are kept in `tools/adapters` and are not required. See `docs/licensing-policy.md`.

## Contributing

See `CONTRIBUTING.md`.
