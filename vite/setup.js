import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const INDEX_HTML = `<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Jeric B. Mata | Portfolio</title>
    <link rel="icon" href="/favicon.ico" sizes="any" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
    <link rel="apple-touch-icon" href="/favicon.png" />
    <meta name="theme-color" content="#0f0f14" />
    <meta name="color-scheme" content="dark" />
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
  --color-accent: #f97316;
  --color-accent-light: #fb923c;
  --color-surface: #ffffff;
  --color-surface-dark: #1e1e2e;
  --color-muted: #64748b;
}

html {
  scroll-behavior: smooth;
  color-scheme: dark;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-bg {
  background-color: #f8fafc;
  background-image:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(249, 115, 22, 0.12), transparent),
    radial-gradient(ellipse 60% 40% at 100% 0%, rgba(251, 146, 60, 0.08), transparent);
}

.dark .page-bg {
  background-color: #0f0f14;
  background-image:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(249, 115, 22, 0.15), transparent),
    radial-gradient(ellipse 60% 40% at 0% 100%, rgba(251, 146, 60, 0.06), transparent);
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
  border-color: rgba(249, 115, 22, 0.25);
  box-shadow:
    0 8px 32px rgba(15, 23, 42, 0.12),
    0 2px 8px rgba(249, 115, 22, 0.08),
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
  border-color: rgba(251, 146, 60, 0.28);
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(249, 115, 22, 0.12);
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
    radial-gradient(ellipse 70% 55% at 50% 100%, rgba(249, 115, 22, 0.08), transparent),
    radial-gradient(ellipse 50% 40% at 0% 0%, rgba(148, 163, 184, 0.1), transparent);
  color: #64748b;
}

.dark .site-footer-bar {
  background-color: #16161f;
  background-image:
    radial-gradient(ellipse 65% 50% at 50% 100%, rgba(249, 115, 22, 0.1), transparent),
    radial-gradient(ellipse 50% 45% at 0% 0%, rgba(251, 146, 60, 0.06), transparent);
  color: #94a3b8;
}

.gradient-text {
  background: linear-gradient(135deg, #ea580c 0%, #f97316 50%, #fb923c 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.typewriter-cursor {
  display: inline-block;
  margin-left: 1px;
  -webkit-text-fill-color: #f97316;
  color: #f97316;
  animation: typewriter-blink 1s step-end infinite;
}

.dark .typewriter-cursor {
  -webkit-text-fill-color: #fb923c;
  color: #fb923c;
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
  background: linear-gradient(90deg, #f97316, #fdba74);
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

.tbhon-showcase,
.featured-showcase {
  background-color: rgba(255, 255, 255, 0.6);
  background-image:
    linear-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px),
    radial-gradient(ellipse 70% 55% at 100% 0%, rgba(249, 115, 22, 0.12), transparent),
    radial-gradient(ellipse 50% 45% at 0% 100%, rgba(251, 146, 60, 0.08), transparent);
  background-size: 100% 26px, auto, auto;
}

.dark .tbhon-showcase,
.dark .featured-showcase {
  background-color: rgba(255, 255, 255, 0.05);
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
    radial-gradient(ellipse 70% 55% at 100% 0%, rgba(249, 115, 22, 0.14), transparent),
    radial-gradient(ellipse 50% 45% at 0% 100%, rgba(251, 146, 60, 0.08), transparent);
}

.tbhon-phone-frame,
.featured-showcase-mobile-frame {
  width: min(42vw, 170px);
  overflow: hidden;
  border: 1px solid rgba(249, 115, 22, 0.2);
  border-radius: 1.25rem;
  box-shadow:
    0 18px 36px rgba(0, 0, 0, 0.25),
    0 0 0 1px rgba(249, 115, 22, 0.06);
}

.dark .tbhon-phone-frame,
.dark .featured-showcase-mobile-frame {
  box-shadow:
    0 18px 36px rgba(0, 0, 0, 0.45),
    0 0 0 1px rgba(249, 115, 22, 0.1);
}

.featured-showcase-desktop-frame {
  width: 100%;
  max-width: 34rem;
  overflow: hidden;
  border: 1px solid rgba(249, 115, 22, 0.2);
  border-radius: 1rem;
  box-shadow:
    0 22px 44px rgba(0, 0, 0, 0.28),
    0 0 0 1px rgba(249, 115, 22, 0.08);
}

.dark .featured-showcase-desktop-frame {
  box-shadow:
    0 22px 44px rgba(0, 0, 0, 0.48),
    0 0 0 1px rgba(249, 115, 22, 0.12);
}

@media (min-width: 640px) {
  .tbhon-phone-frame,
  .featured-showcase-mobile-frame {
    width: 190px;
  }
}

.contact-section-bg {
  background-color: #fff7ed;
  background-image:
    radial-gradient(ellipse 70% 55% at 100% 0%, rgba(249, 115, 22, 0.16), transparent),
    radial-gradient(ellipse 50% 40% at 0% 100%, rgba(253, 186, 116, 0.1), transparent);
}

.dark .contact-section-bg {
  background-color: #16161f;
  background-image:
    radial-gradient(ellipse 65% 50% at 100% 0%, rgba(249, 115, 22, 0.14), transparent),
    radial-gradient(ellipse 50% 45% at 0% 100%, rgba(251, 146, 60, 0.08), transparent);
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

.collaboration-card {
  background-color: #121218;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 28px 28px;
}

.tech-stack-grid {
  --tech-grid-fade: rgba(255, 255, 255, 0.78);
  position: absolute;
  inset: 0;
  overflow: hidden;
  touch-action: none;
  cursor: default;
}

.tech-stack-grid--hovered {
  cursor: grab;
}

.dark .tech-stack-grid {
  --tech-grid-fade: rgba(15, 15, 20, 0.92);
}

.tech-stack-grid--dragging {
  cursor: grabbing;
}

.tech-stack-grid__glow {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse 50% 55% at 8% 75%, rgba(249, 115, 22, 0.12), transparent 62%),
    radial-gradient(ellipse 45% 50% at 55% 45%, rgba(251, 146, 60, 0.1), transparent 58%),
    radial-gradient(ellipse 40% 45% at 92% 22%, rgba(253, 186, 116, 0.08), transparent 55%);
}

.tech-stack-grid__filter {
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
  backdrop-filter: blur(1px) saturate(1.08);
  -webkit-backdrop-filter: blur(1px) saturate(1.08);
  background: rgba(255, 255, 255, 0.08);
}

.dark .tech-stack-grid__filter {
  background: rgba(249, 115, 22, 0.05);
}

.tech-stack-grid__scene {
  position: absolute;
  top: -42%;
  right: -38%;
  bottom: -32%;
  left: -20%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 900px;
  perspective-origin: 42% 44%;
  pointer-events: none;
}

.tech-stack-grid__plane {
  display: flex;
  gap: 0.625rem;
  transform: rotateX(50deg) rotateZ(-22deg) scale(1.48)
    translate3d(calc(var(--pan-x, 0px) + 36px), calc(var(--pan-y, 0px) - 52px), 0);
  transform-style: preserve-3d;
  transition: transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: auto;
}

.tech-stack-grid--dragging .tech-stack-grid__plane {
  transition: none;
}

.tech-stack-grid__column {
  flex-shrink: 0;
  padding-top: var(--col-offset, 0);
}

.tech-stack-grid__track {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  animation: tech-stack-scroll var(--col-duration, 60s) linear infinite;
  animation-delay: var(--col-delay, 0s);
  will-change: transform;
}

.tech-stack-grid__column--up .tech-stack-grid__track {
  animation-direction: reverse;
}

.tech-stack-grid--dragging .tech-stack-grid__track {
  animation-play-state: paused;
}

@keyframes tech-stack-scroll {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .tech-stack-grid__track {
    animation: none;
  }
}

.tech-stack-tile {
  display: flex;
  width: 96px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 0.875rem;
  border: 1px solid rgba(148, 163, 184, 0.28);
  background: rgba(255, 255, 255, 0.6);
  padding: 0.75rem 0.5rem 0.625rem;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.dark .tech-stack-tile {
  border-color: rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.tech-stack-tile__icon {
  width: 2rem;
  height: 2rem;
  object-fit: contain;
}

.tech-stack-tile__name {
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  color: #64748b;
}

.dark .tech-stack-tile__name {
  color: #94a3b8;
}

.tech-stack-grid__fade {
  position: absolute;
  z-index: 2;
  pointer-events: none;
}

.tech-stack-grid__fade--top {
  top: 0;
  right: 0;
  left: 0;
  height: 5%;
  background: linear-gradient(to bottom, var(--tech-grid-fade) 0%, transparent 100%);
}

.tech-stack-grid__fade--bottom {
  right: 0;
  bottom: 0;
  left: 0;
  height: 5%;
  background: linear-gradient(to top, var(--tech-grid-fade) 0%, transparent 100%);
}

.tech-stack-grid__fade--left {
  top: 0;
  bottom: 0;
  left: 0;
  width: 4%;
  background: linear-gradient(to right, var(--tech-grid-fade) 0%, transparent 100%);
}

.tech-stack-grid__fade--right {
  top: 0;
  right: 0;
  bottom: 0;
  width: 4%;
  background: linear-gradient(to left, var(--tech-grid-fade) 0%, transparent 100%);
}

.profile-ring {
  background: linear-gradient(135deg, #f97316, #fdba74, #f97316);
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
