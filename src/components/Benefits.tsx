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
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Our Services?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare billing solutions designed to maximize your revenue
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
