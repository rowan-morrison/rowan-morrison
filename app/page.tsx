import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 gap-8 m-5 pt-[100px] md:p-5 md:overflow-y-auto">
      {projects.map((project) => (
        <div key={project.id} className="space-y-8">
   {project.blocks?.map((block, idx) => {
           if (block.type === "full") {
  return (
    <div key={idx} className="relative w-full overflow-hidden"  style={{ aspectRatio: block.width && block.height ? `${block.width} / ${block.height}` : undefined }}
      >
      {project.href ? (
        <Link href={project.href} className="block h-full">
          <Image src={block.src!} alt={String(project.title ?? "")} fill className="object-cover" />
        </Link>
      ) : (
        <Image src={block.src!} alt={String(project.title ?? "")} fill className="object-cover" />
      )}
    </div>
  );
}

           if (block.type === "half") {
              return (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {block.images?.map((img, i) => (
  <div
    key={i}
    className="relative group w-full overflow-hidden"
    style={{ aspectRatio: img.width && img.height ? `${img.width} / ${img.height}` : undefined }}
          >
    {project.href ? (
      <Link href={project.href}>
        <Image
          src={img.src}
          alt={String(project.title ?? "")}
          fill
          className="object-cover"
        />
      </Link>
    ) : (
      <Image
        src={img.src}
        alt={String(project.title ?? "")}
        fill
        className="object-cover"
      />
    )}

  <div className="
    absolute bottom-0 left-0 w-full
    bg-black bg-opacity-60 text-white font-bodyMedium
    text-base md:text-lg font-medium
    p-3
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300
    md:group-hover:opacity-100
  ">
    {img.caption || project.title}
  </div>
</div>
))}
                </div>
              );
            }

           if (block.type === "video") {
    return (
      <div
        key={idx}
        className="relative group w-full overflow-hidden"
        style={{ aspectRatio: "16/9" }}
      >
        <video
        autoPlay
        muted
        loop
        playsInline
          className="w-full h-full object-cover"
          src={block.src}
        />
        {block.caption && (
          <div className="
            absolute bottom-0 left-0 w-full
            bg-black bg-opacity-60 text-white p-3
            opacity-0 group-hover:opacity-100 transition-opacity duration-300
          ">
            {block.caption}
          </div>
        )}
      </div>
    );
  }

  return null;
})}
        </div>
      ))}
    </main>
  );
}
