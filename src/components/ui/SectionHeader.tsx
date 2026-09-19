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
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide uppercase border border-slate-200 dark:border-slate-700">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500 dark:bg-slate-400 inline-block" />
          {eyebrow}
        </span>
      )}

      <h2 className="font-extrabold text-slate-900 dark:text-slate-50 leading-tight">
        {title}{' '}
        {titleHighlight && (
          <span className="text-slate-900 dark:text-slate-50">
            {titleHighlight}
          </span>
        )}
      </h2>

      {/* Clean accent underline */}
      <div className={`flex gap-1.5 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-1 w-10 rounded-full bg-slate-800 dark:bg-slate-200" />
        <span className="h-1 w-3 rounded-full bg-slate-300 dark:bg-slate-600" />
      </div>

      {subtitle && (
        <p className="max-w-3xl text-slate-600 dark:text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed mt-0.5">
          {subtitle}
        </p>
      )}
    </div>
  );
}
