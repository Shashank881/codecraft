import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Search, SortAsc, SortDesc } from 'lucide-react';
import CourseCard from '../components/courses/CourseCard';
import { coursesData, Course } from '../data/coursesData';

const CoursesPage: React.FC = () => {
  const location = useLocation();
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(coursesData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('popularity');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Get unique categories from coursesData
  const categories = Array.from(new Set(coursesData.map(course => course.category)));
  
  // Get unique levels from coursesData
  const levels = Array.from(new Set(coursesData.map(course => course.level)));
  
  useEffect(() => {
    // Check for category query param
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location.search]);
  
  // Filter and sort courses
  useEffect(() => {
    let result = [...coursesData];
    
    // Apply category filter
    if (selectedCategory) {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    // Apply level filter
    if (selectedLevel) {
      result = result.filter(course => course.level === selectedLevel);
    }
    
    // Apply search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(
        course => 
          course.title.toLowerCase().includes(search) || 
          course.description.toLowerCase().includes(search) ||
          course.tags.some(tag => tag.toLowerCase().includes(search))
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case 'price-high':
        result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
        break;
      default: // popularity
        result.sort((a, b) => b.studentsCount - a.studentsCount);
    }
    
    setFilteredCourses(result);
  }, [selectedCategory, selectedLevel, searchTerm, sortBy]);
  
  return (
    <div className="py-8">
      <div className="container-custom">
        <div className="mb-8">
          <motion.h1 
            className="mb-2 text-3xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore Our Courses
          </motion.h1>
          <motion.p 
            className="text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find the perfect course to advance your skills and career
          </motion.p>
        </div>
        
        <div className="mb-8 flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <div className="relative flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses..."
              className="form-input pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <button 
              className="btn-outline flex items-center"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter size={18} className="mr-2" />
              Filters
            </button>
            
            <select 
              className="form-input"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popularity">Sort by: Popularity</option>
              <option value="rating">Sort by: Highest Rated</option>
              <option value="newest">Sort by: Newest</option>
              <option value="price-low">Sort by: Price (Low to High)</option>
              <option value="price-high">Sort by: Price (High to Low)</option>
            </select>
          </div>
        </div>
        
        {isFilterOpen && (
          <motion.div 
            className="mb-8 rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Category
                </label>
                <select 
                  className="form-input"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Level
                </label>
                <select 
                  className="form-input"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option value="">All Levels</option>
                  {levels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Price
                </label>
                <div className="flex items-center space-x-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-1" />
                    <span className="text-sm">Free</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-1" />
                    <span className="text-sm">Paid</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-1" />
                    <span className="text-sm">Discounted</span>
                  </label>
                </div>
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Rating
                </label>
                <div className="flex items-center space-x-2">
                  {[4, 3, 2, 1].map(rating => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="mr-1" />
                      <span className="text-sm">{rating}+ ⭐</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end space-x-2">
              <button className="btn-outline">Reset</button>
              <button className="btn-primary">Apply Filters</button>
            </div>
          </motion.div>
        )}
        
        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-600 dark:text-gray-300">
            Showing <span className="font-medium">{filteredCourses.length}</span> courses
          </p>
          
          <div className="flex items-center space-x-2">
            <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
              <SortDesc size={20} />
            </button>
            <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
              <SortAsc size={20} />
            </button>
          </div>
        </div>
        
        {filteredCourses.length > 0 ? (
          <motion.div 
            className="course-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </motion.div>
        ) : (
          <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800">
            <p className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300">No courses found</p>
            <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
        
        {filteredCourses.length > 0 && (
          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-1">
              <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-800">
                Previous
              </button>
              {[1, 2, 3, 4, 5].map(page => (
                <button 
                  key={page}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    page === 1 
                      ? 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700' 
                      : 'text-gray-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-800">
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;