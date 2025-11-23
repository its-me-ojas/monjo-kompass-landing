"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Senior Backend Engineer",
    content: "Monjo-Kompass is a game changer. I never have to leave my terminal to debug DB issues anymore.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Alex Rivera",
    role: "Full Stack Developer",
    content: "The speed is incredible. It opens instantly and handles large collections without breaking a sweat.",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Jordan Lee",
    role: "DevOps Engineer",
    content: "Finally, a MongoDB client that feels like a native Unix tool. The Vim keybindings are spot on.",
    avatar: "https://i.pravatar.cc/150?u=jordan",
  },
  {
    name: "Emily Zhang",
    role: "Software Architect",
    content: "I was skeptical about a TUI for databases, but Kompass changed my mind. It's beautiful and functional.",
    avatar: "https://i.pravatar.cc/150?u=emily",
  },
  {
    name: "David Kim",
    role: "Rust Enthusiast",
    content: "As a Rust developer, I appreciate the craftsmanship. It's fast, safe, and looks amazing.",
    avatar: "https://i.pravatar.cc/150?u=david",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-4 overflow-hidden relative">
      <div className="container mx-auto max-w-6xl mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Loved by <span className="text-rust">Developers</span>
        </motion.h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-8">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10, scale: 1.02, borderColor: "rgba(222, 165, 132, 0.5)" }}
              className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-surface border border-white/5 transition-all duration-300 flex-shrink-0 whitespace-normal shadow-lg hover:shadow-rust/20"
            >
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/40">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-8 ml-8">
           {/* Duplicate for seamless loop - handled by CSS animation usually, but here we just duplicate content in the first div and use CSS keyframes */}
        </div>
      </div>
      
      {/* Gradient masks for smooth fade out */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
