import { Link } from "react-router-dom";
import { Heart, Quote, TrendingUp, Users, GraduationCap, Utensils, ArrowRight, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import Counter from "@/components/ui/Counter";
import educationImage from "@/assets/education-support.jpg";
import foodImage from "@/assets/food-relief.jpg";
import communityImage from "@/assets/community-empowerment.jpg";

const ImpactPage = () => {
  const stories = [
    {
      name: "Fatima Begum",
      location: "Kinniya",
      image: communityImage,
      quote: "Thanks to Al Ameen Foundation, my children can now go to school with proper books and uniforms. They gave us hope when we had nothing.",
      category: "Education Support",
    },
    {
      name: "Mohamed Family",
      location: "Kinniya",
      image: foodImage,
      quote: "During Ramadan, when we had nothing to break our fast, Al Ameen Foundation came with food supplies. They saved our dignity.",
      category: "Food Relief",
    },
    {
      name: "Zainab Haseen",
      location: "Kinniya",
      image: educationImage,
      quote: "The skill training program helped me start a small business. Now I can support my family independently.",
      category: "Community Empowerment",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4" />
              Our Impact
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Real Stories, Real Change
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Every number represents a life transformed. See how your support 
              creates lasting impact in our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-0">
        <div className="container">
          <div className="relative -mt-16 z-20">
            <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: 2500, suffix: "+", label: "Families Supported", icon: Users, color: "text-primary" },
                  { value: 15000, suffix: "+", label: "Meals Distributed", icon: Utensils, color: "text-secondary" },
                  { value: 500, suffix: "+", label: "Students Helped", icon: GraduationCap, color: "text-accent" },
                  { value: 8, suffix: " Years", label: "Of Service", icon: Heart, color: "text-primary" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                    <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            badge="Success Stories"
            title="Lives Transformed"
            description="Real testimonials from the families and individuals we've had the privilege to serve."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="card-elevated overflow-hidden p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                    {story.category}
                  </span>
                  <Quote className="w-8 h-8 text-primary/30 mb-3" />
                  <blockquote className="text-foreground leading-relaxed mb-4 italic">
                    "{story.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{story.name}</p>
                    <p className="text-muted-foreground text-sm">{story.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Highlights */}
      <section className="section-padding bg-section-gradient">
        <div className="container">
          <SectionHeader
            badge="Data-Driven Impact"
            title="Our Progress Over the Years"
            description="Transparent reporting of our growth and achievements."
            Icon={BarChart3}
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Program Impact Cards */}
            {[
              {
                title: "Education Program",
                stats: [
                  { label: "Students Sponsored", value: 500 },
                  { label: "School Kits Distributed", value: 1200 },
                  { label: "Scholarships Awarded", value: 75 },
                ],
                color: "border-primary",
              },
              {
                title: "Relief Distribution",
                stats: [
                  { label: "Food Packs Distributed", value: 3500 },
                  { label: "Ramadan Meals", value: 5000 },
                  { label: "Emergency Aid Events", value: 25 },
                ],
                color: "border-secondary",
              },
              {
                title: "Community Empowerment",
                stats: [
                  { label: "Training Sessions", value: 48 },
                  { label: "Participants Trained", value: 350 },
                  { label: "Small Businesses Started", value: 40 },
                ],
                color: "border-accent",
              },
              {
                title: "Overall Reach",
                stats: [
                  { label: "Total Beneficiaries", value: 8000 },
                  { label: "Active Volunteers", value: 50 },
                  { label: "Partner Organizations", value: 12 },
                ],
                color: "border-primary",
              },
            ].map((program, index) => (
              <div key={index} className={`bg-card rounded-xl p-6 border-l-4 ${program.color}`}>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">{program.title}</h3>
                <div className="space-y-4">
                  {program.stats.map((stat, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{stat.label}</span>
                      <span className="font-display text-xl font-bold text-foreground">
                        <Counter end={stat.value} suffix="+" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Impact */}
      <section className="section-padding">
        <div className="container container-narrow">
          <SectionHeader
            badge="Transformation"
            title="The Difference We Make"
            description="From struggle to stability - see how our programs create lasting change."
          />

          <div className="space-y-8">
            {[
              {
                before: "Children dropping out of school due to lack of supplies",
                after: "500+ students continuing education with full support",
              },
              {
                before: "Families skipping meals during difficult times",
                after: "Regular food distribution reaching 2,500+ families",
              },
              {
                before: "Limited economic opportunities for women",
                after: "200+ women trained in vocational skills",
              },
            ].map((item, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-4">
                <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/20">
                  <span className="text-xs font-semibold text-destructive uppercase tracking-wide">Before</span>
                  <p className="text-foreground mt-2">{item.before}</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">After</span>
                  <p className="text-foreground mt-2">{item.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6 max-w-2xl mx-auto">
            Be Part of the Next Success Story
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Your contribution can help us reach more families and create more impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/get-involved">
                <Heart className="w-5 h-5" />
                Make a Donation
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/transparency">
                View Our Reports
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImpactPage;
