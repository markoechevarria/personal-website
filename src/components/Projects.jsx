import { projects } from '../data/constants'

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="container mx-auto px-8">
          <h2 className="text-2xl font-semibold text-text mb-2">Projects</h2>
        <p className="text-text-muted mb-10">Selected work from my repository</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map(({ title, description, tech, repoUrl }) => (
            <a
              key={title}
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-xl bg-surface border border-border hover:border-accent/50 hover:bg-surface-light transition-all group"
            >
              <h3 className="text-lg font-medium text-text group-hover:text-accent transition-colors mb-2">
                {title}
              </h3>
              <p className="text-sm text-text-muted mb-3 line-clamp-2">
                {description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded bg-bg text-text-muted border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
