# Architecture

VC_Experience_Agents is a Markdown-skill ecosystem with a Node-based validation/CLI layer.

## Components
- `skills/` - 43 specialist skill definitions grouped by capability.
- `agents/` - agent group definitions and orchestrator spec.
- `resources/` - registry sources, skill catalog, source index.
- `schemas/` - JSON schemas for skill and catalog.
- `tools/` - CLI and validation.
- `tests/` - tests.
- `workflows/` - workflow guides.
- `docs/` - documentation.

## Orchestration
Master orchestrator routes minimal specialist set. See agents/orchestrator/ORCHESTRATOR.md.

## Interoperability
Standard Agent Skills SKILL.md format. Vendor-specific adapters in tools/adapters.
