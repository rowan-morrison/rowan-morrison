import Link from "next/link";
import Image from "next/image";

export default function ProjectsLanding() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <Link href="/projects/professional" className="relative group block h-[60vh] md:h-screen">
        <Image
          src="/images/professional-cover.jpg"
          alt="Professional work"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-90 group-hover:brightness-75 transition"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/40 px-6 py-3 rounded">
            <h2 className="text-white text-2xl font-semibold">Professional</h2>
          </div>
        </div>
      </Link>

      <Link href="/projects/studio" className="relative group block h-[60vh] md:h-screen">
        <Image
          src="/images/studio-cover.jpg"
          alt="Studio work"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-90 group-hover:brightness-75 transition"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/40 px-6 py-3 rounded">
            <h2 className="text-white text-2xl font-semibold">Studio</h2>
          </div>
        </div>
      </Link>
    </main>
  );
}
