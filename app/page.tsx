import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      
      <Link href="/projects/professional" className="relative group block h-[50vh] md:h-screen">
        <Image
          src="/images/lucky-07.jpg"
          alt="Professional work"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-80 group-hover:brightness-100 transition"
        />
        <div className="absolute inset-0 flex items-center justify-center sm:opacity-100 md:opacity-50 md:group-hover:opacity-100 transition-opacity ease-in-out">
          <div className="px-6 py-3">
            <h2 className="text-white text-titleLarge font-title md:text-headingMedium">Professional</h2>
          </div>
        </div>
      </Link>

      <Link href="/projects/studio" className="relative group block h-[50vh] md:h-screen">
        <Image
          src="/images/catelier-03.jpg"
          alt="Studio work"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-80 group-hover:brightness-100 transition"
        />
        <div className="absolute inset-0 flex items-center justify-center sm:opacity-100 md:opacity-50 md:group-hover:opacity-100 transition-opacity ease-in-out">
          <div className="px-6 py-3">
            <h2 className="text-white text-titleLarge font-title md:text-headingMedium">Studio</h2>
          </div>
        </div>
      </Link>
    </main>
  );
}
