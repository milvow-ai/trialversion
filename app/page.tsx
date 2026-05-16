import { TopBar } from "./sections/TopBar";
import { Navbar } from "./sections/Navbar";

export default function HomePage() {
  return (
    <main className="font-sans antialiased bg-surface text-ink">
      <TopBar />
      <Navbar />

      <section className="min-h-[60vh] flex items-center justify-center px-4 bg-surface-soft">
        <div className="text-center max-w-md">
          <div className="text-brand-light text-xs font-semibold uppercase tracking-widest mb-2">
            In progress
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-3">
            Header is live — next up: Hero
          </h2>
          <p className="text-ink-muted text-sm">
            TopBar and Navbar are deployed. Scroll the page to see the navbar shadow grow.
            Resize the window below 1024px to test the mobile hamburger menu.
          </p>
          <div className="w-16 h-1 bg-brand mt-6 mx-auto rounded" />
        </div>
      </section>
    </main>
  );
}
