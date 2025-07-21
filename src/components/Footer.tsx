import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <motion.h3 
              className="text-2xl font-bold mb-2"
              whileHover={{ scale: 1.05 }}
            >
              S.P. Sachintha Nimesh
            </motion.h3>
            <p className="text-gray-400">
              Computer Engineering Undergraduate | Passionate Developer
            </p>
            <p className="text-gray-400 mt-2">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <motion.button
              onClick={scrollToTop}
              className="mb-4 p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
            
            <div className="text-center md:text-right text-gray-400">
              <p className="flex items-center justify-center md:justify-end space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>by Sachintha</span>
              </p>
              <p className="mt-2">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            Open to opportunities • Let's connect and build something amazing together!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;