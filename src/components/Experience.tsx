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
              className="w-full border border-slate-200 bg-white dark:bg-[#131c31] dark:border-slate-800 dark:hover:border-slate-700 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 rounded-3xl overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="h-2 w-full bg-slate-800 dark:bg-slate-700" />

              {/* Main Content with generous padding and center alignment */}
              <div className="py-10 sm:py-12 px-8 sm:px-12 lg:px-16 space-y-8 text-center w-full">
                <div className="flex flex-col items-center text-center gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold border border-slate-200 dark:border-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    Internship
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                    {exp.role}
                  </h3>
                  <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300">
                    {exp.company}
                  </p>
                  <div className="mt-1">
                    <span className="inline-block px-4 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm font-medium">
                      📅 {exp.period}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-5 flex items-center justify-center gap-2 text-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                    Key Contributions & Responsibilities
                  </h4>
                  <ul className="space-y-4 max-w-5xl mx-auto text-center">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed text-center">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-slate-400 dark:bg-slate-500 mr-3 align-middle" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-center gap-2.5">
                    <span className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-wider mr-1">Core Areas:</span>
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
