import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, BookOpen, Target, Heart, Github, Star, GitBranch } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const highlights = [
    {
      icon: Code,
      title: 'Full Stack Developer',
      description: 'Experienced in both frontend and backend development with modern technologies',
    },
    {
      icon: BookOpen,
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and best practices in software development',
    },
    {
      icon: Target,
      title: 'Problem Solver',
      description: 'Passionate about tackling complex challenges and finding elegant solutions',
    },
    {
      icon: Heart,
      title: 'Team Collaborator',
      description: 'Strong communication skills with experience in collaborative development',
    },
  ];

  const githubStats = [
    {
      icon: Github,
      label: 'Public Repositories',
      value: '25+',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: GitBranch,
      label: 'Total Commits',
      value: '500+',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Star,
      label: 'Stars Earned',
      value: '50+',
      color: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Code,
      label: 'Languages Used',
      value: '10+',
      color: 'from-blue-500 to-purple-600',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Computer Engineering undergraduate with a passion for software development and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Aspiring Software Engineer | Full-Stack Developer | Bsc Engineering (Hons) Computer Engineering | University Of Jaffna
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Third-year Computer Engineering undergraduate with a strong foundation in full-stack development and DevOps. Experienced in building scalable applications using Spring Boot, React, React Native, and MySQL, with additional skills in Docker, CI/CD pipelines, and AWS.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Passionate about solving real-world problems through software and eager to contribute to impactful projects as a software engineering intern.
              </p>
            </div>

            {/* Personal Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Learning</div>
              </div>
            </div>
          </motion.div>

          {/* Animated GIF / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 rounded-2xl" />
              <img
                src="https://github.com/7oSkaaa/7oSkaaa/blob/main/Images/about_me.gif?raw=true"
                alt="About Me Animation"
                className="relative z-10 w-full h-auto rounded-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden relative z-10 w-full h-64 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Code className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-xl font-medium">Developer at Work</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            GitHub Activity
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {githubStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {highlight.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;