"use client";

import React, { useState } from "react";
import Image from "next/image";
import Script from "next/script";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="max-w-3xl mx-auto px-6 py-12 mt-10 flex flex-col items-center text-document.createDocumentFragment(elem)">
        <Image
          src="/images/pigeon-mail.gif"
          className="mb-6"
          alt="pigeon-mail"
          width={180}
          height={180}
          unoptimized
          loading="eager"
        />
        <h2 className="text-headingMedium font-subheading mb-4 text-center">Contact</h2>
        <p className="text-bodySmall font-body mb-8">
          If you have any questions, or would like to discuss a project, please feel free to reach out.
        </p>
        <form
          action="https://formspree.io/f/meogokpw"
          method="POST"
          className="w-full flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            autoComplete="name"
            className="text-bodySmall font-body w-full px-4 py-3 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-roseQuartz dark:border-gray-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            autoComplete="email"
            className="text-bodySmall font-body w-full px-4 py-3 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-roseQuartz dark:border-gray-600"
          />
          <textarea
            name="message"
            placeholder="Your message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            autoComplete="off"
            className="text-bodySmall font-body w-full px-4 py-3 text-opacity-60 border border-gray-300 bg-transparent rounded-md focus:outline-none focus:ring-1 focus:ring-roseQuartz dark:border-gray-600 resize-none"
          />
          <button
            type="submit"
            className="bg-roseQuartz bg-opacity-20 text-bodySmall font-body py-3 rounded-md hover:bg-opacity-60 transition-colors duration-200"
          >
            Send
          </button>
        </form>
      </section>

      <Script
        id="contact-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Rowan Morrison - Contact",
            "description":
              "Get in touch with Rowan Morrison, a multidisciplinary illustrator and graphic designer based in London, UK.",
            "url": "https://rowanmorrisons.com/contact",
          }),
        }}
      />
    </>
  );
}