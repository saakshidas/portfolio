"use client";

import { motion } from "framer-motion";

import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    category: "Web Development",
    image: "/project1.jpg", // Placeholder
    tech: ["Next.js", "Tailwind", "Prisma"],
    link: "#",
    github: "#"
  },
  {
    title: "Crochet Application ",
    category: "Mean stack",
    image: "/project2.jpg",
    tech: ["Node.js", "Angular", "MongoDB"],
    link: "#",
    github: "#"
  },
  {
    title: "Social Media App",
    category: "Mobile App",
    image: "/project3.jpg",
    tech: ["React Native", "Firebase"],
    link: "#",
    github: "#"
  }
];

const Portfolio = () => {
  return (
    <section className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Recent Projects</h3>
          </div>
          <button className="text-white border-b border-indigo-500 pb-1 hover:text-indigo-400 transition-colors">
            View All Projects
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
            >
              {/* Image Placeholder */}
              <div className="aspect-video w-full bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-500 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-4xl opacity-20">
                  PROJECT
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-indigo-400 text-sm font-medium mb-2">{project.category}</span>
                <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                <div className="flex gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs text-gray-300 bg-white/10 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.link} className="p-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a href={project.github} className="p-2 bg-black/50 text-white backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;