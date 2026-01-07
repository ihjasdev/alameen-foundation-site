import { Facebook, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/ui/SectionHeader";
import communityImage from "@/assets/community-empowerment.jpg";
import foodImage from "@/assets/food-relief.jpg";
import educationImage from "@/assets/education-support.jpg";

// Placeholder data simulating Facebook posts
const posts = [
    {
        id: 1,
        content: "Our team distributing essential food packs to 500+ families in Kinniya. Thank you to all our donors for making this possible during Ramadan. #Charity #Community #Ramadan2024",
        date: "2 days ago",
        likes: 124,
        shares: 45,
        image: foodImage,
        // link: "https://facebook.com/ameenfoundationsl/posts/123",
    },
    {
        id: 2,
        content: "Education is the most powerful weapon which you can use to change the world. We are proud to support 150 more students this year with scholarships and supplies. 📚✨",
        date: "5 days ago",
        likes: "2k",
        shares: 89,
        image: educationImage,
        // link: "https://facebook.com/ameenfoundationsl/posts/124",
    },
    {
        id: 3,
        content: "A wonderful day at our women's skill development workshop. Empowering women empowers the entire community. #WomenEmpowerment #Skills",
        date: "1 week ago",
        likes: 1560,
        shares: 32,
        image: communityImage,
        // link: "https://facebook.com/ameenfoundationsl/posts/125",
    },
    {
        id: 4,
        content: "A wonderful day at our women's skill development workshop. Empowering women empowers the entire community. #WomenEmpowerment #Skills",
        date: "1 week ago",
        likes: 156,
        shares: 32,
        image: communityImage,
        // link: "https://facebook.com/ameenfoundationsl/posts/125",
    },
];

const LatestPosts = () => {
    return (
        <section className="section-padding bg-muted/30">
            <div className="container">
                <SectionHeader
                    badge="Social Updates"
                    title="Latest from Facebook"
                    description="Follow our journey and stay updated with our latest field activities."
                />

                <div className="grid md:grid-cols-4 gap-8">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full border border-border">
                            {/* Post Header */}
                            <div className="p-4 flex items-center gap-3 border-b border-border/50">
                                <div className="w-10 h-10 bg-[#1877F2] rounded-full flex items-center justify-center text-white shrink-0">
                                    <Facebook className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm">Al Ameen Foundation</h4>
                                    <p className="text-xs text-muted-foreground">{post.date}</p>
                                </div>
                                {/* <a href={post.link} target="_blank" rel="noopener noreferrer" className="ml-auto text-muted-foreground hover:text-primary">
                                    <ExternalLink className="w-4 h-4" />
                                </a> */}
                            </div>

                            {/* Post Image */}
                            <div className="aspect-[4/3] overflow-hidden bg-muted">
                                <img
                                    src={post.image}
                                    alt="Post attachment"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Post Content */}
                            <div className="p-4 flex-1">
                                <p className="text-sm text-foreground/90 line-clamp-4 leading-relaxed">
                                    {post.content}
                                </p>
                            </div>

                            {/* Post Footer */}
                            <div className="p-3 bg-muted/20 border-t border-border/50 flex justify-between text-xs text-muted-foreground">
                                <span>{post.likes} Likes</span>
                                <span>{post.shares} Shares</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Button variant="outline" size="lg" asChild className="gap-2">
                        <a href="https://www.facebook.com/ameenfoundationsl/" target="_blank" rel="noopener noreferrer">
                            <Facebook className="w-4 h-4 text-[#1877F2]"/>
                            View More on Facebook
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default LatestPosts;
