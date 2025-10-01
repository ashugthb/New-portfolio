"use client";

import { motion } from 'framer-motion';
import { GlassCard, AnimatedSection, GradientText } from '../ui/AnimatedComponents';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "InternPe",
      location: "Remote",
      period: "June 2024 - July 2024",
      description: [
        "Built and deployed machine learning models using TensorFlow and scikit-learn for predictive analytics",
        "Performed comprehensive data preprocessing, feature engineering, and exploratory data analysis",
        "Implemented various ML algorithms including Linear Regression, Decision Trees, and Neural Networks",
        "Optimized model performance through hyperparameter tuning and cross-validation techniques",
        "Collaborated with team members to deliver scalable ML solutions for real-world business problems"
      ],
      skills: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code (GSSoC)",
      location: "Remote",
      period: "May 2024 - August 2024",
      description: [
        "Actively contributed to 15+ open-source projects with focus on web development and documentation",
        "Implemented new features, fixed critical bugs, and enhanced UI/UX for multiple repositories",
        "Collaborated with global developers using Git workflow and conducted thorough code reviews",
        "Improved project documentation and created comprehensive guides for new contributors",
        "Earned recognition and badges for consistent high-quality contributions to the community"
      ],
      skills: ["JavaScript", "React.js", "Node.js", "Git", "GitHub", "Open Source"],
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
