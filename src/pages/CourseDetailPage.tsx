import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  User, 
  BarChart, 
  PlayCircle, 
  ShoppingCart, 
  Award,
  CreditCard,
  ChevronDown,
  ChevronUp,
  Download,
  Bookmark
} from 'lucide-react';
import { coursesData } from '../data/coursesData';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});
  
  // Find the course by slug
  const course = coursesData.find(c => c.slug === courseId);
  
  if (!course) {
    return (
      <div className="container-custom flex min-h-screen items-center justify-center py-16">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Course Not Found</h1>
          <p className="mb-8 text-gray-600 dark:text-gray-300">The course you're looking for doesn't exist or has been removed.</p>
          <Link to="/courses" className="btn-primary">
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }
  
  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };
  
  return (
    <div className="bg-gray-50 py-8 dark:bg-gray-900">
      <div className="container-custom">
        {/* Course Header */}
        <motion.div 
          className="mb-8 rounded-xl bg-gradient-to-r from-primary-900 via-primary-800 to-secondary-900 p-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 flex items-center space-x-2">
            <Link to={`/courses?category=${course.category}`} className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium hover:bg-white/30">
              {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
            </Link>
            <span className="rounded-full bg-accent-500/90 px-3 py-1 text-sm font-medium">
              {course.level}
            </span>
          </div>
          
          <h1 className="mb-4 text-3xl font-bold sm:text-4xl">{course.title}</h1>
          
          <p className="mb-6 max-w-3xl text-lg text-gray-100">{course.description}</p>
          
          <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-gray-100">
            <div className="flex items-center">
              <Clock size={18} className="mr-2" />
              <span>{course.duration} total length</span>
            </div>
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              <span>{course.studentsCount.toLocaleString()} students enrolled</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>Last updated {course.lastUpdated}</span>
            </div>
            <div className="flex items-center">
              <BarChart size={18} className="mr-2" />
              <span>{course.level} level</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <img 
              src={course.instructor.avatar} 
              alt={course.instructor.name} 
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-medium">Created by {course.instructor.name}</p>
              <p className="text-sm text-gray-200">{course.instructor.title}</p>
            </div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Tabs */}
            <div className="mb-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex overflow-x-auto">
                <button 
                  className={`border-b-2 px-4 py-2 text-sm font-medium ${
                    activeTab === 'overview' 
                      ? 'border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-500' 
                      : 'border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`border-b-2 px-4 py-2 text-sm font-medium ${
                    activeTab === 'curriculum' 
                      ? 'border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-500' 
                      : 'border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                  onClick={() => setActiveTab('curriculum')}
                >
                  Curriculum
                </button>
                <button 
                  className={`border-b-2 px-4 py-2 text-sm font-medium ${
                    activeTab === 'instructor' 
                      ? 'border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-500' 
                      : 'border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                  onClick={() => setActiveTab('instructor')}
                >
                  Instructor
                </button>
                <button 
                  className={`border-b-2 px-4 py-2 text-sm font-medium ${
                    activeTab === 'reviews' 
                      ? 'border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-500' 
                      : 'border-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews
                </button>
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="mb-8 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">About This Course</h2>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">{course.description}</p>
                  
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">What You'll Learn</h3>
                  <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div className="flex items-start">
                      <svg className="mr-3 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Master the fundamentals of the technology</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="mr-3 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Build real-world projects to solidify knowledge</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="mr-3 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Understand advanced concepts and patterns</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="mr-3 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Learn industry best practices</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="mr-3 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Implement security and performance optimizations</span>
                    </div>
                    <div className="flex items-start">
                      <svg className="mr-3 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">Prepare for technical interviews</span>
                    </div>
                  </div>
                  
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Requirements</h3>
                  <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700 dark:text-gray-300">
                    <li>Basic knowledge of programming concepts</li>
                    <li>Computer with internet connection</li>
                    <li>Eagerness to learn and practice</li>
                  </ul>
                  
                  <h3 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">Course Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {course.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'curriculum' && (
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Course Curriculum</h2>
                  <p className="mb-6 text-gray-700 dark:text-gray-300">
                    {course.modules.length} modules • {
                      course.modules.reduce((sum, module) => sum + module.lessons.length, 0)
                    } lessons • {course.duration} total length
                  </p>
                  
                  <div className="space-y-4">
                    {course.modules.map(module => (
                      <div key={module.id} className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                        <button 
                          className="flex w-full items-center justify-between bg-gray-50 p-4 dark:bg-gray-800/50"
                          onClick={() => toggleModule(module.id)}
                        >
                          <div className="flex items-center">
                            <span className="mr-2 font-semibold text-gray-900 dark:text-white">{module.title}</span>
                            <span className="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                              {module.lessons.length} lessons
                            </span>
                          </div>
                          {expandedModules[module.id] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        
                        {expandedModules[module.id] && (
                          <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {module.lessons.map(lesson => (
                              <div key={lesson.id} className="flex items-center justify-between p-4">
                                <div className="flex items-center">
                                  <PlayCircle size={18} className="mr-3 text-gray-500 dark:text-gray-400" />
                                  <span className="text-gray-700 dark:text-gray-300">{lesson.title}</span>
                                  {lesson.isFree && (
                                    <span className="ml-2 rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                      Free
                                    </span>
                                  )}
                                </div>
                                <span className="text-sm text-gray-500 dark:text-gray-400">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'instructor' && (
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Meet Your Instructor</h2>
                  
                  <div className="mb-6 flex flex-col items-start sm:flex-row sm:items-center">
                    <img 
                      src={course.instructor.avatar} 
                      alt={course.instructor.name} 
                      className="mb-4 h-20 w-20 rounded-full object-cover sm:mb-0 sm:mr-6"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{course.instructor.name}</h3>
                      <p className="text-primary-600 dark:text-primary-400">{course.instructor.title}</p>
                      
                      <div className="mt-2 flex items-center">
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg 
                              key={i}
                              className="h-5 w-5 text-yellow-400"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="ml-2 text-gray-700 dark:text-gray-300">4.9 Instructor Rating</span>
                      </div>
                      
                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <span className="flex items-center">
                          <User size={16} className="mr-1" />
                          31,642 Students
                        </span>
                        <span className="flex items-center">
                          <PlayCircle size={16} className="mr-1" />
                          12 Courses
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="mb-6 text-gray-700 dark:text-gray-300">
                    {course.instructor.bio}
                  </p>
                  
                  <button className="btn-outline">View Full Profile</button>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Student Reviews</h2>
                    <button className="btn-primary">Write a Review</button>
                  </div>
                  
                  <div className="mb-8 flex flex-col items-center justify-between rounded-lg bg-gray-50 p-6 dark:bg-gray-800/50 sm:flex-row">
                    <div className="mb-4 flex flex-col items-center sm:mb-0">
                      <div className="text-5xl font-bold text-gray-900 dark:text-white">{course.rating}</div>
                      <div className="mb-2 flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <svg 
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(course.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {course.ratingCount} ratings
                      </p>
                    </div>
                    
                    <div className="w-full sm:w-2/3">
                      {[5, 4, 3, 2, 1].map(rating => (
                        <div key={rating} className="mb-2 flex items-center">
                          <div className="mr-3 w-8 text-right text-sm text-gray-600 dark:text-gray-400">{rating} stars</div>
                          <div className="mr-3 h-2 flex-1 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                            <div 
                              className="h-full rounded-full bg-yellow-400" 
                              style={{ 
                                width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1}%` 
                              }}
                            />
                          </div>
                          <div className="w-10 text-sm text-gray-600 dark:text-gray-400">
                            {rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1}%
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {course.reviews.map(review => (
                      <div key={review.id} className="border-b border-gray-200 pb-6 dark:border-gray-700">
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <img 
                              src={review.user.avatar} 
                              alt={review.user.name} 
                              className="mr-3 h-10 w-10 rounded-full object-cover"
                            />
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">{review.user.name}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg 
                                key={i}
                                className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                        <div className="mt-4 flex space-x-4">
                          <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                            <svg className="mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                            </svg>
                            Helpful (12)
                          </button>
                          <button className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">Report</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 flex justify-center">
                    <button className="btn-outline">Load More Reviews</button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
          
          {/* Sidebar */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Course Preview */}
            {course.preview && (
              <div className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800">
                <div className="relative aspect-video">
                  <iframe 
                    className="h-full w-full"
                    src={course.preview}
                    title="Course Preview" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}
            
            {/* Course Purchase Card */}
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="mb-4">
                {course.discountPrice ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${course.discountPrice}</span>
                    <span className="text-xl text-gray-500 line-through dark:text-gray-400">${course.price}</span>
                    <span className="rounded-full bg-accent-100 px-2 py-1 text-sm font-medium text-accent-700 dark:bg-accent-900/30 dark:text-accent-400">
                      {Math.round((1 - course.discountPrice / course.price) * 100)}% off
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">${course.price}</span>
                )}
              </div>
              
              <div className="mb-6 space-y-3">
                <button className="btn-primary w-full">
                  <ShoppingCart size={18} className="mr-2" /> Add to Cart
                </button>
                <button className="btn-outline w-full">
                  <CreditCard size={18} className="mr-2" /> Buy Now
                </button>
              </div>
              
              <p className="mb-4 text-center text-sm text-gray-600 dark:text-gray-400">
                30-Day Money-Back Guarantee
              </p>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">This course includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <PlayCircle size={18} className="mr-3 text-primary-600 dark:text-primary-400" />
                    {course.duration} on-demand video
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <Download size={18} className="mr-3 text-primary-600 dark:text-primary-400" />
                    20 downloadable resources
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <Award size={18} className="mr-3 text-primary-600 dark:text-primary-400" />
                    Certificate of completion
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <Clock size={18} className="mr-3 text-primary-600 dark:text-primary-400" />
                    Full lifetime access
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <User size={18} className="mr-3 text-primary-600 dark:text-primary-400" />
                    Access on mobile and TV
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 flex justify-center space-x-4">
                <button className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  <Bookmark size={18} className="mb-1 mr-1 inline" />
                  Wishlist
                </button>
                <button className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Share
                </button>
                <button className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400">
                  Gift
                </button>
              </div>
            </div>
            
            {/* Training 5 or more people? */}
            <div className="rounded-lg bg-secondary-100 p-6 dark:bg-secondary-900/30">
              <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">Training 5 or more people?</h3>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                Get your team access to thousands of top courses anytime, anywhere.
              </p>
              <button className="btn-secondary w-full">
                Get CodeCraft for Business
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;