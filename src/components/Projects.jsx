import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/portfolioData'
import SectionHeader from './SectionHeader'

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="FEATURED WORK"
          title="Projects That I've Built"
          description="A selection of projects that showcase my journey as a frontend developer. Each project reflects my skills in React, JavaScript, Tailwind CSS, and building responsive, user-friendly web experiences."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/0.04 shadow-xl shadow-black/20 transition hover:border-blue-400/50"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-blue-400 hover:text-blue-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaGithub aria-hidden="true" />
                  GitHub
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
