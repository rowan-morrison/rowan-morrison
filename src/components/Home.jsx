import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './Home.css';

function Home() {
  return (
        <AnimatePresence mode="sync">
    <div className="home-two-columns">
      <Link to="/carolina-bucci" className="home-image-link">
      <motion.div
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(2px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="home-image-wrapper">
        <img
          src="/images/Lucky-8.jpg"
          alt="Carolina Bucci"
          className="home-large-image"
        /></div>
        <div className="home-image-label">Carolina Bucci</div>
      </motion.div>
      </Link>
      <Link to="/personal" className="home-image-link">
        <motion.div
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(2px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="home-image-wrapper">
            <img
              src="/images/Mojo-Stickers_WEB1.jpg"
              alt="Personal"
              className="home-large-image"
            />
          </div>
        <div className="home-image-label">Personal</div>
       </motion.div>
       </Link>
    </div>
    </AnimatePresence>
  );
}

export default Home;