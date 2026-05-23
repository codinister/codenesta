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
  title: 'CODENESTA',
  description: `I specialize in creating refined digital experiences and have strong expertise across multiple programming languages and technologies.
  `,

  metadataBase: new URL('https://codenesta.com'), // 🔥 IMPORTANT

  openGraph: {
    title: 'CODENESTA',
    description: `I specialize in creating refined digital experiences and have strong expertise across multiple programming languages and technologies.
    `,
    url: 'https://codenesta.com',
    siteName: 'CODENESTA',
    images: [
      {
        url: '/logo.png', // will resolve with metadataBase
        width: 1200,
        height: 630,
        alt: 'Codenesta logo',
      },
    ],
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'CODENESTA',
    description: `I specialize in creating refined digital experiences and have strong expertise across multiple programming languages and technologies.`,
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
