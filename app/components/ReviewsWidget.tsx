'use client';

import Script from 'next/script';
import { motion } from 'framer-motion';

export default function ReviewsWidget() {
  return (
    <section id="opinie" className="py-16 bg-auto-matte text-auto-text border-b-2 border-auto-border transition-colors">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="font-mono text-xs text-auto-concrete uppercase tracking-widest block mb-2">
            / CO MÓWIĄ KLIENCI
          </span>
          <h2 className="font-subheading text-3xl font-black uppercase tracking-tight text-auto-heading">
            OPINIE O SERWISIE
          </h2>
        </div>

        {/* Outer Panel Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          /* Added a contrast background and border explicitly for light mode */
          className="bg-zinc-100 dark:bg-auto-panel border-4 border-auto-border p-4 sm:p-6 shadow-[8px_8px_0_rgba(0,0,0,0.15)] dark:shadow-[8px_8px_0_rgba(0,0,0,0.8)] min-h-[250px] transition-colors"
        >
          {/* Inner Wrapper with Border & Dark Mode Adaptor */}
          <div className="w-full overflow-hidden rounded border border-zinc-200 dark:border-transparent dark:invert dark:hue-rotate-180 transition-all duration-300">
            {/* Jotform Embed Target */}
            <div id="JFWebsiteWidget-01a036256ae870008ba936b32a000f743d7a" />
          </div>

          {/* External Script Loader */}
          <Script
            src="https://www.jotform.com/website-widgets/embed/01a036256ae870008ba936b32a000f743d7a"
            strategy="lazyOnload"
          />
        </motion.div>

      </div>
    </section>
  );
}