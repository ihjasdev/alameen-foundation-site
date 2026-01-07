import { useParams, Link } from "react-router-dom";
import { Calendar, ArrowLeft, Share2, User, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/constants/newsData";
import NotFound from "./NotFound";

// Data imported from constants

const NewsDetailPage = () => {
    const { id } = useParams();
    const newsItem = newsItems.find(item => item.id === Number(id));

    if (!newsItem) {
        return <NotFound />;
    }

    return (
        <div className="pt-24 pb-20">
            {/* Article Header */}
            <div className="bg-muted/30 py-12 border-b border-border">
                <div className="container max-w-4xl">
                    <Button variant="ghost" asChild className="mb-8 hover:bg-transparent px-0 -ml-4 text-muted-foreground hover:text-primary">
                        <Link to="/news">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to News
                        </Link>
                    </Button>

                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            {newsItem.category}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4" />
                            {newsItem.date}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground text-sm">
                            <Clock className="w-4 h-4" />
                            {newsItem.readTime}
                        </span>
                    </div>

                    <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                        {newsItem.title}
                    </h1>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                            <User className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">By {newsItem.author}</p>
                            <p className="text-xs text-muted-foreground">Al Ameen Foundation</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Article Content */}
            <div className="container max-w-4xl mt-12">
                <div className="aspect-video rounded-2xl overflow-hidden mb-12 shadow-md">
                    <img
                        src={newsItem.image}
                        alt={newsItem.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                    <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
                </div>

                <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
                    <p className="text-foreground font-semibold">Share this article:</p>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Share2 className="w-4 h-4" />
                        </Button>
                        {/* Add real social share buttons here if needed */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailPage;
