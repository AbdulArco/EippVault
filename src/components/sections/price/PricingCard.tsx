import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  description:string;
  features: string[];
  highlight?: boolean;
  delivery: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  highlight = false,
  delivery,
}) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-2xl shadow-lg p-8 transition-all duration-300
      ${highlight 
        ? "bg-gradient-to-l from-[var(--color-primary-dark)] to-[#A8E6F0] text-white scale-105" 
        : "bg-white text-gray-800"}
      `}
    >
      <div>
        <div
          className={`uppercase text-m font-bold mb-4 tracking-wide
            ${highlight ? "text-gray-700" : "text-[#0066B3]"}
          `}
        >
          {title}
        </div>
        <h2 className={`text-4xl font-bold mb-4 text-black`}>{price}</h2>
        <p className={`mb-6 ${highlight ? "text-black" : "text-gray-600"}`}>
          {description}
        </p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className={`text-lg ${highlight ? "text-black" : "text-blue-600"}`}>•</span>
              <span className="text-black">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="text-sm opacity-80 mb-6 text-black">{delivery}</p>
      </div>

      <button
        className={`w-full py-3 rounded-lg font-medium transition-all duration-300
          ${highlight 
            ? "bg-blue-700 text-white hover:bg-green-700" 
            : "bg-[#54b6f3] text-white hover:bg-green-700"}
        `}
      >
        Click here to get started!
      </button>
    </div>
  );
};

export default PricingCard;
