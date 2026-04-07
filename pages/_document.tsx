import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="text-accent-1 h-full" data-theme="dark">
      <Head>
        <style>
          {`
      /* ── Reset & base ─────────────────────────────── */
      *,
      *::before,
      *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      html {
        scroll-behavior: smooth;
      }

      /* ── Design tokens ────────────────────────────── */
      :root {
        --radius: 0.5rem;
        --font-sans: 'Geist', sans-serif;
        --font-mono: 'Geist Mono', monospace;
        --transition: 0.2s ease;
      }

      [data-theme='dark'] {
        --bg: #09090b;
        --bg-card: #09090b;
        --bg-hover: #27272a;
        --border: #27272a;
        --border-muted: #3f3f46;
        --text: #fafafa;
        --text-muted: #a1a1aa;
        --text-subtle: #71717a;
        --badge-bg: #27272a;
        --badge-text: #d4d4d8;
        --reading-bg: #1c1917;
        --reading-border: #44403c;
        --reading-text: #d6d3d1;
        --muted: #27272a;
        --muted-foreground: #a1a1aa;
        --ring: #d4d4d8;
      }

      [data-theme='light'] {
        --bg: #ffffff;
        --bg-card: #ffffff;
        --bg-hover: #e4e4e7;
        --border: #e4e4e7;
        --border-muted: #d4d4d8;
        --text: #09090b;
        --text-muted: #52525b;
        --text-subtle: #71717a;
        --badge-bg: #f4f4f5;
        --badge-text: #3f3f46;
        --reading-bg: #fefce8;
        --reading-border: #fde68a;
        --reading-text: #451a03;
        --muted: #f4f4f5;
        --muted-foreground: #71717a;
        --ring: #18181b;
      }

      /* ── Globals ──────────────────────────────────── */
      body {
        font-family: var(--font-sans);
        background: var(--bg, #09090b);
        color: var(--text);
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        min-height: 100vh;
        transition:
          background var(--transition),
          color var(--transition);
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      /* ── Layout ───────────────────────────────────── */
      .container {
        max-width: 720px !important;
        margin: 0 auto !important;
        padding: 0 1.5rem !important;
      }

      .fade-in {
        opacity: 0;
        transform: translateY(6px);
        transition:
          opacity var(--transition),
          transform var(--transition);
      }

      /* ── Main sections ────────────────────────────── */
      main {
        padding-top: 3rem;
        padding-bottom: 4rem;
      }

      section {
        scroll-margin-top: 80px;
      }

      /* ── Section label ────────────────────────────── */
      .section-label {
        padding-bottom: 1rem;
        font-size: 1.25rem;
        line-height: 2rem;
        font-weight: 600;
        letter-spacing: -0.025em;
        scroll-margin: 5rem;
        color: var(--text);
      }

      /* ── Social links ─────────────────────────────── */
      .social-links {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
        gap: 0.5rem;
      }

      .social-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.4375rem 0.875rem;
        border-radius: var(--radius);
        border: 1px solid var(--border);
        background: var(--bg-card);
        color: var(--text-muted);
        font-size: 0.8125rem;
        font-weight: 500;
        cursor: pointer;
        transition:
          background var(--transition),
          color var(--transition),
          border-color var(--transition);
        text-decoration: none;
      }
      .social-btn:hover {
        background: var(--bg-hover);
        color: var(--text);
        border-color: var(--ring);
      }
      .social-btn svg {
        width: 15px;
        height: 15px;
        flex-shrink: 0;
      }

      /* ── Category label ───────────────────────────── */
      .category-label {
        font-family: var(--font-mono);
        font-size: 0.6875rem;
        font-weight: 500;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--text-muted);
        margin-bottom: 0.75rem;
        margin-top: 1.5rem;
      }
      .category-label:first-of-type {
        margin-top: 0;
      }

      /* ── Social icon buttons (footer) ── */
      .social-icon-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border-radius: var(--radius);
        border: 1px solid var(--border);
        color: var(--muted-foreground);
        text-decoration: none;
        transition:
          color var(--transition),
          background var(--transition),
          border-color var(--transition);
      }
      .social-icon-btn:hover {
        color: var(--text);
        background: var(--bg-hover);
        border-color: var(--ring);
      }
      .social-icon-btn svg {
        width: 0.9rem;
        height: 0.9rem;
      }

      /* ── Footer ───────────────────────────────────── */
      footer {
        border-top: 1px solid var(--border);
        padding: 2rem 0;
      }
      .footer-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        flex-wrap: wrap;
      }
      .footer-copy {
        font-family: var(--font-mono);
        font-size: 0.75rem;
        color: var(--text-subtle);
      }
      .footer-icons {
        display: flex;
        gap: 0.4rem;
        align-items: center;
      }

      /* ── Mobile tweaks ────────────────────────────── */
      @media (max-width: 519px) {
        .tools-grid {
          grid-template-columns: 1fr 1fr;
        }
        .footer-inner {
          flex-direction: column;
          align-items: flex-start;
        }
      }
          `}
        </style>
      </Head>
      <body className="h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
