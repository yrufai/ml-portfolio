import ProjectCard from "./ProjectCard";

async function getRepos() {
  try {
    const res = await fetch(
      "https://api.github.com/users/yrufai/repos?sort=updated&per_page=12&type=public",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return [];
    const repos = await res.json();
    return repos
      .filter((r) => !r.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch {
    return [];
  }
}

export default async function Projects() {
  const repos = await getRepos();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-3">
          Projects
        </h2>
        <p className="text-[#8b949e] mb-12">
          Open-source work from my GitHub — updated automatically.
        </p>

        {repos.length === 0 ? (
          <p className="text-[#8b949e]">Could not load projects at this time.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {repos.map((repo, i) => (
              <ProjectCard key={repo.id} repo={repo} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
