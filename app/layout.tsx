import { ThemeProvider } from 'next-themes';
import './globals.css';
import localFont from 'next/font/local';

const noveoLocal = localFont({
  src: '/fonts/NoveoSans-Book.ttf',
  variable: '--font-noveo-local',
});

export const metadata = {
  title: 'Antonio Aranda',
  description: "Antonio's developer porfolio",
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
    <html lang="en" suppressHydrationWarning className={`${noveoLocal.variable} font-local`}>
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}