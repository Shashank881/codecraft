import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, ShoppingCart, User } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  
  // This would be determined by an auth context in a real app
  const isLoggedIn = false;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md dark:bg-gray-900/80">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ duration: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 dark:text-primary-500">
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
              </motion.div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">CodeCraft</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link-active nav-link' : 'nav-link'}>
                Home
              </NavLink>
              <NavLink to="/courses" className={({ isActive }) => isActive ? 'nav-link-active nav-link' : 'nav-link'}>
                Courses
              </NavLink>
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link-active nav-link' : 'nav-link'}>
                Dashboard
              </NavLink>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button 
              className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              aria-label="Cart"
            >
              <ShoppingCart size={20} />
            </button>
            
            {isLoggedIn ? (
              <button 
                className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
                onClick={() => navigate('/dashboard')}
                aria-label="User profile"
              >
                <User size={20} />
              </button>
            ) : (
              <Link to="/login" className="btn-primary">
                Sign In
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `block rounded-md px-3 py-2 text-base font-medium ${
                  isActive 
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white'
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/courses"
              className={({ isActive }) => 
                `block rounded-md px-3 py-2 text-base font-medium ${
                  isActive 
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white'
                }`
              }
              onClick={toggleMenu}
            >
              Courses
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) => 
                `block rounded-md px-3 py-2 text-base font-medium ${
                  isActive 
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white'
                }`
              }
              onClick={toggleMenu}
            >
              Dashboard
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;