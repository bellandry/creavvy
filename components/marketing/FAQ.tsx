"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Snippet Studio est-il vraiment gratuit ?",
      answer:
        "Oui, notre plan gratuit vous permet de créer jusqu'à 50 visuels par mois. Pour une utilisation intensive, nous proposons des plans payants avec des fonctionnalités avancées.",
    },
    {
      question: "Quels formats d'images puis-je exporter ?",
      answer:
        "Vous pouvez exporter vos créations en PNG, SVG et JPEG avec une résolution allant jusqu'à 4K. Les exports SVG sont parfaits pour les logos et illustrations vectorielles.",
    },
    {
      question: "Puis-je utiliser mes propres polices ?",
      answer:
        "Absolument ! Vous pouvez importer vos polices personnalisées et les utiliser dans tous vos designs. Nous supportons les formats TTF, OTF et WOFF.",
    },
    {
      question: "Y a-t-il une application mobile ?",
      answer:
        "Snippet Studio est accessible via tous les navigateurs mobiles. Nous travaillons sur une application native qui sera disponible début 2026.",
    },
  ];

  return (
    <section className="flex flex-col gap-10 items-center text-center">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-white tracking-tight text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
          Questions fréquentes
        </h2>
        <p className="text-white/80 text-base sm:text-lg leading-normal max-w-2xl">
          Tout ce que vous devez savoir sur Snippet Studio
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-3xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex flex-col text-left p-6 bg-white/5 border border-white/10 rounded-xl"
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="text-white text-md md:text-lg font-bold">
                {faq.question}
              </h3>
              <span className="material-symbols-outlined text-2xl">
                {openIndex === index ? (
                  <Minus className="size-4 md:size-6" aria-hidden="true" />
                ) : (
                  <Plus className="size-4 md:size-6" aria-hidden="true" />
                )}
              </span>
            </button>
            {openIndex === index && (
              <p id={`faq-answer-${index}`} className="text-white/70 mt-4">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
