"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Plus, Star } from "lucide-react";
import { renderCanvas } from "@/components/ui/canvas";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [stars, setStars] = useState<number | null>(null);

  useEffect(() => {
    renderCanvas();
    
    // Fetch GitHub stars
    fetch("https://api.github.com/repos/its-me-ojas/monjo-kompass")
      .then((res) => res.json())
      .then((data) => {
        if (data.stargazers_count !== undefined) {
          setStars(data.stargazers_count);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch GitHub stars:", error);
      });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-32">
      <div className="container mx-auto max-w-6xl relative z-10 flex flex-col items-center text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative flex items-center whitespace-nowrap rounded-full border border-white/10 bg-surface/50 backdrop-blur-md px-3 py-1 text-xs leading-6 text-white/60 hover:bg-surface/80 transition-colors cursor-pointer">
            <Terminal className="h-4 w-4 mr-2 text-mongodb" /> 
            <span>Introducing Monjo-Kompass v1.0</span>
            <span className="ml-2 flex items-center font-semibold text-white hover:text-mongodb transition-colors">
              Explore <ArrowRight className="h-3 w-3 ml-1" />
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative mb-8"
        >
           <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 relative z-10">
            The MongoDB Client <br />
            for the <span className="text-mongodb">Terminal Era</span>
          </h1>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 text-white/10 animate-pulse">
            <Plus className="w-8 h-8 md:w-12 md:h-12" />
          </div>
          <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 text-white/10 animate-pulse delay-700">
            <Plus className="w-8 h-8 md:w-12 md:h-12" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed px-4"
        >
          Fast, Intuitive, <span className="text-rust font-semibold">Rust-powered</span>.
          Connect, query, and manipulate your data without leaving your keyboard.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <Button size="lg" className="text-base h-12 px-8">
            Get Started
          </Button>
          <Button variant="outline" size="lg" className="text-base h-12 px-8 relative group" asChild>
            <a href="https://github.com/its-me-ojas/monjo-kompass" target="_blank" rel="noopener noreferrer">
              <span>View on GitHub</span>
              {stars !== null && (
                <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-mongodb/10 text-mongodb text-sm font-mono border border-mongodb/20 group-hover:bg-mongodb/20 transition-colors">
                  <Star className="w-3 h-3 fill-mongodb" />
                  {stars}
                </span>
              )}
            </a>
          </Button>
          <Button variant="ghost" size="lg" className="text-base h-12 px-8 text-mongodb hover:text-mongodb/80 hover:bg-mongodb/10" asChild>
            <a href="/blog">Read Blog</a>
          </Button>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-2"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mongodb opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-mongodb"></span>
          </span>
          <p className="text-xs text-mongodb font-mono">System Online</p>
        </motion.div>
      </div>

      {/* Canvas Background */}
      <canvas
        className="pointer-events-none absolute inset-0 mx-auto opacity-30"
        id="canvas"
      ></canvas>
    </section>
  );
}
