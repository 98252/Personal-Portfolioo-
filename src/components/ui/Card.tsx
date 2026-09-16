import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  glass?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const paddingMap = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({
  children,
  className = '',
  hover = false,
  glow = false,
  glass = false,
  padding = 'md',
  onClick,
}: CardProps) {
  const base =
    'rounded-2xl border transition-all duration-300';

  const bgStyle = glass
    ? 'bg-white/70 backdrop-blur-md border-white/80'
    : 'bg-white border-[#ece8f5]';

  const hoverStyle = hover
    ? 'hover:-translate-y-1.5 hover:shadow-[0_12px_32px_-4px_rgb(0_0_0/0.1),0_4px_12px_-4px_rgb(0_0_0/0.06)] cursor-pointer'
    : 'shadow-[0_2px_8px_-1px_rgb(0_0_0/0.06),0_1px_3px_-1px_rgb(0_0_0/0.04)]';

  const glowStyle = glow
    ? 'hover:shadow-[0_8px_32px_-4px_rgb(147_51_234/0.2)]'
    : '';

  return (
    <div
      onClick={onClick}
      className={[base, bgStyle, hoverStyle, glowStyle, paddingMap[padding], className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
