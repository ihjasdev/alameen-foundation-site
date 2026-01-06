import { Link } from "react-router-dom";
import { Heart, Users, HandHeart, ArrowRight, GraduationCap, Utensils, Building2, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Counter from "@/components/ui/Counter";
import SectionHeader from "@/components/ui/SectionHeader";
import heroImage from "@/assets/hero-community.jpg";
import educationImage from "@/assets/education-support.jpg";
import foodImage from "@/assets/food-relief.jpg";
import communityImage from "@/assets/community-empowerment.jpg";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Al Ameen Foundation community work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm text-primary-foreground/90 text-sm font-medium mb-6 animate-fade-up">
              <Heart className="w-4 h-4 text-accent" />
              Serving Communities Since 2016
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up delay-100">
              Empowering Communities — 
              <span className="text-accent"> Dignity, Education & Relief</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up delay-200">
              Al Ameen Foundation is a registered charity in Kinniya, Sri Lanka, serving underprivileged 
              families with education support, essential relief, and community development programs.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/get-involved">
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/get-involved">
                  <Users className="w-5 h-5" />
                  Become a Volunteer
                </Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-3 text-primary-foreground/70 animate-fade-up delay-400">
              <Link to="/impact" className="flex items-center gap-2 hover:text-primary-foreground transition-colors group">
                See Our Impact
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-0">
        <div className="container">
          <div className="relative -mt-20 z-20">
            <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: 2500, suffix: "+", label: "Families Supported", icon: Users },
                { value: 15000, suffix: "+", label: "Meals Distributed", icon: Utensils },
                { value: 500, suffix: "+", label: "Students Helped", icon: GraduationCap },
                { value: 8, suffix: "", label: "Years of Service", icon: Heart },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="About Us"
                title="Building a Better Tomorrow, Together"
                description="Founded in 2016 in Kinniya, Sri Lanka, Al Ameen Foundation was born from a simple belief: every family deserves dignity, every child deserves education, and every community deserves hope."
                centered={false}
              />
              <div className="space-y-4 mb-8">
                {[
                  "Transparent and accountable operations",
                  "Community-driven approach",
                  "Sustainable long-term impact",
                  "100% of donations reach beneficiaries",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={communityImage}
                  alt="Community empowerment workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg max-w-xs">
                <Quote className="w-8 h-8 mb-3 opacity-50" />
                <p className="text-sm font-medium italic">
                  "Together, we can make a difference in the lives of those who need it most."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-section-gradient">
        <div className="container">
          <SectionHeader
            badge="What We Do"
            title="Our Programs"
            description="We focus on three key areas to create sustainable change in our communities."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Education Support",
                description: "Providing school materials, scholarships, and learning resources to help children access quality education.",
                image: educationImage,
                link: "/programs",
              },
              {
                icon: Utensils,
                title: "Food & Relief",
                description: "Distributing essential food supplies and emergency relief to families facing hardship.",
                image: foodImage,
                link: "/programs",
              },
              {
                icon: Building2,
                title: "Community Empowerment",
                description: "Building skills, creating opportunities, and strengthening community bonds for lasting change.",
                image: communityImage,
                link: "/programs",
              },
            ].map((program, index) => (
              <Link
                key={index}
                to={program.link}
                className="group card-elevated overflow-hidden p-0"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <program.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {program.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="container relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 max-w-3xl mx-auto">
            Join Us in Making a Difference
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-10">
            Every contribution, big or small, helps us reach more families in need. 
            Your support can transform lives and build stronger communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/get-involved">
                <Heart className="w-5 h-5" />
                Donate Today
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/get-involved">
                <HandHeart className="w-5 h-5" />
                Volunteer With Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding">
        <div className="container container-narrow text-center">
          <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
          <blockquote className="font-display text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
            "Thanks to Al Ameen Foundation, my children can now go to school with proper books and uniforms. 
            They gave us hope when we had nothing."
          </blockquote>
          <div>
            <p className="font-semibold text-foreground">Fatima Begum</p>
            <p className="text-muted-foreground text-sm">Beneficiary, Kinniya</p>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 border-t border-border">
        <div className="container">
          <p className="text-center text-muted-foreground text-sm mb-8">Trusted by Our Partners & Donors</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
            {["Local Government", "Community Leaders", "International Donors", "Local Businesses", "Volunteers Network"].map((partner, index) => (
              <span key={index} className="text-muted-foreground font-medium text-sm md:text-base">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
