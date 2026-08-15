export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#0f0f1a] to-[#0a0a14] border border-white/10 rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full border-2 border-violet-500/40 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">✈</span>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Let&apos;s Build Something<br />
                <span className="text-violet-400">Amazing</span> Together!
              </h2>
              <p className="text-gray-500 text-sm max-w-sm">
                Have a project in mind? Let&apos;s discuss how I can help you turn your ideas into powerful solutions.
              </p>
            </div>
          </div>
          {/* Middle CTA */}
          <a
            href="mailto:csviky8@gmail.com"
            className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors whitespace-nowrap flex-shrink-0"
          >
            Get In Touch →
          </a>
          {/* Right info */}
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-violet-400">✉</span>
              csviky8@gmail.com
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-violet-400">📍</span>
              Chennai, India
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-violet-400">🕐</span>
              Open for opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
