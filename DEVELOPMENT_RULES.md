# Robuzta Techlabs — Mandatory Frontend Engineering & Coding Standards

This document defines non-negotiable coding and architectural standards for developing the **Robuzta Techlabs** web application.

---

## 1. Core Principles

- **No Hardcoded Values**: Never hardcode colors, spacing, typography, or animation durations inline or in raw CSS. Always import and use design system tokens (`var(--color-...)`, `@/constants/tokens.constants`, `@/constants/motion`).
- **JavaScript & React Standards**: Write clean, functional JavaScript (ES2022+ / React 18 & 19). No class components except `ErrorBoundary`.
- **Pure Reusable System**: Build primitive components first, compose compound components second, assemble pages last. Never build one-off page inline styles.

---

## 2. Component Structure Rules

- Every component must be placed in a domain-specific folder under `src/components/` or `src/features/`.
- Component filenames must use `PascalCase.jsx`.
- Props must be destructured at the top of the component with default values defined.
- Class names must be composed using the `cn()` utility (`import { cn } from '@/utils/cn'`).
- HTML elements must include accessible ARIA attributes (`aria-label`, `aria-expanded`, `aria-hidden`) where applicable.

---

## 3. Motion & Animation Standards

- All page transitions and micro-interactions must use Framer Motion variants defined in `@/constants/motion`.
- Micro-interactions on buttons and cards must leverage spring physics (`SPRING_TACTILE` / `SPRING_GENTLE`).
- High-frequency hover states must use CSS transitions with GPU-accelerated properties only (`transform`, `opacity`).
- Reduced motion preferences (`prefers-reduced-motion`) must be strictly honored.

---

## 4. Layout & Responsive Grid Discipline

- Use layout primitives (`<Container>`, `<Section>`, `<Grid>`, `<Stack>`, `<Spacer>`) instead of custom wrapper divs.
- Spacing between sections must conform to vertical padding scales (`sm`, `md`, `lg`, `xl`).
- Grid column counts must adapt across break points (`360px`, `768px`, `1024px`, `1440px`).

---

## 5. Code Quality & Verification Pipeline

- **Zero ESLint Warnings/Errors**: Execute `npm run lint` before committing code.
- **Zero Build Failures**: Execute `npm run build` to verify clean bundle compilation.
- **Commit Discipline**: Follow standard conventional commits format (`feat:`, `fix:`, `refactor:`, `style:`).
