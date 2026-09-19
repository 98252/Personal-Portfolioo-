import { Certification } from '@/lib/types';
import Card from './ui/Card';

interface CertificateCardProps {
  cert: Certification;
  onSelect?: (cert: Certification) => void;
}

export default function CertificateCard({ cert, onSelect }: CertificateCardProps) {
  return (
    <Card
      padding="none"
      className="w-full border border-slate-200 bg-white dark:bg-[#131c31] dark:border-slate-800 dark:hover:border-slate-700 hover:-translate-y-1.5 hover:shadow-md hover:border-slate-300 transition-all duration-300 cursor-pointer group flex flex-col justify-between p-6 rounded-2xl"
      onClick={() => onSelect && onSelect(cert)}
    >
      <div>
        {/* Top bar with Icon & Badges */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 dark:bg-slate-800/80 dark:border-slate-700 flex items-center justify-center text-2xl text-slate-700 dark:text-slate-200 flex-shrink-0 group-hover:scale-105 group-hover:bg-slate-200 dark:group-hover:bg-slate-700 transition-all duration-300 shadow-2xs">
            📜
          </div>

          <div className="flex flex-col items-end gap-1.5">
            {cert.score && (
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/70 text-xs font-bold whitespace-nowrap">
                ★ {cert.score}
              </span>
            )}
            {cert.category && (
              <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded-full">
                {cert.category}
              </span>
            )}
          </div>
        </div>

        {/* Issuer */}
        <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
          {cert.issuer}
        </span>

        {/* Title */}
        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors line-clamp-2 leading-snug">
          {cert.title}
        </h4>

        {/* Description */}
        {cert.description && (
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 line-clamp-2 leading-relaxed">
            {cert.description}
          </p>
        )}
      </div>

      {/* Card Footer action button */}
      <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
        <span className="text-slate-400 dark:text-slate-400 font-medium">{cert.date || 'Verified Credential'}</span>
        <button
          type="button"
          className="font-semibold text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 group-hover:bg-slate-100 dark:group-hover:bg-slate-700 group-hover:text-slate-900 dark:group-hover:text-white px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-1.5 shadow-2xs"
        >
          <span>{cert.imageUrl ? 'View Certificate' : 'View Details'}</span>
          <span>↗</span>
        </button>
      </div>
    </Card>
  );
}
