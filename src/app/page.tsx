import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const highlights = [
  { label: "Cloud Functions", value: "133" },
  { label: "Automated Tests", value: "1,494" },
  { label: "Firestore Collections", value: "47+" },
  { label: "Storage Buckets", value: "8" },
];

const featuredProjects = [
  {
    title: "Roots App",
    description: "Private family media platform with zero-knowledge encryption. 133 API endpoints, custom cryptographic key hierarchy, Terraform IaC across three environments.",
    tags: ["TypeScript", "Node.js", "GCP", "Flutter", "Cryptography"],
    href: "/projects/roots",
  },
  {
    title: "MCP Servers",
    description: "Custom Model Context Protocol servers for Claude Code that expose API schemas and product requirements as structured tools for AI-assisted development.",
    tags: ["TypeScript", "MCP", "Claude Code", "Swagger"],
    href: "/projects/roots#mcp-servers",
  },
  {
    title: "Crossword Creator",
    description: "Interactive crossword puzzle builder and solver.",
    tags: ["In Progress"],
    href: "/projects/crossword-creator",
  },
];

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      <section className="mb-20">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Billy Ward
        </h1>
        <p className="text-lg text-fg-muted max-w-2xl mb-6 leading-relaxed">
          Software engineer and technical co-founder. I build full-stack systems,
          design cryptographic protocols, and use agentic AI tooling as my primary
          development workflow. University of Michigan CS, Dec 2025.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/billyward3" target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-fg transition-colors" aria-label="GitHub">
            <GitHubIcon size={20} />
          </a>
          <a href="https://linkedin.com/in/william-ward26" target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-fg transition-colors" aria-label="LinkedIn">
            <LinkedInIcon size={20} />
          </a>
          <a href="mailto:wilward@umich.edu" className="text-fg-muted hover:text-fg transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-sm font-mono text-fg-subtle uppercase tracking-wider mb-6">
          Roots App, by the numbers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div key={item.label} className="bg-card-bg border border-border rounded-lg p-4">
              <p className="text-2xl font-bold font-mono text-accent">{item.value}</p>
              <p className="text-sm text-fg-muted mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-mono text-fg-subtle uppercase tracking-wider">
            Featured Projects
          </h2>
          <Link href="/projects" className="text-sm text-fg-muted hover:text-accent transition-colors flex items-center gap-1">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="space-y-4">
          {featuredProjects.map((project) => (
            <Link key={project.title} href={project.href} className="block bg-card-bg border border-border rounded-lg p-5 hover:border-accent/40 transition-colors group">
              <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-fg-muted mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-bg-secondary text-fg-subtle">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-sm font-mono text-fg-subtle uppercase tracking-wider mb-4">
          Currently
        </h2>
        <p className="text-fg-muted leading-relaxed">
          Looking for new-grad software engineering roles where I can own systems
          end to end and work on hard problems. Interested in AI infrastructure,
          developer tools, applied cryptography, and early-stage startups.
          Open to any US location or remote.
        </p>
      </section>
    </div>
  );
}
