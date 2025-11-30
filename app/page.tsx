"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto p-6 mt-[8vh]">
      <main className="flex flex-col items-center justify-center w-full">
        <Link href="/projects/professional" className="w-full flex-1">
        <Image
          className="w-full h-[40vh] object-cover transition"
          src="/images/carolina-bucci-store-illustration-01.jpg"
          alt="Professional Work"
          width={1200}
          height={800}
          priority
        />
      <p className="mt-4 text-labelLarge font-label small-caps text-current">
      Professional Work
    </p>
        </Link>

      <Link href="/projects/studio" className="w-full flex-1">
        <Image
          src="/images/catelier-01.jpg"
          alt="Studio Work"
          width={1200}
          height={800}
          className="w-full h-[40vh] object-cover transition"
        />
             <p className="mt-4 text-labelLarge font-label small-caps text-current">
      Studio Work
    </p>
      </Link>
      </main>
    </div>

     <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HomePage",
          "name": "Rowan Morrison",
          "description": "Portfolio of Rowan Morrison, a multidisciplinary designer and artist based in London.",
          "url": "https://rowanmorrisons.com",
          "sameAs": [
            "https://www.linkedin.com/in/rowanmorrison/",
            "https://www.instagram.com/rowanmorrisons/",
            "https://github.com/rowan-morrison"
        ]
      })}
      </script>
      </>
  );
}
