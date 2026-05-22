import './globals.css';
import type { Metadata } from 'next';
import QueryProvider from '@/state/query/QueryProvider';
import { Roboto } from 'next/font/google';
import { cn } from '@/lib/utils';
import Nav from '@/components/nav/Nav';
import PageTransition from '@/components/pagetransition/PageTransition';
import StaresTransition from '@/components/pagetransition/StaresTransition';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Agape Movement',
  description: `Agape Movement is a wellness and wholeness community for adults at every stage of life. This space supports personal growth, healthy relationships, marriage, healing after divorce, mental and emotional well-being, parenting, and healthy living.
  `,

  metadataBase: new URL('https://agapemovementus.org'), // 🔥 IMPORTANT

  openGraph: {
    title: 'Agape Movement',
    description: `Agape Movement is a wellness and wholeness community for adults at every stage of life. This space supports personal growth, healthy relationships, marriage, healing after divorce, mental and emotional well-being, parenting, and healthy living.
    `,
    url: 'https://agapemovementus.org',
    siteName: 'Agape Movement',
    images: [
      {
        url: '/logo.png', // will resolve with metadataBase
        width: 1200,
        height: 630,
        alt: 'Agape Movement',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Agape Movement',
    description: `Agape Movement is a wellness and wholeness community for adults at every stage of life. This space supports personal growth, healthy relationships, marriage, healing after divorce, mental and emotional well-being, parenting, and healthy living.`,
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-qb-installed="true"
      suppressHydrationWarning={true}
      className={roboto.className}
    >
      <body cz-shortcut-listen="true">
        <QueryProvider>
          <StaresTransition />
          <PageTransition>
            <Nav />
            {children}
          </PageTransition>
        </QueryProvider>
      </body>
    </html>
  );
}
