import React from 'react';
import Head from 'next/head';

const Navbar = () => {
  const toggleMobileMenu = () => {
    document.getElementById('mobileNav').classList.toggle('open');
  };

  const toggleTheme = () => {
    const html = document.documentElement;
    const HTML_THEME_ATTRIBUTE = 'data-theme';
    const THEME_LOCAL_STOROAGE_KEY = 'theme';

    const nextTheme = html.getAttribute(HTML_THEME_ATTRIBUTE) === 'dark' ? 'light' : 'dark';
    html.setAttribute(HTML_THEME_ATTRIBUTE, nextTheme);
    localStorage.setItem(THEME_LOCAL_STOROAGE_KEY, nextTheme);
  };

  React.useEffect(() => {
    const HTML_THEME_ATTRIBUTE = 'data-theme';
    const THEME_LOCAL_STOROAGE_KEY = 'theme';

    const html = document.documentElement;
    const themeFromLocalStorage = localStorage.getItem(THEME_LOCAL_STOROAGE_KEY);
    if (themeFromLocalStorage) {
      html.setAttribute(HTML_THEME_ATTRIBUTE, themeFromLocalStorage);
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" type="image/svg" href="favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&family=Geist:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
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
        background: var(--bg);
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

      /* ── Top bar ──────────────────────────────────── */
      header {
        position: sticky;
        top: 0;
        z-index: 50;
        border-bottom: 1px solid var(--border);
        background: color-mix(in srgb, var(--bg) 80%, transparent);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }

      .nav-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 56px;
      }

      .nav-logo {
        font-family: var(--font-mono);
        font-size: 0.875rem;
        font-weight: 600;
        letter-spacing: -0.01em;
        color: var(--text);
      }

      .nav-logo span {
        color: var(--text-subtle);
        font-weight: 400;
      }

      .nav-right {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      /* ── Theme toggle ─────────────────────────────── */
      .theme-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: var(--radius);
        border: 1px solid var(--border);
        background: transparent;
        color: var(--text-muted);
        cursor: pointer;
        transition:
          background var(--transition),
          color var(--transition),
          border-color var(--transition);
      }
      .theme-toggle:hover {
        background: var(--bg-hover);
        color: var(--text);
      }
      .theme-toggle svg {
        width: 16px;
        height: 16px;
      }
      .icon-sun {
        display: none;
      }
      .icon-moon {
        display: block;
      }
      [data-theme='light'] .icon-sun {
        display: block;
      }
      [data-theme='light'] .icon-moon {
        display: none;
      }

      /* ── Nav links (desktop) ──────────────────────── */
      .nav-links {
        display: none;
        gap: 0.25rem;
        list-style: none;
      }

      .nav-link {
        font-size: 0.8125rem;
        font-weight: 500;
        color: var(--text-muted);
        padding: 0.375rem 0.625rem;
        border-radius: var(--radius);
        transition:
          background var(--transition),
          color var(--transition);
      }
      .nav-link.active {
        background: var(--bg-hover);
        color: var(--text);
      }
      .nav-link:hover {
        background: var(--bg-hover);
        color: var(--text);
      }

      .mobile-menu-btn {
        display: flex;
        width: 2.25rem;
        height: 2.25rem;
        border-radius: var(--radius);
        border: 1px solid var(--border);
        background: transparent;
        color: var(--text);
        cursor: pointer;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .mobile-menu-btn svg {
        width: 1.1rem;
        height: 1.1rem;
      }
      .mobile-nav {
        display: none;
        flex-direction: column;
        border-top: 1px solid var(--border);
        padding: 0.75rem 0;
      }
      .mobile-nav.open {
        display: flex;
      }
      .mobile-nav .nav-link {
        padding: 0.625rem 1rem;
        border-radius: 0;
        text-align: left;
        width: 100%;
      }

      @media (min-width: 520px) {
        .nav-links {
          display: flex;
        }
        .mobile-menu-btn {
          display: none;
        }
      }
        `}
        </style>
      </Head>

      <header>
        <div className="container">
          <nav className="nav-inner">
            <span className="nav-logo">
              jkus<span>.dev</span>
            </span>
            <div className="nav-links">
              <a className="nav-link" href="/">
                About me
              </a>
              <a className="nav-link active" href="/blog">
                Blog
              </a>
            </div>
            <div className="nav-right">
              <button className="theme-toggle" id="themeToggle" aria-label="Toggle theme" onClick={toggleTheme}>
                <svg
                  className="icon-sun"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
                <svg
                  className="icon-moon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
                </svg>
              </button>
              <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Menu">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>
            </div>
          </nav>
          <div className="mobile-nav" id="mobileNav">
            <a className="nav-link active" href="/public">
              About me
            </a>
            <a className="nav-link" href="/blog">
              Blog
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
