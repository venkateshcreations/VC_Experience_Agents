# User Manual: VC_Experience_Agents

This guide helps anyone use the project, even without coding experience.

## 1. What is this?
A collection of "skills" (instruction files) that help AI coding agents do UX/design/engineering work. You can browse, search, and validate them.

## 2. Requirements
- A computer with Node.js installed (version 18 or newer).
  - Download from https://nodejs.org (LTS).
  - To check: open Terminal/Command Prompt and type `node --version`.

## 3. Get the project
If you have the folder already, open it. Otherwise download/clone it and open the folder `VC_Experience_Agents`.

## 4. Open a terminal in the project folder
- Windows: open the folder, right-click empty space, "Open in Terminal" (or PowerShell).
- Mac: open Terminal, type `cd ` then drag the folder in, press Enter.

## 5. Install dependencies
Type and press Enter:
```
npm install
```
You should see no errors.

## 6. Check everything works
```
npm run validate
```
Expected: "VALIDATION PASSED".

Run tests:
```
npm run test
```
Expected: all tests pass.

## 7. Explore skills
List all skills:
```
npm run list
```

Search for a topic:
```
npm run search -- "design systems"
```

View one skill:
```
npm run inspect -- design-system-architect
```

## 8. Use with your AI agent
- If your AI tool supports Agent Skills, point it to the `skills/` folder.
- Otherwise, open a skill's SKILL.md and paste relevant parts into your AI chat.

## 9. Common tasks
- UX audit: read `examples/ux-audit.md`.
- New product: see `workflows/new-product/`.
- Design system: see `workflows/design-system/`.

## 10. Troubleshooting
- "npm not recognized": install Node.js and reopen terminal.
- Validation fails: ensure you didn't edit skill folders incorrectly; re-run `npm run validate` to see errors.
- Tests fail: read the error lines; usually a missing file or typo.

## 11. Safety
- No secrets are stored in this project.
- External resources are not auto-downloaded or executed.

## 12. Need help?
Open an issue on the project's GitHub page.
