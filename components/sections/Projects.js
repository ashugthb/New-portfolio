"use client";

import { motion } from 'framer-motion';
import { GlassCard, AnimatedSection, GradientText } from '../ui/AnimatedComponents';
import { ExternalLink, Github, Play } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Song Recommendation System",
      description: "Intelligent music recommendation engine leveraging machine learning algorithms including content-based and collaborative filtering. Analyzes user listening patterns, song features, and preferences to deliver personalized song suggestions with high accuracy.",
      image: "/api/placeholder/600/400",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "NumPy", "Flask", "Spotify API"],
      features: [
        "Collaborative filtering & content-based algorithms",
        "User preference learning & behavior analysis",
        "Real-time personalized song suggestions",
        "Integration with music streaming APIs",
        "Performance metrics: 85% accuracy in recommendations"
      ],
      github: "https://github.com/ashvajeet2722",
      demo: "#",
      category: "Machine Learning"
    },
    {
      title: "Real-Time Chat Application",
      description: "Full-stack real-time messaging platform built with modern web technologies. Features include instant messaging using WebSocket, user authentication, typing indicators, online/offline status, and persistent message history stored in MongoDB.",
      image: "/api/placeholder/600/400",
      gradient: "from-green-500 via-teal-500 to-blue-500",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express.js", "JWT", "CSS3"],
      features: [
        "Real-time bidirectional communication with Socket.io",
        "Secure user authentication with JWT tokens",
        "Live typing indicators & online status",
        "Message persistence with MongoDB",
        "Responsive design for all devices"
      ],
      github: "https://github.com/ashvajeet2722",
      demo: "#",
      category: "Web Development"
    },
    {
      title: "Weather Forecasting Dashboard",
      description: "Interactive weather application providing comprehensive weather data and forecasts. Features real-time weather updates, 5-day forecasts, temperature trends, and location-based weather information using third-party weather APIs.",
      image: "/api/placeholder/600/400",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      technologies: ["JavaScript", "React.js", "OpenWeather API", "Chart.js", "CSS3", "Axios"],
      features: [
        "Real-time weather data & conditions",
        "5-day detailed forecast with hourly breakdowns",
        "Interactive charts for temperature trends",
        "Location-based weather search",
        "Beautiful responsive UI with weather animations"
      ],
      github: "https://github.com/ashvajeet2722",
      demo: "#",
      category: "Web Development"
    },
    {
      title: "Student Management System",
      description: "Comprehensive web-based student management system for educational institutions. Manages student records, attendance tracking, grade management, course enrollment, and generates detailed reports for administrators and teachers.",
      image: "/api/placeholder/600/400",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Bootstrap"],
      features: [
        "Complete CRUD operations for student data",
        "Attendance tracking & reporting system",
        "Grade management & performance analytics",
        "Role-based access control (Admin/Teacher/Student)",
        "CSV export & data visualization"
      ],
      github: "https://github.com/ashvajeet2722",
      demo: "#",
      category: "Web Development"
    },
    {
      title: "Portfolio Website Builder",
      description: "Dynamic portfolio generator enabling users to create professional portfolio websites without coding. Features customizable templates, drag-and-drop interface, project showcase sections, and one-click deployment to popular hosting platforms.",
      image: "/api/placeholder/600/400",
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS", "Vercel API"],
      features: [
        "10+ professional portfolio templates",
        "Drag-and-drop section customization",
        "Real-time preview & editing",
        "One-click deployment to Vercel/Netlify",
        "SEO optimization & responsive design"
      ],
      github: "https://github.com/ashvajeet2722",
      demo: "#",
      category: "Web Development"
    },
    {
      title: "Movie Recommendation System",
      description: "Advanced movie recommendation engine using machine learning techniques. Implements collaborative filtering and content-based filtering algorithms to suggest movies based on user ratings, viewing history, and movie attributes like genre and cast.",
      image: "/api/placeholder/600/400",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "TMDB API"],
      features: [
        "Hybrid recommendation algorithm (collaborative + content)",
        "User rating analysis & preference learning",
        "Movie similarity calculation using cosine similarity",
        "Integration with TMDB for movie metadata",
        "90% recommendation accuracy achieved"
      ],
      github: "https://github.com/ashvajeet2722",
      demo: "#",
      category: "Machine Learning"
    },
    {
      title: "E-Commerce Web Application",
      description: "Full-featured e-commerce platform with comprehensive shopping functionality. Includes product catalog, shopping cart, secure checkout process, order management, and admin dashboard for inventory and sales management.",
      image: "/api/placeholder/600/400",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe API", "Redux"],
      features: [
        "Product browsing with search & filters",
        "Shopping cart with dynamic updates",
        "Secure payment integration with Stripe",
        "Order tracking & history",
        "Admin dashboard for inventory management"
      ],
      github: "https://github.com/ashvajeet2722",
      demo: "#",
      category: "Web Development"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management application for teams and individuals. Features task creation, assignment, priority management, deadline tracking, and progress monitoring with intuitive dashboard and real-time updates.",
      image: "/api/placeholder/600/400",
      gradient: "from-teal-500 via-green-500 to-emerald-500",
      technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
      features: [
        "Task creation & assignment workflow",
        "Priority levels & deadline management",
        "Real-time collaboration with Socket.io",
        "Progress tracking dashboard",
        "Team member management & notifications"
      ],
      github: "https://github.com/ashvajeet2722",
      demo: "#",
      category: "Web Development"
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
