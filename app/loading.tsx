import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Image
        src="/images/rowan-morrison-logo-black-v2.png"
        alt="Rowan Morrison Logo"
        width={96}
        height={96}
        style={{ width: "auto" }}
        className="dark:invert animate-pulse"
        priority
      />
      <p className="mt-4 text-sm text-current">Loading...</p>
    </div>
  );
}