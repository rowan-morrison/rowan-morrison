"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // App Router hook
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "./ScrollToTop";
import LoadingScreen from "../components/LoadingScreen";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Initial page load
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  // Show loading each time user navigates to "/"
useEffect(() => {
  if (pathname === "/") {
    const startTimeout = setTimeout(() => setLoading(true), 0); // schedule after render
    const stopTimeout = setTimeout(() => setLoading(false), 1000);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(stopTimeout);
    };
  }
}, [pathname]);

  return (
    <>
      <Header />
      <ScrollToTop />
      {loading ? <LoadingScreen /> : <main>{children}</main>}
      <Footer />
    </>
  );
}