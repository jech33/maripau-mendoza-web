import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SectionFaq from "@/components/SectionFaq";
import SectionMe from "@/components/SectionMe";
import SectionServices from "@/components/SectionServices";
import SocialMedia from "@/components/SocialMedia";

export default function Home() {
  return (
    <main>
      <Hero />
      <Navbar />
      <SectionMe />
      <SectionServices />
      <div className="container mx-auto mt-10 h-[1px] w-full px-8">
        <div className="h-[3px] w-full bg-beige" />
      </div>
      <SectionFaq />
      <SocialMedia className="mt-14" />
      <Footer />
    </main>
  );
}
