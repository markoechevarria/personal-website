import { socialLinks } from '../data/constants'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-14">
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-text mb-4">
            Hi, I'm <span className="text-accent">Marko Echevarria</span>
          </h1>
          <p className="text-xl text-text-muted mb-8">
            Data Engineer Jr. building data pipelines with Apache Airflow, PySpark,
            and Databricks on AWS. Full-stack background in TypeScript, Python, and cloud-native infrastructure.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-border text-sm text-text-muted hover:border-accent hover:text-text transition-all"
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </a>
            ))}
          </div>
          <a
            href="#projects"
            className="inline-block px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
          >
            View my work
          </a>
        </div>
      </div>
    </section>
  )
}
