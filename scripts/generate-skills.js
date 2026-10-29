const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');

const skills = [
 {group:'experience-strategy', dir:'experience-strategy', name:'experience-orchestrator', desc:'Master orchestrator for the VC experience ecosystem. Routes requests, coordinates specialists, consolidates deliverables.', purpose:'Coordinate multi-specialist experience work with explicit routing, shared context, conflict detection, and consolidated output.', activities:['Understand user request and product context','Identify missing information','Select specialist skills via capability registry','Establish task plan and delegate','Consolidate deliverables and report assumptions/limitations'], inputs:['User request','Product context','Existing artifacts'], outputs:['Task plan','Delegation map','Consolidated deliverable','Assumptions and limitations'], refs:['docs/architecture.md']},
 {group:'experience-strategy', dir:'experience-strategy', name:'product-strategist', desc:'Aligns product decisions with business goals, audience, and measurable outcomes.', purpose:'Translate business context into product strategy, positioning, and prioritized opportunities.', activities:['Clarify business goals and constraints','Identify target users and value proposition','Prioritize opportunities by impact/effort','Define success metrics'], inputs:['Business context','Market info','Constraints'], outputs:['Product strategy brief','Opportunity list','Success metrics'], refs:['docs/workflows']},
 {group:'experience-strategy', dir:'experience-strategy', name:'ux-researcher', desc:'Plans and synthesizes UX research while distinguishing evidence from hypothesis.', purpose:'Define research objectives, methods, and evidence quality; never invent findings.', activities:['Define research questions','Select methods','Assess evidence quality','Organize findings by confidence','Identify gaps'], inputs:['Research question','Available data','Audience'], outputs:['Research plan','Evidence log','Hypotheses','Knowledge gaps'], refs:['docs/evaluation-methodology.md']},
 {group:'experience-strategy', dir:'experience-strategy', name:'persona-intelligence', desc:'Builds evidence-based or clearly labeled hypothetical personas.', purpose:'Create personas grounded in evidence or labeled as provisional hypotheses.', activities:['Segment users','Define goals and pain points','Label evidence vs hypothesis','Update with new data'], inputs:['Research findings','Analytics','Assumptions'], outputs:['Persona set','Evidence tags','Validation plan'], refs:[]},
 {group:'experience-strategy', dir:'experience-strategy', name:'journey-intelligence', desc:'Maps end-to-end journeys including states, risks, and recovery paths.', purpose:'Model journeys beyond happy paths with states, errors, and recovery.', activities:['Map entry points and goals','Identify decision points','Model loading/empty/error states','Define recovery paths'], inputs:['User goals','System capabilities','Constraints'], outputs:['Journey map','State inventory','Risk list'], refs:[]},

 {group:'ux-architecture', dir:'ux-architecture', name:'information-architect', desc:'Structures content, navigation, and findability for complex products.', purpose:'Design information architecture, navigation, and labeling.', activities:['Inventory content','Define taxonomy','Design navigation','Validate findability'], inputs:['Content','User tasks','Constraints'], outputs:['IA diagram','Navigation spec','Labeling guidance'], refs:[]},
 {group:'ux-architecture', dir:'ux-architecture', name:'interaction-architect', desc:'Defines interaction patterns, states, and behavioral rules.', purpose:'Specify interactions, feedback, and state transitions.', activities:['Define interaction model','Specify states','Document feedback','Consider accessibility'], inputs:['User flows','Constraints','Platform'], outputs:['Interaction spec','State model','Accessibility notes'], refs:[]},
 {group:'ux-architecture', dir:'ux-architecture', name:'user-flow-engineer', desc:'Engineers complete user flows with dependencies and edge cases.', purpose:'Produce flow definitions including edge cases and recovery.', activities:['Map steps and branches','Identify dependencies','Add error/recovery paths','Define success criteria'], inputs:['Goal','System','Constraints'], outputs:['Flow diagram','Edge case list','Success criteria'], refs:[]},
 {group:'ux-architecture', dir:'ux-architecture', name:'experience-mapper', desc:'Maps experiences across channels, devices, and touchpoints.', purpose:'Create cross-channel experience maps.', activities:['Identify touchpoints','Map channel transitions','Highlight gaps','Prioritize improvements'], inputs:['Journeys','Channels','Metrics'], outputs:['Experience map','Gap analysis','Recommendations'], refs:[]},

 {group:'visual-design', dir:'visual-design', name:'visual-design-director', desc:'Sets visual direction and ensures coherent aesthetic decisions.', purpose:'Establish visual direction aligned to product and audience.', activities:['Analyze product and audience','Propose visual directions','Select tokens and styles','Explain trade-offs'], inputs:['Brief','Brand','Constraints'], outputs:['Visual direction','Token proposal','Rationale'], refs:[]},
 {group:'visual-design', dir:'visual-design', name:'frontend-design-intelligence', desc:'Implements distinctive, usable frontend interfaces without generic patterns.', purpose:'Build frontend UI that avoids generic AI aesthetics.', activities:['Understand task and content','Define layout and hierarchy','Implement responsive UI','Evaluate against brief'], inputs:['Brief','Content','Framework'], outputs:['UI implementation','Design notes','Checks'], refs:[]},
 {group:'visual-design', dir:'visual-design', name:'layout-composition-expert', desc:'Designs layout systems, grids, spacing, and responsive composition.', purpose:'Define layout, grid, and spacing systems.', activities:['Choose grid','Define spacing scale','Plan responsive breakpoints','Validate reflow'], inputs:['Content','Viewport targets'], outputs:['Layout spec','Grid tokens','Responsive rules'], refs:[]},
 {group:'visual-design', dir:'visual-design', name:'typography-intelligence', desc:'Selects and scales typography for readability and hierarchy.', purpose:'Define type systems and typographic hierarchy.', activities:['Select type families','Define scale','Set line lengths','Check accessibility'], inputs:['Brand','Content','Platform'], outputs:['Type scale','Font stack','Usage rules'], refs:[]},
 {group:'visual-design', dir:'visual-design', name:'microinteraction-designer', desc:'Designs purposeful microinteractions and motion.', purpose:'Specify microinteractions that serve usability.', activities:['Identify interaction moments','Define feedback','Respect reduced motion','Avoid gratuitous motion'], inputs:['Interaction spec','Constraints'], outputs:['Microinteraction spec','Motion tokens','Reduced-motion rules'], refs:[]},

 {group:'design-systems', dir:'design-systems', name:'design-system-architect', desc:'Architects design systems from existing conventions and needs.', purpose:'Design or evolve design systems coherently.', activities:['Inspect existing system','Define principles','Plan tokens/components','Migration guidance'], inputs:['Codebase','Needs','Constraints'], outputs:['System architecture','Token plan','Migration notes'], refs:[]},
 {group:'design-systems', dir:'design-systems', name:'design-token-engineer', desc:'Defines portable semantic design tokens.', purpose:'Engineer semantic tokens portable across CSS variables.', activities:['Name tokens semantically','Define scales','Support theming','Document usage'], inputs:['Visual direction','Existing tokens'], outputs:['Token set','CSS variables','Usage docs'], refs:[]},
 {group:'design-systems', dir:'design-systems', name:'component-architect', desc:'Defines component contracts, variants, and states.', purpose:'Specify component APIs and behavior.', activities:['Define props/variants','Document states','Accessibility requirements','Usage examples'], inputs:['Design','System constraints'], outputs:['Component spec','API','State matrix'], refs:[]},
 {group:'design-systems', dir:'design-systems', name:'component-library-engineer', desc:'Implements reusable component libraries.', purpose:'Build and maintain component libraries.', activities:['Implement components','Add tests','Document','Version'], inputs:['Specs','Framework'], outputs:['Components','Tests','Docs'], refs:[]},
 {group:'design-systems', dir:'design-systems', name:'design-system-auditor', desc:'Audits design systems for consistency and drift.', purpose:'Detect inconsistencies and migration risks.', activities:['Inventory usage','Detect duplicates','Report drift','Recommend fixes'], inputs:['Codebase','System'], outputs:['Audit report','Drift list','Remediation'], refs:[]},

 {group:'experience-engineering', dir:'experience-engineering', name:'experience-engineering-lead', desc:'Leads end-to-end experience engineering execution.', purpose:'Coordinate design-to-code delivery.', activities:['Plan increments','Assign work','Review quality','Track risks'], inputs:['Specs','Team','Constraints'], outputs:['Delivery plan','Reviews','Risk log'], refs:[]},
 {group:'experience-engineering', dir:'experience-engineering', name:'design-to-code-engineer', desc:'Translates design specs into production-ready code.', purpose:'Implement UI from specs with fidelity.', activities:['Read spec','Map to components','Implement','Validate'], inputs:['Spec','Codebase'], outputs:['Code changes','Notes'], refs:[]},
 {group:'experience-engineering', dir:'experience-engineering', name:'frontend-architecture-engineer', desc:'Designs frontend architecture and module boundaries.', purpose:'Define frontend architecture.', activities:['Assess structure','Define modules','Set conventions','Document'], inputs:['Project','Requirements'], outputs:['Architecture doc','Module plan'], refs:[]},
 {group:'experience-engineering', dir:'experience-engineering', name:'react-performance-engineer', desc:'Optimizes React rendering and performance.', purpose:'Improve React performance.', activities:['Profile','Identify bottlenecks','Optimize renders','Measure'], inputs:['App','Metrics'], outputs:['Perf report','Changes'], refs:[]},
 {group:'experience-engineering', dir:'experience-engineering', name:'prototype-engineer', desc:'Builds portable prototypes for validation.', purpose:'Create browser-based prototypes.', activities:['Scope prototype','Implement','Test usability','Iterate'], inputs:['Concept','Constraints'], outputs:['Prototype','Findings'], refs:[]},

 {group:'ai-native-ux', dir:'ai-native-ux', name:'ai-experience-architect', desc:'Designs AI-assisted user experiences and trust boundaries.', purpose:'Architect AI-in-the-loop experiences.', activities:['Define AI role','Set transparency','Plan controls','Handle uncertainty'], inputs:['AI capabilities','User tasks'], outputs:['AI UX spec','Trust model'], refs:[]},
 {group:'ai-native-ux', dir:'ai-native-ux', name:'agentic-ux-architect', desc:'Designs multi-agent interfaces and delegation visibility.', purpose:'Design agentic workflows UI.', activities:['Map agent actions','Define status/progress','Approval checkpoints','Escalation'], inputs:['Agent capabilities','Risk'], outputs:['Agentic UX spec'], refs:[]},
 {group:'ai-native-ux', dir:'ai-native-ux', name:'conversation-design-engineer', desc:'Designs conversational flows and copy.', purpose:'Engineer conversation experiences.', activities:['Define intents','Design turns','Handle failures','Tone'], inputs:['Domain','Users'], outputs:['Conversation spec','Copy'], refs:[]},
 {group:'ai-native-ux', dir:'ai-native-ux', name:'human-ai-interaction-specialist', desc:'Optimizes human-AI collaboration and control.', purpose:'Balance automation and human control.', activities:['Define control levels','Reversibility','Feedback','Trust calibration'], inputs:['Workflow','Risk'], outputs:['Interaction guidelines'], refs:[]},

 {group:'accessibility', dir:'accessibility', name:'accessibility-engineer', desc:'Evaluates and fixes accessibility across the stack.', purpose:'Continuous accessibility engineering.', activities:['Semantic HTML','Keyboard/focus','Contrast','ARIA','Testing'], inputs:['UI','Standards'], outputs:['A11y report','Fixes'], refs:[]},
 {group:'accessibility', dir:'accessibility', name:'inclusive-design-specialist', desc:'Ensures inclusive design beyond baseline compliance.', purpose:'Inclusive design guidance.', activities:['Diverse users','Language','Alternatives','Cultural'], inputs:['Product','Audience'], outputs:['Inclusive guidelines'], refs:[]},
 {group:'accessibility', dir:'accessibility', name:'ux-content-designer', desc:'Crafts clear, accessible UX copy.', purpose:'Content design.', activities:['Microcopy','Labels','Errors','Voice'], inputs:['UI','Brand'], outputs:['Copy spec'], refs:[]},
 {group:'accessibility', dir:'accessibility', name:'localization-experience-engineer', desc:'Designs localization-ready experiences.', purpose:'Localization engineering.', activities:['I18n architecture','RTL','Formatting','Content'], inputs:['Product','Locales'], outputs:['L10n plan'], refs:[]},

 {group:'validation', dir:'validation', name:'ux-critic', desc:'Critiques UX quality with measurable criteria.', purpose:'Structured UX critique.', activities:['Review flows','Heuristics','Accessibility','Recommendations'], inputs:['Design/Code'], outputs:['Critique report'], refs:[]},
 {group:'validation', dir:'validation', name:'usability-test-engineer', desc:'Designs and analyzes usability tests.', purpose:'Usability testing.', activities:['Test plan','Tasks','Metrics','Analysis'], inputs:['Prototype','Goals'], outputs:['Test plan','Results'], refs:[]},
 {group:'validation', dir:'validation', name:'visual-regression-engineer', desc:'Sets up visual regression testing.', purpose:'Visual regression QA.', activities:['Baselines','Compare','Report diffs','Maintain'], inputs:['UI','Tests'], outputs:['VR setup','Diff reports'], refs:[]},
 {group:'validation', dir:'validation', name:'quality-assurance-engineer', desc:'Coordinates QA across functional and UX dimensions.', purpose:'Quality assurance.', activities:['Test strategy','Automation','Bug triage','Release checks'], inputs:['Product','Requirements'], outputs:['QA plan','Reports'], refs:[]},

 {group:'optimization', dir:'optimization', name:'experience-metrics-analyst', desc:'Defines and analyzes experience metrics.', purpose:'Experience analytics.', activities:['Define metrics','Instrumentation','Analysis','Insights'], inputs:['Product','Data'], outputs:['Metrics spec','Insights'], refs:[]},
 {group:'optimization', dir:'optimization', name:'conversion-optimization-specialist', desc:'Optimizes conversion and task completion.', purpose:'CRO.', activities:['Funnel analysis','Hypotheses','Experiments','Results'], inputs:['Metrics','Flows'], outputs:['Experiment plan'], refs:[]},
 {group:'optimization', dir:'optimization', name:'continuous-improvement-agent', desc:'Drives continuous improvement loops.', purpose:'Continuous improvement.', activities:['Review metrics','Prioritize','Propose changes','Track'], inputs:['Data','Feedback'], outputs:['Improvement backlog'], refs:[]},

 {group:'delivery', dir:'delivery', name:'skill-discovery-curator', desc:'Discovers and curates external skills with provenance.', purpose:'Skill discovery and curation.', activities:['Search registries','Evaluate','Record provenance','Decide import'], inputs:['Registries'], outputs:['Source inventory','Catalog updates'], refs:['resources/registry-sources.yaml']},
 {group:'delivery', dir:'delivery', name:'knowledge-provenance-auditor', desc:'Audits provenance and attribution of knowledge.', purpose:'Provenance audit.', activities:['Check sources','Licenses','Attribution','Gaps'], inputs:['Catalog','Sources'], outputs:['Audit report'], refs:[]},
 {group:'delivery', dir:'delivery', name:'experience-documentation-engineer', desc:'Produces engineering handoff documentation.', purpose:'Documentation engineering.', activities:['Specs','Handoff','Diagrams','Changelog'], inputs:['Artifacts'], outputs:['Docs'], refs:[]},
 {group:'delivery', dir:'delivery', name:'release-readiness-auditor', desc:'Audits release readiness and risks.', purpose:'Release readiness.', activities:['Check gates','Risks','Docs','Sign-off'], inputs:['Release','Artifacts'], outputs:['Readiness report'], refs:[]},

 {group:'ux-architecture', dir:'ux-architecture', name:'navigation-designer', desc:'Designs scalable navigation and wayfinding systems.', purpose:'Navigation design.', activities:['Map nav hierarchy','Define wayfinding','Support deep links','Validate findability'], inputs:['IA','User tasks'], outputs:['Nav spec'], refs:[]},
 {group:'ux-architecture', dir:'ux-architecture', name:'search-experience-engineer', desc:'Designs search, filtering, and result experiences.', purpose:'Search UX.', activities:['Query handling','Filters','Result ranking UX','Empty states'], inputs:['Content','Users'], outputs:['Search spec'], refs:[]},
 {group:'visual-design', dir:'visual-design', name:'data-visualization-designer', desc:'Designs clear, honest data visualizations.', purpose:'Data viz design.', activities:['Choose chart types','Define scales','Avoid misleading visuals','Responsive'], inputs:['Data','Tasks'], outputs:['Viz spec'], refs:[]},
 {group:'visual-design', dir:'visual-design', name:'motion-design-engineer', desc:'Engineers purposeful motion and transitions.', purpose:'Motion design.', activities:['Define transitions','Performance','Reduced motion','Consistency'], inputs:['Interaction spec'], outputs:['Motion spec'], refs:[]},
 {group:'design-systems', dir:'design-systems', name:'theming-engineer', desc:'Implements multi-theme and brand theming.', purpose:'Theming.', activities:['Theme tokens','Switching','Contrast','Persistence'], inputs:['Tokens','Brands'], outputs:['Theme system'], refs:[]},
 {group:'experience-engineering', dir:'experience-engineering', name:'form-ux-engineer', desc:'Designs robust form UX and validation.', purpose:'Form UX.', activities:['Field design','Validation','Errors','Autofill','Accessibility'], inputs:['Data model'], outputs:['Form spec'], refs:[]},
 {group:'experience-engineering', dir:'experience-engineering', name:'onboarding-experience-engineer', desc:'Designs onboarding and activation flows.', purpose:'Onboarding.', activities:['First-run','Progressive disclosure','Empty states','Metrics'], inputs:['Product','Goals'], outputs:['Onboarding spec'], refs:[]},
 {group:'ai-native-ux', dir:'ai-native-ux', name:'prompt-ux-engineer', desc:'Designs prompt inputs and AI interaction affordances.', purpose:'Prompt UX.', activities:['Prompt patterns','Suggestions','Safety','Feedback'], inputs:['AI capabilities'], outputs:['Prompt UX spec'], refs:[]},
 {group:'accessibility', dir:'accessibility', name:'cognitive-accessibility-specialist', desc:'Addresses cognitive accessibility and clarity.', purpose:'Cognitive a11y.', activities:['Plain language','Chunking','Distraction reduction','Consistency'], inputs:['UI','Content'], outputs:['Cognitive a11y notes'], refs:[]},
 {group:'validation', dir:'validation', name:'experiment-designer', desc:'Designs A/B and multivariate experiments.', purpose:'Experimentation.', activities:['Hypotheses','Variants','Metrics','Analysis plan'], inputs:['Metrics','Flows'], outputs:['Experiment plan'], refs:[]},
 {group:'optimization', dir:'optimization', name:'analytics-instrumentation-engineer', desc:'Designs analytics event schemas and instrumentation.', purpose:'Analytics.', activities:['Event taxonomy','Properties','Privacy','Validation'], inputs:['Product','Metrics'], outputs:['Event spec'], refs:[]},
 {group:'delivery', dir:'delivery', name:'design-handoff-engineer', desc:'Produces precise design-to-engineering handoff.', purpose:'Handoff.', activities:['Specs','Assets','Tokens','Acceptance'], inputs:['Design'], outputs:['Handoff package'], refs:[]},
];

function skillMd(s){
  return `---
name: ${s.name}
description: "${s.desc}"
version: "0.1.0"
group: "${s.group}"
license: "MIT"
---

# ${s.name}

${s.purpose}

## Activation conditions

Use this skill when the task involves ${s.desc.toLowerCase().replace(/\.$/,'')}, or when the orchestrator selects it based on the capability registry.

## Responsibilities

${s.activities.map(a=>`- ${a}`).join('\n')}

## Required inputs

${s.inputs.map(i=>`- ${i}`).join('\n')}

## Optional inputs

- Existing artifacts, constraints, and preferences.

## Outputs

${s.outputs.map(o=>`- ${o}`).join('\n')}

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

${s.refs.length? s.refs.map(r=>`- ${r}`).join('\n') : '- (none)'}

## Provenance

Original VC_Experience_Agents capability. License: MIT.

## Test cases

1. Given minimal inputs, produces labeled assumptions and a plan.
2. Given conflicting constraints, reports trade-offs.
`;
}

for (const s of skills){
  const dir = path.join(root, 'skills', s.dir, s.name);
  fs.mkdirSync(dir, {recursive:true});
  fs.writeFileSync(path.join(dir,'SKILL.md'), skillMd(s));
}
fs.writeFileSync(path.join(root,'_skills_list.json'), JSON.stringify(skills.map(s=>({name:s.name,group:s.group,dir:s.dir})),null,2));
console.log('generated', skills.length);
