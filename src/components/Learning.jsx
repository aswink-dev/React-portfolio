import { motion } from 'framer-motion'
import { learningItems } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

const Learning = () => {
  return (
    <section id="learning" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Currently learning"
          title="Growing step by step"
          description="I am expanding beyond frontend basics so I can understand complete web applications and collaborate better."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {learningItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.name}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center shadow-lg shadow-black/20"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                whileHover={{ y: -6, borderColor: 'rgba(96,165,250,0.7)' }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-300">
                  <Icon size={28} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-white">{item.name}</h3>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Learning
