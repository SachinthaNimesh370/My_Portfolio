import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Priority skills with official technology icons
  const prioritySkills = [
    { 
      name: 'Java', 
      level: 90, 
      color: 'from-red-500 to-red-700', 
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    { 
      name: 'Spring Boot', 
      level: 85, 
      color: 'from-green-500 to-green-700', 
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg'
    },
    { 
      name: 'React', 
      level: 90, 
      color: 'from-cyan-400 to-cyan-600', 
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'NestJS', 
      level: 80, 
      color: 'from-red-600 to-pink-600', 
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg'
    },
    { 
      name: 'Express.js', 
      level: 85, 
      color: 'from-gray-600 to-gray-800', 
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
    },
    { 
      name: 'React Native', 
      level: 85, 
      color: 'from-blue-500 to-blue-700', 
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'TypeScript', 
      level: 88, 
      color: 'from-blue-400 to-blue-600', 
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
  ];

  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', level: 90, color: 'from-red-500 to-red-700', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Spring Boot', level: 85, color: 'from-green-500 to-green-700', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
        { name: 'NestJS', level: 80, color: 'from-red-600 to-pink-600', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg' },
        { name: 'Node.js', level: 85, color: 'from-lime-400 to-lime-600', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', level: 85, color: 'from-gray-600 to-gray-800', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'Python', level: 75, color: 'from-green-400 to-green-600', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'PHP', level: 70, color: 'from-indigo-400 to-indigo-600', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      ],
    },
    {
      title: 'Frontend & Mobile',
      skills: [
        { name: 'React', level: 90, color: 'from-cyan-400 to-cyan-600', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'React Native', level: 85, color: 'from-blue-500 to-blue-700', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', level: 88, color: 'from-blue-400 to-blue-600', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'JavaScript', level: 90, color: 'from-yellow-400 to-yellow-600', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Flutter', level: 80, color: 'from-blue-400 to-cyan-500', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { name: 'HTML/CSS', level: 95, color: 'from-orange-400 to-orange-600', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-teal-600', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
      ],
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'MySQL', level: 85, color: 'from-blue-500 to-blue-700', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', level: 80, color: 'from-green-500 to-green-700', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', level: 80, color: 'from-blue-600 to-blue-800', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Firebase', level: 85, color: 'from-orange-500 to-yellow-600', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'SQLite', level: 75, color: 'from-gray-500 to-gray-700', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg' },
        { name: 'AWS', level: 65, color: 'from-orange-600 to-yellow-700', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Docker', level: 70, color: 'from-blue-600 to-blue-800', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 90, color: 'from-gray-700 to-gray-900', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'VS Code', level: 95, color: 'from-blue-600 to-blue-800', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'IntelliJ IDEA', level: 85, color: 'from-purple-600 to-purple-800', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
        { name: 'Android Studio', level: 80, color: 'from-green-600 to-green-800', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
        { name: 'Postman', level: 85, color: 'from-orange-600 to-orange-800', iconUrl: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
        { name: 'Figma', level: 80, color: 'from-pink-500 to-purple-600', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Linux', level: 75, color: 'from-purple-600 to-purple-800', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
      ],
    },
  ];

  const technologies = [
    'Java', 'Spring Boot', 'React', 'NestJS', 'Express.js', 'React Native', 'TypeScript',
    'Node.js', 'MySQL', 'MongoDB', 'Flutter', 'Python', 'JavaScript', 'Firebase',
    'Docker', 'AWS', 'Git', 'Tailwind CSS', 'PostgreSQL', 'Android Studio'
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & <span className="text-blue-600 dark:text-blue-400">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My core competencies and the technologies I use to build robust applications
          </p>
        </motion.div>

        {/* Priority Skills Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Core Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {prioritySkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={skill.iconUrl}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className={`hidden w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {skill.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {skill.name}
                </h4>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {skill.level}% Proficiency
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Tech Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative mb-16 h-32 overflow-hidden"
        >
          <div className="flex animate-pulse">
            {technologies.concat(technologies).map((tech, index) => (
              <motion.div
                key={`${tech}-${index}`}
                className="flex-shrink-0 mx-4 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-full border border-blue-200 dark:border-gray-600"
                animate={{
                  x: [-100, window.innerWidth + 100],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: index * 0.5,
                }}
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {tech}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning & Growing</h3>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Currently mastering <span className="font-bold">DevOps practices and tools</span>, 
              <span className="font-bold"> Hibernate ORM framework</span>, and 
              <span className="font-bold"> Advanced Spring Boot</span> concepts. 
              I believe in continuous learning and staying updated with the latest industry trends.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;