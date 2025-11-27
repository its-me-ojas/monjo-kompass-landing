"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, Wifi, Shield, Cpu, Activity } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Backend Engineer",
    content: "Monjo-Kompass is a game changer. I never have to leave my terminal to debug DB issues anymore.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    id: "LOG_8921",
    signal: 98
  },
  {
    name: "Alex Rivera",
    role: "Full Stack Developer",
    content: "The speed is incredible. It opens instantly and handles large collections without breaking a sweat.",
    avatar: "https://i.pravatar.cc/150?u=alex",
    id: "LOG_4421",
    signal: 100
  },
  {
    name: "Jordan Lee",
    role: "DevOps Engineer",
    content: "Finally, a MongoDB client that feels like a native Unix tool. The Vim keybindings are spot on.",
    avatar: "https://i.pravatar.cc/150?u=jordan",
    id: "LOG_1192",
    signal: 95
  },
  {
    name: "Emily Zhang",
    role: "Software Architect",
    content: "I was skeptical about a TUI for databases, but Kompass changed my mind. It's beautiful and functional.",
    avatar: "https://i.pravatar.cc/150?u=emily",
    id: "LOG_3321",
    signal: 99
  },
  {
    name: "David Kim",
    role: "Rust Enthusiast",
    content: "As a Rust developer, I appreciate the craftsmanship. It's fast, safe, and looks amazing.",
    avatar: "https://i.pravatar.cc/150?u=david",
    id: "LOG_7712",
    signal: 97
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-4 overflow-hidden relative bg-black">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,237,100,0.02)_50%)] bg-[size:100%_4px] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mongodb/10 border border-mongodb/20 text-mongodb text-xs font-mono mb-4"
        >
          <Activity className="w-3 h-3 animate-pulse" />
          <span>SIGNAL_INTERCEPT_ACTIVE</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-white"
        >
          Incoming <span className="text-mongodb">Transmissions</span>
        </motion.h2>
        <p className="text-white/40 font-mono text-sm">
          DECODING ENCRYPTED FEEDBACK FROM THE FIELD...
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-6">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.01 }}
              className="w-[400px] relative group/card"
            >
              {/* Card Header */}
              <div className="absolute -top-3 left-6 z-20 bg-black px-2 flex items-center gap-2 border border-mongodb/30 rounded text-[10px] font-mono text-mongodb/80">
                <Terminal className="w-3 h-3" />
                <span>{testimonial.id}</span>
              </div>

              <div className="h-full p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover/card:border-mongodb/40 group-hover/card:bg-white/[0.07] whitespace-normal relative overflow-hidden">
                {/* Scanline */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mongodb/5 to-transparent opacity-0 group-hover/card:opacity-100 translate-y-[-100%] group-hover/card:translate-y-[100%] transition-all duration-1000 pointer-events-none" />
                
                {/* Signal Strength */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((bar) => (
                      <div 
                        key={bar} 
                        className={`w-1 h-3 rounded-sm ${bar <= 5 ? 'bg-mongodb' : 'bg-white/10'}`} 
                        style={{ opacity: 0.2 + (bar * 0.15) }}
                      />
                    ))}
                    <span className="ml-2 text-xs font-mono text-mongodb">{testimonial.signal}%</span>
                  </div>
                  <Wifi className="w-4 h-4 text-white/20" />
                </div>

                <p className="text-lg text-white/90 mb-6 leading-relaxed font-mono text-sm">
                  <span className="text-mongodb/60 mr-2">{">"}</span>
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded bg-white/10 p-[1px] relative">
                    <div className="absolute inset-0 border border-white/20 rounded" />
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="object-cover rounded grayscale group-hover/card:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm flex items-center gap-2">
                      {testimonial.name}
                      <Shield className="w-3 h-3 text-mongodb" />
                    </div>
                    <div className="text-xs text-white/40 font-mono">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-6 ml-6">
           {/* Duplicate for seamless loop - handled by CSS animation */}
        </div>
      </div>
      
      {/* Gradient masks for smooth fade out */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    </section>
  );
}
