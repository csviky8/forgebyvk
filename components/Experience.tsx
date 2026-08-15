const stats = [
  { icon: "🖥", value: "8+", label: "Years Experience" },
  { icon: "⚡", value: "20+", label: "Projects Delivered" },
  { icon: "🔗", value: "CRM", label: "Systems Built" },
  { icon: "✅", value: "100%", label: "Client Satisfaction" },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-[#0d0d0d] border-y border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-2xl flex-shrink-0">
              {s.icon}
            </div>
            <div>
              <div className="text-white font-bold text-2xl">{s.value}</div>
              <div className="text-gray-500 text-sm">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
