"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Is Monjo-Kompass free?",
    answer: "Yes, Monjo-Kompass is open-source and free to use for personal and commercial projects.",
  },
  {
    question: "Does it support MongoDB Atlas?",
    answer: "Absolutely. You can connect to any MongoDB instance, including Atlas, local, or self-hosted clusters.",
  },
  {
    question: "How does it handle large datasets?",
    answer: "Kompass uses lazy loading and efficient memory management to handle millions of documents without slowing down.",
  },
  {
    question: "Can I export data?",
    answer: "Yes, you can export query results to JSON, CSV, or directly copy them to your clipboard.",
  },
  {
    question: "Is it available for Windows?",
    answer: "Yes, we provide pre-built binaries for macOS, Windows, and Linux.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-4 relative">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center"
        >
          Frequently Asked <span className="text-mongodb">Questions</span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="border border-white/10 rounded-xl overflow-hidden bg-surface/50 hover:border-mongodb/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-mongodb" />
                ) : (
                  <Plus className="w-5 h-5 text-white/40" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
