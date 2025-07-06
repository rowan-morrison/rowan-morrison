import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const workItems = [
  { id: 'oracle-cats-concept-02', image: '/images/oracle-cats-concept-02.png' },
  { id: 'object-studies', image: '/images/object-studies.png' },
  { id: 'Downtown-rings-tool', image: '/images/Downtown-rings-tool.mp4' },
  { id: 'Animation', image: '/images/Carolina-Bucci-Multi-Wish-Lucky-Bracelet-Animation_WEB.mp4' },
  { id: 'Lucky-4', image: '/images/Lucky-4.jpg' },
   { id: 'Memory-Pendants', image: '/images/Memory-Pendants-11.mp4' },
  { id: 'Central-23-2', image: '/images/Central-23-2.jpg' },
  // { id: 'Art-of-Wishes', image: '/images/Art-of-Wishes-1.jpg' },
  { id: 'Archive', image: '/images/Archive-06.gif' },
  { id: 'La-Catena-12', image: '/images/La-Catena-12.jpg' },
  { id: 'open-source', image: '/images/open-source-1.gif' },
  //{ id: 'Macro', image: '/images/Macro-2.jpg' },
];

function Home() {
  return (
    <Masonry
  breakpointCols={breakpointColumnsObj}
  className="home-masonry-grid"
  columnClassName="home-masonry-grid_column"
>
      {workItems.map(item => (
        <motion.div 
        key={item.id} 
        className="grid-item"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link to={`/work/${item.id}`}>
          <motion.div 
          layoutId={`work-image-${item.id}-container`} 
          className="grid-image-wrapper">
      {item.image.endsWith('.mp4') ? (
    <motion.video
      layoutId={`work-image-${item.id}`}
      src={item.image}
      alt={item.title}
      preload="auto"
      playsInline
      controls={false}
      disablePictureInPicture
      autoPlay
      muted
      loop
      className="grid-video"
    />
  ) : (
    <motion.img
      layoutId={`work-image-${item.id}`}
      src={item.image}
      alt={item.title}
      className="grid-image"
    />
  )}
  </motion.div>
          </Link>
        </motion.div>
      ))}
    </Masonry>
  );
}

export default Home;