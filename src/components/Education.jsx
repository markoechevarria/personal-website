import { education } from '../data/constants'

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-8">
          <h2 className="text-2xl font-semibold text-text mb-2">Education</h2>
        <div className="space-y-6">
          {education.map(({ institution, degree, period, description }) => (
            <div key={institution} className="border-l border-border pl-6">
              <h3 className="text-text font-medium">{degree}</h3>
              <p className="text-sm text-text-muted mb-1">{institution} · {period}</p>
              <p className="text-sm text-text-muted">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
