import type { ReactNode } from "react";

export type WorkCollection = "professional" | "studio";
export type WorkCategory =
  | "branding-and-identity"
  | "print-design"
  | "illustration"
  | "editorial-design"
  | "web-digital"
  | "animation-motion"

export interface Project {
  id: string;
  title: string | ReactNode;
  images: string[];
  description?: string;
collection: WorkCollection;
  categories: WorkCategory[];
  isVideo?: boolean;
  order?: number;
}

export interface MasonryGridProps {
  projects: Project[];
  vertical?: boolean;
  showCaptionsOnClick?: boolean;
  collection: WorkCollection;
  categories?: WorkCategory[];
}