import { ThemeProvider } from 'next-themes';
import './globals.css';
import localFont from 'next/font/local';
import DynamicFavicon from '@/components/dynamic-favicon';

const noveoLocal = localFont({
  src: '/fonts/NoveoSans-Book.ttf',
  variable: '--font-noveo-local',
});

export const metadata = {
  title: 'Antonio Aranda',
  description: "Antonio Aranda's developer porfolio",
  icons: {
    icon: [
      { 
        url: '/favicon-light.ico', 
        media: '(prefers-color-scheme: light)' 
      },
      { 
        url: '/favicon-dark.ico', 
        media: '(prefers-color-scheme: dark)' 
      }
    ]
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${noveoLocal.variable} font-local`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DynamicFavicon />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}