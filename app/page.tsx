import { TopBar } from "./sections/TopBar";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { DentalCentre } from "./sections/DentalCentre";
import { Services } from "./sections/Services";
import { WhyChooseUs } from "./sections/WhyChooseUs";
import { Testimonials } from "./sections/Testimonials";
import { Stats } from "./sections/Stats";
import { FAQ } from "./sections/FAQ";
import { SmileGallery } from "./sections/SmileGallery";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { SideWidget } from "./sections/SideWidget";
import { FloatingCTA } from "./sections/FloatingCTA";

export default function HomePage() {
  return (
    <main className="font-sans antialiased bg-surface text-ink">
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <DentalCentre />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Stats />
      <FAQ />
      <SmileGallery />
      <Contact />
      <Footer />
      <SideWidget />
      <FloatingCTA />
    </main>
  );
}
