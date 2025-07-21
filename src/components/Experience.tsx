import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'University of Jaffna',
      period: '2021 - Present',
      location: 'Jaffna, Sri Lanka',
      description: 'Specializing in software development, computer systems, and engineering principles. Focusing on full-stack development and modern programming technologies.',
    },
    {
      degree: 'Advanced Level (A/L)',
      institution: 'Local High School',
      period: '2019 - 2020',
      location: 'Sri Lanka',
      description: 'Completed Advanced Level education with strong foundation in analytical thinking and problem-solving skills.',
    },
  ];

  const learningGoals = [
    {
      title: 'Artificial Intelligence & Machine Learning',
      description: 'Exploring deep learning frameworks and AI applications',
      icon: '🤖',
    },
    {
      title: 'Cloud Computing & DevOps',
      description: 'Learning AWS, Docker, and modern deployment practices',
      icon: '☁️',
    },
    {
      title: 'Mobile Development',
      description: 'Advancing skills in React Native and Flutter',
      icon: '📱',
    },
    {
      title: 'System Design',
      description: 'Understanding scalable architecture patterns',
      icon: '🏗️',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education & <span className="text-blue-600 dark:text-blue-400">Learning</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My academic journey and continuous learning path in technology
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Education
          </motion.h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="relative flex items-start space-x-8 mb-12"
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">
                    {edu.institution}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Current Learning Goals
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-4">{goal.icon}</div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {goal.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {goal.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Goal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Career Objective</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              Seeking a <span className="font-bold">Software Engineering Internship</span> where I can 
              apply my technical skills, contribute to meaningful projects, and learn from experienced 
              professionals. I'm passionate about creating innovative solutions and eager to grow as 
              a developer in a collaborative environment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;