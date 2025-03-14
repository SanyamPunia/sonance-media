import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Sample blog data
const blogs = [
  {
    slug: "digital-marketing-trends-2025",
    title: "Top Digital Marketing Trends to Watch in 2025",
    excerpt:
      "Explore the emerging trends that will shape the digital marketing landscape in 2025, from AI-powered personalization to immersive content experiences.",
    date: "March 10, 2025",
    readTime: "8 min read",
    author: "Pranjal Sharma",
    authorRole: "Marketing Director",
    authorImage: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=600&width=1200",
    categories: ["Digital Marketing", "Trends"],
  },
  {
    slug: "social-media-strategy-guide",
    title: "The Ultimate Social Media Strategy Guide for Brands",
    excerpt:
      "Learn how to develop a comprehensive social media strategy that drives engagement, builds brand awareness, and converts followers into customers.",
    date: "February 28, 2025",
    readTime: "12 min read",
    author: "Ananya Patel",
    authorRole: "Social Media Specialist",
    authorImage: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=600&width=1200",
    categories: ["Social Media", "Strategy"],
  },
  {
    slug: "seo-best-practices-2025",
    title: "SEO Best Practices for 2025: What's Changed?",
    excerpt:
      "Stay ahead of the competition with these updated SEO best practices for 2025, including voice search optimization and AI-driven content strategies.",
    date: "February 15, 2025",
    readTime: "10 min read",
    author: "Rahul Mehta",
    authorRole: "SEO Lead",
    authorImage: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=600&width=1200",
    categories: ["SEO", "Content Strategy"],
  },
  {
    slug: "brand-storytelling-guide",
    title: "The Art of Brand Storytelling: Connecting with Your Audience",
    excerpt:
      "Discover how effective brand storytelling can create emotional connections with your audience and drive long-term customer loyalty.",
    date: "January 30, 2025",
    readTime: "9 min read",
    author: "Neha Singh",
    authorRole: "Creative Director",
    authorImage: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=600&width=1200",
    categories: ["Branding", "Content Creation"],
  },
  {
    slug: "video-marketing-strategies",
    title: "Video Marketing Strategies That Drive Results",
    excerpt:
      "Learn how to create and implement video marketing strategies that engage viewers, increase brand awareness, and drive conversions.",
    date: "January 15, 2025",
    readTime: "11 min read",
    author: "Vikram Kapoor",
    authorRole: "Video Production Lead",
    authorImage: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=600&width=1200",
    categories: ["Video Marketing", "Content Strategy"],
  },
  {
    slug: "analytics-for-marketers",
    title: "Making Sense of Analytics: A Guide for Marketers",
    excerpt:
      "Demystify marketing analytics and learn how to use data effectively to optimize your campaigns and demonstrate ROI to stakeholders.",
    date: "January 5, 2025",
    readTime: "14 min read",
    author: "Pranjal Sharma",
    authorRole: "Marketing Director",
    authorImage: "/placeholder.svg?height=100&width=100",
    coverImage: "/placeholder.svg?height=600&width=1200",
    categories: ["Analytics", "Data-Driven Marketing"],
  },
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-10 md:pt-40 md:pb-16 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-950/10">
        <MaxWidthWrapper>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Our Blog
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Insights, strategies, and industry expertise to help your brand
              succeed in the digital landscape
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="py-12 md:py-16">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Card
                key={blog.slug}
                className="border-border rounded-md shadow-none hover:border-[#049CE3]/20 transition-colors overflow-hidden flex flex-col"
              >
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="block overflow-hidden"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <Image
                      src={blog.coverImage || "/placeholder.svg"}
                      alt={blog.title}
                      width={600}
                      height={338}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </Link>

                <CardHeader className="flex-grow">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {blog.categories.map((category, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-[10px] rounded-md border-border shadow-none"
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl mb-2">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="hover:text-[#049CE3] transition-colors"
                    >
                      {blog.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {blog.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardFooter className="border-t border-border pt-4 flex flex-col items-start space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-8 w-8 rounded-full overflow-hidden border border-border">
                      <Image
                        src={blog.authorImage || "/placeholder.svg"}
                        alt={blog.author}
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-medium">{blog.author}</p>
                      <p className="text-xs text-muted-foreground">
                        {blog.authorRole}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <CalendarDays className="h-3 w-3 mr-1" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto text-xs hover:bg-transparent hover:text-[#049CE3]"
                    asChild
                  >
                    <Link href={`/blogs/${blog.slug}`}>
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <Footer />
    </main>
  );
}
