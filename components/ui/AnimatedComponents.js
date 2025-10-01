"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const GlassCard = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className={cn(
        "relative backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10",
        "hover:bg-white/10 hover:border-white/20 transition-all duration-300",
        "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
        className
      )}
      {...props}
    >
      {children}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export const AnimatedSection = ({ children, className, ...props }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export const GradientText = ({ children, className, ...props }) => {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};

export const FloatingElement = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
