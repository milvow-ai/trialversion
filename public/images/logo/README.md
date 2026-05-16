# Logo assets

Drop these files here. Until they exist, the Logo component renders a clean text-based fallback (brand-color "Dr" badge + wordmark) so layout stays intact.

## Required files

- `dr-goels-logo.png` — for navbar / light backgrounds.
  - Recommended size: 200×56px at 2x (so 400×112px source), transparent PNG.
  - Used by: `components/ui/Logo.tsx` when `variant="light"` (Navbar).

- `dr-goels-logo-white.png` — for footer / dark backgrounds.
  - Same dimensions as above, white/light-color version of the mark for use on `bg-brand-dark`.
  - Used by: `components/ui/Logo.tsx` when `variant="dark"` (Footer).

## How to add

1. Save the logo image you sent (the "Dr Goel's / Dental & Orthodontic Centre" mark) here as `dr-goels-logo.png`.
2. If you have a white/inverted version for the dark footer, save it as `dr-goels-logo-white.png`. Otherwise the Footer will keep using the text fallback until you do.
3. Commit + push — Vercel rebuilds automatically; logos appear on the next deploy.

The Logo component reads the natural aspect of the image and scales by height — no code changes needed.
