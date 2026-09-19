import { personalInfo } from '@/lib/data';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';

export default function About() {
  const highlights = [
    {
      icon: '🎓',
      label: 'Academics',
      title: 'B.Tech in CSE',
      subtitle: 'Sharda University · CGPA 8.4/10',
    },
    {
      icon: '🏆',
      label: 'Scholarship',
      title: '100% Govt. Scholarship',
      subtitle: 'Awarded by EdCIL (India) Ltd., Govt. of India',
    },
    {
      icon: '💼',
      label: 'Experience',
      title: 'Web Developer Intern',
      subtitle: 'Terabyte Innovations Pvt. Ltd.',
    },
    {
      icon: '🚀',
      label: 'Hackathons',
      title: 'Competitive Builder',
      subtitle: 'IIT Delhi Tryst 2025 & IIIT Delhi Hackathons',
    },
  ];

  return (
    <section
      id="about"
      className="section-py bg-section-alt section-divider"
      aria-label="About section"
    >
      <div className="container-fluid">
        <SectionHeader
          eyebrow="Profile Overview"
          title="About"
          titleHighlight="Rahul Kumar Sah"
          subtitle="A results-oriented Computer Science student focused on building intelligent software, scalable web platforms, and secure APIs."
        />

        <div className="mt-10 w-full max-w-6xl xl:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Detailed Bio (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Card
              padding="none"
              className="w-full border border-[#ece8f5] bg-white dark:bg-[#131c31] dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 p-8 sm:p-10 lg:p-12 rounded-3xl text-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center justify-center gap-3 text-center">
                <span className="w-2 h-5 rounded-full bg-slate-800 dark:bg-slate-300" />
                Profile Summary
              </h3>

              <p className="mt-5 text-slate-700 dark:text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed text-center">
                {personalInfo.summary}
              </p>

              <div className="mt-8 pt-6 border-t border-[#ece8f5] dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-5 text-center">
                <div className="space-y-1 text-center">
                  <span className="text-slate-400 dark:text-slate-400 block text-xs uppercase tracking-widest font-bold">Location</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-base block">{personalInfo.location}</span>
                </div>
                <div className="space-y-1 text-center">
                  <span className="text-slate-400 dark:text-slate-400 block text-xs uppercase tracking-widest font-bold">Degree</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-base block">B.Tech CSE · 2023–Present</span>
                </div>
                <div className="space-y-1 text-center">
                  <span className="text-slate-400 dark:text-slate-400 block text-xs uppercase tracking-widest font-bold">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="font-semibold text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-300 hover:underline text-base block">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="space-y-1 text-center">
                  <span className="text-slate-400 dark:text-slate-400 block text-xs uppercase tracking-widest font-bold">Portfolio</span>
                  <a href={personalInfo.website} target="_blank" rel="noreferrer" className="font-semibold text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-300 hover:underline text-base block">
                    rahulks.com.np ↗
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Key Highlights Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5">
            {highlights.map((item, idx) => (
              <Card
                key={idx}
                padding="none"
                className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-5 border border-slate-200 bg-white dark:bg-[#131c31] dark:border-slate-800 dark:hover:border-slate-700 hover:-translate-y-1 hover:shadow-md hover:border-slate-300 transition-all duration-250 p-6 rounded-2xl text-center sm:text-left"
              >
                <div className="w-13 h-13 rounded-2xl bg-slate-100 border border-slate-200 dark:bg-slate-800/80 dark:border-slate-700 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 block">
                    {item.label}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-0.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
