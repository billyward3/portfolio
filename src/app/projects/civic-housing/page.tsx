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
  title: "CivicHousing",
  description:
    "Accessible public housing intake wizard and TTC allocation simulation built for the Google x CSG x T4SG 2026 Hackathon.",
};

const GITHUB_URL = "https://github.com/billyward3/googleHackathon";

const TECHNOLOGIES = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Framer Motion",
  "Leaflet",
];

export default function CivicHousing() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          CivicHousing
        </h1>
        <p className="text-lg text-fg-muted max-w-2xl leading-relaxed">
          An accessibility-first housing intake wizard paired with an
          interactive allocation simulation that shows how coordinated exchange
          can improve outcomes over first-come-first-served systems.
        </p>
        <p className="text-sm text-fg-subtle mt-3">
          Google x CSG x T4SG 2026 Hackathon &middot; Track 5: Housing &amp;
          Urban Development &middot; Built in one day
        </p>
      </div>

      {/* Call to action */}
      <div className="flex flex-wrap gap-3 mb-12">
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Source on GitHub
          <GithubIcon />
        </a>
      </div>

      {/* Context & Problem */}
      <Section title="Context">
        <p className="mb-4">
          Built in one day for the Google x CSG x T4SG 2026 Hackathon. Track
          prompt: &ldquo;How might we support tenants in navigating housing
          systems?&rdquo; Housing data sourced from Detroit&apos;s One Billion
          Dollar Affordable Multifamily Housing Construction Sites, augmented
          with simulated attributes for demonstration purposes.
        </p>
        <p>
          Public housing allocation is opaque and inaccessible. Applicants
          face confusing processes, limited visibility into available units,
          and no meaningful way to express preferences about where they live.
          First-come-first-served systems are simple but routinely produce
          suboptimal matches that could be improved through coordinated
          exchange. CivicHousing addresses both sides: an accessible intake
          process that helps applicants articulate what they actually need, and
          an allocation engine that demonstrates how those preferences can
          produce better outcomes for everyone.
        </p>
      </Section>

      {/* Tenant Experience GIF */}
      <Section title="Tenant Experience">
        <p className="mb-5">
          A guided wizard collects household size, accessibility requirements,
          and location preferences using large touch targets and plain language
          designed for seniors and disabled applicants. The system then scores
          all 76 Detroit housing listings against the profile and presents
          ranked results on an interactive map alongside hospitals, transit
          hubs, schools, and government services. Applicants can drag to
          reorder their rankings.
        </p>
        <div className="rounded-lg overflow-hidden border border-border bg-card-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/civic-housing/housing-client.gif"
            alt="Housing wizard: survey, scoring, and drag-to-rank"
            className="w-full block"
          />
        </div>
      </Section>

      {/* Allocation Engine GIF */}
      <Section title="Allocation Engine">
        <p className="mb-5">
          Starting from a FIFO (first-come-first-served) baseline, the
          simulation applies Top Trading Cycles to find exchange rounds where
          every participant moves to a more-preferred unit simultaneously.
          Honest preferences are always optimal. There is no incentive to game
          the system: in the worst case, you stay in the same unit. On random
          rankings across 76 units, average preference rank improves from 34th
          to 11th, and that average includes households who opt out and keep
          their FIFO assignment.
        </p>
        <div className="rounded-lg overflow-hidden border border-border bg-card-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/civic-housing/housing-server.gif"
            alt="TTC allocation simulation with rank improvement from 34 to 10"
            className="w-full block"
          />
        </div>
      </Section>

      {/* How TTC Works */}
      <Section title="How TTC Works">
        <p className="mb-4">
          Top Trading Cycles is a mechanism from market design theory. After
          the FIFO pass assigns every household an initial unit, TTC builds a
          directed graph: each household points to the unit it prefers most
          among all currently available options. Because the graph is finite,
          at least one cycle must exist. Every household in a cycle trades
          simultaneously, each receiving a strictly better unit than what they
          started with. Remove those households, rebuild the graph, and repeat
          until no more improving cycles remain.
        </p>
        <p>
          The key property is <strong>strategy-proofness</strong>: reporting
          your true preferences is always weakly dominant. No one can benefit
          from lying about their rankings, and no participant is ever made
          worse off than their FIFO assignment. This makes TTC especially
          compelling for public housing, where trust in the allocation process
          matters.
        </p>
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
