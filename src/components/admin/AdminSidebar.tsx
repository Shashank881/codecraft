import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Settings, 
  BarChart2, 
  MessageSquare,
  DollarSign,
  HelpCircle,
  LogOut,
  ChevronLeft,
  Menu
} from 'lucide-react';

const AdminSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };
  
  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const sidebarVariants = {
    expanded: { width: '250px' },
    collapsed: { width: '80px' }
  };
  
  const mobileSidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' }
  };
  
  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed left-4 top-4 z-50 rounded-md bg-white p-2 text-gray-500 shadow-md dark:bg-gray-800 dark:text-gray-400 md:hidden"
        onClick={toggleMobileSidebar}
      >
        <Menu size={24} />
      </button>
      
      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}
      
      {/* Mobile Sidebar */}
      <motion.div
        className="fixed inset-y-0 left-0 z-50 w-64 overflow-y-auto bg-white shadow-lg dark:bg-gray-800 md:hidden"
        variants={mobileSidebarVariants}
        initial="closed"
        animate={mobileOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="p-4">
          <div className="mb-8 flex items-center justify-between">
            <Link to="/admin" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 dark:text-primary-500">
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
              <span className="text-xl font-bold text-gray-900 dark:text-white">CodeCraft</span>
            </Link>
            <button
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              onClick={toggleMobileSidebar}
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <SidebarContent />
        </div>
      </motion.div>
      
      {/* Desktop Sidebar */}
      <motion.div
        className="hidden h-full overflow-y-auto bg-white shadow-lg dark:bg-gray-800 md:block"
        variants={sidebarVariants}
        initial="expanded"
        animate={collapsed ? 'collapsed' : 'expanded'}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="p-4">
          <div className="mb-8 flex items-center justify-between">
            <Link to="/admin" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600 dark:text-primary-500">
                <path d="m18 16 4-4-4-4"></path>
                <path d="m6 8-4 4 4 4"></path>
                <path d="m14.5 4-5 16"></path>
              </svg>
              {!collapsed && <span className="text-xl font-bold text-gray-900 dark:text-white">CodeCraft</span>}
            </Link>
            <button
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
              onClick={toggleSidebar}
            >
              <ChevronLeft size={20} className={`transition-transform ${collapsed ? 'rotate-180' : 'rotate-0'}`} />
            </button>
          </div>
          
          <div className={collapsed ? 'items-center' : ''}>
            <SidebarContent collapsed={collapsed} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

interface SidebarContentProps {
  collapsed?: boolean;
}

const SidebarContent: React.FC<SidebarContentProps> = ({ collapsed = false }) => {
  const navItems = [
    { to: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { to: '/admin/courses', icon: <BookOpen size={20} />, label: 'Courses' },
    { to: '/admin/users', icon: <Users size={20} />, label: 'Users' },
    { to: '/admin/analytics', icon: <BarChart2 size={20} />, label: 'Analytics' },
    { to: '/admin/payments', icon: <DollarSign size={20} />, label: 'Payments' },
    { to: '/admin/messages', icon: <MessageSquare size={20} />, label: 'Messages' },
    { to: '/admin/settings', icon: <Settings size={20} />, label: 'Settings' },
  ];
  
  return (
    <div className="flex flex-col justify-between h-[calc(100vh-120px)]">
      <div>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                } ${collapsed ? 'justify-center' : 'space-x-3'}`
              }
              end={item.to === '/admin'}
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
        
        <div className="mt-10">
          <h6 className={`mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 ${collapsed ? 'text-center' : ''}`}>
            {!collapsed && 'Support'}
          </h6>
          <NavLink
            to="/admin/help"
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <HelpCircle size={20} />
            {!collapsed && <span className="ml-3">Help & Support</span>}
          </NavLink>
        </div>
      </div>
      
      <div className="mt-auto">
        <button className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 ${collapsed ? 'justify-center' : 'space-x-3'}`}>
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
};

function Link({ to, className, children }: { to: string; className?: string; children: React.ReactNode }) {
  return <NavLink to={to} className={className}>{children}</NavLink>;
}

export default AdminSidebar;