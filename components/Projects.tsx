"use client";

import { useEffect, useRef, useState } from "react";

type AlertItem = {
  label: string;
  count: string;
  color: string;
};

type HealthItem = {
  label: string;
  value: number;
};

type ProjectTone = {
  title: string;
  border: string;
  soft: string;
  chip: string;
  accent: string;
  glow: string;
};

type Project = {
  title: string;
  kicker: string;
  subtitle: string;
  summary: string;
  tags: string[];
  status: string;
  leftHeading: string;
  leftTitle: string;
  leftStatus: string;
  badge: string;
  statLabel: string;
  statValue: string;
  alerts: AlertItem[];
  health: HealthItem[];
  tone: ProjectTone;
  link?: string;
};

const projects: Project[] = [
  {
    title: "GPS Track",
    kicker: "Fleet Tracking System",
    subtitle: "Real-time vehicle monitoring, route history, and device health.",
    summary:
      "Built to support live fleet operations with geofence alerts, route visibility, and accurate location monitoring.",
    tags: ["Laravel", "Vue.js", "MySQL", "Maps API"],
    status: "Current",
    leftHeading: "Map View",
    leftTitle: "Chennai Fleet Zone",
    leftStatus: "Live 24/7",
    badge: "Vehicle 18",
    statLabel: "Moving at",
    statValue: "42 km/h",
    alerts: [
      { label: "Overspeed alerts", count: "12", color: "#fb7185" },
      { label: "Geofence entry", count: "09", color: "#34d399" },
      { label: "Device offline", count: "03", color: "#fbbf24" },
    ],
    health: [
      { label: "GPS Signal", value: 92 },
      { label: "Battery", value: 81 },
      { label: "Network", value: 99 },
    ],
    tone: {
      title: "text-cyan-300",
      border: "border-cyan-400/30",
      soft: "bg-cyan-500/10",
      chip: "border-cyan-400/30 bg-cyan-500/15 text-cyan-100",
      accent: "#22d3ee",
      glow: "rgba(34, 211, 238, 0.28)",
    },
  },
  {
    title: "Aura Industrial",
    kicker: "Industrial B2B Portal",
    subtitle: "Orders, inventory, and operations in one dashboard.",
    summary: "Business portal designed for product handling, invoicing, order flow, and internal operations.",
    tags: ["Laravel", "MySQL", "Bootstrap", "REST API"],
    status: "Live",
    leftHeading: "Operations View",
    leftTitle: "Industrial Order Flow",
    leftStatus: "Live 24/7",
    badge: "Orders 142",
    statLabel: "Dispatch",
    statValue: "In progress",
    alerts: [
      { label: "Stock low", count: "08", color: "#34d399" },
      { label: "Pending invoices", count: "11", color: "#fbbf24" },
      { label: "Route delay", count: "04", color: "#fb7185" },
    ],
    health: [
      { label: "Fulfillment", value: 87 },
      { label: "Inventory", value: 74 },
      { label: "Uptime", value: 99 },
    ],
    link: "https://auraindustrial.tamiloverseas.com/login",
    tone: {
      title: "text-emerald-300",
      border: "border-emerald-400/30",
      soft: "bg-emerald-500/10",
      chip: "border-emerald-400/30 bg-emerald-500/15 text-emerald-100",
      accent: "#34d399",
      glow: "rgba(52, 211, 153, 0.22)",
    },
  },
  {
    title: "CRM",
    kicker: "Sales Automation Suite",
    subtitle: "Lead management, quotations, contracts, and support workflow.",
    summary: "CRM built for sales teams that need better lead follow-up, quotation control, and service tracking.",
    tags: ["Laravel", "Vue.js", "MySQL", "Automation"],
    status: "Featured",
    leftHeading: "Pipeline View",
    leftTitle: "Sales Momentum",
    leftStatus: "High activity",
    badge: "Leads 1,248",
    statLabel: "Deals in motion",
    statValue: "318 active",
    alerts: [
      { label: "New lead added", count: "18", color: "#60a5fa" },
      { label: "Quote follow-up", count: "09", color: "#a78bfa" },
      { label: "Support tickets", count: "12", color: "#fb7185" },
    ],
    health: [
      { label: "Pipeline", value: 91 },
      { label: "Response", value: 84 },
      { label: "Retention", value: 96 },
    ],
    tone: {
      title: "text-violet-300",
      border: "border-violet-400/30",
      soft: "bg-violet-500/10",
      chip: "border-violet-400/30 bg-violet-500/15 text-violet-100",
      accent: "#a855f7",
      glow: "rgba(168, 85, 247, 0.24)",
    },
  },
  {
    title: "ERP Suite",
    kicker: "Enterprise Resource Planning",
    subtitle: "Finance, staff, stock, and approvals in one workflow.",
    summary: "ERP built to organize HR, finance, inventory, and operations for faster internal control.",
    tags: ["Laravel", "Vue 3", "MySQL", "Reports"],
    status: "Stable",
    leftHeading: "Control Room",
    leftTitle: "Enterprise Operations",
    leftStatus: "FY 2025",
    badge: "Staff 248",
    statLabel: "Finance synced",
    statValue: "92%",
    alerts: [
      { label: "Payroll ready", count: "05", color: "#34d399" },
      { label: "Stock variance", count: "02", color: "#fbbf24" },
      { label: "Approval queue", count: "07", color: "#60a5fa" },
    ],
    health: [
      { label: "Finance", value: 92 },
      { label: "Inventory", value: 88 },
      { label: "Attendance", value: 75 },
    ],
    tone: {
      title: "text-sky-300",
      border: "border-sky-400/30",
      soft: "bg-sky-500/10",
      chip: "border-sky-400/30 bg-sky-500/15 text-sky-100",
      accent: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.24)",
    },
  },
  {
    title: "E-commerce Store",
    kicker: "Commerce Platform",
    subtitle: "Catalog, checkout, payments, and order management.",
    summary: "E-commerce platform focused on product control, payment flow, and sales reporting.",
    tags: ["Laravel", "React", "MySQL", "AWS"],
    status: "Growth",
    leftHeading: "Store View",
    leftTitle: "Product Catalog Live",
    leftStatus: "Online",
    badge: "Orders 1,340",
    statLabel: "Revenue",
    statValue: "₹8.2M",
    alerts: [
      { label: "Carts abandoned", count: "27", color: "#fbbf24" },
      { label: "Payment retries", count: "04", color: "#fb7185" },
      { label: "New products", count: "16", color: "#34d399" },
    ],
    health: [
      { label: "Conversion", value: 78 },
      { label: "Traffic", value: 93 },
      { label: "Fulfillment", value: 88 },
    ],
    tone: {
      title: "text-amber-300",
      border: "border-amber-400/30",
      soft: "bg-amber-500/10",
      chip: "border-amber-400/30 bg-amber-500/15 text-amber-100",
      accent: "#fbbf24",
      glow: "rgba(251, 191, 36, 0.22)",
    },
  },
  {
    title: "Car Rental System",
    kicker: "Fleet & Booking Platform",
    subtitle: "Booking, document checks, fleet tracking, and rentals.",
    summary: "Car rental system with OCR-style document checks, fleet management, and live availability tracking.",
    tags: ["PHP", "MySQL", "Bootstrap", "Document Scan"],
    status: "Active",
    leftHeading: "Fleet View",
    leftTitle: "Vehicle Tracking",
    leftStatus: "Active rentals",
    badge: "Fleet 48",
    statLabel: "On rent",
    statValue: "31 cars",
    alerts: [
      { label: "License scan", count: "12", color: "#60a5fa" },
      { label: "Fuel alerts", count: "05", color: "#fbbf24" },
      { label: "Return due", count: "09", color: "#fb7185" },
    ],
    health: [
      { label: "Fleet", value: 89 },
      { label: "Documents", value: 94 },
      { label: "Utilization", value: 81 },
    ],
    tone: {
      title: "text-blue-300",
      border: "border-blue-400/30",
      soft: "bg-blue-500/10",
      chip: "border-blue-400/30 bg-blue-500/15 text-blue-100",
      accent: "#60a5fa",
      glow: "rgba(96, 165, 250, 0.24)",
    },
  },
];

function ProjectCard({ project, active }: { project: Project; active: boolean }) {
  return (
    <article
      className={`relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,15,28,0.98),rgba(5,9,18,0.98))] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.48)] transition-transform duration-500 ${
        active ? "scale-[1]" : "scale-[0.988]"
      }`}
      style={{
        boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 26px 110px rgba(0,0,0,0.48), 0 0 80px ${project.tone.glow}`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_26%)]" />

      <div className="relative rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(7,14,26,0.96),rgba(4,9,17,0.96))] p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className={`text-[11px] font-semibold uppercase tracking-[0.34em] ${project.tone.title}`}>{project.kicker}</p>
            <p className="mt-2 text-sm text-slate-300">{project.subtitle}</p>
          </div>
          <span className={`rounded-full border px-4 py-2 text-[11px] text-slate-200 ${project.tone.chip}`}>{project.status}</span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <section
            className={`relative overflow-hidden rounded-[30px] border border-white/10 ${project.tone.soft} p-4 sm:p-5`}
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(255,255,255,0.09),transparent_24%),radial-gradient(circle_at_72%_24%,rgba(255,255,255,0.06),transparent_20%),radial-gradient(circle_at_64%_76%,rgba(255,255,255,0.06),transparent_22%)]" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-slate-400">{project.leftHeading}</p>
                <p className="mt-3 text-lg font-semibold text-white">{project.leftTitle}</p>
              </div>
              <span className={`rounded-full border px-3 py-1 text-[11px] ${project.tone.chip}`}>{project.leftStatus}</span>
            </div>

            <div className="relative mt-5 min-h-[280px] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(3,8,18,0.78),rgba(5,10,22,0.92))] p-3 sm:min-h-[360px] sm:p-4 lg:min-h-[430px]">
              <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_50%_12%,rgba(255,255,255,0.07),transparent_34%),radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.06),transparent_22%),radial-gradient(circle_at_72%_62%,rgba(255,255,255,0.04),transparent_24%)]" />

              <div className="relative h-full min-h-[240px] overflow-hidden rounded-[24px] border border-white/10 sm:min-h-[320px] lg:min-h-[390px]">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px]" />

                <div
                  className="absolute left-[16%] top-[18%] h-28 w-32 rounded-[40%] border-2 blur-[0.2px] sm:left-[22%] sm:top-[22%] sm:h-40 sm:w-44"
                  style={{ borderColor: project.tone.accent, boxShadow: `0 0 28px ${project.tone.glow}` }}
                />
                <div
                  className="absolute left-[22%] top-[25%] h-14 w-20 rounded-[42%] border-2 opacity-90 sm:left-[29%] sm:top-[29%] sm:h-20 sm:w-28"
                  style={{ borderColor: project.tone.accent }}
                />
                <div
                  className="absolute left-[48%] top-[46%] h-16 w-24 rounded-[42%] border-2 opacity-80 sm:h-[104px] sm:w-32"
                  style={{ borderColor: project.tone.accent }}
                />
                <div
                  className="absolute left-[14%] top-[22%] h-3 w-3 rounded-full border-2 border-white bg-rose-400 shadow-[0_0_16px_rgba(251,113,133,0.85)] sm:left-[16%] sm:top-[25%]"
                />
                <div
                  className="absolute left-[49%] top-[33%] h-3 w-3 rounded-full border-2 border-white shadow-[0_0_16px_rgba(52,211,153,0.85)] sm:left-[53%] sm:top-[35%]"
                  style={{ backgroundColor: project.tone.accent }}
                />
                <div
                  className="absolute left-[56%] top-[58%] h-3 w-3 rounded-full border-2 border-white shadow-[0_0_16px_rgba(56,189,248,0.85)] sm:left-[58%] sm:top-[61%]"
                  style={{ backgroundColor: project.tone.accent }}
                />

                <div
                  className="absolute left-[8%] bottom-[8%] max-w-[170px] rounded-[22px] border border-white/10 bg-black/60 p-3 backdrop-blur-md sm:left-[12%] sm:bottom-[10%] sm:max-w-[210px] sm:p-4"
                  style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.04), 0 18px 48px rgba(0,0,0,0.35)` }}
                >
                  <p className="text-[9px] uppercase tracking-[0.28em] text-slate-400 sm:text-[10px] sm:tracking-[0.32em]">{project.badge}</p>
                  <p className="mt-2 text-sm font-semibold text-white sm:text-lg">{project.statLabel}</p>
                  <p className="mt-1 text-xs text-slate-300 sm:text-sm">{project.statValue}</p>
                  <p className="mt-3 text-[11px] text-slate-500">Last update 9 sec ago</p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <div className={`rounded-[30px] border border-white/10 ${project.tone.soft} p-4 sm:p-5`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.34em] text-slate-400">Project</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl sm:text-[2.6rem]">{project.title}</h3>
                </div>
                <span className={`rounded-full border px-3 py-1 text-[11px] ${project.tone.chip}`}>{project.status}</span>
              </div>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">{project.summary}</p>

              <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[10px] text-slate-200 sm:px-3 sm:text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 inline-flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:mt-6 ${project.tone.chip}`}
                >
                  Open project
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                <p className="text-[11px] uppercase tracking-[0.32em] text-slate-400">Alerts</p>
                <div className="mt-4 space-y-3 sm:space-y-4">
                  {project.alerts.map((alert) => (
                    <div key={alert.label} className="flex items-center justify-between gap-4">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: alert.color }} />
                        <span className="truncate text-xs text-slate-200 sm:text-sm">{alert.label}</span>
                      </div>
                      <span className="text-xs text-slate-400 sm:text-sm">{alert.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
                <p className="text-[11px] uppercase tracking-[0.32em] text-slate-400">Health</p>
                <div className="mt-4 space-y-4 sm:space-y-5">
                  {project.health.map((item, index) => {
                    const width = `${item.value}%`;
                    return (
                      <div key={item.label}>
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <span className="text-xs text-slate-200 sm:text-sm">{item.label}</span>
                          <span className="text-xs text-slate-400 sm:text-sm">{item.value}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/5 sm:h-2">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width,
                              background:
                                index === 0
                                  ? `linear-gradient(90deg, ${project.tone.accent}, rgba(255,255,255,0.95))`
                                  : `linear-gradient(90deg, ${project.tone.accent}, rgba(255,255,255,0.75))`,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const scrollToIndex = (index: number) => {
    const next = (index + projects.length) % projects.length;
    setActive(next);
    const node = trackRef.current;
    const slide = node?.children[next] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    if (rafRef.current !== null) return;

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      const node = trackRef.current;
      if (!node) return;

      const next = Math.round(node.scrollLeft / node.clientWidth);
      const clamped = Math.max(0, Math.min(projects.length - 1, next));
      setActive(clamped);
    });
  };

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % projects.length;
        const node = trackRef.current;
        const slide = node?.children[next] as HTMLElement | undefined;
        slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
        return next;
      });
    }, 4500);

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isInView]);

  return (
    <section ref={sectionRef} id="projects" className="border-y border-white/10 bg-[#040713] py-16 sm:py-20">
      <div className="mx-auto max-w-[1480px] px-5 lg:px-8">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-violet-300">Featured Projects</p>
            <h2 className="mt-3 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
              Portfolio projects shaped around real business needs, from fleet tracking to CRM, ERP, Ecommerce.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
              This section reflects the kind of work in your profile: Laravel systems, Vue and React dashboards,
              business automation, MySQL data workflows, and practical client-facing product builds.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <button
              type="button"
              onClick={() => scrollToIndex(active - 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-white transition-colors hover:bg-white/10 sm:h-12 sm:w-12"
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(active + 1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg text-white transition-colors hover:bg-white/10 sm:h-12 sm:w-12"
              aria-label="Next project"
            >
              →
            </button>
          </div>
        </div>

        <div className="rounded-[38px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,28,0.95),rgba(5,8,16,0.98))] p-2 shadow-[0_24px_120px_rgba(0,0,0,0.4)] sm:p-3">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, index) => (
              <div key={project.title} data-slide={index} className="w-full flex-none snap-start px-1 sm:px-1.5">
                <ProjectCard project={project} active={index === active} />
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                onClick={() => scrollToIndex(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === active ? "h-2.5 w-8 bg-violet-400 shadow-[0_0_20px_rgba(167,139,250,0.65)]" : "h-2.5 w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to ${project.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
