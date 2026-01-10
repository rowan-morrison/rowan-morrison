"use client";

import { FaInstagram, FaLinkedin, FaGithub, FaPinterest } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-6 py-12 mt-10 flex flex-col gap-12 text-current">
        <section className="flex flex-col items-center text-left gap-6">
          <Image
            src="/images/website-portrait.jpeg"
            alt="portrait of Rowan Morrison"
            width={180}
            height={180}
            className="rounded-full"
          />
          <p className="font-garamond text-bodyMedium">
            Hello! I’m a multidisciplinary illustrator and graphic designer based in London, UK.
            I create expressive visuals and intuitive digital experiences, blending storytelling and technology to create new ideas.
          </p>
          <p className="font-garamond text-bodyMedium">My work has been exhibited in the {" "}<a href="https://www.kabk.nl/en" target="_blank" rel="noopener noreferrer" className="hyperlink">Royal Academy of Art</a>{" "}(KABK), The Hague, and also featured in {" "}<a
              href="https://maxibestof.one/websites/47177-carolina-bucci" target="_blank" rel="noopener noreferrer" className="hyperlink">MaxiBestOf</a>.</p>
        </section>

        <section className="flex justify-center text-center">
          <div className="flex gap-10 my-2 justify-center">
            <a
              href="https://instagram.com/rowanmorrisons/"
              target="_blank"
              rel="noopener noreferrer"
              hidden
              className="text-current hover:opacity-50 transition duration-200 ease-in-out"
            >
              <FaInstagram size={30} />
            </a>
            <Link
              href="https://linkedin.com/rowanmorrisons/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-current hover:opacity-50 transition duration-200 ease-in-out"
            >
              <FaLinkedin size={30} />
            </Link>
            <Link
              href="https://github.com/rowan-morrison/rowan-morrison/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-current hover:opacity-50 transition duration-200 ease-in-out"
            >
              <FaGithub size={30} />
            </Link>
            <Link
              href="https://uk.pinterest.com/rowanmorrisons/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-current hover:opacity-50 transition duration-200 ease-in-out"
            >
              <FaPinterest size={30} />
            </Link>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-bodyMedium font-garamond text-center">Some kind words about my work:</h2>
          <div className="flex flex-col gap-2">
            <q className="font-subheading text-bodyMedium pb-1">
              Everyone comments on how great the branding is. I’m sure we will work together again.
            </q>
            <cite className="font-garamond text-bodySmall ml-auto pr-5">
              — Simona Deifta, Founder of{" "}
              <a
                href="https://nojolondon.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hyperlink"
              >
                NOJO
              </a>
            </cite>
          </div>
        </section>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Rowan Morrison - Contact",
          "description": "About Rowan Morrison, a multidisciplinary illustrator and graphic designer based in London, UK.",
          "url": "https://rowanmorrisons.com/contact",
        })}
      </script>
    </>
  );
}