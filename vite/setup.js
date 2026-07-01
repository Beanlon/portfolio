import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const INDEX_HTML = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Student Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/App.jsx"></script>
  </body>
</html>
`

const APP_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-sans: "Inter", sans-serif;
  --color-accent: #6366f1;
  --color-accent-light: #818cf8;
  --color-surface: #ffffff;
  --color-surface-dark: #1e1e2e;
  --color-muted: #64748b;
}

html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-bg {
  background-color: #f8fafc;
  background-image:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.12), transparent),
    radial-gradient(ellipse 60% 40% at 100% 0%, rgba(129, 140, 248, 0.08), transparent);
}

.dark .page-bg {
  background-color: #0f0f14;
  background-image:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(99, 102, 241, 0.15), transparent),
    radial-gradient(ellipse 60% 40% at 0% 100%, rgba(129, 140, 248, 0.06), transparent);
}

.glass-nav {
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.dark .glass-nav {
  background: rgba(15, 15, 20, 0.75);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-island {
  background: rgba(255, 255, 255, 0.82);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 9999px;
  box-shadow:
    0 4px 24px rgba(15, 23, 42, 0.08),
    0 1px 2px rgba(15, 23, 42, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.65);
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.nav-island-scrolled {
  border-color: rgba(99, 102, 241, 0.25);
  box-shadow:
    0 8px 32px rgba(15, 23, 42, 0.12),
    0 2px 8px rgba(99, 102, 241, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

.dark .nav-island {
  background: rgba(22, 22, 31, 0.88);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.45),
    0 1px 0 rgba(255, 255, 255, 0.06) inset;
}

.dark .nav-island-scrolled {
  border-color: rgba(129, 140, 248, 0.28);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(99, 102, 241, 0.12);
}

.nav-island-menu {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(148, 163, 184, 0.35);
  border-radius: 1.25rem;
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.12);
}

.dark .nav-island-menu {
  background: rgba(22, 22, 31, 0.95);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.site-footer-bar {
  background-color: #f1f5f9;
  background-image:
    radial-gradient(ellipse 70% 55% at 50% 100%, rgba(99, 102, 241, 0.08), transparent),
    radial-gradient(ellipse 50% 40% at 0% 0%, rgba(148, 163, 184, 0.1), transparent);
  color: #64748b;
}

.dark .site-footer-bar {
  background-color: #16161f;
  background-image:
    radial-gradient(ellipse 65% 50% at 50% 100%, rgba(99, 102, 241, 0.1), transparent),
    radial-gradient(ellipse 50% 45% at 0% 0%, rgba(129, 140, 248, 0.06), transparent);
  color: #94a3b8;
}

.gradient-text {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.typewriter-cursor {
  display: inline-block;
  margin-left: 1px;
  -webkit-text-fill-color: #6366f1;
  color: #6366f1;
  animation: typewriter-blink 1s step-end infinite;
}

.dark .typewriter-cursor {
  -webkit-text-fill-color: #a78bfa;
  color: #a78bfa;
}

@keyframes typewriter-blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .typewriter-cursor {
    animation: none;
  }
}

.section-divider {
  height: 4px;
  width: 48px;
  border-radius: 9999px;
  background: linear-gradient(90deg, #6366f1, #a78bfa);
}

.featured-gallery {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: rgb(148 163 184) transparent;
}

.featured-gallery::-webkit-scrollbar {
  height: 8px;
}

.featured-gallery::-webkit-scrollbar-track {
  background: transparent;
}

.featured-gallery::-webkit-scrollbar-thumb {
  border-radius: 9999px;
  background: rgb(148 163 184);
}

.dark .featured-gallery {
  scrollbar-color: rgb(100 116 139) transparent;
}

.dark .featured-gallery::-webkit-scrollbar-thumb {
  background: rgb(100 116 139);
}

.contact-section-bg {
  background-color: #eef2ff;
  background-image:
    radial-gradient(ellipse 70% 55% at 100% 0%, rgba(99, 102, 241, 0.16), transparent),
    radial-gradient(ellipse 50% 40% at 0% 100%, rgba(167, 139, 250, 0.1), transparent);
}

.dark .contact-section-bg {
  background-color: #16161f;
  background-image:
    radial-gradient(ellipse 65% 50% at 100% 0%, rgba(99, 102, 241, 0.14), transparent),
    radial-gradient(ellipse 50% 45% at 0% 100%, rgba(129, 140, 248, 0.08), transparent);
}

.projects-section-bg {
  background-color: #f1f5f9;
  background-image:
    radial-gradient(ellipse 70% 55% at 0% 50%, rgba(148, 163, 184, 0.14), transparent),
    radial-gradient(ellipse 50% 40% at 100% 100%, rgba(100, 116, 139, 0.08), transparent);
}

.dark .projects-section-bg {
  background-color: #1a1a24;
  background-image:
    radial-gradient(ellipse 65% 50% at 0% 50%, rgba(148, 163, 184, 0.08), transparent),
    radial-gradient(ellipse 50% 45% at 100% 0%, rgba(100, 116, 139, 0.06), transparent);
}

.tech-marquee {
  overflow: hidden;
  border-radius: 0.75rem;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    black 4%,
    black 96%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    black 4%,
    black 96%,
    transparent
  );
}

.tech-marquee-track {
  display: flex;
  width: max-content;
  gap: 1.75rem;
  padding-block: 1rem;
  animation: tech-marquee-scroll 45s linear infinite;
  will-change: transform;
}

@keyframes tech-marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .tech-marquee-static {
    -webkit-mask-image: none;
    mask-image: none;
  }

  .tech-marquee-static .tech-marquee-track {
    animation: none;
    flex-wrap: wrap;
    justify-content: center;
    width: auto;
    margin-inline: auto;
    padding-inline: 0;
  }
}

.footer-bar-bg {
  background-color: #e0e7ff;
}

.dark .footer-bar-bg {
  background-color: #0c0c12;
}

.scroll-reveal {
  opacity: 0;
  transition:
    opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: opacity, transform;
}

.scroll-reveal-up {
  transform: translateY(32px);
}

.scroll-reveal-left {
  transform: translateX(-32px);
}

.scroll-reveal-right {
  transform: translateX(32px);
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

.profile-ring {
  background: linear-gradient(135deg, #6366f1, #a78bfa, #6366f1);
  padding: 4px;
  border-radius: 9999px;
}

@keyframes button-contrast {
  0% {
    background: var(--button-bg);
    color: var(--button-text);
  }
  50% {
    background: var(--button-contrast-bg);
    color: var(--button-contrast-text);
  }
  100% {
    background: var(--button-bg);
    color: var(--button-text);
  }
}

.press-contrast {
  animation: button-contrast 360ms ease;
}

@keyframes slide-bottom-normal {
  from {
    transform: translateY(-24px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-right-normal {
  from {
    transform: translateX(-24px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-left-normal {
  from {
    transform: translateX(24px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes card-fade-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@utility animate-slide-bottom {
  animation: slide-bottom-normal 600ms ease both;
}

@utility animate-slide-right {
  animation: card-fade-in 500ms ease both;
}

@utility animate-slide-left {
  animation: card-fade-in 500ms ease both;
}

@utility animate-fade-in-up {
  animation: fade-in-up 700ms ease both;
}
`

const VIRTUAL_STYLES_IMPORT = 'virtual:app-styles.css'
const RESOLVED_STYLES_ID = '\0virtual:app-styles.css'

export function portfolioSetupPlugin() {
  return {
    name: 'portfolio-setup',
    config(config) {
      const root = config.root ?? process.cwd()
      writeFileSync(resolve(root, 'index.html'), INDEX_HTML, 'utf-8')
    },
    resolveId(id) {
      if (id === VIRTUAL_STYLES_IMPORT) return RESOLVED_STYLES_ID
    },
    load(id) {
      if (id === RESOLVED_STYLES_ID) return APP_STYLES
    },
  }
}
