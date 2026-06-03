'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Zap,
  Brain,
  TrendingUp,
  Plug,
  Shield,
  HeadphonesIcon,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Real-time Collaboration',
    description:
      'Work together seamlessly with your team. See changes instantly as they happen.',
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description:
      'Get intelligent recommendations powered by machine learning to optimize your workflow.',
  },
  {
    icon: TrendingUp,
    title: 'Advanced Analytics',
    description:
      'Track metrics that matter with powerful dashboards and detailed reports.',
  },
  {
    icon: Plug,
    title: 'Seamless Integrations',
    description:
      'Connect your favorite tools. We integrate with 500+ apps out of the box.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-level encryption and compliance. Your data is always protected.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description:
      'Our expert team is ready to help you anytime, anywhere in the world.',
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    <section
      id="features"
      ref={ref}
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white text-balance">
            Everything you need to{' '}
            <span className="gradient-text">move fast</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
            Powerful features designed to help you build, launch, and scale your
            SaaS product faster than ever before.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card dark:glass-card glass-card-light p-6 sm:p-8"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
