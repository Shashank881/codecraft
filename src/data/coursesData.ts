// Mock data for courses
export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  title: string;
  bio: string;
}

export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  isFree: boolean;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: CourseLesson[];
}

export interface CourseReview {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  comment: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  price: number;
  discountPrice?: number;
  rating: number;
  ratingCount: number;
  studentsCount: number;
  duration: string;
  lastUpdated: string;
  description: string;
  instructor: Instructor;
  featured: boolean;
  modules: CourseModule[];
  reviews: CourseReview[];
  tags: string[];
  preview?: string;
}

export const instructors: Instructor[] = [
  {
    id: 'inst-1',
    name: 'Alex Morgan',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    title: 'Senior Frontend Developer',
    bio: 'Alex has 10+ years of experience in frontend development and has worked with companies like Google and Facebook. He specializes in React and modern JavaScript.',
  },
  {
    id: 'inst-2',
    name: 'Sophia Chen',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    title: 'Full Stack Engineer',
    bio: 'Sophia is a full stack developer with expertise in Node.js, Express, and MongoDB. She has built multiple production applications and loves teaching web development.',
  },
  {
    id: 'inst-3',
    name: 'James Wilson',
    avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    title: 'DevOps Specialist',
    bio: 'James is a certified AWS and Azure architect with a background in system administration and DevOps. He helps companies implement CI/CD pipelines and cloud solutions.',
  },
  {
    id: 'inst-4',
    name: 'Emma Davis',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    title: 'Data Scientist',
    bio: 'Emma has a PhD in Computer Science with a focus on machine learning. She has published multiple research papers and worked on AI projects for Fortune 500 companies.',
  },
];

export const coursesData: Course[] = [
  {
    id: 'course-1',
    title: 'Modern React with Hooks and Context API',
    slug: 'modern-react-hooks-context-api',
    category: 'frontend',
    level: 'Intermediate',
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 89.99,
    discountPrice: 49.99,
    rating: 4.8,
    ratingCount: 347,
    studentsCount: 12453,
    duration: '24h 30m',
    lastUpdated: '2023-09-15',
    description: 'Master the latest React features including Hooks, Context API, and more. Build real-world applications with modern React patterns and best practices.',
    instructor: instructors[0],
    featured: true,
    preview: 'https://www.youtube.com/embed/bMknfKXIFA8',
    modules: [
      {
        id: 'module-1',
        title: 'Getting Started with React',
        lessons: [
          { id: 'lesson-1-1', title: 'Introduction to React', duration: '15m', isFree: true },
          { id: 'lesson-1-2', title: 'Setting Up Your Development Environment', duration: '20m', isFree: true },
          { id: 'lesson-1-3', title: 'Your First React Component', duration: '25m', isFree: false },
        ],
      },
      {
        id: 'module-2',
        title: 'React Hooks in Depth',
        lessons: [
          { id: 'lesson-2-1', title: 'Understanding useState', duration: '30m', isFree: false },
          { id: 'lesson-2-2', title: 'useEffect and the Component Lifecycle', duration: '35m', isFree: false },
          { id: 'lesson-2-3', title: 'Custom Hooks', duration: '40m', isFree: false },
        ],
      },
    ],
    reviews: [
      {
        id: 'review-1',
        user: {
          name: 'John Doe',
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        },
        rating: 5,
        date: '2023-08-10',
        comment: 'Excellent course! The content is up-to-date and the instructor explains complex concepts clearly.',
      },
      {
        id: 'review-2',
        user: {
          name: 'Jane Smith',
          avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
        },
        rating: 4,
        date: '2023-07-25',
        comment: 'Great course overall. Some sections could use more practical examples, but still very valuable.',
      },
    ],
    tags: ['React', 'JavaScript', 'Web Development', 'Frontend'],
  },
  {
    id: 'course-2',
    title: 'Node.js API Development with Express',
    slug: 'nodejs-api-express',
    category: 'backend',
    level: 'Intermediate',
    thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 79.99,
    rating: 4.7,
    ratingCount: 218,
    studentsCount: 8745,
    duration: '18h 15m',
    lastUpdated: '2023-10-05',
    description: 'Learn to build scalable RESTful APIs with Node.js and Express. This course covers everything from basic endpoints to authentication, validation, and deployment.',
    instructor: instructors[1],
    featured: true,
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to Node.js and Express',
        lessons: [
          { id: 'lesson-1-1', title: 'What is Node.js?', duration: '15m', isFree: true },
          { id: 'lesson-1-2', title: 'Setting Up Your First Express Server', duration: '25m', isFree: true },
          { id: 'lesson-1-3', title: 'Handling HTTP Requests', duration: '30m', isFree: false },
        ],
      },
      {
        id: 'module-2',
        title: 'Building RESTful APIs',
        lessons: [
          { id: 'lesson-2-1', title: 'RESTful API Design Principles', duration: '35m', isFree: false },
          { id: 'lesson-2-2', title: 'Middleware in Express', duration: '25m', isFree: false },
          { id: 'lesson-2-3', title: 'Error Handling', duration: '20m', isFree: false },
        ],
      },
    ],
    reviews: [
      {
        id: 'review-1',
        user: {
          name: 'Michael Brown',
          avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150',
        },
        rating: 5,
        date: '2023-09-20',
        comment: 'This course helped me build my first professional API. The instructor is knowledgeable and covers all important aspects.',
      },
    ],
    tags: ['Node.js', 'Express', 'API', 'Backend', 'JavaScript'],
  },
  {
    id: 'course-3',
    title: 'AWS DevOps: CI/CD Pipeline Implementation',
    slug: 'aws-devops-cicd',
    category: 'devops',
    level: 'Advanced',
    thumbnail: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 99.99,
    discountPrice: 69.99,
    rating: 4.9,
    ratingCount: 156,
    studentsCount: 5280,
    duration: '20h 45m',
    lastUpdated: '2023-11-10',
    description: 'Master DevOps practices using AWS services. Learn how to implement CI/CD pipelines, infrastructure as code, and automated testing for your applications.',
    instructor: instructors[2],
    featured: true,
    modules: [
      {
        id: 'module-1',
        title: 'DevOps Fundamentals',
        lessons: [
          { id: 'lesson-1-1', title: 'Introduction to DevOps', duration: '20m', isFree: true },
          { id: 'lesson-1-2', title: 'CI/CD Principles', duration: '30m', isFree: false },
          { id: 'lesson-1-3', title: 'AWS Services Overview', duration: '35m', isFree: false },
        ],
      },
      {
        id: 'module-2',
        title: 'Building CI/CD Pipelines',
        lessons: [
          { id: 'lesson-2-1', title: 'AWS CodeBuild and CodeDeploy', duration: '40m', isFree: false },
          { id: 'lesson-2-2', title: 'AWS CodePipeline', duration: '45m', isFree: false },
          { id: 'lesson-2-3', title: 'Infrastructure as Code with CloudFormation', duration: '50m', isFree: false },
        ],
      },
    ],
    reviews: [
      {
        id: 'review-1',
        user: {
          name: 'Sarah Johnson',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        },
        rating: 5,
        date: '2023-10-15',
        comment: 'Excellent advanced course. The hands-on labs and real-world projects really helped me understand DevOps practices.',
      },
    ],
    tags: ['AWS', 'DevOps', 'CI/CD', 'Cloud', 'Infrastructure as Code'],
  },
  {
    id: 'course-4',
    title: 'Machine Learning with Python: from Zero to Hero',
    slug: 'machine-learning-python',
    category: 'ai-ml',
    level: 'Beginner',
    thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 94.99,
    discountPrice: 59.99,
    rating: 4.8,
    ratingCount: 278,
    studentsCount: 9870,
    duration: '30h 20m',
    lastUpdated: '2023-10-20',
    description: 'A comprehensive course on machine learning algorithms, data analysis, and model training using Python and popular ML libraries.',
    instructor: instructors[3],
    featured: true,
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to Machine Learning',
        lessons: [
          { id: 'lesson-1-1', title: 'What is Machine Learning?', duration: '25m', isFree: true },
          { id: 'lesson-1-2', title: 'Python for Data Science', duration: '40m', isFree: true },
          { id: 'lesson-1-3', title: 'Data Preprocessing', duration: '35m', isFree: false },
        ],
      },
      {
        id: 'module-2',
        title: 'Supervised Learning Algorithms',
        lessons: [
          { id: 'lesson-2-1', title: 'Linear Regression', duration: '45m', isFree: false },
          { id: 'lesson-2-2', title: 'Classification Algorithms', duration: '50m', isFree: false },
          { id: 'lesson-2-3', title: 'Evaluation Metrics', duration: '30m', isFree: false },
        ],
      },
    ],
    reviews: [
      {
        id: 'review-1',
        user: {
          name: 'David Wilson',
          avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
        },
        rating: 5,
        date: '2023-09-30',
        comment: 'This course demystified machine learning for me. Great examples and clear explanations of complex topics.',
      },
    ],
    tags: ['Machine Learning', 'Python', 'Data Science', 'AI', 'Data Analysis'],
  },
  {
    id: 'course-5',
    title: 'Flutter Mobile App Development',
    slug: 'flutter-mobile-app',
    category: 'mobile',
    level: 'Intermediate',
    thumbnail: 'https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 84.99,
    rating: 4.7,
    ratingCount: 189,
    studentsCount: 7320,
    duration: '22h 15m',
    lastUpdated: '2023-11-05',
    description: 'Learn to build beautiful cross-platform mobile applications with Flutter and Dart. Create apps for both iOS and Android from a single codebase.',
    instructor: instructors[0],
    featured: false,
    modules: [
      {
        id: 'module-1',
        title: 'Flutter Fundamentals',
        lessons: [
          { id: 'lesson-1-1', title: 'Introduction to Flutter', duration: '20m', isFree: true },
          { id: 'lesson-1-2', title: 'Dart Programming Language', duration: '35m', isFree: true },
          { id: 'lesson-1-3', title: 'Building Your First Flutter App', duration: '45m', isFree: false },
        ],
      },
      {
        id: 'module-2',
        title: 'Flutter UI Development',
        lessons: [
          { id: 'lesson-2-1', title: 'Widgets and Layout', duration: '40m', isFree: false },
          { id: 'lesson-2-2', title: 'Building Custom UI Components', duration: '50m', isFree: false },
          { id: 'lesson-2-3', title: 'Navigation and Routing', duration: '35m', isFree: false },
        ],
      },
    ],
    reviews: [
      {
        id: 'review-1',
        user: {
          name: 'Emily Chen',
          avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        },
        rating: 4,
        date: '2023-10-25',
        comment: 'Great course for getting started with Flutter. I was able to publish my first app after completing it.',
      },
    ],
    tags: ['Flutter', 'Dart', 'Mobile Development', 'iOS', 'Android'],
  },
  {
    id: 'course-6',
    title: 'PostgreSQL Database Administration',
    slug: 'postgresql-database-admin',
    category: 'database',
    level: 'Advanced',
    thumbnail: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600',
    price: 89.99,
    rating: 4.8,
    ratingCount: 132,
    studentsCount: 4890,
    duration: '19h 30m',
    lastUpdated: '2023-10-15',
    description: 'Master PostgreSQL database administration, including installation, configuration, performance tuning, security, backup and recovery.',
    instructor: instructors[1],
    featured: false,
    modules: [
      {
        id: 'module-1',
        title: 'PostgreSQL Fundamentals',
        lessons: [
          { id: 'lesson-1-1', title: 'Introduction to PostgreSQL', duration: '25m', isFree: true },
          { id: 'lesson-1-2', title: 'Installation and Configuration', duration: '40m', isFree: true },
          { id: 'lesson-1-3', title: 'PostgreSQL Architecture', duration: '35m', isFree: false },
        ],
      },
      {
        id: 'module-2',
        title: 'Advanced Database Administration',
        lessons: [
          { id: 'lesson-2-1', title: 'Performance Tuning', duration: '45m', isFree: false },
          { id: 'lesson-2-2', title: 'Backup and Recovery Strategies', duration: '50m', isFree: false },
          { id: 'lesson-2-3', title: 'Security and Access Control', duration: '40m', isFree: false },
        ],
      },
    ],
    reviews: [
      {
        id: 'review-1',
        user: {
          name: 'Robert Johnson',
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
        },
        rating: 5,
        date: '2023-09-05',
        comment: 'Comprehensive course that covers all aspects of PostgreSQL administration. Highly recommended for DBAs.',
      },
    ],
    tags: ['PostgreSQL', 'Database', 'SQL', 'Database Administration'],
  },
];