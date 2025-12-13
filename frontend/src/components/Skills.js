import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Database, 
  Globe, 
  Terminal,
  FileCode,
  Server,
  Layers,
  GitBranch,
  Settings,
  Monitor,
  Cpu,
  Zap,
  Brain 
} from "lucide-react";

// Make sure this path matches where you saved your mock.js file!
import { skills as skillsData } from "../data/mock.js"; 

const Skills = () => {
  

  const skillCategories = Object.entries(skillsData).map(([categoryName, skillsList]) => {
    let Icon = Code2;
    
    if (categoryName.includes("Web")) Icon = Globe;
    if (categoryName.includes("DevOps") || categoryName.includes("Database")) Icon = Server;
    if (categoryName.includes("AI") || categoryName.includes("Data")) Icon = Brain;
    if (categoryName.includes("Tools")) Icon = Terminal;

    return {
      title: categoryName,
      icon: Icon,
      skills: skillsList
    };
  });

  return (
    // UPDATED CONTAINER CLASSES:
    // 1. "flex flex-col justify-center": Centers everything vertically
    // 2. "pt-32": Adds extra space at the top so it doesn't hit the navbar
    <div className="min-h-screen flex flex-col justify-center pt-32 pb-20 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Technologies & <span className="text-amber-400">Tools</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A curated list of the languages, frameworks, and tools I use to build scalable applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-center"> 
          {/* Note: I changed grid-cols-2 to balance the 4 categories nicely */}
          
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-amber-400/30 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6 border-b border-slate-800 pb-4 group-hover:border-amber-400/20 transition-colors">
                  <div className="p-3 bg-slate-800 rounded-lg mr-4 text-amber-400 group-hover:bg-amber-400 group-hover:text-slate-900 transition-all duration-300">
                    <CategoryIcon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Chips Container */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative group/chip"
                    >
                      <div className="
                        flex items-center gap-2 px-4 py-2.5 
                        bg-slate-800/50 border border-slate-700/50 rounded-lg
                        hover:bg-amber-400/10 hover:border-amber-400/50 
                        transition-all duration-300 cursor-default
                      ">
                        <span className="text-lg filter drop-shadow-lg group-hover/chip:scale-110 transition-transform">
                          {skill.icon}
                        </span>
                        <span className="text-slate-300 font-medium text-sm group-hover/chip:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-0">
        {[Terminal, FileCode, Server, Layers, GitBranch, Settings, Monitor, Zap].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-amber-500/5"
            initial={{ 
              x: Math.random() * 1000, // Safe randomness
              y: Math.random() * 1000 
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            <Icon size={100 + Math.random() * 100} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;