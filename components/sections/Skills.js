"use client";

import { motion } from 'framer-motion';
import { GlassCard, AnimatedSection, GradientText } from '../ui/AnimatedComponents';
import { Code2, Brain, Database, Globe, Palette, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "C++", "C", "JavaScript", "SQL", "HTML5", "CSS3"]
    },
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Keras", "Data Analysis", "Model Training"]
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-green-500 to-teal-500",
      skills: ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Bootstrap", "REST APIs"]
    },
    {
      title: "Databases & Backend",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase", "Socket.io", "API Development"]
    },
    {
      title: "Design & UI/UX",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      skills: ["Figma", "Adobe Photoshop", "UI Design", "Responsive Design", "Wireframing", "Prototyping"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-yellow-500 to-orange-500",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Postman", "Vercel", "npm"]
    }
  ];

  return (
    <AnimatedSection className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <GradientText>Skills & Technologies</GradientText>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tools and technologies I work with to build amazing products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <GlassCard key={index} delay={index * 0.1} className="group">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-0.5`}
                  >
                    <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`px-3 py-1.5 bg-gradient-to-r ${category.color} bg-opacity-10 border border-white/10 rounded-lg text-sm text-gray-200 hover:border-white/30 transition-all cursor-default font-medium`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Additional highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <GlassCard className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <div className="text-gray-400">Technologies Mastered</div>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
              10+
            </div>
            <div className="text-gray-400">Projects Completed</div>
          </GlassCard>
          <GlassCard className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-600 bg-clip-text text-transparent mb-2">
              2+
            </div>
            <div className="text-gray-400">Years of Learning</div>
          </GlassCard>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
