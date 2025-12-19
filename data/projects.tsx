import React from "react";
import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "catelier",
    title: "Catelier",
    images: ["/images/catelier-01.jpg"],
    collection: "studio",
    categories: ["web-and-digital", "illustration"],
    order: 1,
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
  },
  {
    id: "oracle-cats",
    title: "Cat Oracle",
    images: ["/images/oracle-cats-concept-02.png"],
    collection: "studio",
    categories: ["web-and-digital"],
    order: 5,
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
  },
  {
    id: "mojo-stickers",
    title: "Stickers",
    images: ["/images/mojo-stickers-01.jpg"],
    collection: "studio",
    categories: ["print-design", "illustration"],
    order: 6,
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
  },
  {
    id: "object-studies",
    title: "Still Life",
    images: ["/images/object-studies.png"],
    collection: "studio",
    categories: ["illustration"],
    order: 11,
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
  },
  {
    id: "central23",
    title: "Wrapping Paper",
    images: ["/images/rowan-morrison-central23-wrapping-paper-jungle.jpg"],
    collection: "studio",
    categories: ["print-design"],
    order: 12,
    previewText: (
      <>
        Wrapping paper designs for award-winning packaging brand <a href="https://central23.co/en-uk" target="_blank" rel="noopener noreferrer">Central23</a>.
      </>
    ),
    description: (
      <>
        Wrapping paper designs for award-winning packaging brand <a href="https://central23.co/en-uk" target="_blank" rel="noopener noreferrer">Central23</a>.
      </>
    ),
  },
  {
    id: "archive",
    title: "Archive",
    images: ["/images/archive-06.mp4"],
    collection: "studio",
    categories: ["illustration"],
    isVideo: true,
    order: 13,
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
  },
  {
    id: "open-collab",
    title: "Open Collab",
    images: ["/images/open-collab-01.mp4"],
    collection: "studio",
    categories: ["web-and-digital", "illustration"],
    isVideo: true,
    order: 14,
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
  },

  {
    id: "memory-pendants",
    title: "Memory Pendants",
    images: ["/images/memory-pendants-11.mp4"],
    collection: "professional",
    categories: ["animation-and-motion", "illustration"],
    isVideo: true,
    order: 2,
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
  },
  {
    id: "merchandising",
    title: "Brand & Merchandising",
    images: ["/images/illustration-homepage-01.jpg"],
    collection: "professional",
    categories: ["branding-and-identity", "illustration"],
    order: 3,
    previewText: (
      <>
        Some of many different types of visual collateral made for Carolina Bucci.
      </>
    ),
    description: (
      <>
        Some of many different types of visual collateral made for Carolina Bucci.
      </>
    ),
  },
  {
    id: "art-of-wishes",
    title: "Make-A-Wish UK",
    images: ["/images/art-of-wishes-insert-card-02.jpg"],
    collection: "professional",
    categories: ["print-design"],
    order: 4,
    previewText: (
      <>
        Collateral supporting Carolina Bucci’s collaboration with Art of Wishes, in support of Make-A-Wish UK®. Learn more and support Make-A-Wish UK® <a href="https://carolinabucci.com/blogs/la-catena/wishful-thinking" target="_blank" rel="noopener noreferrer">here</a>.
      </>
    ),
    description: (
      <>
        Collateral supporting Carolina Bucci’s collaboration with Art of Wishes, in support of Make-A-Wish UK®. Learn more and support Make-A-Wish UK® <a href="https://carolinabucci.com/blogs/la-catena/wishful-thinking" target="_blank" rel="noopener noreferrer">here</a>.
      </>
    ),
  },
  {
    id: "downtown-rings",
    title: "Digital Design",
    images: ["/images/downtown-rings-tool.mp4"],
    collection: "professional",
    categories: ["web-and-digital"],
    isVideo: true,
    order: 7,
    previewText: (
      <>
        A built-in PDP tool for clients to play with the many possibilities of Carolina Bucci’s Downtown rings.
      </>
    ),
    description: (
      <>
        A built-in PDP tool for clients to play with the many possibilities of Carolina Bucci’s Downtown rings. See it at work <a href="https://www.carolinabucci.com/products/downtown-ring" target="_blank" rel="noopener noreferrer">here</a>.
      </>
    ),
  },
  {
    id: "animation",
    title: "Animation",
    images: ["/images/carolina-bucci-everyday-animation-4x5.mp4"],
    collection: "professional",
    categories: ["animation-and-motion", "illustration"],
    isVideo: true,
    order: 8,
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
  },
  {
    id: "la-catena",
    title: "La Catena",
    images: ["/images/la-catena-mockup-01.jpg"],
    collection: "professional",
    categories: ["editorial-design"],
    order: 9,
     previewText: (
       <>
        <em>La Catena</em> is Carolina Bucci’s blog and annual magazine. I worked on the editorial design of Issues 2 & 3, as well as creating illustrations and posts for the online blog.
      </>
    ),
    description: (
      <>
        <em className="hyperlink">La Catena</em> is Carolina Bucci’s blog and annual magazine. I worked on the editorial design of Issues 2 & 3, as well as creating illustrations and posts for the online blog.
      </>
    ),
  },
  {
    id: "lucky",
    title: "Lucky Icons",
    images: ["/images/lucky-04.jpg"],
    collection: "professional",
    categories: ["print-design"],
    order: 10,
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
  },
];

export default projects;
