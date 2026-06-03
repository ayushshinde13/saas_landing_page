'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'Forever free',
    description: 'Perfect for trying out SaaSFlow',
    features: [
      'Up to 3 projects',
      'Real-time collaboration',
      'Basic analytics',
      'Community support',
      '2GB storage',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams and projects',
    features: [
      'Unlimited projects',
      'Real-time collaboration',
      'Advanced analytics',
      'Priority support',
      '100GB storage',
      'Custom integrations',
      'API access',
      'Team management',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Dedicated pricing',
    description: 'For large-scale operations',
    features: [
      'Everything in Pro',
      'Unlimited storage',
      '24/7 dedicated support',
      'Single sign-on (SSO)',
      'Advanced security',
      'Custom contracts',
      'Onboarding support',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isAnnual, setIsAnnual] = useState(false);

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
      id="pricing"
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
            Simple, <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 text-balance">
            Choose the perfect plan for your needs. Always flexible to scale.
          </p>

          {/* Toggle */}
          <div className="inline-flex rounded-full dark:bg-slate-800 bg-gray-200 p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                !isAnnual
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-semibold transition-all relative ${
                isAnnual
                  ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Annual
              {isAnnual && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-green-600 dark:text-green-400 whitespace-nowrap">
                  Save 20%
                </span>
              )}
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={plan.highlighted ? { y: -8 } : { y: 0 }}
              className={`relative rounded-2xl transition-all ${
                plan.highlighted
                  ? 'md:scale-105 dark:bg-gradient-to-b dark:from-indigo-500/10 dark:to-cyan-500/10 bg-gradient-to-b from-indigo-50 to-cyan-50 border-2 dark:border-indigo-500/30 border-indigo-200 shadow-xl dark:shadow-indigo-500/20'
                  : 'glass-card dark:glass-card glass-card-light'
              } p-8`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full dark:bg-indigo-500/20 bg-indigo-200 dark:text-indigo-200 text-indigo-700 text-xs font-semibold border dark:border-indigo-500/30 border-indigo-300">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">
                  {plan.price}
                </span>
                <span className="text-gray-600 dark:text-gray-400 ml-2 text-sm">
                  {plan.period}
                </span>
              </div>

              <button
                className={`w-full py-3 rounded-full font-semibold mb-8 transition-all ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-indigo-500/50'
                    : 'dark:bg-white/10 bg-gray-200 text-gray-900 dark:text-white hover:dark:bg-white/20 hover:bg-gray-300'
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
