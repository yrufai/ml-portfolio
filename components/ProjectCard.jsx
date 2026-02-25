"use client";

import { motion } from "framer-motion";

const languageColors = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  Jupyter: "#DA5B0B",
  R: "#198CE7",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
  Go: "#00ADD8",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
};

export default function ProjectCard({ repo, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 flex flex-col gap-3 hover:border-[#58a6ff]/50 transition-colors group"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-[#e6edf3] group-hover:text-[#58a6ff] transition-colors line-clamp-1 capitalize">
          {repo.name.replace(/-/g, " ")}
        </h3>
        {repo.language && (
          <span
            className="text-xs px-2 py-0.5 rounded-full whitespace-nowrap font-medium shrink-0"
            style={{
              backgroundColor: `${languageColors[repo.language] || "#8b949e"}22`,
              color: languageColors[repo.language] || "#8b949e",
              border: `1px solid ${languageColors[repo.language] || "#8b949e"}44`,
            }}
          >
            {repo.language}
          </span>
        )}
      </div>

      <p className="text-[#8b949e] text-sm leading-relaxed line-clamp-2 flex-1">
        {repo.description || "No description provided."}
      </p>

      <div className="flex items-center gap-4 text-[#8b949e] text-xs">
        <span>⭐ {repo.stargazers_count}</span>
        <span>🍴 {repo.forks_count}</span>
      </div>

      <div className="flex gap-3 mt-1">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#58a6ff] hover:underline"
        >
          View Code →
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#8b949e] hover:text-[#58a6ff] hover:underline transition-colors"
          >
            Live Demo →
          </a>
        )}
      </div>
    </motion.div>
  );
}
