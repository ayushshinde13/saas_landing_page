'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const footerLinks = {
  Product: ['Features', 'Pricing', 'Security', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Resources: ['Documentation', 'API Docs', 'Support', 'Community'],
  Legal: ['Privacy', 'Terms', 'Cookies', 'License'],
};

export function Footer() {
  return (
    <footer className="border-t dark:border-slate-800 border-gray-200 py-16 sm:py-24 dark:bg-slate-950 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="SaaSFlow Logo"
                width={40}
                height={40}
                className="w-8 h-8"
              />
              <span className="font-bold text-lg bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-400 dark:to-cyan-400 bg-clip-text text-transparent">
                SaaSFlow
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Everything you need to build, launch, and scale your SaaS.
            </p>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t dark:border-slate-800 border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1"
          >
            Made with{' '}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by the
            SaaSFlow team. © 2026 All rights reserved.
          </motion.p>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:dark:bg-slate-800 hover:bg-gray-200 transition-colors"
            >
              <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:dark:bg-slate-800 hover:bg-gray-200 transition-colors"
            >
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:dark:bg-slate-800 hover:bg-gray-200 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
