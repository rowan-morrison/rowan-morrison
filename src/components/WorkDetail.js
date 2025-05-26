import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './WorkDetail.css';
import Masonry from 'react-masonry-css';

const workDetailBreakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const workDetails = {
  'oracle-cats-concept-02': {
    title: 'Cat Oracle',
     descriptionStart: "A mini interactive app to find out some facts about cats.",
    //descriptionEnd: ".",
    image: '/images/oracle-cats-concept-02.png',
    //linkApp: 'https://catoracle.rowanmorrisons.com',
    comingSoon: true,
  },
   'object-studies': {
    title: 'Object studies',
     //descriptionStart: "A series of illustrations that depict characters from Vivienne Westwood's Activist play wearing sustainable fashion from independent designers.",
  //linkText: "",
  //link: "https://carolinabucci.com/products/pineider-lucky-stationery-set",
    //descriptionEnd: " by scrolling down.",
    image: ['/images/pickle-study.png',
     '/images/orange-slice-study.png',
     '/images/tomato-study.png',
     '/images/pear-study.png',
     '/images/spinach-leaf-study.png',
     '/images/lemon-study.png',
     '/images/Archive-13.JPG',
'/images/Archive-14.JPG',
'/images/Archive-15.JPG',
'/images/Archive-16.JPG',
'/images/Archive-17.jpg',
    ],
  },
  'Art-of-Wishes': {
    title: 'Carolina Bucci x Art of Wishes',
    description: "Collateral supporting Carolina Bucci’s collaboration with Art of Wishes, in support of Make-A-Wish UK.\n\nTo donate, visit the Art of Wishes website here. ",
    caption: '© 2025 Carolina Bucci Firenze. All rights reserved.',
    image: [ '/images/Art-of-Wishes-1.jpg',
      '/images/Art-of-Wishes-2.jpg',],
  },
  'Lucky-4': {
    title: 'Lucky Icons',
    descriptionStart: "Created 24 icon illustrations for Carolina Bucci’s first collection, Lucky. See them in context ",
  linkText: "here",
  link: "https://carolinabucci.com/products/pineider-lucky-stationery-set",
  descriptionEnd: ".",
    caption: '© 2025 Carolina Bucci Firenze. All rights reserved.',
    image: [ '/images/8-Selected-Lucky-Charms_WEB.png',
      '/images/24-Lucky-Charms-Pattern_WEB.png',
     ],
      contextImages: [
      '/images/Lucky-4.jpg',
        '/images/Lucky-7.jpg',
        '/images/Lucky-8.jpg',
        '/images/Lucky-9.jpg',
        '/images/Lucky-10.jpg',
        '/images/Lucky-11.jpg',
        '/images/Lucky-12.jpg',
        '/images/Lucky-13.jpg',
        '/images/Lucky-14.jpg',
        '/images/Lucky-15.jpg',
        '/images/Lucky-16.jpg',
  ]
  },
'Downtown-rings-tool': {
  title: 'Downtown Ring Interactive Tool',
  descriptionStart: "A built-in PDP tool for clients to play with the many possibilities of Carolina Bucci’s Downtown rings. See it at work ",
  linkText: "here",
  link: "https://www.carolinabucci.com/products/downtown-ring",
  descriptionEnd: ".",
  caption: '© 2025 Carolina Bucci Firenze. All rights reserved.',
  image: '/images/Downtown-rings-tool.mp4',
},
  'Memory-Pendants': {
    title: 'Memory Pendants',
     descriptionStart: "Drawing pendants to forever capture clients’ memories in 18k gold and precious stones. See my animation  ",
  linkText: "here",
  link: "https://carolinabucci.com/products/pineider-lucky-stationery-set",
  descriptionEnd: " by scrolling down.",
    caption: '© 2025 Carolina Bucci Firenze. All rights reserved.',
    previewCaptions: [
      'A pendant with a drawing of a dog.',
      'A pendant with a drawing of a cat.',],
    image: [ '/images/Memory-Pendants-11.mp4',
      '/images/Memory-Pendants-4.jpg',
      '/images/Memory-Pendants-5.jpg',
      '/images/Memory-Pendants-6.jpg',
      '/images/Memory-Pendants-7.jpg',
      '/images/Memory-Pendants-8.jpg', 
      '/images/Memory-Pendants-9.jpg', 
      '/images/Memory-Pendants-10.jpg',],
    contextImages: [
    '/images/Memory-Pendants-2.jpg',
    '/images/Memory-Pendants-1.jpg',
      '/images/Memory-Pendants-3.jpg',
  ]
  },
  'Central-23-2': {
    title: 'Dinosaurs, Jungles & Princesses',
     descriptionStart: "Wrapping paper designs for award-winning packaging brand ",
  linkText: "Central23",
  link: "https://central23.co/en-uk",
  descriptionEnd: ".",
    image: ['/images/Central-23-1.jpg', 
      '/images/Central-23-2.jpg', 
      '/images/Central-23-3.jpg',]
  },
  'Macro': {
    title: 'MACRO',
     descriptionStart: "A series of illustrations that depict characters from Vivienne Westwood's Activist play wearing sustainable fashion from independent designers.",
  linkText: "",
  //link: "https://carolinabucci.com/products/pineider-lucky-stationery-set",
  descriptionEnd: " by scrolling down.",
    image: ['/images/Macro-1.gif',
      '/images/Macro-2.JPG',
      '/images/Macro-3.JPG',
      '/images/Macro-4.JPG',
      '/images/Macro-5.JPG',
      '/images/Macro-6.JPG',
      '/images/Macro-7.JPG',
      '/images/Macro-8.JPG',
      '/images/Macro-9.GIF',
    ]
  },
  'Archive': {
    title: 'Archival work',
    descriptionStart: "A selection of analogue and digital drawings.",
 //linkText: "Open Collab",
  //link: "https://www.open-collab.org/",
  //descriptionEnd: " is a platform created to facilitate remote collaboration between creators. Participants respond to a predetermined subject by creating texts or images. Once submitted to the platform, individual content is randomly combined into an endless stream of aleatoric compositions.",
    image: ['/images/Archive-01.jpeg', 
      '/images/Archive-10.JPG',
           '/images/Archive-11.JPG',
           '/images/Archive-02.jpg',
      '/images/Archive-03.jpeg',
      '/images/Archive-12.JPG',
    '/images/Archive-04.jpeg',
  '/images/Archive-05.gif',
'/images/Archive-06.gif',
'/images/Archive-07.jpg',
'/images/Archive-18.jpeg',
'/images/Archive-19.jpeg',
'/images/Archive-21.JPG',]
  },
  'La-Catena-12': {
    title: 'La Catena',
    descriptionStart: "La Catena is Carolina Bucci’s blog and annual magazine. I worked on the editorial design of Issues 2 & 3, as well as illustrations for the online blog. \n\nRead ‘Yen Vo and Jimmy Ly First Bonded over Beignets’ on La Catena ",
  linkText: "here",
  link: "https://carolinabucci.com/blogs/la-catena/yen-vo-and-jimmy-ly-first-bonded-over-beignets?srsltid=AfmBOoqCOjSa0M06g-Pv2UUyRh0VxbOA2v3kqt9go_bd4W0FODp02M6Y",
  descriptionEnd: ".",
    caption: '© 2025 Carolina Bucci Firenze. All rights reserved.',
    image: ['/images/La-Catena-website-2.jpg',
      '/images/La-Catena-website-1.mp4',
      '/images/La-Catena-website-3.jpg',
      '/images/La-Catena-12.jpg', ]
  },
  'open-source': {
    title: 'Open Collab',
     //descriptionStart: "Open Collab is a platform created to facilitate remote collaboration between creators. Participants respond to a predetermined subject by creating texts or images. Once submitted to the platform, individual content is randomly combined into an endless stream of aleatoric compositions.",
  linkText: "Open Collab",
  link: "https://www.open-collab.org/",
  descriptionEnd: " is a platform created to facilitate remote collaboration between creators. Participants respond to a predetermined subject by creating texts or images. Once submitted to the platform, individual content is randomly combined into an endless stream of aleatoric compositions.",
    image: [ '/images/open-source-1.gif',
      '/images/open-source-2.gif',
    '/images/open-source-3.gif',
  '/images/open-source-4.gif',
'/images/open-source-5.gif',]
  },
};

function WorkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const work = workDetails[id];
  const images = Array.isArray(work.image) ? work.image : [work.image];

  const [previewIndex, setPreviewIndex] = useState(null);

  const stopAnd = (e, action) => {
    e.stopPropagation();
    action();
  };

  const handlePrev = () => {
    if (previewIndex > 0) setPreviewIndex(previewIndex - 1);
  };

  const handleNext = () => {
    if (images && previewIndex < images.length - 1) {
      setPreviewIndex(previewIndex + 1);
    }
  };

  const closePreview = () => setPreviewIndex(null);
  
  if (!work) {return <div>Work not found.</div>;}

  return (
    <>
    <div className={`work-detail work-detail-${id}`}>
    <motion.section
      className="work-info"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
  >
        <button onClick={() => navigate(-1)} className="close-btn">
          <span className="material-symbols-outlined">
arrow_back
</span></button>
        <h1>{work.title}</h1>
        <p>
  {work.descriptionStart}
  <a 
    href={work.link} 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ textDecoration: "underline" }}
  >
    {work.linkText}
  </a>
  {work.descriptionEnd}
</p>
        <figcaption>{work.caption}</figcaption>
        {work.linkApp && (
  <a href={work.linkApp} 
  target="_blank" 
  rel="noopener noreferrer" 
  className="external-link-button">
    Visit Project
  </a>
)}

{work.comingSoon && (
  <div className="coming-soon-tag">
    Coming Soon
  </div>
)}

{work.contextImages && (
  <section className="context-image-grid">
    <h3 hidden>Context & References</h3>
    <div className="context-grid">
      {work.contextImages.map((src, index) => (
        <img key={index} src={src} alt={`Context ${index + 1}`} className="context-image" />
      ))}
    </div>
  </section>
)}

    </motion.section>

    <motion.section 
  className="work-image" 
  layoutId={`work-image-${id}-container`}>

    <Masonry
         breakpointCols={
        id === 'La-Catena-12'
          ? { default: 1, 1100: 1, 700: 1, 500: 1 }
          : id === 'Lucky-4'
          ? { default: 2, 1100: 2, 700: 2, 500: 1 }
          : images.length < 4
            ? { default: images.length, 1100: images.length, 700: images.length, 500: 1 }
            : workDetailBreakpointColumnsObj
      }
      className="work-detail-masonry-grid"
      columnClassName="work-detail-masonry-grid_column"
    >
    {images.map((img, index) =>
      img.endsWith('.mp4') ? (
        <motion.video
          key={index}
          layoutId={`work-image-${id}-${index}`}
          src={img}
          alt={work.title}
          className="work-image-img"
          autoPlay
          loop
          muted
          playsInline
          onClick={() => setPreviewIndex(index)}
        />
      ) : (
        <motion.img
          key={index}
          layoutId={`work-image-${id}-${index}`}
          src={img}
          alt={work.title}
          className="work-image-img"
          onClick={() => setPreviewIndex(index)}
        />
      )
    )}
  </Masonry>
</motion.section>

    </div>
    {previewIndex !== null && (
      <div className="image-preview" onClick={closePreview}>
        <button className="preview-close" onClick={(e) => stopAnd(e, closePreview)}>
          <img src="/images/close-icon.svg" alt="close-button"/>
        </button>
        <button className="preview-prev" onClick={(e) => stopAnd(e, handlePrev)} disabled={previewIndex === 0}
        >
        <img src="/images/arrow-back-icon.svg" alt="back-button"/>
        </button>
  <AnimatePresence mode="wait">
     <motion.div
    key={id}
    className={`work-detail work-detail-${id}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
  {images[previewIndex]?.endsWith('.mp4') ? (
    <motion.video
      key={previewIndex}
      className="preview-artwork"
      src={images[previewIndex]}
      autoPlay
      loop
      muted
      playsInline
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
    />
  ) : (
    <motion.img
      key={previewIndex}
      className="preview-artwork"
      src={images[previewIndex]}
      alt={`Preview ${previewIndex + 1}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
    />
  )}
  </motion.div>
</AnimatePresence>
<figcaption>
        {work.previewCaptions?.[previewIndex] || work.caption || `${work.title} – Image ${previewIndex + 1}`}
        </figcaption>
        <button className="preview-next" onClick={(e) => stopAnd(e, handleNext)} disabled={previewIndex === images.length - 1}>
        <img src="/images/arrow-forward-icon.svg" alt="next-button"/>
        </button>
      </div>
    )}
    </>
  );
}

export default WorkDetail;