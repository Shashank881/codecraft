import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CourseCard from '../courses/CourseCard';
import { coursesData } from '../../data/coursesData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const FeaturedCourses: React.FC = () => {
  // Filter featured courses (in a real app, this could be based on API data)
  const featuredCourses = coursesData.filter(course => course.featured).slice(0, 4);
  
  return (
    <motion.div 
      className="course-grid"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {featuredCourses.map((course) => (
        <motion.div key={course.id} variants={item}>
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturedCourses;