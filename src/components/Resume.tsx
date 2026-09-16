'use client';

import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import Button from './ui/Button';
import { personalInfo } from '@/lib/data';

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const DocumentIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

export default function Resume() {
  const recruiterHighlights = [
    { label: 'Degree', value: 'B.Tech in Computer Science & Engineering (2023–Present)' },
    { label: 'Institution', value: 'Sharda University, Greater Noida · CGPA 8.4/10' },
    { label: 'Scholarship', value: '100% Full Govt. Scholarship by EdCIL (India) Ltd., Govt. of India' },
    { label: 'Work Experience', value: 'Web Developer Intern at Terabyte Innovations Pvt. Ltd.' },
    { label: 'Core Tech Stack', value: 'Python, Java, JavaScript, Next.js, React, Node.js, Flutter, MySQL' },
    { label: 'Availability', value: 'Software Engineering Internships & Full-Time Developer Roles' },
  ];

  return (
    <section id="resume" className="section-py bg-section-alt section-divider" aria-label="Resume & CV">
      <div className="container-fluid">
        <SectionHeader
          eyebrow="Curriculum Vitae"
          title="Resume &"
          titleHighlight="Recruiter Overview"
          subtitle="Review my verified qualifications, academic achievements, and software engineering experience."
        />

        <div className="mt-12 max-w-3xl mx-auto">
          <Card padding="lg" className="border border-[#ece8f5] bg-white shadow-sm flex flex-col gap-6">

            {/* Card Header with Status Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#ece8f5]">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#faf5ff] border border-[#e9d5ff] flex items-center justify-center text-[#9333ea] flex-shrink-0 shadow-xs">
                  <DocumentIcon />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#9333ea] uppercase tracking-wider block">Candidate Snapshot</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827] mt-0.5">{personalInfo.name}</h3>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs sm:text-sm font-bold shadow-2xs self-start sm:self-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Hire
              </span>
            </div>

            {/* Recruiter Key Highlights */}
            <div className="space-y-3.5">
              {recruiterHighlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-[#f3e8ff] text-[#7e22ce] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
                    <CheckIcon />
                  </div>
                  <div className="text-sm sm:text-base">
                    <span className="font-bold text-[#111827]">{item.label}: </span>
                    <span className="text-[#4b5563] leading-relaxed">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons for Recruiters */}
            <div className="pt-5 border-t border-[#ece8f5] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  as="a"
                  href="/resume.pdf"
                  download="Rahul_Kumar_Sah_Resume.pdf"
                  variant="primary"
                  size="md"
                  icon={<DownloadIcon />}
                  iconPosition="left"
                  className="shadow-sm"
                >
                  Download Resume (PDF)
                </Button>

                <Button
                  as="a"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  size="md"
                  icon={<ExternalIcon />}
                  iconPosition="right"
                >
                  View Full PDF
                </Button>
              </div>

              <span className="text-xs text-[#6b7280] font-medium">
                ATS-Formatted · Updated 2026
              </span>
            </div>

          </Card>
        </div>
      </div>
    </section>
  );
}
