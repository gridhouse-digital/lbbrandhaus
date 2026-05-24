# Client Presentation Polish Design

## Goal

Make the LB Brand Haus Design System Web Artefact feel like a deliberate client review experience while preserving the existing legacy page previews.

## Approved Approach

Keep the iframe-based legacy page shell and add a polished presentation layer around it. The first screen becomes an Overview tab, followed by the current website and design-system page previews.

## Structure

The presentation navigation should use this order:

- Overview
- Design System
- Home
- Services
- Studio
- Portfolio
- Contact

The Overview tab should explain what the client is reviewing: brand direction, design system, website page flow, and next decisions.

## Presentation Frame

Each previewed page should sit inside a branded frame with:

- Page title
- Short descriptor
- Client review status badge
- Desktop preview label
- Branded teal background and refined spacing

## Content Cleanup

The artefact should not show broken encoding characters. Replace mojibake sequences with plain ASCII punctuation. Update the README so it describes the actual artefact instead of the default Vite template.

## Scope Boundary

This pass does not rebuild the website pages or replace the legacy iframe previews. It improves presentation quality for client review.
