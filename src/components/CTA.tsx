import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import revenueImage from "@/assets/revenue-analytics.jpg";

const CTA = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Ready to Increase Your Revenue?
            </h2>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Switch to Diligent Management Solutions, LLC and see a 10-20% revenue increase with no increase in patient encounters.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Phone</div>
                  <div className="text-xs text-muted-foreground">Contact us for consultation</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Email</div>
                  <div className="text-xs text-muted-foreground">Get in touch with our team</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Location</div>
                  <div className="text-xs text-muted-foreground">Serving healthcare providers nationwide</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-6 bg-card shadow-xl">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Request a Consultation</h3>
            <form className="space-y-3">
...
              <Button className="w-full shadow-lg hover:shadow-xl">
                Submit Request
              </Button>
            </form>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary to-secondary text-white text-center relative overflow-hidden">
...
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Join Our Success Stories
            </h3>
            <p className="text-base mb-6 opacity-90 max-w-3xl mx-auto">
              Experience the difference with our specialized Revenue Cycle Management solutions
            </p>
            <Button variant="secondary" className="shadow-lg hover:shadow-xl">
              Schedule a Demo Today
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;
