export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-surface-soft px-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand text-white text-xl font-bold mb-6">
          Dr
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand mb-3">
          Dr Goel&apos;s Dental & Orthodontic Centre
        </h1>
        <p className="text-ink-muted text-sm">
          Site under active development — sections are being rolled out one at a time.
        </p>
        <div className="w-16 h-1 bg-brand mt-6 mx-auto rounded" />
      </div>
    </main>
  );
}
