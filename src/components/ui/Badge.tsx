interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'neutral' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

const variantMap = {
  purple: 'bg-[#f3e8ff] text-[#7e22ce] border border-[#e9d5ff]',
  neutral: 'bg-[#f5f5f5] text-[#525252] border border-[#e5e5e5]',
  outline: 'bg-transparent text-[#9333ea] border border-[#9333ea]',
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
