"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Terminal, Cpu, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Installation() {
  const [copied, setCopied] = useState(false);
  const command = "cargo install kompass";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-black/80 backdrop-blur-xl border border-mongodb/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,237,100,0.1)]"
        >
          {/* HUD Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-mongodb/20 bg-mongodb/5">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-mongodb animate-pulse" />
              <span className="font-mono text-sm text-mongodb/80 tracking-wider">SYSTEM_INITIALIZATION</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-mongodb/60">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>CPU: OPTIMAL</span>
              </div>
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4" />
                <span>NET: CONNECTED</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-12 text-center relative">
            {/* Scanning Line */}
            <motion.div
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[1px] bg-mongodb/20 shadow-[0_0_10px_rgba(0,237,100,0.5)] pointer-events-none z-0"
            />
            
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white tracking-tight">
              Ready to <span className="text-mongodb">Deploy</span>?
            </h2>

            <div className="relative max-w-xl mx-auto group">
              <div className="absolute -inset-1 bg-gradient-to-r from-mongodb via-rust to-mongodb rounded-lg opacity-20 group-hover:opacity-50 blur transition duration-500 animate-gradient-x" />
              <div className="relative flex flex-col sm:flex-row items-center justify-between bg-black rounded-lg p-2 border border-white/10 gap-2 sm:gap-0">
                <div className="flex items-center gap-4 px-4 py-3 font-mono text-base md:text-lg w-full text-left overflow-x-auto whitespace-nowrap">
                  <span className="text-rust select-none">$</span>
                  <span className="text-white">{command}</span>
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={handleCopy}
                  className="shrink-0 w-full sm:w-10 hover:bg-mongodb/20 hover:text-mongodb transition-all duration-300"
                >
                  <AnimatePresence mode="wait">
                    {copied ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Check className="w-5 h-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                      >
                        <Copy className="w-5 h-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-8 text-sm font-mono text-white/40">
              <div className="flex flex-col items-center gap-1">
                <span className="text-mongodb">v1.0.0</span>
                <span>STABLE</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-rust">RUST</span>
                <span>EDITION</span>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-center gap-1">
                <span className="text-blue-400">MIT</span>
                <span>LICENSE</span>
              </div>
            </div>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-mongodb rounded-tl-lg" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-mongodb rounded-tr-lg" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-mongodb rounded-bl-lg" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-mongodb rounded-br-lg" />
        </motion.div>
      </div>
    </section>
  );
}
