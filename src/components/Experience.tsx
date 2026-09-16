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

        <div className="mt-12 max-w-4xl mx-auto flex flex-col gap-8">
          {experiences.map((exp) => (
            <Card
              key={exp.id}
              padding="lg"
              className="border border-[#ece8f5] bg-white shadow-sm hover:shadow-md transition-all relative overflow-hidden"
            >
              {/* Left purple accent stripe */}
              <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-gradient-to-b from-[#9333ea] to-[#c084fc]" />

              <div className="pl-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[#ece8f5]">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3e8ff] text-[#7e22ce] text-xs font-semibold mb-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9333ea]" />
                      Internship
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">{exp.role}</h3>
                    <p className="text-base font-semibold text-[#9333ea] mt-1">{exp.company}</p>
                  </div>
                  <div className="sm:text-right">
                    <span className="inline-block px-3.5 py-1.5 rounded-xl bg-[#faf5ff] border border-[#e9d5ff] text-[#6b21a8] text-xs sm:text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mb-3.5">Key Contributions & Responsibilities</h4>
                  <ul className="space-y-3">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-[#4b5563] text-sm sm:text-base leading-relaxed">
                        <span className="w-2 h-2 rounded-full bg-[#9333ea] mt-2 flex-shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-[#ece8f5] flex flex-wrap items-center gap-2">
                    <span className="text-xs text-[#9ca3af] font-semibold uppercase tracking-wider mr-2">Core Areas:</span>
                    {exp.techStack.map((tech) => (
                      <Badge key={tech} variant="neutral" size="sm">
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
