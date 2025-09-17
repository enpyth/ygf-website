import Providers from '@/components/layout/providers';
import { Toaster } from '@/components/ui/sonner';
import { fontVariables } from '@/lib/font';
import ThemeProvider from '@/components/layout/ThemeToggle/theme-provider';
import AppClient from '@/components/layout/AppClient';
import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import './globals.css';

const META_THEME_COLORS = {
  light: '#ffffff',
  dark: '#09090b'
};

export const metadata = {
  title: 'YGF Australia | 澳洲杨国福麻辣烫官方网站',
  description:
    '欢迎访问 YGF Australia 澳洲杨国福麻辣烫官方网站，查看门店地址、菜单、最新优惠与联系方式。正宗麻辣烫，为您带来家的味道。',
  keywords: [
    'YGF Australia',
    '澳洲杨国福',
    '麻辣烫',
    'Australia Malatang',
    '澳洲美食',
  ],
};

export const viewport: Viewport = {
  themeColor: META_THEME_COLORS.light
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
              } catch (_) {}
            `
          }}
        />
      </head>
      <body
        className={cn(
          'bg-background font-sans antialiased overflow-x-hidden',
          fontVariables
        )}
      >
        <NextTopLoader showSpinner={false} />
        <NuqsAdapter>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
            enableColorScheme
          >
            <AppClient>
              {children}
            </AppClient>
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
