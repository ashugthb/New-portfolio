"use client";

import { motion } from 'framer-motion';
import { GlassCard, AnimatedSection, GradientText } from '../ui/AnimatedComponents';
import { ExternalLink, Github, Play } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "Automated Neural State Classification from DDG Visualizations",
      description: "Developed a Computer Vision model using OpenCV and TensorFlow to classify neural states from 4 distinct real-time visualizations, processing data stream from 168 channels.",
      image: "/api/placeholder/600/400",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      technologies: ["Python", "OpenCV", "TensorFlow", "Computer Vision", "Real-time Processing"],
      features: [
        "Real-time neural state classification from 168 channels",
        "Processing 4 distinct visualization types simultaneously",
        "Automated pattern identification reducing analysis time by 90%",
        "Efficient quantification of neural activity",
        "Computer Vision based classification pipeline"
      ],
      github: "https://github.com/ashvajeet2722",
      demo: "#",
      category: "AI & Computer Vision",
      date: "Aug 2024"
    },
    {
      title: "Hierarchical Transformer Attention Model",
      description: "Devised a hierarchical attention model with staged memory tokens to cut computational complexity from O(n²) to O(n), enabling a 10,000-token sequence length on a single 4GB GPU.",
      image: "/api/placeholder/600/400",
      gradient: "from-green-500 via-teal-500 to-blue-500",
      technologies: ["Python", "PyTorch", "Transformer Architecture", "Deep Learning"],
      features: [
        "Reduced computational complexity from O(n²) to O(n)",
        "10,000-token sequence processing on 4GB GPU",
        "40% reduction in GPU training time",
        "2.5x increase in long-context retention",
        "Hierarchical staged memory token architecture"
      ],
      github: "https://github.com/ashvajeet2722",
      demo: "#",
      category: "Deep Learning",
      date: "Jun 2024"
    }
  ];

  return (
    <AnimatedSection id="projects" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <GradientText>Featured Projects</GradientText>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing my best work in web development, machine learning, and software engineering
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard key={index} delay={index * 0.1} className="group overflow-hidden">
              {/* Project Image/Gradient */}
              <div className="relative h-48 -m-6 mb-6 overflow-hidden rounded-t-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
                <motion.div
                  className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    className="flex gap-4"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
                    >
                      <Github className="w-6 h-6 text-white" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all"
                    >
                      <ExternalLink className="w-6 h-6 text-white" />
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-blue-400 mt-0.5">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.05 * i }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/ashvajeet2722"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 backdrop-blur-sm shadow-lg"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
