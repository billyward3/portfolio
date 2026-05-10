import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const projects = [
  {
    title: "Roots App",
    description: "Private family media platform with zero-knowledge encryption, 133 serverless API endpoints, and a custom cryptographic key hierarchy designed from Signal and Proton protocols.",
    tags: ["TypeScript", "Node.js", "GCP", "Flutter", "Terraform", "Cryptography"],
    href: "/projects/roots",
    status: "Production",
  },
  {
    title: "Crossword Creator",
    description: "Interactive crossword puzzle builder and solver.",
    tags: ["In Progress"],
    href: "/projects/crossword-creator",
    status: "In Progress",
  },
  {
    title: "Public Housing Tool",
    description: "Hackathon project for improving access to public housing resources.",
    tags: ["Hackathon"],
    href: "/projects/housing-tool",
    status: "Complete",
  },
  {
    title: "NES Emulator",
    description: "Nintendo Entertainment System emulator.",
    tags: ["Emulation"],
    href: "/projects/nes-emulator",
    status: "In Progress",
  },
  {
    title: "Phishing Protection",
    description: "Browser extension and web app extending phishing-detection heuristics with a machine-learning classifier.",
    tags: ["React", "TypeScript", "AWS", "ML"],
    href: "#",
    status: "Academic",
  },
  {
    title: "Scalable Search Engine",
    description: "Distributed search engine with MapReduce-based parallel processing and fault tolerance.",
    tags: ["C++", "MapReduce", "Hadoop"],
    href: "#",
    status: "Academic",
  },
  {
    title: "OS Kernel Libraries",
    description: "Thread library, virtual memory pager, and network file server with custom scheduling.",
    tags: ["C", "Assembly"],
    href: "#",
    status: "Academic",
  },
];

const statusColors: Record<string, string> = {
  "Production": "text-green-500",
  "In Progress": "text-amber-500",
  "Complete": "text-accent",
  "Academic": "text-fg-subtle",
};

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Projects</h1>
      <p className="text-fg-muted mb-12">
        A mix of production systems, side projects, and academic work.
      </p>

      <div className="space-y-4">
        {projects.map((project) => {
          const isLink = project.href !== "#";
          const card = (
            <div
              key={project.title}
              className={`bg-card-bg border border-border rounded-lg p-5 transition-colors ${
                isLink ? "hover:border-accent/40 group" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className={`font-semibold ${isLink ? "group-hover:text-accent transition-colors" : ""}`}>
                  {project.title}
                </h2>
                <span className={`text-xs font-mono whitespace-nowrap ${statusColors[project.status] || "text-fg-subtle"}`}>
                  {project.status}
                </span>
              </div>
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
            </div>
          );

          if (isLink) {
            return <Link key={project.title} href={project.href} className="block">{card}</Link>;
          }
          return card;
        })}
      </div>
    </div>
  );
}
