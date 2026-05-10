import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Roots App",
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
          A private family media sharing platform where the server is explicitly
          untrusted. All user content is encrypted client-side before upload,
          and the server stores and routes data it cannot decrypt.
        </p>
        <p className="text-sm text-fg-subtle mt-3">
          Technical Lead & Co-Founder, March 2025 to Present. Solo-built the entire technical stack.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
        {[
          { value: "133", label: "Cloud Functions" },
          { value: "1,494", label: "Automated Tests" },
          { value: "47+", label: "Firestore Collections" },
          { value: "8", label: "Storage Buckets" },
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
          on GCP. Firestore for structured data, Cloud Storage for encrypted media. Clean
          architecture with BLoC state management, dependency injection via GetIt (76
          registrations), and 13 feature modules.
        </p>
        <div className="bg-code-bg border border-border rounded-lg p-5 font-mono text-sm overflow-x-auto mb-4">
          <pre className="text-fg-muted">{`Flutter Client (iOS/Android)
  |
  +-- BLoC (13 state managers)
  |     +-- Repositories (11 abstract interfaces)
  |           +-- Services (25+ API services)
  |                 +-- ApiClient (HTTP + auth interceptor)
  |
  |------- HTTPS -------|
  |
Firebase Cloud Functions v2 (133 functions)
  +-- Auth middleware (Firebase Admin SDK)
  +-- Family access middleware
  +-- Business logic handlers
  |
  +-- Firestore (47+ collections)
  +-- Cloud Storage (8 buckets, signed URLs)
  +-- Firebase Auth (email/password, Google, Apple)
  +-- Cloud Scheduler + Cloud Tasks`}</pre>
        </div>
      </Section>

      {/* Cryptosystem */}
      <Section title="Zero-Knowledge Encryption System">
        <p className="mb-4">
          The core technical challenge: families need to share photos and videos privately,
          with the guarantee that even the server operator cannot access their content. This
          required designing a custom cryptographic system that handles multi-user access,
          key distribution, and member revocation without server-side plaintext access.
        </p>

        <h3 className="font-semibold mb-2">Threat Model</h3>
        <p className="mb-4 text-fg-muted">
          The server is explicitly untrusted for content access. It can validate family
          membership, serve encrypted blobs, execute queries against blind indexes, and
          rate-limit key operations. It cannot read content, derive keys, search plaintext,
          or impersonate users (private keys never leave the client).
        </p>

        <h3 className="font-semibold mb-2">Key Hierarchy</h3>
        <div className="bg-code-bg border border-border rounded-lg p-5 font-mono text-sm overflow-x-auto mb-4">
          <pre className="text-fg-muted">{`User Master Key (Argon2id from password)
  |
  +-- Family Epoch Keys (rotate on member removal)
  |     Wrapped per-member via X25519 ECDH
  |     Used to wrap: Post Keys, Profile Keys, Folder Keys
  |
  +-- Post Keys (unique per post, random AES-256)
        Wrapped with Family Epoch Key
        Encrypts: metadata + all media variants`}</pre>
        </div>

        <h3 className="font-semibold mb-2">The Revocation Problem</h3>
        <p className="mb-4 text-fg-muted">
          The obvious approach (single shared key per family) breaks on member revocation.
          Removing a member would require re-encrypting every piece of media in the family
          vault. With per-family key hierarchies and individual user key wrapping, revocation
          only requires re-wrapping the family key for remaining members. This tripled the
          implementation complexity but made the system viable for real use.
        </p>

        <h3 className="font-semibold mb-2">Searchable Encryption</h3>
        <p className="mb-4 text-fg-muted">
          Posts are searchable by tag, type, and location without the server seeing plaintext.
          HMAC-SHA256 blind indexes are computed client-side and stored per-family context.
          The server matches on hash values during queries, never seeing the actual search terms.
        </p>

        <h3 className="font-semibold mb-2">Design Influences</h3>
        <p className="text-fg-muted">
          Async key distribution from Signal (new members receive historical keys from an
          existing member, not the server). Envelope encryption from Proton (content
          encrypted with a random DEK, DEK wrapped with a KEK, multiple wrapped copies per
          access context). The multi-family key isolation and HMAC-based blind indexing are
          novel to Roots, as neither Signal nor Proton support these patterns.
        </p>
      </Section>

      {/* MCP Servers */}
      <Section title="MCP Servers" id="mcp-servers">
        <p className="mb-4">
          Two custom Model Context Protocol servers built to give Claude Code a single
          source of truth for the project's API contracts and product requirements.
        </p>

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

        <h3 className="font-semibold mb-2">Why This Matters</h3>
        <p className="text-fg-muted">
          Both servers follow a dual-mode pattern (HTTP standalone or stdio for MCP-hub
          integration). They give the AI agent a structured interface to the project's
          actual specifications, reducing drift between what the AI thinks the API does
          and what it actually does. This is the same class of tooling that powers
          agentic coding platforms at scale.
        </p>
      </Section>

      {/* Infrastructure */}
      <Section title="Infrastructure">
        <p className="mb-4">
          Terraform manages three Firebase environments (dev/staging/prod) with modular
          IaC for Firebase services, Firestore, Storage, and Cloud Functions. State stored
          in GCS. GitHub Actions handles CI with test automation and Terraform plan/apply.
        </p>
        <ul className="space-y-2 text-fg-muted text-sm">
          <li>Per-function service accounts with least-privilege IAM</li>
          <li>Storage lifecycle tiering (STANDARD to NEARLINE to COLDLINE)</li>
          <li>KMS encryption support (configurable, enabled in prod)</li>
          <li>Security scanning with Trivy and Checkov (weekly + PR scans)</li>
          <li>CI pipeline: analyze, unit tests (parallel by layer), integration tests, widget tests, E2E on iOS/Android simulators</li>
        </ul>
      </Section>

      {/* Tech Stack */}
      <Section title="Tech Stack">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { category: "Frontend", items: "Flutter, Dart, BLoC" },
            { category: "Backend", items: "Node.js, TypeScript, Cloud Functions v2" },
            { category: "Database", items: "Firestore, 47+ collections, 15+ compound indexes" },
            { category: "Storage", items: "Cloud Storage, 8 buckets, signed-URL delivery" },
            { category: "Infrastructure", items: "Terraform, GitHub Actions, Docker" },
            { category: "Security", items: "X25519 ECDH, AES-256-GCM, HMAC-SHA256, Argon2id" },
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
