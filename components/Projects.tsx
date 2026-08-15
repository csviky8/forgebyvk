"use client";
import { useState } from "react";

function CRMMockup() {
  return (
    <div className="w-full h-full bg-[#0d1117] flex overflow-hidden rounded-t-xl">
      {/* Sidebar */}
      <div className="w-16 bg-[#0a0e1a] border-r border-white/5 flex flex-col py-2 gap-0.5 flex-shrink-0">
        {["Dashboard","Leads","Quotations","Contracts","Tickets","Customers","Reports","Settings"].map((item, i) => (
          <div key={item} className={`px-1.5 py-1 text-[6px] flex items-center gap-1 ${i === 0 ? "bg-violet-600/20 text-violet-400" : "text-gray-600"}`}>
            <span className="w-1 h-1 rounded-full bg-current opacity-60 flex-shrink-0" />{item}
          </div>
        ))}
      </div>
      {/* Main */}
      <div className="flex-1 p-2 flex flex-col gap-1.5 min-w-0">
        <div className="flex items-center justify-between">
          <span className="text-white text-[7px] font-semibold">Dashboard</span>
          <div className="bg-white/5 rounded px-1.5 py-0.5 text-gray-600 text-[6px]">Search...</div>
        </div>
        <div className="grid grid-cols-4 gap-1">
          {[["Leads","1,248","▲12.5%",true],["Contracts","318","▲8.2%",true],["Tickets","86","▼4.3%",false],["Revenue","₹2.45M","▲15.8%",true]].map(([l,v,c,u])=>(
            <div key={String(l)} className="bg-[#0a0e1a] border border-white/5 rounded p-1">
              <div className="text-gray-600 text-[5px]">{l}</div>
              <div className="text-white text-[7px] font-bold">{v}</div>
              <div className={`text-[5px] ${u?"text-green-400":"text-red-400"}`}>{c}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-1 flex-1">
          <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5">
            <div className="text-gray-500 text-[6px] mb-1">Sales Overview</div>
            <div className="flex items-end gap-0.5 h-8">
              {[25,40,30,55,45,75,60,80].map((h,i)=>(
                <div key={i} className="flex-1 rounded-sm" style={{height:`${h}%`,background:"linear-gradient(to top,#7c3aed,#a78bfa)"}} />
              ))}
            </div>
          </div>
          <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5">
            <div className="text-gray-500 text-[6px] mb-1">Pipeline</div>
            {[["Leads","100%","#7c3aed","1,248"],["Qualified","65%","#3b82f6","648"],["Proposal","42%","#6366f1","320"],["Won","18%","#10b981","118"]].map(([l,w,c,val])=>(
              <div key={String(l)} className="flex items-center gap-1 mb-0.5">
                <div className="w-8 text-[5px] text-gray-600">{l}</div>
                <div className="flex-1 h-1 bg-white/5 rounded-full"><div className="h-full rounded-full" style={{width:String(w),backgroundColor:String(c)}} /></div>
                <div className="text-[5px] text-gray-600 w-5 text-right">{val}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5">
          <div className="text-gray-500 text-[6px] mb-0.5">Recent Activities</div>
          {[["New lead added","2m ago"],["Quotation created","15m ago"],["Contract signed","1h ago"]].map(([t,time])=>(
            <div key={String(t)} className="flex justify-between py-0.5">
              <span className="text-gray-500 text-[5px] flex items-center gap-0.5"><span className="w-1 h-1 rounded-full bg-violet-500 inline-block"/>{t}</span>
              <span className="text-gray-700 text-[5px]">{time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AuraMockup() {
  return (
    <div className="w-full h-full bg-[#0d1117] flex flex-col p-2 gap-1.5 rounded-t-xl">
      <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-orange-500 flex items-center justify-center text-white text-[8px] font-bold">A</div>
          <span className="text-white text-[8px] font-semibold">Aura Industrial</span>
        </div>
        <div className="bg-white/5 rounded px-1.5 py-0.5 text-gray-600 text-[6px]">Search...</div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[["Orders","142","▲8%",true],["Revenue","₹1.2M","▲12%",true],["Pending","23","▼3%",false]].map(([l,v,c,u])=>(
          <div key={String(l)} className="bg-[#0a0e1a] border border-white/5 rounded p-1">
            <div className="text-gray-600 text-[5px]">{l}</div>
            <div className="text-white text-[8px] font-bold">{v}</div>
            <div className={`text-[5px] ${u?"text-green-400":"text-red-400"}`}>{c}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1 flex-1">
        <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5">
          <div className="text-gray-500 text-[6px] mb-1">Sales Chart</div>
          <div className="flex items-end gap-0.5 h-8">
            {[30,50,40,65,45,70,55,80].map((h,i)=>(
              <div key={i} className="flex-1 rounded-sm" style={{height:`${h}%`,background:"linear-gradient(to top,#ea580c,#fb923c)"}} />
            ))}
          </div>
        </div>
        <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5">
          <div className="text-gray-500 text-[6px] mb-1">Top Products</div>
          {[["Hydraulic Pump","₹12,500"],["Industrial Valve","₹4,200"],["Flow Meter","₹6,750"]].map(([n,p])=>(
            <div key={String(n)} className="flex justify-between py-0.5 border-b border-white/5">
              <span className="text-gray-500 text-[5px] truncate max-w-[45px]">{n}</span>
              <span className="text-orange-400 text-[5px]">{p}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5">
        <div className="text-gray-500 text-[6px] mb-0.5">Recent Orders</div>
        {[["ORD-001","Hydraulic Pump","Delivered"],["ORD-002","Industrial Valve","Processing"],["ORD-003","Pressure Gauge","Pending"]].map(([id,item,s])=>(
          <div key={String(id)} className="flex justify-between py-0.5">
            <span className="text-gray-600 text-[5px]">{id}</span>
            <span className="text-gray-500 text-[5px] truncate max-w-[50px]">{item}</span>
            <span className={`text-[5px] px-1 rounded ${s==="Delivered"?"bg-green-500/20 text-green-400":s==="Processing"?"bg-orange-500/20 text-orange-400":"bg-gray-500/20 text-gray-400"}`}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="w-full h-full bg-[#0d1117] flex flex-col p-2 gap-1.5 rounded-t-xl">
      <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-white text-[8px]">🛒</div>
          <span className="text-white text-[8px] font-semibold">Ecommerce</span>
        </div>
        <span className="bg-blue-500/20 text-blue-400 text-[6px] px-1.5 py-0.5 rounded-full border border-blue-500/30">Live</span>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[["Products","4,820"],["Orders","1,340"],["Revenue","₹8.2M"]].map(([l,v])=>(
          <div key={String(l)} className="bg-[#0a0e1a] border border-white/5 rounded p-1 text-center">
            <div className="text-gray-600 text-[5px]">{l}</div>
            <div className="text-blue-400 text-[8px] font-bold">{v}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1 flex-1">
        <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5">
          <div className="text-gray-500 text-[6px] mb-1">Sales Chart</div>
          <div className="flex items-end gap-0.5 h-8">
            {[40,65,45,80,55,90,70,85].map((h,i)=>(
              <div key={i} className="flex-1 rounded-sm" style={{height:`${h}%`,background:"linear-gradient(to top,#1d4ed8,#60a5fa)"}} />
            ))}
          </div>
        </div>
        <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5">
          <div className="text-gray-500 text-[6px] mb-1">Top Products</div>
          {[["Running Shoes","₹2,499"],["Wireless Earbuds","₹1,899"],["Smart Watch","₹4,299"]].map(([n,p])=>(
            <div key={String(n)} className="flex justify-between py-0.5 border-b border-white/5">
              <span className="text-gray-500 text-[5px] truncate max-w-[45px]">{n}</span>
              <span className="text-blue-400 text-[5px]">{p}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5">
        <div className="text-gray-500 text-[6px] mb-0.5">Recent Orders</div>
        {[["#5021","Running Shoes","Shipped"],["#5022","Earbuds Pro","Processing"],["#5023","Smart Watch","Pending"]].map(([id,item,s])=>(
          <div key={String(id)} className="flex justify-between py-0.5">
            <span className="text-gray-600 text-[5px]">{id}</span>
            <span className="text-gray-500 text-[5px] truncate max-w-[50px]">{item}</span>
            <span className={`text-[5px] px-1 rounded ${s==="Shipped"?"bg-green-500/20 text-green-400":s==="Processing"?"bg-yellow-500/20 text-yellow-400":"bg-gray-500/20 text-gray-400"}`}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ERPMockup() {
  return (
    <div className="w-full h-full bg-[#0d1117] flex flex-col p-2 gap-1.5 rounded-t-xl">
      <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-emerald-600 flex items-center justify-center text-white text-[8px] font-bold">E</div>
          <span className="text-white text-[8px] font-semibold">ERP System</span>
        </div>
        <span className="text-gray-600 text-[6px]">FY 2024-25</span>
      </div>
      <div className="grid grid-cols-4 gap-1">
        {[["Staff","248","👥"],["Stock","1,820","📦"],["Finance","₹4.2M","💰"],["Tasks","94","✅"]].map(([l,v,ic])=>(
          <div key={String(l)} className="bg-[#0a0e1a] border border-white/5 rounded p-1 text-center">
            <div className="text-[10px] leading-none mb-0.5">{ic}</div>
            <div className="text-white text-[7px] font-bold">{v}</div>
            <div className="text-gray-600 text-[5px]">{l}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1 flex-1">
        <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5">
          <div className="text-gray-500 text-[6px] mb-1">Dept Budget</div>
          {[["HR","75%","#10b981"],["Finance","60%","#3b82f6"],["Ops","88%","#f59e0b"],["IT","45%","#8b5cf6"]].map(([d,w,c])=>(
            <div key={String(d)} className="flex items-center gap-1 mb-0.5">
              <div className="w-6 text-[5px] text-gray-600">{d}</div>
              <div className="flex-1 h-1 bg-white/5 rounded-full"><div className="h-full rounded-full" style={{width:String(w),backgroundColor:String(c)}} /></div>
            </div>
          ))}
        </div>
        <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5">
          <div className="text-gray-500 text-[6px] mb-1">Attendance</div>
          <div className="flex items-center justify-center h-10 relative">
            <svg viewBox="0 0 36 36" className="w-10 h-10 -rotate-90">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#1e293b" strokeWidth="4"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="#10b981" strokeWidth="4" strokeDasharray="75 25" strokeLinecap="round"/>
            </svg>
            <div className="absolute text-white text-[7px] font-bold">75%</div>
          </div>
          <div className="flex justify-around">
            <div className="text-center"><div className="text-green-400 text-[6px] font-bold">186</div><div className="text-gray-600 text-[5px]">Present</div></div>
            <div className="text-center"><div className="text-red-400 text-[6px] font-bold">62</div><div className="text-gray-600 text-[5px]">Absent</div></div>
          </div>
        </div>
      </div>
      <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5">
        <div className="text-gray-500 text-[6px] mb-0.5">Recent Payroll</div>
        {[["Engineering","₹4,20,000","Paid"],["Marketing","₹1,80,000","Paid"],["Operations","₹2,40,000","Pending"]].map(([d,a,s])=>(
          <div key={String(d)} className="flex justify-between py-0.5">
            <span className="text-gray-500 text-[5px]">{d}</span>
            <span className="text-emerald-400 text-[5px]">{a}</span>
            <span className={`text-[5px] px-1 rounded ${s==="Paid"?"bg-green-500/20 text-green-400":"bg-yellow-500/20 text-yellow-400"}`}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CarRentalMockup() {
  return (
    <div className="w-full h-full bg-[#0d1117] flex flex-col p-2 gap-1.5 rounded-t-xl">
      <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-yellow-500 flex items-center justify-center text-[9px]">🚗</div>
          <span className="text-white text-[8px] font-semibold">Car Rental</span>
        </div>
        <span className="bg-yellow-500/20 text-yellow-400 text-[6px] px-1.5 py-0.5 rounded-full border border-yellow-500/30">Active</span>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[["Fleet","48"],["Rented","31"],["Available","17"]].map(([l,v])=>(
          <div key={String(l)} className="bg-[#0a0e1a] border border-white/5 rounded p-1 text-center">
            <div className="text-gray-600 text-[5px]">{l}</div>
            <div className="text-yellow-400 text-[8px] font-bold">{v}</div>
          </div>
        ))}
      </div>
      <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5">
        <div className="text-gray-500 text-[6px] mb-1">OCR Document Scan</div>
        <div className="flex gap-1.5">
          <div className="flex-1 bg-white/5 border border-dashed border-white/10 rounded p-1 flex flex-col items-center gap-0.5">
            <span className="text-sm">🪪</span>
            <span className="text-gray-600 text-[5px]">Driving License</span>
            <span className="bg-green-500/20 text-green-400 text-[5px] px-1 rounded">Verified ✓</span>
          </div>
          <div className="flex-1 bg-white/5 border border-dashed border-white/10 rounded p-1 flex flex-col items-center gap-0.5">
            <span className="text-sm">📄</span>
            <span className="text-gray-600 text-[5px]">ID Proof</span>
            <span className="bg-green-500/20 text-green-400 text-[5px] px-1 rounded">Verified ✓</span>
          </div>
        </div>
      </div>
      <div className="bg-[#0a0e1a] border border-white/5 rounded p-1.5 flex-1">
        <div className="text-gray-500 text-[6px] mb-0.5">Active Rentals</div>
        {[["Toyota Camry","John D.","3 days"],["Honda City","Sarah M.","1 day"],["BMW 3 Series","Alex K.","5 days"]].map(([car,cust,dur])=>(
          <div key={String(car)} className="flex justify-between py-0.5 border-b border-white/5">
            <span className="text-gray-400 text-[5px]">{car}</span>
            <span className="text-gray-600 text-[5px]">{cust}</span>
            <span className="text-yellow-400 text-[5px]">{dur}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects = [
  {
    title: "CRM",
    desc: "Enterprise CRM platform to manage leads, quotations, contracts, tickets, customers and reports.",
    tags: ["Laravel", "Vue.js", "MySQL", "REST API"],
    featured: true,
    mockup: <CRMMockup />,
    link: null,
  },
  {
    title: "Aura Industrial",
    desc: "Industrial B2B platform for managing products, orders, invoices and operations.",
    tags: ["Laravel", "MySQL", "Bootstrap", "REST API"],
    featured: true,
    mockup: <AuraMockup />,
    link: "https://auraindustrial.tamiloverseas.com/login",
  },
  {
    title: "Ecommerce",
    desc: "Full-featured ecommerce platform with product management, orders, payments and storefront.",
    tags: ["Laravel", "MySQL", "AWS", "React.js"],
    featured: false,
    mockup: <EcommerceMockup />,
    link: null,
  },
  {
    title: "ERP",
    desc: "ERP solution for managing HR, finance, inventory, and operations.",
    tags: ["Laravel", "Vue 3", "MySQL"],
    featured: false,
    mockup: <ERPMockup />,
    link: null,
  },
  {
    title: "Car Rental",
    desc: "Car rental system with OCR document processing and real-time insights.",
    tags: ["PHP", "OCR", "MySQL", "Bootstrap"],
    featured: false,
    mockup: <CarRentalMockup />,
    link: null,
  },
];

const VISIBLE = 4;

export default function Projects() {
  const [start, setStart] = useState(0);

  const visible = Array.from({ length: VISIBLE }, (_, i) => projects[(start + i) % projects.length]);

  return (
    <section id="projects" className="py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <p className="text-violet-400 text-xs font-bold tracking-widest uppercase">Featured Projects</p>
          <button
            onClick={() => setStart((s) => (s + 1) % projects.length)}
            className="text-gray-400 text-sm hover:text-white transition-colors"
          >
            View All Projects →
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {visible.map((p, i) => (
            <div key={`${p.title}-${start}-${i}`} className="bg-[#0d1117] border border-white/10 hover:border-violet-500/30 rounded-xl overflow-hidden transition-all duration-300 group flex flex-col">
              {/* Mockup screenshot area */}
              <div className="h-44 relative overflow-hidden border-b border-white/5">
                {p.mockup}
                {p.featured && (
                  <span className="absolute bottom-2 right-2 bg-violet-600 text-white text-[9px] px-2 py-0.5 rounded z-10">Featured</span>
                )}
              </div>
              {/* Info */}
              <div className="p-3 flex flex-col gap-2 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-semibold text-sm group-hover:text-violet-400 transition-colors">{p.title}</h3>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-400 text-xs transition-colors">↗</a>
                  )}
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-1 mt-auto">
                  {p.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/10 text-gray-400 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              className={`transition-all rounded-full ${i === start % projects.length ? "w-5 h-1.5 bg-violet-500" : "w-1.5 h-1.5 bg-gray-700 hover:bg-gray-500"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
