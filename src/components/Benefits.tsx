import { TrendingUp, Users, Target, BarChart3, DollarSign, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";

const benefits = [
  {
    icon: DollarSign,
    title: "Improved Cash Flow",
    description: "Optimize your revenue cycle with faster claim processing and reduced payment delays"
  },
  {
    icon: Users,
    title: "Enhanced Patient Satisfaction",
    description: "Streamlined billing processes create better experiences for your patients"
  },
  {
    icon: Target,
    title: "Reduced Billing Errors",
    description: "94% collection rate compared to industry standard of 75%"
  },
  {
    icon: BarChart3,
    title: "Data Analytics and Reporting",
    description: "Comprehensive insights into your revenue cycle performance"
  },
  {
    icon: TrendingUp,
    title: "Increased Revenue Generation",
    description: "10-20% revenue increase without additional patient encounters"
  },
  {
    icon: Workflow,
    title: "Process Standardization",
    description: "Efficient workflows optimized for maximum productivity"
  }
];

const Benefits = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
            Why Choose Our Services?
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare billing solutions designed to maximize your revenue
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
