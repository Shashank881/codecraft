import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Server, 
  Cloud, 
  GitBranch, 
  Smartphone, 
  Cpu, 
  LineChart 
} from 'lucide-react';

const categories = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: <Code size={24} />,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    description: 'Learn to build beautiful user interfaces with HTML, CSS, JavaScript and modern frameworks.'
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: <Server size={24} />,
    color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    description: 'Build robust server-side applications and APIs with Node.js, Python, Java and more.'
  },
  {
    id: 'database',
    title: 'Database & SQL',
    icon: <Database size={24} />,
    color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400',
    description: 'Master database design, SQL, and NoSQL technologies to store and manage data efficiently.'
  },
  {
    id: 'devops',
    title: 'DevOps & CI/CD',
    icon: <GitBranch size={24} />,
    color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
    description: 'Learn automation, containerization, and deployment strategies for modern applications.'
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    icon: <Cloud size={24} />,
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    description: 'Deploy and scale applications on AWS, Azure, Google Cloud and other cloud platforms.'
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    icon: <Smartphone size={24} />,
    color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
    description: 'Build native and cross-platform mobile applications for iOS and Android.'
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: <Cpu size={24} />,
    color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
    description: 'Dive into artificial intelligence, machine learning, and deep learning techniques.'
  },
  {
    id: 'data-science',
    title: 'Data Science & Analytics',
    icon: <LineChart size={24} />,
    color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
    description: 'Extract insights from data using statistical analysis, visualization, and modeling.'
  }
];

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

const CourseCategories: React.FC = () => {
  return (
    <motion.div 
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {categories.map((category) => (
        <motion.div 
          key={category.id} 
          className="card hover:border-primary-300 dark:hover:border-primary-700"
          variants={item}
          whileHover={{ y: -5 }}
        >
          <Link to={`/courses?category=${category.id}`} className="flex h-full flex-col">
            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${category.color}`}>
              {category.icon}
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{category.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CourseCategories;