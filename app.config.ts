export const AppConfig = {
  host: process.env.GITHUB_PAGES_ORIGIN as string, // or Custom Domain
  defaultLocale: 'ja',
  locales: [
    {
      id: 'ja',
      label: 'Japanese',
    },
    // {
    //   id: 'en',
    //   label: 'English',
    // },
  ],
  defaultTheme: 'system', // 'light' | 'dark' | 'system'

  // Please set the features you want to hide to false.
  toolbar: {
    print: true,
    theme: true,
    locale: true,
  },
} as const;

export type LocaleId = (typeof AppConfig)['locales'][number]['id'];
