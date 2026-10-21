import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/data/siteConfig';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Creatik AI | Enterprise AI Automation & Applied Tech Training in Jaipur',
    template: '%s | Creatik AI',
  },
  description:
    'Creatik AI (Creatik IT Solutions LLP) delivers enterprise AI workflow automations, domain-trained RAG chatbots, modern web engineering, and project-first technical training in Jaipur, Rajasthan.',
  keywords: [
    'Creatik AI',
    'Creatik IT Solutions LLP',
    'AI automation Jaipur',
    'n8n workflow development',
    'AI agents and chatbots',
    'AI training Jaipur',
    'Machine learning course Jaipur',
    'Full stack development training',
    'Digital marketing training Jaipur',
    'Robotics and AI coaching',
    'Web development Jaipur',
    'Technical SEO Rajasthan',
  ],
  authors: [{ name: 'Creatik AI Engineering Team', url: siteConfig.url }],
  creator: 'Creatik AI',
  publisher: 'Creatik IT Solutions LLP',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Creatik AI | Enterprise AI Automation & Applied Tech Training',
    description:
      'Purpose-built workflow automations, custom AI software systems, and practical hands-on engineering programs based in Jaipur, Rajasthan.',
    url: siteConfig.url,
    siteName: 'Creatik AI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creatik AI | Enterprise AI Automation & Applied Tech Training',
    description:
      'Purpose-built workflow automations, custom AI software systems, and practical hands-on engineering programs based in Jaipur, Rajasthan.',
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
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        email: siteConfig.contact.officialEmail,
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.state,
          addressCountry: siteConfig.location.country,
        },
        description: siteConfig.description,
      },
      {
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('creatik-theme');
                  if (stored === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-slate-100 selection:bg-sky-500 selection:text-white transition-colors duration-200">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
