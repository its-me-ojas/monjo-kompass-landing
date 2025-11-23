"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Zap, Keyboard, Globe, MousePointer2 } from "lucide-react";
import { MouseEvent } from "react";

const features = [
  {
    name: "Blazing Fast",
    description:
      "Built with Rust for instant startup and low memory footprint. No Electron bloat, just raw performance.",
    icon: Zap,
    color: "text-mongodb",
    gradient: "from-mongodb/20 to-transparent",
  },
  {
    name: "Keyboard First",
    description:
      "Navigate your database with Vim-like keybindings. Keep your hands on the keyboard and stay in the flow.",
    icon: Keyboard,
    color: "text-rust",
    gradient: "from-rust/20 to-transparent",
  },
  {
    name: "Universal",
    description:
      "Works seamlessly on macOS, Windows, and Linux. One binary, zero dependencies.",
    icon: Globe,
    color: "text-blue-400",
    gradient: "from-blue-400/20 to-transparent",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      onMouseMove={handleMouseMove}
      className="group relative border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden rounded-3xl p-8 transition-colors hover:border-white/20"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20 group-hover:opacity-40 transition-opacity" />
      
      {/* Hover Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.08),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 ${feature.color} ring-1 ring-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_-5px_currentColor]`}>
          <feature.icon className="h-7 w-7" />
        </div>
        <h3 className="mb-3 text-2xl font-bold text-white tracking-tight">{feature.name}</h3>
        <p className="text-white/60 leading-relaxed text-lg">
          {feature.description}
        </p>
      </div>
      
      {/* Decorative Gradient Blob */}
      <div className={`absolute -right-10 -bottom-10 w-48 h-48 bg-gradient-to-br ${feature.gradient} blur-[60px] opacity-20 group-hover:opacity-50 transition-opacity duration-500`} />
      
      {/* Border Gradient on Hover */}
      <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5 group-hover:ring-white/20 transition-all duration-500" />
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Engineered for <span className="text-mongodb">Speed</span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Monjo-Kompass is designed to be the fastest way to interact with your MongoDB data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
