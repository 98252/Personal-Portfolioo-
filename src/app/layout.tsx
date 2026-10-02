import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

const themeScript = `
  (function() {
    try {
      var stored = localStorage.getItem('portfolio-theme');
      var isDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches) || (stored === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    } catch (e) {}
  })();
`;

export const metadata: Metadata = {
  title: {
    default: 'Rahul Kumar Sah — Software & AI Engineer',
    template: '%s | Rahul Kumar Sah',
  },
  description:
    'Personal portfolio of Rahul Kumar Sah — Software & AI Engineer specializing in full-stack development, intelligent systems, and scalable digital solutions.',
  keywords: [
    'Rahul Kumar Sah',
    'Software Engineer',
    'AI Engineer',
    'Full Stack Developer',
    'Computer Science',
    'Portfolio',
  ],
  authors: [{ name: 'Rahul Kumar Sah' }],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Rahul Kumar Sah — Software & AI Engineer',
    description:
      'Personal portfolio of Rahul Kumar Sah — Software & AI Engineer specializing in full-stack engineering, intelligent systems, and scalable solutions.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Kumar Sah — Software & AI Engineer',
    description:
      'Software & AI Engineer specializing in full-stack engineering and intelligent systems.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <Script id="theme-script" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
