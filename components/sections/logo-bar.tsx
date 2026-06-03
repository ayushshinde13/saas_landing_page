'use client';

import { motion } from 'framer-motion';

const companies = [
  'Vercel',
  'Linear',
  'Stripe',
  'Supabase',
  'GitHub',
  'Notion',
  'Figma',
  'Slack',
  'Twilio',
  'Auth0',
];

export function LogoBar() {
  return (
    <section className="py-16 sm:py-20 border-t dark:border-slate-800 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400 mb-12">
          Trusted by teams at leading companies
        </p>
        
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-16 whitespace-nowrap"
          >
            {[...companies, ...companies].map((company, i) => (
              <div
                key={i}
                className="px-4 py-2 text-gray-400 dark:text-gray-500 text-sm font-semibold opacity-60 hover:opacity-100 transition-opacity"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
