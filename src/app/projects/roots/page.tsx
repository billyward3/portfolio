import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Roots App",
  description: "Private family media sharing platform with 114 Cloud Functions, Terraform IaC, and end-to-end encryption designed for post-launch.",
};

export default function RootsProject() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-3xl font-bold tracking-tight">Roots App</h1>
          <a
            href="https://rootsapp.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg-muted hover:text-accent transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>
        <p className="text-lg text-fg-muted max-w-2xl leading-relaxed">
          A private family media sharing platform for photos, videos, and
          prompts. Families create groups, invite members, and share content
          in a feed designed for close-knit use, not public broadcasting.
        </p>
        <p className="text-sm text-fg-subtle mt-3">
          Technical Lead & Co-Founder, March 2025 to Present. Sole engineer across architecture, backend, frontend, infrastructure, and testing.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {[
          { value: "114", label: "Cloud Functions" },
          { value: "1,849", label: "Automated Tests" },
          { value: "75", label: "Compound Indexes" },
          { value: "3", label: "Terraform Environments" },
        ].map((s) => (
          <div key={s.label} className="bg-card-bg border border-border rounded-lg p-4">
            <p className="text-2xl font-bold font-mono text-accent">{s.value}</p>
            <p className="text-sm text-fg-muted mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Architecture */}
      <Section title="Architecture">
        <p className="mb-4">
          Flutter mobile client communicating over HTTPS with Firebase Cloud Functions v2
          on GCP. Firestore for structured data, Cloud Storage for media. Clean
          architecture with BLoC state management and dependency injection via GetIt.
        </p>
        <div className="bg-code-bg border border-border rounded-lg p-5 font-mono text-sm overflow-x-auto mb-4">
          <pre className="text-fg-muted">{`Flutter Client (iOS/Android)
  |
  +-- BLoC state management
  |     +-- Repository interfaces
  |           +-- Services
  |                 +-- ApiClient (HTTP + auth interceptor)
  |
  |------- HTTPS -------|
  |
Firebase Cloud Functions v2 (109 API endpoints, 5 background jobs)
  +-- Auth middleware (Firebase Admin SDK)
  +-- Family access middleware
  +-- Business logic handlers
  |
  +-- Firestore (75 compound indexes)
  +-- Cloud Storage (signed-URL delivery)
  +-- Firebase Auth (email/password, Google, Apple)
  +-- Cloud Scheduler + Cloud Tasks`}</pre>
        </div>
      </Section>

      {/* Cryptosystem */}
      <Section title="End-to-End Encryption (Planned)">
        <p className="mb-4">
          A zero-knowledge encryption layer is fully designed and will be integrated after
          the initial launch. The entire application architecture (API contracts, data
          models, and client-side service layers) was built from the start to support it.
          Every API endpoint has both encrypted and plaintext variants. Firestore documents
          include fields for wrapped keys, epoch references, and encrypted metadata. The
          client{"'"}s repository layer abstracts encryption behind interfaces so the
          cryptographic layer activates without a rewrite. Shipping the product first
          validates core assumptions before adding protocol-level complexity.
        </p>
        <p className="mb-4">
          The central problem is member revocation. A single shared family key would
          require re-encrypting all stored media when someone leaves. Epoch-based keys
          solve this: on member removal, a new epoch key is generated and wrapped
          individually for each remaining member via X25519. Old epochs stay readable
          for historical content but can{"'"}t decrypt anything new. Posts are searchable
          via HMAC-SHA256 blind indexes computed client-side, so the server executes
          queries without seeing plaintext.
        </p>
        <p className="mb-4">
          The protocol combines three proven systems: MLS (RFC 9420) for group key
          management, Signal{"'"}s Double Ratchet for forward-secret messaging, and
          Proton{"'"}s envelope model for media storage, adapted for multi-family group
          access patterns.
        </p>

        <h3 className="font-semibold mb-2">Three-Tier Architecture</h3>
        <div className="bg-code-bg border border-border rounded-lg p-5 font-mono text-sm overflow-x-auto mb-4">
          <pre className="text-fg-muted">{`Layer 1: Family Group Keys (MLS-inspired)
  Epoch-based group keys via simplified TreeKEM
  O(log n) key updates on member join/leave
  Forward secrecy across key rotations

Layer 2: Private Messaging (Double Ratchet)
  Per-conversation root key > sending/receiving chains
  Automatic key deletion after use (self-healing)
  Out-of-order message key storage

Layer 3: Media Encryption (Proton-inspired)
  Unique AES-256-GCM file key per photo/video
  Encrypted metadata (filenames, EXIF, timestamps)
  Granular share scopes: family, subset, or private`}</pre>
        </div>

        <h3 className="font-semibold mb-2">Key Hierarchy & Bundles</h3>
        <div className="bg-code-bg border border-border rounded-lg p-5 font-mono text-sm overflow-x-auto mb-4">
          <pre className="text-fg-muted">{`User Master Key (Argon2id: 3 iterations, 64 MB, 256-bit output)
  |
  +-- Identity Key Pair (Ed25519, signs all other keys)
  |
  +-- Device Keys (X25519, rotated every 90 days)
  |     +-- Pre-key bundle (uploaded to server for async setup)
  |
  +-- Family Epoch Keys (one per family group, per epoch)
  |     Wrapped per-member via X25519 ECDH key agreement
  |     Epoch increments on every member add/remove
  |     Old epochs retained read-only for historical content
  |
  +-- File Keys (unique random AES-256-GCM per media item)
  |     Wrapped with current Family Epoch Key
  |     Encrypts: content + metadata + all processed variants
  |
  +-- Message Chain Keys (Double Ratchet per conversation)
        Root key > chain key > message key (deleted after use)
        DH ratchet step on each reply exchange`}</pre>
        </div>
      </Section>

      {/* MCP Servers */}
      <Section title="MCP Servers" id="mcp-servers">
        <p className="mb-4">
          Two custom Model Context Protocol servers and eight integrated third-party
          servers that extend Claude Code with structured access to the project's
          API contracts, product requirements, and development tools.
        </p>

        <p className="text-xs font-mono text-fg-subtle uppercase tracking-wider mb-3">Custom</p>

        <h3 className="font-semibold mb-2">API Documentation Server</h3>
        <p className="mb-4 text-fg-muted">
          Four tools: list/get API schemas, list/get endpoint definitions. Loads Swagger
          documentation from the backend and exposes it as structured tools. The AI agent
          queries real API specs during development instead of relying on its own assumptions.
        </p>

        <h3 className="font-semibold mb-2">Epics Management Server</h3>
        <p className="mb-4 text-fg-muted">
          Four tools plus two resources: list/search epics and user stories, browse the
          epic catalog by module, view requirement-to-story mappings. Parses markdown
          specification files and caches results in memory.
        </p>

        <p className="text-fg-muted mb-6">
          Both servers follow a dual-mode pattern (HTTP standalone or stdio for MCP-hub
          integration). They give the AI agent a structured interface to the project's
          actual specifications, reducing drift between what the AI thinks the API does
          and what it actually does.
        </p>

        <p className="text-xs font-mono text-fg-subtle uppercase tracking-wider mb-3">Integrated</p>
        <ul className="space-y-2 text-fg-muted">
          <li><span className="text-fg font-medium">Context7</span>: Pulls current library and framework documentation into the agent context so it works from real API references, not training data.</li>
          <li><span className="text-fg font-medium">Sequential Thinking</span>: Structured multi-step reasoning for complex debugging and architectural decisions.</li>
          <li><span className="text-fg font-medium">Figma</span>: Reads design files directly so the agent can implement UI from actual mockups.</li>
          <li><span className="text-fg font-medium">Playwright</span>: Browser automation for end-to-end testing and visual validation from within the agent loop.</li>
          <li><span className="text-fg font-medium">Magic (21st.dev)</span>: Generates production-ready UI components from a curated pattern library.</li>
          <li><span className="text-fg font-medium">Morphllm</span>: Token-optimized bulk code transformations across multiple files.</li>
          <li><span className="text-fg font-medium">Serena</span>: Semantic code navigation with LSP integration and persistent project memory across sessions.</li>
          <li><span className="text-fg font-medium"><a href="https://github.com/SuperClaude-Org/SuperClaude_Framework" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">SuperClaude Framework</a></span>: Behavioral framework that configures Claude Code with structured modes, flags, and rules for consistent agentic workflows.</li>
        </ul>
      </Section>

      {/* Infrastructure */}
      <Section title="Infrastructure">
        <h3 className="font-semibold mb-2">Terraform IaC</h3>
        <p className="mb-4 text-fg-muted">
          Three Firebase environments (dev/staging/prod) managed by Terraform with
          modular composition. Five modules (Storage, Firestore, IAM, KMS, Project APIs)
          are composed per-environment with shared variables. State stored in GCS with
          per-environment isolation.
        </p>
        <div className="bg-code-bg border border-border rounded-lg p-5 font-mono text-sm overflow-x-auto mb-4">
          <pre className="text-fg-muted">{`roots-infra/
  environments/
  |  dev/       main.tf, providers.tf, variables.tf
  |  staging/   main.tf, providers.tf, variables.tf
  |  prod/      main.tf, providers.tf, variables.tf
  modules/
     storage/     5 buckets, lifecycle policies, CORS
     firestore/   database, security rules, indexes
     iam/         CI/CD service account, role bindings
     kms/         encryption key rings (prod)
     project-apis/  GCP API enablement`}</pre>
        </div>

        <h3 className="font-semibold mb-2">CI/CD</h3>
        <p className="mb-4 text-fg-muted">
          Seven GitHub Actions workflows across two repos. The Flutter CI pipeline runs
          analysis, formatting checks, and four parallel test categories (unit, widget,
          integration, API). Backend deploys are a reusable workflow that checks out the
          infra repo and runs {"`firebase deploy`"} against the target environment using
          per-environment service account keys. iOS builds use Fastlane with match for
          code signing and TestFlight distribution.
        </p>
        <div className="bg-code-bg border border-border rounded-lg p-5 font-mono text-sm overflow-x-auto mb-4">
          <pre className="text-fg-muted">{`Push to main  ──>  CI (analyze + test matrix)  ──>  Deploy dev
Tag rc-v*     ──>  Build iOS (staging)  ──>  TestFlight
Tag v*        ──>  Build iOS (prod)     ──>  App Store

Backend deploy (reusable):
  checkout roots-infra  ──>  npm ci  ──>  firebase deploy
  (functions, firestore rules/indexes, storage rules)`}</pre>
        </div>

        <h3 className="font-semibold mb-2">Security</h3>
        <ul className="space-y-2 text-fg-muted">
          <li>CI/CD service account per environment with least-privilege IAM (10 scoped roles)</li>
          <li>KMS encryption key rings configurable per environment, enabled in prod</li>
          <li>Uniform bucket-level access with public access prevention enforced on all buckets</li>
          <li>Flutter flavors with separate bundle IDs, Firebase configs, and signing profiles per environment</li>
        </ul>
      </Section>

      {/* Tech Stack */}
      <Section title="Tech Stack">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { category: "Frontend", items: "Flutter, Dart, BLoC" },
            { category: "Backend", items: "Node.js, TypeScript, Cloud Functions v2" },
            { category: "Database", items: "Firestore, 75 compound indexes, signed-URL media delivery" },
            { category: "Storage", items: "Cloud Storage, lifecycle tiering, upload pipeline" },
            { category: "Infrastructure", items: "Terraform, GitHub Actions, Docker" },
            { category: "Security", items: "Firebase Auth, IAM least-privilege, E2EE designed (planned)" },
            { category: "Auth", items: "Firebase Auth (email, Google, Apple OAuth)" },
            { category: "AI Tooling", items: "Claude Code, custom MCP servers (2)" },
          ].map((row) => (
            <div key={row.category} className="bg-card-bg border border-border rounded-lg p-4">
              <p className="text-sm font-semibold mb-1">{row.category}</p>
              <p className="text-sm text-fg-muted">{row.items}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

function Section({ title, id, children }: { title: string; id?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-xl font-bold tracking-tight mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      <div className="text-sm leading-relaxed">{children}</div>
    </section>
  );
}
