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
          className="brightness-90 group-hover:brightness-75 transition"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <h2 className="text-white text-titleLarge font-title hover:font-italic">Professional</h2>
          </div>
        </div>
      </Link>

      <Link href="/projects/studio" className="relative group block h-[50vh] md:h-screen">
        <Image
          src="/images/catelier-03.jpg"
          alt="Studio work"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-90 group-hover:brightness-75 transition"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full">
            <h2 className="text-white text-titleLarge font-title">Studio</h2>
          </div>
        </div>
      </Link>
    </main>
  );
}
