"use client";

import { motion } from 'framer-motion';
import { GlassCard, AnimatedSection, GradientText } from '../ui/AnimatedComponents';
import { Code2, Brain, Globe, Award, Target, Zap } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Proficient in building modern web applications using React.js, Next.js, Node.js, and various databases",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Experienced in developing ML models with TensorFlow, scikit-learn, and implementing recommendation systems",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Globe,
      title: "Open Source Contributor",
      description: "Active contributor to GSSoC with 15+ projects and consistent high-quality contributions",
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
                    <h3 className="text-2xl font-bold text-text-primary">Hello, Im Ashvajeet!</h3>
                    <p className="text-accent-cyan">ECE Student & Developer</p>
                  </div>
                </div>

                <p className="text-text-secondary text-lg leading-relaxed">
                  Im a final-year B.Tech student specializing in <span className="text-accent-cyan font-semibold">Electronics & Communication Engineering</span> at <span className="text-accent-purple font-semibold">IIIT Sonepat</span>, with a strong passion for technology and innovation.
                </p>

                <p className="text-text-secondary text-lg leading-relaxed">
                  My journey in tech started with curiosity about how things work, and has evolved into a deep love for <span className="text-accent-cyan font-semibold">Machine Learning</span> and <span className="text-accent-purple font-semibold">Full Stack Web Development</span>. Ive had the privilege of working on diverse projects ranging from AI-powered recommendation systems to real-time web applications.
                </p>

                <p className="text-text-secondary text-lg leading-relaxed">
                  During my internship at <span className="text-accent-orange font-semibold">InternPe</span>, I gained hands-on experience in building and optimizing ML models. As an active open-source contributor with <span className="text-accent-purple font-semibold">GirlScript Summer of Code</span>, Ive collaborated with developers worldwide, contributing to 15+ projects and earning recognition for my consistent contributions.
                </p>

                <p className="text-text-secondary text-lg leading-relaxed">
                  I believe in the power of technology to solve real-world problems and am constantly learning new tools and frameworks to expand my skill set. When Im not coding, youll find me exploring new tech trends, participating in hackathons, or contributing to open-source projects.
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
            { value: "8.75", label: "CGPA" },
            { value: "20+", label: "Projects" },
            { value: "15+", label: "Open Source Contributions" },
            { value: "4+", label: "Certifications" }
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
