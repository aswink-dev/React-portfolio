import { motion } from 'framer-motion'
import { skills } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

const Skills = () => {
  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills"
          title="Tools I use to build frontend projects"
          description="A practical skill set for creating responsive, accessible, and maintainable web interfaces."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.article
                key={skill.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center shadow-lg shadow-black/20 transition hover:border-blue-400/60 hover:bg-white/[0.07]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-300 transition group-hover:bg-blue-500 group-hover:text-white">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {skill.name}
                </h3>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
