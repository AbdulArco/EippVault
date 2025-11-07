import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-[var(--color-primary-dark)] to-[#A8E6F0] text-white py-40 px-6 text-center relative overflow-hidden "
    >
      <div className="max-w-4xl mx-auto">


        {/* Headline */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          Safeguarding Your Files,
          <br /> Simplifying Your Workflow.
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
          EIPP Vault is your secure, cloud-based document management solution — 
          combining security, efficiency, and ease of access for every team.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex justify-center gap-4">
          <a
            href="#contact-us"
            className="bg-white text-[#0066B3] font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition"
          >
            Get In Touch
          </a>
          <a
            href="#contact-us"
            className="border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-[#0066B3] transition"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Subtle decorative gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#A8E6F0] to-transparent"></div>
    </section>
  );
}
