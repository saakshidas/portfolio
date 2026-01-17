"use client";

import { motion } from "framer-motion";
import mefav from "../images/mefav.jpg";
import Image from "next/image";

const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Python", "SQL", "Tailwind CSS", "Git", "AWS"
];

const About = () => {
  return (
    <section className="py-24 bg-black/30">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative">
            {/* Decorative Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20" />
            <div className="absolute inset-4 border border-white/10 rounded-xl flex items-center justify-center">
              <span className="text-gray-600 font-bold text-xl">
                <Image
                  src={mefav}
                  alt="Saakshi Das"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                /></span>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 bg-indigo-600 p-6 rounded-xl hidden md:block">
            <p className="text-4xl font-bold text-white mb-1">4+</p>
            <p className="text-indigo-200 text-sm">Years of<br />Experience</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Passionate about creating intuitive digital experiences.
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            I am a dedicated Software Developer and Data Analyst with a strong foundation in building
            scalable web applications and deriving insights from complex datasets. My journey involves
            mastering modern frontend frameworks and backend technologies to deliver complete solutions.
          </p>
          <p className="text-gray-400 leading-relaxed mb-8">
            When I&apos;m not coding, I enjoy exploring new technologies, contributing to open-source,
            and solving algorithmic challenges.
          </p>

          <div>
            <h4 className="text-white font-bold mb-4">My Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-indigo-500/50 hover:text-indigo-400 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
