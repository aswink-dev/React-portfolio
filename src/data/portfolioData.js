import {
  FaCss3Alt,
  FaEnvelope,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
} from 'react-icons/si'
import { MdDevices } from 'react-icons/md'

// Images
import adminDashboardImg from '../assets/adminDashboardImg.png'
import portfolioImg from '../assets/portfolio-preview.png'


export const profile = {
  name: 'Aswin k',
  role: 'Frontend Developer',
  email: 'aswinctm@gmail.com',
  github: 'https://github.com/aswink-dev',
  linkedin: 'https://www.linkedin.com/in/aswink-dev',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
]

export const socialLinks = [
  { label: 'GitHub', href: profile.github, icon: FaGithub },
  { label: 'LinkedIn', href: profile.linkedin, icon: FaLinkedin },
  { label: 'Email', href: `mailto:${profile.email}`, icon: FaEnvelope },
]

export const skills = [
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'JavaScript (ES6+)', icon: SiJavascript },
  { name: 'React.js', icon: FaReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Responsive Web Design', icon: MdDevices },
]

export const projects = [
  {
    title: 'Responsive Admin Dashboard',
    image: adminDashboardImg,
    description:
      'A clean dashboard layout with responsive cards, charts, quick stats, and a mobile-friendly sidebar.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/aswink-dev/React-Responsive-Admin-Dashboard.git',
  },
  {
    title: 'Personal Portfolio Website',
    image: portfolioImg,
    description:
      'A dark, responsive portfolio design built to present skills, projects, and contact details clearly.',
    technologies: ['React', 'Framer Motion', 'Tailwind CSS'],
    github: profile.github,
  },
]

export const learningItems = [
  { name: 'Redux', icon: SiRedux },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Next.js', icon: SiNextdotjs },
]
