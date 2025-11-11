"use client";
import { useState } from "react";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<
    "monthly" | "yearly" | "lifetime"
  >("monthly");

  const pricingPlans = [
    {
      name: "Starter",
      description: "Parfait pour les individuels",
      monthlyPrice: "0",
      yearlyPrice: "0",
      lifetimePrice: "0",
      features: [
        "5 projets actifs",
        "Export en PNG uniquement",
        "Templates de base",
        "Support communautaire",
      ],
      cta: "Commencer gratuitement",
      popular: false,
    },
    {
      name: "Pro",
      description: "Pour les créateurs professionnels",
      monthlyPrice: "15",
      yearlyPrice: "144", // 12 months at $12/month = $144 vs $156 (2 months free)
      lifetimePrice: "299",
      features: [
        "Projets illimités",
        "Export PNG, SVG, JPEG",
        "Tous les templates",
        "Priorité dans le support",
        "Mise à jour automatique",
        "Intégration avec GitHub",
      ],
      cta: "Choisir Pro",
      popular: true,
    },
    {
      name: "Team",
      description: "Pour les équipes et entreprises",
      monthlyPrice: "49",
      yearlyPrice: "468", // 12 months at $39/month = $468 vs $588 (3 months free)
      lifetimePrice: "799",
      features: [
        "Tout ce qui est inclus dans Pro",
        "10 membres d'équipe",
        "Collaboration en temps réel",
        "Contrôle des accès",
        "Rapports d'analyse",
        "Support dédié 24/7",
      ],
      cta: "Choisir Team",
      popular: false,
    },
  ];

  const getPrice = (plan: (typeof pricingPlans)[0]) => {
    switch (billingCycle) {
      case "monthly":
        return plan.monthlyPrice;
      case "yearly":
        return plan.yearlyPrice;
      case "lifetime":
        return plan.lifetimePrice;
      default:
        return plan.monthlyPrice;
    }
  };

  // Calculate monthly equivalent for yearly plans
  const getMonthlyEquivalent = (plan: (typeof pricingPlans)[0]) => {
    if (billingCycle === "yearly") {
      return (parseInt(plan.yearlyPrice) / 12).toFixed(2);
    }
    return null;
  };

  return (
    <section className="flex flex-col gap-10 items-center text-center">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-white tracking-tight text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
          Choisissez votre plan
        </h2>
        <p className="text-white/80 text-base sm:text-lg leading-normal max-w-2xl">
          Des options flexibles pour s&apos;adapter à vos besoins, quels que
          soient votre activité ou votre budget.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex items-center justify-center p-1 bg-white/5 rounded-lg border border-white/10">
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            billingCycle === "monthly"
              ? "bg-primary text-white"
              : "text-white/70 hover:text-white"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Mensuel
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            billingCycle === "yearly"
              ? "bg-primary text-white"
              : "text-white/70 hover:text-white"
          }`}
          onClick={() => setBillingCycle("yearly")}
        >
          Annuel
          <span className="ml-2 text-xs bg-primary/20 px-2 py-1 rounded-full">
            -20%
          </span>
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            billingCycle === "lifetime"
              ? "bg-primary text-white"
              : "text-white/70 hover:text-white"
          }`}
          onClick={() => setBillingCycle("lifetime")}
        >
          À vie
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col gap-6 p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${
              plan.popular
                ? "bg-white/5 border-primary ring-2 ring-primary/20 relative"
                : "bg-white/5 border-white/10"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                LE PLUS POPULAIRE
              </div>
            )}
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-xl font-bold">{plan.name}</h3>
              <p className="text-white/70 text-sm">{plan.description}</p>

              <div className="flex items-baseline gap-2">
                <span className="text-white text-4xl font-bold">
                  €{getPrice(plan)}
                </span>
                {billingCycle === "yearly" && (
                  <span className="text-white/70 text-sm line-through">
                    €{parseInt(plan.monthlyPrice) * 12}
                  </span>
                )}
                {billingCycle !== "lifetime" && (
                  <span className="text-white/70 text-sm">
                    /{billingCycle === "monthly" ? "mois" : "an"}
                  </span>
                )}
              </div>

              {billingCycle === "yearly" && getMonthlyEquivalent(plan) && (
                <p className="text-primary text-sm font-medium">
                  Équivalent à €{getMonthlyEquivalent(plan)}/mois
                </p>
              )}
            </div>

            <ul className="flex flex-col gap-3 text-left">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-white/90 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto w-full py-3 rounded-lg font-bold transition-opacity ${
                plan.popular
                  ? "bg-primary text-white hover:opacity-90"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <p className="text-white/60 text-sm max-w-2xl">
        * Les prix sont indiqués hors taxes. Les abonnements annuels incluent
        une réduction de 20% par rapport aux mensualités.
      </p>
    </section>
  );
};

export default Pricing;
