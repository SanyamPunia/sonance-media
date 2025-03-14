import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  MessageSquare,
} from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    content: `
      <p>The digital marketing landscape is constantly evolving, and staying ahead of the curve is essential for brands looking to maintain a competitive edge. As we look toward 2025, several emerging trends are set to reshape how businesses connect with their audiences and drive results.</p>
      
      <h2>1. AI-Powered Personalization at Scale</h2>
      <p>Artificial intelligence has already made significant inroads in marketing, but in 2025, we'll see AI-powered personalization reach new heights. Brands will leverage advanced machine learning algorithms to deliver hyper-personalized experiences across all touchpoints, from website content to email marketing and social media interactions.</p>
      <p>These AI systems will analyze vast amounts of data in real-time, allowing marketers to create dynamic content that adapts to individual user preferences, behaviors, and context. The result? Higher engagement, improved conversion rates, and stronger customer loyalty.</p>
      
      <h2>2. Immersive Content Experiences</h2>
      <p>As technology continues to advance, immersive content experiences will become more accessible and widespread. Virtual reality (VR), augmented reality (AR), and mixed reality (MR) will move beyond gaming and entertainment to become powerful marketing tools.</p>
      <p>Brands will create virtual showrooms, interactive product demonstrations, and immersive storytelling experiences that allow consumers to engage with their products and services in entirely new ways. These technologies will be particularly valuable for industries like retail, real estate, and travel, where the ability to "try before you buy" can significantly impact purchasing decisions.</p>
      
      <h2>3. Voice Search Optimization</h2>
      <p>With the continued growth of smart speakers and voice assistants, optimizing for voice search will be non-negotiable in 2025. Voice queries tend to be more conversational and question-based than text searches, requiring marketers to adapt their SEO strategies accordingly.</p>
      <p>Successful brands will focus on natural language processing, question-based content, and featured snippet optimization to ensure their content appears in voice search results. Local businesses, in particular, will benefit from voice search optimization as users increasingly rely on voice commands for location-based queries.</p>
      
      <h2>4. Privacy-First Marketing</h2>
      <p>As privacy regulations continue to evolve and consumers become more protective of their personal data, privacy-first marketing will take center stage. Brands will need to find innovative ways to deliver personalized experiences while respecting user privacy and complying with regulations.</p>
      <p>First-party data will become increasingly valuable, and marketers will invest in building direct relationships with their audiences through value exchanges. Transparent data practices, clear communication about data usage, and robust consent management will be essential components of successful marketing strategies.</p>
      
      <h2>5. Sustainable and Purpose-Driven Marketing</h2>
      <p>Consumers are increasingly making purchasing decisions based on a brand's environmental and social impact. In 2025, sustainable and purpose-driven marketing will move from a nice-to-have to a business imperative.</p>
      <p>Brands will need to authentically communicate their sustainability initiatives, social responsibility efforts, and core values. Those that can demonstrate a genuine commitment to making a positive impact will build stronger connections with conscious consumers and differentiate themselves in crowded markets.</p>
      
      <h2>Conclusion</h2>
      <p>The digital marketing landscape of 2025 will be characterized by more personalized, immersive, and purpose-driven experiences. Brands that embrace these emerging trends, while maintaining a focus on privacy and authenticity, will be well-positioned to succeed in an increasingly competitive digital environment.</p>
      <p>At Sonance Media, we're committed to helping our clients stay ahead of these trends and leverage them to achieve their marketing objectives. Contact us today to learn how we can help your brand prepare for the future of digital marketing.</p>
    `,
    relatedPosts: [
      "social-media-strategy-guide",
      "seo-best-practices-2025",
      "analytics-for-marketers",
    ],
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
    content: `
      <p>In today's digital landscape, a robust social media presence is essential for brands looking to connect with their audience, build brand awareness, and drive business results. However, with the ever-changing nature of social platforms and user behaviors, developing an effective social media strategy can be challenging.</p>
      
      <p>This comprehensive guide will walk you through the key components of a successful social media strategy, from setting clear objectives to measuring your results and optimizing your approach.</p>
      
      <h2>1. Define Your Objectives and KPIs</h2>
      <p>Before diving into content creation and posting schedules, it's crucial to establish clear objectives for your social media efforts. What do you want to achieve? Common goals include:</p>
      <ul>
        <li>Increasing brand awareness</li>
        <li>Driving website traffic</li>
        <li>Generating leads and sales</li>
        <li>Improving customer engagement and loyalty</li>
        <li>Providing customer support</li>
      </ul>
      <p>For each objective, define specific, measurable key performance indicators (KPIs) that will help you track your progress. For example, if your goal is to increase brand awareness, your KPIs might include reach, impressions, and follower growth.</p>
      
      <h2>2. Understand Your Audience</h2>
      <p>A deep understanding of your target audience is the foundation of any effective social media strategy. Develop detailed buyer personas that include:</p>
      <ul>
        <li>Demographics (age, gender, location, income, etc.)</li>
        <li>Psychographics (interests, values, pain points, motivations)</li>
        <li>Online behavior (preferred platforms, content consumption habits, engagement patterns)</li>
      </ul>
      <p>Use platform analytics, customer surveys, and market research to gather this information. The more you know about your audience, the better you can tailor your content to resonate with them.</p>
      
      <h2>3. Conduct a Competitive Analysis</h2>
      <p>Analyzing your competitors' social media presence can provide valuable insights and help you identify opportunities to differentiate your brand. Look at:</p>
      <ul>
        <li>Which platforms they're active on</li>
        <li>Their content mix and posting frequency</li>
        <li>Engagement rates and follower growth</li>
        <li>Successful campaigns and content formats</li>
        <li>Areas where they might be underperforming</li>
      </ul>
      <p>This analysis will help you benchmark your performance and identify gaps in the market that your brand can fill.</p>
      
      <h2>4. Choose the Right Platforms</h2>
      <p>Not all social media platforms are created equal, and you don't need to be present on every platform. Focus on the channels where your target audience is most active and that align with your business objectives and content capabilities.</p>
      <p>Consider the unique characteristics of each platform:</p>
      <ul>
        <li><strong>Instagram:</strong> Visual-focused, ideal for lifestyle brands and products with strong aesthetic appeal</li>
        <li><strong>LinkedIn:</strong> Professional networking, excellent for B2B marketing and thought leadership</li>
        <li><strong>TikTok:</strong> Short-form video content, popular with younger audiences</li>
        <li><strong>X (Twitter):</strong> Real-time updates and conversations, good for customer service and news</li>
        <li><strong>Facebook:</strong> Diverse content formats, broad demographic reach, strong community features</li>
        <li><strong>Pinterest:</strong> Visual discovery platform, excellent for driving traffic to websites</li>
      </ul>
      
      <h2>5. Develop a Content Strategy</h2>
      <p>Your content strategy should outline what types of content you'll create, how often you'll post, and how you'll maintain a consistent brand voice across platforms. Consider implementing a content mix that includes:</p>
      <ul>
        <li>Educational content (how-to guides, tips, industry insights)</li>
        <li>Entertaining content (memes, behind-the-scenes, user-generated content)</li>
        <li>Inspirational content (success stories, motivational quotes)</li>
        <li>Promotional content (product announcements, special offers)</li>
      </ul>
      <p>Aim for a balanced mix that provides value to your audience while supporting your business objectives. The 80/20 rule is a good starting point: 80% value-adding content and 20% promotional content.</p>
      
      <h2>6. Create a Content Calendar</h2>
      <p>A content calendar helps you plan and organize your social media content in advance, ensuring consistent posting and alignment with your marketing initiatives. Your calendar should include:</p>
      <ul>
        <li>Post dates and times</li>
        <li>Content themes and topics</li>
        <li>Copy and visuals</li>
        <li>Platform-specific formatting</li>
        <li>Relevant hashtags and tags</li>
      </ul>
      <p>Tools like Hootsuite, Buffer, or Sprout Social can help you manage your content calendar and schedule posts across multiple platforms.</p>
      
      <h2>7. Engage With Your Audience</h2>
      <p>Social media is a two-way conversation. Actively engage with your audience by:</p>
      <ul>
        <li>Responding to comments and messages promptly</li>
        <li>Asking questions and encouraging discussions</li>
        <li>Running polls, contests, and interactive features</li>
        <li>Sharing and highlighting user-generated content</li>
        <li>Participating in relevant conversations and communities</li>
      </ul>
      <p>Consistent engagement builds relationships with your audience and signals to platform algorithms that your content is valuable, potentially increasing your reach.</p>
      
      <h2>8. Measure and Optimize</h2>
      <p>Regularly analyze your social media performance against your KPIs to understand what's working and what's not. Use platform analytics and third-party tools to track metrics such as:</p>
      <ul>
        <li>Reach and impressions</li>
        <li>Engagement rate (likes, comments, shares)</li>
        <li>Click-through rate</li>
        <li>Conversion rate</li>
        <li>Audience growth and demographics</li>
      </ul>
      <p>Use these insights to refine your strategy, experiment with new approaches, and double down on successful tactics.</p>
      
      <h2>Conclusion</h2>
      <p>A well-executed social media strategy can be a powerful tool for building brand awareness, engaging with your audience, and driving business results. By following the steps outlined in this guide and consistently refining your approach based on performance data, you can create a social media presence that resonates with your audience and supports your business objectives.</p>
      <p>Remember that social media is constantly evolving, so stay informed about platform updates, emerging trends, and changing user behaviors to ensure your strategy remains effective over time.</p>
    `,
    relatedPosts: [
      "digital-marketing-trends-2025",
      "brand-storytelling-guide",
      "video-marketing-strategies",
    ],
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
    content: `
      <p>Search engine optimization (SEO) continues to evolve at a rapid pace, with search engines constantly refining their algorithms to deliver more relevant, high-quality results to users. As we move into 2025, several significant shifts in SEO best practices have emerged, driven by advancements in AI, changes in user behavior, and evolving search engine capabilities.</p>
      
      <p>In this comprehensive guide, we'll explore the most important SEO best practices for 2025, highlighting what's changed and how you can adapt your strategy to stay ahead of the competition.</p>
      
      <h2>1. AI-First Content Optimization</h2>
      <p>With search engines increasingly leveraging artificial intelligence to understand content and user intent, AI-first content optimization has become essential. Google's advanced language models can now comprehend context, nuance, and the relationships between concepts at a near-human level.</p>
      
      <p><strong>What's Changed:</strong></p>
      <ul>
        <li>Keyword stuffing is not just ineffective but can actively harm your rankings</li>
        <li>Topic coverage and depth are more important than keyword density</li>
        <li>Content that answers related questions and covers adjacent topics performs better</li>
      </ul>
      
      <p><strong>Best Practices:</strong></p>
      <ul>
        <li>Focus on creating comprehensive, authoritative content that thoroughly covers your topic</li>
        <li>Use AI content analysis tools to identify gaps in your content compared to top-ranking pages</li>
        <li>Structure content logically with clear headings that help both users and search engines understand your information hierarchy</li>
        <li>Include relevant entities (people, places, things, concepts) that are semantically related to your topic</li>
      </ul>
      
      <h2>2. Voice Search Optimization</h2>
      <p>With the proliferation of smart speakers and voice assistants, voice search has become a significant part of the search landscape. By 2025, it's estimated that over 50% of all searches will be conducted via voice.</p>
      
      <p><strong>What's Changed:</strong></p>
      <ul>
        <li>Voice queries tend to be longer and more conversational than text searches</li>
        <li>Featured snippets are often used as voice search results</li>
        <li>Local search is heavily influenced by voice queries</li>
      </ul>
      
      <p><strong>Best Practices:</strong></p>
      <ul>
        <li>Optimize for natural language queries by incorporating question-based content (who, what, when, where, why, how)</li>
        <li>Create concise, direct answers to common questions in your industry</li>
        <li>Structure content with schema markup to help search engines understand your content</li>
        <li>Focus on conversational long-tail keywords that match how people speak</li>
        <li>Ensure your local SEO is optimized, including accurate business information and Google Business Profile</li>
      </ul>
      
      <h2>3. User Experience and Core Web Vitals</h2>
      <p>User experience signals have become increasingly important ranking factors, with Google's Core Web Vitals now playing a central role in how pages are ranked.</p>
      
      <p><strong>What's Changed:</strong></p>
      <ul>
        <li>Page experience signals are now major ranking factors</li>
        <li>Mobile experience is prioritized in Google's mobile-first indexing</li>
        <li>Core Web Vitals thresholds have become more stringent</li>
      </ul>
      
      <p><strong>Best Practices:</strong></p>
      <ul>
        <li>Optimize Largest Contentful Paint (LCP) to under 2.5 seconds</li>
        <li>Ensure First Input Delay (FID) is less than 100 milliseconds</li>
        <li>Maintain Cumulative Layout Shift (CLS) below 0.1</li>
        <li>Implement responsive design that works seamlessly across all devices</li>
        <li>Minimize JavaScript execution time and optimize critical rendering path</li>
        <li>Use next-generation image formats and implement proper image sizing</li>
      </ul>
      
      <h2>4. E-E-A-T and Content Authority</h2>
      <p>Google's E-E-A-T guidelines (Experience, Expertise, Authoritativeness, and Trustworthiness) have expanded to include "Experience," emphasizing the importance of first-hand experience in content creation.</p>
      
      <p><strong>What's Changed:</strong></p>
      <ul>
        <li>Personal experience is now valued alongside expertise and authority</li>
        <li>Author credentials and transparency are more important than ever</li>
        <li>Content freshness and regular updates are increasingly valued</li>
      </ul>
      
      <p><strong>Best Practices:</strong></p>
      <ul>
        <li>Highlight author expertise and credentials prominently</li>
        <li>Include personal experiences and first-hand accounts where relevant</li>
        <li>Cite authoritative sources and provide references</li>
        <li>Maintain clear "About Us" and contact information pages</li>
        <li>Regularly update important content to ensure accuracy and relevance</li>
        <li>Implement clear disclosure policies for sponsored content</li>
      </ul>
      
      <h2>5. Visual Search Optimization</h2>
      <p>Visual search capabilities have advanced significantly, with Google Lens and similar technologies enabling users to search using images rather than text.</p>
      
      <p><strong>What's Changed:</strong></p>
      <ul>
        <li>Image search has become more sophisticated and integrated with text search</li>
        <li>Visual elements are increasingly important for ranking in certain industries</li>
        <li>AI can now understand and index the content within images</li>
      </ul>
      
      <p><strong>Best Practices:</strong></p>
      <ul>
        <li>Use high-quality, original images that clearly depict your products or concepts</li>
        <li>Implement comprehensive image optimization (file names, alt text, captions, surrounding text)</li>
        <li>Add structured data markup for images where appropriate</li>
        <li>Consider creating image-rich content for topics where visual search is common</li>
        <li>Ensure images are responsive and load quickly on all devices</li>
      </ul>
      
      <h2>6. AI-Generated Content Guidelines</h2>
      <p>With the rise of AI content generation tools, search engines have developed more nuanced approaches to evaluating AI-created content.</p>
      
      <p><strong>What's Changed:</strong></p>
      <ul>
        <li>Google no longer categorically penalizes AI-generated content</li>
        <li>The focus is on content quality and value, regardless of how it was created</li>
        <li>Human oversight and editing of AI content is essential</li>
      </ul>
      
      <p><strong>Best Practices:</strong></p>
      <ul>
        <li>Use AI as a tool to assist content creation, not replace human creativity and expertise</li>
        <li>Always review, edit, and enhance AI-generated content with human input</li>
        <li>Add unique insights, personal experiences, and original research to stand out</li>
        <li>Ensure AI-generated content aligns with your brand voice and provides genuine value</li>
        <li>Be transparent about AI usage where appropriate</li>
      </ul>
      
      <h2>7. Local SEO Evolution</h2>
      <p>Local search continues to evolve, with increased emphasis on proximity, relevance, and prominence.</p>
      
      <p><strong>What's Changed:</strong></p>
      <ul>
        <li>Near-me searches have increased dramatically</li>
        <li>Google Business Profile features have expanded</li>
        <li>Local pack results are more dynamic and personalized</li>
      </ul>
      
      <p><strong>Best Practices:</strong></p>
      <ul>
        <li>Maintain an up-to-date and complete Google Business Profile</li>
        <li>Actively solicit and respond to customer reviews</li>
        <li>Ensure NAP (Name, Address, Phone) consistency across all platforms</li>
        <li>Create location-specific content for multi-location businesses</li>
        <li>Implement local schema markup on your website</li>
        <li>Build local backlinks and citations from reputable sources</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>SEO in 2025 requires a holistic approach that goes beyond traditional keyword optimization. By focusing on comprehensive content, user experience, technical excellence, and E-E-A-T principles, you can create a sustainable SEO strategy that will continue to deliver results as search engines evolve.</p>
      
      <p>Remember that the most effective SEO strategies are those that prioritize the user first and search engines second. By creating valuable, authoritative content that genuinely serves your audience's needs, you'll be well-positioned for SEO success in 2025 and beyond.</p>
    `,
    relatedPosts: [
      "digital-marketing-trends-2025",
      "analytics-for-marketers",
      "content-strategy-guide",
    ],
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
    content: `<p>Sample content for brand storytelling guide...</p>`,
    relatedPosts: [
      "social-media-strategy-guide",
      "video-marketing-strategies",
      "digital-marketing-trends-2025",
    ],
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
    content: `<p>Sample content for video marketing strategies...</p>`,
    relatedPosts: [
      "social-media-strategy-guide",
      "brand-storytelling-guide",
      "digital-marketing-trends-2025",
    ],
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
    content: `<p>Sample content for analytics guide...</p>`,
    relatedPosts: [
      "digital-marketing-trends-2025",
      "seo-best-practices-2025",
      "social-media-strategy-guide",
    ],
  },
];

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) {
    notFound();
  }

  const relatedPosts = blog.relatedPosts
    .map((slug) => blogs.find((blog) => blog.slug === slug))
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-10 md:pt-40 md:pb-16 bg-gradient-to-b from-background to-blue-50/30 dark:from-background dark:to-blue-950/10">
        <MaxWidthWrapper>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blogs"
              className="inline-flex items-center text-xs text-muted-foreground hover:text-[#049CE3] mb-6"
            >
              <ArrowLeft className="h-3 w-3 mr-1" />
              Back to all blogs
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
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

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {blog.title}
            </h1>

            <div className="flex items-center space-x-4 mb-8">
              <Avatar className="h-10 w-10 border border-border">
                <AvatarImage src={blog.authorImage} alt={blog.author} />
                <AvatarFallback>{blog.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{blog.author}</p>
                <p className="text-xs text-muted-foreground">
                  {blog.authorRole}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-8">
              <div className="flex items-center">
                <CalendarDays className="h-3 w-3 mr-1" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="py-8">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="mb-8 rounded-lg overflow-hidden">
                <Image
                  src={blog.coverImage || "/placeholder.svg"}
                  alt={blog.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>

              <article className="prose prose-sm dark:prose-invert max-w-none mb-12">
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </article>

              <div className="flex items-center justify-between border-t border-border pt-6">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-md border-border shadow-none"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-md border-border shadow-none"
                  >
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-md border-border shadow-none"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Comments
                </Button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <Card className="border-border rounded-md shadow-none mb-8">
                  <CardHeader>
                    <CardTitle className="text-lg">About the Author</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="h-16 w-16 border border-border">
                        <AvatarImage src={blog.authorImage} alt={blog.author} />
                        <AvatarFallback>{blog.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{blog.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {blog.authorRole}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {blog.author} is a digital marketing expert with over 10
                      years of experience in the industry. Specializing in{" "}
                      {blog.categories.join(", ")}, they help brands develop
                      effective strategies that drive measurable results.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-border rounded-md shadow-none">
                  <CardHeader>
                    <CardTitle className="text-lg">Related Articles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <div
                          key={post?.slug}
                          className="border-b border-border pb-4 last:border-0 last:pb-0"
                        >
                          <Link
                            href={`/blogs/${post?.slug}`}
                            className="block group"
                          >
                            <p className="text-sm font-medium group-hover:text-[#049CE3] transition-colors mb-1">
                              {post?.title}
                            </p>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                              <span>{post?.date}</span>
                              <span>{post?.readTime}</span>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <Footer />
    </main>
  );
}
