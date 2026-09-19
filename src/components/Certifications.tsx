'use client';

import { useState } from 'react';
import { certifications, achievements, researchPresentations } from '@/lib/data';
import SectionHeader from './ui/SectionHeader';
import Card from './ui/Card';
import CertificateCard from './CertificateCard';
import CertificateModal, { ModalCertificateData } from './CertificateModal';

export default function Certifications() {
  const [modalData, setModalData] = useState<ModalCertificateData | null>(null);

  return (
    <section id="certifications" className="section-py bg-section-alt section-divider" aria-label="Achievements and Certifications">
      <div className="container-fluid">
        <SectionHeader
          eyebrow="Credentials & Research"
          title="Certifications &"
          titleHighlight="Achievements"
          subtitle="Click on any card to open and inspect the verified official certificate."
        />

        {/* ── 1. Featured Research Presentation (ICSDS-2025) ── */}
        <div className="mt-10 w-full max-w-6xl xl:max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9333ea]" />
            <h3 className="text-lg font-bold text-[#111827]">Conference Research Presentation</h3>
          </div>

          {researchPresentations.map((paper) => (
            <Card
              key={paper.id}
              padding="none"
              className="w-full border border-[#ece8f5] bg-white hover:-translate-y-1 hover:shadow-xl hover:border-[#c084fc] transition-all duration-300 cursor-pointer group p-6 sm:p-8 rounded-2xl"
              onClick={() =>
                setModalData({
                  title: paper.title,
                  issuerOrOrg: paper.conference,
                  date: paper.date,
                  imageUrl: paper.imageUrl,
                  badge: paper.indexing,
                  description: `Presented research paper at ${paper.conference} organized by ${paper.organizer}. Published / indexed with ${paper.indexing}. Representing ${paper.institution}.`,
                })
              }
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-[#faf5ff] border border-[#e9d5ff] flex items-center justify-center text-3xl text-[#9333ea] flex-shrink-0 group-hover:scale-105 group-hover:bg-[#9333ea] group-hover:text-white transition-all duration-300 shadow-xs">
                    📄
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2.5">
                      <span className="px-3 py-1 rounded-full bg-[#f3e8ff] text-[#7e22ce] text-xs font-bold border border-[#e9d5ff]">
                        {paper.type}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                        {paper.indexing}
                      </span>
                      <span className="text-xs text-[#9ca3af] font-medium sm:ml-auto">
                        {paper.date}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-bold text-[#111827] group-hover:text-[#9333ea] transition-colors leading-snug">
                      {paper.title}
                    </h4>

                    <p className="text-sm font-semibold text-[#9333ea] mt-2">
                      {paper.conference}
                    </p>

                    <p className="text-xs sm:text-sm text-[#6b7280] mt-1 leading-relaxed">
                      Organized by {paper.organizer} · {paper.institution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Prompt */}
              <div className="mt-6 pt-4 border-t border-[#ece8f5] flex items-center justify-between text-xs">
                <span className="text-[#9ca3af]">Official Certificate of Presentation available</span>
                <span className="font-bold text-[#9333ea] bg-[#faf5ff] group-hover:bg-[#9333ea] group-hover:text-white px-3.5 py-1.5 rounded-xl border border-[#e9d5ff] transition-all flex items-center gap-1.5 shadow-xs">
                  <span>View Certificate</span>
                  <span>↗</span>
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* ── 2. Hackathons & Competitions ── */}
        <div className="mt-12 w-full max-w-6xl xl:max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9333ea]" />
            <h3 className="text-lg font-bold text-[#111827]">Hackathon Honors & Participation</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((ach) => (
              <Card
                key={ach.id}
                padding="none"
                className="w-full border border-[#ece8f5] bg-white hover:-translate-y-1.5 hover:shadow-xl hover:border-[#c084fc] transition-all duration-300 cursor-pointer group flex flex-col justify-between p-6 sm:p-7 rounded-2xl"
                onClick={() =>
                  setModalData({
                    title: ach.title,
                    issuerOrOrg: ach.organization,
                    date: ach.date || ach.year,
                    imageUrl: ach.imageUrl,
                    badge: ach.badge,
                    description: ach.description,
                  })
                }
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-105 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-xs">
                      🏆
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider border border-amber-200">
                        {ach.badge || 'Hackathon'}
                      </span>
                      <span className="text-xs text-[#9ca3af] font-medium">{ach.year || ach.date}</span>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-[#111827] group-hover:text-[#9333ea] transition-colors mt-2 leading-snug">
                    {ach.title}
                  </h4>

                  <p className="text-sm font-semibold text-[#9333ea] mt-1">
                    {ach.organization}
                  </p>

                  {ach.description && (
                    <p className="text-xs sm:text-sm text-[#6b7280] mt-2.5 line-clamp-2 leading-relaxed">
                      {ach.description}
                    </p>
                  )}
                </div>

                <div className="mt-5 pt-4 border-t border-[#ece8f5] flex items-center justify-between text-xs">
                  <span className="text-[#9ca3af]">{ach.date || 'Hackathon Event'}</span>
                  <span className="font-bold text-[#9333ea] bg-[#faf5ff] group-hover:bg-[#9333ea] group-hover:text-white px-3 py-1.5 rounded-xl border border-[#e9d5ff] transition-all flex items-center gap-1.5 shadow-xs">
                    <span>{ach.imageUrl ? 'View Certificate' : 'View Details'}</span>
                    <span>↗</span>
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* ── 3. Verified Industry & Government Certifications ── */}
        <div className="mt-12 w-full max-w-6xl xl:max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9333ea]" />
            <h3 className="text-lg font-bold text-[#111827]">Industry & Government Certifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert) => (
              <CertificateCard
                key={cert.id}
                cert={cert}
                onSelect={(c) =>
                  setModalData({
                    title: c.title,
                    issuerOrOrg: c.issuer,
                    date: c.date,
                    imageUrl: c.imageUrl,
                    score: c.score,
                    category: c.category,
                    description: c.description,
                  })
                }
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Interactive Modal that opens upon clicking ── */}
      <CertificateModal
        data={modalData}
        onClose={() => setModalData(null)}
      />
    </section>
  );
}
