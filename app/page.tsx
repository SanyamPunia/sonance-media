import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WorkShowcase } from "@/components/work-showcase";
import { MediaChannels } from "@/components/media-channels";
import { Placements } from "@/components/placements";
import { PortfolioHighlight } from "@/components/portfolio-highlight";
import { Testimonials } from "@/components/testimonials";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <MediaChannels />
      <Placements />
      <PortfolioHighlight />
      <WorkShowcase />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
