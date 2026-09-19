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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'needs_activation' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setStatus('success');
      } else if (result.needsActivation) {
        setStatus('needs_activation');
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Unable to send message at this time.');
      }
    } catch {
      // Fallback directly to FormSubmit
      try {
        const directRes = await fetch('https://formsubmit.co/ajax/sahr67568@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            _subject: `New Portfolio Message from ${formData.name}: ${formData.subject}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });
        const directData = await directRes.json();
        if (directData.success === 'true' || directData.success === true) {
          setStatus('success');
          return;
        }
        if (typeof directData.message === 'string' && directData.message.includes('Activation')) {
          setStatus('needs_activation');
          return;
        }
      } catch {
        // Fallback failed
      }
      setStatus('error');
      setErrorMessage('Network error while transmitting message. You can send directly via email below.');
    }
  };

  const handleRetry = async () => {
    setStatus('loading');
    setErrorMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
      } else if (result.needsActivation) {
        setStatus('needs_activation');
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Unable to send message.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error while transmitting message.');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
    setErrorMessage('');
  };

  const mailtoUrl = `mailto:sahr67568@gmail.com?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="section-py bg-section-white section-divider" aria-label="Contact Section">
      <div className="container-fluid">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Build"
          titleHighlight="Together"
          subtitle="Feel free to reach out for software development opportunities, AI projects, internships, or technical collaborations."
        />

        <div className="mt-10 w-full max-w-6xl xl:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Card padding="none" className="w-full border border-[#ece8f5] bg-white shadow-sm flex flex-col gap-6 p-6 sm:p-8 lg:p-10 rounded-3xl">
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
            <Card padding="none" className="w-full border border-[#ece8f5] bg-white shadow-sm p-6 sm:p-8 lg:p-10 rounded-3xl">
              <div className="flex items-center justify-between mb-1.5">
                <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">Send a Message</h3>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#faf5ff] text-[#9333ea] border border-[#e9d5ff]">
                  Direct to Inbox
                </span>
              </div>
              <p className="text-sm text-[#6b7280] mb-6 leading-relaxed">
                Fill in the form below and your message will be delivered directly to <strong className="text-[#9333ea]">sahr67568@gmail.com</strong>.
              </p>

              {/* SUCCESS STATE */}
              {status === 'success' && (
                <div className="p-8 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-center flex flex-col items-center gap-4 animate-fade-up">
                  <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-md">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#111827]">Message Sent Successfully!</h4>
                    <p className="text-sm text-[#4b5563] mt-2 max-w-md leading-relaxed">
                      Thank you for contacting, your message has been delivered to <strong>sahr67568@gmail.com</strong>. Rahul will reply to you shortly.
                    </p>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleReset}
                    className="mt-2 text-sm font-semibold !border-[#9333ea] !text-[#9333ea] hover:!bg-[#faf5ff]"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}

              {/* ONE-TIME ACTIVATION STATE */}
              {status === 'needs_activation' && (
                <div className="p-6 sm:p-7 rounded-2xl bg-[#faf5ff] border border-[#e9d5ff] text-left flex flex-col gap-4 animate-fade-up">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#9333ea] text-white flex items-center justify-center text-xl shrink-0">
                      📬
                    </span>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#111827]">
                        One-Time Email Verification Required
                      </h4>
                      <p className="text-xs text-[#9333ea] font-semibold">Security protection for sahr67568@gmail.com</p>
                    </div>
                  </div>

                  <div className="text-sm text-[#4b5563] space-y-2 leading-relaxed bg-white p-4 rounded-xl border border-[#ece8f5]">
                    <p className="font-medium text-[#111827]">To prevent spam, FormSubmit requires email verification once:</p>
                    <ol className="list-decimal list-inside space-y-1 text-xs sm:text-sm text-[#4b5563]">
                      <li>Open your Gmail inbox at <strong>sahr67568@gmail.com</strong> (check Spam folder if needed).</li>
                      <li>Open the email from <strong>FormSubmit</strong> titled <em>&quot;Action Required: Activate your FormSubmit form&quot;</em>.</li>
                      <li>Click the green <strong>&quot;Activate Form&quot;</strong> button inside that email.</li>
                    </ol>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <Button
                      type="button"
                      variant="primary"
                      size="sm"
                      onClick={handleRetry}
                      className="px-5 py-2.5 rounded-xl !bg-[#9333ea] !text-white font-bold text-sm hover:!bg-[#7e22ce] shadow-sm transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>I Clicked Activate in Gmail, Send Now</span>
                      <span>→</span>
                    </Button>

                    <a
                      href={mailtoUrl}
                      className="px-4 py-2 rounded-xl bg-white border border-[#ece8f5] text-[#374151] hover:text-[#9333ea] hover:border-[#c084fc] text-xs font-semibold transition-all inline-flex items-center gap-1.5"
                    >
                      <span>Or Send via Email App</span>
                      <span>↗</span>
                    </a>

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => setStatus('idle')}
                      className="text-xs text-[#6b7280] hover:text-[#111827]"
                    >
                      Back to Form
                    </Button>
                  </div>
                </div>
              )}

              {/* IDLE / LOADING / ERROR FORM */}
              {status !== 'success' && status !== 'needs_activation' && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <span>{errorMessage}</span>
                      <a
                        href={mailtoUrl}
                        className="font-bold underline text-red-800 hover:text-red-900 shrink-0"
                      >
                        Send via Email App ↗
                      </a>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-[#9333ea]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#ece8f5] focus:border-[#9333ea] focus:ring-2 focus:ring-[#f3e8ff] outline-none text-sm transition-all text-[#111827] bg-white disabled:bg-[#f9fafb]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                        Your Email <span className="text-[#9333ea]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'loading'}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#ece8f5] focus:border-[#9333ea] focus:ring-2 focus:ring-[#f3e8ff] outline-none text-sm transition-all text-[#111827] bg-white disabled:bg-[#f9fafb]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={status === 'loading'}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#ece8f5] focus:border-[#9333ea] focus:ring-2 focus:ring-[#f3e8ff] outline-none text-sm transition-all text-[#111827] bg-white disabled:bg-[#f9fafb]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#374151] uppercase tracking-wider mb-1.5">
                      Message <span className="text-[#9333ea]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={status === 'loading'}
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#ece8f5] focus:border-[#9333ea] focus:ring-2 focus:ring-[#f3e8ff] outline-none text-sm transition-all resize-none text-[#111827] bg-white disabled:bg-[#f9fafb]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      disabled={status === 'loading'}
                      className="w-full sm:w-auto px-8 py-3.5 font-bold !bg-[#9333ea] !text-white hover:!bg-[#7e22ce] shadow-md shadow-purple-500/25 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Sending to sahr67568@gmail.com...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <span>→</span>
                        </>
                      )}
                    </Button>

                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs font-semibold text-[#6b7280] hover:text-[#9333ea] transition-colors"
                    >
                      Prefer default mail app? Open Mail ↗
                    </a>
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
