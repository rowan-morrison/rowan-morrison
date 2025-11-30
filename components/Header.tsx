"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";

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
  const headerRef = useRef<HTMLElement>(null);
  
  const infoReady = false;
  const shopReady = false;

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
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
          className="fixed top-0 left-0 right-0 w-full z-[890]">
      <div className="container flex items-center align-center justify-between py-4 px-6 h-[10vh] max-w-full">
        <Link href="/" id="logo">
        <div className="relative w-[clamp(100px,40vw,180px)] h-auto aspect-[180/110]">
          <Image
            src={resolvedTheme === "dark" ? "/images/rowan-morrison-logo-white-v2.png" : "/images/rowan-morrison-logo-black-v2.png"}
            alt="Rowan Morrison Logo"
            id="rowan-logo"
            className="w-[clamp(100px,10vw,180px)] h-auto"
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, (max-width: 1024px) 150px, 180px"
            loading="eager"
          /></div>
        </Link>

        <button
          className={`menu-toggle flex flex-col justify-end items-center w-10 h-10 ml-auto z-[999]`}
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
  className={`fixed top-0 right-0 h-full pt-20 p-6 bg-isabelline dark:bg-richBlack
      z-[990] transform transition-transform duration-300 ease-in-out text-current
      ${menuOpen ? "translate-x-0" : "translate-x-full"}
      w-1/2`}
>
            <div className="flex flex-col h-full">
          <ul className="flex-col items-center space-y-6 text-headingSmall font-heading">
            <li>
              <Link 
              href={infoReady ? "/info" : "#"}
              onClick={(e) => { if (!infoReady) e.preventDefault(); }}
              >
                  <h2 className="hidden">Info</h2>
              </Link>
            </li>
            <li>
              <Link href={shopReady ? "https://www.etsy.com/uk/shop/RowanMorrisonStudio" : "#"} onClick={(e) => { if (!shopReady) e.preventDefault(); }} className="flex items-center">
                  <Image
                    src={resolvedTheme === "dark" ? "/images/coming-soon-white.png" : "/images/coming-soon-black.png"}
                    id="coming-soon"
                    alt="Coming Soon!"
                     width={100}
  height={100}
  style={{ width: "auto", height: "auto" }}
  className="absolute mr-2 translate-3 opacity-80"
                  />
<h2 className="opacity-25">Shop</h2>
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
            <li>
              <h2>Projects</h2>
              {projectCategories.map((cat) => (
    <Link key={cat} href={`/projects/${cat.toLowerCase().replace(/ & /g, "-").replace(/\s+/g, "-")}`} onClick={() => setMenuOpen(false)}>
      <p className="font-title text-titleMedium ml-6 mt-2">{cat}</p>
    </Link>
  ))}
            </li>
          </ul>
</div>
            <div id="nav-footer" className="relative mt-auto bottom-10 text-bodySmall font-body">
            <p>Designed and coded by Rowan Morrison</p>
          </div>
        </nav>
      </div>
    </header>
    );
}