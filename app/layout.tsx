import { ThemeProvider } from 'next-themes';
import './globals.css';
import localFont from 'next/font/local';

const interLocal = localFont({
  src: '/fonts/InterVariable.ttf',
  variable: '--font-inter-local',
});

export const metadata = {
  title: 'Antonio Aranda',
  description: "Antonio Aranda's developer porfolio",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${interLocal.variable} font-local`}>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}