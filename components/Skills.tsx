const stack = [
  { name: "PHP", bg: "bg-[#4F5B93]/20", border: "border-[#4F5B93]/40", icon: "🐘" },
  { name: "Laravel", bg: "bg-[#FF2D20]/10", border: "border-[#FF2D20]/30", icon: "🔺" },
  { name: "Vue.js", bg: "bg-[#42b883]/10", border: "border-[#42b883]/30", icon: "▲" },
  { name: "JavaScript", bg: "bg-[#F7DF1E]/10", border: "border-[#F7DF1E]/30", icon: "JS" },
  { name: "React.js", bg: "bg-[#61DAFB]/10", border: "border-[#61DAFB]/30", icon: "⚛" },
  { name: "MySQL", bg: "bg-[#00758F]/10", border: "border-[#00758F]/30", icon: "🐬" },
  { name: "Tailwind CSS", bg: "bg-[#38BDF8]/10", border: "border-[#38BDF8]/30", icon: "~" },
  { name: "AWS", bg: "bg-[#FF9900]/10", border: "border-[#FF9900]/30", icon: "☁" },
  { name: "Google Maps API", bg: "bg-violet-500/10", border: "border-violet-500/30", icon: "G" },
  { name: "Git", bg: "bg-[#F05032]/10", border: "border-[#F05032]/30", icon: "◆" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-violet-400 text-xs font-bold tracking-widest uppercase mb-8">Technology Stack</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10">
          {stack.map((tech) => (
            <div
              key={tech.name}
              className={`${tech.bg} ${tech.border} border rounded-xl p-4 flex flex-col items-center gap-2 hover:scale-105 transition-transform`}
            >
              <span className="text-2xl">{tech.icon}</span>
              <span className="text-gray-400 text-xs text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
