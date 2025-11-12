"use client";

import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alexandre Martin",
      role: "Développeur Frontend",
      company: "TechCorp",
      content:
        "Snippet Studio a complètement transformé ma manière de créer du contenu technique. Mes posts LinkedIn ont 3x plus d'engagement !",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sophie Dubois",
      role: "Ingénieure DevOps",
      content:
        "L'export haute qualité et les templates préconfigurés m'ont fait gagner des heures chaque semaine. Indispensable pour les créateurs tech !",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Thomas Bernard",
      role: "CTO",
      content:
        "Notre équipe utilise Creavvy pour toute notre communication technique. Simple, efficace et professionnel.",
      avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    },
  ];

  return (
    <section className="flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-4 items-center text-center">
        <h2 className="text-white tracking-tight text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
          Rejoignez des milliers de créateurs satisfaits
        </h2>
        <p className="text-white/80 text-base sm:text-lg leading-normal max-w-2xl">
          Découvrez pourquoi les professionnels tech choisissent Creavvy
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col gap-4 p-6 bg-white/5 border border-white/10 rounded-xl"
            role="region"
            aria-labelledby={`testimonial-${testimonial.id}-name`}
          >
            <div className="flex gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                style={{
                  backgroundImage: `url('${testimonial.avatar}')`,
                }}
                aria-hidden="true"
              ></div>
              <div className="flex-1">
                <p
                  id={`testimonial-${testimonial.id}-name`}
                  className="text-white text-base font-bold leading-normal"
                >
                  {testimonial.name}
                </p>
                <p className="text-white/60 text-sm font-normal leading-normal">
                  {testimonial.role}
                </p>
              </div>
            </div>
            <div
              className="flex gap-0.5 text-primary"
              role="img"
              aria-label="Note de 5 étoiles"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                <Star className="size-4" aria-hidden="true" />
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                <Star className="size-4" aria-hidden="true" />
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                <Star className="size-4" aria-hidden="true" />
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                <Star className="size-4" aria-hidden="true" />
              </span>
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                <Star className="size-4" aria-hidden="true" />
              </span>
            </div>
            <p className="text-white/90 text-base font-normal leading-normal">
              &quot;{testimonial.content}&quot;
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
