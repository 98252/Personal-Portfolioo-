import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

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
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
