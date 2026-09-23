import Projects from "@/components/Projects";

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const stack = [
  "PHP",
  "Laravel",
  "Vue.js",
  "JavaScript",
  "React",
  "MySQL",
  "Tailwind CSS",
  "AWS",
  "Google Maps API",
  "Git",
];

const services = [
  {
    title: "Business Systems",
    text: "Complete business lifecycle management from lead to contract, customer support, and reporting.",
    accent: "from-violet-500/30 to-indigo-500/10",
    badge: "◎",
  },
  {
    title: "Backend Engineering",
    text: "Robust backend systems using Laravel, PHP, APIs, and modern architecture.",
    accent: "from-sky-500/30 to-blue-500/10",
    badge: "</>",
  },
  {
    title: "Integrations & Automation",
    text: "Third-party integrations, payment gateways, email, OCR, maps, and automation.",
    accent: "from-emerald-500/30 to-teal-500/10",
    badge: "✦",
  },
  {
    title: "Dashboard & Reporting",
    text: "Interactive dashboards, analytics, custom reports, and real-time insights.",
    accent: "from-fuchsia-500/30 to-violet-500/10",
    badge: "◔",
  },
];

const stats = [
  { value: "8+", label: "Years Experience", icon: "⌁" },
  { value: "20+", label: "Projects Delivered", icon: "◫" },
  { value: "Business", label: "Systems Built", icon: "◌" },
  { value: "100%", label: "Client Satisfaction", icon: "✦" },
];

const dashboardStats = [
  { label: "Total Leads", value: "1,248", delta: "+12.5%", positive: true },
  { label: "Total Contracts", value: "318", delta: "+8.2%", positive: true },
  { label: "Open Tickets", value: "86", delta: "-4.3%", positive: false },
  { label: "Revenue", value: "₹2.45M", delta: "+15.8%", positive: true },
];

const chartMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
const chartHeights = [34, 58, 49, 72, 61, 84];

const activities = [
  ["New lead added", "2 min ago"],
  ["Quotation created", "15 min ago"],
  ["Contract signed", "1 hour ago"],
  ["Ticket updated", "2 hours ago"],
];

const tasks = [
  ["Follow up with Acme Corp", "High", "bg-rose-500/20 text-rose-200 border-rose-400/30"],
  ["Prepare quotation for BlueStar", "Medium", "bg-amber-500/20 text-amber-200 border-amber-400/30"],
  ["Contract renewal - ZenTech", "Low", "bg-emerald-500/20 text-emerald-200 border-emerald-400/30"],
  ["Client meeting at 4 PM", "Medium", "bg-amber-500/20 text-amber-200 border-amber-400/30"],
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-slate-200/90 backdrop-blur">
      {children}
    </span>
  );
}

function StackMark({ item }: { item: string }) {
  const base = "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-lg font-bold transition-colors group-hover:text-white";

  switch (item) {
    case "PHP":
      return <div className={base + " text-[#8892BF]"}><span className="text-xl italic font-black">php</span></div>;
    case "Laravel":
      return <div className={base + " text-[#FF2D20]"}><span className="text-xl">◆</span></div>;
    case "Vue.js":
      return <div className={base + " text-[#42B883]"}><span className="text-xl">V</span></div>;
    case "JavaScript":
      return <div className={base + " bg-[#F7DF1E]/15 text-[#F7DF1E]"}><span className="text-xl">JS</span></div>;
    case "React":
      return <div className={base + " text-[#61DAFB]"}><span className="text-xl">⚛</span></div>;
    case "MySQL":
      return <div className={base + " text-[#00758F]"}><span className="text-xl">◍</span></div>;
    case "Tailwind CSS":
      return <div className={base + " text-[#38BDF8]"}><span className="text-xl">≋</span></div>;
    case "AWS":
      return <div className={base + " text-[#FF9900]"}><span className="text-xl">☁</span></div>;
    case "Google Maps API":
      return (
        <div className={base + " bg-white text-[#4285F4]"}>
          <span className="bg-gradient-to-br from-blue-500 via-red-500 to-amber-400 bg-clip-text text-xl font-black text-transparent">
            G
          </span>
        </div>
      );
    case "Git":
      return <div className={base + " text-[#F05032]"}><span className="text-xl">◆</span></div>;
    default:
      return <div className={base}><span>{item.slice(0, 2).toUpperCase()}</span></div>;
  }
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(86,111,255,0.22),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(163,72,255,0.24),_transparent_26%),radial-gradient(circle_at_bottom_center,_rgba(30,64,175,0.14),_transparent_40%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="text-3xl font-black tracking-[-0.12em] text-transparent bg-gradient-to-br from-sky-300 via-indigo-400 to-violet-400 bg-clip-text drop-shadow-[0_0_18px_rgba(96,130,255,0.45)]">
              VR
            </span>
            <span className="hidden text-[15px] font-semibold tracking-[0.22em] text-white sm:inline">
              VIGNESH R.
            </span>
          </a>

          <nav className="hidden items-center gap-10 text-sm text-slate-200/90 md:flex">
            {navLinks.map((link, index) => (
              <a
                key={link}
                href={
                  link === "Home"
                    ? "#home"
                    : link === "Skills"
                      ? "#skills"
                      : link === "Experience"
                        ? "#projects"
                        : `#${link.toLowerCase()}`
                }
                className={`relative transition-colors duration-300 hover:text-white ${
                  index === 0 ? "text-white" : ""
                }`}
              >
                {link}
                {index === 0 ? (
                  <span className="absolute -bottom-3 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 to-violet-400" />
                ) : null}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.35)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)]"
          >
            <span className="text-base">✈</span>
            Let&apos;s Talk
          </a>
        </div>
      </header>

      <section id="home" className="relative mx-auto max-w-[1380px] px-5 pb-18 pt-12 lg:px-8 lg:pb-24 lg:pt-14">
        <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-8">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-5 text-[12px] font-bold uppercase tracking-[0.28em] text-violet-300">
              Senior PHP / Laravel Developer
            </p>
            <h1 className="max-w-[12ch] text-4xl font-black leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.7rem]">
              I Build Business
              <br />
              Systems That
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
                Drive Growth.
              </span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-slate-300/90 sm:text-lg">
              Specialized in building scalable business systems, automation tools, APIs, and modern web
              applications that simplify complex workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(88,112,255,0.35)] transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
              >
                View My Work
                <span className="text-lg">→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-violet-400/60 bg-transparent px-7 py-4 text-sm font-semibold text-slate-100 transition-colors duration-300 hover:border-violet-300 hover:bg-white/5 sm:w-auto"
              >
                <span className="text-base">✉</span>
                Contact Me
              </a>
            </div>

            <div className="mt-14 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 shadow-[0_18px_70px_rgba(0,0,0,0.25)] backdrop-blur">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-lg text-violet-300">
                    {stat.icon}
                  </div>
                  <div className="text-[30px] font-bold leading-none text-white">{stat.value}</div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative pt-4 lg:pt-8">
            <div className="absolute -left-14 top-2 h-40 w-40 rounded-full bg-violet-600/30 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
            <div className="absolute -right-8 top-10 h-56 w-56 rounded-full bg-sky-500/20 blur-3xl animate-[pulse_9s_ease-in-out_infinite]" />

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,16,34,0.98),rgba(6,10,20,0.98))] shadow-[0_0_0_1px_rgba(92,123,255,0.2),0_24px_90px_rgba(20,26,58,0.72)] backdrop-blur-xl animate-[float_8s_ease-in-out_infinite]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(160,74,255,0.22),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_28%)]" />

              <div className="relative border-b border-white/10 px-4 py-4 sm:px-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
                      C
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">CRM Portal</p>
                      <p className="mt-0.5 text-sm font-semibold text-white">CRM Dashboard</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[11px] text-slate-400 md:flex">
                      Search leads, tickets...
                    </div>
                    <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm">
                      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500" />
                      🔔
                    </button>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-sky-400 to-violet-500 text-sm font-bold">
                      V
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative grid lg:grid-cols-[188px_minmax(0,1fr)]">
                <aside className="hidden border-r border-white/10 bg-white/[0.02] px-4 py-5 lg:block">
                  <div className="mb-7 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
                      ⟲
                    </span>
                    CRM Suite
                  </div>
                  <div className="space-y-2">
                    {["Dashboard", "Leads", "Quotations", "Contracts", "Tickets", "Customers", "Reports", "Settings"].map(
                      (item, index) => (
                        <div
                          key={item}
                          className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors ${
                            index === 0
                              ? "bg-indigo-500/25 text-white shadow-[inset_0_0_0_1px_rgba(129,140,248,0.3)]"
                              : "text-slate-400 hover:bg-white/5 hover:text-white"
                          }`}
                        >
                          <span className="text-[11px]">▣</span>
                          <span>{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </aside>

                <div className="relative p-3 sm:p-5">
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {dashboardStats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
                        <p className="text-[11px] text-slate-400">{stat.label}</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                        <p className={`mt-2 text-[11px] font-medium ${stat.positive ? "text-emerald-400" : "text-rose-400"}`}>
                          {stat.delta}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 grid gap-3 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-sm font-semibold text-white">Sales Overview</p>
                        <Badge>This Month</Badge>
                      </div>
                      <div className="flex h-40 items-end gap-2 rounded-xl border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] p-4 sm:h-48">
                        {chartHeights.map((height, index) => (
                          <div key={chartMonths[index]} className="flex flex-1 flex-col items-center gap-2">
                            <div
                              className="w-full rounded-t-lg bg-gradient-to-t from-indigo-500 via-violet-500 to-sky-400 shadow-[0_0_18px_rgba(107,114,255,0.35)]"
                              style={{ height: `${height}%` }}
                            />
                            <span className="text-[10px] text-slate-500">{chartMonths[index]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm font-semibold text-white">Pipeline Overview</p>
                      <div className="mt-5 flex h-44 flex-col justify-center gap-3">
                        {[
                          { label: "Leads", width: "100%", tone: "from-violet-500 to-indigo-500", count: "1,248" },
                          { label: "Qualified", width: "77%", tone: "from-indigo-500 to-sky-500", count: "648" },
                          { label: "Proposal", width: "58%", tone: "from-sky-500 to-cyan-500", count: "320" },
                          { label: "Won", width: "36%", tone: "from-cyan-500 to-blue-500", count: "118" },
                        ].map((row) => (
                          <div key={row.label} className="flex items-center gap-3">
                            <div className={`h-10 rounded-full bg-gradient-to-r ${row.tone}`} style={{ width: row.width }} />
                            <div className="min-w-0 flex-1 text-[11px] text-slate-400">
                              <div className="flex items-center justify-between gap-2">
                                <span>{row.label}</span>
                                <span className="text-slate-500">{row.count}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 grid gap-3 lg:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm font-semibold text-white">Recent Activities</p>
                        <div className="mt-4 space-y-3">
                        {activities.map(([title, time]) => (
                          <div key={title} className="flex items-center justify-between gap-4">
                            <div className="flex min-w-0 items-center gap-3">
                              <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-indigo-400/30 bg-indigo-500/10 text-[11px] text-indigo-300">
                                ⌁
                              </span>
                              <span className="truncate text-sm text-slate-300">{title}</span>
                            </div>
                            <span className="text-[11px] text-slate-500">{time}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-white">Task List</p>
                        <Badge>View All</Badge>
                      </div>
                      <div className="mt-4 space-y-3">
                        {tasks.map(([title, priority, badge]) => (
                          <div key={title} className="flex items-center justify-between gap-4">
                            <div className="flex min-w-0 items-center gap-3">
                              <span className="h-4 w-4 rounded border border-white/20" />
                              <span className="truncate text-sm text-slate-300">{title}</span>
                            </div>
                            <span className={`rounded-full border px-2.5 py-1 text-[11px] ${badge}`}>{priority}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-sky-400/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-black/20">
        <div className="mx-auto max-w-[1380px] px-5 py-12 lg:px-8">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-violet-300">Technology Stack</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10">
          {stack.map((item, index) => (
            <div
              key={item}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-5 text-center shadow-[0_18px_70px_rgba(0,0,0,0.22)] transition-transform duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.05] sm:py-6"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
                <StackMark item={item} />
                <div className="mt-4 text-sm font-medium text-slate-200">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-[1380px] px-5 py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-300">What I Build</p>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_80px_rgba(0,0,0,0.24)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${service.accent} text-xl text-white`}>
                {service.badge}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 max-w-sm leading-7 text-slate-400">{service.text}</p>
              <a href="#projects" className="mt-5 inline-flex text-sm font-medium text-sky-300 transition-colors group-hover:text-white">
                Explore More →
              </a>
            </article>
          ))}
        </div>
      </section>

      <Projects />

      <section className="mx-auto max-w-[1380px] px-5 pb-10 lg:px-8">
        <div className="grid gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-4 shadow-[0_18px_80px_rgba(0,0,0,0.24)] sm:p-5 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/10 px-4 py-4 lg:border-none lg:bg-transparent">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10 text-2xl text-violet-300">
                {stat.icon}
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1380px] px-5 pb-14 lg:px-8">
        <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_80px_rgba(0,0,0,0.25)] lg:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-violet-400/50 bg-violet-500/10 text-4xl text-sky-300 shadow-[0_0_40px_rgba(99,102,241,0.25)] sm:h-28 sm:w-28 sm:text-5xl">
                ✈
              </div>
              <div>
                <h2 className="max-w-md text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Let&apos;s Build Something Amazing Together!
                </h2>
                <p className="mt-3 max-w-lg text-base leading-7 text-slate-400">
                  Have a project in mind? Let&apos;s discuss how I can help you turn your ideas into powerful solutions.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center lg:justify-self-end">
              <a
                href="mailto:csviky8@gmail.com"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-500 px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_36px_rgba(88,112,255,0.35)] transition-transform hover:-translate-y-0.5"
              >
                Get In Touch →
              </a>
              <div className="space-y-3 border-l border-white/10 pl-0 sm:pl-5">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-violet-300">✉</span>
                  csviky8@gmail.com
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-violet-300">⌂</span>
                  Chennai, India
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="text-violet-300">◷</span>
                  Open for opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-5 text-sm text-slate-500">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Vignesh R. All rights reserved.</p>
          <p className="text-slate-400">
            Built with <span className="text-rose-400">♥</span> and Laravel
          </p>
        </div>
      </footer>
    </main>
  );
}
