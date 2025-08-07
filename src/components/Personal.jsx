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
  { id: 'oracle-cats-concept-02', image: '/images/oracle-cats-concept-02.png' },
  { id: 'Mojo-Stickers', image: '/images/Mojo-Stickers_WEB1.jpg' },
  { id: 'object-studies', image: '/images/object-studies.png' },
  { id: 'Central-23-2', image: '/images/Central-23-2.jpg' },
  { id: 'Archive', image: '/images/Archive-06.gif' },
  //{ id: 'open-source', image: '/images/open-source-1.gif' },
  { id: 'Macro', image: '/images/Macro-2.jpg' },
];

function Personal() {
 return (
    <div id="personal-work">
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

export default Personal;