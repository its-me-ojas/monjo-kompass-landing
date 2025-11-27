"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Roadmap from "@/components/Roadmap";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Installation from "@/components/Installation";
import Footer from "@/components/Footer";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <main ref={containerRef} className="min-h-screen bg-background text-foreground selection:bg-mongodb/30 selection:text-mongodb overflow-hidden relative">
      {/* Parallax Background */}
      <motion.div style={{ y: y1 }} className="absolute top-0 left-0 w-full h-[200vh] bg-[radial-gradient(circle_at_50%_50%,rgba(0,237,100,0.05),transparent_50%)] pointer-events-none z-0" />
      <motion.div style={{ y: y2 }} className="absolute top-[50vh] left-0 w-full h-[200vh] bg-[radial-gradient(circle_at_80%_50%,rgba(222,165,132,0.05),transparent_50%)] pointer-events-none z-0" />
      
      <div className="relative z-10">
        <Hero />
        <Features />
        <Comparison />
        <Roadmap />
        <Testimonials />
        <FAQ />
        <Installation />
        <Footer />
      </div>
    </main>
  );
}
