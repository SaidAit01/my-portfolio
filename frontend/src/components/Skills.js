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
  Monitor
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "JavaScript", level: 85, icon: "⚡" },
        { name: "Java", level: 80, icon: "☕" },
        { name: "C++", level: 75, icon: "⚙️" },
        { name: "MATLAB", level: 70, icon: "📊" },
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "React", level: 85, icon: "⚛️" },
        { name: "HTML5", level: 90, icon: "🌐" },
        { name: "Django", level: 80, icon: "🎯" },
        { name: "Bootstrap", level: 75, icon: "🎨" },
        { name: "REST APIs", level: 85, icon: "🔗" },
      ]
    },
    {
      title: "Database & Tools",
      icon: Database,
      skills: [
        { name: "MySQL", level: 80, icon: "🗄️" },
        { name: "Git", level: 85, icon: "📱" },
        { name: "Microsoft Office 365", level: 90, icon: "📄" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
            Technical Skills
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-lg border border-amber-400/20 rounded-2xl p-8 hover:border-amber-400/40 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-amber-400/20 rounded-lg mr-4">
                    <CategoryIcon size={24} className="text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="text-lg mr-2">{skill.icon}</span>
                          <span className="text-gray-300 font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-amber-400 text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ 
                            duration: 1, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating Tech Icons Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[Terminal, FileCode, Server, Layers, GitBranch, Settings, Monitor].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute text-amber-400/10"
              style={{
                left: `${15 + (index * 12)}%`,
                top: `${20 + (index % 3) * 25}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 10 + index,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Icon size={32 + index * 4} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;