"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Smartphone, LineChart, Globe } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "Building fast, responsive, and SEO-friendly websites using modern frameworks like Next.js and React.js , Angular (experienced 3.7 years)"
  },
  {
    icon: Database,
    title: "Data Analysis",
    desc: "Transforming raw data into actionable insights through visualization and predictive modeling."
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    desc: "Creating intuitive and aesthetically pleasing user interfaces that enhance user experience."
  },
  {
    icon: Smartphone,
    title: "App Development",
    desc: "Developing cross-platform mobile applications with React Native for iOS and Android & ionic framework ."
  },
  {
    icon: LineChart,
    title: "SEO Optimization",
    desc: "Improving website visibility and ranking on search engines to drive organic traffic."
  },
  {
    icon: Globe,
    title: "API Integration",
    desc: "Connecting third-party services and APIs to extend the functionality of your applications."
  }
];

const Services = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-indigo-400 mb-2 uppercase tracking-wider">What I Do</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">My Services</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;