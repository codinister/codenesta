import './globals.css';
import type { Metadata } from 'next';
import QueryProvider from '@/state/query/QueryProvider';
import { Roboto } from 'next/font/google';
import Nav from '@/components/nav/Nav';
import PageTransition from '@/components/pagetransition/PageTransition';
import StaresTransition from '@/components/pagetransition/StaresTransition';
import  {Analytics}  from '@vercel/analytics/next';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});


export const metadata: Metadata = {
  title: 'CODENESTA',
  description: `Web Designer in Accra, Website Developer in Accra Ghana, Web Design Company in Kumasi, Website Design and Development Ghana, E-commerce Website Development Ghana, Custom Web Application Development Ghana, Professional Website Designer Ghana
  `,

  metadataBase: new URL('https://codenesta.com'), // 🔥 IMPORTANT

  openGraph: {
    title: 'CODENESTA',
    description: `Web Designer in Accra, Website Developer in Accra Ghana, Web Design Company in Kumasi, Website Design and Development Ghana, E-commerce Website Development Ghana, Custom Web Application Development Ghana, Professional Website Designer Ghana
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
    description: `Web Designer in Accra, Website Developer in Accra Ghana, Web Design Company in Kumasi, Website Design and Development Ghana, E-commerce Website Development Ghana, Custom Web Application Development Ghana, Professional Website Designer Ghana`,
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
        <Analytics />
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
