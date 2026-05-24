import Link from "next/link";
import { Container } from "@/components/ui/Container";

const FOOTER_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#start" },
];

const SOCIAL_LINKS = [
  { label: "Are.na", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-paper py-16 md:py-20 border-t border-ink-line/70">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 md:mb-20">
          <div className="md:col-span-6">
            <Link
              href="/"
              className="font-sans font-medium text-ink text-[15px] tracking-tight"
            >
              Milvow<span className="text-ink-muted">®</span>
            </Link>
            <p className="mt-5 text-ink-muted text-[15px] leading-relaxed max-w-[40ch]">
              A small design studio building considered, calmer interfaces for
              ambitious brands. Based remotely, working worldwide.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle mb-5">
              Navigate
            </div>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-ink text-[14px] hover:opacity-60 transition-opacity"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle mb-5">
              Elsewhere
            </div>
            <ul className="space-y-2.5">
              {SOCIAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-ink text-[14px] hover:opacity-60 transition-opacity inline-flex items-center gap-1.5"
                  >
                    {l.label}
                    <span className="text-ink-faint">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-ink-line/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
          <span>© {new Date().getFullYear()} Milvow Studio</span>
          <span>Built with care · Index 02</span>
        </div>
      </Container>
    </footer>
  );
}
