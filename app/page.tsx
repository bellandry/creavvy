import CTA from "../components/marketing/CTA";
import FAQ from "../components/marketing/FAQ";
import Features from "../components/marketing/Features";
import Footer from "../components/marketing/Footer";
import Header from "../components/marketing/Header";
import Hero from "../components/marketing/Hero";
import Pricing from "../components/marketing/Pricing";
import Testimonials from "../components/marketing/Testimonials";

export default function Home() {
  return (
    <div className="relative flex w-full flex-col">
      <Header />
      <div className="layout-container flex h-full grow flex-col items-center pt-20">
        <div className="w-full max-w-6xl px-4 lg:px-8">
          <main className="w-full max-w-6xl px-0 lg:px-0 py-16 sm:py-24 lg:py-32 flex flex-col gap-24 sm:gap-32 lg:gap-40">
            <Hero />
            <div id="fonctionnalites">
              <Features />
            </div>
            <Testimonials />
            <div id="tarifs">
              <Pricing />
            </div>
            <div id="faq">
              <FAQ />
            </div>
            <CTA />
            <div id="contact">{/* Contact section will be added later */}</div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
