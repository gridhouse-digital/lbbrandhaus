# Client Presentation Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Polish the LB Brand Haus artefact shell into a client-ready presentation wrapper.

**Architecture:** Keep `src/App.tsx` as the active app entry and continue loading static legacy pages through iframes. Add a local Overview screen and richer metadata-driven presentation frame without changing the legacy HTML pages.

**Tech Stack:** React 19, TypeScript, Vite, CSS.

---

### Task 1: Presentation Shell

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/styles/splitLegacy.css`

- [ ] **Step 1: Replace the page list with metadata**

In `src/App.tsx`, change the page type to include `description`, `status`, and optional `src`, with `overview` as the first page.

- [ ] **Step 2: Add the Overview screen**

Render a branded overview panel when the active page has no `src`. Include review scope, key areas, and next decisions.

- [ ] **Step 3: Add presentation frame metadata**

For iframe pages, render page title, description, `Client Review` badge, and `Desktop Preview` label above the iframe.

- [ ] **Step 4: Style the shell**

Update `src/styles/splitLegacy.css` so the shell has a polished teal presentation background, a top presentation bar, card-like preview frame, responsive navigation, and a non-iframe Overview layout.

### Task 2: Text And Documentation Cleanup

**Files:**
- Modify: `src/pages/DesignSystemPage.tsx`
- Modify: `src/data/designSystem.ts`
- Modify: `src/components/ImageCarousel.tsx`
- Modify: `README.md`

- [ ] **Step 1: Replace broken encoding sequences**

Replace visible mojibake such as `â€”` and `Â·` with ASCII punctuation.

- [ ] **Step 2: Replace README template copy**

Write concise project notes covering purpose, local commands, structure, and review workflow.

### Task 3: Verification

**Files:**
- Verify: `package.json`

- [ ] **Step 1: Run lint**

Run: `npm run lint`

- [ ] **Step 2: Run production build**

Run: `npm run build`

- [ ] **Step 3: Note limitations**

If verification fails, record exact failures and fix in the touched files before finalizing.
