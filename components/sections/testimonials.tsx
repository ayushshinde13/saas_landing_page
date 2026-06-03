'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote:
      'SaaSFlow transformed how we build products. The real-time collaboration features alone have saved us countless hours.',
    author: 'Sarah Chen',
    role: 'Product Manager',
    company: 'TechCorp',
    avatar: 'SC',
    rating: 5,
  },
  {
    quote:
      'The AI-powered insights have been a game-changer. We can now make data-driven decisions faster than ever.',
    author: 'Marcus Johnson',
    role: 'CEO',
    company: 'StartupXYZ',
    avatar: 'MJ',
    rating: 5,
  },
  {
    quote:
      'Enterprise security is often a afterthought, but SaaSFlow gets it right. Our team feels safe and protected.',
    author: 'Emily Rodriguez',
    role: 'Security Lead',
    company: 'FinanceFlow',
    avatar: 'ER',
    rating: 5,
  },
  {
    quote:
      'The integration capabilities are incredible. We connected all our tools in minutes, not days.',
    author: 'David Park',
    role: 'Operations Lead',
    company: 'CloudSoft',
    avatar: 'DP',
    rating: 5,
  },
  {
    quote:
      'Customer support is outstanding. Every question we had was answered within minutes by a knowledgeable team.',
    author: 'Jessica Walsh',
    role: 'Founder',
    company: 'GrowthLab',
    avatar: 'JW',
    rating: 5,
  },
  {
    quote:
      'The analytics dashboard is beautifully designed and incredibly powerful. It helped us identify growth opportunities.',
    author: 'Alex Thompson',
    role: 'Data Analyst',
    company: 'InsightHub',
    avatar: 'AT',
    rating: 5,
  },
];

export function Testimonials() {
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
      id="testimonials"
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
            Loved by <span className="gradient-text">developers & teams</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
            See what our users have to say about their experience with SaaSFlow.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-card dark:glass-card glass-card-light p-6 sm:p-8 flex flex-col justify-between"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow text-sm leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-400 flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
