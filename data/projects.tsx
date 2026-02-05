import React from "react";
import type { Project } from "../types/project";

export const projects: Project[] = [

  // STUDIO WORK
    {
    id: "studio-work",
    title: "Studio Work",
    href: "/studio-work",
    collection: "personal-work",
    credits: [
      { role: "Graphic Design, Illustration", name: "Rowan Morrison" }
    ],
    blocks: [
      { type: "full", media: [
        { src: "/images/illustration-homepage-01.jpg", caption: "Carolina Bucci — illustration + photoshoot assisting" }
      ] }
    ],
    categories: ["branding-and-identity", "illustration"],
    description: (
      <>
      Some of many different types of visual collateral made for Carolina Bucci.
      © {new Date().getFullYear()} Carolina Bucci Firenze. All rights reserved. Work produced as part of my role at Carolina Bucci. All rights and assets are the property of Carolina Bucci. Shown here for portfolio purposes only.
      </>
    ),
    skills: ["Print production", "Packaging & editorial design", "Large-scale prints"],
    subSections: [
      {
        heading: "Catelier",
        blocks: [
          {
            type: "half",
    
     //linkApp: "https://catoracle.rowanmorrisons.com",
            media: [
          { src: "/images/catelier-01.jpg", caption: (
                <>
                  Create the perfect accessory for even the fanciest of kitties with this mini interactive app.
                  <br />
                  — <br />
                  <br />
                  1 page digital card
                </>
                )},
          { src: "/images/catelier-03.jpg", caption: "CATELIER" },
          { src: "/images/oracle-cats-concept-02.png", caption: "A mini interactive app to find out some facts about cats." },
        ],
          }
        ]
      },
       {
        heading: "Studio Branding (Concept)",
        blocks: [
          {
            type: "half",
            media: [
          { src: "/images/rowan-morrison-cos-logo-animation.mp4", caption: (
                <>
                  Create the perfect accessory for even the fanciest of kitties with this mini interactive app.
                  <br />
                  — <br />
                  <br />
                  1 page digital card
                </>
                )},
          { src: "/images/rowan-morrison-cos-logo-animation.mp4", caption: "CATELIER" },
          { src: "/images/oracle-cats-concept-02.png", caption: "A mini interactive app to find out some facts about cats." },
        ],
          }
        ]
      },
      {
        heading: "Stickers",
        blocks: [
          {
            type: "half",
            media: [
              { src: "/images/mojo-stickers-01.jpg", caption: (
                <>
                  Carolina Bucci × Art of Wishes <br />
                  Branding for marketing the UK charity Art of Wishes, in support of Make-A-Wish UK®. <br />
                  <br />
                  — <br />
                  <br />
                  1 page sticker sheet, sticker sheet with cut lines
                </>
              ) },
              { src: "/images/mojo-stickers-web-01.jpg", caption: "Insert card design" },
            ]
          }
        ]
      },
      {
        heading: "Observational Studies",
        blocks: [
          {
            type: "full",
             media: [
              { src: "/images/pickle-study.png", caption: "Pickle study" },
              { src: "/images/orange-slice-study.png", caption: "Orange slice study" },
              { src: "/images/tomato-study.png", caption: "Tomato study" },
              { src: "/images/pear-study.png", caption: "Pear study" },
              { src: "/images/spinach-leaf-study.png", caption: "Spinach leaf study" },
              { src: "/images/lemon-study.png", caption: "Lemon study" },
              { src: "/images/archive-09.jpg", caption: "Archive 09" },
              { src: "/images/archive-07.jpg", caption: "Archive 07" },
              { src: "/images/archive-13.jpg", caption: "Archive 13" },
              { src: "/images/archive-14.jpg", caption: "Archive 14" },
              { src: "/images/archive-15.jpg", caption: "Archive 15" },
              { src: "/images/archive-16.jpg", caption: "Archive 16" },
              { src: "/images/archive-17.jpg", caption: "Archive 17" },
              { src: "/images/wes-1.jpg", caption: "Portrait study" },
              { src: "/images/archive-06.mp4", caption: "Portrait study" },
               { src: "/images/archive-01.jpg", caption: "Editorial design of La Catena Issue 3" },
              { src: "/images/archive-10.jpg", caption: "Hero illustrations" },
              { src: "/images/archive-11.jpg", caption: "" },
              { src: "/images/archive-02.jpg", caption: "" },
              { src: "/images/archive-03.jpg", caption: "" },
              { src: "/images/archive-12.jpg", caption: "" },
              { src: "/images/archive-04.jpg", caption: "" },
              { src: "/images/archive-05.gif", caption: "" },
              { src: "/images/archive-06.gif", caption: "" },
              { src: "/images/archive-07.jpg", caption: "" },
              { src: "/images/archive-18.jpg", caption: "" },
              { src: "/images/archive-19.jpg", caption: "" },
              { src: "/images/archive-21.jpg", caption: "" },
            ]
          }
        ]
      },
      {
        heading: "Open Collab",
    //     previewText: (
    //   <>
    //     Open Collab is a platform created to facilitate remote collaboration between creators. Participants respond to a predetermined subject by creating texts or images. Once submitted to the platform, individual content is randomly combined into an endless stream of aleatoric compositions.
    //   </>
    // ),
         blocks: [
          {
            type: "full",
            media: [
              { src: "/images/open-collab-01.mp4", caption: "Digital illustration" },
              { src: "/images/open-collab-02.mp4", caption: "Graphic illustration" },
              { src: "/images/open-collab-03.mp4", caption: "Botanical illustration" },
              { src: "/images/open-collab-04.mp4", caption: "Botanical illustration" },
              { src: "/images/open-collab-05.mp4", caption: "Botanical illustration" },
            ]
          }
        ]
      },
      {
        heading: "MACRO",
    //     previewText: (
    //   <>
    //     A series of illustrations that depict characters from Vivienne Westwood’s Activist play wearing sustainable fashion from independent designers.</>,
    // ),
        blocks: [
        {
          type: "full",
          media: [
            { src: "/images/macro-02.jpg", caption: "Editorial design of La Catena Issue 3" },
            { src: "/images/macro-03.jpg", caption: "Hero illustrations" },
            { src: "/images/macro-04.jpg", caption: "" },
            { src: "/images/macro-05.jpg", caption: "" },
            { src: "/images/macro-06.jpg", caption: "" },
            { src: "/images/macro-07.jpg", caption: "" },
            { src: "/images/macro-08.jpg", caption: "" },
          ]
        }
      ]
      },
    ],
  },

  {
    id: "central23",
    title: "Wrapping Paper",
    href: "/central23",
    credits: [
      { role: "Digital Illustration", name: "Rowan Morrison" }
    ],
    blocks: [
      { type: "full", media: [{ src: "/images/central23-04.jpg", caption: "Central23 — wrapping paper designs" }] },
    ],
    collection: "professional-work",
    categories: ["print-design"],
    description: (
      <>
        Wrapping paper designs for award-winning packaging brand <a href="https://central23.co/en-uk" target="_blank" rel="noopener noreferrer">Central23</a>.
      </>
    ),
   skills: ["Digital illustration", "Seamless pattern design"],
    subSections: [
      {
        heading: "Wrapping Paper Designs",
        blocks: [
          {
            type: "full",
            media: [
              { src: "/images/central23-04.jpg", caption: "Magical woodland paradise" },
              { src: "/images/rowan-morrison-central23-wrapping-paper-frogs.jpg", caption: ( 
    <>
    © {new Date().getFullYear()} Central23. All rights reserved. Work produced for Central23. All rights and assets are the property of Central23. Shown here for portfolio purposes only.
  </>), },
              { src: "/images/central23-01.jpg", caption: "Dinosaur adventure" },
              { src: "/images/rowan-morrison-central23-wrapping-paper-dinosaurs.jpg", caption: "" },
              { src: "/images/central23-02.jpg", caption: "Nepal forest" },
              { src: "/images/rowan-morrison-central23-wrapping-paper-jungle.jpg", caption: "" },
              { src: "/images/central23-03.jpg", caption: "Unicorns & castles" },
              { src: "/images/rowan-morrison-central23-wrapping-paper-unicorns.jpg", caption: "" },
            ]
          }
        ]
      }
    ],
  },

  // CAROLINA BUCCI
  {
    id: "carolina-bucci",
    title: "Carolina Bucci",
    href: "/carolina-bucci",
    collection: "professional-work",
    credits: [
      { role: "Graphic Design, Illustration", name: "Rowan Morrison" },
      { role: "Jewellery Design", name: "Carolina Bucci" }
    ],
    // Keep the original blocks for backward compatibility or previews
    blocks: [
      // First image from original blocks, for preview purposes
      { type: "full", media: [
        { src: "/images/illustration-homepage-01.jpg", caption: "Carolina Bucci — illustration + photoshoot assisting" }
      ] }
    ],
    categories: ["branding-and-identity", "illustration"],
    description: (
      <>
      Some of many different types of visual collateral made for Carolina Bucci.
      © {new Date().getFullYear()} Carolina Bucci Firenze. All rights reserved. Work produced as part of my role at Carolina Bucci. All rights and assets are the property of Carolina Bucci. Shown here for portfolio purposes only.
      </>
    ),
    skills: ["Print production", "Packaging & editorial design", "Large-scale prints"],
    subSections: [
      {
        heading: "Collateral & Illustrations",
        blocks: [
          {
            type: "full",
            media: [
              { src: "/images/illustration-homepage-01.jpg", caption: "Illustration + photoshoot assisting" },
              { src: "/images/lucky-06.jpg", caption: "Laser-cut vinyls" },
              { src: "/images/carolina-bucci-la-catena-bomboloni-illustration-desktop-window.png", caption: "Illustration for La Catena blog page" },
              { src: "/images/montecito-boarding-3.jpg", caption: "Hoarding" },
              { src: "/images/tote-bag-02.jpg", caption: "Tote bags" },
              { src: "/images/lucky-01.jpg", caption: "Matchstick box" },
              { src: "/images/lucky-03.jpg", caption: "Paper stationery" },
              { src: "/images/lucky-02.jpg", caption: "Advent calendar" },
              { src: "/images/guides-01.jpg", caption: "Collection guide booklets" },
              { src: "/images/rowan-morrison-how-to-forte-beads-guide-spread-01.jpg", caption: "Spread from HOW TO: FORTE Beads collection guide" },
              { src: "/images/rowan-morrison-how-to-forte-beads-guide-spread-02.jpg", caption: "Spread from HOW TO: FORTE Beads collection guide" },
              { src: "/images/rowan-morrison-how-to-forte-beads-guide-spread-03.jpg", caption: "Spread from HOW TO: FORTE Beads collection guide" },
              { src: "/images/carolina-bucci-store-illustration-01.jpg", caption: "Newsletter design" },
              { src: "/images/cb-print-packaging-11.jpg", caption: "Automations setup + code tweaks via Mailchimp" },
            ]
          }
        ]
      },
      {
        heading: "Art of Wishes Charity Collaboration",
        blocks: [
          {
            type: "full",
            media: [
              { src: "/images/art-of-wishes-01.jpg", caption: (
                <>
                  Carolina Bucci × Art of Wishes <br />
                  Branding for marketing the UK charity Art of Wishes, in support of Make-A-Wish UK®. <br />
                  <br />
                  — <br />
                  <br />
                  1 page insert card, produced as part of my role
                </>
              ) },
              { src: "/images/art-of-wishes-insert-card-02.jpg", caption: "Insert card design" },
              { src: "/images/rowan-morrison-art-of-wishes-01.jpg", caption: "Printed insert card with Carolina Bucci Lucky Hope bracelet" },
              { src: "/images/rowan-morrison-art-of-wishes-02.jpg", caption: "The childrens' charm designs, with the HOW TO: Lucky & 1885 Links guide I helped design" },
              { src: "/images/rowan-morrison-art-of-wishes-03.jpg", caption: "HOW TO: Lucky & 1885 Links guide" },
            ]
          }
        ]
      },
      {
        heading: "Downtown Rings",
        blocks: [
          {
            type: "full",
            media: [
              { src: "/images/downtown-rings-tool.mp4", caption: "Interactive coding" },
              { src: "/images/rowan-morrison-downtown-rings-ad.mp4", caption: "Animated newsletter" },
            ]
          }
        ]
      },
      {
        heading: "Animation for Bracelets & Necklaces",
        blocks: [
          {
            type: "full",
            media: [
              { src: "/images/carolina-bucci-everyday-animation-4x5.mp4", caption: "Editorial design of La Catena Issue 3" },
              { src: "/images/carolina-bucci-multi-wish-lucky-bracelet-animation-web.mp4", caption: "Illustrated animation" },
            ]
          }
        ]
      },
      {
        heading: "La Catena Magazine & Blog",
            // previewText: (
  //      <>
  //       <em>La Catena</em> is Carolina Bucci’s blog and annual magazine. I worked on the editorial design of Issues 2 & 3, as well as creating illustrations and posts for the online blog.
  //     </>
  //   ),
        blocks: [
          {
            type: "full",
            media: [
              { src: "/images/la-catena-01.jpg", caption: <React.Fragment key="la-catena-0">Editorial design of <em>La Catena</em> Issue 3</React.Fragment> },
              { src: "/images/la-catena-mockup-01.jpg", caption: <React.Fragment key="la-catena-1">Front cover + spread of <em>La Catena</em> Issue 3</React.Fragment> },
              { src: "/images/rowan-morrison-la-catena-blog-post.mp4", caption: "Blog post creation via Shopify CMS" },
              { src: "/images/la-catena-website-02.jpg", caption: "Hero illustrations" },
              { src: "/images/la-catena-website-01.mp4", caption: "Graphic illustrations" },
              { src: "/images/la-catena-website-03.jpg", caption: "A pendant with a drawing of a cactus" },
              { src: "/images/la-catena-12.jpg", caption: <React.Fragment key="la-catena-6">Editorial design of <em>La Catena</em> Issue 2</React.Fragment> },
              { src: "/images/madame-vo-newsletter-hero.png", caption: "Social media" },
            ]
          }
        ]
      },
      {
        heading: "Lucky Icons & Accessories",
        blocks: [
          {
            type: "half",
            media: [
              { src: "/images/8-selected-lucky-charms-web.png", caption: "Illustrated icons" },
              { src: "/images/carolina-bucci-florentine-finish-forte-got-lucky-stud-earrings-atelier-lifestyle-meta-1x1.mp4", caption: "Video editing" },
              { src: "/images/24-lucky-charms-pattern-web.png", caption: "Pattern design" },
              { src: "/images/lucky-04.jpg", caption: "Keychains" },
              { src: "/images/lucky-07.jpg", caption: "Carolina Bucci x Pineider Lucky stationery set" },
              { src: "/images/lucky-08.jpg", caption: "Carolina Bucci x Pineider Lucky stationery set" },
              // { src: "/images/lucky-09.jpg", caption: "Lucky ‘Health’ Keychain" },
              // { src: "/images/lucky-10.jpg", caption: "Lucky ‘Friendship’ Keychain" },
              // { src: "/images/lucky-11.jpg", caption: "Lucky ‘Happiness’ Keychain" },
              // { src: "/images/lucky-12.jpg", caption: "Lucky ‘SuperLucky’ Keychain" },
              // { src: "/images/lucky-13.jpg", caption: "Lucky ‘Sprezzatura’ Keychain" },
              // { src: "/images/lucky-14.jpg", caption: "Lucky ‘Protection’ Keychain" },
              // { src: "/images/lucky-17.jpg", caption: "Lucky ‘Travel’ Keychain" },
              // { src: "/images/lucky-15.jpg", caption: "Lucky ‘Love’ Keychain" },
              // { src: "/images/lucky-16.jpg", caption: "Lucky ‘Love’ Keychain - Back view" },
              { src: "/images/loretta-caponi-superlucky-dress-01.jpg", caption: "Carolina Bucci x Loretta Caponi limited-edition dress - embroidered in Italy with SuperLucky icons" },
            ]
          }
        ]
      },
      {
        heading: "Memory Pendants",
        blocks: [
          {
            type: "full",
            media: [
              { src: "/images/memory-pendants-11.mp4", caption: "Illustrated animation" },
              { src: "/images/carolina-bucci-memory-pendant-blueberry.mp4", caption: "Illustrated blueberry pendant" },
              { src: "/images/carolina-bucci-memory-pendant-cabina.mp4", caption: "Illustrated cabina pendant" },
              { src: "/images/carolina-bucci-memory-pendant-volcano.mp4", caption: "Illustrated volcano pendant" },
              { src: "/images/carolina-bucci-memory-pendant-leopard.mp4", caption: "Illustrated leopard pendant" },
              { src: "/images/carolina-bucci-memory-pendant-cactus.mp4", caption: "Illustrated cactus pendant" },
              { src: "/images/carolina-bucci-memory-pendant-bulldog.mp4", caption: "Illustrated bulldog pendant" },
              { src: "/images/carolina-bucci-memory-pendant-pinecone.mp4", caption: "Illustrated pinecone pendant" },
              { src: "/images/memory-pendants-13.jpg", caption: "Final products" },
              { src: "/images/memory-pendants-01.jpg", caption: "Final products" },
              { src: "/images/memory-pendants-03.jpg", caption: "Final products" },
              { src: "/images/memory-pendants-11.jpg", caption: "Final products" },
              { src: "/images/memory-pendants-02.jpg", caption: "Final products" },
            ]
          }
        ]
      },
    ],
  },
];

export default projects;