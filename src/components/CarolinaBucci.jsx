import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './Masonry.css';
import Masonry from 'react-masonry-css';

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const workItems = [
   { id: 'Memory-Pendants', title: 'Memory Pendants', image: '/images/Memory-Pendants-11.mp4' },
    { id: 'Art-of-Wishes', title: 'Art of Wishes', image: '/images/Art-of-Wishes-2.jpg' },
  { id: 'Downtown-rings-tool', title: 'Downtown Rings Tool', image: '/images/Downtown-rings-tool.mp4' },
  { id: 'EveryDay', title: 'EveryDay', image: '/images/Carolina-Bucci-EveryDay-animation_4x5.mp4' },
    { id: 'Animation', title: 'Animation', image: '/images/Carolina-Bucci-Multi-Wish-Lucky-Bracelet-Animation_WEB.mp4' },
  { id: 'La-Catena-12', title: 'La Catena 12', image: '/images/La-Catena-12.jpg' },
    { id: 'Lucky-4', title: 'Lucky 4', image: '/images/Lucky-4.jpg' },
];

function CarolinaBucci() {
 return (
    <div id="carolina-bucci-work">
    <Masonry
  breakpointCols={breakpointColumnsObj}
  className="home-masonry-grid"
  columnClassName="home-masonry-grid_column"
>
  {workItems.map(item => (
    <div className="grid-item" key={item.id}>
      <AnimatePresence mode="sync">
        <motion.div
          className="motion-wrapper"
          initial={{ opacity: 0, scale: 0.98, filter: 'blur(2px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(2px)' }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <Link to={`/work/${item.id}`}>
            <motion.div
              layoutId={`work-image-${item.id}-container`}
              className="grid-image-wrapper"
            >
              {item.image.endsWith('.mp4') ? (
                <motion.video
                  layout
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
                  layout
                  layoutId={`work-image-${item.id}`}
                  src={item.image}
                  alt={item.title}
                  className="grid-image"
                />
              )}
            </motion.div>
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  ))}
</Masonry>
    </div>
  );
}

export default CarolinaBucci;