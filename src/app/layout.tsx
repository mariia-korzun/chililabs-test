import './globals.css';
import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import { Footer } from '@/components';

const font = Libre_Baskerville({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChiliLabs Test',
  description: 'Front end developer test'
};

type IProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body
        className={`${font.className} flex flex-col items-center p-4 min-h-screen bg-background text-primary`}
      >
        <main className="flex flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
