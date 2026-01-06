import { Link } from "react-router-dom";
import { Newspaper, Calendar, ArrowRight, Heart, Share2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import educationImage from "@/assets/education-support.jpg";
import foodImage from "@/assets/food-relief.jpg";
import communityImage from "@/assets/community-empowerment.jpg";

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "Ramadan Food Distribution 2024: Reaching 500+ Families",
      excerpt: "Al Ameen Foundation successfully distributed food packs to over 500 families during the holy month of Ramadan, ensuring no family goes hungry during Iftar.",
      date: "March 15, 2024",
      category: "Relief Distribution",
      image: foodImage,
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "New Education Support Program Launched for 2024",
      excerpt: "We are excited to announce an expanded education support program that will provide school supplies, uniforms, and scholarships to 200 additional students.",
      date: "February 28, 2024",
      category: "Education",
      image: educationImage,
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Women's Skill Development Workshop Completed",
      excerpt: "30 women from Kinniya successfully completed our 3-month vocational training program, gaining skills in tailoring and small business management.",
      date: "February 10, 2024",
      category: "Community Empowerment",
      image: communityImage,
      readTime: "3 min read",
    },
    {
      id: 4,
      title: "10kg Rice Distribution: Supporting 300 Families",
      excerpt: "Our regular monthly food distribution event reached 300 families with essential rice supplies, continuing our commitment to food security.",
      date: "January 25, 2024",
      category: "Relief Distribution",
      image: foodImage,
      readTime: "2 min read",
    },
    {
      id: 5,
      title: "Annual Report 2023 Released: A Year of Growth",
      excerpt: "Our annual transparency report is now available, showcasing the impact of your donations and the growth of our programs throughout 2023.",
      date: "January 10, 2024",
      category: "Transparency",
      image: communityImage,
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Back-to-School Campaign: 150 Students Receive Supplies",
      excerpt: "As the new school year begins, we distributed complete school kits including bags, books, and stationery to 150 students from underprivileged families.",
      date: "January 5, 2024",
      category: "Education",
      image: educationImage,
      readTime: "3 min read",
    },
  ];

  const featuredNews = newsItems[0];
  const regularNews = newsItems.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-hero-gradient">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4" />
              News & Updates
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Latest from Al Ameen Foundation
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Stay updated with our latest activities, events, and community impact stories.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding">
        <div className="container">
          <SectionHeader
            badge="Featured"
            title="Latest Highlight"
          />

          <div className="card-elevated overflow-hidden p-0">
            <div className="grid lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {featuredNews.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4" />
                    {featuredNews.date}
                  </span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {featuredNews.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredNews.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <Button variant="default" size="lg">
                    Read Full Story
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="section-padding bg-section-gradient">
        <div className="container">
          <SectionHeader
            title="All Updates"
            description="Browse all our news and activity updates."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((news) => (
              <article key={news.id} className="card-elevated overflow-hidden p-0 group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {news.category}
                    </span>
                    <span className="text-muted-foreground text-xs">{news.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {news.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-muted-foreground text-xs">
                      <Eye className="w-3 h-3" />
                      {news.readTime}
                    </span>
                    <button className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Updates
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding">
        <div className="container container-narrow text-center">
          <SectionHeader
            badge="Stay Connected"
            title="Subscribe to Our Newsletter"
            description="Get the latest updates, stories, and news delivered directly to your inbox."
          />

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button type="submit" variant="default" size="lg">
              Subscribe
            </Button>
          </form>
          <p className="text-muted-foreground text-xs mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
            Your support makes these success stories possible.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/get-involved">
              <Heart className="w-5 h-5" />
              Support Our Mission
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
