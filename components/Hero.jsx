"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-60 -right-60 w-[500px] h-[500px] bg-[#58a6ff]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-60 -left-60 w-[500px] h-[500px] bg-[#58a6ff]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="inline-block px-4 py-1.5 text-sm text-[#58a6ff] border border-[#58a6ff]/30 rounded-full mb-8 bg-[#58a6ff]/5"
          >
            Machine Learning Engineer
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold text-[#e6edf3] mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="text-[#58a6ff]">Rufai Yakubu</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Machine Learning Engineer passionate about building intelligent
            systems. I work at the intersection of research and production,
            turning data into impactful products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <a
              href="https://github.com/yrufai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#58a6ff] text-[#0d1117] font-semibold rounded-lg hover:bg-[#79b8ff] transition-colors"
            >
              GitHub
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-[#30363d] text-[#e6edf3] font-semibold rounded-lg hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors"
            >
              View Projects
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
