import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  as?: "button" | "a";
  href?: string;
  download?: string | boolean;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "!bg-slate-900 dark:!bg-slate-100 !text-white dark:!text-slate-900 hover:!bg-slate-800 dark:hover:!bg-white active:!bg-slate-950 dark:active:!bg-slate-200 shadow-sm hover:shadow-md",
  secondary:
    "!bg-slate-100 dark:!bg-slate-800 !text-slate-800 dark:!text-slate-200 hover:!bg-slate-200 dark:hover:!bg-slate-700 active:!bg-slate-300 dark:active:!bg-slate-600 border border-slate-200/80 dark:border-slate-700",
  ghost:
    "bg-transparent !text-slate-700 dark:!text-slate-300 hover:!bg-slate-100 dark:hover:!bg-slate-800 hover:!text-slate-900 dark:hover:!text-white",
  outline:
    "bg-transparent border border-slate-300 dark:border-slate-700 !text-slate-800 dark:!text-slate-200 hover:!bg-slate-50 dark:hover:!bg-slate-800/80 hover:!border-slate-400 dark:hover:!border-slate-600 active:!bg-slate-100 dark:active:!bg-slate-700",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5 rounded-[10px]",
  md: "px-6 py-3 text-base gap-2 rounded-[12px]",
  lg: "px-8 py-3.5 text-lg gap-2.5 rounded-[14px]",
};

export default function Button({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  loading = false,
  children,
  className = "",
  as = "button",
  href,
  download,
  target,
  rel,
  disabled,
  style,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 ease-out select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-800 dark:focus-visible:ring-slate-200 focus-visible:ring-offset-2 active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-0.5";

  const classes = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inlineStyles: React.CSSProperties = {
    ...(style || {}),
  };

  const content = (
    <>
      {loading && (
        <span className='w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin' />
      )}
      {!loading && icon && iconPosition === "left" && (
        <span className='shrink-0'>{icon}</span>
      )}
      {children && <span className='font-semibold'>{children}</span>}
      {!loading && icon && iconPosition === "right" && (
        <span className='shrink-0'>{icon}</span>
      )}
    </>
  );

  if (as === "a" && href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={classes}
        style={inlineStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      style={inlineStyles}
      {...props}
    >
      {content}
    </button>
  );
}
