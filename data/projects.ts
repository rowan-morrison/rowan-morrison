import type { Project } from "../types/project";

export const projects: Project[] = [
    { id: "catelier", title: "Catelier", images: ["/images/catelier-01.jpg"], collection: "studio", categories: ["web-digital", "illustration"],  order: 1 },
    { id: "oracle-cats", title: "Cat Oracle", images: ["/images/oracle-cats-concept-02.png"], collection: "studio", categories: ["web-digital"], order: 5 },
    { id: "mojo-stickers", title: "Stickers", images: ["/images/mojo-stickers-01.jpg"], collection: "studio", categories: ["print-design", "illustration"], order: 6 },
    { id: "object-studies", title: "Still Life", images: ["/images/object-studies.png"], collection: "studio", categories: ["illustration"], order: 11 },
    { id: "central23", title: "Wrapping Paper", images: ["/images/rowan-morrison-central23-wrapping-paper-jungle.jpg"], collection: "studio", categories: ["print-design"], order: 12 },
    { id: "archive", title: "Archive", images: ["/images/archive-06.mp4"], collection: "studio", categories: ["illustration"], isVideo: true, order: 13 },
    { id: "open-collab", title: "Open Collab", images: ["/images/open-collab-01.mp4"], collection: "studio", categories: ["web-digital", "illustration"], isVideo: true, order: 14 },
    { id: "macro", title: "MACRO", images: ["/images/macro-02.jpg"], collection: "studio", categories: ["editorial-design", "illustration"], order: 15 },

    { id: "memory-pendants", title: "Memory Pendants", images: ["/images/memory-pendants-11.mp4"], collection: "professional", categories: ["animation-motion", "illustration"], isVideo: true, order: 2 },
    { id: "merchandising", title: "Brand & Merchandising", images: ["/images/illustration-homepage-01.jpg"], collection: "professional", categories: ["branding-and-identity", "illustration"], order: 3 },
    { id: "art-of-wishes", title: "Make-A-Wish UK", images: ["/images/art-of-wishes-insert-card-02.jpg"], collection: "professional", categories: ["print-design"], order: 4 },
    { id: "downtown-rings", title: "Digital Design", images: ["/images/downtown-rings-tool.mp4"], collection: "professional", categories: ["web-digital"], isVideo: true, order: 7 },
    { id: "animation", title: "Animation", images: ["/images/carolina-bucci-everyday-animation-4x5.mp4"], collection: "professional", categories: ["animation-motion", "illustration"], isVideo: true, order: 8 },
    { id: "la-catena", title: "La Catena", images: ["/images/la-catena-mockup-01.jpg"], collection: "professional", categories: ["editorial-design"], order: 9 },
    { id: "lucky", title: "Lucky Icons", images: ["/images/lucky-04.jpg"], collection: "professional", categories: ["print-design"], order: 10 },
  ];
  