import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, CheckCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary-900 via-primary-800 to-secondary-900 py-24 text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-primary-500 animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-32 right-16 h-64 w-64 rounded-full bg-secondary-500 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute left-1/3 top-1/2 h-32 w-32 rounded-full bg-accent-500 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.h1 
              className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Master <span className="text-accent-400">Coding Skills</span> That Drive Your Career
            </motion.h1>
            
            <motion.p 
              className="mb-8 text-lg text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Learn from industry experts and get the skills employers are looking for. 
              Join thousands of students already learning on CodeCraft.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/courses" className="btn bg-white px-6 py-3 text-primary-900 hover:bg-gray-100">
                Explore Courses
              </Link>
              <button className="btn-outline border-white px-6 py-3 text-white hover:bg-white/10">
                <Play size={16} className="mr-2" /> Watch Demo
              </button>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-2 text-accent-400" />
                <span className="text-sm">Industry-relevant curriculum</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-2 text-accent-400" />
                <span className="text-sm">Expert instructors</span>
              </div>
              <div className="flex items-center">
                <CheckCircle size={20} className="mr-2 text-accent-400" />
                <span className="text-sm">Job-ready skills</span>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-lg"
          >
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Student coding" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 dark:text-primary-400">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                      <path d="m9 12 2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">10,000+ Students</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Already learning with us</p>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 rounded-lg bg-white p-4 shadow-lg dark:bg-gray-800">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-100 dark:bg-accent-900/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-600 dark:text-accent-400">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200">100+ Courses</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">In-demand skills</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm font-medium uppercase tracking-wider">Trusted by companies worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <img src="https://via.placeholder.com/120x40/ffffff/666666?text=COMPANY" alt="Company" className="h-8" />
            <img src="https://via.placeholder.com/120x40/ffffff/666666?text=STARTUP" alt="Startup" className="h-8" />
            <img src="https://via.placeholder.com/120x40/ffffff/666666?text=ENTERPRISE" alt="Enterprise" className="h-8" />
            <img src="https://via.placeholder.com/120x40/ffffff/666666?text=TECH+CO" alt="Tech Co" className="h-8" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;