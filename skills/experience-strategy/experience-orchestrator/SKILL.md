---
name: experience-orchestrator
description: "Master orchestrator for the VC experience ecosystem. Routes requests, coordinates specialists, consolidates deliverables."
version: "0.1.0"
group: "experience-strategy"
license: "MIT"
---

# experience-orchestrator

Coordinate multi-specialist experience work with explicit routing, shared context, conflict detection, and consolidated output.

## Activation conditions

Use this skill when the task involves master orchestrator for the vc experience ecosystem. routes requests, coordinates specialists, consolidates deliverables, or when the orchestrator selects it based on the capability registry.

## Responsibilities

- Understand user request and product context
- Identify missing information
- Select specialist skills via capability registry
- Establish task plan and delegate
- Consolidate deliverables and report assumptions/limitations

## Required inputs

- User request
- Product context
- Existing artifacts

## Optional inputs

- Existing artifacts, constraints, and preferences.

## Outputs

- Task plan
- Delegation map
- Consolidated deliverable
- Assumptions and limitations

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

- docs/architecture.md

## Provenance

Original VC_Experience_Agents capability. License: MIT.

## Test cases

1. Given minimal inputs, produces labeled assumptions and a plan.
2. Given conflicting constraints, reports trade-offs.
