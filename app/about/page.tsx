"use client";

import { FaInstagram, FaLinkedin, FaGithub, FaPinterest } from "react-icons/fa";
import Image from "next/image";

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
          <h2 className="font-subheading text-headingMedium">About</h2>
          <p className="font-body text-bodySmall">
            Rowan Morrison is a multidisciplinary illustrator and graphic designer based in London, UK.
            She creates expressive visuals and intuitive digital experiences, blending storytelling and technology to create new ideas.
          </p>
          <p className="font-body text-bodySmall">
            With a background in graphic design, illustration and front-end development, Rowan enjoys working across disciplines to bring ideas to life.
          </p>
          <p className="font-body text-bodySmall">Her work has been exhibited in the {" "}<a href="https://www.kabk.nl/en" target="_blank" rel="noopener noreferrer" className="hyperlink">Royal Academy of Art</a>{" "}(KABK), The Hague, and also featured in {" "}<a
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
              <FaInstagram size={50} />
            </a>
            <a
              href="https://linkedin.com/rowanmorrisons/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-current hover:opacity-50 transition duration-200 ease-in-out"
            >
              <FaLinkedin size={50} />
            </a>
            <a
              href="https://github.com/rowan-morrison/rowan-morrison/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-current hover:opacity-50 transition duration-200 ease-in-out"
            >
              <FaGithub size={50} />
            </a>
            <a
              href="https://uk.pinterest.com/rowanmorrisons/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-current hover:opacity-50 transition duration-200 ease-in-out"
            >
              <FaPinterest size={50} />
            </a>
          </div>
        </section>

        <section className="flex flex-col gap-6">
          <h2 className="text-headingMedium font-heading text-center">Accolades</h2>
          <div className="p-6 flex flex-col gap-2">
            <q className="font-quote text-headingSmall pb-3">
              Everyone comments on how great the branding is. I’m sure we will work together again.
            </q>
            <cite className="font-body text-bodyMedium">
              Simona Deifta, Founder of{" "}
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
          <div className="hidden">
            <p>Please leave your feedback below:</p>
          </div>
        </section>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "Rowan Morrison - About",
          "description": "About Rowan Morrison, a multidisciplinary illustrator and graphic designer based in London, UK.",
          "url": "https://rowanmorrisons.com/about",
        })}
      </script>
    </>
  );
}