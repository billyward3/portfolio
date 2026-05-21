import type { Metadata } from "next";

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
  title: "PufferPhish",
  description:
    "ML-powered Chrome extension for real-time phishing detection using CodeBERT and rule-based analysis.",
};

const GITHUB_URL = "https://github.com/billyward3/pufferPhish";

const TECHNOLOGIES = [
  "TypeScript",
  "React",
  "Chrome Extension API",
  "Node.js",
  "AWS Lambda",
  "AWS CDK",
  "Python",
  "ONNX Runtime",
  "PostgreSQL",
  "Prisma",
  "Tailwind",
];

export default function PufferPhish() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          PufferPhish
        </h1>
        <p className="text-lg text-fg-muted max-w-2xl leading-relaxed">
          A Chrome extension that detects phishing in real time using a hybrid
          approach: a CodeBERT classifier for URL-level inference and a
          rule-based engine that catches structural patterns like homoglyphs,
          brand spoofing, and suspicious subdomains.
        </p>
        <p className="text-sm text-fg-subtle mt-3">
          Senior capstone project &middot; University of Michigan &middot; 2025
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

      {/* Warning interstitial */}
      <Section title="Warning Interstitial">
        <p className="mb-5">
          When a URL scores above the danger threshold, the extension redirects
          the browser to a full-page warning before the page loads. The
          interstitial explains exactly why the site was flagged: number
          substitutions imitating known brands, suspicious TLDs, lack of
          association with legitimate services, and high-risk URL patterns.
          Users can return to safety or acknowledge the risk and proceed.
        </p>
        <div className="rounded-lg overflow-hidden border border-border bg-card-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/pufferphish/full-page-interstitial.png"
            alt="Full-page warning interstitial blocking amaz0n-deals.net with 88% risk score"
            className="w-full block"
          />
        </div>
      </Section>

      {/* Dashboard */}
      <Section title="Dashboard">
        <p className="mb-5">
          The web dashboard aggregates scan activity across all browsing
          sessions. The overview tracks threats blocked, safe sites visited,
          warnings issued, and uptime alongside a weekly scan volume chart.
          The history tab provides a searchable, filterable log of every
          blocked attempt with threat types, risk scores, and the option to
          view full reports or whitelist false positives.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/pufferphish/protection-summary.png"
            alt="Protection summary with threat stats, weekly chart, and recent threats"
            className="w-full rounded-lg border border-border block"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/media/pufferphish/protection-history(web).png"
            alt="Protection history with searchable, filterable threat log"
            className="w-full rounded-lg border border-border block"
          />
        </div>
      </Section>

      {/* How it works */}
      <Section title="How It Works">
        <p className="mb-4">
          Every URL you visit passes through two detection layers that run in
          parallel. The final risk score takes the higher of the two, and
          rule-based flags are always appended for explainability so users see
          exactly why a URL was flagged.
        </p>
        <h3 className="font-semibold mb-2">ML Classification</h3>
        <p className="mb-4">
          A CodeBERT model (via ProtectAI&apos;s ONNX-optimized checkpoint)
          classifies URLs into four categories: benign, phishing, malware, and
          defacement. The model runs as a separate Python service and returns
          confidence scores for each label, with sub-second inference on warm
          requests.
        </p>
        <h3 className="font-semibold mb-2">Rule-Based Analysis</h3>
        <p className="mb-4">
          Scores URLs across three weighted dimensions: URL structure patterns
          like IP-address URLs, excessive subdomains, and URL encoding tricks
          (40%); domain reputation signals like homoglyph substitutions,
          phishing keywords, and digit injection (40%); and content indicators
          like suspicious path patterns, brand spoofing, and non-standard
          ports (20%).
        </p>
        <h3 className="font-semibold mb-2">Risk Thresholds</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-2 pr-4 font-semibold">Risk</th>
                <th className="py-2 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody className="text-fg-muted">
              <tr className="border-b border-border">
                <td className="py-2 pr-4">Below 30%</td>
                <td className="py-2">Safe. Green shield icon with scan stats in popup.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-4">30% to 70%</td>
                <td className="py-2">Warning. Amber alert with threat details in popup.</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Above 70%</td>
                <td className="py-2">Danger. Auto-redirect to full-page warning interstitial.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Architecture */}
      <Section title="Architecture">
        <p className="mb-4">
          The system is a Turbo monorepo with five packages. The Chrome
          extension&apos;s service worker intercepts every tab navigation and
          sends the URL to a Node.js API running on AWS Lambda. The API checks
          a 24-hour PostgreSQL cache, then fans out to the ML engine and
          rule-based analyzer in parallel. Infrastructure is defined as code
          with AWS CDK: Lambda functions, API Gateway, RDS, S3 for model
          storage, Cognito for auth, and CloudFront for the dashboard.
        </p>
        <pre className="bg-bg-secondary rounded-lg p-4 text-xs leading-relaxed overflow-x-auto">
{`Chrome Extension (Manifest v3)
  ├── Service Worker    analyzes URLs on tab navigation, caches results
  ├── Popup UI          risk score, threat flags, scan statistics
  ├── Warning Page      full-page interstitial for blocked sites
  └── Content Script    page-level interaction
        │
        ▼
API (Node.js, AWS Lambda)
  ├── /analyze     validates URL, checks cache, invokes ML + rules
  ├── /stats       scan counts, threats blocked, recent analyses
  ├── /settings    auto-block, notifications, domain whitelist
  └── /feedback    user corrections for model improvement
        │
        ▼
ML Engine (Python, AWS Lambda)
  └── CodeBERT ONNX    4-class URL classification
        │
        ▼
PostgreSQL (AWS RDS)
  └── Analyses, URL cache (24h TTL), settings, threat intel`}
        </pre>
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

      {/* Context */}
      <Section title="Context">
        <p>
          Senior capstone project at the University of Michigan, 2025. I led
          the team and implemented the full codebase. The detection system combines a
          pre-trained CodeBERT model from Hugging Face with a hand-tuned
          rule-based engine, deployed on AWS with CDK-managed infrastructure.
        </p>
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
