"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";

const roadmapItems = [
  {
    status: "completed",
    title: "Core Navigation",
    description: "Database and collection browsing with keyboard support",
    quarter: "Q3 2025"
  },
  {
    status: "completed",
    title: "Document Viewer",
    description: "JSON formatting and syntax highlighting",
    quarter: "Q3 2025"
  },
  {
    status: "completed",
    title: "Vim Keybindings",
    description: "Intuitive keyboard controls for power users",
    quarter: "Q4 2025"
  },
  {
    status: "in-progress",
    title: "Advanced Queries",
    description: "Aggregation pipeline builder and complex filters",
    quarter: "Q4 2025"
  },
  {
    status: "planned",
    title: "Data Management",
    description: "Document editing, insertion, and deletion",
    quarter: "Q1 2026"
  },
  {
    status: "planned",
    title: "Export Tools",
    description: "Export to JSON, CSV, and BSON formats",
    quarter: "Q1 2026"
  },
  {
    status: "planned",
    title: "Connection Profiles",
    description: "Save and manage multiple connection configurations",
    quarter: "Q2 2026"
  },
  {
    status: "planned",
    title: "Plugin System",
    description: "Community-driven extensions and themes",
    quarter: "Q2 2026"
  }
];

export default function Roadmap() {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,237,100,0.05),transparent_70%)]" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white"
          >
            Mission <span className="text-mongodb">Trajectory</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            Our flight path to redefining the MongoDB terminal experience.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-mongodb/0 via-mongodb/30 to-mongodb/0 transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-1/2 px-4 md:px-12 text-center md:text-left">
                  <div className={`flex flex-col gap-2 ${
                    index % 2 === 0 ? "md:items-start" : "md:items-end md:text-right"
                  }`}>
                    <span className="text-mongodb/60 font-mono text-sm tracking-wider">
                      {item.quarter}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-white/40 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Node */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 shrink-0">
                  <div className={`absolute inset-0 rounded-full blur-lg opacity-50 ${
                    item.status === "completed" ? "bg-mongodb" :
                    item.status === "in-progress" ? "bg-rust" :
                    "bg-white/20"
                  }`} />
                  <div className={`relative w-4 h-4 rounded-full border-2 ${
                    item.status === "completed" ? "bg-black border-mongodb" :
                    item.status === "in-progress" ? "bg-black border-rust" :
                    "bg-black border-white/20"
                  }`} />
                  
                  {/* Connecting Line for Mobile */}
                  {index !== roadmapItems.length - 1 && (
                    <div className="absolute top-12 bottom-[-48px] w-px bg-white/10 md:hidden" />
                  )}
                </div>

                {/* Empty Side for Desktop Layout */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
