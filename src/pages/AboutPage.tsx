import { Link } from "react-router-dom";
import { Heart, Target, Eye, Award, Users, Calendar, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import Counter from "@/components/ui/Counter";
import communityImage from "@/assets/community-empowerment.jpg";

const AboutPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              About Us
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Story of Hope and Service
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Founded in 2016, Al Ameen Foundation has been serving the underprivileged 
              communities of Kinniya and beyond with compassion, transparency, and dedication.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                badge="Our Journey"
                title="How It All Began"
                centered={false}
              />
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Al Ameen Foundation was born from a deep commitment to serve those in need. 
                  In 2016, a group of community members in Kinniya, Sri Lanka, came together 
                  with a shared vision: to create meaningful change in the lives of 
                  underprivileged families.
                </p>
                <p>
                  What started as small-scale food distribution has grown into a 
                  comprehensive community development organization. Today, we reach 
                  thousands of families through our education, relief, and empowerment programs.
                </p>
                <p>
                  Our work is guided by the belief that every person deserves dignity, 
                  every child deserves education, and every community deserves the 
                  opportunity to thrive.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Est. 2016</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Kinniya, Sri Lanka</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={communityImage}
                  alt="Al Ameen Foundation community work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section-padding bg-section-gradient">
        <div className="container">
          <SectionHeader
            title="Our Guiding Principles"
            description="The foundation of everything we do."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                content: "A world where every individual, regardless of their circumstances, has access to education, basic necessities, and opportunities to live with dignity.",
                color: "bg-secondary",
              },
              {
                icon: Target,
                title: "Our Mission",
                content: "To support underprivileged communities through sustainable education programs, essential relief distribution, and community empowerment initiatives.",
                color: "bg-primary",
              },
              {
                icon: Award,
                title: "Our Values",
                content: "Compassion, Transparency, Integrity, Community-First, Sustainability, and Accountability guide every action we take and every decision we make.",
                color: "bg-accent",
              },
            ].map((item, index) => (
              <div key={index} className="card-elevated text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${item.color} text-primary-foreground mb-6`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            badge="Our Impact"
            title="Numbers That Tell Our Story"
            description="Every number represents a life touched, a family helped, and hope restored."
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 2500, suffix: "+", label: "Families Supported" },
              { value: 15000, suffix: "+", label: "Meals Distributed" },
              { value: 500, suffix: "+", label: "Students Sponsored" },
              { value: 50, suffix: "+", label: "Volunteers Active" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-muted/50">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Detailed */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeader
            badge="What We Stand For"
            title="Our Core Values"
            description="These principles shape our work and define who we are."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Compassion", desc: "We approach every situation with empathy and understanding." },
              { title: "Transparency", desc: "We maintain open and honest communication in all our operations." },
              { title: "Integrity", desc: "We uphold the highest ethical standards in everything we do." },
              { title: "Community-First", desc: "The needs of the community always come first in our decisions." },
              { title: "Sustainability", desc: "We focus on creating long-term, lasting positive change." },
              { title: "Accountability", desc: "We are responsible for every donation and every action taken." },
            ].map((value, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-card">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/Leadership Placeholder */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            badge="Leadership"
            title="Meet Our Team"
            description="Dedicated individuals working together for a common cause."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Community Leaders", role: "Guidance & Strategy", icon: Users },
              { name: "Program Directors", role: "Operations & Implementation", icon: Target },
              { name: "Volunteer Network", role: "Field Work & Outreach", icon: Heart },
            ].map((member, index) => (
              <div key={index} className="text-center card-elevated">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <member.icon className="w-10 h-10 text-primary" />
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6 max-w-2xl mx-auto">
            Want to Be Part of Our Journey?
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Join us in our mission to create positive change in communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/get-involved">
                Get Involved
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
