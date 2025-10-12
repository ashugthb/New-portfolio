"use client";

import { motion } from 'framer-motion';
import { GlassCard, AnimatedSection, GradientText } from '../ui/AnimatedComponents';
import { FileText, Award, Calendar } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Publications = () => {
  const publications = [
    {
      type: "Patent",
      title: "Multi-Band Electromagnetic Burst Analyzer and Polyatomic Time-Crystal Processor",
      subtitle: "System and Method for Real-Time Neural Data Analysis",
      date: "Aug 2025",
      status: "Patent Filed (Pending)",
      description: "Co-authored and filed an invention patent for real-time neural data analysis system.",
      icon: Award,
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "Research Paper",
      title: "Beyond Conventional EEG: High-Frequency Circuits Design and Brain Data Visualization for DDG Device",
      subtitle: "Submitted to Journal of Applied Physics",
      date: "In Preparation",
      status: "Manuscript in Progress",
      description: "Co-authored research paper on high-frequency circuit design and brain data visualization, preparing for submission to Journal of Applied Physics.",
      icon: FileText,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <AnimatedSection id="publications" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/5 via-transparent to-accent-cyan/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <GradientText>Publications &amp; Patents</GradientText>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Research contributions and intellectual property
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
            >
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
                <GlassCard className="h-full group hover:border-accent-cyan/30 transition-all duration-300">
                  <div className="flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${pub.color} p-0.5`}
                      >
                        <div className="w-full h-full bg-dark-primary rounded-xl flex items-center justify-center">
                          <pub.icon className="w-7 h-7 text-white" />
                        </div>
                      </motion.div>

                      <div className="flex-1">
                        <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${pub.color} bg-opacity-10 border border-white/10 text-sm font-semibold mb-2`}>
                          {pub.type}
                        </div>
                        <div className="flex items-center gap-2 text-text-secondary text-sm mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{pub.date}</span>
                          <span className="w-1 h-1 bg-text-secondary/50 rounded-full" />
                          <span className="text-accent-cyan">{pub.status}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-text-primary leading-tight group-hover:text-accent-cyan transition-colors">
                        {pub.title}
                      </h3>
                      
                      <p className={`text-md font-semibold bg-gradient-to-r ${pub.color} bg-clip-text text-transparent`}>
                        {pub.subtitle}
                      </p>

                      <p className="text-text-secondary leading-relaxed">
                        {pub.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <GlassCard className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-2">
              1
            </div>
            <div className="text-text-secondary text-sm">Patent Filed</div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-purple to-accent-orange bg-clip-text text-transparent mb-2">
              1
            </div>
            <div className="text-text-secondary text-sm">Research Paper</div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-orange bg-clip-text text-transparent mb-2">
              2025
            </div>
            <div className="text-text-secondary text-sm">Latest Work</div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-orange to-accent-cyan bg-clip-text text-transparent mb-2">
              Co-Author
            </div>
            <div className="text-text-secondary text-sm">Research Role</div>
          </GlassCard>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Publications;
