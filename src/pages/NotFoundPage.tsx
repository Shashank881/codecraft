import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mx-auto mb-8 flex h-40 w-40 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/30"
        >
          <span className="text-7xl font-bold text-primary-600 dark:text-primary-400">404</span>
        </motion.div>
        
        <motion.h1 
          className="mb-4 text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Page Not Found
        </motion.h1>
        
        <motion.p 
          className="mb-8 text-xl text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Oops! The page you are looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center px-6 py-3 text-base"
          >
            <Home size={20} className="mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;