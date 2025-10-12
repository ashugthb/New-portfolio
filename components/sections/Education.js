"use client";

import { motion } from 'framer-motion';
import { GlassCard, AnimatedSection, GradientText } from '../ui/AnimatedComponents';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const Education = () => {
  const education = {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Electronics & Communication Engineering",
    institution: "Malviya National Institute of Technology, Jaipur",
    location: "Jaipur, Rajasthan, India",
    duration: "Nov 2022 - May 2026 (Expected)",
    cgpa: "",
    achievements: [
      "Class XII (CBSE, Mar 2021): Scored 92% (Ranked 2nd out of 80 students)",
      "Class X (CBSE, Mar 2019): Scored 86.7%",
      "General Secretary: Classical Music and Dance Club, MNIT Jaipur",
      "Joint Secretary: Aeromodelling Club, MNIT Jaipur"
    ],
    coursework: [
      "Neural Network",
      "Deep Learning",
      "Computer Vision",
      "Image Processing",
      "React.js with Redux Toolkit"
    ]
  };

  const certifications = [
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "2024",
      icon: "🎓"
    },
    {
      title: "React.js with Redux Toolkit",
      issuer: "Udemy",
      date: "2024",
      icon: "⚛️"
    }
  ];

  return (
    <AnimatedSection id="education" className="py-24 px-4 relative">
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
            <GradientText>Education &amp; Certifications</GradientText>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            My academic background and continuous learning journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Education Card */}
          <div className="lg:col-span-2">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000}>
              <GlassCard className="h-full">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-purple p-0.5"
                  >
                    <div className="w-full h-full bg-dark-primary rounded-2xl flex items-center justify-center">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                      {education.degree}
                    </h3>
                    <p className="text-xl font-semibold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-4">
                      {education.major}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <p className="text-text-secondary text-lg">
                        {education.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-text-secondary">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{education.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{education.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          <span className="font-semibold text-accent-cyan">CGPA: {education.cgpa}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-accent-cyan to-accent-purple rounded-full" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {education.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="flex items-start gap-3 text-text-secondary"
                          >
                            <span className="text-accent-cyan mt-1">▹</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Coursework */}
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-gradient-to-b from-accent-purple to-accent-orange rounded-full" />
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {education.coursework.map((course, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 * i }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1.5 bg-dark-secondary border border-text-secondary/10 rounded-lg text-sm text-text-secondary hover:border-accent-cyan/30 hover:bg-dark-tertiary transition-all"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </Tilt>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-accent-cyan to-accent-purple rounded-full" />
              Certifications
            </h3>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
              >
                <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05} transitionSpeed={2000}>
                  <GlassCard className="group hover:border-accent-cyan/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{cert.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-accent-cyan transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-text-secondary text-sm mb-1">{cert.issuer}</p>
                        <p className="text-accent-cyan text-xs font-medium">{cert.date}</p>
                      </div>
                    </div>
                  </GlassCard>
                </Tilt>
              </motion.div>
            ))}

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <GlassCard className="mt-6 bg-gradient-to-br from-accent-cyan/5 to-accent-purple/5">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-accent-cyan to-accent-purple bg-clip-text text-transparent mb-2">
                    4+
                  </div>
                  <div className="text-text-secondary text-sm">Professional Certifications</div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Education;
