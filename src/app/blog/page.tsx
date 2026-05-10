import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const posts = [
  {
    title: "How I Designed a Zero-Knowledge Encryption System",
    description: "The threat model, key hierarchy, and tradeoffs behind Roots App's cryptographic architecture. Why single shared keys fail on revocation, and how per-family key hierarchies solve it.",
    date: "Coming soon",
    href: "#",
    tags: ["Cryptography", "Systems Design"],
  },
  {
    title: "Building Custom MCP Servers for Claude Code",
    description: "Why I built two Model Context Protocol servers to give my AI coding agent a single source of truth, and how it changed the way I develop software.",
    date: "Coming soon",
    href: "#",
    tags: ["AI Tooling", "Developer Experience"],
  },
];

export default function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Blog</h1>
      <p className="text-fg-muted mb-12">
        Technical writeups on things I've built and problems I've solved.
      </p>

      <div className="space-y-6">
        {posts.map((post) => (
          <article
            key={post.title}
            className="bg-card-bg border border-border rounded-lg p-6"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="font-semibold text-lg">{post.title}</h2>
              <span className="text-xs font-mono text-fg-subtle whitespace-nowrap mt-1">
                {post.date}
              </span>
            </div>
            <p className="text-sm text-fg-muted mb-3 leading-relaxed">
              {post.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-bg-secondary text-fg-subtle"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
