"use client";

import { motion } from 'framer-motion';
import { GlassCard, AnimatedSection, GradientText } from '../ui/AnimatedComponents';
import { Code2, Brain, Globe, Award, Target, Zap } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & Computer Vision",
      description: "Specializing in neural state classification, real-time data processing, and deep learning models",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code2,
      title: "Research & Innovation",
      description: "Co-authored patent and research paper on neural data analysis and high-frequency circuit design",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Full Stack Development",
      description: "Building scalable applications with React.js, Next.js, Node.js, and real-time data visualization",
      color: "from-green-500 to-teal-500"
    }
  ];

  const interests = [
    {
      icon: Target,
      title: "Problem Solving",
      description: "Passionate about solving complex algorithmic challenges and optimizing code performance"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Always exploring new technologies and implementing creative solutions to real-world problems"
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description: "Committed to staying updated with latest trends in web development and machine learning"
    }
  ];

  return (
    <AnimatedSection id="about" className="py-24 px-4 relative">
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
            <GradientText>About Me</GradientText>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Passionate developer and ML enthusiast crafting innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Introduction Card */}
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
            <GlassCard className="h-full">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple p-1">
                    <div className="w-full h-full rounded-full bg-dark-primary flex items-center justify-center text-3xl">
                      👋
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">Hello, I&apos;m Ashvajeet!</h3>
                    <p className="text-accent-cyan">ECE Student &amp; Developer</p>
                  </div>
                </div>

                <p className="text-text-secondary text-lg leading-relaxed">
                  I&apos;m a 4th-year B.Tech student in <span className="text-accent-cyan font-semibold">Electronics &amp; Communication Engineering</span> at <span className="text-accent-purple font-semibold">Malviya National Institute of Technology, Jaipur</span>, expected to graduate in May 2026.
                </p>

                <p className="text-text-secondary text-lg leading-relaxed">
                  My expertise lies in <span className="text-accent-cyan font-semibold">AI &amp; Computer Vision</span>, <span className="text-accent-purple font-semibold">Deep Learning</span>, and <span className="text-accent-orange font-semibold">Full Stack Development</span>. I&apos;ve worked on cutting-edge projects involving neural data analysis, transformer models, and real-time visualization systems.
                </p>

                <p className="text-text-secondary text-lg leading-relaxed">
                  As a Research Intern at <span className="text-accent-cyan font-semibold">IIT Mandi</span>, I engineered a multithreaded C++ application processing 10Gbps data streams from 168 channels, and built real-time Next.js dashboards for neural visualizations. I also worked as a Full Stack Developer Intern at <span className="text-accent-purple font-semibold">Per Clean Laundry Services</span>, developing 30+ APIs and custom testing frameworks.
                </p>

                <p className="text-text-secondary text-lg leading-relaxed">
                  I&apos;m passionate about research and innovation, having co-authored a patent on &quot;Multi-Band electromagnetic burst analyzer&quot; and a research paper on high-frequency circuit design for brain data visualization.
                </p>

                <div className="pt-4 border-t border-text-secondary/10">
                  <p className="text-accent-cyan font-medium">
                    💡 Currently exploring: Next.js 14, Advanced ML Algorithms, and Cloud Technologies
                  </p>
                </div>
              </div>
            </GlassCard>
          </Tilt>

          {/* Highlights Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-text-primary mb-6">What I Do Best</h3>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000}>
                  <GlassCard className="group hover:border-accent-cyan/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.color} p-0.5`}
                      >
                        <div className="w-full h-full bg-dark-primary rounded-xl flex items-center justify-center">
                          <highlight.icon className="w-6 h-6 text-white" />
                        </div>
                      </motion.div>
                      <div>
                        <h4 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
                          {highlight.title}
                        </h4>
                        <p className="text-text-secondary">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-text-primary mb-8 text-center"
          >
            My Interests & Approach
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000}>
                  <GlassCard className="text-center h-full group hover:border-accent-purple/30 transition-all duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-purple p-0.5"
                    >
                      <div className="w-full h-full bg-dark-primary rounded-2xl flex items-center justify-center">
                        <interest.icon className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                    <h4 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent-purple transition-colors">
                      {interest.title}
                    </h4>
                    <p className="text-text-secondary">
                      {interest.description}
                    </p>
                  </GlassCard>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "4th", label: "Year B.Tech" },
            { value: "20+", label: "GitHub Projects" },
            { value: "1", label: "Patent &amp; Paper" },
            { value: "2", label: "Leadership Roles" }
          ].map((stat, index) => (
            <GlassCard key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-orange bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary text-sm">{stat.label}</div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default About;
