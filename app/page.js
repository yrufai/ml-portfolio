import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <footer className="py-8 text-center text-[#8b949e] text-sm border-t border-[#30363d]">
        © {new Date().getFullYear()} Rufai Yakubu
      </footer>
    </main>
  );
}
