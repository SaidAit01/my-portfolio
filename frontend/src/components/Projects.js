import React from "react";
import { motion } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  Award,
  Users,
  Calendar,
  Code,
  Database,
  Smartphone,
  Brain,
  Music,
  Shield,
  Trophy
} from "lucide-react";

// 1. IMPORT DATA
// Using "../mock" assumes mock.js is in the 'src' folder
import { projects } from "../data/mock.js";

const Projects = () => {
  
  // 2. ICON MAP (Optional but good for flexibility)
  // If you want specific icons for specific project types
  const getIconForProject = (title) => {
    if (title.includes("Music")) return Music;
    if (title.includes("Privacy")) return Shield;
    if (title.includes("AI")) return Brain;
    if (title.includes("University")) return Database;
    return Code; // Default icon
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Innovative solutions and applications I've built using cutting-edge technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8"
        >
          {/* 3. MAP OVER DATA */}
          {projects.map((project, index) => {
            // Determine Icon dynamically
            const Icon = getIconForProject(project.title);
            
            // Determine Color based on index or type (Optional logic)
            // You can also add a 'color' field to mock.js to make this explicit
            const colorClass = index % 2 === 0 ? "from-blue-400 to-blue-600" : "from-purple-400 to-purple-600";

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-lg border border-amber-400/20 rounded-2xl overflow-hidden hover:border-amber-400/40 transition-all duration-300 group"
              >
                <div className="p-6 border-b border-slate-700/50">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClass} bg-opacity-20`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <div className="flex space-x-2">
                      {/* Check if links exist before rendering */}
                      {project.links && project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-700/50 rounded-lg hover:bg-amber-400/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={18} className="text-gray-400 hover:text-amber-400" />
                        </motion.a>
                      )}
                      {project.links && project.links.demo && (
                        <motion.a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-700/50 rounded-lg hover:bg-amber-400/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                        >
                          <ExternalLink size={18} className="text-gray-400 hover:text-amber-400" />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-amber-400 mb-2">
                     <Code size={16} className="mr-2" />
                    <span className="font-semibold">{project.subtitle}</span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>{project.period}</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-amber-400 font-semibold mb-3 flex items-center">
                      <Award size={18} className="mr-2" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                          className="text-gray-300 flex items-start text-sm"
                        >
                          <span className="text-amber-400 mr-2 mt-1">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-amber-400 font-semibold mb-3 flex items-center">
                      <Code size={18} className="mr-2" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + idx * 0.05 }}
                          className="px-3 py-1 bg-amber-400/20 text-amber-400 rounded-full text-xs font-medium border border-amber-400/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;