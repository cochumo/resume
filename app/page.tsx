import { AppConfig } from '@/app.config';
import { getData } from '@/data';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

const data = getData();

export const metadata: Metadata = {
  title: 'resume',
  description: data.summary,
  robots: {
    index: false,
    follow: false,
  },
  verification: {
    google: 'dMEr2ii9JNHrmmS_CI64yhp5IUu1vXVa3s1rXjW57-g',
  },
  openGraph: {
    title: 'resume',
    description: data.summary,
    images: [`/locale/${AppConfig.defaultLocale}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    images: [`/locale/${AppConfig.defaultLocale}/og-image.png`],
  },
};

export default function RootPage() {
  redirect(AppConfig.defaultLocale);
}
