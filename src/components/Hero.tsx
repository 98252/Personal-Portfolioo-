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
      className='relative min-h-[92vh] flex items-center overflow-hidden pt-20 pb-12'
      aria-label='Hero section'
    >
      {/* ── Background decorations ── */}
      <div
        className='absolute inset-0 pointer-events-none select-none'
        aria-hidden='true'
      >
        {/* Large orb top-right */}
        <div
          className='absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full opacity-25'
          style={{
            background:
              "radial-gradient(circle at 40% 40%, #c084fc 0%, #9333ea 40%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        {/* Orb bottom-left */}
        <div
          className='absolute bottom-10 -left-20 w-[450px] h-[450px] rounded-full opacity-20'
          style={{
            background:
              "radial-gradient(circle, #e9d5ff 0%, #c084fc 60%, transparent 80%)",
            filter: "blur(70px)",
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
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-14 items-center'>
          {/* ────────── LEFT COLUMN — Text (7 cols) ────────── */}
          <div className='lg:col-span-7 flex flex-col gap-6 order-2 lg:order-1'>
            {/* Availability & Scholarship Pill */}
            <div className='flex flex-wrap items-center gap-2.5 animate-fade-up'>
              <span className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3e8ff] border border-[#e9d5ff] text-[#7e22ce] text-xs sm:text-sm font-medium'>
                <span className='relative flex h-2.5 w-2.5'>
                  <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9333ea] opacity-75' />
                  <span className='relative inline-flex h-2.5 w-2.5 rounded-full bg-[#9333ea]' />
                </span>
                Available for Roles & Internships
              </span>

              <span className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm font-medium'>
                <span className='w-2 h-2 rounded-full bg-emerald-500' />
                EdCIL 100% Govt. Scholar
              </span>
            </div>

            {/* Main headline */}
            <div className='animate-fade-up' style={{ animationDelay: "80ms" }}>
              <h1 className='font-extrabold text-[#111827] text-4xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight'>
                Hi, I&apos;m{" "}
                <span
                  className='bg-gradient-to-r from-[#9333ea] via-[#a855f7] to-[#c084fc] bg-clip-text text-transparent'
                  style={{
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {personalInfo.name}
                </span>
              </h1>
              <p className='mt-3 text-lg sm:text-xl font-medium text-[#6b21a8]'>
                {personalInfo.title} | {personalInfo.subtitle}
              </p>
            </div>

            {/* Role Tags */}
            <div
              className='flex flex-wrap gap-2 animate-fade-up'
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
                  className='flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#ede9f6] text-[#4b5563] text-xs sm:text-sm font-medium shadow-xs'
                >
                  <span className='text-[#9333ea]'>
                    <SparkleIcon />
                  </span>
                  {item}
                </span>
              ))}
            </div>

            {/* Bio summary */}
            <p
              className='text-[#4b5563] text-base sm:text-lg leading-relaxed max-w-2xl animate-fade-up'
              style={{ animationDelay: "240ms" }}
            >
              {personalInfo.summary}
            </p>

            {/* Location & Contact Meta */}
            <div
              className='flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-[#6b7280] animate-fade-up'
              style={{ animationDelay: "300ms" }}
            >
              <div className='flex items-center gap-1.5'>
                <span className='text-[#9333ea]'>
                  <LocationIcon />
                </span>
                <span>{personalInfo.location}</span>
              </div>
              <a
                href={`mailto:${personalInfo.email}`}
                className='flex items-center gap-1.5 hover:text-[#9333ea] transition-colors'
              >
                <span className='text-[#9333ea]'>
                  <MailIcon />
                </span>
                <span>{personalInfo.email}</span>
              </a>
              <a
                href={personalInfo.website}
                target='_blank'
                rel='noreferrer'
                className='text-[#9333ea] hover:underline font-medium'
              >
                rahulks.com.np ↗
              </a>
            </div>

            {/* CTA buttons & Socials */}
            <div
              className='flex flex-wrap items-center gap-3 pt-2 animate-fade-up'
              style={{ animationDelay: "360ms" }}
            >
              <Button
                as='a'
                href='#projects'
                variant='primary'
                size='lg'
                icon={<ArrowIcon />}
                iconPosition='right'
              >
                View Projects
              </Button>
              <Button as='a' href='#resume' variant='outline' size='lg'>
                View Resume
              </Button>
              <Button as='a' href='#contact' variant='secondary' size='lg'>
                Contact Me
              </Button>

              {/* Social icons */}
              <div className='flex items-center gap-2 sm:ml-1'>
                <a
                  href={personalInfo.github}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='GitHub Profile'
                  className='p-3 rounded-xl border border-[#ece8f5] bg-white text-[#374151] hover:text-[#9333ea] hover:border-[#c084fc] hover:shadow-md transition-all'
                >
                  <GithubIcon />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='LinkedIn Profile'
                  className='p-3 rounded-xl border border-[#ece8f5] bg-white text-[#374151] hover:text-[#9333ea] hover:border-[#c084fc] hover:shadow-md transition-all'
                >
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>

          {/* ────────── RIGHT COLUMN — Photo Card (5 cols) ────────── */}
          <div
            className='lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-up'
            style={{ animationDelay: "200ms" }}
          >
            <div className='relative'>
              {/* Soft purple gradient backglow */}
              <div
                className='absolute -inset-4 rounded-[36px] opacity-30 bg-gradient-to-tr from-[#9333ea] via-[#c084fc] to-[#e9d5ff] blur-xl'
                aria-hidden='true'
              />

              {/* Photo Card Container */}
              <div className='relative w-[280px] sm:w-[330px] h-[370px] sm:h-[430px] rounded-[28px] overflow-hidden shadow-[0_20px_50px_-10px_rgb(147_51_234/0.28)] border-4 border-white bg-white'>
                <Image
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - Computer Science Student`}
                  fill
                  priority
                  className='object-cover object-top scale-[0.93]'
                  sizes='(max-width: 640px) 280px, 330px'
                />
                <div
                  className='absolute inset-0 pointer-events-none'
                  style={{
                    background:
                      "linear-gradient(to top, rgba(147,51,234,0.18) 0%, transparent 40%)",
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
