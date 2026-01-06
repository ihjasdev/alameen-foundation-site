import { Link } from "react-router-dom";
import { GraduationCap, Utensils, Building2, Heart, ArrowRight, CheckCircle, Users, Package, BookOpen, Wrench, AlertTriangle, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import educationImage from "@/assets/education-support.jpg";
import foodImage from "@/assets/food-relief.jpg";
import communityImage from "@/assets/community-empowerment.jpg";

const ProgramsPage = () => {
  const programs = [
    {
      id: "education",
      icon: GraduationCap,
      title: "Education Support",
      subtitle: "Empowering through knowledge",
      image: educationImage,
      description: "We believe education is the most powerful tool for breaking the cycle of poverty. Our education support program provides comprehensive assistance to students from underprivileged families.",
      features: [
        "School supplies and materials distribution",
        "Scholarship programs for deserving students",
        "Learning centers and tutoring support",
        "Uniform and footwear assistance",
        "Exam preparation resources",
        "Career guidance and mentorship",
      ],
      impact: "500+ students supported annually",
    },
    {
      id: "relief",
      icon: Utensils,
      title: "Food & Relief Distribution",
      subtitle: "Meeting essential needs",
      image: foodImage,
      description: "No family should go hungry. Our relief program ensures that the most vulnerable members of our community have access to essential food supplies and emergency assistance.",
      features: [
        "Regular food pack distribution (10kg rice packs)",
        "Ramadan meal programs (Iftar provisions)",
        "Emergency relief during disasters",
        "Essential household item distribution",
        "Festival and seasonal support",
        "Widow and orphan family support",
      ],
      impact: "15,000+ meals distributed yearly",
    },
    {
      id: "empowerment",
      icon: Building2,
      title: "Community Empowerment",
      subtitle: "Building sustainable futures",
      image: communityImage,
      description: "True change comes from within communities. Our empowerment initiatives focus on building skills, creating opportunities, and fostering self-reliance.",
      features: [
        "Vocational skill training programs",
        "Women's empowerment workshops",
        "Small business support and guidance",
        "Community awareness campaigns",
        "Health and hygiene education",
        "Youth leadership development",
      ],
      impact: "200+ families empowered",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              What We Do
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Programs & Services
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Comprehensive support through education, relief distribution, 
              and community empowerment initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            title="Three Pillars of Change"
            description="Our programs are designed to address immediate needs while building long-term resilience."
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="card-elevated text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <program.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{program.subtitle}</p>
                <span className="text-primary text-sm font-medium flex items-center justify-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Program Sections */}
      {programs.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`section-padding ${index % 2 === 1 ? "bg-section-gradient" : ""}`}
        >
          <div className="container">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  <program.icon className="w-4 h-4" />
                  {program.subtitle}
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {program.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {program.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-accent/10 border border-accent/20 mb-6">
                  <Heart className="w-8 h-8 text-accent" />
                  <div>
                    <span className="block text-foreground font-semibold">{program.impact}</span>
                    <span className="text-muted-foreground text-sm">and counting...</span>
                  </div>
                </div>

                <Button variant="default" size="lg" asChild>
                  <Link to="/get-involved">
                    Support This Program
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeader
            badge="Also We Provide"
            title="Additional Support Services"
            description="Beyond our core programs, we provide various support services to meet community needs."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: AlertTriangle, title: "Emergency Response", desc: "Rapid assistance during natural disasters and crises" },
              { icon: Package, title: "Festival Support", desc: "Special distributions during Eid and other occasions" },
              { icon: BookOpen, title: "Religious Education", desc: "Support for Madrasah and Islamic education" },
              { icon: HandHeart, title: "Orphan Care", desc: "Ongoing support for orphaned children" },
            ].map((service, index) => (
              <div key={index} className="card-elevated">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6 max-w-2xl mx-auto">
            Help Us Expand Our Reach
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Your support enables us to serve more families and create lasting impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/get-involved">
                <Heart className="w-5 h-5" />
                Donate Now
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">
                Partner With Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsPage;
