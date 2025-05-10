import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Frontend Developer at TechCorp',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'The React course completely transformed my career. Within 3 months of completing it, I landed my dream job as a frontend developer. The curriculum was comprehensive and the projects were relevant to real-world scenarios.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Full Stack Engineer',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'As someone coming from a non-technical background, I was amazed at how quickly I was able to grasp complex concepts. The instructors break down difficult topics into manageable chunks, and the hands-on projects reinforced my learning.',
  },
  {
    id: 3,
    name: 'Jessica Williams',
    role: 'DevOps Specialist',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'The DevOps certification course gave me the edge I needed in a competitive job market. The instructor\'s expertise and real-world examples made the content engaging and immediately applicable to my work.',
  },
];

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 500 : -500,
    opacity: 0,
  }),
};

const TestimonialsSlider: React.FC = () => {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex(prev => [(prev[0] + 1) % testimonials.length, 1]);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => [(prev[0] - 1 + testimonials.length) % testimonials.length, -1]);
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div 
      className="relative overflow-hidden py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center justify-center">
        <button
          className="absolute left-4 z-10 rounded-full bg-white p-2 text-gray-700 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="mx-auto w-full max-w-3xl px-12">
          <AnimatePresence mode='wait' custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="text-center"
            >
              <div className="mb-8 flex justify-center">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-md dark:border-gray-700">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              <div className="mb-6 flex justify-center">
                <Quote size={48} className="text-primary-200 dark:text-primary-900" />
              </div>
              
              <p className="mb-8 text-xl italic text-gray-700 dark:text-gray-300">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <button
          className="absolute right-4 z-10 rounded-full bg-white p-2 text-gray-700 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="mt-8 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex 
                ? 'bg-primary-600 dark:bg-primary-500' 
                : 'bg-gray-300 dark:bg-gray-700'
            }`}
            onClick={() => setCurrentIndex([index, index > currentIndex ? 1 : -1])}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;