"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Keyboard, 
  Globe, 
  Clipboard, 
  History, 
  Filter, 
  Code, 
  Download, 
  GitBranch 
} from "lucide-react";

const features = [
  {
    name: "Blazing Fast",
    description: "Rust-powered instant startup with minimal memory footprint",
    icon: Zap,
    color: "text-mongodb",
    gradient: "from-mongodb/20 to-transparent",
    featured: true,
  },
  {
    name: "Keyboard First",
    description: "Vim-like keybindings for maximum efficiency",
    icon: Keyboard,
    color: "text-rust",
    gradient: "from-rust/20 to-transparent",
    featured: false,
  },
  {
    name: "Universal",
    description: "macOS, Windows, Linux support",
    icon: Globe,
    color: "text-blue-400",
    gradient: "from-blue-400/20 to-transparent",
    featured: false,
  },
  {
    name: "Clipboard Support",
    description: "Paste connection strings with Ctrl+V",
    icon: Clipboard,
    color: "text-purple-400",
    gradient: "from-purple-400/20 to-transparent",
    featured: false,
  },
  {
    name: "Connection History",
    description: "Auto-save and manage all your connections",
    icon: History,
    color: "text-yellow-400",
    gradient: "from-yellow-400/20 to-transparent",
    featured: true,
  },
  {
    name: "Real-Time Filtering",
    description: "Press 'f' to filter documents instantly",
    icon: Filter,
    color: "text-cyan-400",
    gradient: "from-cyan-400/20 to-transparent",
    featured: false,
  },
  {
    name: "Custom Query Mode",
    description: "Execute MongoDB queries directly",
    icon: Code,
    color: "text-green-400",
    gradient: "from-green-400/20 to-transparent",
    featured: false,
  },
  {
    name: "Export Functionality",
    description: "Press 'e' to export your data",
    icon: Download,
    color: "text-orange-400",
    gradient: "from-orange-400/20 to-transparent",
    featured: false,
  },
  {
    name: "Aggregation Pipelines",
    description: "Complex operations made simple",
    icon: GitBranch,
    color: "text-pink-400",
    gradient: "from-pink-400/20 to-transparent",
    featured: true,
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.08, 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`group relative border border-white/10 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm overflow-hidden rounded-2xl transition-all hover:border-white/30 ${
        feature.featured ? 'md:col-span-2 md:row-span-1' : ''
      }`}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} blur-xl`} />
      </div>
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:1rem_1rem] opacity-20 group-hover:opacity-40 transition-opacity" />
      
      {/* Floating Particles */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute top-4 right-4 w-2 h-2 rounded-full ${feature.color} blur-sm`}
      />
      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className={`absolute bottom-6 left-6 w-3 h-3 rounded-full ${feature.color} blur-sm`}
      />
      
      <div className={`relative z-10 ${feature.featured ? 'p-8' : 'p-6'}`}>
        <div className="flex items-start gap-4">
          {/* Animated Icon */}
          <motion.div 
            className={`flex-shrink-0 inline-flex ${feature.featured ? 'h-14 w-14' : 'h-12 w-12'} items-center justify-center rounded-xl bg-white/5 ${feature.color} ring-1 ring-white/10 group-hover:ring-2 transition-all duration-300 relative`}
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            {/* Pulse effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute inset-0 rounded-xl bg-gradient-to-br ${feature.gradient}`}
            />
            <feature.icon className={`${feature.featured ? 'h-7 w-7' : 'h-6 w-6'} relative z-10`} />
          </motion.div>
          
          <div className="flex-1 min-w-0">
            <h3 className={`${feature.featured ? 'text-xl' : 'text-lg'} font-bold text-white tracking-tight mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all`}>
              {feature.name}
            </h3>
            <p className={`${feature.featured ? 'text-base' : 'text-sm'} text-white/50 leading-relaxed group-hover:text-white/70 transition-colors`}>
              {feature.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradient Blob */}
      <motion.div 
        className={`absolute ${feature.featured ? '-right-10 -bottom-10 w-40 h-40' : '-right-8 -bottom-8 w-32 h-32'} bg-gradient-to-br ${feature.gradient} blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Shine effect on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-mongodb/5 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rust/5 rounded-full blur-[100px] pointer-events-none"
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Packed with <span className="text-mongodb relative">
              Power
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-mongodb/0 via-mongodb to-mongodb/0"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Every feature designed to keep you in the flow
          </p>
        </motion.div>

        {/* Bento Box Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
