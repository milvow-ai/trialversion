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
import { SideWidget } from "./sections/SideWidget";

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

      <section className="min-h-[20vh] flex items-center justify-center px-4 bg-surface-soft">
        <div className="text-center max-w-md">
          <div className="text-brand-light text-xs font-semibold uppercase tracking-widest mb-2">
            In progress
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold text-ink">
            Testimonials + Stats + FAQ live — next: Gallery + Contact + Footer
          </h2>
        </div>
      </section>

      <SideWidget />
    </main>
  );
}
