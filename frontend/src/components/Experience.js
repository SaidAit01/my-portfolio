import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Award, 
  Calendar,
  Crown,
  Briefcase,
  GraduationCap
} from "lucide-react";

// IMPORT DATA
// Note: This assumes mock.js is in the 'src' folder (one level up)
import { experiences } from "../data/mock.js";

const Experience = () => {
  
  // 1. ICON MAP
  // Translates the "type" string from your data into an actual Icon Component
  const iconMap = {
    leadership: Crown,
    internship: Award,
    hackathon: Users,
    default: Briefcase
  };

  // 2. COLOR HELPER
  // Assigns colors based on the role type since colors aren't in mock.js
  const getColor = (type) => {
    switch(type) {
      case 'leadership': return "from-amber-400 to-amber-600";
      case 'internship': return "from-blue-400 to-blue-600";
      default: return "from-purple-400 to-purple-600";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
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
            Experience
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Leadership roles and professional experiences that shaped my journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* SAFETY GUARD 1: Add (experiences || []) to prevent crash if data is undefined */}
          {(experiences || []).map((exp, index) => {
            // Determine Icon: If type is missing, use default
            const Icon = iconMap[exp.type] || iconMap.default;
            const colorClass = getColor(exp.type);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-slate-800/50 backdrop-blur-lg border border-amber-400/20 rounded-2xl p-8 hover:border-amber-400/40 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    
                    {/* Left Side: Icon, Title, Date */}
                    <div className="flex items-start gap-4 lg:min-w-0 lg:flex-1">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${colorClass} bg-opacity-20`}>
                        <Icon size={32} className="text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-amber-400 mb-2">
                          <Briefcase size={16} className="mr-2" />
                          <span className="font-semibold">{exp.organization}</span>
                        </div>
                        <div className="flex items-center text-gray-400 mb-4">
                          <Calendar size={16} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* Right Side: Achievements & Skills */}
                    <div className="lg:flex-1 space-y-6">
                      
                      {/* Key Achievements */}
                      <div>
                        <h4 className="text-amber-400 font-semibold mb-3 flex items-center">
                          <Award size={18} className="mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {/* SAFETY GUARD 2: Check if achievements exists */}
                          {(exp.achievements || []).map((highlight, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.3 + idx * 0.1 }}
                              className="text-gray-300 flex items-start"
                            >
                              <span className="text-amber-400 mr-2 mt-2">•</span>
                              <span>{highlight}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills (Render only if they exist) */}
                      {exp.skills && (
                        <div>
                          <h4 className="text-amber-400 font-semibold mb-3 flex items-center">
                            <Users size={18} className="mr-2" />
                            Skills Developed
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {/* SAFETY GUARD 3: Check if skills array is valid */}
                            {(exp.skills || []).map((skill, idx) => (
                              <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.3 + idx * 0.1 }}
                                className="px-3 py-1 bg-amber-400/20 text-amber-400 rounded-full text-sm font-medium border border-amber-400/30"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Connecting Line (except for last item) */}
                {index < (experiences || []).length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-8 bg-gradient-to-b from-amber-400/50 to-transparent z-10" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;












