import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Code, Briefcase, FolderOpen, Mail, Menu, X, GraduationCap} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Skills", path: "/skills", icon: Code },
    { name: "Education", path: "/education", icon: GraduationCap },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "Projects", path: "/projects", icon: FolderOpen },
    { name: "Contact", path: "/contact", icon: Mail },
    { name: "Resume", path: "/resume", icon: Briefcase },
  ];

  return (
    // UPDATED: Full width flex container for perfect horizontal centering
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-0 right-0 z-50 w-full flex justify-center px-4"
    >
      <div className="relative">
        {/* Main Navbar Bar */}
        <div className="bg-slate-900/80 backdrop-blur-lg border border-amber-400/20 rounded-full px-8 py-4 shadow-xl">
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-amber-400/20 text-amber-400"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-400/10"
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex justify-center w-full min-w-[200px]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-amber-400 hover:text-white transition-colors flex items-center justify-center w-full"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 mt-4 bg-slate-900/95 backdrop-blur-xl border border-amber-400/20 rounded-2xl p-4 shadow-2xl w-full"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-amber-400/20 text-amber-400"
                      : "text-gray-300 hover:text-amber-400 hover:bg-amber-400/10"
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;