export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6 pt-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(109,40,217,0.15)_0%,_transparent_60%)]" />
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center py-16">

        {/* LEFT */}
        <div>
          <p className="text-violet-400 text-xs font-bold tracking-widest uppercase mb-5">
            Senior PHP / Laravel Developer
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            I Build Business<br />Systems That<br />
            <span className="text-violet-400">Drive Growth.</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-8 max-w-md leading-relaxed">
            Specialized in building scalable CRM platforms, business automation systems, APIs, and modern web applications that simplify complex workflows.
          </p>
          <div className="flex gap-4 flex-wrap mb-14">
            <a
              href="#projects"
              className="px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-medium transition-colors"
            >
              View My Work →
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white/20 hover:border-violet-400 text-gray-300 hover:text-violet-400 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
            >
              ✉ Contact Me
            </a>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: "📅", value: "8+", label: "Years Experience" },
              { icon: "</>", value: "20+", label: "Projects Delivered" },
              { icon: "⚡", value: "CRM", label: "Systems Built" },
              { icon: "👍", value: "100%", label: "Client Satisfaction" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-violet-400 text-lg mb-1">{s.icon}</div>
                <div className="text-white font-bold text-base">{s.value}</div>
                <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — CRM Dashboard Mockup */}
        <div className="relative hidden md:block">
          <div className="bg-[#111827] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-violet-900/20">
            {/* Top bar */}
            <div className="bg-[#0f172a] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                <span className="text-white text-xs font-semibold">CRM</span>
              </div>
              <span className="text-white text-xs font-semibold">Dashboard</span>
              <div className="flex items-center gap-2">
                <div className="bg-white/10 rounded px-2 py-0.5 text-gray-500 text-[10px]">Search anything...</div>
                <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-white text-[9px] font-bold">V</div>
              </div>
            </div>

            <div className="flex">
              {/* Sidebar */}
              <div className="w-24 bg-[#0f172a] border-r border-white/10 py-2 flex flex-col gap-0.5 flex-shrink-0">
                {["Dashboard","Leads","Quotations","Contracts","Tickets","Customers","Reports","Settings"].map((item, i) => (
                  <div
                    key={item}
                    className={`px-2 py-1.5 text-[10px] flex items-center gap-1.5 ${
                      i === 0 ? "bg-violet-600/20 text-violet-400 rounded mx-1" : "text-gray-500"
                    }`}
                  >
                    <span className="w-1 h-1 rounded-full bg-current opacity-50 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>

              {/* Main */}
              <div className="flex-1 p-3 space-y-2.5 min-w-0">
                {/* Stat cards */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "Total Leads", value: "1,248", change: "▲ 12.5%", up: true },
                    { label: "Total Contracts", value: "318", change: "▲ 8.2%", up: true },
                    { label: "Open Tickets", value: "86", change: "▼ 4.3%", up: false },
                    { label: "Revenue", value: "₹2.45M", change: "▲ 15.8%", up: true },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-[#0f172a] rounded-lg p-2 border border-white/5">
                      <div className="text-gray-500 text-[8px] mb-1">{stat.label}</div>
                      <div className="text-white text-xs font-bold">{stat.value}</div>
                      <div className={`text-[8px] mt-0.5 ${stat.up ? "text-green-400" : "text-red-400"}`}>{stat.change}</div>
                    </div>
                  ))}
                </div>

                {/* Charts */}
                <div className="grid grid-cols-2 gap-2">
                  {/* Sales Overview */}
                  <div className="bg-[#0f172a] rounded-lg p-2 border border-white/5">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-400 text-[9px]">Sales Overview</span>
                      <span className="text-gray-600 text-[8px] border border-white/10 px-1 rounded">This Month</span>
                    </div>
                    <div className="flex items-end gap-0.5 h-10">
                      {[25,40,30,55,45,75,60,80].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm"
                          style={{
                            height: `${h}%`,
                            background: "linear-gradient(to top, #7c3aed, #a78bfa)",
                            opacity: 0.8,
                          }}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-[7px] text-gray-600 mt-1">
                      {["Jan","Feb","Mar","Apr","May","Jun"].map((m) => <span key={m}>{m}</span>)}
                    </div>
                  </div>

                  {/* Pipeline */}
                  <div className="bg-[#0f172a] rounded-lg p-2 border border-white/5">
                    <div className="text-gray-400 text-[9px] mb-2">Pipeline Overview</div>
                    <div className="space-y-1.5">
                      {[
                        { label: "Leads", w: "100%", color: "#7c3aed", val: "1,248" },
                        { label: "Qualified", w: "68%", color: "#3b82f6", val: "648" },
                        { label: "Proposal", w: "42%", color: "#6366f1", val: "320" },
                        { label: "Won", w: "18%", color: "#10b981", val: "118" },
                      ].map((bar) => (
                        <div key={bar.label} className="flex items-center gap-1">
                          <div className="w-10 text-[7px] text-gray-500 flex-shrink-0">{bar.label}</div>
                          <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <div className="h-full rounded-full" style={{ width: bar.w, backgroundColor: bar.color }} />
                          </div>
                          <div className="text-[7px] text-gray-500 w-6 text-right">{bar.val}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom */}
                <div className="grid grid-cols-2 gap-2">
                  {/* Recent Activities */}
                  <div className="bg-[#0f172a] rounded-lg p-2 border border-white/5">
                    <div className="text-gray-400 text-[9px] mb-1.5">Recent Activities</div>
                    {[
                      { text: "New lead added", time: "2 min ago" },
                      { text: "Quotation created", time: "15 min ago" },
                      { text: "Contract signed", time: "1 hour ago" },
                      { text: "Ticket updated", time: "2 hours ago" },
                    ].map((a) => (
                      <div key={a.text} className="flex items-center justify-between py-0.5">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                          <span className="text-gray-400 text-[8px]">{a.text}</span>
                        </div>
                        <span className="text-gray-600 text-[7px]">{a.time}</span>
                      </div>
                    ))}
                  </div>

                  {/* Task List */}
                  <div className="bg-[#0f172a] rounded-lg p-2 border border-white/5">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-gray-400 text-[9px]">Task List</span>
                      <span className="text-violet-400 text-[8px]">View All</span>
                    </div>
                    {[
                      { task: "Follow up with Acme Corp", p: "High", c: "bg-red-500" },
                      { task: "Prepare quotation for BlueStar", p: "Medium", c: "bg-yellow-500" },
                      { task: "Contract renewal – ZenTech", p: "Low", c: "bg-green-500" },
                      { task: "Client meeting at 4 PM", p: "Medium", c: "bg-yellow-500" },
                    ].map((t) => (
                      <div key={t.task} className="flex items-center justify-between py-0.5">
                        <span className="text-gray-400 text-[8px] truncate max-w-[90px]">{t.task}</span>
                        <span className={`text-[7px] px-1 py-0.5 rounded text-white flex-shrink-0 ${t.c}`}>{t.p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-6 bg-violet-600/10 rounded-3xl blur-3xl -z-10" />
        </div>

      </div>
    </section>
  );
}
