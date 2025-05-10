import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    setIsSubmitted(true);
    setEmail('');
    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };
  
  return (
    <div className="container-custom">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2 
          className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Stay Updated With Latest Courses
        </motion.h2>
        <motion.p 
          className="mb-8 text-primary-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get notified about new courses, special offers, and exclusive learning resources.
        </motion.p>
        
        {isSubmitted ? (
          <motion.div 
            className="mx-auto rounded-lg border border-primary-700 bg-primary-800 p-4 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="flex items-center justify-center text-lg font-medium">
              <svg className="mr-2 h-6 w-6 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Thanks for subscribing!
            </p>
          </motion.div>
        ) : (
          <motion.form 
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-x-3 sm:space-y-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 rounded-lg border-0 py-3 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-700"
              required
            />
            <button 
              type="submit" 
              className="btn bg-white px-6 py-3 text-primary-900 hover:bg-gray-100 sm:flex-shrink-0"
            >
              <Send size={18} className="mr-2" /> Subscribe
            </button>
          </motion.form>
        )}
        
        <motion.p 
          className="mt-4 text-sm text-primary-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We respect your privacy. Unsubscribe at any time.
        </motion.p>
      </div>
    </div>
  );
};

export default NewsletterSignup;