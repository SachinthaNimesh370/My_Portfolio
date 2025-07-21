import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Code, Database, Smartphone, Bot, Globe, Users, MessageCircle, Server, Brain, Zap, MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'HostelEase - Advanced Management Ecosystem',
      description: 'A next-generation hostel management platform built with modern enterprise technologies. Features comprehensive room management, intelligent student services, automated fee processing, AI-powered WhatsApp assistance, and real-time analytics. Includes advanced security with JWT authentication and scalable microservices architecture.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Spring Boot', 'React Vite', 'JWT', 'MySQL', 'NestJS', 'Meta API', 'GPT API', 'TypeScript'],
      repositories: [
        {
          name: 'Frontend (React Vite)',
          url: 'https://github.com/SachinthaNimesh370/HostelEase_ClientSide.git',
          icon: Globe,
          description: 'Modern React Vite client with TypeScript'
        },
        {
          name: 'Backend (Spring Boot)',
          url: 'https://github.com/SachinthaNimesh370/HostelEase_ServerSide.git',
          icon: Server,
          description: 'Enterprise Spring Boot API with MySQL'
        },
        {
          name: 'AI ChatBot (NestJS)',
          url: 'https://github.com/SachinthaNimesh370/HostelEase_ChatBot.git',
          icon: Brain,
          description: 'NestJS-powered AI assistant with Meta & GPT APIs'
        }
      ],
      demo: '#',
      icon: Database,
      category: 'Enterprise Full Stack System',
      featured: true,
      isMultiRepo: true,
      highlights: [
        'Enterprise-grade Spring Boot backend',
        'Modern React Vite frontend with TypeScript',
        'AI-powered NestJS chatbot service',
        'Secure JWT authentication system',
        'MySQL database with optimized queries',
        'Meta WhatsApp Business API integration',
        'OpenAI GPT API for intelligent responses',
        'Microservices architecture'
      ]
    },
    {
      title: 'Smart Student Attendance System',
      description: 'Comprehensive GPS-based attendance tracking system with Spring Boot backend, React Vite frontend dashboard, and React Native CLI mobile app. Features real-time location verification using geolocation library, automated attendance marking, student management, attendance analytics, and administrative controls for educational institutions.',
      image: 'https://images.pexels.com/photos/5905918/pexels-photo-5905918.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Spring Boot', 'React Vite', 'React Native CLI', 'MySQL', 'Geolocation API', 'REST API'],
      repositories: [
        {
          name: 'Mobile App (React Native CLI)',
          url: 'https://github.com/SachinthaNimesh370/Smart-Student-Attendance-App.git',
          icon: Smartphone,
          description: 'React Native CLI mobile app with GPS tracking'
        },
        {
          name: 'Backend API (Spring Boot)',
          url: 'https://github.com/SachinthaNimesh370/Smart-Student-Attendance-Backend.git',
          icon: Server,
          description: 'Spring Boot RESTful API with MySQL database'
        },
        {
          name: 'Admin Dashboard (React Vite)',
          url: 'https://github.com/SachinthaNimesh370/Smart-Student-Attendance-Frontend.git',
          icon: Globe,
          description: 'React Vite dashboard for attendance management'
        }
      ],
      demo: '#',
      icon: MapPin,
      category: 'Full Stack Mobile System',
      featured: true,
      isMultiRepo: true,
      highlights: [
        'GPS-based location verification using geolocation library',
        'React Native CLI cross-platform mobile application',
        'Spring Boot RESTful backend API with enterprise features',
        'React Vite admin dashboard with modern UI/UX',
        'MySQL database with optimized queries and indexing',
        'Real-time attendance tracking and notifications',
        'Geolocation API for precise location services',
        'Session-based authentication and role-based authorization',
        'Comprehensive attendance reporting and analytics',
        'Administrative controls for institution management'
      ]
    },
    {
      title: 'EchoGPT - AI Mobile Chatbot',
      description: 'Advanced AI-powered mobile chatbot application built with React Native and integrated with OpenAI GPT-4.0 Mini. Features intelligent conversations, context-aware responses, conversation history, real-time messaging, and modern mobile UI/UX design with smooth animations and intuitive user experience.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'GPT-4.0 Mini', 'TypeScript', 'Expo', 'AsyncStorage', 'React Navigation', 'Animated API'],
      github: 'https://github.com/SachinthaNimesh370/EchoGPT.git',
      demo: '#',
      icon: MessageCircle,
      category: 'AI Mobile Application',
      featured: true,
      highlights: [
        'OpenAI GPT-4.0 Mini integration for intelligent responses',
        'React Native cross-platform mobile development',
        'Real-time conversation interface with typing indicators',
        'Persistent conversation history with AsyncStorage',
        'Modern mobile UI with smooth animations',
        'Context-aware AI responses and conversation memory',
        'Optimized performance for mobile devices',
        'Intuitive chat interface with message bubbles'
      ]
    },
    {
      title: 'OpenAI Chatbot Application',
      description: 'AI-powered chatbot application leveraging OpenAI\'s GPT API to provide intelligent conversations and assistance with modern UI/UX design and conversation history.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'OpenAI API', 'TypeScript', 'Tailwind CSS', 'Context API'],
      github: 'https://github.com/SachinthaNimesh370',
      demo: '#',
      icon: Bot,
      category: 'AI Application',
      featured: false,
    },
    {
      title: 'PeatFeast - Smart Pet Feeding System',
      description: 'IoT-enabled pet care mobile application that allows remote control of pet feeding systems. Features automated water and food dispensing, scheduling capabilities, real-time monitoring, portion control, and notifications for pet owners to ensure their pets are well-fed even when away from home.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'JavaScript', 'Firebase', 'IoT Integration', 'Real-time Database', 'Push Notifications'],
      github: 'https://github.com/SachinthaNimesh370',
      demo: '#',
      icon: Smartphone,
      category: 'IoT Mobile Application',
      featured: true,
    },
    {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website built with React and TypeScript, featuring dark/light theme, smooth animations, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      github: 'https://github.com/SachinthaNimesh370',
      demo: '#',
      icon: Globe,
      category: 'Frontend Web App',
      featured: false,
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management application with team features, project tracking, deadline management, and real-time notifications.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Material-UI'],
      github: 'https://github.com/SachinthaNimesh370',
      demo: '#',
      icon: Users,
      category: 'Web Application',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my development journey through various technologies and domains
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <project.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.isMultiRepo ? (
                    <motion.div
                      className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Code className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </motion.div>
                  ) : (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </motion.a>
                  )}
                  <motion.a
                    href={project.demo}
                    className="p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  </motion.a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Highlights */}
                {project.highlights && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Repository Links for Multi-Repo Projects */}
                {project.isMultiRepo && project.repositories ? (
                  <>
                    <div className="space-y-3 mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                        Repository Components:
                      </h4>
                      {project.repositories.map((repo, repoIndex) => (
                        <motion.a
                          key={repo.name}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group/repo"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                            <repo.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 dark:text-white group-hover/repo:text-blue-600 dark:group-hover/repo:text-blue-400 transition-colors">
                              {repo.name}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {repo.description}
                            </div>
                          </div>
                          <Github className="w-4 h-4 text-gray-400 group-hover/repo:text-blue-600 dark:group-hover/repo:text-blue-400 transition-colors" />
                        </motion.a>
                      ))}
                    </div>
                    
                    {/* Demo Link for Multi-Repo Projects */}
                    <motion.a
                      href={project.demo}
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-medium">Live Demo</span>
                    </motion.a>
                  </>
                ) : (
                  /* Regular Links for Single-Repo Projects */
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-medium">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-medium">Demo</span>
                    </motion.a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.category}
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/SachinthaNimesh370"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Code className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;