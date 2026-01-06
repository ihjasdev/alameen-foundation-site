import { Link } from "react-router-dom";
import { Shield, FileText, Users, Building, Award, Download, ExternalLink, CheckCircle, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";

const TransparencyPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Transparency
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Accountability & Governance
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              We believe in complete transparency. Every donation is tracked, 
              every program is documented, and every decision is made with integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-0">
        <div className="container">
          <div className="relative -mt-16 z-20 grid md:grid-cols-4 gap-4">
            {[
              { icon: Shield, label: "Registered Charity", value: "Since 2016" },
              { icon: FileText, label: "Annual Reports", value: "Published Yearly" },
              { icon: Users, label: "Volunteer Network", value: "50+ Members" },
              { icon: Award, label: "Community Trust", value: "8 Years" },
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl shadow-lg p-6 text-center">
                <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-muted-foreground text-sm">{item.label}</p>
                <p className="font-display text-lg font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                badge="Governance"
                title="How We Operate"
                description="Our governance structure ensures accountability at every level."
                centered={false}
              />

              <div className="space-y-6">
                {[
                  {
                    title: "Board of Trustees",
                    desc: "A dedicated group of community leaders who oversee all strategic decisions and ensure the foundation stays true to its mission.",
                  },
                  {
                    title: "Program Directors",
                    desc: "Experienced professionals who manage day-to-day operations and ensure programs are delivered effectively.",
                  },
                  {
                    title: "Volunteer Coordinators",
                    desc: "Community members who coordinate our volunteer network and field activities.",
                  },
                  {
                    title: "Finance Committee",
                    desc: "Responsible for financial oversight, budget management, and ensuring all funds are used appropriately.",
                  },
                ].map((role, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{role.title}</h4>
                      <p className="text-muted-foreground text-sm">{role.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-elevated">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                <Building className="w-6 h-6 inline-block mr-2 text-primary" />
                Legal Registration
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-muted-foreground text-sm mb-1">Organization Name</p>
                  <p className="font-semibold text-foreground">Al Ameen Foundation</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-muted-foreground text-sm mb-1">Type</p>
                  <p className="font-semibold text-foreground">Registered Non-Profit / Charity</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-muted-foreground text-sm mb-1">Year Established</p>
                  <p className="font-semibold text-foreground">2016</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-muted-foreground text-sm mb-1">Location</p>
                  <p className="font-semibold text-foreground">Kinniya, Trincomalee District, Sri Lanka</p>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-muted-foreground text-sm mb-1">Operating Areas</p>
                  <p className="font-semibold text-foreground">Kinniya and surrounding regions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="section-padding bg-section-gradient">
        <div className="container">
          <SectionHeader
            badge="Reports & Documents"
            title="Annual Reports & Financial Statements"
            description="Download our reports to see exactly how your donations are used."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { year: "2023", title: "Annual Report 2023", type: "Full Report", status: "Available" },
              { year: "2022", title: "Annual Report 2022", type: "Full Report", status: "Available" },
              { year: "2021", title: "Annual Report 2021", type: "Full Report", status: "Available" },
              { year: "2023", title: "Financial Statement 2023", type: "Financials", status: "Available" },
              { year: "2023", title: "Impact Assessment 2023", type: "Impact Report", status: "Available" },
              { year: "2024", title: "Q1 Activity Report 2024", type: "Quarterly", status: "Coming Soon" },
            ].map((report, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    report.status === "Available" 
                      ? "bg-primary/10 text-primary" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {report.status}
                  </span>
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">{report.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{report.type}</p>
                {report.status === "Available" ? (
                  <button className="flex items-center gap-2 text-primary text-sm font-medium hover:underline">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                ) : (
                  <span className="text-muted-foreground text-sm">Expected Q2 2024</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="section-padding">
        <div className="container container-narrow">
          <SectionHeader
            badge="Financial Transparency"
            title="Where Your Money Goes"
            description="We are committed to ensuring that the maximum amount of every donation reaches those in need."
          />

          <div className="space-y-6">
            {[
              { label: "Program Expenses", percentage: 85, desc: "Direct support to beneficiaries", color: "bg-primary" },
              { label: "Administrative Costs", percentage: 10, desc: "Office operations and management", color: "bg-secondary" },
              { label: "Fundraising", percentage: 5, desc: "Donor outreach and communications", color: "bg-accent" },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="font-semibold text-foreground">{item.label}</span>
                    <span className="text-muted-foreground text-sm ml-2">— {item.desc}</span>
                  </div>
                  <span className="font-display text-xl font-bold text-foreground">{item.percentage}%</span>
                </div>
                <div className="h-3 rounded-full bg-muted overflow-hidden">
                  <div 
                    className={`h-full ${item.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
            <h4 className="font-display text-lg font-semibold text-foreground mb-2">
              Our Commitment
            </h4>
            <p className="text-muted-foreground">
              We strive to keep administrative costs below 15% so that the maximum impact 
              reaches our beneficiaries. Every rupee counts.
            </p>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <SectionHeader
            title="Policies & Compliance"
            description="Our operations are guided by clear policies and ethical standards."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Privacy Policy", desc: "How we collect, use, and protect your information" },
              { title: "Donor Rights", desc: "Your rights as a supporter of our mission" },
              { title: "Whistleblower Policy", desc: "Reporting mechanisms for concerns" },
              { title: "Conflict of Interest", desc: "Ensuring ethical decision-making" },
              { title: "Anti-Fraud Policy", desc: "Measures to prevent and detect fraud" },
              { title: "Safeguarding Policy", desc: "Protecting vulnerable beneficiaries" },
            ].map((policy, index) => (
              <div key={index} className="bg-card rounded-xl p-6 flex items-start gap-4">
                <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{policy.title}</h4>
                  <p className="text-muted-foreground text-sm">{policy.desc}</p>
                  <button className="flex items-center gap-1 text-primary text-sm mt-2 hover:underline">
                    Read Policy <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Trust Us With Your Support
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Your donation is in safe hands. Join thousands of donors who trust Al Ameen Foundation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/get-involved">
                <Heart className="w-5 h-5" />
                Donate With Confidence
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/contact">
                Ask Questions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransparencyPage;
