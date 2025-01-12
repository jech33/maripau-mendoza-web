import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MeSection from "@/components/MeSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <MeSection />
      <ServicesSection />
      <div className="container mx-auto mt-10 h-[1px] w-full px-8">
        <div className="h-[3px] w-full bg-beige" />
      </div>
      <FaqSection />
      <Footer />
    </main>
  );
}
