"use client";

import { motion } from "framer-motion";
import { Check, X, Zap, Cpu, HardDrive, Terminal, MousePointer2 } from "lucide-react";
import clsx from "clsx";

const metrics = [
  { 
    name: "Startup Time", 
    kompass: 50, 
    compass: 4000, 
    unit: "ms",
    icon: Zap,
    description: "Instant launch vs loading screen"
  },
  { 
    name: "Memory Usage", 
    kompass: 10, 
    compass: 300, 
    unit: "MB",
    icon: Cpu,
    description: "Lightweight vs resource heavy"
  },
  { 
    name: "Binary Size", 
    kompass: 8, 
    compass: 200, 
    unit: "MB",
    icon: HardDrive,
    description: "Tiny footprint vs massive install"
  }
];

const features = [
  { name: "Vim Keybindings", kompass: true, compass: false },
  { name: "SSH Support", kompass: true, compass: false },
  { name: "Mouse Support", kompass: false, compass: true },
  { name: "Visual Query Builder", kompass: false, compass: true },
  { name: "Terminal Integration", kompass: true, compass: false },
  { name: "Scriptable", kompass: true, compass: false },
];

export default function Comparison() {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            System <span className="text-mongodb">Analysis</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            See why developers are switching to the terminal.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Performance Metrics */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white/80 flex items-center gap-3">
              <Zap className="w-5 h-5 text-mongodb" />
              Performance Metrics
            </h3>
            
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-mongodb/30 transition-colors"
              >
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-mongodb/10 rounded-lg text-mongodb">
                      <metric.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white">{metric.name}</div>
                      <div className="text-xs text-white/40">{metric.description}</div>
                    </div>
                  </div>
                </div>

                {/* Comparison Bars */}
                <div className="space-y-4 relative z-10">
                  {/* Kompass Bar */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-mongodb font-bold">Monjo-Kompass</span>
                      <span className="text-mongodb">{metric.kompass}{metric.unit}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }} // Always full relative to itself for small values? No, let's scale visually
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-mongodb shadow-[0_0_10px_rgba(0,237,100,0.5)]"
                        style={{ 
                          width: `${(metric.kompass / Math.max(metric.kompass, metric.compass)) * 100}%` 
                        }}
                      />
                    </div>
                  </div>

                  {/* Compass Bar */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/40">Standard GUI</span>
                      <span className="text-white/40">{metric.compass}{metric.unit}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="h-full bg-white/20"
                        style={{ 
                          width: `${(metric.compass / Math.max(metric.kompass, metric.compass)) * 100}%` 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feature Matrix */}
          <div className="space-y-8">
            <h3 className="text-xl font-bold text-white/80 flex items-center gap-3">
              <Terminal className="w-5 h-5 text-rust" />
              Feature Matrix
            </h3>

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 p-4 border-b border-white/10 bg-white/5 text-xs font-mono tracking-wider text-white/40">
                <div>FEATURE</div>
                <div className="text-center text-mongodb">KOMPASS</div>
                <div className="text-center">GUI APPS</div>
              </div>

              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.05) }}
                  className={clsx(
                    "grid grid-cols-3 p-4 items-center border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors",
                    index % 2 === 0 ? "bg-transparent" : "bg-white/[0.02]"
                  )}
                >
                  <div className="text-sm font-medium text-white/80">{feature.name}</div>
                  
                  <div className="flex justify-center">
                    {feature.kompass ? (
                      <div className="w-6 h-6 rounded-full bg-mongodb/10 flex items-center justify-center text-mongodb">
                        <Check className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/20">
                        <X className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center">
                    {feature.compass ? (
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white/60">
                        <Check className="w-4 h-4" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-white/20">
                        <X className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Winner Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-6 bg-gradient-to-r from-mongodb/10 to-transparent border border-mongodb/20 rounded-xl flex items-center gap-4"
            >
              <div className="p-3 bg-mongodb text-black rounded-full">
                <Zap className="w-6 h-6 fill-current" />
              </div>
              <div>
                <div className="font-bold text-white text-lg">The Clear Winner</div>
                <div className="text-white/60 text-sm">
                  Monjo-Kompass is <span className="text-mongodb font-bold">80x faster</span> and uses <span className="text-mongodb font-bold">30x less memory</span>.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
