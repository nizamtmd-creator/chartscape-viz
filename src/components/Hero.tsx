import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-management.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.95), hsl(var(--secondary) / 0.9)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white animate-fade-in">
            Healthcare Billing Solutions
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90 leading-relaxed">
            Specialized Revenue Cycle Management that increases your revenues by 10-20% with no increase in patient encounters
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="default" variant="secondary" className="group shadow-lg hover:shadow-xl">
              Get Started
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="default" variant="outline" className="border-2 border-white/80 hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
