"use client";

import { certifications } from "@/src/constant/certificationsdata";

export default function Certifications() {
  return (
    <main
      id="certifications"
      className="w-full bg-gradient-to-b from-gray-50 to-white text-gray-800 py-16"
    >

      <section className="max-w-5xl mx-auto px-6 text-center mb-14">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
          Our Standards
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-eipp-primary">
          Our <span className="text-yellow-500">Certified Excellence</span> Journey
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-base">
          We uphold globally recognized certifications that ensure security,
          reliability, and quality across every aspect of our operations.
        </p>
      </section>


      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center border border-gray-100"
          >
         
            <div className="overflow-hidden rounded-xl w-full flex justify-center mb-6">
              <img
                src={cert.image}
                alt={cert.title}
                className={`${cert.imgHeight} w-auto object-contain transform transition-all duration-500 hover:scale-110 hover:brightness-105 active:scale-105`}
              />
            </div>

          
            <h3 className="text-lg font-semibold text-gray-800 mt-2">
              {cert.title}
            </h3>

     
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {cert.description}
            </p>

 
            <div className="mt-5 w-20 h-[3px] bg-gradient-to-r from-eipp-primary to-eipp-secondary rounded-full"></div>
          </div>
        ))}
      </section>
    </main>
  );
}
