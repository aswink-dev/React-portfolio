import {
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";
import { MdDevices } from "react-icons/md";

// Images
import adminDashboardImg from "../assets/adminDashboardImg.png";
import portfolioImg from "../assets/portfolio-preview.png";
import cartlyImg from "../assets/Cartly-image.png";
import formBuilderImg from "../assets/Dynamic-form-builder.png";

export const profile = {
  name: "Aswin k",
  role: "Frontend Developer",
  email: "aswinctm@gmail.com",
  github: "https://github.com/aswink-dev",
  linkedin: "https://www.linkedin.com/in/aswink-dev",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Learning", href: "#learning" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: FaEnvelope },
];

export const skills = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript (ES6+)", icon: SiJavascript },
  { name: "React.js", icon: FaReact },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Responsive Web Design", icon: MdDevices },
];

export const projects = [
  {
    title: "Cartly - Modern E-Commerce Platform",
    image: cartlyImg,
    description:
      "Developed a premium e-commerce application with responsive design, product search, category filtering, shopping cart, wishlist, dark/light theme, animated interactions, and performance optimizations using modern React best practices.",
    technologies: [
      "React",
      "React Router",
      "React Query",
      "Context API",
      "Tailwind CSS",
      "Framer Motion",
      "Axios",
    ],
    github: "https://github.com/aswink-dev/CARTLY.git",
    demo: "https://cartly-xi.vercel.app",
  },
  {
    title: "Dynamic Form Builder",
    image: formBuilderImg,
    description:
      "Developed a dynamic form builder that enables users to create and organize customizable forms with drag-and-drop functionality, reusable components, and centralized state management using Redux Toolkit.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "@dnd-kit",
    ],
    github: "https://github.com/aswink-dev/Dynamic-Form-Builder.git",
    demo: "https://dynamic-form-builder-beta-two.vercel.app",
  },
  {
    title: "Responsive Admin Dashboard",
    image: adminDashboardImg,
    description:
      "Built a responsive admin dashboard featuring reusable UI components, interactive statistics cards, and a mobile-friendly sidebar to deliver a seamless user experience.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    github:
      "https://github.com/aswink-dev/React-Responsive-Admin-Dashboard.git",
    demo: "https://admindashboard-react07.netlify.app",
  },
  {
    title: "Personal Portfolio Website",
    image: portfolioImg,
    description:
      "Designed and developed a fully responsive personal portfolio to showcase projects, technical skills, and professional experience with smooth animations and a modern UI.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/aswink-dev/React-portfolio.git",
    demo: "https://aswink-dev-portfolio.vercel.app",
  },
];

export const learningItems = [
  {
    name: "Redux",
    icon: SiRedux,
    subtitle: "Scalable state management for React.",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    subtitle: "JavaScript runtime for backend development.",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    subtitle: "Building RESTful APIs with Node.js.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    subtitle: "NoSQL database for modern applications.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    subtitle: "Full-stack React framework.",
  },
];
