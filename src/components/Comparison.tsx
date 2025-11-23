"use client";

import { motion } from "framer-motion";
import { Check, X, Minus, Zap, Database, Terminal } from "lucide-react";
import clsx from "clsx";

const features = [
  { name: "Startup Time", kompass: "Instant", compass: "Slow", cli: "Instant" },
  { name: "Memory Usage", kompass: "~10MB", compass: "~300MB", cli: "~5MB" },
  { name: "Mouse Support", kompass: true, compass: true, cli: false },
  { name: "Visual Query Builder", kompass: true, compass: true, cli: false },
  { name: "Keyboard Navigation", kompass: "Vim-like", compass: "Basic", cli: "Basic" },
  { name: "Themeable", kompass: true, compass: false, cli: false },
];

export default function Comparison() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            System <span className="text-mongodb">Analysis</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-mono">
            COMPARING PERFORMANCE METRICS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-black/80 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* HUD Header */}
          <div className="overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-4 p-6 border-b border-white/10 bg-white/5 font-mono text-sm tracking-wider">
                <div className="flex items-center gap-2 text-white/40">
                  <Database className="w-4 h-4" />
                  <span>METRIC</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-mongodb bg-mongodb/10 rounded py-1 border border-mongodb/20">
                  <Zap className="w-4 h-4" />
                  <span>KOMPASS</span>
                </div>
                <div className="text-center text-white/40 flex items-center justify-center">GUI APPS</div>
                <div className="text-center text-white/40 flex items-center justify-center">CLI</div>
              </div>

              {/* Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none" />

              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={clsx(
                    "grid grid-cols-4 p-6 items-center border-b border-white/5 last:border-0 relative z-10 font-mono text-sm md:text-base hover:bg-white/5 transition-colors group",
                    index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                  )}
                >
                  <div className="font-medium text-white/80 group-hover:text-white transition-colors">{feature.name}</div>
                  
                  {/* Kompass */}
                  <div className="text-center flex justify-center font-bold text-mongodb group-hover:scale-110 transition-transform">
                    {feature.kompass === true ? (
                      <Check className="w-5 h-5" />
                    ) : feature.kompass === false ? (
                      <X className="w-5 h-5 text-red-500" />
                    ) : (
                      feature.kompass
                    )}
                  </div>

                  {/* GUI Apps */}
                  <div className="text-center flex justify-center text-white/40">
                    {feature.compass === true ? (
                      <Check className="w-5 h-5" />
                    ) : feature.compass === false ? (
                      <X className="w-5 h-5" />
                    ) : (
                      feature.compass
                    )}
                  </div>

                  {/* CLI */}
                  <div className="text-center flex justify-center text-white/40">
                    {feature.cli === true ? (
                      <Check className="w-5 h-5" />
                    ) : feature.cli === false ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      feature.cli
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Scanning Line */}
          <motion.div
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 w-full h-[1px] bg-mongodb/20 shadow-[0_0_10px_rgba(0,237,100,0.3)] pointer-events-none z-20"
          />
        </motion.div>
      </div>
    </section>
  );
}
