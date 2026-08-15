const services = [
  {
    icon: "🖼",
    title: "CRM Development",
    desc: "Complete business lifecycle management from Lead to Contract, Customer & Support.",
    color: "text-violet-400",
    border: "hover:border-violet-500/50",
  },
  {
    icon: "⌨",
    title: "Backend Engineering",
    desc: "Robust backend systems using Laravel, PHP, APIs and modern architecture.",
    color: "text-blue-400",
    border: "hover:border-blue-500/50",
  },
  {
    icon: "🧩",
    title: "Integrations & Automation",
    desc: "Third-party integrations, payment gateways, email, OCR, maps, and automation.",
    color: "text-green-400",
    border: "hover:border-green-500/50",
  },
  {
    icon: "📊",
    title: "Dashboard & Reporting",
    desc: "Interactive dashboards, analytics, custom reports and real-time insights.",
    color: "text-pink-400",
    border: "hover:border-pink-500/50",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <p className="text-violet-400 text-xs font-bold tracking-widest uppercase mb-8">What I Build</p>
        <div className="grid md:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className={`bg-white/[0.03] border border-white/10 ${s.border} rounded-2xl p-6 transition-colors group`}
            >
              <div className={`text-3xl mb-4 ${s.color}`}>{s.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
              <a href="#contact" className={`text-sm font-medium ${s.color} hover:underline`}>
                Explore More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
