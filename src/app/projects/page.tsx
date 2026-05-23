import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Personal projects, team work, and selected coursework from University of Michigan CS.",
};

const projects = [
  {
    title: "Roots App",
    description:
      "Private family media sharing platform with 114 serverless Cloud Functions, Terraform IaC across three environments, and an end-to-end encryption system designed for post-launch.",
    tags: [
      "TypeScript",
      "Node.js",
      "GCP",
      "Flutter",
      "Terraform",
      "Cryptography",
    ],
    href: "/projects/roots",
    status: "Production",
  },
  {
    title: "Crossword Creator",
    description:
      "Wordlist-first crossword generator and solver. A CSP engine packs your words into a real-style grid, with three placement strategies and a NYT-style solver UI.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel", "Redis"],
    href: "/projects/crossword-creator",
    status: "Production",
  },
  {
    title: "CivicHousing",
    description:
      "Accessible public housing intake wizard paired with a TTC allocation simulation. Scores 76 Detroit listings against applicant profiles and demonstrates how coordinated exchange improves outcomes over FIFO.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Leaflet"],
    href: "/projects/civic-housing",
    status: "Complete",
  },
  {
    title: "PufferPhish",
    description:
      "Chrome extension for real-time phishing detection using a CodeBERT classifier and rule-based engine. Blocks dangerous pages with a full-page warning and tracks protection history in a web dashboard.",
    tags: [
      "TypeScript",
      "React",
      "Chrome Extension API",
      "AWS Lambda",
      "Python",
      "ONNX",
      "PostgreSQL",
    ],
    href: "/projects/pufferphish",
    status: "Prototyped",
  },
  {
    title: "NES Emulator",
    description:
      "Nintendo Entertainment System emulator. More info coming soon.",
    tags: ["C++"],
    status: "In Progress",
  },
];

const coursework: CourseGroup[] = [
  {
    course: "Operating Systems",
    projects: [
      {
        title: "Disk Scheduler",
        description:
          "Concurrent disk I/O scheduler where multiple requester threads enqueue disk reads and a servicer thread processes them using shortest seek time first ordering. A producer-consumer problem with bounded queue management.",
        tags: ["C++", "Pthreads"],
      },
      {
        title: "Thread Library",
        description:
          "User-level thread library supporting thread creation, context switching, and synchronization primitives (mutexes, condition variables). Handles both single-CPU and multiprocessor execution with interrupt-based preemption.",
        tags: ["C++", "x86 Assembly"],
      },
      {
        title: "Virtual Memory Pager",
        description:
          "Kernel pager managing virtual address spaces for multiple processes. Handles page faults, clock-based page replacement, copy-on-write fork semantics, and file-backed page mappings with swap space management.",
        tags: ["C++"],
      },
      {
        title: "Network File Server",
        description:
          "Multi-threaded file server processing client requests over TCP with a hierarchical file system. Handles concurrent access with reader/writer locks, crash consistency, and untrusted input validation.",
        tags: ["C++", "TCP Sockets"],
      },
    ],
  },
  {
    course: "Web Systems",
    projects: [
      {
        title: "Static Site Generator",
        description:
          "Python CLI tool that converts HTML templates and JSON data into a complete static website. Used to generate an Instagram clone with user profiles, posts, and follower relationships.",
        tags: ["Python", "Jinja2", "HTML"],
      },
      {
        title: "Server-Side Dynamic Pages",
        description:
          "Database-backed Instagram clone with server-side rendering using Flask. Supports user authentication, post creation, commenting, following, password hashing with salt, and CSRF protection.",
        tags: ["Python", "Flask", "SQLite", "HTML/CSS"],
      },
      {
        title: "Client-Side Dynamic Pages",
        description:
          "Converted the Instagram clone to client-side rendering with a React frontend fetching data from a REST API. Features liking, commenting, and infinite scroll, all without page reloads.",
        tags: ["React", "JavaScript", "REST API"],
      },
      {
        title: "MapReduce Framework",
        description:
          "Distributed MapReduce framework inspired by Google's original paper. A Manager coordinates work across multiple Workers executing map and reduce tasks in parallel, with fault tolerance for worker failures.",
        tags: ["Python", "TCP/UDP Sockets", "Multithreading"],
      },
    ],
  },
  {
    course: "Computer Networks",
    projects: [
      {
        title: "Network Measurement Tool",
        description:
          "iPerf-style measurement tool built with raw socket programming. Measures throughput and latency across custom network topologies in Mininet with TCP and UDP support.",
        tags: ["Python", "Socket Programming", "Mininet"],
      },
      {
        title: "Adaptive Video Streaming Proxy",
        description:
          "HTTP proxy server for DASH MPEG adaptive bitrate video streaming. Implements load balancing across multiple content servers and client bandwidth estimation for quality selection.",
        tags: ["Python", "HTTP", "DASH"],
      },
      {
        title: "Reliable Transport Protocol",
        description:
          "Custom reliable transport protocol (WTP) built on top of UDP. Implements sequence numbers, CRC checksums, cumulative acknowledgments, and handles packet loss, corruption, duplication, and reordering.",
        tags: ["C", "UDP Sockets"],
      },
      {
        title: "Static Router",
        description:
          "IP router that processes raw Ethernet frames and forwards packets to the correct outgoing interface using a static routing table. Handles ARP resolution, ICMP error messages, and routes real traffic to HTTP servers in a Mininet topology.",
        tags: ["C", "Raw Sockets", "Mininet"],
      },
    ],
  },
  {
    course: "Computer Security",
    projects: [
      {
        title: "Cryptographic Attacks",
        description:
          "Implemented padding oracle attacks, Bleichenbacher RSA attacks, and SHA-256 length extension attacks against vulnerable cryptographic systems.",
        tags: ["Python"],
      },
      {
        title: "Web Exploitation",
        description:
          "Developed proof-of-concept exploits for CSRF, SQL injection, and XSS vulnerabilities against a deliberately vulnerable web application.",
        tags: ["JavaScript", "SQL", "HTML"],
      },
      {
        title: "Binary Exploitation",
        description:
          "Wrote shellcode and buffer overflow exploits against vulnerable C programs, including techniques for bypassing address space layout randomization.",
        tags: ["C", "x86 Assembly", "GDB"],
      },
      {
        title: "Digital Forensics",
        description:
          "Conducted a forensic investigation involving AES/RSA cryptanalysis, email evidence analysis, and recovery of encrypted artifacts.",
        tags: ["Python", "OpenSSL"],
      },
    ],
  },
  {
    course: "Data Structures and Algorithms",
    projects: [
      {
        title: "Graph Search and Route Tracing",
        description:
          "BFS and DFS search through 2D/3D environments with route tracing and path reconstruction. Applied to word morphing, cartography, and puzzle-solving contexts.",
        tags: ["C++"],
      },
      {
        title: "Priority Queues and Streaming Algorithms",
        description:
          "Implemented four templated priority queue variants (unordered, sorted, binary heap, pairing heap) using inheritance and interface programming. Used in event-driven simulations with streaming data.",
        tags: ["C++", "Templates"],
      },
      {
        title: "Hash Tables and Data Composition",
        description:
          "Built hash table-backed data structures for logfile management and a custom database query language, focusing on composition of larger systems from smaller components.",
        tags: ["C++"],
      },
      {
        title: "Optimization Algorithms",
        description:
          "Implemented Traveling Salesperson and knapsack-style optimization algorithms including MST heuristics, fast approximations, and branch-and-bound exact solvers on datasets up to 10,000 vertices.",
        tags: ["C++"],
      },
    ],
  },
  {
    course: "Computer Organization",
    projects: [
      {
        title: "Assembler and Simulator",
        description:
          "Two-pass assembler translating LC-2K assembly to machine code, plus a behavioral simulator executing programs through fetch-decode-execute. Includes a shift-and-add multiplication program written in assembly.",
        tags: ["C", "LC-2K Assembly"],
      },
      {
        title: "Linker",
        description:
          "Extended the assembler to emit object files with symbol tables and relocation entries, then built a linker that merges multiple object files into a single executable with resolved external references and patched addresses.",
        tags: ["C"],
      },
      {
        title: "Pipelined Processor Simulator",
        description:
          "Cycle-accurate simulator for a 5-stage pipelined processor (IF/ID/EX/MEM/WB). Handles data forwarding, load-use hazard stalls, and predict-not-taken branch resolution.",
        tags: ["C"],
      },
      {
        title: "Cache Simulator",
        description:
          "Configurable set-associative cache simulator with variable block size, associativity, and set count. Implements write-back with allocate-on-write, LRU replacement, and dirty block management.",
        tags: ["C"],
      },
    ],
  },
  {
    course: "Machine Learning",
    projects: [
      {
        title: "Clinical Mortality Prediction",
        description:
          "Predicted ICU patient mortality from 48-hour clinical time series data. Built feature engineering pipelines, trained logistic regression and kernel ridge regression models, and evaluated with stratified cross-validation and AUROC.",
        tags: ["Python", "scikit-learn", "NumPy", "Pandas"],
      },
      {
        title: "Image Classification with CNNs and Vision Transformers",
        description:
          "Trained convolutional neural networks and Vision Transformers in PyTorch for image classification. Applied transfer learning with selective layer freezing, early stopping, and a challenge competition for best accuracy through architecture and hyperparameter tuning.",
        tags: ["Python", "PyTorch"],
      },
    ],
  },
  {
    course: "Quantum Computing",
    projects: [
      {
        title: "Quantum Circuit Simulator",
        description:
          "Built a quantum circuit simulator from scratch supporting Hadamard, CNOT, and arbitrary single-qubit gates. Operates on state vectors with tensor product expansion and simulates measurement with probabilistic sampling.",
        tags: ["Python", "NumPy"],
      },
      {
        title: "Grover's Search Algorithm",
        description:
          "Implemented Grover's algorithm in Qiskit to solve boolean satisfiability (SAT) problems. Constructed phase and bitflip oracles from CNF formulas and applied iterative amplitude amplification with diffuser circuits.",
        tags: ["Python", "Qiskit"],
      },
      {
        title: "Quantum Error Correction",
        description:
          "Implemented the 7-qubit Steane code for quantum error correction, magic T-state preparation, and even-weight superposition state construction for fault-tolerant quantum computation.",
        tags: ["Python", "Qiskit"],
      },
    ],
  },
];

interface CourseGroup {
  course: string;
  projects: { title: string; description: string; tags: string[] }[];
}

const statusColors: Record<string, string> = {
  Production: "text-green-500",
  "In Progress": "text-amber-500",
  Complete: "text-accent",
};

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 sm:py-24">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Projects</h1>
      <p className="text-fg-muted mb-12">
        A mix of production systems, side projects, and academic work.
      </p>

      {/* Personal / team projects */}
      <div className="space-y-4 mb-20">
        {projects.map((project) => {
          const card = (
            <div
              key={project.title}
              className={`bg-card-bg border border-border rounded-lg p-5 transition-colors ${
                project.href ? "hover:border-accent/40 group" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2
                  className={`font-semibold ${project.href ? "group-hover:text-accent transition-colors" : ""}`}
                >
                  {project.title}
                </h2>
                <span
                  className={`text-xs font-mono whitespace-nowrap ${statusColors[project.status] || "text-fg-subtle"}`}
                >
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-fg-muted mb-3 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full bg-bg-secondary text-fg-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );

          if (project.href) {
            return (
              <Link key={project.title} href={project.href} className="block">
                {card}
              </Link>
            );
          }
          return card;
        })}
      </div>

      {/* Coursework */}
      <h2 className="text-sm font-mono text-fg-subtle uppercase tracking-wider mb-6">
        Coursework
      </h2>
      <p className="text-fg-muted mb-8 text-sm">
        Selected projects from University of Michigan CS courses. Source code is
        not public per academic integrity policies.
      </p>

      <div className="space-y-12">
        {coursework.map((group) => (
          <div key={group.course}>
            <h3 className="font-semibold text-lg mb-4">{group.course}</h3>
            <div className="space-y-3">
              {group.projects.map((project) => (
                <div
                  key={project.title}
                  className="bg-card-bg border border-border rounded-lg p-4"
                >
                  <h4 className="font-medium text-sm mb-1">{project.title}</h4>
                  <p className="text-sm text-fg-muted leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-bg-secondary text-fg-subtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
