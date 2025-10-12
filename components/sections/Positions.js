"use client";

import { motion } from 'framer-motion';
import { GlassCard, AnimatedSection, GradientText } from '../ui/AnimatedComponents';
import { Award, Users, Music, Plane } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Positions = () => {
  const positions = [
    {
      title: "General Secretary",
      organization: "Classical Music and Dance Club",
      institution: "MNIT Jaipur",
      icon: Music,
      color: "from-blue-500 to-cyan-500",
      description: "Leading the Classical Music and Dance Club, organizing cultural events, managing team activities, and promoting traditional arts on campus."
    },
    {
      title: "Joint Secretary",
      organization: "Aeromodelling Club",
      institution: "MNIT Jaipur",
      icon: Plane,
      color: "from-purple-500 to-pink-500",
      description: "Supporting the Aeromodelling Club in organizing technical workshops, competitions, and fostering interest in aerospace engineering among students."
    }
  ];

  return (
    <AnimatedSection id="positions" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <GradientText>Leadership &amp; Responsibilities</GradientText>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Positions of responsibility and leadership roles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {positions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000}>
                <GlassCard className="h-full group hover:border-accent-cyan/30 transition-all duration-300">
                  <div className="flex flex-col items-center text-center gap-6">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${position.color} p-0.5`}
                    >
                      <div className="w-full h-full bg-dark-primary rounded-2xl flex items-center justify-center">
                        <position.icon className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                        {position.title}
                      </h3>
                      
                      <div className={`text-lg font-semibold bg-gradient-to-r ${position.color} bg-clip-text text-transparent`}>
                        {position.organization}
                      </div>

                      <div className="text-text-secondary font-medium">
                        {position.institution}
                      </div>

                      <p className="text-text-secondary leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Leadership Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <GlassCard className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple p-0.5">
                <div className="w-full h-full bg-dark-primary rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-text-primary text-lg">
                  <span className="font-bold text-accent-cyan">Leading</span> cultural and technical clubs with 
                  <span className="font-bold text-accent-purple"> 100+ members</span>
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Positions;
