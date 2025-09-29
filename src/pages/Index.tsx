import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Statistics from "@/components/Statistics";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Statistics />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
