"use client";

import Image from "next/image";
import { personalInfo } from "@/lib/data";
import Button from "./ui/Button";

// SVG icons
const ArrowIcon = () => (
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
    <line x1='5' y1='12' x2='19' y2='12' />
    <polyline points='12 5 19 12 12 19' />
  </svg>
);

const LocationIcon = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z' />
    <circle cx='12' cy='10' r='3' />
  </svg>
);

const GithubIcon = () => (
  <svg width='19' height='19' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z' />
  </svg>
);

const LinkedinIcon = () => (
  <svg width='19' height='19' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
  </svg>
);

const MailIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z' />
    <polyline points='22,6 12,13 2,6' />
  </svg>
);

const SparkleIcon = () => (
  <svg width='15' height='15' viewBox='0 0 24 24' fill='currentColor'>
    <path d='M12 2l2.09 6.26L20 10l-5.91 1.74L12 18l-2.09-6.26L4 10l5.91-1.74L12 2z' />
  </svg>
);

export default function Hero() {
  return (
    <section
      id='hero'
      className='relative min-h-[82vh] flex flex-col justify-center overflow-hidden pt-28 sm:pt-32 pb-10 sm:pb-12'
      aria-label='Hero section'
    >
      {/* ── Background decorations ── */}
      <div
        className='absolute inset-0 pointer-events-none select-none'
        aria-hidden='true'
      >
        {/* Large orb top-right */}
        <div
          className='absolute -top-24 -right-24 w-[700px] h-[700px] rounded-full opacity-25'
          style={{
            background:
              "radial-gradient(circle at 40% 40%, #c084fc 0%, #9333ea 40%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        {/* Orb bottom-left */}
        <div
          className='absolute bottom-10 -left-20 w-[550px] h-[550px] rounded-full opacity-20'
          style={{
            background:
              "radial-gradient(circle, #e9d5ff 0%, #c084fc 60%, transparent 80%)",
            filter: "blur(80px)",
          }}
        />
        {/* Subtle dot grid */}
        <div
          className='absolute inset-0 opacity-[0.035]'
          style={{
            backgroundImage:
              "radial-gradient(circle, #9333ea 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className='container-fluid relative z-10'>
        <div className='w-full max-w-6xl xl:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center'>
          {/* ────────── LEFT COLUMN — Text (7 cols) ────────── */}
          <div className='lg:col-span-7 flex flex-col gap-5 sm:gap-6 order-2 lg:order-1'>
            {/* Availability & Scholarship Pill */}
            <div className='flex flex-wrap items-center gap-3 animate-fade-up'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-semibold'>
                <span className='relative flex h-2.5 w-2.5'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75' />
                  <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600' />
                </span>
                Available for Roles & Internships
              </span>

              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-semibold'>
                <span className='w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-500' />
                EdCIL 100% Govt. Scholar
              </span>
            </div>

            {/* Main headline */}
            <div className='animate-fade-up' style={{ animationDelay: "80ms" }}>
              <h1 className='font-extrabold text-slate-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight'>
                Hi, I&apos;m{" "}
                <span className='text-slate-900 dark:text-white'>
                  {personalInfo.name}
                </span>
              </h1>
              <p className='mt-3.5 text-base sm:text-xl font-medium text-slate-600 dark:text-slate-400'>
                {personalInfo.title} | {personalInfo.subtitle}
              </p>
            </div>

            {/* Role Tags */}
            <div
              className='flex flex-wrap gap-2.5 animate-fade-up'
              style={{ animationDelay: "160ms" }}
            >
              {[
                "AI & NLP Solutions",
                "Full-Stack Web Development",
                "Python & Java",
                "API Security",
              ].map((item) => (
                <span
                  key={item}
                  className='flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white dark:bg-[#131c31] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm md:text-base font-medium shadow-2xs'
                >
                  <span className='text-slate-400 dark:text-slate-500'>
                    <SparkleIcon />
                  </span>
                  {item}
                </span>
              ))}
            </div>

            {/* Bio summary */}
            <p
              className='text-slate-600 dark:text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl lg:max-w-4xl animate-fade-up'
              style={{ animationDelay: "240ms" }}
            >
              {personalInfo.summary}
            </p>

            {/* Location & Contact Meta */}
            <div
              className='flex flex-wrap items-center gap-4 sm:gap-7 text-sm sm:text-base text-slate-600 dark:text-slate-400 animate-fade-up'
              style={{ animationDelay: "300ms" }}
            >
              <div className='flex items-center gap-2'>
                <span className='text-slate-400 dark:text-slate-500'>
                  <LocationIcon />
                </span>
                <span>{personalInfo.location}</span>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className='flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors'
              >
                <span className='text-slate-400 dark:text-slate-500'>
                  <MailIcon />
                </span>
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.website}
                target='_blank'
                rel='noreferrer'
                className='text-slate-900 dark:text-slate-100 hover:text-slate-700 dark:hover:text-white font-semibold flex items-center gap-1 underline underline-offset-4'
              >
                <span>rahulks.com.np</span>
                <span>↗</span>
              </a>
            </div>

            {/* CTA buttons & Socials */}
            <div
              className='flex flex-wrap items-center gap-3.5 pt-3 animate-fade-up'
              style={{ animationDelay: "360ms" }}
            >
              <Button
                as='a'
                href='#projects'
                variant='primary'
                size='lg'
                icon={<ArrowIcon />}
                iconPosition='right'
                className='px-7 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg'
              >
                View Projects
              </Button>
              <Button
                as='a'
                href='#resume'
                variant='outline'
                size='lg'
                className='px-7 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg'
              >
                View Resume
              </Button>
              <Button
                as='a'
                href='#contact'
                variant='secondary'
                size='lg'
                className='px-7 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg'
              >
                Contact Me
              </Button>

              {/* Social icons */}
              <div className='flex items-center gap-2.5 sm:ml-2'>
                <a
                  href={personalInfo.github}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='GitHub Profile'
                  className='p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c31] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all'
                >
                  <GithubIcon />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='LinkedIn Profile'
                  className='p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#131c31] text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all'
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* ────────── RIGHT COLUMN — Photo Card (5 cols) ────────── */}
          <div
            className='lg:col-span-5 flex justify-center items-center order-1 lg:order-2 animate-fade-up'
            style={{ animationDelay: "200ms" }}
          >
            <div className='relative'>
              {/* Soft purple gradient backglow */}
              <div
                className='absolute -inset-6 rounded-[40px] opacity-30 dark:opacity-20 bg-gradient-to-tr from-[#9333ea] via-[#c084fc] to-[#e9d5ff] blur-2xl'
                aria-hidden='true'
              />

              {/* Photo Card Container */}
              <div className='relative w-[290px] sm:w-[350px] lg:w-[380px] xl:w-[420px] h-[380px] sm:h-[450px] lg:h-[490px] xl:h-[530px] rounded-[32px] overflow-hidden shadow-[0_20px_50px_-10px_rgb(0_0_0/0.15)] dark:shadow-[0_20px_50px_-10px_rgb(0_0_0/0.6)] border-4 sm:border-6 border-white dark:border-slate-800 bg-white dark:bg-slate-900'>
                <Image
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - Computer Science Student`}
                  fill
                  priority
                  className='object-cover object-center'
                  sizes='(max-width: 640px) 290px, (max-width: 1024px) 380px, 420px'
                />
                <div
                  className='absolute inset-0 pointer-events-none'
                  style={{
                    background:
                      "linear-gradient(to top, rgba(147,51,234,0.14) 0%, transparent 35%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
