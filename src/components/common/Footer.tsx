import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-12 dark:bg-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 dark:text-primary-500">
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
              <span className="text-xl font-bold text-gray-900 dark:text-white">CodeCraft</span>
            </Link>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Empowering careers through expert-led coding courses and IT training.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-500" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-500" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-500" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-500" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Courses</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses?category=frontend" className="text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">
                  Frontend Development
                </Link>
              </li>
              <li>
                <Link to="/courses?category=backend" className="text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">
                  Backend Development
                </Link>
              </li>
              <li>
                <Link to="/courses?category=fullstack" className="text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link to="/courses?category=devops" className="text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">
                  DevOps
                </Link>
              </li>
              <li>
                <Link to="/courses?category=ai-ml" className="text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">
                  AI & Machine Learning
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">
                  Our Instructors
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white">Stay Updated</h3>
            <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
              Subscribe to our newsletter for the latest courses and promotions.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="form-input"
                required
              />
              <button type="submit" className="btn-primary flex items-center justify-center space-x-2">
                <Mail size={16} />
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
          <div className="flex flex-col justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {new Date().getFullYear()} CodeCraft. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;