"use client";
import { useEffect, useRef } from "react";

const Features = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set up intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-up");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    // Observe each feature card
    featureRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Add animation classes to head elements immediately
    const headingElements = document.querySelectorAll("h2, h3, p");
    headingElements.forEach((el) => {
      el.classList.add("animate-in", "fade-in");
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const setFeatureRef = (index: number) => (el: HTMLDivElement | null) => {
    featureRefs.current[index] = el;
  };

  return (
    <section className="flex flex-col gap-10 items-center text-center">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-white tracking-tight text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl opacity-0 animate-in fade-in duration-1000">
          Des fonctionnalités conçues pour les créateurs tech
        </h2>
        <p className="text-white/80 text-base sm:text-lg leading-normal max-w-2xl opacity-0 animate-in fade-in duration-1000 delay-100">
          Tout ce dont vous avez besoin pour produire des visuels percutants qui
          captivent votre audience.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        <div
          ref={setFeatureRef(0)}
          className="md:col-span-2 flex flex-col gap-4 text-left p-6 bg-white/5 border border-white/10 rounded-xl opacity-0 transition-all duration-700 ease-out hover:bg-white/8 hover:border-white/20 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
        >
          <h3 className="text-white text-xl font-bold">
            Personnalisation en temps réel
          </h3>
          <p className="text-white/70 text-base font-normal">
            Changez de thème, de police et de couleurs. Appliquez des filtres à
            vos captures d&apos;écran. Voyez le résultat instantanément.
          </p>
          <div
            className="w-full mt-auto bg-center bg-no-repeat aspect-video bg-cover rounded-lg bg-gray-700"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPNrbxmIgOdAlmzQhIEp71PHq2u406Dc-Bbt75iSwvh3aQf4kSog_EKeierXadvzvA_qGCWrfocOIcTAR_rxcLqYq1zGBS1Rg-jS7vtnE4PxIPBoOderOhZizJI8VCh80RNcDmexUFrgLmxQeZF8jcSFhqAGB5ltX8gP0s_84JPO-BaFeT_lgHIMpuSkGwf-vV6DppqWOektA9ozwyL6ONdx_jovCKA5u_kRnFZMkSWDajcFeLrBKS6G5aCL03zKvfyjcPlXZKy2Q')",
            }}
          ></div>
        </div>
        <div
          ref={setFeatureRef(1)}
          className="flex flex-col gap-4 text-left p-6 bg-white/5 border border-white/10 rounded-xl opacity-0 transition-all duration-700 ease-out hover:bg-white/[0.08] hover:border-white/20 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
        >
          <h3 className="text-white text-xl font-bold">Import facile</h3>
          <p className="text-white/70 text-base font-normal">
            Collez votre code ou glissez-déposez vos captures d&apos;écran pour
            commencer à créer sans effort.
          </p>
          <div
            className="w-full mt-auto bg-center bg-no-repeat aspect-video bg-cover rounded-lg bg-gray-700"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuANgn78NzFfHq8YVlTfdDatPn9BAt9b076sf-FbcDgXM9F2sAgfVgR2_xhSqrv86snuAc0jSZSH3EKmYZlGRm5Ml855d-lZFiY0edkLzeOZlcPXh8e28UcoAoCIJIGDVbRIMjTaeiaGbfcgd4kuQ65fiI3SsBtXQlRn4-Y5iKl-EhsdYCa9HgGl7yRINvqZW6WhLpl555wx9HASzTBVrW03E3Tx22r_AaVoGdaOzQjNPX_PQBPjyCnKuiBsglidzcEA2sE0F_Ffgu4')",
            }}
          ></div>
        </div>
        <div
          ref={setFeatureRef(2)}
          className="flex flex-col gap-4 text-left p-6 bg-white/5 border border-white/10 rounded-xl opacity-0 transition-all duration-700 ease-out hover:bg-white/[0.08] hover:border-white/20 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
        >
          <h3 className="text-white text-xl font-bold">
            Templates prêts à l&apos;emploi
          </h3>
          <p className="text-white/70 text-base font-normal">
            Des formats adaptés pour Twitter, LinkedIn, Instagram et plus
            encore, pour vos snippets et vos captures.
          </p>
          <div
            className="w-full mt-auto bg-center bg-no-repeat aspect-video bg-cover rounded-lg bg-gray-700"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKyXWMjT_C0sec0N2yKaUJlS62C0qflKlbvPxFb3a8I4VM2f00tP9J_XtKiKXJEhOAfPIGjPd4_gREvufHgcRIX0elM2JBYOWHBRVvVQKgG15FRNHf1wwnAbfW7F-vnQ69wkJ49VDt5-3M6hYqJJ6ggmCzjHe8B1EWxMHQbGZHIzoA0lJ_qa6QpXilGg4vPo9ogXCCPwfC98o0_DSazkA6RAkf_jYXWb2zqTfGR1-oi-eTJhvkwIjn395Zd2K3A4Y8oq08qMitRBk')",
            }}
          ></div>
        </div>
        <div
          ref={setFeatureRef(3)}
          className="md:col-span-2 flex flex-col gap-4 text-left p-6 bg-white/5 border border-white/10 rounded-xl opacity-0 transition-all duration-700 ease-out hover:bg-white/[0.08] hover:border-white/20 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
        >
          <h3 className="text-white text-xl font-bold">Export haute qualité</h3>
          <p className="text-white/70 text-base font-normal">
            Téléchargez vos créations en PNG ou SVG pour une netteté parfaite
            sur tous les supports.
          </p>
          <div
            className="w-full mt-auto bg-center bg-no-repeat aspect-video bg-cover rounded-lg bg-gray-700"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2oy6t6pPICWuDcIUt3oiqLwZruks3JiLmMxf0nxZBTC-IFqxPo5bWcb9p62AeaRA_Y5NRSJTAmRoUhggA_I3F1cQg0iIXi-034Gfbl9xsbjgMOwLiZ4VPMmM1Z4mX')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
