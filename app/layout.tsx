import type { Metadata } from 'next';
import { EB_Garamond, IM_Fell_English, Petit_Formal_Script } from 'next/font/google';
import './globals.css';
import { SITE_ORIGIN } from '@/lib/site';
import { ONE_LINER } from '@/lib/content/public-lines';
import { getCurrentLiturgicalSeason, getSeasonClassName } from '@/lib/utils/liturgical';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
});

const imFellEnglish = IM_Fell_English({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const petitFormalScript = Petit_Formal_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: 'Senior Schools Network',
    template: '%s | Senior Schools Network',
  },
  description: ONE_LINER,
  keywords: [
    'John Senior',
    'poetic knowledge',
    'Catholic education',
    'classical education',
    'gymnastic years',
    'wonder-filled learning',
    'integrated humanities program',
  ],
  authors: [{ name: 'Senior Schools Network' }],
  creator: 'Senior Schools Network',
  publisher: 'Senior Schools Network',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_ORIGIN,
    siteName: 'Senior Schools Network',
    title: 'Senior Schools Network',
    description: ONE_LINER,
    images: [
      {
        url: '/og-image-enclosed-garden.jpg',
        width: 1200,
        height: 630,
        alt: 'An enclosed garden symbolizing protected wonder and formation - Senior Schools Network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senior Schools Network',
    description: ONE_LINER,
    images: ['/og-image-enclosed-garden.jpg'],
  },
  icons: {
    icon: '/assets/logos/favicon.webp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const seasonInfo = getCurrentLiturgicalSeason();
  const seasonClass = getSeasonClassName(seasonInfo);
  
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${imFellEnglish.variable} ${petitFormalScript.variable}`}
    >
      <body 
        className={seasonClass}
        data-season={seasonInfo.season}
        data-season-color={seasonInfo.color}
      >
        {/* Skip to content for keyboard users. Custom .sr-only uses !important and hides Tailwind's focus:not-sr-only, so this uses .skip-link. */}
        <a href="#main-content" className="skip-link focus-visible-ring bg-parchment text-forest rounded-organic font-lato">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
