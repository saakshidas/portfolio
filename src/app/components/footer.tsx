"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-white/10 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-2">
            SD<span className="text-indigo-500">.</span>
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Saakshi Das. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;