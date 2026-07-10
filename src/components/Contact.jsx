import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

const contactMethods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    value: "github.com/aswink-dev",
    href: profile.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aswink-dev",
    href: profile.linkedin,
    icon: FaLinkedin,
  },
];

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      console.log(result.text);

      alert("Message sent successfully!");

      form.current.reset();
    } catch (error) {
      console.log(error);

      alert("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Create Something Great Together"
          description="I'm open to frontend internships, junior developer opportunities, and collaborations where I can contribute, learn, and grow."
        />

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target={
                    method.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    method.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/0.04 p-5 transition hover:border-blue-400/60 hover:bg-white/[0.07]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-400">
                      {method.label}
                    </span>
                    <span className="break-all font-semibold text-white">
                      {method.value}
                    </span>
                  </span>
                </a>
              );
            })}
          </motion.div>

          <motion.form
            ref={form}
            className="rounded-2xl border border-white/10 bg-white/0.04 p-6 shadow-2xl shadow-blue-950/20 md:p-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-200">
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                />
              </label>
              <label className="text-sm font-medium text-slate-200">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium text-slate-200">
              Message
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project, opportunity, or idea..."
                required
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400"
              />
            </label>
            <motion.button
              type="submit"
              className="mt-6 w-full rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:w-auto"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
