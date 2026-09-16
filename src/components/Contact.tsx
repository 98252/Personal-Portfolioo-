'use client';

import { useState } from 'react';
import { personalInfo } from '@/lib/data';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import Button from './ui/Button';

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const LocationPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-py bg-section-white section-divider" aria-label="Contact Section">
      <div className="container-fluid">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Build"
          titleHighlight="Together"
          subtitle="Feel free to reach out for software development opportunities, AI projects, internships, or technical collaborations."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Card padding="lg" className="border border-[#ece8f5] bg-white shadow-sm flex flex-col gap-6">
              <h3 className="text-xl font-bold text-[#111827]">Contact Details</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">
                I am actively seeking software engineering internships and developer roles. Send a message or reach out through direct channels:
              </p>

              <div className="flex flex-col gap-5 pt-2">
                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#faf5ff] border border-[#e9d5ff] flex items-center justify-center text-[#9333ea] group-hover:bg-[#9333ea] group-hover:text-white transition-all shadow-2xs">
                    <MailIcon />
                  </div>
                  <div>
                    <span className="text-xs text-[#9ca3af] uppercase tracking-wider block font-semibold">Email</span>
                    <span className="text-sm sm:text-base font-semibold text-[#111827] group-hover:text-[#9333ea] transition-colors">
                      {personalInfo.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#faf5ff] border border-[#e9d5ff] flex items-center justify-center text-[#9333ea] group-hover:bg-[#9333ea] group-hover:text-white transition-all shadow-2xs">
                    <PhoneIcon />
                  </div>
                  <div>
                    <span className="text-xs text-[#9ca3af] uppercase tracking-wider block font-semibold">Phone</span>
                    <span className="text-sm sm:text-base font-semibold text-[#111827] group-hover:text-[#9333ea] transition-colors">
                      {personalInfo.phone}
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#faf5ff] border border-[#e9d5ff] flex items-center justify-center text-[#9333ea] shadow-2xs">
                    <LocationPinIcon />
                  </div>
                  <div>
                    <span className="text-xs text-[#9ca3af] uppercase tracking-wider block font-semibold">Location</span>
                    <span className="text-sm sm:text-base font-semibold text-[#111827]">
                      {personalInfo.location}
                    </span>
                  </div>
                </div>

                {/* Website */}
                <a
                  href={personalInfo.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#faf5ff] border border-[#e9d5ff] flex items-center justify-center text-[#9333ea] group-hover:bg-[#9333ea] group-hover:text-white transition-all shadow-2xs">
                    <GlobeIcon />
                  </div>
                  <div>
                    <span className="text-xs text-[#9ca3af] uppercase tracking-wider block font-semibold">Website</span>
                    <span className="text-sm sm:text-base font-semibold text-[#111827] group-hover:text-[#9333ea] transition-colors">
                      rahulks.com.np ↗
                    </span>
                  </div>
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <Card padding="none" className="border border-[#ece8f5] bg-white shadow-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-[#111827] mb-1.5">Send a Message</h3>
              <p className="text-sm text-[#6b7280] mb-6 leading-relaxed">Leave a note and I will get back to you promptly.</p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#faf5ff] border border-[#e9d5ff] text-center">
                  <div className="w-12 h-12 rounded-full bg-[#9333ea] text-white flex items-center justify-center mx-auto mb-3 text-xl shadow-xs">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold text-[#111827]">Message Received!</h4>
                  <p className="text-sm text-[#6b7280] mt-1">Thank you for reaching out, Rahul will respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-[#ece8f5] focus:border-[#9333ea] focus:ring-2 focus:ring-[#f3e8ff] outline-none text-sm transition-all text-[#111827] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-[#ece8f5] focus:border-[#9333ea] focus:ring-2 focus:ring-[#f3e8ff] outline-none text-sm transition-all text-[#111827] bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-[#ece8f5] focus:border-[#9333ea] focus:ring-2 focus:ring-[#f3e8ff] outline-none text-sm transition-all text-[#111827] bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#ece8f5] focus:border-[#9333ea] focus:ring-2 focus:ring-[#f3e8ff] outline-none text-sm transition-all resize-none text-[#111827] bg-white"
                    />
                  </div>

                  <div className="pt-3 pb-1">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      className="w-full sm:w-auto px-7 py-3 font-bold !bg-[#9333ea] !text-white hover:!bg-[#7e22ce] shadow-md shadow-purple-500/25 cursor-pointer"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
