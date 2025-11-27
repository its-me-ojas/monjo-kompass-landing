"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ChevronRight, Hash, FileText } from "lucide-react";
import clsx from "clsx";

const faqs = [
  {
    id: "pricing",
    command: "man kompass-pricing",
    question: "Is Monjo-Kompass free?",
    answer: "Yes, Monjo-Kompass is open-source (MIT License) and free to use for both personal and commercial projects. We believe in accessible developer tools.",
  },
  {
    id: "atlas",
    command: "man connect-atlas",
    question: "Does it support MongoDB Atlas?",
    answer: "Absolutely. You can connect to any MongoDB instance, including Atlas, local, or self-hosted clusters. Just provide your connection string.",
  },
  {
    id: "performance",
    command: "man perf-stats",
    question: "How does it handle large datasets?",
    answer: "Kompass uses lazy loading and efficient memory management (Rust-powered) to handle millions of documents without slowing down your terminal.",
  },
  {
    id: "export",
    command: "man export-data",
    question: "Can I export data?",
    answer: "Yes. You can export query results to JSON, CSV, or directly copy them to your clipboard. Support for BSON export is coming in v1.1.",
  },
  {
    id: "platforms",
    command: "man os-support",
    question: "Is it available for Windows?",
    answer: "Yes. We provide pre-built binaries for macOS (Intel/Apple Silicon), Windows, and Linux. You can also install via cargo.",
  },
];

export default function FAQ() {
  const [activeId, setActiveId] = useState<string>(faqs[0].id);

  return (
    <section className="py-32 px-4 relative bg-black overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            System <span className="text-mongodb">Manual</span>
          </h2>
          <p className="text-white/40 font-mono text-sm">
            REFERENCE DOCUMENTATION v1.0.0
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Sidebar / Mobile List */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-mono text-white/40 mb-4 px-4 hidden md:block">
              AVAILABLE PAGES
            </div>
            {faqs.map((faq) => (
              <button
                key={faq.id}
                onClick={() => setActiveId(faq.id)}
                className={clsx(
                  "w-full text-left px-4 py-3 rounded-lg font-mono text-sm transition-all duration-200 flex items-center gap-3 group",
                  activeId === faq.id
                    ? "bg-mongodb/10 text-mongodb border border-mongodb/20"
                    : "text-white/60 hover:bg-white/5 hover:text-white border border-transparent"
                )}
              >
                <FileText className={clsx("w-4 h-4", activeId === faq.id ? "text-mongodb" : "text-white/20 group-hover:text-white/40")} />
                <span>{faq.id}</span>
                {activeId === faq.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-mongodb"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="md:col-span-8">
            <div className="bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden min-h-[300px] flex flex-col relative">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="ml-4 text-xs font-mono text-white/30 flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  bash — 80x24
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 md:p-8 font-mono text-sm md:text-base flex-grow">
                <AnimatePresence mode="wait">
                  {faqs.map((faq) => {
                    if (faq.id !== activeId) return null;
                    return (
                      <motion.div
                        key={faq.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Command */}
                        <div className="flex items-center gap-3 mb-6 text-white/80">
                          <span className="text-mongodb">➜</span>
                          <span className="text-blue-400">~</span>
                          <span>{faq.command}</span>
                        </div>

                        {/* Output */}
                        <div className="space-y-4">
                          <div className="text-white/40 text-xs uppercase tracking-wider mb-2 border-b border-white/10 pb-1 w-fit">
                            NAME
                          </div>
                          <div className="text-white pl-4 mb-6">
                            {faq.question}
                          </div>

                          <div className="text-white/40 text-xs uppercase tracking-wider mb-2 border-b border-white/10 pb-1 w-fit">
                            DESCRIPTION
                          </div>
                          <div className="text-white/80 pl-4 leading-relaxed">
                            {faq.answer}
                          </div>
                        </div>

                        {/* Cursor */}
                        <div className="mt-8 flex items-center gap-3">
                          <span className="text-mongodb">➜</span>
                          <span className="text-blue-400">~</span>
                          <motion.div
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="w-2.5 h-5 bg-white/50"
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
