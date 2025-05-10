import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Course } from '../../data/coursesData';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <motion.div 
      className="card h-full overflow-hidden"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Link to={`/courses/${course.slug}`} className="flex h-full flex-col">
        <div className="relative mb-4 overflow-hidden rounded-lg">
          {course.discountPrice && (
            <div className="absolute left-0 top-0 z-10 rounded-br-lg bg-accent-500 px-2 py-1 text-xs font-bold text-white">
              SALE
            </div>
          )}
          <img 
            src={course.thumbnail} 
            alt={course.title} 
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-primary-600 px-2 py-1 text-xs font-medium">
                {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
              </span>
              <span className="rounded-full bg-gray-800/80 px-2 py-1 text-xs font-medium">
                {course.level}
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-1 flex-col">
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 dark:text-white">
            {course.title}
          </h3>
          
          <p className="mb-4 line-clamp-2 flex-1 text-sm text-gray-600 dark:text-gray-300">
            {course.description}
          </p>
          
          <div className="mb-4 flex items-center text-sm text-gray-600 dark:text-gray-400">
            <img 
              src={course.instructor.avatar} 
              alt={course.instructor.name} 
              className="mr-2 h-6 w-6 rounded-full object-cover"
            />
            <span>{course.instructor.name}</span>
          </div>
          
          <div className="mb-3 flex justify-between border-t border-gray-200 pt-3 dark:border-gray-700">
            <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
              <Clock size={14} className="mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
              <Users size={14} className="mr-1" />
              <span>{course.studentsCount.toLocaleString()} students</span>
            </div>
            <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
              <BarChart size={14} className="mr-1" />
              <span>{course.level}</span>
            </div>
          </div>
          
          <div className="mt-auto flex items-center justify-between">
            <div className="flex items-center">
              <div className="mr-2 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg 
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-600 dark:text-gray-400">
                ({course.ratingCount})
              </span>
            </div>
            <div>
              {course.discountPrice ? (
                <div className="text-right">
                  <span className="mr-2 text-xs text-gray-500 line-through dark:text-gray-400">
                    ${course.price}
                  </span>
                  <span className="text-lg font-bold text-accent-600 dark:text-accent-500">
                    ${course.discountPrice}
                  </span>
                </div>
              ) : (
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  ${course.price}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CourseCard;