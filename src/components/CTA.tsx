import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import revenueImage from "@/assets/revenue-analytics.jpg";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Increase Your Revenue?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Switch to Diligent Management Solutions, LLC and see a 10-20% revenue increase with no increase in patient encounters.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-muted-foreground">Contact us for consultation</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">Get in touch with our team</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">Serving healthcare providers nationwide</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-card shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Request a Consultation</h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" className="bg-background" />
              </div>
              <div>
                <Input type="email" placeholder="Email Address" className="bg-background" />
              </div>
              <div>
                <Input placeholder="Practice Name" className="bg-background" />
              </div>
              <div>
                <Input placeholder="Phone Number" className="bg-background" />
              </div>
              <div>
                <Textarea placeholder="Tell us about your billing needs..." className="bg-background min-h-32" />
              </div>
              <Button className="w-full shadow-lg hover:shadow-xl" size="lg">
                Submit Request
              </Button>
            </form>
          </Card>
        </div>

        <Card className="p-12 bg-gradient-to-br from-primary to-secondary text-white text-center relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url(${revenueImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Experience the difference with our specialized Revenue Cycle Management solutions
            </p>
            <Button size="lg" variant="secondary" className="text-lg shadow-lg hover:shadow-xl">
              Schedule a Demo Today
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
