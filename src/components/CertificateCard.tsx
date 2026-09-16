import { Certification } from '@/lib/types';
import Card from './ui/Card';

interface CertificateCardProps {
  cert: Certification;
  onSelect?: (cert: Certification) => void;
}

export default function CertificateCard({ cert, onSelect }: CertificateCardProps) {
  return (
    <Card
      padding="lg"
      className="border border-[#ece8f5] bg-white hover:-translate-y-1.5 hover:shadow-xl hover:border-[#c084fc] transition-all duration-300 cursor-pointer group flex flex-col justify-between"
      onClick={() => onSelect && onSelect(cert)}
    >
      <div>
        {/* Top bar with Icon & Badges */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-[#faf5ff] border border-[#e9d5ff] flex items-center justify-center text-2xl text-[#9333ea] flex-shrink-0 group-hover:scale-110 group-hover:bg-[#9333ea] group-hover:text-white transition-all duration-300 shadow-xs">
            📜
          </div>

          <div className="flex flex-col items-end gap-1.5">
            {cert.score && (
              <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold whitespace-nowrap">
                ★ {cert.score}
              </span>
            )}
            {cert.category && (
              <span className="text-[11px] font-semibold text-[#7e22ce] bg-[#f3e8ff] px-2.5 py-0.5 rounded-full">
                {cert.category}
              </span>
            )}
          </div>
        </div>

        {/* Issuer */}
        <span className="text-xs font-bold text-[#9333ea] uppercase tracking-wider block mb-1">
          {cert.issuer}
        </span>

        {/* Title */}
        <h4 className="text-base sm:text-lg font-bold text-[#111827] group-hover:text-[#9333ea] transition-colors line-clamp-2 leading-snug">
          {cert.title}
        </h4>

        {/* Description */}
        {cert.description && (
          <p className="text-xs sm:text-sm text-[#6b7280] mt-2 line-clamp-2 leading-relaxed">
            {cert.description}
          </p>
        )}
      </div>

      {/* Card Footer action button */}
      <div className="mt-5 pt-4 border-t border-[#ece8f5] flex items-center justify-between text-xs">
        <span className="text-[#9ca3af] font-medium">{cert.date || 'Verified Credential'}</span>
        <button
          type="button"
          className="font-bold text-[#9333ea] bg-[#faf5ff] group-hover:bg-[#9333ea] group-hover:text-white px-3 py-1.5 rounded-xl border border-[#e9d5ff] transition-all flex items-center gap-1.5 shadow-xs"
        >
          <span>{cert.imageUrl ? 'View Certificate' : 'View Details'}</span>
          <span>↗</span>
        </button>
      </div>
    </Card>
  );
}
