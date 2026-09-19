import { education } from '@/lib/data';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';

export default function Education() {
  return (
    <section id="education" className="section-py bg-section-white section-divider" aria-label="Education section">
      <div className="container-fluid">
        <SectionHeader
          eyebrow="Academic Background"
          title="Education &"
          titleHighlight="Qualifications"
          subtitle="Formal engineering degree in Computer Science with top academic standing and prestigious government scholarship."
        />

        <div className="mt-10 w-full max-w-5xl xl:max-w-6xl mx-auto flex flex-col items-center">
          {education.map((edu) => (
            <Card
              key={edu.id}
              padding="none"
              className="w-full border border-slate-200 bg-white dark:bg-[#131c31] dark:border-slate-800 dark:hover:border-slate-700 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 rounded-3xl overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="h-2 w-full bg-slate-800 dark:bg-slate-700" />

              <div className="py-10 sm:py-12 px-8 sm:px-12 lg:px-16 space-y-8 text-center w-full">
                {/* Header: Status Pills & Period */}
                <div className="flex flex-wrap items-center justify-center gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-bold border border-slate-200 dark:border-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                    Undergraduate Degree
                  </span>
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-medium border border-slate-200 dark:border-slate-700">
                    📅 {edu.period}
                  </span>

                  {edu.cgpa && (
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/70 text-xs sm:text-sm font-bold shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      CGPA {edu.cgpa}
                    </span>
                  )}
                </div>

                {/* Main Degree Info */}
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-3xl sm:text-4xl text-slate-700 dark:text-slate-200 shrink-0 shadow-2xs">
                    🎓
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight text-center">
                      {edu.degree}
                    </h3>
                    <p className="text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300 flex items-center justify-center gap-2 text-center">
                      <span>{edu.institution}</span>
                      <span className="text-slate-300 dark:text-slate-600">·</span>
                      <span className="text-slate-500 dark:text-slate-400 font-normal text-base sm:text-lg">{edu.location}</span>
                    </p>
                  </div>
                </div>

                {/* Government Scholarship Highlight Box */}
                {edu.scholarship && (
                  <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/80 flex flex-col items-center text-center gap-3 shadow-2xs max-w-4xl mx-auto w-full">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-2xl shrink-0 shadow-2xs">
                      🏛️
                    </div>
                    <div className="space-y-1.5 max-w-3xl mx-auto">
                      <span className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                        Government Recognition & Honors
                      </span>
                      <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                        {edu.scholarship}
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        Prestigious merit-based full scholarship awarded for undergraduate engineering studies in India.
                      </p>
                    </div>
                  </div>
                )}

                {/* Core Areas */}
                <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
                  <span className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mr-1">Focus Areas:</span>
                  {['Artificial Intelligence', 'Data Structures & Algorithms', 'Full-Stack Web Dev', 'API Security', 'Database Management'].map((area) => (
                    <span
                      key={area}
                      className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium shadow-2xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
