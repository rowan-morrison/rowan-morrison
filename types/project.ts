import type { ReactNode } from "react";

export type WorkCollection = "professional" | "studio";
export type WorkCategory =
  | "branding-and-identity"
  | "print-design"
  | "illustration"
  | "editorial-design"
  | "web-and-digital"
  | "animation-and-motion"

export interface Project {
  id: string;
  title: string | ReactNode;
  images: string[];
  description?: string | ReactNode;
  collection: WorkCollection;
  categories: WorkCategory[];
  isVideo?: boolean;
  order?: number;
  previewText?: string | ReactNode;
  previewHeading?: string | ReactNode;
  previewCaptions?: string | ReactNode;
  skills?: string[];
  linkApp?: string;
  caption?: string | ReactNode;
  imageCaption?: ReactNode[];
  comingSoon?: boolean;
}

export interface MasonryGridProps {
  projects: Project[];
  vertical?: boolean;
  showCaptionsOnClick?: boolean;
  collection: WorkCollection;
  categories?: WorkCategory[];
}