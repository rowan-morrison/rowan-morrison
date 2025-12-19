import ClientLayout from "./ClientLayout";
import TransitionProvider from "../components/TransitionManager";

import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Rowan Morrison",
  description: "Portfolio website of Rowan Morrison, a graphic designer specializing in illustration, print, graphic design and UX/UI design.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-body bg-cultured dark:bg-black duration-300 text-black dark:text-white transition ease-in-out">
        <Providers >
            <TransitionProvider>
              <ClientLayout>{children}</ClientLayout>
            </TransitionProvider>
        </Providers>
      </body>
    </html>
  );
}
