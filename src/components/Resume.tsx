"use client";

import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";
import Button from "./ui/Button";
import { personalInfo } from "@/lib/data";

const DownloadIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4' />
    <polyline points='7 10 12 15 17 10' />
    <line x1='12' y1='15' x2='12' y2='3' />
  </svg>
);

const ExternalIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
    <polyline points='15 3 21 3 21 9' />
    <line x1='10' y1='14' x2='21' y2='3' />
  </svg>
);

const CheckIcon = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2.5'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <polyline points='20 6 9 17 4 12' />
  </svg>
);

const DocumentIcon = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
    <polyline points='14 2 14 8 20 8' />
    <line x1='16' y1='13' x2='8' y2='13' />
    <line x1='16' y1='17' x2='8' y2='17' />
    <polyline points='10 9 9 9 8 9' />
  </svg>
);

export default function Resume() {
  const recruiterHighlights = [
    {
      label: "Degree",
      value: "B.Tech in Computer Science & Engineering (2023–Present)",
    },
    {
      label: "Institution",
      value: "Sharda University, Greater Noida · CGPA 8.4/10",
    },
    {
      label: "Scholarship",
      value:
        "100% Full Govt. Scholarship by EdCIL (India) Ltd., Govt. of India",
    },
    {
      label: "Work Experience",
      value: "Web Developer Intern at Terabyte Innovations Pvt. Ltd.",
    },
    {
      label: "Core Tech Stack",
      value:
        "Python, Java, JavaScript, Next.js, React, Node.js, Flutter, MySQL",
    },
    {
      label: "Availability",
      value: "Software Engineering Internships & Full-Time Developer Roles",
    },
  ];

  return (
    <section
      id='resume'
      className='section-py bg-section-alt section-divider'
      aria-label='Resume & CV'
    >
      <div className='container-fluid flex flex-col items-center'>
        <SectionHeader
          eyebrow='Curriculum Vitae'
          title='Resume &'
          titleHighlight='Recruiter Overview'
          subtitle='Review my verified qualifications, academic achievements, and software engineering experience.'
        />

        <div className='mt-10 w-full max-w-5xl xl:max-w-6xl mx-auto flex flex-col items-center'>
          <Card
            padding='none'
            className='w-full border border-slate-200 bg-white dark:bg-[#131c31] dark:border-slate-800 dark:hover:border-slate-700 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 rounded-3xl overflow-hidden'
          >
            {/* Top Accent Bar */}
            <div className='h-2 w-full bg-slate-800 dark:bg-slate-700' />

            <div className='py-10 sm:py-12 px-8 sm:px-12 lg:px-16 space-y-8 text-center w-full'>
              {/* Card Header with Status Badge */}
              <div className='flex flex-col items-center text-center gap-3.5 pb-6 border-b border-slate-200 dark:border-slate-800'>
                <div className='w-14 h-14 rounded-2xl bg-slate-100 border border-slate-200 dark:bg-slate-800/80 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 shrink-0 shadow-2xs'>
                  <DocumentIcon />
                </div>
                <div>
                  <span className='text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block'>
                    Candidate Snapshot
                  </span>
                  <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mt-1 text-center'>
                    {personalInfo.name}
                  </h3>
                </div>

                <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/70 text-xs sm:text-sm font-bold shadow-2xs'>
                  <span className='w-2 h-2 rounded-full bg-emerald-500' />
                  Available for Hire
                </span>
              </div>

              {/* Recruiter Key Highlights */}
              <div className='space-y-4 max-w-5xl mx-auto w-full'>
                {recruiterHighlights.map((item, idx) => (
                  <div key={idx} className='flex items-center justify-center gap-3 text-center'>
                    <span className='w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 shadow-2xs'>
                      <CheckIcon />
                    </span>
                    <p className='text-base sm:text-lg text-center leading-relaxed'>
                      <span className='font-bold text-slate-900 dark:text-white'>
                        {item.label}:{" "}
                      </span>
                      <span className='text-slate-700 dark:text-slate-300'>
                        {item.value}
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons for Recruiters - Prominently Centered */}
              <div className='pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-4 text-center w-full'>
                <div className='flex flex-wrap items-center justify-center gap-4'>
                  <Button
                    as='a'
                    href='/resume.pdf'
                    download='Rahul_Kumar_Sah_Resume.pdf'
                    variant='primary'
                    size='lg'
                    icon={<DownloadIcon />}
                    iconPosition='left'
                    className='shadow-md px-8 py-3.5 text-base sm:text-lg'
                  >
                    Download Resume (PDF)
                  </Button>

                  <Button
                    as='a'
                    href='/resume.pdf'
                    target='_blank'
                    rel='noreferrer'
                    variant='outline'
                    size='lg'
                    icon={<ExternalIcon />}
                    iconPosition='right'
                    className='px-8 py-3.5 text-base sm:text-lg'
                  >
                    View Full PDF
                  </Button>
                </div>

                <span className='inline-block text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium text-center'>
                  ATS-Formatted · Updated 2026
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
