import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, DollarSign, TrendingUp, ChevronUp, ChevronDown, BarChart2 } from 'lucide-react';

const AdminDashboardPage: React.FC = () => {
  return (
    <div>
      <motion.div 
        className="mb-6 flex flex-col justify-between space-y-4 sm:flex-row sm:items-center sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Welcome back, Admin User</p>
        </div>
        <div className="flex space-x-3">
          <select className="form-input">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
          <button className="btn-primary">
            <BarChart2 size={16} className="mr-2" />
            Reports
          </button>
        </div>
      </motion.div>
      
      {/* Stats Cards */}
      <motion.div 
        className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Students</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">12,486</h3>
            </div>
            <div className="rounded-full bg-primary-100 p-3 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
              <Users size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center font-medium text-success-600 dark:text-success-400">
              <ChevronUp size={16} className="mr-1" />
              12.5%
            </div>
            <span className="ml-2 text-gray-500 dark:text-gray-400">Since last month</span>
          </div>
        </div>
        
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Courses</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">142</h3>
            </div>
            <div className="rounded-full bg-secondary-100 p-3 text-secondary-600 dark:bg-secondary-900/30 dark:text-secondary-400">
              <BookOpen size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center font-medium text-success-600 dark:text-success-400">
              <ChevronUp size={16} className="mr-1" />
              8.2%
            </div>
            <span className="ml-2 text-gray-500 dark:text-gray-400">Since last month</span>
          </div>
        </div>
        
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Revenue</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">$87,342</h3>
            </div>
            <div className="rounded-full bg-accent-100 p-3 text-accent-600 dark:bg-accent-900/30 dark:text-accent-400">
              <DollarSign size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center font-medium text-error-600 dark:text-error-400">
              <ChevronDown size={16} className="mr-1" />
              3.4%
            </div>
            <span className="ml-2 text-gray-500 dark:text-gray-400">Since last month</span>
          </div>
        </div>
        
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Conversion Rate</p>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">5.6%</h3>
            </div>
            <div className="rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <TrendingUp size={24} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <div className="flex items-center font-medium text-success-600 dark:text-success-400">
              <ChevronUp size={16} className="mr-1" />
              1.2%
            </div>
            <span className="ml-2 text-gray-500 dark:text-gray-400">Since last month</span>
          </div>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Recent Enrollments */}
        <motion.div 
          className="col-span-2 rounded-lg bg-white shadow-sm dark:bg-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="border-b border-gray-200 p-6 dark:border-gray-700">
            <h2 className="font-semibold text-gray-900 dark:text-white">Recent Enrollments</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="border-b border-gray-200 text-left text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
                    <th className="pb-3 pr-6">Student</th>
                    <th className="pb-3 pr-6">Course</th>
                    <th className="pb-3 pr-6">Date</th>
                    <th className="pb-3 pr-6">Amount</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    { 
                      name: 'John Doe', 
                      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
                      course: 'Modern React with Hooks',
                      date: 'Apr 23, 2023',
                      amount: '$49.99',
                      status: 'Completed'
                    },
                    { 
                      name: 'Sarah Johnson', 
                      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
                      course: 'Node.js API Development',
                      date: 'Apr 22, 2023',
                      amount: '$69.99',
                      status: 'Completed'
                    },
                    { 
                      name: 'Michael Chen', 
                      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
                      course: 'AWS DevOps: CI/CD Pipeline',
                      date: 'Apr 21, 2023',
                      amount: '$89.99',
                      status: 'Pending'
                    },
                    { 
                      name: 'Emily Wilson', 
                      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
                      course: 'Machine Learning with Python',
                      date: 'Apr 20, 2023',
                      amount: '$59.99',
                      status: 'Failed'
                    },
                    { 
                      name: 'Robert Brown', 
                      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
                      course: 'Flutter Mobile App Development',
                      date: 'Apr 19, 2023',
                      amount: '$74.99',
                      status: 'Completed'
                    },
                  ].map((enrollment, index) => (
                    <tr key={index} className="text-sm">
                      <td className="py-4 pr-6">
                        <div className="flex items-center">
                          <img 
                            src={enrollment.avatar} 
                            alt={enrollment.name} 
                            className="mr-3 h-8 w-8 rounded-full object-cover"
                          />
                          <span className="font-medium text-gray-900 dark:text-white">{enrollment.name}</span>
                        </div>
                      </td>
                      <td className="py-4 pr-6 text-gray-700 dark:text-gray-300">{enrollment.course}</td>
                      <td className="py-4 pr-6 text-gray-700 dark:text-gray-300">{enrollment.date}</td>
                      <td className="py-4 pr-6 font-medium text-gray-900 dark:text-white">{enrollment.amount}</td>
                      <td className="py-4">
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          enrollment.status === 'Completed' 
                            ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400' 
                            : enrollment.status === 'Pending'
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-error-100 text-error-700 dark:bg-error-900/30 dark:text-error-400'
                        }`}>
                          {enrollment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex justify-center">
              <button className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                View All Enrollments
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Best Selling Courses */}
        <motion.div 
          className="col-span-1 rounded-lg bg-white shadow-sm dark:bg-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="border-b border-gray-200 p-6 dark:border-gray-700">
            <h2 className="font-semibold text-gray-900 dark:text-white">Best Selling Courses</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {[
                { 
                  title: 'Modern React with Hooks and Context API',
                  sales: 1234,
                  revenue: '$61,700',
                  increase: 12.5,
                  color: 'bg-blue-500'
                },
                { 
                  title: 'Node.js API Development with Express',
                  sales: 958,
                  revenue: '$47,900',
                  increase: 8.3,
                  color: 'bg-green-500'
                },
                { 
                  title: 'AWS DevOps: CI/CD Pipeline Implementation',
                  sales: 842,
                  revenue: '$42,100',
                  increase: 5.7,
                  color: 'bg-purple-500'
                },
                { 
                  title: 'Machine Learning with Python: from Zero to Hero',
                  sales: 756,
                  revenue: '$37,800',
                  increase: 9.2,
                  color: 'bg-yellow-500'
                },
                { 
                  title: 'Flutter Mobile App Development',
                  sales: 689,
                  revenue: '$34,450',
                  increase: 7.8,
                  color: 'bg-pink-500'
                },
              ].map((course, index) => (
                <div key={index} className="flex items-center">
                  <div className={`mr-4 h-12 w-1 rounded-full ${course.color}`}></div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-medium text-gray-900 dark:text-white">{course.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-4">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{course.sales} sales</span>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">{course.revenue}</span>
                      </div>
                      <div className="flex items-center text-sm font-medium text-success-600 dark:text-success-400">
                        <ChevronUp size={14} className="mr-1" />
                        {course.increase}%
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-center">
              <button className="text-sm font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
                View All Courses
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;