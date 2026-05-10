import type { Metadata } from "next";

export const metadata: Metadata = { title: "Public Housing Tool" };

export default function HousingTool() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      <span className="text-xs font-mono text-accent uppercase tracking-wider">Hackathon</span>
      <h1 className="text-3xl font-bold tracking-tight mt-2 mb-4">Public Housing Tool</h1>
      <p className="text-lg text-fg-muted max-w-2xl leading-relaxed mb-8">
        Hackathon project for improving access to public housing resources. More details coming soon.
      </p>
    </div>
  );
}
