import ProjectIndex from "@/components/ProjectIndex";
import { projects } from "@/data/projects";

type PageProps = {
  params: { params?: string[] };
};

export default async function CategoryPage({ params }: PageProps) {
  const parts = params?.params ?? [];
  const first = parts[0] ?? "";
  const second = parts[1] ?? "";

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

  if (validCollections.includes(first as WorkCollection)) {
    safeCollection = first as WorkCollection;
    if (validCategories.includes(second as WorkCategory)) {
      safeCategory = second as WorkCategory;
    }
  } else if (validCategories.includes(first as WorkCategory)) {
    safeCategory = first as WorkCategory;
    if (validCollections.includes(second as WorkCollection)) {
      safeCollection = second as WorkCollection;
    }
  }

  const filteredProjects = projects
    .filter((p) => {
      if (safeCategory) {
        return p.categories?.some((cat) => cat.toLowerCase() === safeCategory.toLowerCase());
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
        <div className="sticky top-0 z-890">
          <div className="h-[var(--header-height)]" />

          <div className="px-6 py-4">
            <h1 className="font-subheading hidden">{formatCategory(displayTitle)}</h1>
          </div>
        </div>
      )}

      <section className="container mx-auto py-20 z-10">
        <ProjectIndex projects={filteredProjects} vertical={true} showCaptionsOnClick={true} collection={safeCollection} categories={safeCategory ? [safeCategory] : undefined} />
      </section>
    </>
  );
}
