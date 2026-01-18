// app/page.tsx
import Link from "next/link";

const projects = [
  {
    title: "Resume Analyzer",
    description: "Upload a resume PDF → get structured feedback & keyword insights.",
    tags: ["FastAPI", "React", "AWS", "Nginx"],
    liveUrl: "resume-analyzer/",
    githubUrl: "https://github.com/virajsule12/AI-Resume-Analyzer",
    highlights: ["PDF parsing & analysis", "Keyword match scoring"],
  },
  {
    title: "AI Text Analyzer",
    description: "Analyze text with a clean UI and API-first design.",
    tags: ["FastAPI", "Docker", "Swagger"],
    liveUrl: "/ai-text-analyzer/docs/",
    githubUrl: "https://github.com/virajsule12/AI-Text-API",
    highlights: ["LLM-based text analysis", "Deployed with Docker"],
  },
];

const skills = {
  Languages: ["Python", "TypeScript", "SQL"],
  Frameworks: ["FastAPI", "React", "Next.js"],
  Infra: ["AWS", "Nginx", "Docker"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />

      <main className="mx-auto max-w-6xl px-6">
        <Hero />

        <Section id="projects" title="Featured Projects">
          <div className="relative">
            <div
              className="
                flex gap-6 overflow-x-auto pb-4
                snap-x snap-mandatory
                [-ms-overflow-style:none] [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
              "
            >
              {projects.map((p) => (
                <div
                  key={p.title}
                  className="
                    snap-start flex-shrink-0
                    w-[340px] h-[300px]
                    md:w-[420px] md:h-[320px]
                  "
                >
                  <Card className="h-full flex flex-col">
                    {/* Top */}
                    <div>
                      <h3 className="text-xl font-semibold">{p.title}</h3>
                      <p className="mt-2 text-slate-300">{p.description}</p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>

                      <ul className="mt-4 space-y-2 text-slate-300">
                        {p.highlights.map((h) => (
                          <li key={h} className="flex gap-2">
                            <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-400" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom (buttons always aligned) */}
                    <div className="mt-auto pt-6 flex gap-3">
                      <BtnLink href={p.liveUrl}>Live Demo</BtnLink>
                      <BtnLink href={p.githubUrl} variant="ghost">
                        GitHub
                      </BtnLink>
                    </div>
                  </Card>
                </div>
              ))}
            </div>

            <p className="mt-2 text-sm text-slate-500">Scroll →</p>
          </div>
        </Section>

        <Section id="resume" title="Resume Snapshot">
          <div
            className="
              flex gap-6 overflow-x-auto pb-4
              snap-x snap-mandatory
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
        {/* Experience */}
        <div className="snap-start flex-shrink-0 w-[300px] h-[320px] md:w-[340px] md:h-[360px]">
          <Card className="h-full">
            <h3 className="text-lg font-semibold">Recent Experience</h3>

            <div className="mt-3 space-y-3 text-sm text-slate-300">

              <div>
                <div className="font-medium text-slate-100">
                  Software Engineer — Epic Systems
                </div>
                <div className="text-xs text-slate-400">May 2024 – Present</div>
                <p className="mt-0.5">
                  - Build reporting models, optimize SQL performance, and develop full-stack workflows for healthcare systems.
                </p>
              </div>

              <div>
                <div className="font-medium text-slate-100">
                  Software Engineer Intern — Epic Systems
                </div>
                <div className="text-xs text-slate-400">May 2023 – Aug 2023</div>
                <p className="mt-0.5">
                  - Developed a shared task feature to streamline physician workflows in Hyperspace.
                </p>
              </div>

              <div>
                <div className="font-medium text-slate-100">
                  Software Engineer Intern — PlayStation
                </div>
                <div className="text-xs text-slate-400">May 2022 – Aug 2022</div>
                <p className="mt-0.5">
                  - Shipped PS Direct checkout features, including accessibility and cart improvements.
                </p>
              </div>

            </div>
          </Card>
        </div>

        {/* Skills */}
        <div className="snap-start flex-shrink-0 w-[300px] h-[320px] md:w-[340px] md:h-[360px]">
          <Card className="h-full">
            <h3 className="text-lg font-semibold">Skills</h3>

            <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">

              {/* Languages */}
              <div>
                <div className="text-xs font-medium text-slate-200">Languages</div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {["Python", "TypeScript", "JavaScript", "SQL", "Java", "C#", "C++", "C", "R"].map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>

              {/* Frameworks & Libraries */}
              <div>
                <div className="text-xs font-medium text-slate-200">Frameworks & Libraries</div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {["React", "Node.js", "Jest", "Tailwind", "Bootstrap"].map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>

              {/* APIs & Data */}
              <div>
                <div className="text-xs font-medium text-slate-200">APIs & Data</div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {["REST", "GraphQL", "MySQL", "Tableau"].map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>

              {/* Cloud & Tools */}
              <div>
                <div className="text-xs font-medium text-slate-200">Cloud & Tools</div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {["AWS", "Azure", "Docker", "Linux"].map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>

              {/* Web */}
              <div className="col-span-2">
                <div className="text-xs font-medium text-slate-200">Web</div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  {["HTML", "CSS"].map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
              </div>

            </div>
          </Card>
        </div>

            {/* Education */}
            <div className="snap-start flex-shrink-0 w-[300px] h-[260px] md:w-[340px] md:h-[280px]">
              <Card className="h-full">
                <h3 className="text-lg font-semibold">Education</h3>

                <div className="mt-4 space-y-2 text-slate-300">
                  <div className="text-slate-100 font-medium">
                    University of Wisconsin–Madison
                  </div>

                  <div className="text-sm text-slate-400">
                    B.S. in Computer Science & Data Science
                  </div>

                  <div className="text-sm text-slate-400">
                    Sept 2020 – Dec 2023
                  </div>

                  <div className="mt-3 inline-block rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    🎓 Graduated
                  </div>
                </div>
              </Card>
            </div>
          </div>
          <p className="mt-2 text-sm text-slate-500">Scroll →</p>
        </Section>


        <Section id="about" title="About Me">
          <Card>
            <p className="text-slate-300">
              I’m a full-stack software engineer who enjoys building reliable systems, clean interfaces, and tools that make complex data easier to work with. I currently work at Epic Systems, where I design reporting models, optimize performance-critical SQL queries, and ship new workflows used by real customers.
            </p>
            <p className="mt-4 text-slate-300">
              In the past, I’ve helped build PlayStation’s PS Direct checkout experience, worked on accessibility features, and developed data automation pipelines on AWS. I enjoy working across the stack, solving messy problems, and building systems that are fast, maintainable, and designed to scale.
            </p>
          </Card>
        </Section>

        <Section id="contact" title="Get In Touch">
          <Card>
            <p className="text-slate-300">Want to chat? I’m quick to respond.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BtnLink href="mailto:virajsule12@gmail.com">Email Me</BtnLink>
              <BtnLink href="https://linkedin.com/in/virajsule/" variant="ghost">
                LinkedIn
              </BtnLink>
              <BtnLink href="https://github.com/virajsule12" variant="ghost">
                GitHub
              </BtnLink>
            </div>
          </Card>
        </Section>

        <footer className="py-12 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Viraj Sule
        </footer>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="font-semibold tracking-tight">
          Viraj Sule
        </Link>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a className="hover:text-slate-100" href="#projects">Projects</a>
          <a className="hover:text-slate-100" href="#resume">Resume</a>
          <a className="hover:text-slate-100" href="#about">About</a>
          <a className="hover:text-slate-100" href="#contact">Contact</a>
        </nav>
        <a
          href="/resume.pdf"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid items-start gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Software engineer building scalable web apps and practical data-driven tools.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-300">
            FastAPI + React • AWS deployments • Clean UX
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-500"
            >
              View Projects
            </a>
            <a
              href="mailto:virajsule12@gmail.com"
              className="rounded-xl border border-white/15 px-5 py-3 text-sm font-medium text-slate-100 hover:bg-white/5"
            >
              Email Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <Tag>FastAPI</Tag>
            <Tag>React</Tag>
            <Tag>AWS</Tag>
          </div>
        </div>

        <Card className="md:mt-2">
          <div className="space-y-3 text-slate-300">
            <div className="flex items-center justify-between">
              <span>📍 Madison, WI</span>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm text-emerald-300">
                Open to SWE roles
              </span>
            </div>
            <div className="h-px bg-white/10" />
            <div className="flex gap-3 text-sm">
              <a className="hover:text-slate-100" href="https://github.com/virajsule12">GitHub</a>
              <a className="hover:text-slate-100" href="https://linkedin.com/in/virajsule/">LinkedIn</a>
              <a className="hover:text-slate-100" href="mailto:virajsule12@gmail.com">Email</a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function Section(props: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={props.id} className="py-10 md:py-14">
      <h2 className="text-2xl font-semibold tracking-tight">{props.title}</h2>
      <div className="mt-6">{props.children}</div>
    </section>
  );
}

function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={
        "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:bg-white/7 " +
        className
      }
    >
      {children}
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] leading-none text-slate-200">
      {children}
    </span>
  );
}


function BtnLink({
  href,
  variant = "solid",
  children,
}: {
  href: string;
  variant?: "solid" | "ghost";
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition";
  const solid = "bg-blue-600 text-white hover:bg-blue-500";
  const ghost = "border border-white/15 text-slate-100 hover:bg-white/5";
  return (
    <a href={href} className={`${base} ${variant === "solid" ? solid : ghost}`}>
      {children}
    </a>
  );
}
