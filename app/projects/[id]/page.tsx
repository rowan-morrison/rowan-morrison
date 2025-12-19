"use client";

import { useState, ReactNode } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import styles from "../Projects.module.css";
import Image from "next/image";
import Script from "next/script";
import projects from "@/data/projects";

type Params = { id: string | string[] };

export default function ProjectPage() {
  // Helper to render description, handling string, ReactElement, or string[]
const renderDescription = (desc?: ReactNode) => {
  if (desc == null) return null;
  if (Array.isArray(desc)) return desc.join(" ");
  return desc;
};
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const params = useParams() as unknown as Params;
  const id = Array.isArray(params.id) ? params.id[0] : params.id ?? "";
 const work = projects.find((p) => p.id === id);

  const [mounted] = useState(() => typeof window !== "undefined");
  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
   const images = Array.isArray(work?.images)
  ? work.images
  : work?.images
  ? [work.images]
  : [];
  const renderCaption = (caption?: ReactNode) => {
  if (caption == null) return null;
  if (Array.isArray(caption)) return caption.join(" ");
  return caption;
};

if (!mounted) return null;
if (!work) return <div className={styles.notFound}>Work not found.</div>;

  return (
    <>
      <div className={`${styles.projects} w-full mt-[100]`}>
        <motion.section
          className={styles.workInfo}
         initial={{ y: 6, filter: "blur(2px)" }}
animate={{ y: 0, filter: "blur(0px)" }}
exit={{ filter: "blur(2px)" }}
transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className={`${styles.projects} mx-5`}>
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
          <h1 className="text-headingLarge my-3 font-subheading text-current">{work.title}</h1>
          <div className={`${styles.descriptionAndSkills} font-body text-bodyMedium text-current`}>
            <p className={`${styles.descriptionText} font-body mt-2 text-current`}>
              {renderDescription(work.description)}
            </p>
            {work.skills && (
  <div className={`${styles.projectSkills} my-5 flex flex-col`}>
    {work.skills.map((skill: string) => (
      <span key={skill} className="mb-0 text-current">{skill}</span>
    ))}
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
  {images.map((src: string, index: number) => (
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
        className="relative flex flex-col items-center justify-center max-w-[90vw] max-h-[90vh] z-[900]"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, filter: "blur(8px) saturate(0.7)" }}
        animate={{ scale: 1, filter: "blur(0px) saturate(1)" }}
        exit={{ scale: 0.95, filter: "blur(8px) saturate(0.7)" }}
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
          {work.imageCaption?.[previewIndex] ?? null}
        </figcaption>
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