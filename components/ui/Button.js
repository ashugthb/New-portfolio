"use client";

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white",
    secondary: "border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/5",
    ghost: "hover:bg-white/5 text-gray-300 hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "px-6 py-3 rounded-lg font-medium transition-all duration-300",
        "backdrop-blur-sm shadow-lg",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const IconButton = ({ icon: Icon, href, label }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm group"
      aria-label={label}
    >
      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
    </motion.a>
  );
};

export const SocialLinks = () => {
  const socials = [
    { icon: Mail, href: 'mailto:ashvajeetathawale7@gmail.com', label: 'Email' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <div className="flex gap-4 justify-center">
      {socials.map((social, index) => (
        <IconButton key={index} {...social} />
      ))}
    </div>
  );
};

export default Button;
