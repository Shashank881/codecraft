import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, BarChart2, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { coursesData } from '../data/coursesData';

const DashboardPage: React.FC = () => {
  // Mock enrolled courses (in a real app, this would come from an API)
  const enrolledCourses = coursesData.slice(0, 3);
  
  return (
    <div className="py-8">
      <div className="container-custom">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Track your progress and continue learning</p>
        </motion.div>
        
        {/* Stats Overview */}
        <motion.div 
          className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
            <div className="flex items-center">
              <div className="rounded-full bg-primary-100 p-3 dark:bg-primary-900/30">
                <BookOpen size={24} className="text-primary-600 dark:text-primary-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Enrolled Courses</h3>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">3</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
            <div className="flex items-center">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                <Clock size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Hours Learned</h3>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">24.5</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
            <div className="flex items-center">
              <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
                <Award size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Certificates</h3>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">2</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
            <div className="flex items-center">
              <div className="rounded-full bg-yellow-100 p-3 dark:bg-yellow-900/30">
                <BarChart2 size={24} className="text-yellow-600 dark:text-yellow-400" />
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Progress</h3>
                <p className="text-2xl font-semibold text-gray-900 dark:text-white">67%</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Continue Learning Section */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Continue Learning</h2>
            <Link to="/courses" className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300">
              View All Courses
            </Link>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                <div className="mb-4 flex items-center">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title} 
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900 dark:text-white">{course.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{course.instructor.name}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-300">Progress</span>
                    <span className="font-medium text-gray-900 dark:text-white">67%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div className="h-full w-2/3 rounded-full bg-primary-600 dark:bg-primary-400"></div>
                  </div>
                </div>
                
                <Link 
                  to={`/courses/${course.slug}`}
                  className="flex items-center justify-center rounded-md bg-primary-50 px-4 py-2 text-sm font-medium text-primary-600 hover:bg-primary-100 dark:bg-primary-900/10 dark:text-primary-400 dark:hover:bg-primary-900/20"
                >
                  Continue Learning <ChevronRight size={16} className="ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Upcoming Events */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {[
                {
                  title: 'Live Q&A Session: React Fundamentals',
                  date: 'Tomorrow, 2:00 PM',
                  type: 'Live Session'
                },
                {
                  title: 'Assignment Due: Node.js API Project',
                  date: 'Friday, 11:59 PM',
                  type: 'Assignment'
                },
                {
                  title: 'Workshop: Building CI/CD Pipelines',
                  date: 'Next Week, Monday 3:00 PM',
                  type: 'Workshop'
                }
              ].map((event, index) => (
                <div key={index} className="flex items-center py-4 first:pt-0 last:pb-0">
                  <div className="rounded-full bg-primary-100 p-3 dark:bg-primary-900/30">
                    <Calendar size={20} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white">{event.title}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
                  </div>
                  <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-900/20 dark:text-primary-400">
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Learning Path Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Learning Path Progress</h2>
          <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
            <div className="mb-6">
              <h3 className="mb-2 font-medium text-gray-900 dark:text-white">Full Stack Development Path</h3>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-300">Overall Progress</span>
                <span className="font-medium text-gray-900 dark:text-white">45%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-full w-[45%] rounded-full bg-primary-600 dark:bg-primary-400"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { name: 'HTML & CSS Fundamentals', progress: 100 },
                { name: 'JavaScript Essentials', progress: 80 },
                { name: 'React Development', progress: 60 },
                { name: 'Node.js Backend', progress: 30 },
                { name: 'Database Management', progress: 0 }
              ].map((course, index) => (
                <div key={index}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="text-gray-700 dark:text-gray-300">{course.name}</span>
                    <span className="font-medium text-gray-900 dark:text-white">{course.progress}%</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div 
                      className="h-full rounded-full bg-primary-600 dark:bg-primary-400" 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;