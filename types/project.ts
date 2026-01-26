import type { ReactNode } from "react";

export type WorkCollection = "professional-work" | "studio-work";

export type WorkCategory =
  | "branding-and-identity"
  | "print-design"
  | "illustration"
  | "editorial-design"
  | "web-and-digital"
  | "animation-and-motion"

export interface Project {
  id: string;
  title?: string | React.ReactNode;
  href?: string;
  blocks: Block[];
  images: string[];
  description?: string | ReactNode;
  collection?: WorkCollection;
  categories: WorkCategory[];
  isVideo?: boolean;
  order?: number;
  previewText?: string | ReactNode;
  previewHeading?: string | ReactNode;
  previewCaptions?: string | ReactNode;
  skills?: string[];
  linkApp?: string;
  caption?: string | React.ReactNode;
  imageCaption?: ReactNode[];
  comingSoon?: boolean;
  credits?: { role: string; name: string }[];
}

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

