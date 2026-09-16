import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    '!bg-[#9333ea] !text-white hover:!bg-[#7e22ce] active:!bg-[#6b21a8] shadow-[0_4px_16px_-2px_rgb(147_51_234/0.35)] hover:shadow-[0_8px_24px_-4px_rgb(147_51_234/0.45)]',
  secondary:
    '!bg-[#f3e8ff] !text-[#7e22ce] hover:!bg-[#e9d5ff] active:!bg-[#d8b4fe]',
  ghost:
    'bg-transparent !text-[#9333ea] hover:!bg-[#faf5ff] active:!bg-[#f3e8ff]',
  outline:
    'bg-transparent border-2 border-[#9333ea] !text-[#9333ea] hover:!bg-[#faf5ff] active:!bg-[#f3e8ff]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5 rounded-[10px]',
  md: 'px-6 py-3 text-base gap-2 rounded-[12px]',
  lg: 'px-8 py-3.5 text-lg gap-2.5 rounded-[14px]',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  children,
  className = '',
  as = 'button',
  href,
  target,
  rel,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9333ea] focus-visible:ring-offset-2 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-0.5';

  const classes = [baseStyles, variantStyles[variant], sizeStyles[size], className]
    .filter(Boolean)
    .join(' ');

  const inlineStyles: React.CSSProperties = {
    ...(variant === 'primary' ? { backgroundColor: '#9333ea', color: '#ffffff' } : {}),
    ...(variant === 'secondary' ? { backgroundColor: '#f3e8ff', color: '#7e22ce' } : {}),
    ...(variant === 'outline' ? { borderColor: '#9333ea', color: '#9333ea' } : {}),
    ...(style || {}),
  };

  const content = (
    <>
      {loading && (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {!loading && icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {children && <span className="font-semibold">{children}</span>}
      {!loading && icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </>
  );

  if (as === 'a' && href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} style={inlineStyles}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || loading} style={inlineStyles} {...props}>
      {content}
    </button>
  );
}
