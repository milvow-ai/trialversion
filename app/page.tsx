import { TopBar } from "./sections/TopBar";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { SideWidget } from "./sections/SideWidget";

export default function HomePage() {
  return (
    <main className="font-sans antialiased bg-surface text-ink">
      <TopBar />
      <Navbar />
      <Hero />

      <section className="min-h-[40vh] flex items-center justify-center px-4 bg-surface-soft">
        <div className="text-center max-w-md">
          <div className="text-brand-light text-xs font-semibold uppercase tracking-widest mb-2">
            In progress
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-3">
            Hero is live — next up: About
          </h2>
          <p className="text-ink-muted text-sm">
            Look for the right-side floating widget (Location / Working Time / Request Form)
            on desktop ≥1024px.
          </p>
          <div className="w-16 h-1 bg-brand mt-6 mx-auto rounded" />
        </div>
      </section>

      <SideWidget />
    </main>
  );
}
