interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

const variantMap = {
  purple: 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80',
  neutral: 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700',
  outline: 'bg-transparent text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700',
};

const sizeMap = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
};

export default function Badge({
  children,
  variant = 'purple',
  size = 'sm',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center font-medium rounded-full leading-tight transition-colors',
        variantMap[variant],
        sizeMap[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  );
}
