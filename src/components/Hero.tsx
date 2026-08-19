import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/SachinthaNimesh370',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/sachintha-nimesh-30b039298/',
      label: 'LinkedIn',
    },
    {
      icon: Mail,
      href: 'mailto:Sachinthanimesh370@gmail.com',
      label: 'Email',
    },
    {
      icon: ExternalLink,
      href: 'https://medium.com/@sachinthanimesh370',
      label: 'Medium',
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 dark:bg-blue-300/10 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, 100, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 10 + i * 0.5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-blue-600 dark:text-blue-400 font-medium text-lg"
              >
                Hello, I'm
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white"
              >
                S.P. Sachintha
                <span className="block text-4xl lg:text-6xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Nimesh
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium"
              >
                Computer Engineering Undergraduate | Passionate Developer
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl"
              >
                A passionate problem-solver and curious learner from University of Jaffna, 
                seeking a Software Engineering Internship. I love building innovative solutions 
                and exploring new technologies.
              </motion.p>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <link.icon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              
              <motion.a
                href="/SachinthaNimeshCV.pdf"
                download="SachinthaNimeshCV.pdf"
                className="flex items-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Clean Professional Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              {/* Animated rings - subtle and elegant */}
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-blue-400/20 dark:border-blue-300/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border-4 border-purple-400/20 dark:border-purple-300/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Clean Professional Profile Image */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl">
                <motion.img
                  src="/My Profesional cv.jpeg"
                  alt="S.P. Sachintha Nimesh - Professional Profile"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                />
                {/* Subtle gradient overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;