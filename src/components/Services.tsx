import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import transitionImage from "@/assets/billing-services.jpg";

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
    <section className="py-8 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
            What We Offer
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Diligent Management Solutions, LLC provides healthcare practices with specialized complete Revenue Cycle Management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="p-6 bg-card">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Our Services Include:</h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div>
            <Card className="p-6 bg-card">
              <h3 className="text-xl font-semibold mb-4 text-foreground text-center">
                Our Transition Process
              </h3>
...
              <div className="mt-6 space-y-2">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <h4 className="text-sm font-semibold text-primary mb-0.5">Complete Transition</h4>
                  <p className="text-xs text-muted-foreground">Comprehensive planning and pilot runs</p>
                </div>
                <div className="p-3 bg-secondary/5 rounded-lg">
                  <h4 className="text-sm font-semibold text-secondary mb-0.5">Migration Process</h4>
                  <p className="text-xs text-muted-foreground">Seamless systems and resource assignment</p>
                </div>
                <div className="p-3 bg-accent/5 rounded-lg">
                  <h4 className="text-sm font-semibold text-accent mb-0.5">Technology Framework</h4>
                  <p className="text-xs text-muted-foreground">Implementation with key benchmarks</p>
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
