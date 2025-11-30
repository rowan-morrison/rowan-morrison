import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Providers } from "./providers";
import ScrollToTop from "./ScrollToTop";
import LoadingOverlay from "@/components/LoadingOverlay";

export const metadata = {
  title: "Rowan Morrison",
  description: "Portfolio website of Rowan Morrison, a graphic designer specializing in web development, UI/UX design and illustration.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen font-body bg-isabelline dark:bg-richBlack transition-colors duration-300 text-licorice dark:text-isabelline transition ease-in-out">
        <Providers >
          <Header />
          <ScrollToTop />
          <LoadingOverlay />
          <main className="grow overflow-auto">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
