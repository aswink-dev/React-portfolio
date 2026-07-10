import { motion } from "framer-motion";
import { profile, socialLinks } from "../data/portfolioData";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.18),transparent_32%)]" />
      <motion.div
        className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
            {profile.role}
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl md:text-7xl">
            Hi, I am <span className="text-blue-400">{profile.name}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I build responsive, modern web applications with React.js, JavaScript and Tailwind CSS, focusing on clean design, smooth user experiences, and maintainable code.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            
            <motion.a
              href="/resume/Aswin_K_Frontend_Developer_Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-purple-400 hover:text-purple-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-purple-400 hover:text-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </div>


          <div className="mt-8 flex gap-4" aria-label="Social links">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition hover:border-blue-400 hover:text-blue-400"
                  aria-label={link.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Icon size={21} aria-hidden="true" />
                </motion.a>
              );
            })}
          </div>
        </div>

        <motion.div
          className="mx-auto w-full max-w-sm lg:max-w-md"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }}
        >
          <div className="relative rounded-2xl border border-white/10 bg-white/0.04 p-3 shadow-2xl shadow-blue-950/30">
            <div className="absolute -inset-1 -z-10 rounded-[2.2rem] bg-linear-to-br from-blue-500/40 via-purple-500/20 to-transparent blur-xl" />
            <img
              src="/profile.jpeg"
              alt={`${profile.name} profile`}
              className="aspect-5/5 w-full rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
