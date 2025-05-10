import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Users, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import CourseCategories from '../components/home/CourseCategories';
import FeaturedCourses from '../components/home/FeaturedCourses';
import TestimonialsSlider from '../components/home/TestimonialsSlider';
import NewsletterSignup from '../components/home/NewsletterSignup';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      {/* Course Categories */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <motion.h2 
              className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Explore Our Course Categories
            </motion.h2>
            <motion.p 
              className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              From beginner to expert, we offer specialized courses across all major 
              programming and IT disciplines.
            </motion.p>
          </div>
          <CourseCategories />
        </div>
      </section>
      
      {/* Featured Courses */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="mb-12 flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0">
            <div>
              <motion.h2 
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Featured Courses
              </motion.h2>
              <motion.p 
                className="mt-2 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Hand-picked courses to kickstart your coding journey
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/courses" className="btn-primary">
                View All Courses <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </div>
          <FeaturedCourses />
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <motion.h2 
              className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Why Choose CodeCraft?
            </motion.h2>
            <motion.p 
              className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We provide a comprehensive learning experience designed to help you succeed in the tech industry.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <motion.div 
              className="card flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 rounded-full bg-primary-100 p-3 dark:bg-primary-900/30">
                <ShieldCheck size={28} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Industry-Relevant</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Curriculum designed with input from industry experts and regularly updated.
              </p>
            </motion.div>
            
            <motion.div 
              className="card flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 rounded-full bg-primary-100 p-3 dark:bg-primary-900/30">
                <Users size={28} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Expert Instructors</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Learn from industry professionals with years of practical experience.
              </p>
            </motion.div>
            
            <motion.div 
              className="card flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 rounded-full bg-primary-100 p-3 dark:bg-primary-900/30">
                <Clock size={28} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Flexible Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Study at your own pace with lifetime access to course materials.
              </p>
            </motion.div>
            
            <motion.div 
              className="card flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4 rounded-full bg-primary-100 p-3 dark:bg-primary-900/30">
                <Award size={28} className="text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">Certification</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Earn industry-recognized certificates to showcase your skills.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-gray-50 py-16 dark:bg-gray-800/50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <motion.h2 
              className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Students Say
            </motion.h2>
            <motion.p 
              className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Hear from students who have transformed their careers with our courses.
            </motion.p>
          </div>
          <TestimonialsSlider />
        </div>
      </section>
      
      {/* Pricing Plans */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <motion.h2 
              className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Flexible Pricing Plans
            </motion.h2>
            <motion.p 
              className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Choose the plan that best suits your learning needs and budget.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div 
              className="card flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Basic</h3>
                <p className="text-gray-600 dark:text-gray-300">Perfect for beginners</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">₹1,499</span>
                <span className="text-gray-600 dark:text-gray-300">/month</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Access to all basic courses</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Community forum access</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic course completion certificate</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span>Instructor Q&A</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span>Advanced projects</span>
                </li>
              </ul>
              <div className="mt-auto">
                <button className="btn-outline w-full">Get Started</button>
              </div>
            </motion.div>
            
            <motion.div 
              className="card flex flex-col border-primary-500 dark:border-primary-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-2">
                <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 dark:bg-primary-900/30 dark:text-primary-300">Popular</span>
              </div>
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Pro</h3>
                <p className="text-gray-600 dark:text-gray-300">For serious learners</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">₹3,999</span>
                <span className="text-gray-600 dark:text-gray-300">/month</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Access to all courses</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Priority community support</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Verified course completion certificate</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Instructor Q&A sessions</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span>1-on-1 mentoring</span>
                </li>
              </ul>
              <div className="mt-auto">
                <button className="btn-primary w-full">Get Started</button>
              </div>
            </motion.div>
            
            <motion.div 
              className="card flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Enterprise</h3>
                <p className="text-gray-600 dark:text-gray-300">For teams & companies</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">₹7,999</span>
                <span className="text-gray-600 dark:text-gray-300">/month</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>All Pro plan features</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Team management dashboard</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Advanced analytics & reporting</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom learning paths</span>
                </li>
                <li className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-success-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>1-on-1 mentoring sessions</span>
                </li>
              </ul>
              <div className="mt-auto">
                <button className="btn-outline w-full">Contact Sales</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="bg-primary-900 py-16 text-white">
        <NewsletterSignup />
      </section>
    </div>
  );
};

export default HomePage;