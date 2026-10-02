"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import ThemeToggle from "./ui/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detect scroll for glassmorphism effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect active section, including hero to avoid false active states on load
  useEffect(() => {
    const ids = ["hero", ...navLinks.map((l) => l.href.replace("#", ""))];
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id === "hero" ? "" : id);
          }
        },
        { rootMargin: "-30% 0px -50% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = () => {
    setMobileOpen(false);
    setMoreOpen(false);
  };

  // Primary top links shown directly on desktop navbar
  const primaryLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];

  // Secondary links placed in sleek "More ▾" dropdown on desktop
  const secondaryLinks = [
    { label: "Certifications", href: "#certifications" },
    { label: "Education", href: "#education" },
    { label: "Resume", href: "#resume" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-xl shadow-sm dark:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.6)] border-b border-slate-200/80 dark:border-slate-800/80"
          : "bg-white/90 dark:bg-[#090d16]/90 backdrop-blur-xl border-b border-slate-200/60 dark:border-slate-800/60"
      }`}
      style={{ height: '72px' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="flex items-center justify-between w-full h-full">
          {/* ── Brand Logo / Monogram ── */}
          <a
            href="#"
            className="flex items-center gap-3 group shrink-0 focus-visible:outline-none"
            onClick={handleNavClick}
            aria-label="Rahul Kumar Sah - Home"
          >
            {/* Engineer Developer Brand Emblem */}
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 p-[1.5px] shadow-sm shadow-purple-500/20 group-hover:shadow-purple-500/40 group-hover:scale-105 transition-all duration-300 shrink-0">
              <div className="w-full h-full bg-slate-950 dark:bg-[#090d16] rounded-[10px] flex items-center justify-center p-1.5">
                {/* Custom Engineer Code Bracket Emblem: < / > */}
                <svg
                  className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M8.5 7.5L4 12L8.5 16.5"
                    stroke="url(#nav-bracket-l)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 6L10.5 18"
                    stroke="url(#nav-slash)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.5 7.5L20 12L15.5 16.5"
                    stroke="url(#nav-bracket-r)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="nav-bracket-l" x1="4" y1="7.5" x2="8.5" y2="16.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#38bdf8" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                    <linearGradient id="nav-slash" x1="13.5" y1="6" x2="10.5" y2="18" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f472b6" />
                      <stop offset="0.5" stopColor="#c084fc" />
                      <stop offset="1" stopColor="#9333ea" />
                    </linearGradient>
                    <linearGradient id="nav-bracket-r" x1="15.5" y1="7.5" x2="20" y2="16.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a855f7" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-slate-950 animate-pulse" />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="font-bold text-slate-900 dark:text-slate-100 text-[15px] sm:text-base tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Rahul Kumar Sah
              </span>
              <span className="hidden sm:inline-block text-[11px] font-medium text-slate-500 dark:text-slate-400 tracking-normal">
                Software & AI Engineer
              </span>
            </div>
          </a>

          {/* ── Desktop Navigation Links (Clean, streamlined, never congested) ── */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            <ul className="flex items-center gap-1 xl:gap-1.5">
              {primaryLinks.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <li key={link.href} className="shrink-0">
                    <a
                      href={link.href}
                      className={`px-3 xl:px-3.5 py-1.5 rounded-lg text-xs xl:text-[13.5px] font-medium transition-all duration-150 whitespace-nowrap block ${
                        isActive
                          ? "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 font-semibold border border-purple-200/60 dark:border-purple-800/60"
                          : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* "More ▾" Dropdown for secondary links */}
            <div
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMoreOpen((p) => !p)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs xl:text-[13.5px] font-medium transition-all duration-150 whitespace-nowrap cursor-pointer ${
                  secondaryLinks.some((l) => activeSection === l.href.replace("#", ""))
                    ? "bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 font-semibold border border-purple-200/60 dark:border-purple-800/60"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                }`}
                aria-expanded={moreOpen}
              >
                <span>More</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Dropdown floating menu */}
              {moreOpen && (
                <div className="absolute right-0 mt-1 w-44 rounded-2xl bg-white/95 dark:bg-[#0f172a]/95 backdrop-blur-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl py-1.5 z-50 animate-fade-in">
                  {secondaryLinks.map((link) => {
                    const id = link.href.replace("#", "");
                    const isActive = activeSection === id;
                    return (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={handleNavClick}
                        className={`flex items-center justify-between px-3.5 py-2 text-xs xl:text-sm font-medium transition-colors ${
                          isActive
                            ? "text-purple-600 dark:text-purple-400 font-semibold bg-purple-50/80 dark:bg-purple-950/40"
                            : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                        }`}
                      >
                        <span>{link.label}</span>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                        )}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Contact Action CTA Button & Theme Toggle */}
            <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200 dark:border-slate-800">
              <a
                href="#contact"
                className="px-4 py-2 rounded-full text-xs xl:text-[13px] font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-sm shadow-purple-500/20 hover:shadow-purple-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap shrink-0"
              >
                Get in Touch
              </a>

              <ThemeToggle />
            </div>
          </div>

          {/* ── Mobile & Tablet Actions ── */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />

            <button
              id="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((p) => !p)}
              className="flex flex-col justify-center items-center w-10 h-10 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 transition-colors gap-1.25 p-2"
            >
              <span
                className={`block h-0.5 w-5 bg-slate-700 dark:bg-slate-300 rounded-full transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-1.75" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-slate-700 dark:bg-slate-300 rounded-full transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-slate-700 dark:bg-slate-300 rounded-full transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-1.75" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu drawer ── */}
      <div
        className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-2xl border-t border-slate-200/80 dark:border-slate-800/80 px-4 py-5 shadow-xl">
          <ul className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "text-purple-600 dark:text-purple-400 font-semibold bg-purple-50 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/60"
                        : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for opportunities</span>
            </div>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
