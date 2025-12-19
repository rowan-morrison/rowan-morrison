"use client";
import React, { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import LoadingScreen from "./LoadingScreen";
import TransitionOverlay from "./TransitionOverlay";

type TransitionContextType = {
  visible: boolean; // overlay visibility
  navigateWithTransition: (href: string) => Promise<void>;
};

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

const FADE_DURATION = 450; // ms, matches overlay transition
const LOADING_THRESHOLD = 350; // ms before showing loading screen if navigation is slow
const MIN_LOADING_DISPLAY = 800; // ms minimum loading screen visible

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [overlayVisible, setOverlayVisible] = useState(false);
  const [loadingVisible, setLoadingVisible] = useState(false);

  const pendingRef = useRef<{
    href?: string;
    delayedTimer?: number | null;
    loadingShownAt?: number | null;
    resolve?: (() => void) | undefined;
  }>({
    href: undefined,
    delayedTimer: null,
    loadingShownAt: null,
    resolve: undefined,
  });

  const navigateWithTransition = useCallback(async (href: string) => {
    // start overlay fade-in
    setOverlayVisible(true);

    // schedule showing loading screen only if navigation is still pending
    if (pendingRef.current.delayedTimer) {
      window.clearTimeout(pendingRef.current.delayedTimer);
    }

    pendingRef.current.href = href;

    pendingRef.current.delayedTimer = window.setTimeout(() => {
      // only show loading screen for root path – keep behaviour specific
      if (href === "/") {
        setLoadingVisible(true);
        pendingRef.current.loadingShownAt = Date.now();
      }
    }, LOADING_THRESHOLD);

    // wait for overlay to fade in fully so it covers the current page
    await new Promise((res) => window.setTimeout(res, FADE_DURATION));

    // trigger navigation after overlay is opaque
    router.push(href);

    // return a promise that resolves after we've hidden overlay/loading
    return new Promise<void>((resolve) => {
      // store a resolver to call later in pathname effect
      // we'll resolve when the exit animations finish after route change
      pendingRef.current.resolve = resolve;
    });
  }, [router]);

  // Intercept normal anchor clicks for internal navigation so we can
  // play the transition before navigating. Captures on the document
  // to automatically work with regular <a> tags across the app.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      // ignore if modifier keys (open in new tab/window)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const mouseEvent = e as MouseEvent;
      // only left clicks
      if (typeof mouseEvent.button === "number" && mouseEvent.button !== 0) return;

      const anchor = (e.target as Element).closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      // ignore anchors that are hashes, mailto:, tel:, external, or have target
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (anchor.target && anchor.target !== "_self") return;
      let url: URL;
      try {
        url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return; // external
      } catch {
        return;
      }

      // do not intercept if already on same pathname
      const path = url.pathname;
      if (path === pathname) return;

      // prevent default and trigger transition-based navigation
      e.preventDefault();
      // use stable callback
      navigateWithTransition(href);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname, navigateWithTransition]);

  // watch for route changes to finish and then hide overlays
  const prevPathRef = useRef<string | null>(null);
  useEffect(() => {
    // on first render set previous path
    if (prevPathRef.current === null) {
      prevPathRef.current = pathname;
      return;
    }

    // if pathname changed and there was a pending navigation
    if (pendingRef.current.href && pathname !== prevPathRef.current) {
      // clear delayed timer
      if (pendingRef.current.delayedTimer) {
        window.clearTimeout(pendingRef.current.delayedTimer);
        pendingRef.current.delayedTimer = null;
      }

      const finalize = () => {
        // hide loading if visible
        setLoadingVisible(false);

        // wait a couple rAFs so the new content has a chance to paint
        // then run the overlay fade-out after FADE_DURATION for a smooth crossfade
        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            window.setTimeout(() => {
              setOverlayVisible(false);

              // resolve the navigate promise if present
              const resolver = pendingRef.current.resolve as (() => void) | undefined;
              if (resolver) resolver();

              // clear resolver and timers
              pendingRef.current.resolve = undefined;
              if (pendingRef.current.delayedTimer) {
                window.clearTimeout(pendingRef.current.delayedTimer);
              }

              pendingRef.current = { href: undefined, delayedTimer: null, loadingShownAt: null, resolve: undefined };
            }, FADE_DURATION);
          });
        });
      };

      // If loading screen was shown, ensure it stays visible at least MIN_LOADING_DISPLAY
      if (pendingRef.current.loadingShownAt) {
        const elapsed = Date.now() - (pendingRef.current.loadingShownAt || 0);
        const remaining = Math.max(0, MIN_LOADING_DISPLAY - elapsed);
        window.setTimeout(finalize, remaining);
      } else {
        // no loading shown, finalize quickly after a small dwell
        window.setTimeout(finalize, 120);
      }
    }

    prevPathRef.current = pathname;
  }, [pathname]);

  return (
    <TransitionContext.Provider value={{ visible: overlayVisible, navigateWithTransition }}>
      {children}
      <TransitionOverlay visible={overlayVisible} />
      <LoadingScreen visible={loadingVisible} />
    </TransitionContext.Provider>
  );
}

export default TransitionProvider;

export function usePageTransition() {
  const ctx = useContext(TransitionContext);
  if (!ctx) {
    return {
      visible: false,
      navigateWithTransition: async () => Promise.resolve(),
    };
  }
  return ctx;
}

export function TransitionLink({
  href,
  children,
  className,
  style,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { navigateWithTransition } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigateWithTransition(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} style={style}>
      {children}
    </a>
  );
}