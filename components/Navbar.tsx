"use client";
import { useState } from "react";

const links = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-lg font-bold text-white flex items-center gap-2">
          <span className="bg-violet-600 text-white text-xs font-bold px-1.5 py-0.5 rounded">VR</span>
          Vignesh R.
        </span>
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          {links.map((l) => (
            <li key={l}>
              <a
                href={l === "Home" ? "#hero" : `#${l.toLowerCase()}`}
                className="hover:text-white transition-colors relative group"
              >
                {l}
                {l === "Home" && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-violet-500 rounded" />
                )}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg text-sm font-medium transition-colors"
        >
          ✈ Let&apos;s Talk
        </a>
        <button className="md:hidden text-gray-300 text-xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-sm text-gray-300 border-t border-white/10 pt-4">
          {links.map((l) => (
            <li key={l}>
              <a
                href={l === "Home" ? "#hero" : `#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="hover:text-violet-400 transition-colors"
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setOpen(false)} className="text-violet-400">
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
