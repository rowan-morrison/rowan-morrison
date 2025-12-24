"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { slugify } from "@/lib/slugify";


const projectCategories = [
  "Branding & Identity",
  "Print Design",
  "Illustration",
  "Editorial Design",
  "Animation & Motion",
  "Web & Digital",
];

export default function Header() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [projectsOpen, setProjectsOpen] = useState(false);
  
  const infoReady = false;
  const shopReady = false;

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

   // Hide header when at the bottom
  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= docHeight - 5) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    }
     window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          className={`fixed top-0 left-0 right-0 w-full z-[990] transition-opacity ease-in-out duration-300 ${hideHeader ? "opacity-0" : "opacity-100"}`}>
            <div className="hidden header-banner w-full h-9 bg-black items-center justify-center">
              <p className="header-banner-text text-white font-body text-titleSmall">Open for work</p>
            </div>

      <div className="relative container flex items-center justify-between py-10 px-5 h-[8vh] max-w-full">
     <div className="menu-cta px-2 z-[999]"
             onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
          >
          <p className="relative font-caption text-bodySmall text-current  w-12 h-[1.1em] leading-none">
  <span
    className={`absolute inset-0 transition-opacity duration-300 ${
      menuOpen ? "opacity-0" : "opacity-100"
    }`}
  >
    Menu
  </span>
  <span
    className={`absolute inset-0 transition-opacity duration-300 ${
      menuOpen ? "opacity-70" : "opacity-0"
    }`}
  >
    Close
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
      
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  z-[999] w-32 h-12 sm:w-40 sm:h-16">
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

          <div className="contact-cta px-2">
          <Link href="/contact" className="font-caption text-bodySmall text-current">
            Contact
          </Link>
          </div> 
        

<nav
  className={`
    fixed top-0 left-0 h-full pt-20 p-6 bg-white
    z-[800] w-1/2
    transform transition-transform duration-300 ease-in-out will-change-transform
    ${menuOpen ? "translate-x-0" : "-translate-x-full"}
  `}
>
            <div className="flex flex-col h-full">
          <ul className="flex-col items-center space-y-6 text-titleMedium font-heading text-current">
            <li>
              <Link 
              href={infoReady ? "/info" : "#"}
              onClick={(e) => { if (!infoReady) e.preventDefault(); }}
              >
                  <h2 className="hidden">Info</h2>
              </Link>
            </li>
            <li>
              <Link href={shopReady ? "https://www.etsy.com/uk/shop/RowanMorrisonStudio" : "#"} onClick={(e) => { if (!shopReady) e.preventDefault(); }}>
<h2 className="opacity-25">Shop</h2>
<p className="opacity-25 font-caption text-bodySmall text-current ml-6 mt-2">Coming soon!</p>
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
            <li>
               <button
    type="button"
    onClick={() => setProjectsOpen(prev => !prev)}
    className="flex items-center gap-2 focus:outline-none"
  >
    <h2>Projects</h2>
    <span
      className={`transition-transform duration-300 ${
        projectsOpen ? "rotate-180" : "rotate-0"
      }`}
      aria-hidden
    >
     <svg width="20px" height="20px" strokeWidth="1.3" viewBox="0 0 24 24" opacity="0.4" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 9L12 15L18 9" stroke="#000000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"></path></svg>
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
        <p className="font-caption text-bodySmall text-current ml-6 mt-2">
          {cat}
        </p>
      </Link>
    ))}
  </div>
</li>
          </ul>
</div>
            <div id="nav-footer" className="relative mt-auto bottom-10 text-bodySmall font-body text-current">
            <p>Designed and coded by Rowan Morrison</p>
          </div>
        </nav>
      </div>
    </header>
    );
}