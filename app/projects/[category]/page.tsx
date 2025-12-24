import ProjectIndex from "@/components/ProjectIndex";
import { projects } from "@/data/projects";
import StickyFadeHeader from "@/components/StickyFadeHeader";

type PageParams = {
  category?: string | string[];
  collection?: string | string[];
};

export default async function CategoryPage({ params }: { params: PageParams }) {
  const resolved = await params;
  const firstParam = Array.isArray(resolved.category) ? resolved.category[0] : resolved.category ?? "";
  const secondParam = Array.isArray(resolved.collection) ? resolved.collection[0] : resolved.collection ?? "";

  const validCollections = ["professional", "studio"] as const;
  const validCategories = [
    "illustration",
    "branding-and-identity",
    "animation-and-motion",
    "editorial-design",
    "print-design",
    "web-and-digital",
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
        return (
          p.collection.toLowerCase() === safeCollection.toLowerCase() &&
          p.categories?.some((cat) => cat.toLowerCase() === safeCategory.toLowerCase())
        );
      }
      return p.collection.toLowerCase() === safeCollection.toLowerCase();
    })
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  const formatCategory = (slug: string) => slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  if (!filteredProjects.length) {
    return (
      <p className="flex items-center justify-center h-screen text-center text-current">Category not found.</p>
    );
  }

  const displayTitle = safeCategory ?? safeCollection;

  return (
    <>
      {displayTitle && (
        <StickyFadeHeader>
          <div className="h-[var(--header-height)] bg-white" />
          <div className="px-6 py-4 bg-white">
            <h1 className="font-subheading">{formatCategory(displayTitle)}</h1>
          </div>
        </StickyFadeHeader>
      )}

      <section className="container mx-auto py-20 z-10">
        <ProjectIndex projects={filteredProjects} vertical={true} showCaptionsOnClick={true} collection={safeCollection} categories={safeCategory ? [safeCategory] : undefined} />
      </section>
    </>
  );
}
