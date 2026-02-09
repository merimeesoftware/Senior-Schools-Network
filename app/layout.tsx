import type { Metadata } from 'next';
import { EB_Garamond, IM_Fell_English, Petit_Formal_Script } from 'next/font/google';
import './globals.css';
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
  metadataBase: new URL('https://seniorschoolsnetwork.org'),
  title: {
    default: 'Senior Schools Network',
    template: '%s | Senior Schools Network',
  },
  description:
    "Promoting schools aligned with John Senior's philosophy of poetic knowledge, wonder, and Catholic formation. Restoring innocence through gymnasium emphasis, adventure, and faith.",
  keywords: [
    'John Senior',
    'poetic knowledge',
    'Catholic education',
    'classical education',
    'gymnasium stage',
    'wonder-filled learning',
    'integrated humanities program',
  ],
  authors: [{ name: 'Senior Schools Network' }],
  creator: 'Senior Schools Network',
  publisher: 'Senior Schools Network',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seniorschoolsnetwork.org',
    siteName: 'Senior Schools Network',
    title: 'Senior Schools Network',
    description:
      "Catholic schools embodying John Senior's philosophy: poetic knowledge, physical discipline, and wonder-filled formation.",
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
    description:
      "Catholic schools embodying John Senior's philosophy: poetic knowledge, physical discipline, and wonder-filled formation.",
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
        {/* Skip to content for keyboard users */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus-visible-ring bg-parchment text-forest px-4 py-2 rounded-organic z-[100]">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
