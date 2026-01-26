import React from "react";
import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "catelier",
    title: "Catelier",
    // href: "/catelier",
    credits: [
      { role: "Art Direction", name: "Rowan Morrison" },
      { role: "3D Rendering", name: "Rowan Morrison" }
    ],
    blocks: [
      {
        type: "half",
        media: [
          { src: "/images/catelier-01.jpg", caption: "CATELIER" },
          { src: "/images/catelier-03.jpg", caption: "CATELIER" }
        ],
      }
    ],
    collection: "studio-work",
    categories: ["web-and-digital", "illustration"],
    order: 1,
      previewHeading: (
        <>
        Studio-work observational studies
        </>
    ),
    previewText: (
      <>
        Create the perfect accessory for even the fanciest of kitties with this mini interactive app.
      </>
    ),
    description: (
      <>
        Create the perfect accessory for even the fanciest of kitties with this mini interactive app.
      </>
    ),
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
  {
    id: "oracle-cats",
    title: "Cat Oracle",
    // href: "/oracle-cats",
    credits: [
      { role: "Art Direction", name: "Rowan Morrison" },
      { role: "Animation", name: "Studio-work XYZ" }
    ],
    blocks: [
      { type: "full", media: [{ src: "/images/oracle-cats-concept-02.png", caption: "A mini interactive app to find out some facts about cats." }] },
    ],
    collection: "studio-work",
    categories: ["web-and-digital"],
    order: 5,
      previewHeading: (
        <>
        Studio-work observational studies
        </>
    ),
    previewText: (
      <>
        A mini interactive app to find out some facts about cats.
      </>
    ),
    description: (
      <>
        A mini interactive app to find out some facts about cats.
      </>
    ),
    images: ["/images/oracle-cats-concept-02.png"],
    //linkApp: "https://catoracle.rowanmorrisons.com",
     skills: ["Digital illustration", "Interactive coding"],
    comingSoon: true,
            imageCaption: [
      "Sketchbook drawings of the Oracle",
    ],
  },
  {
    id: "mojo-stickers",
    title: "Stickers",
    // href: "/mojo-stickers",
    credits: [
      { role: "Art Direction", name: "Rowan Morrison" },
      { role: "Animation", name: "Studio-work XYZ" }
    ],
    blocks: [
      {
        type: "half",
        media: [
          { src: "/images/mojo-stickers-01.jpg", caption: "Sticker sheet with cut lines" },
          { src: "/images/mojo-stickers-web-01.jpg", caption: "Sticker sheet with cut lines" }
        ]
      }
    ],
    collection: "studio-work",
    categories: ["print-design", "illustration"],
      previewHeading: (
        <>
        Studio-work observational studies
        </>
    ),
    previewText: (
      <>
        Mojo Stickers are a fun and playful way to express your personality and style. Each sticker is designed with vibrant colors and unique illustrations, making them perfect for decorating your laptop, water bottle, or any other surface you want to personalize.
      </>
    ),
    description: (
      <>
        Mojo Stickers are a fun and playful way to express your personality and style. Each sticker is designed with vibrant colors and unique illustrations, making them perfect for decorating your laptop, water bottle, or any other surface you want to personalize.
      </>
    ),
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
  {
    id: "object-studies",
    title: "Still Life",
    // href: "/object-studies",
    blocks: [
       {
        type: "full",
        media: [
          { src: "/images/object-studies.png", caption: "Studio-work observational studies" },
        ]
      }
    ],
    collection: "studio-work",
    categories: ["illustration"],
    description: (
      <>
        A selection of analogue and digital drawings.
      </>
    ),
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
            "/images/archive-06.mp4",
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
      "Portrait study",
    ],
  },
  {
    id: "central23",
    title: "Wrapping Paper",
    //  href: "/central23",
    credits: [
      { role: "Art Direction", name: "Rowan Morrison" },
      { role: "Animation", name: "Studio-work XYZ" }
    ],
    blocks: [
      { type: "full", media: [{ src: "/images/central23-04.jpg", caption: "Central23 — wrapping paper designs" }] },
    ],
    collection: "professional-work",
    categories: ["print-design"],
    caption: ( 
    <>
    © {new Date().getFullYear()} Central23. All rights reserved. Work produced for Central23. All rights and assets are the property of Central23. Shown here for portfolio purposes only.
  </>),
    order: 12,
    previewText: (
      <>
        Wrapping paper designs for award-winning packaging brand Central23.
        </>
    ),
    description: (
      <>
        Wrapping paper designs for award-winning packaging brand <a href="https://central23.co/en-uk" target="_blank" rel="noopener noreferrer">Central23</a>.
      </>
    ),
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
  {
    id: "archive",
    title: "Archive",
    //  href: "/archive",
    blocks: [
      { type: "full", media: [{ src: "/images/archive-12.jpg", caption: "archive of digital illustrations and studies"}] },
    ],
    collection: "studio-work",
    categories: ["illustration"],
    isVideo: true,
      previewHeading: (
        <>
        Studio-work observational studies
        </>
    ),
    previewText: (
      <>
        A selection of analogue and digital drawings.
      </>
    ),
    description: (
      <>
        A selection of analogue and digital drawings.
      </>
    ),
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
  {
    id: "open-collab",
    title: "Open Collab",
    //  href: "/oracle-cats",
    blocks: [
      { type: "full", media: [{ src: "/images/open-collab-01.mp4", caption: "Digital illustration" }] },
      { type: "full", media: [{ src: "/images/open-collab-02.mp4", caption: "Digital illustration" }] },
    ],
    collection: "studio-work",
    categories: ["web-and-digital", "illustration"],
    isVideo: true,
      previewHeading: (
        <>
        Studio observational studies
        </>
    ),
    previewText: (
      <>
        Open Collab is a platform created to facilitate remote collaboration between creators. Participants respond to a predetermined subject by creating texts or images. Once submitted to the platform, individual content is randomly combined into an endless stream of aleatoric compositions.
      </>
    ),
    description: (
      <>
        <a href="https://www.open-collab.org/" target="_blank" rel="noopener noreferrer">Open Collab</a> is a platform created to facilitate remote collaboration between creators. Participants respond to a predetermined subject by creating texts or images. Once submitted to the platform, individual content is randomly combined into an endless stream of aleatoric compositions.
      </>
    ),
    images: [ "/images/open-collab-01.mp4",
      "/images/open-collab-02.mp4",
    "/images/open-collab-03.mp4",
  "/images/open-collab-04.mp4",
"/images/open-collab-05.mp4",],
           imageCaption: [
      "Digital illustration",
      "Graphic illustration",
      "Botanical illustration",
      "Botanical illustration",
      "Botanical illustration",
    ],
  },

  {
    id: "memory-pendants",
    title: "Memory Pendants",
    //  href: "/memory-pendants",
    collection: "professional-work",
    credits: [
      { role: "Illustration", name: "Rowan Morrison" },
      { role: "Pendant Design", name: "Carolina Bucci" }
    ],
    blocks: [
      { type: "full", media: [{ src: "/images/memory-pendants-11.mp4", caption: "Carolina Bucci — memory pendants" }] },
    ],
    categories: ["animation-and-motion", "illustration"],
    isVideo: true,
    order: 2,
      previewHeading: (
        <>
        Studio-work observational studies
        </>
    ),
    previewText: (
      <>
        Drawing pendants to capture clients’ memories forever in 18k gold and precious stones. See them <a href="https://carolinabucci.com/products/memory-pendant" target="_blank" rel="noopener noreferrer">here</a>.
      </>
    ),
    description: (
      <>
        Drawing pendants to capture clients’ memories forever in 18k gold and precious stones. See them <a href="https://carolinabucci.com/products/memory-pendant" target="_blank" rel="noopener noreferrer">here</a>.
      </>
    ),
    caption: ( 
    <>
    © {new Date().getFullYear()} Carolina Bucci Firenze. All rights reserved. Work produced as part of my role at Carolina Bucci. All rights and assets are the property of Carolina Bucci. Shown here for portfolio purposes only.
  </>),
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
    ],
  },
  {
    id: "merchandising",
    title: "Brand & Merchandising",
    //  href: "/oracle-cats",
    collection: "professional-work",
    credits: [
      { role: "Illustration", name: "Rowan Morrison" },
      { role: "Jewellery Design", name: "Carolina Bucci" }
    ],
    blocks: [
      { type: "full", media: [
        { src: "/images/illustration-homepage-01.jpg", caption: "Carolina Bucci — illustration + photoshoot assisting" },
        { src: "/images/lucky-06.jpg", caption: "Carolina Bucci — laser-cut vinyls" },
        { src: "/images/montecito-boarding-3.jpg", caption: "Carolina Bucci — hoarding" },
        { src: "/images/tote-bag-02.jpg", caption: "Carolina Bucci — canvas tote bags" },
        { src: "/images/lucky-01.jpg", caption: "Carolina Bucci — matchstick box" },
        { src: "/images/lucky-03.jpg", caption: "Carolina Bucci — paper stationery" },
        { src: "/images/lucky-02.jpg", caption: "Carolina Bucci — advent calendar" },
        { src: "/images/guides-01.jpg", caption: "Carolina Bucci — collection guide booklets" },
        { src: "/images/rowan-morrison-how-to-forte-beads-guide-spread-01.jpg", caption: "Carolina Bucci — spread from HOW TO: FORTE Beads collection guide" },
        { src: "/images/rowan-morrison-how-to-forte-beads-guide-spread-02.jpg", caption: "Carolina Bucci — spread from HOW TO: FORTE Beads collection guide" },
        { src: "/images/rowan-morrison-how-to-forte-beads-guide-spread-03.jpg", caption: "Carolina Bucci — spread from HOW TO: FORTE Beads collection guide" },
        { src: "/images/carolina-bucci-store-illustration-01.jpg", caption: "Carolina Bucci — digital illustration" },
      ] },
    ],
    categories: ["branding-and-identity", "illustration"],
    order: 3,
      previewHeading: (
        <>
        Studio-work observational studies
        </>
    ),
    previewText: (
      <>
        Some of many different types of visual collateral made for Carolina Bucci.
      </>
    ),
     description: (
    <>
    Some of many different types of visual collateral made for Carolina Bucci.
    </>),
    caption: ( 
    <>
    © {new Date().getFullYear()} Carolina Bucci Firenze. All rights reserved. Work produced as part of my role at Carolina Bucci. All rights and assets are the property of Carolina Bucci. Shown here for portfolio purposes only.
  </>),
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
  {
    id: "art-of-wishes",
    title: "Carolina Bucci × Art of Wishes",
    collection: "professional-work",
    credits: [
      { role: "Art Direction", name: "Rowan Morrison" },
      { role: "Animation", name: "Studio-work XYZ" }
    ],
    //  href: "/oracle-cats",
    blocks: [
      { type: "full", media: [{ src: "/images/art-of-wishes-01.jpg",
        caption: (
       <>
            Carolina Bucci × Art of Wishes <br />
            Branding for marketing the UK charity Art of Wishes, in support of Make-A-Wish UK®. <br />
            <br />
            — <br />
            <br />
            1 page insert card, produced as part of my role
          </>
          )
        }] },
    ],
    categories: ["print-design"],
      previewHeading: (
        <>
        Studio-work observational studies
        </>
    ),
    previewText: (
      <>
        Collateral supporting Carolina Bucci’s collaboration with Art of Wishes, in support of Make-A-Wish UK®.
      </>
    ),
         description: (
      <>
        Collateral supporting Carolina Bucci’s collaboration with Art of Wishes, 
        in support of Make-A-Wish UK®. Learn more and support Make-A-Wish UK® <a href="https://carolinabucci.com/blogs/la-catena/wishful-thinking" target="_blank" rel="noopener noreferrer">here</a>.
      </>
    ),
      caption: ( 
    <>
    © {new Date().getFullYear()} Carolina Bucci Firenze. All rights reserved. Work produced as part of my role at Carolina Bucci. All rights and assets are the property of Carolina Bucci. Original illustrations made by Rosie, Emily and Noah, with Make-a-Wish UK®. Shown here for portfolio purposes only.
  </>),
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
  {
    id: "downtown-rings",
    title: "Digital Design",
    collection: "professional-work",
    credits: [
      { role: "Art Direction", name: "Rowan Morrison" },
      { role: "Animation", name: "Studio-work XYZ" }
    ],
    blocks: [
      { type: "full", media: [{ src: "/images/downtown-rings-01.jpg", caption: (
       <>
            <span className="font-bold">Carolina Bucci × Art of Wishes</span> <br />
            Branding for marketing the UK charity Art of Wishes, in support of Make-A-Wish UK®. <br />
            <br />
            — <br />
            <br />
            1 page insert card, produced as part of my role
          </>
          ) }] },
    ],
    categories: ["web-and-digital"],
    isVideo: true,
      previewHeading: (
        <>
        Studio-work observational studies
        </>
    ),
    previewText: (
      <>
        A built-in PDP tool for clients to play with the many possibilities of Carolina Bucci’s Downtown rings.
      </>
    ),
    description: (<>
  A built-in PDP tool for clients to play with the many possibilities of Carolina Bucci’s Downtown rings. See it at work 
   <a href="https://www.carolinabucci.com/products/downtown-ring" target="_blank" rel="noopener noreferrer" className="hyperlink">
          here
        </a>.
       </>),
    caption: ( 
    <>
    © {new Date().getFullYear()} Carolina Bucci Firenze. All rights reserved. Work produced as part of my role at Carolina Bucci. All rights and assets are the property of Carolina Bucci. Shown here for portfolio purposes only.
  </>),
   skills: ["UX/UI", "Interactive coding", "Illustration & animation", "Newsletter creation & design"],
  images: ["/images/downtown-rings-tool.mp4",
    "/images/rowan-morrison-downtown-rings-ad.mp4",
  ],
             imageCaption: [
      "Interactive coding",
      "Animated newsletter",
    ],
  },
  {
    id: "animation",
    title: "Animation",
    collection: "professional-work",
    credits: [
      { role: "Art Direction", name: "Rowan Morrison" },
      { role: "Animation", name: "Studio-work XYZ" }
    ],
    blocks: [
      { type: "full", media: [{ src: "/images/lucky-5.mp4", caption: "Carolina Bucci — animations" }] },
    ],
    categories: ["animation-and-motion", "illustration"],
    isVideo: true,
      previewHeading: (
        <>
        Studio-work observational studies
        </>
    ),
    previewText: (
      <>
        Animations to show the personalisable elements of Carolina Bucci’s bracelets and necklaces.
      </>
    ),
    description: (
      <>
        Animations to show the personalisable elements of Carolina Bucci’s bracelets and necklaces.
      </>
    ),
     caption: ( 
    <>
    © {new Date().getFullYear()} Carolina Bucci Firenze. All rights reserved. Work produced as part of my role at Carolina Bucci. All rights and assets are the property of Carolina Bucci. Shown here for portfolio purposes only.
  </>),
    images: [ "/images/carolina-bucci-everyday-animation-4x5.mp4",
      "/images/carolina-bucci-multi-wish-lucky-bracelet-animation-web.mp4"
    ],
               imageCaption: [
      "Editorial design of La Catena Issue 3",
      "Illustrated animation",
    ],
  },
  {
    id: "la-catena",
    title: (<><em style={{fontFamily: "'EB Garamond Italic'",}}>La Catena</em></>),
    //  href: "/oracle-cats",
    collection: "professional-work",
    credits: [
      { role: "Art Direction", name: "Rowan Morrison" },
      { role: "Animation", name: "Studio-work XYZ" }
    ],
    blocks: [
      { type: "full", media: [{ src: "/images/madame-vo-newsletter-hero.png", caption: "Carolina Bucci — graphic illustrations" }] },
    ],
    categories: ["editorial-design"],
    previewHeading: (
        <>
        Studio-work observational studies
        </>
    ),
     previewText: (
       <>
        <em>La Catena</em> is Carolina Bucci’s blog and annual magazine. I worked on the editorial design of Issues 2 & 3, as well as creating illustrations and posts for the online blog.
      </>
    ),
    description:  (<><em className="hyperlink">La Catena</em> is Carolina Bucci’s blog and annual magazine. I worked on the editorial design of Issues 2 & 3, as well as creating illustrations and posts for the online blog.
    <br></br>
    <br></br>
    Read ‘Yen Vo and Jimmy Ly First Bonded over Beignets’ on <em>La Catena</em> <a href="https://carolinabucci.com/blogs/la-catena/yen-vo-and-jimmy-ly-first-bonded-over-beignets?srsltid=AfmBOoqCOjSa0M06g-Pv2UUyRh0VxbOA2v3kqt9go_bd4W0FODp02M6Y" target="_blank" rel="noopener noreferrer" className="hyperlink">here</a>.</>),
     caption: ( 
    <>
    © {new Date().getFullYear()} Carolina Bucci Firenze. All rights reserved. Work produced as part of my role at Carolina Bucci. All rights and assets are the property of Carolina Bucci. Shown here for portfolio purposes only.
  </>),
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
    <React.Fragment key="la-catena-0">Editorial design of <em>La Catena</em> Issue 3</React.Fragment>,
    <React.Fragment key="la-catena-1">Front cover + spread of <em>La Catena</em> Issue 3</React.Fragment>,
    "Blog post creation via Shopify CMS",
      "Hero illustrations",
      "Graphic illustrations",
      "A pendant with a drawing of a cactus",
    <React.Fragment key="la-catena-6">Editorial design of <em>La Catena</em> Issue 2</React.Fragment>,
       "Social media",
    ],
  },
  {
    id: "lucky",
    title: "Lucky Icons",
    //  href: "/oracle-cats",
    collection: "professional-work",
    credits: [
      { role: "Art Direction", name: "Rowan Morrison" },
      { role: "Animation", name: "Studio-work XYZ" }
    ],
    blocks: [
      { type: "half", media: [{ src: "/images/8-selected-lucky-charms-web.png", caption: "Carolina Bucci — illustrated icons" },
      { src: "/images/carolina-bucci-florentine-finish-forte-got-lucky-stud-earrings-atelier-lifestyle-meta-1x1.mp4", caption: "Carolina Bucci — video editing" },
      { src: "/images/24-lucky-charms-pattern-web.png", caption: "Carolina Bucci — pattern design" },
      { src: "/images/lucky-04.jpg", caption: "Carolina Bucci Lucky Keychains" }
      ] },
    ],
    categories: ["print-design"],
    order: 10,
      previewHeading: (
        <>
        Studio-work observational studies
        </>
    ),
    previewText: (
      <>
        Created 24 icon illustrations for Carolina Bucci’s first collection, Lucky.
      </>
    ),
    description: (
      <>
        Created 24 icon illustrations for Carolina Bucci’s first collection, Lucky. See them in context <a href="https://carolinabucci.com/products/pineider-lucky-stationery-set" target="_blank" rel="noopener noreferrer" className="hyperlink">here</a>.
      </>
    ),
    caption: ( 
    <>
    © {new Date().getFullYear()} Carolina Bucci Firenze. All rights reserved. Work produced as part of my role at Carolina Bucci. All rights and assets are the property of Carolina Bucci. Shown here for portfolio purposes only.
  </>),
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
{
  id: "macro",
  title: "MACRO",
  //  href: "/oracle-cats",
    blocks: [
      { type: "full", media: [{ src: "/images/macro-02.jpg", caption: "Digital illustration series inspired by Vivienne Westwood’s Activist play" }] },
    ],
  collection: "studio-work",
  categories: ["editorial-design", "illustration"],
  previewHeading: <>Studio-work observational studies</>,
  previewText: <>A series of illustrations that depict characters from Vivienne Westwood’s Activist play wearing sustainable fashion from independent designers.</>,
  description: <>A series of illustrations that depict characters from Vivienne Westwood’s Activist play wearing sustainable fashion from independent designers.</>,
  skills: ["Illustration"],
  images: [
    "/images/macro-02.jpg",
    "/images/macro-03.jpg",
    "/images/macro-04.jpg",
    "/images/macro-05.jpg",
    "/images/macro-06.jpg",
    "/images/macro-07.jpg",
    "/images/macro-08.jpg"
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
  ]
}
];

export default projects;
