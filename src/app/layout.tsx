import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
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
  title: 'Rahul Kumar Sah | CS & Engineering Student · AI & Software Developer',
  description:
    'Personal portfolio of Rahul Kumar Sah — Computer Science & Engineering Student and AI & Software Developer based in Greater Noida, India.',
  keywords: [
    'Rahul Kumar Sah',
    'Computer Science',
    'AI Developer',
    'Software Developer',
    'Greater Noida',
    'Portfolio',
  ],
  authors: [{ name: 'Rahul Kumar Sah' }],
  openGraph: {
    title: 'Rahul Kumar Sah | CS & Engineering Student · AI & Software Developer',
    description:
      'Personal portfolio of Rahul Kumar Sah — Computer Science & Engineering Student and AI & Software Developer based in Greater Noida, India.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rahul Kumar Sah | Portfolio',
    description:
      'CS & Engineering Student and AI & Software Developer based in Greater Noida, India.',
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
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
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
