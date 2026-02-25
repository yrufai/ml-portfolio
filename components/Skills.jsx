"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "SQL", "R", "JavaScript", "Bash"],
  },
  {
    category: "ML / Deep Learning",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Hugging Face", "OpenCV", "NLTK"],
  },
  {
    category: "Data & Visualization",
    skills: ["pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    category: "MLOps & Tools",
    skills: ["MLflow", "Docker", "Git", "Jupyter", "FastAPI", "Airflow"],
  },
  {
    category: "Cloud",
    skills: ["AWS SageMaker", "GCP Vertex AI", "Azure ML"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6" style={{ backgroundColor: "#161b22" + "80" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-3">
          Skills
        </h2>
        <p className="text-[#8b949e] mb-12">
          Technologies and tools I work with.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-5"
            >
              <h3 className="text-[#58a6ff] font-semibold mb-4 text-xs uppercase tracking-widest">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#0d1117] border border-[#30363d] text-[#e6edf3] text-sm rounded-full hover:border-[#58a6ff]/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
