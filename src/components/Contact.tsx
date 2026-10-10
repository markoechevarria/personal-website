import { socialLinks } from '../data/constants'

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container mx-auto px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-text mb-4">Let's connect</h2>
          <p className="text-text-muted mb-6">
            I'm open to data engineering. Feel free to reach out
            via email or connect through any of my social channels.
          </p>
          <a
            href="mailto:markofidel10@gmail.com"
            className="inline-block px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover transition-colors mb-8"
          >
            markofidel10@gmail.com
          </a>
          <div className="flex gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface border border-border text-text-muted hover:border-accent hover:text-accent transition-all"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
