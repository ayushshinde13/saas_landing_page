'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is included in the free plan?',
    answer:
      'The free plan includes up to 3 projects, real-time collaboration, basic analytics, and community support. Perfect for getting started and testing out SaaSFlow.',
  },
  {
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer:
      'Yes! You can change your plan at any time. If you upgrade mid-cycle, we&apos;ll charge a prorated amount. Downgrades take effect at the next billing period.',
  },
  {
    question: 'What integrations are available?',
    answer:
      'We support integrations with 500+ apps including Slack, GitHub, Figma, Notion, and many more. Custom integrations are available on the Pro plan and above.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Absolutely. We use bank-level AES-256 encryption for all data in transit and at rest. We&apos;re SOC 2 Type II certified and comply with GDPR, CCPA, and other regulations.',
  },
  {
    question: 'How is support handled?',
    answer:
      'Free plan users get community support. Pro users get priority email support with 24-hour response times. Enterprise customers get 24/7 dedicated support from our team.',
  },
  {
    question: 'Can I export my data?',
    answer:
      'Yes, you can export all your data in standard formats (CSV, JSON) at any time. No lock-in. Your data belongs to you.',
  },
  {
    question: 'What about team seats and collaboration limits?',
    answer:
      'Starter plan allows 3 team members. Pro allows unlimited team members with different permission levels. Enterprise plans have unlimited everything.',
  },
  {
    question: 'Is there a free trial for paid plans?',
    answer:
      'Yes! All paid plans come with a 14-day free trial. No credit card required. Cancel anytime if you change your mind.',
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      ref={ref}
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white text-balance">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-balance">
            Everything you need to know about SaaSFlow. Can&apos;t find what you&apos;re looking for?{' '}
            <a href="#contact" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
              Contact us
            </a>
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full glass-card dark:glass-card glass-card-light p-6 text-left hover:dark:bg-slate-800/50 hover:bg-gray-100/50 transition-colors"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: openIndex === index ? 1 : 0,
                    height: openIndex === index ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 dark:text-gray-400 mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
