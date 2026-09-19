'use client';

import Image from 'next/image';
import Button from './ui/Button';

export interface ModalCertificateData {
  title: string;
  issuerOrOrg: string;
  date?: string;
  imageUrl?: string;
  description?: string;
  score?: string;
  badge?: string;
  category?: string;
}

interface CertificateModalProps {
  data: ModalCertificateData | null;
  onClose: () => void;
}

export default function CertificateModal({ data, onClose }: CertificateModalProps) {
  if (!data) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={data.title}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-md transition-all duration-300 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#0f172a] rounded-3xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-[#ece8f5] dark:border-slate-800 relative overflow-hidden animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0f172a] sticky top-0 z-10">
          <div className="pr-8">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              {data.issuerOrOrg}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white line-clamp-1">
              {data.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white w-9 h-9 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0 text-xl font-semibold cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Modal Body - Scrollable */}
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Certificate Image Preview */}
          {data.imageUrl ? (
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-neutral-50 dark:bg-slate-900 shadow-inner group">
              <Image
                src={data.imageUrl}
                alt={`${data.title} Certificate`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 672px"
                priority
              />
              <a
                href={data.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/75 hover:bg-black text-white text-xs font-medium backdrop-blur-sm transition-all flex items-center gap-1.5 shadow-md opacity-90 hover:opacity-100"
              >
                <span>View Full Size</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          ) : (
            <div className="p-8 text-center rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-3xl mx-auto mb-3 shadow-xs">
                📜
              </div>
              <p className="font-bold text-slate-900 dark:text-white text-base">{data.title}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-1">Issued by {data.issuerOrOrg}</p>
            </div>
          )}

          {/* Certificate Metadata & Description */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              {data.score && (
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/70 text-xs font-bold">
                  Score: {data.score}
                </span>
              )}
              {data.badge && (
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
                  {data.badge}
                </span>
              )}
              {data.date && (
                <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700">
                  📅 {data.date}
                </span>
              )}
            </div>

            {data.description && (
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                {data.description}
              </p>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0b1120] flex items-center justify-between">
          <span className="text-xs text-slate-400 dark:text-slate-400 font-medium">Verified Certificate Document</span>
          <div className="flex items-center gap-3">
            {data.imageUrl && (
              <Button
                as="a"
                href={data.imageUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="sm"
              >
                Open Original
              </Button>
            )}
            <Button variant="secondary" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
