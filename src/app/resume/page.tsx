import type { Metadata } from "next";
import Link from "next/link";
import { Download, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Resume</h1>
          <p className="text-fg-muted">William Ward</p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-muted transition-colors text-sm font-medium"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      <div className="space-y-12">
        <Section title="Education">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold">University of Michigan</p>
              <p className="text-sm text-fg-muted">B.S. Computer Science, GPA 3.4/4.0</p>
              <p className="text-xs text-fg-subtle mt-1">
                Advanced Operating Systems, Computer Security, Cryptography, Networks, Computer Architecture,
                Web Systems, Data Structures &amp; Algorithms, Machine Learning, Quantum Computing, Linear Algebra
              </p>
            </div>
            <span className="text-sm text-fg-subtle whitespace-nowrap">Aug 2022 - Dec 2025</span>
          </div>
        </Section>

        <Section title="Experience">
          <div className="space-y-8">
            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="font-semibold">Technical Lead &amp; Co-Founder</p>
                  <p className="text-sm text-fg-muted">Roots App, Ann Arbor, MI</p>
                </div>
                <span className="text-sm text-fg-subtle whitespace-nowrap">Mar 2025 - Present</span>
              </div>
              <ul className="text-sm text-fg-muted space-y-1.5 ml-4 list-disc">
                <li>Architected a full-stack mobile platform (Flutter/Dart, Node.js/TypeScript) with 114 Cloud Functions on GCP (109 API endpoints, 5 background jobs), multi-bucket Cloud Storage, and signed-URL media pipelines. Incubated through the LAUNCH Pre-Accelerator and Zell Lurie Institute at the University of Michigan.</li>
                <li>Designed a zero-knowledge encryption system (X25519 ECDH, AES-256-GCM, HMAC-SHA256 blind indexing, Argon2id) with per-family key hierarchies and secure key rotation.</li>
                <li>Built Terraform IaC across dev/staging/prod, CI/CD via GitHub Actions, 1,849 automated tests (1,070 unit, 250 widget, 88 API, 87 integration), and two custom MCP servers for AI-assisted development with Claude Code.</li>
              </ul>
            </div>

            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <p className="font-semibold">Full Stack Developer / Database Developer</p>
                  <p className="text-sm text-fg-muted">IFE Americas, Brighton, MI</p>
                </div>
                <span className="text-sm text-fg-subtle whitespace-nowrap">May 2023 - Aug 2024</span>
              </div>
              <ul className="text-sm text-fg-muted space-y-1.5 ml-4 list-disc">
                <li>Built an automated email pipeline (Python, Flask, SMTP, SQL Server) and an internal lead-management tool in SQL Server integrated with the company CRM.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Projects" titleLink="/projects">
          <div className="space-y-6">
            <ProjectItem
              name="Crossword Creator"
              projectHref="/projects/crossword-creator"
              tech="Next.js, TypeScript, Tailwind, Vercel, Redis, Web Workers"
              link="https://crossword.williamward.dev"
              linkText="crossword.williamward.dev"
            >
              Wordlist-first crossword generator with a constraint-satisfaction engine, AC-3 arc consistency,
              and three placement strategies. Adjacency-aware validation checks perpendicular runs against an
              English bigram table. Web Workers for parallel solving.
            </ProjectItem>

            <ProjectItem
              name="PufferPhish"
              projectHref="/projects/pufferphish"
              tech="TypeScript, React, Chrome Extension, AWS Lambda, Python, ONNX, PostgreSQL"
              badge="Senior Capstone"
            >
              ML-powered Chrome extension for real-time phishing detection. Combines a CodeBERT ONNX classifier
              with a rule-based engine (URL structure, domain reputation, page content). Monorepo with 5 packages
              deployed on AWS CDK.
            </ProjectItem>

            <ProjectItem
              name="CivicHousing"
              projectHref="/projects/civic-housing"
              tech="Next.js, TypeScript, Framer Motion, Leaflet"
              badge="Google Hackathon"
            >
              Housing intake wizard scoring 76 real Detroit listings by household needs, with an interactive map
              and a Top Trading Cycles allocation simulation. Built in one day.
            </ProjectItem>
          </div>
        </Section>

        <Section title="Technical Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { cat: "Languages", items: "Python, TypeScript/JavaScript, C/C++, Dart, SQL, Java, Bash" },
              { cat: "Frameworks", items: "React, Flutter, Next.js, Node.js, Express.js, Flask, Tailwind CSS" },
              { cat: "Cloud & Data", items: "GCP, AWS, Terraform, Docker, GitHub Actions, Firestore, PostgreSQL, MongoDB, Redis" },
              { cat: "Security & AI", items: "X25519 ECDH, AES-256-GCM, Argon2id, Claude Code, MCP server design, agentic workflows" },
            ].map((row) => (
              <div key={row.cat}>
                <p className="text-sm font-semibold">{row.cat}</p>
                <p className="text-sm text-fg-muted">{row.items}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, titleLink, children }: { title: string; titleLink?: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-border">
        <h2 className="text-sm font-mono text-fg-subtle uppercase tracking-wider">
          {title}
        </h2>
        {titleLink && (
          <Link href={titleLink} className="flex items-center gap-1 text-xs text-accent hover:underline">
            View all <ArrowUpRight size={12} />
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

function ProjectItem({
  name,
  projectHref,
  tech,
  link,
  linkText,
  badge,
  children,
}: {
  name: string;
  projectHref?: string;
  tech: string;
  link?: string;
  linkText?: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        {projectHref ? (
          <Link href={projectHref} className="font-semibold text-accent hover:underline flex items-center gap-1">
            {name} <ArrowUpRight size={14} />
          </Link>
        ) : (
          <p className="font-semibold">{name}</p>
        )}
        {badge && (
          <span className="text-xs px-2 py-0.5 rounded bg-accent/10 text-accent font-medium">
            {badge}
          </span>
        )}
      </div>
      <p className="text-xs text-fg-subtle mb-1">{tech}</p>
      <p className="text-sm text-fg-muted">
        {children}
        {link && (
          <>
            {" "}
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              {linkText}
            </a>
          </>
        )}
      </p>
    </div>
  );
}
