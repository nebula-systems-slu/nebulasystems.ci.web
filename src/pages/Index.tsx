import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Architecture } from "@/components/Architecture";
import { TechStack } from "@/components/TechStack";
import { Stats } from "@/components/Stats";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Architecture />
      <TechStack />
      <Stats />
      <Founder />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
