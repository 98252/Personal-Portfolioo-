import { experiences } from '@/lib/data';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import Badge from './ui/Badge';

export default function Experience() {
  return (
    <section id="experience" className="section-py bg-section-alt section-divider" aria-label="Internship and experience">
      <div className="container-fluid">
        <SectionHeader
          eyebrow="Work History"
          title="Internship &"
          titleHighlight="Experience"
          subtitle="Hands-on software development experience building AI automation, user interfaces, and scalable backend modules."
        />

        <div className="mt-10 w-full max-w-5xl xl:max-w-6xl mx-auto flex flex-col items-center gap-6">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              padding="none"
              className="w-full border border-[#ece8f5] bg-white shadow-sm hover:shadow-xl hover:border-[#c084fc] transition-all duration-300 rounded-3xl overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="h-2.5 w-full bg-gradient-to-r from-[#9333ea] via-[#a855f7] to-[#c084fc]" />

              {/* Main Content with generous padding and center alignment */}
              <div className="py-10 sm:py-12 px-8 sm:px-12 lg:px-16 space-y-8 text-center w-full">
                <div className="flex flex-col items-center text-center gap-3 pb-6 border-b border-[#ece8f5]">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3e8ff] text-[#7e22ce] text-xs sm:text-sm font-semibold border border-[#e9d5ff]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9333ea]" />
                    Internship
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-lg sm:text-xl font-semibold text-[#9333ea]">
                    {exp.company}
                  </p>
                  <div className="mt-1">
                    <span className="inline-block px-4 py-1.5 rounded-xl bg-[#faf5ff] border border-[#e9d5ff] text-[#6b21a8] text-sm font-semibold shadow-2xs">
                      📅 {exp.period}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h4 className="text-xs sm:text-sm font-bold text-[#7e22ce] uppercase tracking-wider mb-5 flex items-center justify-center gap-2 text-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9333ea]" />
                    Key Contributions & Responsibilities
                  </h4>
                  <ul className="space-y-4 max-w-5xl mx-auto text-center">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="text-[#4b5563] text-base sm:text-lg leading-relaxed text-center">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#9333ea] mr-3 align-middle shadow-2xs" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="pt-6 border-t border-[#ece8f5] flex flex-wrap items-center justify-center gap-2.5">
                    <span className="text-xs sm:text-sm text-[#9ca3af] font-bold uppercase tracking-wider mr-1">Core Areas:</span>
                    {exp.techStack.map((tech) => (
                      <Badge key={tech} variant="neutral" size="md" className="shadow-2xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
