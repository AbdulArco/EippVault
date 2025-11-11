import React from "react"; 
import PricingCard from "./PricingCard";
import { pricingPlans } from "@/src/constant/data";

const Price: React.FC = () => {
  return (
    <section id="pricing" className="w-full" >
      <div className="bg-gray-100">
      {/* Section Heading */}
      <div className="text-center py-12">
        <h2 className="text-3xl font-semibold text-primary-dark">
          Choose the Plan that Fits Your Team
        </h2>
        <p className="text-gray-600 mt-2 ">
          Simple pricing. No hidden fees. Scale as you grow.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className=" flex items-center justify-center p-8 pb-40">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              delivery={plan.delivery}
              highlight={plan.highlight}
            />
          ))}
        </div>
      </div>
      </div>

    </section>
  );
};

export default Price;
