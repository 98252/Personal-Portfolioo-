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

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          {/* Left Column: Detailed Bio (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <Card
              padding="lg"
              className="border border-[#ece8f5] bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-[#111827] flex items-center gap-2.5">
                <span className="w-2 h-5 rounded-full bg-gradient-to-b from-[#9333ea] to-[#c084fc]" />
                Profile Summary
              </h3>

              <p className="mt-4 text-[#374151] text-base leading-relaxed">
                {personalInfo.summary}
              </p>

              <div className="mt-6 pt-5 border-t border-[#ece8f5] grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-0.5">
                  <span className="text-[#9ca3af] block text-[11px] uppercase tracking-widest font-semibold">Location</span>
                  <span className="font-semibold text-[#111827] text-sm">{personalInfo.location}</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[#9ca3af] block text-[11px] uppercase tracking-widest font-semibold">Degree</span>
                  <span className="font-semibold text-[#111827] text-sm">B.Tech CSE · 2023–Present</span>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[#9ca3af] block text-[11px] uppercase tracking-widest font-semibold">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="font-semibold text-[#9333ea] hover:underline text-sm">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="space-y-0.5">
                  <span className="text-[#9ca3af] block text-[11px] uppercase tracking-widest font-semibold">Portfolio</span>
                  <a href={personalInfo.website} target="_blank" rel="noreferrer" className="font-semibold text-[#9333ea] hover:underline text-sm">
                    rahulks.com.np ↗
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Key Highlights Grid (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => (
              <Card
                key={idx}
                padding="md"
                className="flex items-start gap-4 border border-[#ece8f5] bg-white hover:-translate-y-1 hover:shadow-md hover:border-[#c084fc] transition-all duration-250"
              >
                <div className="w-11 h-11 rounded-xl bg-[#faf5ff] border border-[#e9d5ff] flex items-center justify-center text-xl flex-shrink-0">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#9333ea] block">
                    {item.label}
                  </span>
                  <h4 className="text-sm font-bold text-[#111827] mt-0.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#6b7280] mt-0.5 leading-snug">
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
