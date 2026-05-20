import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { TrustSection } from "./sections/TrustSection";
import { Testimonials } from "./sections/Testimonials";
import { Benefits } from "./sections/Benefits";
import { Services } from "./sections/Services";
import { Finance } from "./sections/Finance";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";
import { FloatingCTA } from "./sections/FloatingCTA";

export default function HomePage() {
  return (
    <main className="font-sans antialiased bg-surface text-ink">
      <Navbar />
      <Hero />
      <TrustSection />
      <Testimonials />
      <Benefits />
      <Services />
      <Finance />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
