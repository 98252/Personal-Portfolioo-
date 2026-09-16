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

        <div className="mt-12 max-w-4xl mx-auto">
          {education.map((edu) => (
            <Card
              key={edu.id}
              padding="none"
              className="border border-[#ece8f5] bg-white shadow-sm hover:shadow-xl hover:border-[#c084fc] transition-all duration-300 rounded-3xl overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="h-2 w-full bg-gradient-to-r from-[#9333ea] via-[#a855f7] to-[#c084fc]" />

              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                {/* Header: Status Pills & Period */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#ece8f5]">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f3e8ff] text-[#7e22ce] text-xs font-bold border border-[#e9d5ff]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9333ea]" />
                      Undergraduate Degree
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#faf5ff] text-[#6b21a8] text-xs font-semibold border border-[#e9d5ff]">
                      📅 {edu.period}
                    </span>
                  </div>

                  {edu.cgpa && (
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs sm:text-sm font-bold shadow-2xs">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      CGPA {edu.cgpa}
                    </span>
                  )}
                </div>

                {/* Main Degree Info */}
                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#faf5ff] border border-[#e9d5ff] flex items-center justify-center text-3xl sm:text-4xl text-[#9333ea] flex-shrink-0 shadow-xs">
                    🎓
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#111827] leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-[#9333ea] flex items-center gap-2">
                      <span>{edu.institution}</span>
                      <span className="text-[#d1d5db]">·</span>
                      <span className="text-[#6b7280] font-normal text-sm sm:text-base">{edu.location}</span>
                    </p>
                  </div>
                </div>

                {/* Government Scholarship Highlight Box */}
                {edu.scholarship && (
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-50/80 via-[#faf5ff] to-purple-50/40 border border-[#e9d5ff] flex items-start gap-4 shadow-2xs">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#e9d5ff] flex items-center justify-center text-2xl flex-shrink-0 shadow-2xs">
                      🏛️
                    </div>
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-[#7e22ce] uppercase tracking-wider block">
                        Government Recognition & Honors
                      </span>
                      <p className="text-sm sm:text-base font-bold text-[#111827]">
                        {edu.scholarship}
                      </p>
                      <p className="text-xs text-[#6b7280] leading-relaxed">
                        Prestigious merit-based full scholarship awarded for undergraduate engineering studies in India.
                      </p>
                    </div>
                  </div>
                )}

                {/* Core Areas */}
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-[#9ca3af] uppercase tracking-wider mr-1">Focus Areas:</span>
                  {['Artificial Intelligence', 'Data Structures & Algorithms', 'Full-Stack Web Dev', 'API Security', 'Database Management'].map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1 rounded-xl bg-white border border-[#ece8f5] text-[#4b5563] text-xs font-medium shadow-2xs"
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
