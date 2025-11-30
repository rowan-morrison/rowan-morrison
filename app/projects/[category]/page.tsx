import MasonryGrid from "../../../components/MasonryGrid";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{ category?: string | string[], collection?: string | string[] }>;
}

export default async function ProjectsPage({ params }: PageProps) {
  const resolvedParams = await params;

  const firstParam = Array.isArray(resolvedParams.category)
    ? resolvedParams.category[0]
    : resolvedParams.category ?? "";
  const secondParam = Array.isArray(resolvedParams.collection)
    ? resolvedParams.collection[0]
    : resolvedParams.collection ?? "";

const validCollections = ["professional", "studio"] as const;
const validCategories = [
    "illustration",
    "branding-and-identity",
    "animation-motion",
    "editorial-design",
    "print-design",
    "web-digital",
  ] as const;

type WorkCollection = (typeof validCollections)[number];
type WorkCategory = (typeof validCategories)[number];

 let safeCollection: WorkCollection = "professional";
  let safeCategory: WorkCategory | undefined;

  if (validCollections.includes(firstParam as WorkCollection)) {
    safeCollection = firstParam as WorkCollection;
    if (validCategories.includes(secondParam as WorkCategory)) {
      safeCategory = secondParam as WorkCategory;
    }
  } else if (validCategories.includes(firstParam as WorkCategory)) {
    safeCategory = firstParam as WorkCategory;
    if (validCollections.includes(secondParam as WorkCollection)) {
      safeCollection = secondParam as WorkCollection;
    }
  }

const filteredProjects = projects
  .filter((p) => {
    if (safeCategory) {
      return p.categories?.some(cat => cat.toLowerCase() === safeCategory.toLowerCase());
    }
    return p.collection.toLowerCase() === safeCollection.toLowerCase();
  })
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0)); // manual order

const formatCategory = (slug: string) =>
  slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  if (!filteredProjects.length) {
    return (
      <p className="flex items-center justify-center h-screen text-center text-current">
        Category not found.
      </p>
    );
  }

  return (
    <div className="container mx-auto px-6 py-20">
      {safeCategory && (
      <h1 className="text-3xl font-semibold mb-8 hidden">
  {formatCategory(safeCategory)}
</h1>
      )}
      <MasonryGrid
        projects={filteredProjects}
        vertical={true}
        showCaptionsOnClick={true}
        collection={safeCollection}
        categories={safeCategory ? [safeCategory] : undefined}
      />
    </div>
  );
}