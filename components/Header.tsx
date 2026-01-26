"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/lib/slugify";
import { usePathname } from "next/navigation";

const projectCategories = [
  "branding & identity",
  "print design",
  "illustration",
  "editorial design",
  "animation",
  "web & digital",
];

export default function Header() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const bottomSentinelRef = useRef<HTMLDivElement>(null);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const pathname = usePathname();
  const shopReady = false;
  const MOBILE_BREAKPOINT = 768;

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideHeader(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    if (bottomSentinelRef.current) {
      observer.observe(bottomSentinelRef.current);
    }

    return () => observer.disconnect();
  }, []);

useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setHideHeader(false);
}, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <header id="portfolio-header" ref={headerRef}
          className={`fixed top-0 inset-x-0 w-full z-[990] md:static md:h-screen md:w-[240px] transition-opacity ease-in-out duration-300 ${hideHeader ? "opacity-0" : "opacity-100"}`}>
      <div className="relative flex flex-row items-center px-5 py-4 w-full
md:flex-col md:items-start md:justify-start md:h-full">
        <div className="relative z-[999] w-32 h-12 sm:w-40 sm:h-16 md:mb-8 md:mt-0 md:pl-5">
        <Link href="/" id="logo" className="relative block w-full h-full">
          <Image
            src={resolvedTheme === "dark" ? "/images/rowan-morrison-logo-white-v2.png" : "/images/rowan-morrison-logo-black-v2.png"}
            alt="Rowan Morrison Logo"
            id="rowan-logo"
            fill
            sizes="(max-width: 640px) 160px, 320px"
            loading="eager"
            className="z-[999]"
            style={{ objectFit: "contain", mixBlendMode: "difference" }}
          />
        </Link>
        </div>
        <div className="menu-cta z-[999] md:hidden ml-auto self-center"
             onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          >
          <p className="relative font-garamond text-bodyMedium text-current w-12 leading-none">
  <span
    className={`absolute inset-0 transition-opacity duration-300 ${
      menuOpen ? "opacity-0" : "opacity-100"
    }`}
  >
    menu
  </span>
  <span
    className={`absolute inset-0 transition-opacity duration-300 cursor-pointer ${
      menuOpen ? "opacity-70" : "opacity-0"
    }`}
  >
    close
  </span>
</p>
        </div> 
<button
          className={`hidden menu-toggle flex-col justify-end items-center w-7 h-3 z-[999]`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
            <Image
            src={resolvedTheme === "dark" ? "/images/bottom-line-white.png" : "/images/bottom-line-black.png"}
            alt="Nav menu"
            id="top-line hamburger-line"
              className={`block w-full h-2 mb-1 transform transition-transform duration-300 ease-in-out ${
      menuOpen ? "rotate-45 translate-y-3" : ""
    }`}
            width={150}
            height={150}
            priority
          />
            <Image
            src={resolvedTheme === "dark" ? "/images/middle-line-white.png" : "/images/middle-line-black.png"}
            alt="Nav menu"
            id="middle-line hamburger-line"
               className={`block w-full h-2 mb-1 transition-opacity duration-300 ease-in-out ${
      menuOpen ? "opacity-0" : "opacity-100"
    }`}
            width={150}
            height={150}
            priority
          />
           <Image
            src={resolvedTheme === "dark" ? "/images/bottom-line-white.png" : "/images/bottom-line-black.png"}
            alt="Nav menu"
            id="bottom-line hamburger-line"
           className={`block w-full h-2 transform transition-transform duration-300 ease-in-out ${
      menuOpen ? "-rotate-45 -translate-y-3" : ""
    }`}
            width={150}
            height={150}
            priority
          />
        </button>

<nav
  className={`
    fixed top-0 left-0 h-screen pt-20 p-6 bg-white dark:bg-black text-current
    z-[800] w-1/2 transform transition-transform duration-300 ease-in-out will-change-transform
    md:static md:translate-x-0 md:w-full md:p-5 md:bg-transparent
    ${menuOpen ? "translate-x-0" : "-translate-x-full"}
  `}
>
            <div className="flex flex-col h-full">
          <ul className="flex-col items-center space-y-6 text-bodyMedium font-garamond text-current">
            <li>
              <Link href={shopReady ? "https://www.etsy.com/uk/shop/RowanMorrisonStudio" : "#"} onClick={(e) => { if (!shopReady) e.preventDefault(); }}>
<h2 className="opacity-25 hidden">Shop</h2>
<p className="opacity-25 font-garamond text-bodySmall text-current ml-6 mt-2 hidden">Coming soon!</p>
              </Link>
            </li>
            <li className="hover:opacity-70">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
               <span className={pathname === "/contact" ? "font-subheading" : ""}>
      contact
    </span></Link>
            </li>
              <li className="hover:opacity-70">
              <Link href="/professional-work" onClick={() => setMenuOpen(false)}>
               <span className={pathname === "/professional-work" ? "font-subheading" : ""}>
      professional work
    </span></Link>
            </li>
              <li className="hover:opacity-70">
              <Link href="/personal-work" onClick={() => setMenuOpen(false)}>
               <span className={pathname === "/personal-work" ? "font-subheading" : ""}>
      personal work
    </span></Link>
            </li>
            <li>
               <button
    type="button"
    onClick={() => setProjectsOpen(prev => !prev)}
    className="flex items-center gap-2 focus:outline-none"
  >
    <h2>projects</h2>
    <span
      className={`transition-transform duration-300 ${
        projectsOpen ? "rotate-180" : "rotate-0"
      }`}
      aria-hidden
    >
     <svg width="20px" height="20px" strokeWidth="1.3" viewBox="0 0 24 24" opacity="0.4" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke={resolvedTheme === "dark" ? "#FFFFFF" : "#000000"} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    </span>
  </button>

  <div
    className={`overflow-hidden transition-all duration-300 ${
      projectsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    {projectCategories.map((cat) => (
      <Link
        key={cat}
        href={`/projects/${slugify(cat)}`}
        onClick={() => {
          setMenuOpen(false);
          setProjectsOpen(false);
        }}
      >
        <p className="font-garamond text-formSmall text-current ml-6 mt-2 hover:opacity-80">
          {cat}
        </p>
      </Link>
    ))}
  </div>
</li>
          </ul>
            <div id="nav-footer" className="mt-auto pt-10 text-formSmall font-garamond text-current">
            <p>designed and coded by Rowan Morrison</p>
          </div>
</div>
        </nav>
      </div>
      <div
        ref={bottomSentinelRef}
        aria-hidden
        className="w-full h-px"
      />
    </header>
    );
}