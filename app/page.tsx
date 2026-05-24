import { CaseStudyNav } from "./sections/CaseStudyNav";
import { Hero } from "./sections/Hero";
import { ProblemSection } from "./sections/ProblemSection";
import { StrategicShift } from "./sections/StrategicShift";
import { ResultsGrid } from "./sections/ResultsGrid";
import { VisualShowcase } from "./sections/VisualShowcase";
import { TestimonialQuote } from "./sections/TestimonialQuote";
import { FinalCTA } from "./sections/FinalCTA";
import { Footer } from "./sections/Footer";

export default function CaseStudyPage() {
  return (
    <main className="bg-paper text-ink">
      <CaseStudyNav />
      <Hero />
      <ProblemSection />
      <StrategicShift />
      <ResultsGrid />
      <VisualShowcase />
      <TestimonialQuote />
      <FinalCTA />
      <Footer />
    </main>
  );
}
