import React, { useEffect, useRef } from 'react';
import './Footer.css';
import { motion } from 'framer-motion';

function Footer() {
  const toggleRef = useRef();

  useEffect(() => {
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
  
    const applyDarkMode = () => {
      const isDarkMode = systemSettingDark.matches || localStorage.getItem("dark-mode") === "enabled";
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
      }
      setLogoBasedOnMode(isDarkMode);
    };
  
    applyDarkMode();
  
    systemSettingDark.addEventListener("change", applyDarkMode);
  
    const el = toggleRef.current;
  
    const handleClick = (e) => {
      e.preventDefault();
      const isDark = !document.documentElement.classList.contains("dark-mode");
  
      if (isDark) {
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("dark-mode", "enabled");
      } else {
        document.documentElement.classList.remove("dark-mode");
        localStorage.setItem("dark-mode", "disabled");
      }
  
      setLogoBasedOnMode(isDark);
    };
  
    if (el) {
      el.addEventListener("click", handleClick);
    }
  
    return () => {
      if (el) el.removeEventListener("click", handleClick);
      systemSettingDark.removeEventListener("change", applyDarkMode);
      
      document.querySelector('.mode-toggle-button').addEventListener('click', function() {
      this.classList.toggle('active');
});
    };
  }, []);

  function setLogoBasedOnMode(isDarkMode) {
    const myLogo = document.getElementById("rowan-logo");
    if (!myLogo) return;

    if (isDarkMode) {
      myLogo.src = '/images/Rowan-Morrison-logo-01.png';
    } else {
      myLogo.src = '/images/Rowan-Morrison-logo-02.png';
    }
  }

  return (
    <footer id="footer">
      <p hidden>&copy; 2025 rowan morrison</p>
      <div className="circle-container">
        <div id="mode-toggle" aria-label="Toggle dark mode">
          <motion.div
            ref={toggleRef}
            className="mode-toggle-button"
            id="light-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "tween",
              duration: 0.2,
              ease: "easeOut"
            }}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;