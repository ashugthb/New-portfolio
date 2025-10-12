"use client";

import { motion } from 'framer-motion';
import { GlassCard, AnimatedSection, GradientText } from '../ui/AnimatedComponents';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Research Intern",
      company: "IIT Mandi",
      location: "Mandi, India",
      period: "May 2025 - July 2025",
      description: [
        "Engineered a multithreaded C++ application to process a 10Gbps data stream from 168 channels, accelerating FFT computations by 4x with the FFTW3 library",
        "Secured a thread-safe I/O system using mutex locks, guaranteeing zero data loss between the C++ core and a Next.js backend processing over 100,000 data points per second",
        "Delivered a real-time Next.js dashboard rendering 4 complex neural visualizations concurrently (12 Frequency bands, Time phasing, Poly atomic time crystal, instantaneous phase window)",
        "Constructed a full-stack, test-ready prototype that integrated 3 custom hardware components, cutting the end-to-end signal-to-visualization pipeline time by 30%"
      ],
      skills: ["C++", "Next.js", "FFTW3", "Real-time Processing", "Data Visualization", "Multithreading"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Full Stack Developer Intern",
      company: "Per Clean Laundry Services",
      location: "Remote",
      period: "May 2024 - December 2024",
      description: [
        "Engineered different APIs, including a React.js report generation module, optimized query handling, OTP verification and WhatsApp notification, and backend for 30+ APIs, with advanced logger debugging system",
        "Developed a custom unit testing framework from scratch using Node.js, without using external libraries",
        "Developed the LLD document solution for all orders fetching improving latency of 40%"
      ],
      skills: ["React.js", "Node.js", "API Development", "MongoDB", "WhatsApp API", "Unit Testing", "Logger"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <AnimatedSection id="experience" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <GradientText>Experience</GradientText>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and contributions to the tech community
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <GlassCard key={index} delay={index * 0.2} className="group">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.color} p-0.5`}
                >
                  <div className="w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 * i }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
