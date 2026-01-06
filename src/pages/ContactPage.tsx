import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send, Heart, Facebook, Twitter, Instagram, Youtube, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "@/components/ui/SectionHeader";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 24-48 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Contact Us
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Have questions about our work or want to get involved? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-0">
        <div className="container">
          <div className="relative -mt-16 z-20 grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-muted-foreground text-sm">
                No.274/A, Main Street,<br />
                Kinniya, Sri Lanka
              </p>
            </div>

            <div className="bg-card rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Call Us</h3>
              <a href="tel:+94773619464" className="text-primary hover:underline font-medium">
                +94 77 361 9464
              </a>
              <p className="text-muted-foreground text-sm mt-1">Mon - Sat, 9AM - 6PM</p>
            </div>

            <div className="bg-card rounded-xl shadow-lg p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">Email Us</h3>
              <a href="mailto:mammujeeb@gmail.com" className="text-primary hover:underline font-medium">
                mammujeeb@gmail.com
              </a>
              <p className="text-muted-foreground text-sm mt-1">We respond within 24-48 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionHeader
                badge="Send a Message"
                title="We'd Love to Hear From You"
                description="Whether you have a question, want to volunteer, or are interested in partnering with us, fill out the form below."
                centered={false}
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+94 77 XXX XXXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" variant="default" size="xl" className="w-full sm:w-auto">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="aspect-video rounded-xl overflow-hidden bg-muted relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31580.91237565895!2d81.17!3d8.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbe4a7e3f9d1a7%3A0x4e7b4d2f8f8e7a7c!2sKinniya%2C%20Sri%20Lanka!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Al Ameen Foundation Location"
                  className="absolute inset-0"
                />
              </div>

              {/* Office Hours */}
              <div className="card-elevated">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {[
                    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center pb-3 border-b border-border last:border-0 last:pb-0">
                      <span className="text-foreground font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="card-elevated">
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Stay connected and see our latest activities on social media.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/ameenfoundationsl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-section-gradient">
        <div className="container container-narrow">
          <SectionHeader
            badge="FAQs"
            title="Common Questions"
            description="Quick answers to frequently asked questions."
          />

          <div className="space-y-4">
            {[
              {
                q: "How can I donate to Al Ameen Foundation?",
                a: "You can donate through our Get Involved page. We accept bank transfers and cash donations. All donations are acknowledged with a receipt.",
              },
              {
                q: "Is Al Ameen Foundation a registered charity?",
                a: "Yes, we are a registered non-profit organization operating in Kinniya, Sri Lanka since 2016.",
              },
              {
                q: "How can I volunteer with the foundation?",
                a: "Visit our Get Involved page and fill out the volunteer application form. We offer various roles including community outreach, event support, and administrative help.",
              },
              {
                q: "How is my donation used?",
                a: "85% of donations go directly to program expenses. We publish annual reports detailing how funds are allocated. Visit our Transparency page for details.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6">
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Join our mission to empower communities and transform lives.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/get-involved">
              <Heart className="w-5 h-5" />
              Get Involved Today
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
