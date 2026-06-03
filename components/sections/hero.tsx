'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-indigo-300 dark:bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-1/4 w-72 h-72 bg-cyan-300 dark:bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-300 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 rounded-full dark:bg-indigo-500/10 bg-indigo-100 dark:text-indigo-200 text-indigo-700 text-sm font-semibold border dark:border-indigo-500/20 border-indigo-200">
              ✦ Now in Public Beta
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-gray-900 dark:text-white"
          >
            Ship products your users will{' '}
            <span className="gradient-text">love, faster than ever</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance"
          >
            Everything you need to build, launch, and scale your SaaS. Collaborate
            in real-time, get insights instantly, and ship with confidence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-shadow"
            >
              Start for Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-full border-2 dark:border-white/20 border-gray-300 text-gray-900 dark:text-white font-semibold hover:dark:bg-white/5 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={itemVariants} className="pt-8 sm:pt-12">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Trusted by 12,000+ teams
            </p>
            <div className="flex items-center justify-center gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 dark:from-indigo-500 dark:to-cyan-500"
                />
              ))}
              <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                +15000
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
