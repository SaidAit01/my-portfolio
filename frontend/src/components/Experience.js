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

import { experiences } from "../data/mock"; 

const Experience = () => {
  
  // Icon fallback (used if no image is provided)
  const iconMap = {
    leadership: Crown,
    internship: Award,
    hackathon: Users,
    work: Briefcase,
    default: Briefcase
  };

  const getColor = (type) => {
    switch(type) {
      case 'leadership': return "from-amber-400 to-amber-600";
      case 'internship': return "from-blue-400 to-blue-600";
      default: return "from-purple-400 to-purple-600";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
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
          {(experiences || []).map((exp, index) => {
            // Logic: Determine Icon just in case the image fails or isn't there
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
                    
                    {/* --- IMAGE / ICON SECTION --- */}
                    <div className="flex items-start gap-4 lg:min-w-0 lg:flex-1">
                      <div className={`
                        relative w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden shrink-0
                        ${!exp.logo ? `bg-gradient-to-r ${colorClass} bg-opacity-20` : 'bg-white/5'}
                      `}>
                        {/* CONDITIONAL RENDERING: Check if logo exists */}
                        {exp.logo ? (
                          <img 
                            src={exp.logo} 
                            alt={`${exp.organization} logo`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          // Fallback to Icon if no logo
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${colorClass} bg-opacity-20`}>
                            <Icon size={32} className="text-white" />
                          </div>
                        )}
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
                      
                      <div>
                        <h4 className="text-amber-400 font-semibold mb-3 flex items-center">
                          <Award size={18} className="mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
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

                      {exp.skills && (
                        <div>
                          <h4 className="text-amber-400 font-semibold mb-3 flex items-center">
                            <Users size={18} className="mr-2" />
                            Skills Developed
                          </h4>
                          <div className="flex flex-wrap gap-2">
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
