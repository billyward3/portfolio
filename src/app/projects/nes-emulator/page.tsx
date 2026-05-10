import type { Metadata } from "next";

export const metadata: Metadata = { title: "NES Emulator" };

export default function NESEmulator() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      <span className="text-xs font-mono text-amber-500 uppercase tracking-wider">In Progress</span>
      <h1 className="text-3xl font-bold tracking-tight mt-2 mb-4">NES Emulator</h1>
      <p className="text-lg text-fg-muted max-w-2xl leading-relaxed mb-8">
        Nintendo Entertainment System emulator. More details coming soon.
      </p>
    </div>
  );
}
