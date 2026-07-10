import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About me"
          title="Focused on learning, building, and improving"
          description="A quick look at who I am and why frontend development became the path I want to grow in."
        />

        <motion.div
          className="rounded-2xl border border-white/10 bg-white/0.04 p-6 shadow-2xl shadow-blue-950/20 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <div className="grid gap-6 text-slate-300 md:grid-cols-2">
            <p className="leading-8">
              I’m Aswin K, a frontend developer passionate about building
              modern, responsive web applications with React.js, JavaScript, and
              Tailwind CSS. I enjoy transforming ideas into intuitive,
              user-friendly interfaces while writing clean and maintainable
              code.
            </p>

            <p className="leading-8">
              I’m continuously expanding my skills by building real-world
              projects and exploring modern frontend technologies. My goal is to
              contribute to meaningful products, collaborate with experienced
              developers, and create digital experiences that are both
              functional and visually engaging.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
