import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import transitionImage from "@/assets/billing-logo.jpg";

const services = [
  "Drove reduction errors and improved process accuracy, resulting in a 94% collection rate",
  "Skilled in optimizing complex billing processes, collaborating with providers and stakeholders",
  "Delivered strategic support for Surgery Center billing operations",
  "Medical Billing Professionals fully trained in Medicare, Medicaid, and Workers Compensation regulations",
  "Accurate code selection the first time to minimize resubmissions and denials",
  "Fast turnaround time - claims filed within 24 hours of receiving data",
  "Quality, personalized service via dedicated Account Managers"
];

const Services = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reliable Business Services, LLC provides healthcare practices with specialized complete Revenue Cycle Management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-8 bg-card">
              <h3 className="text-2xl font-semibold mb-8 text-foreground">Our Services Include:</h3>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-8 bg-card">
              <h3 className="text-2xl font-semibold mb-6 text-foreground text-center">
                Our Transition Process
              </h3>
              <div className="flex justify-center">
                <img 
                  src={transitionImage} 
                  alt="Transition Process Diagram" 
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
              <div className="mt-8 space-y-3">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-primary mb-1">Complete Transition</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive planning and pilot runs</p>
                </div>
                <div className="p-4 bg-secondary/5 rounded-lg">
                  <h4 className="font-semibold text-secondary mb-1">Migration Process</h4>
                  <p className="text-sm text-muted-foreground">Seamless systems and resource assignment</p>
                </div>
                <div className="p-4 bg-accent/5 rounded-lg">
                  <h4 className="font-semibold text-accent mb-1">Technology Framework</h4>
                  <p className="text-sm text-muted-foreground">Implementation with key benchmarks</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
