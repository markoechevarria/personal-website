import { skillCategories } from '../data/constants'

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="container mx-auto px-8">
            <h2 className="text-2xl font-semibold text-text mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
          {skillCategories.map(({ category, items }) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-accent mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-md bg-surface text-text-muted border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
