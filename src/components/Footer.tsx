import { personalInfo } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-divider bg-section-alt py-12">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Branding & Status */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 p-[1.5px] shadow-sm shadow-purple-500/20 shrink-0">
              <div className="w-full h-full bg-slate-950 dark:bg-[#090d16] rounded-[10px] flex items-center justify-center p-1.5">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M8.5 7.5L4 12L8.5 16.5"
                    stroke="url(#footer-bracket-l)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.5 6L10.5 18"
                    stroke="url(#footer-slash)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.5 7.5L20 12L15.5 16.5"
                    stroke="url(#footer-bracket-r)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="footer-bracket-l" x1="4" y1="7.5" x2="8.5" y2="16.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#38bdf8" />
                      <stop offset="1" stopColor="#818cf8" />
                    </linearGradient>
                    <linearGradient id="footer-slash" x1="13.5" y1="6" x2="10.5" y2="18" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f472b6" />
                      <stop offset="0.5" stopColor="#c084fc" />
                      <stop offset="1" stopColor="#9333ea" />
                    </linearGradient>
                    <linearGradient id="footer-bracket-r" x1="15.5" y1="7.5" x2="20" y2="16.5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#a855f7" />
                      <stop offset="1" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{personalInfo.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {personalInfo.title} | {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Center: Social & Direct Links */}
          <div className="flex items-center gap-5 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Website
            </a>
          </div>

          {/* Right: Copyright & Back to top */}
          <div className="flex items-center gap-4 text-xs text-slate-400 dark:text-slate-400">
            <span>&copy; {year} Rahul Kumar Sah</span>
            <span>·</span>
            <a
              href="#"
              className="font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Top ↑
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
