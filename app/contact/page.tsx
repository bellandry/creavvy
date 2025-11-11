import Contact from "@/components/marketing/Contact";
import Footer from "@/components/marketing/Footer";
import Header from "@/components/marketing/Header";

export default function ContactPage() {
  return (
    <div className="relative flex w-full flex-col">
      <div className="layout-container flex h-full grow flex-col items-center">
        <div className="w-full max-w-6xl px-4 lg:px-8">
          <Header />
        </div>
        <main className="w-full max-w-6xl px-4 lg:px-16 py-24 lg:py-32 flex flex-col gap-12 sm:gap-16 lg:gap-20">
          <div id="contact">
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
