import { TopBar } from "./sections/TopBar";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { DentalCentre } from "./sections/DentalCentre";
import { Services } from "./sections/Services";
import { WhyChooseUs } from "./sections/WhyChooseUs";
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

      <section className="min-h-[30vh] flex items-center justify-center px-4 bg-surface">
        <div className="text-center max-w-md">
          <div className="text-brand-light text-xs font-semibold uppercase tracking-widest mb-2">
            In progress
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-3">
            Services + Why Choose Us live — next: Testimonials
          </h2>
          <div className="w-16 h-1 bg-brand mt-6 mx-auto rounded" />
        </div>
      </section>

      <SideWidget />
    </main>
  );
}
