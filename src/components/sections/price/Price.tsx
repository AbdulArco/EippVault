import React from "react";
import PricingCard from "./PricingCard";



const App: React.FC = () => {
  return (
    <section id="pricing">
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingCard
          title="Standard Plan"
          price="Rs 4000"
          description="Ideal for small teams looking to securely manage documents with essential features."
          features={[
            "Single user access",
        "Up to 4GB storage",
        "Basic version control",
        "Email support",
        "3-day setup time",
          ]}
          delivery="Est. 3 days of delivery"
        />

        <PricingCard
          title="Professional Logo Design"
          price="Rs 20,000"
          description="Perfect for growing organizations needing collaboration and advanced document security."
          features={[
            "Up to 5 user accounts",
        "20GB secure storage",
        "Advanced version control",
        "Priority support",
        "7-day setup time",
          ]}
          delivery="Est. 7 days of delivery"
          highlight
        />

        <PricingCard
          title="Premium Logo Design"
          price="RS 50,000"
          description="For enterprises requiring maximum security, integrations, and dedicated support."

          features={[
            "Unlimited users",
        "50GB cloud storage",
        "Audit logs & analytics",
        "Dedicated success manager",
        "14-day setup time",
          ]}
          delivery="Est. 14 days of delivery"
        />
      </div>
    </div></section>
  );
};

export default App;
