import type { Project } from "../types/project";
import React from "react";

export const projects: Project[] = [
    { id: "catelier", title: "Catelier", images: ["/images/catelier-01.jpg"], collection: "studio", categories: ["web-digital", "illustration"], },
    { id: "oracle-cats", title: "Cat Oracle", images: ["/images/oracle-cats-concept-02.png"], collection: "studio", categories: ["web-digital"], },
    { id: "mojo-stickers", title: "Stickers", images: ["/images/mojo-stickers-01.jpg"], collection: "studio", categories: ["print-design", "illustration"], },
    { id: "object-studies", title: "Still Life", images: ["/images/object-studies.png"], collection: "studio", categories: ["illustration"], },
    { id: "central23", title: "Wrapping Paper", images: ["/images/rowan-morrison-central23-wrapping-paper-jungle.jpg"], collection: "studio", categories: ["print-design"], },
    { id: "archive", title: "Archive", images: ["/images/archive-06.gif"], collection: "studio", categories: ["illustration"], },
    { id: "open-collab", title: "Open Collab", images: ["/images/open-collab-1.gif"], collection: "studio", categories: ["web-digital", "illustration"], },
    { id: "macro", title: "MACRO", images: ["/images/macro-02.jpg"], collection: "studio", categories: ["editorial-design", "illustration"], },

    { id: "memory-pendants", title: "Memory Pendants", images: ["/images/memory-pendants-11.mp4"], collection: "professional", categories: ["animation-motion", "illustration"], isVideo: true },
    { id: "merchandising", title: "Brand & Merchandising", images: ["/images/illustration-homepage-01.jpg"], collection: "professional", categories: ["branding-and-identity", "illustration"], },
    { id: "art-of-wishes", title: <>Make-A-Wish UK<sup>®</sup></>, images: ["/images/art-of-wishes-insert-card-02.jpg"], collection: "professional", categories: ["print-design"], },
    { id: "downtown-rings", title: "Digital Design", images: ["/images/downtown-rings-tool.mp4"], collection: "professional", categories: ["web-digital"], isVideo: true },
    { id: "animation", title: "Animation", images: ["/images/carolina-bucci-everyday-animation-4x5.mp4"], collection: "professional", categories: ["animation-motion", "illustration"], isVideo: true },
    { id: "la-catena", title: "La Catena", images: ["/images/la-catena-mockup-01.jpg"], collection: "professional", categories: ["editorial-design"], },
    { id: "lucky", title: "Lucky Icons", images: ["/images/lucky-04.jpg"], collection: "professional", categories: ["print-design"], },
  ];