interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3.5 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f3e8ff] text-[#7e22ce] text-xs font-semibold tracking-wide uppercase border border-[#e9d5ff]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9333ea] inline-block" />
          {eyebrow}
        </span>
      )}

      <h2 className="font-extrabold text-[#111827] leading-tight">
        {title}{' '}
        {titleHighlight && (
          <span
            className="bg-gradient-to-r from-[#9333ea] to-[#c084fc] bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            {titleHighlight}
          </span>
        )}
      </h2>

      {/* Decorative accent underline */}
      <div className={`flex gap-1.5 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-1 w-10 rounded-full bg-[#9333ea]" />
        <span className="h-1 w-4 rounded-full bg-[#c084fc]" />
        <span className="h-1 w-2 rounded-full bg-[#e9d5ff]" />
      </div>

      {subtitle && (
        <p className="max-w-3xl text-[#4b5563] text-sm sm:text-base md:text-lg leading-relaxed mt-0.5">
          {subtitle}
        </p>
      )}
    </div>
  );
}
