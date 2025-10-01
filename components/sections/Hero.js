"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'Machine Learning Engineer',
    'Full Stack Developer',
    'AI Enthusiast',
    'Open Source Contributor'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-r from-accent-cyan/20 to-accent-purple/20 rounded-full blur-3xl"
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-accent-purple/20 to-accent-orange/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ opacity }}
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-orange bg-clip-text text-transparent">
                Ashvajeet Athawale
              </span>
            </h1>

            <div className="h-20 mb-4">
              <p className="text-2xl md:text-3xl font-medium text-text-secondary">
                <span className="text-accent-cyan">{text}</span>
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm font-medium text-accent-cyan">Available for opportunities</span>
            </motion.div>

            <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-xl">
              <span className="text-text-primary font-semibold">B.Tech in Electronics & Communication</span> from{' '}
              <span className="text-accent-cyan">Indian Institute of Information Technology, Sonepat</span>
              . Passionate about building intelligent solutions with ML and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-lg font-semibold text-white shadow-lg shadow-accent-cyan/20 hover:shadow-accent-cyan/40 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-dark-secondary border-2 border-text-secondary/20 rounded-lg font-semibold text-text-primary hover:border-accent-cyan transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/ashvajeet2722', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/ashvajeet-athawale-8ab00a253', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:ashvajeetathawale7@gmail.com', label: 'Email' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="p-3 bg-dark-secondary border border-text-secondary/10 rounded-lg hover:border-accent-cyan hover:bg-dark-tertiary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-text-secondary group-hover:text-accent-cyan transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000}>
              <div className="relative">
                {/* 3D Card Effect */}
                <div className="relative p-8 bg-gradient-to-br from-dark-secondary to-dark-tertiary rounded-3xl border border-text-secondary/10 backdrop-blur-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-accent-cyan to-accent-purple rounded-2xl opacity-20 blur-xl"
                  />
                  
                  <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-accent-purple to-accent-orange rounded-2xl opacity-20 blur-xl"
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-accent-cyan rounded-full animate-pulse" />
                      <span className="text-text-secondary">Currently building</span>
                    </div>

                    <div className="space-y-4">
                      {['AI-Powered Solutions', 'Web Applications', 'ML Models'].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + i * 0.1 }}
                          className="flex items-center gap-3 p-4 bg-dark-primary/50 rounded-xl border border-text-secondary/5"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full" />
                          <span className="text-text-primary font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-text-secondary/10">
                      {[
                        { value: '20+', label: 'Projects' },
                        { value: '2+', label: 'Years' },
                        { value: '10+', label: 'Skills' },
                      ].map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent">
                            {stat.value}
                          </div>
                          <div className="text-sm text-text-secondary">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary"
      >
        <span className="text-sm">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-accent-cyan rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
