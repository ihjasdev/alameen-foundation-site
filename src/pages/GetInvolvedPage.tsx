import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Users, Handshake, CreditCard, Calendar, Gift, ArrowRight, CheckCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "@/components/ui/SectionHeader";
import { useToast } from "@/hooks/use-toast";

const GetInvolvedPage = () => {
  const { toast } = useToast();
  const [donationAmount, setDonationAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = donationAmount || Number(customAmount);
    toast({
      title: "Thank you for your generosity!",
      description: `Your donation of LKR ${amount.toLocaleString()} will make a real difference.`,
    });
  };

  const handleVolunteerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Web3Forms Access Key for Get Involved Page
    data.append("access_key", "b56878b4-a4ea-4379-9012-4a799c985840");

    toast({
      title: "Sending Application...",
      description: "Please wait while we submit your details.",
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const resData = await response.json();

      if (resData.success) {
        toast({
          title: "Application Received!",
          description: "We'll be in touch soon to discuss volunteer opportunities.",
        });
        // Reset form fields if needed, or let the user see what they sent
        form.reset();
      } else {
        console.error("Web3Forms Error:", resData);
        toast({
          variant: "destructive",
          title: "Error Sending Application",
          description: resData.message || "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast({
        variant: "destructive",
        title: "Network Error",
        description: "Failed to connect to the server. Please check your internet connection.",
      });
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Get Involved
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Join Our Mission
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              There are many ways to support our cause. Whether through donations,
              volunteering, or partnerships, your contribution creates real impact.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-0">
        <div className="container">
          <div className="relative -mt-16 z-20 grid md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Donate", desc: "Financial support for our programs", href: "#donate" },
              { icon: Users, title: "Volunteer", desc: "Give your time and skills", href: "#volunteer" },
              { icon: Handshake, title: "Partner", desc: "Corporate & organizational support", href: "#partner" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="bg-card rounded-xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                badge="Make a Donation"
                title="Your Generosity Changes Lives"
                description="100% of your donation goes directly to supporting our programs and beneficiaries."
                centered={false}
              />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Transparent & Accountable</h4>
                    <p className="text-muted-foreground text-sm">Every donation is tracked and reported in our annual transparency reports.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Direct Impact</h4>
                    <p className="text-muted-foreground text-sm">Your contribution directly funds education, food relief, and community programs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Secure Processing</h4>
                    <p className="text-muted-foreground text-sm">All donations are processed securely through trusted payment channels.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-accent/10 border border-accent/20">
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">What Your Donation Provides</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• LKR 1,000 = School supplies for 1 student</li>
                  <li>• LKR 2,500 = Food pack for 1 family for a month</li>
                  <li>• LKR 5,000 = Scholarship support for 1 term</li>
                  <li>• LKR 10,000 = Complete education kit + uniform</li>
                </ul>
              </div>
            </div>

            <div className="card-elevated">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Choose Your Contribution</h3>

              <form onSubmit={handleDonationSubmit} className="space-y-6">
                <div>
                  <Label className="mb-3 block">Select Amount (LKR)</Label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[1000, 2500, 5000, 10000, 25000, 50000].map((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => { setDonationAmount(amount); setCustomAmount(""); }}
                        className={`p-3 rounded-lg border-2 text-center font-semibold transition-colors ${donationAmount === amount
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary"
                          }`}
                      >
                        {amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">LKR</span>
                    <Input
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => { setCustomAmount(e.target.value); setDonationAmount(null); }}
                      className="pl-12"
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-3 block">Donation Type</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" className="p-4 rounded-lg border-2 border-primary bg-primary/5 text-center">
                      <Gift className="w-5 h-5 text-primary mx-auto mb-2" />
                      <span className="block font-medium text-foreground">One-Time</span>
                    </button>
                    <button type="button" className="p-4 rounded-lg border-2 border-border hover:border-primary text-center transition-colors">
                      <Calendar className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
                      <span className="block font-medium text-foreground">Monthly</span>
                    </button>
                  </div>
                </div>

                <Button type="submit" variant="accent" size="xl" className="w-full">
                  <CreditCard className="w-5 h-5" />
                  Proceed to Donate
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By donating, you agree to our terms. Your donation is secure and tax-deductible where applicable.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section id="volunteer" className="section-padding bg-section-gradient">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="lg:order-2">
              <SectionHeader
                badge="Become a Volunteer"
                title="Give Your Time, Change Lives"
                description="Join our dedicated team of volunteers and be part of meaningful community work."
                centered={false}
              />

              <div className="space-y-4 mb-8">
                {[
                  { title: "Community Outreach", desc: "Help identify and reach families in need" },
                  { title: "Event Support", desc: "Assist with distribution events and programs" },
                  { title: "Teaching & Tutoring", desc: "Support students with their education" },
                  { title: "Administrative Help", desc: "Assist with office work and documentation" },
                  { title: "Social Media", desc: "Help spread awareness about our work" },
                ].map((role, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-card">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <span className="font-medium text-foreground">{role.title}</span>
                      <span className="text-muted-foreground text-sm ml-2">— {role.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:order-1 card-elevated">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Volunteer Application</h3>

              <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vol-name">Full Name</Label>
                    <Input id="vol-name" name="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <Label htmlFor="vol-phone">Phone Number</Label>
                    <Input id="vol-phone" name="phone" type="tel" placeholder="+94 77 XXX XXXX" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="vol-email">Email Address</Label>
                  <Input id="vol-email" name="email" type="email" placeholder="your@email.com" required />
                </div>
                <div>
                  <Label htmlFor="vol-area">Area of Interest</Label>
                  <Input id="vol-area" name="area_of_interest" placeholder="e.g., Teaching, Events, Outreach" />
                </div>
                <div>
                  <Label htmlFor="vol-message">Why do you want to volunteer?</Label>
                  <Textarea id="vol-message" name="message" placeholder="Tell us about yourself..." rows={4} />
                </div>
                <Button type="submit" variant="default" size="lg" className="w-full">
                  <Users className="w-5 h-5" />
                  Submit Application
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section id="partner" className="section-padding">
        <div className="container container-narrow text-center">
          <SectionHeader
            badge="Corporate Partnerships"
            title="Partner With Us"
            description="Organizations and businesses can create significant impact through strategic partnerships."
          />

          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { title: "CSR Programs", desc: "Align your CSR initiatives with meaningful community work" },
              { title: "Sponsorships", desc: "Sponsor specific programs or events" },
              { title: "In-Kind Support", desc: "Contribute goods, services, or expertise" },
            ].map((type, index) => (
              <div key={index} className="p-6 rounded-xl bg-muted/50">
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{type.title}</h4>
                <p className="text-muted-foreground text-sm">{type.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/contact">
                <Mail className="w-5 h-5" />
                Contact Us to Partner
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+94773619464">
                <Phone className="w-5 h-5" />
                Call: +94 77 361 9464
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-hero-gradient">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Every Action Counts
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Whether you donate, volunteer, or spread the word — you are part of the change.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default GetInvolvedPage;
