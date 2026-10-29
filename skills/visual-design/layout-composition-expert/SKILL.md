---
name: layout-composition-expert
description: "Designs layout systems, grids, spacing, and responsive composition."
version: "0.1.0"
group: "visual-design"
license: "MIT"
---

# layout-composition-expert

Define layout, grid, and spacing systems.

## Activation conditions

Use this skill when the task involves designs layout systems, grids, spacing, and responsive composition, or when the orchestrator selects it based on the capability registry.

## Responsibilities

- Choose grid
- Define spacing scale
- Plan responsive breakpoints
- Validate reflow

## Required inputs

- Content
- Viewport targets

## Optional inputs

- Existing artifacts, constraints, and preferences.

## Outputs

- Layout spec
- Grid tokens
- Responsive rules

## Procedure

1. Clarify the objective and scope.
2. Gather required inputs; record assumptions.
3. Execute the responsibilities above.
4. Cross-check against quality gates.
5. Return structured output distinguishing facts, assumptions, hypotheses, recommendations, and unresolved questions.

## Decision criteria

- Prefer evidence over assumption.
- Prefer the smallest useful change.
- Preserve existing behavior unless change is requested.

## Quality requirements

- Output must be actionable and traceable.
- Label placeholders and unverified claims.

## Constraints and prohibited assumptions

- Do not invent data, quotes, or metrics.
- Do not claim tests were run unless executed.

## Failure handling

- If inputs are missing, request them or proceed with labeled assumptions.
- If blocked, report blocker and partial results.

## Validation

- Verify outputs against the relevant gate in docs/evaluation-methodology.md.

## References

- (none)

## Provenance

Original VC_Experience_Agents capability. License: MIT.

## Test cases

1. Given minimal inputs, produces labeled assumptions and a plan.
2. Given conflicting constraints, reports trade-offs.
