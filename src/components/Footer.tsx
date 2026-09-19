import { personalInfo } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-divider bg-section-alt py-12">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Branding & Status */}
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-slate-100 flex items-center justify-center text-white dark:text-slate-900 font-bold text-sm shadow-sm">
              R
            </span>
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
