"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import mefav from "../images/mefav.jpg";

// You can replace this with your actual image path or a placeholder
// Assuming we have an image at public/avatar.jpg or similar. 
// If not, I'll use a gradient div as placeholder.
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for work
          </motion.div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              experiences
            </span>{" "}
            that matter.
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            I&apos;m Saakshi Das, a Software Developer. I build accessible,
            pixel-perfect, performant, and premium web experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors flex items-center gap-2"
            >
              Contact Me <ArrowRight className="w-4 h-4" />
            </motion.button>

            <div className="flex items-center gap-4 ml-4">
              {[
                { Icon: Github, href: "https://github.com/saakshidas" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/saakshi-das-29b1071a5/" },
                { Icon: Mail, href: "mailto:sakshidas83498@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: "#fff" }}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative lg:h-[600px] flex items-center justify-center p-12"
        >
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* Abstract Shapes */}
            <motion.div
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full border border-white/10 border-dashed"
            />
            <motion.div
              animate={{
                rotate: [360, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-8 rounded-full border border-indigo-500/20"
            />

            {/* Glowing Gradient Blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 blur-3xl rounded-full" />



            {/* Main Image Placeholder or Actual Image */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card border border-white/10 bg-white/5 backdrop-blur-sm p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full relative rounded-2xl overflow-hidden">
                <Image
                  src={mefav}
                  alt="Saakshi Das"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;