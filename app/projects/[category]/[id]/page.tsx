"use client";

import { useState, ReactElement } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import styles from "../Projects.module.css";
import Image from "next/image";
import Script from "next/script";

type Work = {
  title: string | React.ReactNode;
  description?: React.ReactNode;
  skills?: string[];
  images?: string | string[];
  imageCaption?: (string | ReactElement)[];
  previewCaptions?: (string | ReactElement)[];
  comingSoon?: boolean;
  caption?: string | ReactElement;
  linkApp?: string;
  isDark?: boolean;
};

type Params = { id: string | string[] };

const workDetails: Record<string, Work> = {
    "catelier": {
    title: "Catelier",
     description: (
      <>
      Create the perfect accessory for even the fanciest of kitties with this mini interactive app.
      </>),
    images: [
      "/images/catelier-03.jpg",
      "/images/catelier-01.jpg",
    ],
    //linkApp: "https://catoracle.rowanmorrisons.com",
     skills: ["Digital illustration", "Interactive coding"],
    comingSoon: true,
            imageCaption: [
      "Digital illustration",
      "Digital illustration",
    ],
  },
  "oracle-cats": {
    title: "Cat Oracle",
     description: (
      <>
      A mini interactive app to find out some facts about cats.
      </>
      ),
    images: "/images/oracle-cats-concept-02.png",
    //linkApp: "https://catoracle.rowanmorrisons.com",
     skills: ["Digital illustration", "Interactive coding"],
    comingSoon: true,
            imageCaption: [
      "Sketchbook drawings of the Oracle",
    ],
  },
   "object-studies": {
    title: "Object studies",
     skills: ["Digital illustration"],
    images: [
      "/images/pickle-study.png",
      "/images/orange-slice-study.png",
      "/images/tomato-study.png",
      "/images/pear-study.png",
      "/images/spinach-leaf-study.png",
      "/images/lemon-study.png",
      "/images/archive-09.jpg",
      "/images/archive-07.jpg",
      "/images/archive-13.jpg",
      "/images/archive-14.jpg",
      "/images/archive-15.jpg",
      "/images/archive-16.jpg",
      "/images/archive-17.jpg",
      "/images/wes-1.jpg",
    ],
               imageCaption: [
      "Pickle study",
      "Orange slice study",
      "Tomato study",
      "Pear study",
      "Spinach leaf study",
      "Lemon study",
      "Archive 09",
      "Archive 07",
      "Archive 13",
      "Archive 14",
      "Archive 15",
      "Archive 16",
      "Archive 17",
      "Portrait study",
    ],
  },
  "art-of-wishes": {
    title: "Carolina Bucci × Art of Wishes",
     description: (
      <>
        Collateral supporting Carolina Bucci’s collaboration with Art of Wishes, 
        in support of Make-A-Wish UK®. Learn more and support Make-A-Wish UK® <a href="https://carolinabucci.com/blogs/la-catena/wishful-thinking" target="_blank" rel="noopener noreferrer">here</a>.
      </>
    ),
    caption: "Imagery © 2025 Carolina Bucci Firenze. All rights reserved.\nOriginal illustrations made by Rosie, Emily and Noah, with Make-a-Wish UK®.",
    skills: ["Pattern design", "Print production"],
    images: [ "/images/art-of-wishes-01.jpg",
      "/images/art-of-wishes-insert-card-02.jpg",
    "/images/rowan-morrison-art-of-wishes-01.jpg",
  "/images/rowan-morrison-art-of-wishes-02.jpg",
"/images/rowan-morrison-art-of-wishes-03.jpg",],
      imageCaption: [
      "Pattern design",
      "Insert card design",
      "Printed insert card with Carolina Bucci Lucky Hope bracelet",
      "The childrens' charm designs, with the HOW TO: Lucky & 1885 Links guide I helped design",
      "HOW TO: Lucky & 1885 Links guide",
    ],
  },
  "lucky": {
    title: "Lucky Icons",
    description: (
    <>
    Created 24 icon illustrations for Carolina Bucci’s first collection, Lucky. See them in context <a href="https://carolinabucci.com/products/pineider-lucky-stationery-set" target="_blank" rel="noopener noreferrer" className="hyperlink">here</a>.
    </>),
    caption: "© 2025 Carolina Bucci Firenze. All rights reserved.",
     skills: ["Icon design", "Packaging & print production", "Pattern/swatch design"],
    images: [ "/images/8-selected-lucky-charms-web.png",
      "/images/carolina-bucci-florentine-finish-forte-got-lucky-stud-earrings-atelier-lifestyle-meta-1x1.mp4",
      "/images/24-lucky-charms-pattern-web.png",
          "/images/lucky-04.jpg",
        "/images/lucky-07.jpg",
        "/images/lucky-08.jpg",
        "/images/lucky-09.jpg",
        "/images/lucky-10.jpg",
        "/images/lucky-11.jpg",
        "/images/lucky-12.jpg",
        "/images/lucky-13.jpg",
        "/images/lucky-14.jpg",
        "/images/lucky-17.jpg",
        "/images/lucky-15.jpg",
        "/images/lucky-16.jpg",
        "/images/loretta-caponi-superlucky-dress-01.jpg",
     ],
            imageCaption: [
      "Illustrated icons",
      "Video editing",
      "Pattern design",
      "Keychains",
      "Carolina Bucci x Pineider Lucky stationery set",
         "Carolina Bucci x Pineider Lucky stationery set",
            "Lucky ‘Health’ Keychain",
            "Lucky ‘Friendship’ Keychain",
            "Lucky ‘Happiness’ Keychain",
            "Lucky ‘SuperLucky’ Keychain",
            "Lucky ‘Sprezzatura’ Keychain",
            "Lucky ‘Protection’ Keychain",
            "Lucky ‘Travel’ Keychain",
            "Lucky ‘Love’ Keychain",
            "Lucky ‘Love’ Keychain - Back view",
            "Carolina Bucci x Loretta Caponi limited-edition dress - embroidered in Italy with SuperLucky icons"
    ],
  },
"downtown-rings": {
  title: "Digital Design",
  description: (<>
  A built-in PDP tool for clients to play with the many possibilities of Carolina Bucci’s Downtown rings. See it at work 
   <a href="https://www.carolinabucci.com/products/downtown-ring" target="_blank" rel="noopener noreferrer" className="hyperlink">
          here
        </a>.
       </>),
  caption: "© 2025 Carolina Bucci Firenze. All rights reserved.",
   skills: ["UX/UI", "Interactive coding", "Illustration & animation", "Newsletter creation & design"],
  images: ["/images/downtown-rings-tool.mp4",
    "/images/rowan-morrison-downtown-rings-ad.mp4",
  ],
             imageCaption: [
      "Interactive coding",
      "Animated newsletter",
    ],
},
"merchandising": {
  title: "Brand & Merchandising",
  description: (
    <>
    Some of many different types of visual collateral made for Carolina Bucci.
    </>),
  caption: "© 2025 Carolina Bucci Firenze. All rights reserved.",
   skills: ["Print production", "Packaging & editorial design", "Large-scale prints"],
  images: ["/images/illustration-homepage-01.jpg",
    "/images/lucky-06.jpg",
    "/images/montecito-boarding-3.jpg",
    "/images/tote-bag-02.jpg",
    "/images/lucky-01.jpg",
    "/images/lucky-03.jpg",
        "/images/lucky-02.jpg",
        "/images/guides-01.jpg",
        "/images/rowan-morrison-how-to-forte-beads-guide-spread-01.jpg",
        "/images/rowan-morrison-how-to-forte-beads-guide-spread-02.jpg",
        "/images/rowan-morrison-how-to-forte-beads-guide-spread-03.jpg",
        "/images/carolina-bucci-newsletter-drafts-01-web.png",
        "/images/carolina-bucci-newsletter-drafts-02-web.png",
        "/images/carolina-bucci-store-illustration-01.jpg",
        "/images/cb-print-packaging-11.jpg",
  ],
    imageCaption: [
      "Illustration + photoshoot assisting",
      "Laser-cut vinyls",
      "Hoarding",
      "Tote bags",
      "Matchstick box",
      "Paper stationery",
      "Advent calendar",
      "Collection guide booklets",
      "Spread from HOW TO: FORTE Beads collection guide",
      "Spread from HOW TO: FORTE Beads collection guide",
      "Spread from HOW TO: FORTE Beads collection guide",
      "Newsletter design",
      "Automations setup + code tweaks via Mailchimp",
      "Digital illustration",
      "Belly bands"
    ],
},
  "memory-pendants": {
    title: "Memory Pendants",
     description: (<>
     Drawing pendants to capture clients’ memories forever in 18k gold and precious stones. See them <a href="https://carolinabucci.com/products/memory-pendant" target="_blank" rel="noopener noreferrer" className="hyperlink">here</a>.
     </>),
    caption: "© 2025 Carolina Bucci Firenze. All rights reserved.",
    skills: ["Bespoke client illustration", "Narrative animation"],
    previewCaptions: [
      "A pendant with a drawing of a dog.",
      "A pendant with a drawing of a cat.",],
    images: [ "/images/memory-pendants-11.mp4",
    "/images/carolina-bucci-memory-pendant-blueberry.mp4",
  "/images/carolina-bucci-memory-pendant-cabina.mp4",
"/images/carolina-bucci-memory-pendant-volcano.mp4",
"/images/carolina-bucci-memory-pendant-leopard.mp4",
"/images/carolina-bucci-memory-pendant-cactus.mp4",
"/images/carolina-bucci-memory-pendant-bulldog.mp4",
"/images/carolina-bucci-memory-pendant-pinecone.mp4", 
"/images/memory-pendants-13.jpg",
    "/images/memory-pendants-01.jpg",
      "/images/memory-pendants-03.jpg",
        "/images/memory-pendants-11.jpg",
          "/images/memory-pendants-02.jpg",],
    imageCaption: [
      "Illustrated animation",
      "Illustrated blueberry pendant",
      "Illustrated cabina pendant",
      "Illustrated volcano pendant",
      "Illustrated leopard pendant",
       "Illustrated cactus pendant",
      "Illustrated bulldog pendant",
      "Illustrated pinecone pendant",
      "Final products",
      "Final products",
       "Final products",
      "Final products",
      "Final products",
    ]
  },
  "central23": {
    title: "Wrapping Paper",
     description: (<>
     Wrapping paper designs for award-winning packaging brand <a href="https://central23.co/en-uk" target="_blank" rel="noopener noreferrer" className="hyperlink">Central23</a>.</>),
   skills: ["Digital illustration", "Seamless pattern design"],
    images: ["/images/central23-04.jpg",
      "/images/rowan-morrison-central23-wrapping-paper-frogs.jpg",
      "/images/central23-01.jpg", 
      "/images/rowan-morrison-central23-wrapping-paper-dinosaurs.jpg",
      "/images/central23-02.jpg", 
      "/images/rowan-morrison-central23-wrapping-paper-jungle.jpg",
      "/images/central23-03.jpg",
    "/images/rowan-morrison-central23-wrapping-paper-unicorns.jpg",],
       imageCaption: [
      "Magical woodland paradise",
      " ",
      "Dinosaur adventure",
       " ",
    "Nepal forest",
     " ",
  "Unicorns & castles",
 " ",],
  },
  "macro": {
    title: "MACRO",
     description: (<>
     A series of illustrations that depict characters from Vivienne Westwood’s Activist play wearing sustainable fashion from independent designers
     </>),
   skills: ["Illustration"],
    images: ["/images/macro-1.gif",
      "/images/macro-02.jpg",
      "/images/macro-03.jpg",
      "/images/macro-04.jpg",
      "/images/macro-05.jpg",
      "/images/macro-06.jpg",
      "/images/macro-07.jpg",
      "/images/macro-08.jpg",
      "/images/macro-09.gif",
    ],
               imageCaption: [
      "Editorial design of La Catena Issue 3",
      "Hero illustrations",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
  "archive": {
    title: "Archival work",
    description: (<>
    A selection of analogue and digital drawings
    </>),
    images: ["/images/archive-01.jpg", 
      "/images/archive-10.jpg",
           "/images/archive-11.jpg",
           "/images/archive-02.jpg",
      "/images/archive-03.jpg",
      "/images/archive-12.jpg",
    "/images/archive-04.jpg",
  "/images/archive-05.gif",
"/images/archive-06.gif",
"/images/archive-07.jpg",
"/images/archive-18.jpg",
"/images/archive-19.jpg",
"/images/archive-21.jpg",],
           imageCaption: [
      "Editorial design of La Catena Issue 3",
      "Hero illustrations",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
    ],
  },
  "la-catena": {
    title: (<><em style={{fontFamily: "'EB Garamond Italic'",}}>La Catena</em></>),
    description:  (<><em className="hyperlink">La Catena</em> is Carolina Bucci’s blog and annual magazine. I worked on the editorial design of Issues 2 & 3, as well as creating illustrations and posts for the online blog.
    <br></br>
    <br></br>
    Read ‘Yen Vo and Jimmy Ly First Bonded over Beignets’ on <em>La Catena</em> <a href="https://carolinabucci.com/blogs/la-catena/yen-vo-and-jimmy-ly-first-bonded-over-beignets?srsltid=AfmBOoqCOjSa0M06g-Pv2UUyRh0VxbOA2v3kqt9go_bd4W0FODp02M6Y" target="_blank" rel="noopener noreferrer" className="hyperlink">here</a>.</>),
    caption: "© 2025 Carolina Bucci Firenze. All rights reserved.",
     skills: ["Editorial design", "Print production", "Digital illustration"],
    images: ["/images/la-catena-01.jpg",
      "/images/la-catena-mockup-01.jpg",
      "/images/rowan-morrison-la-catena-blog-post.mp4",
      "/images/la-catena-website-02.jpg",
      "/images/la-catena-website-01.mp4",
      "/images/la-catena-website-03.jpg",
      "/images/la-catena-12.jpg",
    "/images/madame-vo-newsletter-hero.png"],
        imageCaption: [
    <>Editorial design of <em>La Catena</em> Issue 3</>,
  <>Front cover + spread of <em>La Catena</em> Issue 3</>,
  "Blog post creation via Shopify CMS",
      "Hero illustrations",
      "Graphic illustrations",
      "A pendant with a drawing of a cactus",
 <>Editorial design of <em>La Catena</em> Issue 2</>,
       "Social media",
    ],
  },
  "open-collab": {
    title: "Open Collab",
  description: (<>
  <a href="https://www.open-collab.org/" target="_blank" rel="noopener noreferrer" className="hyperlink">Open Collab</a> is a platform created to facilitate remote collaboration between creators. Participants respond to a predetermined subject by creating texts or images. Once submitted to the platform, individual content is randomly combined into an endless stream of aleatoric compositions.
    </>),
    images: [ "/images/open-collab-1.gif",
      "/images/open-collab-2.gif",
    "/images/open-collab-3.gif",
  "/images/open-collab-4.gif",
"/images/open-collab-5.gif",],
           imageCaption: [
      "Digital illustration",
      "Graphic illustration",
      "Botanical illustration",
      "Botanical illustration",
      "Botanical illustration",
    ],
  },
     "animation": {
    title: "Animation",
  caption: "© 2025 Carolina Bucci Firenze. All rights reserved.",
     description: (<>Animations to show the personalisable elements of Carolina Bucci’s bracelets and necklaces.</>),
   skills: ["Narrative-telling", "Educational process animations"],
    images: [ "/images/carolina-bucci-everyday-animation_4x5.mp4",
      "/images/carolina-bucci-multi-wish-lucky-bracelet-animation-web.mp4"
    ],
               imageCaption: [
      "Editorial design of La Catena Issue 3",
      "Illustrated animation",
    ],
  },
       "mojo-stickers": {
    title: "Stickers",
    description: (<>Mojo Stickers are a fun and playful way to express your personality and style. Each sticker is designed with vibrant colors and unique illustrations, making them perfect for decorating your laptop, water bottle, or any other surface you want to personalize.</>),
     skills: ["Bespoke client illustration", "Laser cut vector preparation"],
    images: [ "/images/rowan-morrison-mojo-stickers-mockup.jpg",
      "/images/mojo-stickers-01.jpg",
      "/images/mojo-stickers-web-01.jpg",
      "/images/mojo-stickers-web-02.jpg",
      "/images/mojo-stickers-web-03.jpg",
    ],
               imageCaption: [
      "Sticker sheet with cut lines included in print-ready file",
      " ",
      " ",
      " ",
      " ",
    ],
  },
};

export default function ProjectPage() {
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const params = useParams() as unknown as Params;
  const id = Array.isArray(params.id) ? params.id[0] : params.id ?? "";
  const work = workDetails[id];

  // const [isOverflowing, setIsOverflowing] = useState(false);
  // const [isMobile, setIsMobile] = useState(false);
  const [mounted] = useState(() => typeof window !== "undefined");
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  // const dragScrollRef = useRef<HTMLDivElement | null>(null);
    const images = Array.isArray(work.images) ? work.images : work.images ? [work.images] : [];
  const renderCaption = (caption?: string | ReactElement) => caption ?? "";

//   const isDragging = useRef(false);
// const startX = useRef(0);
// const scrollLeftStart = useRef(0);

// const mouseDownHandler = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
//   const el = dragScrollRef.current;
//   if (!el) return;
//   isDragging.current = true;
//   const pageX = "touches" in e ? e.touches?.[0]?.pageX ?? 0 : (e as React.MouseEvent<HTMLDivElement>).pageX;
//   startX.current = pageX - el.offsetLeft;
//   scrollLeftStart.current = el.scrollLeft;
//   el.classList.add("active");
// };

// const endDrag = () => {
//   isDragging.current = false;
//   const el = dragScrollRef.current;
//   if (el) el.classList.remove("active");
// };

// const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
//   if (!isDragging.current) return;
//   if ("touches" in e) return; 
//   const el = dragScrollRef.current;
//   if (!el) return;
// const pageX = (() => {
//   if ("touches" in e) {
//   const touchEvent = e as unknown as React.TouchEvent<HTMLDivElement>;
//   return touchEvent.touches?.[0]?.pageX ?? 0;
// }
//   const mouseEvent = e as React.MouseEvent<HTMLDivElement>;
//   return mouseEvent.pageX;
// })();
//   const walk = (pageX - startX.current) * 2;
//   el.scrollLeft = scrollLeftStart.current - walk;
// };

// useEffect(() => {
//   const el = dragScrollRef.current;
//   if (!el) return;

//   const checkOverflow = () => setIsOverflowing(el.scrollWidth > el.clientWidth);
//   checkOverflow();

//   const handleResize = () => setIsMobile(window.innerWidth <= 768);
//   window.addEventListener("resize", handleResize);
//   el.addEventListener("scroll", checkOverflow);

//   return () => {
//     window.removeEventListener("resize", handleResize);
//     el.removeEventListener("scroll", checkOverflow);
//   };
// }, []);

if (!mounted) return null;
if (!work) return <div className={styles.notFound}>Work not found.</div>;

  return (
    <>
      <div className={`${styles.workDetail} h-full w-full mt-[100] overflow-y-auto`}>
        <motion.section
          className={styles.workInfo}
         initial={{ opacity: 0, filter: "blur(2px)" }}
animate={{ opacity: 1, filter: "blur(0px)" }}
exit={{ opacity: 0, filter: "blur(2px)" }}
transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className={`${styles.workDetailCopy} mx-5`}>
          <button onClick={() => router.back()} className={`${styles.closeBtn} relative w-8 h-5`}>
            <Image
            alt="Back"
            id="back-to-grid-arrow"
            style={{ width: "auto", height: "auto", objectFit: "contain" }}
            width={30}
            height={30}
            src={resolvedTheme === "dark" ? "/images/arrow-back-dark.png" : "/images/arrow-back-light.png"}
            />
            </button>
          <h1 className="text-headingLarge my-3 font-heading text-current">{work.title}</h1>
          <div className={`${styles.descriptionAndSkills} font-body text-bodyMedium text-current`}>
            <p className={`${styles.descriptionText} font-body mt-2 text-current`}>
              {work.description}
            </p>
            {work.skills && (
              <div className={`${styles.projectSkills} my-5 flex flex-col`}>
                {work.skills?.map(skill =>
                <span key={skill} className="mb-0 text-current">{skill}</span>)}
              </div>
            )}
          </div>
          <figcaption className="font-caption text-overline text-current">{renderCaption(work.caption)}</figcaption>
          {work.linkApp && (
            <a
              href={work.linkApp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.externalLinkButton}
            >
              Visit Project
            </a>
          )}
            {work.comingSoon && <div className={`${styles.comingSoonTag} label`}>Coming Soon</div>}
          </div>
         {work.images && (
  <section className="my-8">
    <div className={styles.masonry}>
  {images.map((src, index) => (
    <figure
      key={index}
      className={`${styles["masonry-item"]} cursor-pointer overflow-hidden`}
      onClick={() => setPreviewIndex(index)}
    >
      {src.endsWith(".mp4") ? (
            <video
              src={src}
              className="w-full h-auto object-cover"
              autoPlay
              loop
              muted
              playsInline
              draggable={false}
            />
          ) : (
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              className="w-full h-auto object-cover"
              width={800}
              height={600}
            />)}
    </figure>
  ))}
</div>
  </section>
)}
        </motion.section>
      </div>
<AnimatePresence mode="wait">
  {previewIndex !== null && (
    <motion.div
      className="fixed inset-0 z-[800] flex items-center justify-center backdrop-blur-md"
      onClick={() => setPreviewIndex(null)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.10) 60%, rgba(255,255,255,0) 100%)",
          mixBlendMode: "soft-light",
        }}
      ></div>

      <div
        className="absolute inset-0 z-[850] h-screen w-screen pointer-events-none
                   bg-[url('/images/paper-texture.jpg')] bg-center"
        style={{
          backdropFilter: "blur(100px)",
          backgroundColor: "rgba(255,255,255,0.15)",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "overlay",
          filter: "brightness(1) contrast(1.05) saturate(0.6)",
          opacity: 0.7,
        }}
      />

      <motion.div
        className="relative flex flex-col items-center justify-center max-w-[90vw] max-h-[90vh] z-[900]"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.95, filter: "blur(8px) saturate(0.7)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px) saturate(1)" }}
        exit={{ opacity: 0, scale: 0.95, filter: "blur(8px) saturate(0.7)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {images[previewIndex]?.endsWith(".mp4") ? (
          <video
            key={images[previewIndex]}
            src={images[previewIndex]}
            autoPlay
            loop
            muted
            playsInline
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <Image
            key={images[previewIndex]}
            src={images[previewIndex]}
            alt={`Preview ${previewIndex + 1}`}
            width={1600}
            height={1200}
            className="max-w-full max-h-full object-contain"
            priority
            unoptimized
          />
        )}

        <figcaption className="mt-4 text-center font-caption text-bodyMedium text-current max-w-[90vw] break-words">
          {work.imageCaption?.[previewIndex] ?? ""}
        </figcaption>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

<Script
  id="work-detail-schema"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": work.title,
      "description": "A collection of my design and development projects",
      "url": `https://rowanmorrisons.com/projects/${id}`,
      "creator": { "@type": "Person", "name": "Rowan Morrison" },
    }),
  }}
/>
    </>
  );
}