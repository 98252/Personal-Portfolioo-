'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: 'fade-up' | 'fade-in';
}

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  threshold = 0.12,
  animation = 'fade-up',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const animClass =
    animation === 'fade-up'
      ? 'translate-y-8 opacity-0'
      : 'opacity-0';

  const visibleClass =
    animation === 'fade-up'
      ? 'translate-y-0 opacity-100'
      : 'opacity-100';

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? visibleClass : animClass
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  );
}
