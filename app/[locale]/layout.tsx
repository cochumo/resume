import { ThemeProvider } from '@/app/components/theme-provider';
import AnimatedLayout from '@/app/components/animated-layout';
import { getData } from '@/data';
import { I18nProviderClient } from '@/locales/client';
// import { Inter } from 'next/font/google';
import '../globals.css';
import { AppConfig } from '@/app.config';
import { Metadata } from 'next';
import { getCurrentLocale } from '@/locales/server';

// const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata() {
  try {
    // Use the fallback data directly for now
    const jaData = await import('@/data/ja');
    const data = jaData.default;
    const locale = 'ja'; // fallback to ja

    const meta: Metadata = {
      title: 'resume',
      description: data?.summary || 'Resume',
      metadataBase: AppConfig.host ? new URL(AppConfig.host) : undefined,
      openGraph: {
        title: 'resume',
        description: data?.summary || 'Resume',
        images: [`/locale/${locale}/og-image.png`],
      },
      twitter: {
        card: 'summary_large_image',
        images: [`/locale/${locale}/og-image.png`],
      },
    };

    return meta;
  } catch (error) {
    console.error('Error generating metadata:', error);
    // Fallback metadata if there's an error
    return {
      title: 'resume',
      description: 'Resume',
    };
  }
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="print:text-[15px]" suppressHydrationWarning>
      <body className="font-sans">
        <I18nProviderClient locale={locale}>
          <ThemeProvider
            attribute="class"
            defaultTheme={AppConfig.defaultTheme}
            enableSystem
            disableTransitionOnChange
          >
            <AnimatedLayout>
              {children}
            </AnimatedLayout>
          </ThemeProvider>
        </I18nProviderClient>
      </body>
    </html>
  );
}
