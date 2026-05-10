import type { Metadata } from "next";
import { Download } from "lucide-react";

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
                Web Systems, Data Structures & Algorithms, Machine Learning, Quantum Computing, Linear Algebra
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
                  <p className="font-semibold">Technical Lead & Co-Founder</p>
                  <p className="text-sm text-fg-muted">Roots App, Ann Arbor, MI</p>
                </div>
                <span className="text-sm text-fg-subtle whitespace-nowrap">Mar 2025 - Present</span>
              </div>
              <ul className="text-sm text-fg-muted space-y-1.5 ml-4 list-disc">
                <li>Solo-built a full-stack platform (Flutter/Dart frontend, Node.js/TypeScript backend) with 133 Cloud Functions on GCP, multi-bucket Cloud Storage, and signed-URL media pipelines.</li>
                <li>Designed a zero-knowledge encryption system (X25519 ECDH, AES-256-GCM) with per-family key hierarchies, blind indexing for searchable encryption, and secure key rotation.</li>
                <li>Built Terraform IaC across dev/staging/prod, CI/CD via GitHub Actions, and 1,494 automated tests.</li>
                <li>Built two custom MCP servers for Claude Code, exposing API documentation and product requirements as structured tools for AI-assisted development.</li>
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
                <li>Built an automated email pipeline with Python, Flask, SMTP, and SQL Server.</li>
                <li>Created an internal lead-management tool in SQL Server integrated with the company CRM.</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Technical Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { cat: "Languages", items: "Python, TypeScript/JavaScript, C/C++, Dart, SQL, Java, Bash" },
              { cat: "Frontend", items: "React, Flutter, Node.js, Express.js, HTML5, CSS3" },
              { cat: "Backend & Data", items: "Firestore, PostgreSQL, MongoDB, Redis, Flask, REST APIs" },
              { cat: "Cloud & DevOps", items: "GCP, AWS, Terraform, Docker, CI/CD, GitHub Actions" },
              { cat: "Security", items: "X25519 ECDH, AES-256-GCM, HMAC-SHA256, Argon2id" },
              { cat: "AI Tooling", items: "Claude Code, custom MCP servers, agentic workflows" },
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-sm font-mono text-fg-subtle uppercase tracking-wider mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      {children}
    </section>
  );
}
