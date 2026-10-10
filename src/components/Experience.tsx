import { experiences } from '../data/constants'

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-8">
            <h2 className="text-2xl font-semibold text-text mb-2">Experience</h2>
        <p className="text-text-muted mb-10">My professional journey</p>
        <div className="relative">
          <div className="absolute left-[30px] top-0 bottom-0 w-0.5 bg-border md:left-[60px]"></div>
          <div className="space-y-10 md:space-y-12">
            {experiences.map(({ company, role, period, location, description }) => (
              <div key={`${company}-${period}`} className="relative">
                <div className="absolute w-3 h-3 bg-accent rounded-full left-[25px] md:left-[55px] top-1"></div>
                <div className="ml-[60px] md:ml-[90px]">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                    <h3 className="text-text font-medium">{role}</h3>
                    <span className="text-sm text-text-muted">{period}</span>
                  </div>
                  <p className="text-sm text-text-muted mb-1">
                    {company} · {location}
                  </p>
                  <ul className="text-sm text-text-muted space-y-1">
                    {description.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
