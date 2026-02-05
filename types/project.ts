import type { ReactNode } from "react";

export type WorkCollection = "professional-work" | "studio-work";

export type WorkCategory =
  | "branding-and-identity"
  | "print-design"
  | "illustration"
  | "editorial-design"
  | "web-and-digital"
  | "animation-and-motion"

export type Project = {
  id: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  images?: string[];
  imageCaption?: React.ReactNode[];
  credits?: { role: string; name: string }[];
  href?: string;
  collection?: string;
  categories?: string[];
  blocks?: {
    type: "full" | "half";
    media: { src: string; caption?: string | React.ReactNode }[];
  }[];
  skills?: string[];
  subSections?: {
    heading?: string | React.ReactNode;
    description?: string | React.ReactNode;
    blocks: {
      type: "full" | "half";
      media: {
        src: string;
        caption?: string | React.ReactNode;
      }[];
    }[];
  }[];
  isVideo?: boolean;
  caption?: string | React.ReactNode;
  previewHeading?: string | React.ReactNode;
  previewText?: string | React.ReactNode;  
};

export type MediaItem = {
  src: string
  caption?: string | ReactNode
}

export type Block =
  | {
      type: "full"
      media: MediaItem[]
    }
  | {
      type: "half"
      media: MediaItem[]
    }

export interface MasonryGridProps {
  projects: Project[];
  vertical?: boolean;
  showCaptionsOnClick?: boolean;
  collection: WorkCollection;
  categories?: WorkCategory[];
}

