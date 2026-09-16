import { personalInfo } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-divider bg-section-alt py-12">
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left: Branding & Status */}
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#9333ea] to-[#c084fc] flex items-center justify-center text-white font-bold text-sm shadow-sm">
              R
            </span>
            <div>
              <p className="font-bold text-[#111827] text-sm sm:text-base">{personalInfo.name}</p>
              <p className="text-xs text-[#6b7280]">
                {personalInfo.title} | {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Center: Social & Direct Links */}
          <div className="flex items-center gap-5 text-sm font-medium text-[#4b5563]">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#9333ea] transition-colors"
            >
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#9333ea] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[#9333ea] transition-colors"
            >
              Email
            </a>
            <a
              href={personalInfo.website}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#9333ea] transition-colors"
            >
              Website
            </a>
          </div>

          {/* Right: Copyright & Back to top */}
          <div className="flex items-center gap-4 text-xs text-[#9ca3af]">
            <span>&copy; {year} Rahul Kumar Sah</span>
            <span>·</span>
            <a
              href="#"
              className="font-semibold text-[#9333ea] hover:text-[#7e22ce] transition-colors inline-flex items-center gap-1"
            >
              Top ↑
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
