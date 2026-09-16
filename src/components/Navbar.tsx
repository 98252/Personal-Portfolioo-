"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detect scroll for glassmorphism effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on route change
  const handleNavClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_2px_20px_-4px_rgb(0_0_0/0.08)] border-b border-border-subtle/90"
          : "bg-transparent"
      }`}
    >
      <nav className='container-fluid'>
        <div className='flex items-center justify-between h-16 md:h-18'>
          {/* ── Logo / Name ── */}
          <a
            href='#'
            className='flex items-center gap-2.5 group'
            onClick={handleNavClick}
          >
            {/* Purple monogram */}
            <span className='w-9 h-9 rounded-xl bg-linear-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-base shadow-[0_4px_12px_-2px_rgb(147_51_234/0.4)] group-hover:shadow-[0_6px_20px_-2px_rgb(147_51_234/0.5)] transition-shadow duration-300'>
              R
            </span>
            <span className='font-semibold text-[#171717] text-[0.95rem] hidden sm:block tracking-tight'>
              Rahul<span className='text-primary'> Kumar Sah</span>
            </span>
          </a>

          {/* ── Desktop nav links ── */}
          <ul className='hidden md:flex items-center gap-3 lg:gap-4'>
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "text-primary bg-primary-faint"
                        : "text-[#525252] hover:text-primary hover:bg-primary-faint"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* ── Mobile hamburger ── */}
          <button
            id='mobile-menu-toggle'
            aria-label='Toggle mobile menu'
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((p) => !p)}
            className='md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl hover:bg-primary-faint transition-colors gap-1.25 p-2'
          >
            <span
              className={`block h-0.5 w-5 bg-[#404040] rounded-full transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-1.75" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#404040] rounded-full transition-all duration-300 ${
                mobileOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-[#404040] rounded-full transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-1.75" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* ── Mobile menu panel ── */}
      <div
        className={`md:hidden transition-all duration-300 ease-out overflow-hidden ${
          mobileOpen ? "max-h-105 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className='bg-white/95 backdrop-blur-xl border-t border-border-subtle px-4 py-4'>
          <ul className='flex flex-col gap-1'>
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "text-primary bg-primary-faint"
                        : "text-[#404040] hover:text-primary hover:bg-primary-faint"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
