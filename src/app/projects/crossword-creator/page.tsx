import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.65.5.5 5.66.5 12.02c0 5.09 3.29 9.4 7.86 10.93.57.11.78-.25.78-.55 0-.27-.01-1-.02-1.96-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.35.78 1.06.78 2.14 0 1.54-.01 2.78-.01 3.16 0 .3.21.66.79.55A11.52 11.52 0 0 0 23.5 12.02C23.5 5.66 18.35.5 12 .5z" />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "Crossword Creator",
  description:
    "Wordlist-first crossword generator and solver. Builds packed, real-style puzzles around your own word list.",
};

const LIVE_URL = "https://crossword.williamward.dev";
const GITHUB_URL = "https://github.com/billyward3/crossword-creator";

const TECHNOLOGIES = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Vercel",
  "Redis",
  "Web Workers",
];

export default function CrosswordCreator() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold tracking-tight">Crossword Creator</h1>
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted hover:text-accent transition-colors"
            aria-label="Open live site"
          >
            <ExternalLink size={18} />
          </a>
        </div>
        <p className="text-lg text-fg-muted max-w-2xl leading-relaxed">
          Wordlist-first crossword generator and solver. Hand it the words you
          actually care about; the engine generates a packed, real-style
          crossword around them.
        </p>
        <p className="text-sm text-fg-subtle mt-3">
          Personal project · May 2026 to present
        </p>
      </div>

      {/* Call to action */}
      <div className="flex flex-wrap gap-3 mb-12">
        <a
          href={LIVE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Try the live demo
          <ExternalLink size={16} />
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-lg text-sm font-medium hover:border-accent/40 transition-colors"
        >
          Source on GitHub
          <GithubIcon />
        </a>
      </div>

      {/* Hero clip */}
      <div className="mb-12 rounded-lg overflow-hidden border border-border bg-card-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/media/crossword-creator/hero.gif"
          alt="Building a freeform puzzle with the adjacency-aware strategy"
          className="w-full block"
        />
      </div>

      {/* Overview */}
      <Section title="Overview">
        <p className="mb-4">
          Most crossword-making tools fall into two camps. The ones that
          generate grids automatically pull from a generic dictionary, so
          the puzzle has nothing to do with words you actually wanted to
          use. The ones that let you bring your own words usually hand you
          a blank canvas and expect you to place every word by hand, which
          is exactly the part that&apos;s tedious.
        </p>
        <p className="mb-4">
          Crossword Creator covers the middle: you supply a word list and
          a constraint-satisfaction engine packs those words into a
          real-style crossword, intersecting them as densely as possible.
          Three different placement strategies produce visibly different
          layouts from the same input, so you can pick the one that looks
          best.
        </p>
        <p>
          Finished puzzles can be edited, saved to a short URL, and solved
          in a keyboard-navigable player that mirrors the basics of the NYT
          interaction: arrow keys, tab between clues, check letter / word /
          puzzle, reveal, and so on.
        </p>
      </Section>

      {/* Motivation */}
      <Section title="Motivation">
        <p className="mb-4">
          This started with wanting to make a crossword for a loved one.
          The tools online stop at finding intersections between the words
          you supply, which leaves a sparse grid that doesn&apos;t really
          read as a crossword. By using dictionary fill in conjunction
          with a user&apos;s word list, the engine can pack those words
          into a densely populated puzzle instead. That gap is what kicked
          off the project, and what shaped the strategies.
        </p>
        <p className="mb-4">
          Under the hood, it&apos;s a focused constraint-satisfaction
          solver written from scratch in TypeScript: AC-3 arc consistency
          for constraint propagation, a minimum-remaining-values heuristic
          for slot ordering, three placement strategies that produce
          visibly different grids from the same input, and Web Workers
          fanning the solver out across multiple seeds in parallel.
        </p>
        <p>
          The unique change in strategy I&apos;ve provided is the
          adjacency-aware placer. It handles two user words that share no
          letters by placing them side-by-side and validating every
          resulting two-letter perpendicular run against an English bigram
          table. If every cross-pair is attested, the placement is
          accepted; if any pair fails, a different offset is tried. That
          is what lets the engine pack short personal word lists into a
          dense grid without flooding the result with generic dictionary
          fill.
        </p>
      </Section>

      {/* Selected views */}
      <Section title="Selected views">
        <p className="mb-5 text-fg-muted">
          A few stills from the{" "}
          <a
            href={`${LIVE_URL}/about`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            How It Works page
          </a>
          , which collects the engine documentation, strategy comparisons,
          and interactive step-throughable demos in one place.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { src: "/media/crossword-creator/strategies.png", alt: "Strategy overview on the About page" },
            { src: "/media/crossword-creator/about-aa-1.png", alt: "Adjacency-aware strategy page, anchor placed" },
            { src: "/media/crossword-creator/about-aa-2.png", alt: "Adjacency-aware strategy page, validating cross-letter pairs" },
            { src: "/media/crossword-creator/about-aa-3.png", alt: "Adjacency-aware strategy page, accepted placement" },
          ].map((img) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="w-full rounded-lg border border-border block"
            />
          ))}
        </div>
      </Section>

      {/* Built with */}
      <Section title="Built with">
        <div className="flex flex-wrap gap-2">
          {TECHNOLOGIES.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 rounded-full bg-bg-secondary text-fg-muted font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

    </div>
  );
}

function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-xl font-bold tracking-tight mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      <div className="text-sm leading-relaxed">{children}</div>
    </section>
  );
}
