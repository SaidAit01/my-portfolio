import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, User, Award, Target } from "lucide-react";
import FloatingIcons from "./FloatingIcons";

const Home = () => {
  const scrollToAbout = () => {
    document.getElementById('about-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden">
        <FloatingIcons />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm Said
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-4xl text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ait Ennecer
              </motion.h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-xl md:text-2xl text-amber-400 font-semibold mb-4">
                Software Engineer & AI Enthusiast
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Passionate about building innovative software solutions and exploring the latest in AI. 
                Currently studying Computing & Information Technology at the University of Surrey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center space-x-6 mb-12"
            >
              <motion.a
                href="https://github.com/SaidAit01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-amber-400/10 border border-amber-400/20 rounded-full hover:bg-amber-400/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} className="text-amber-400" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/said-aitennecer/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-amber-400/10 border border-amber-400/20 rounded-full hover:bg-amber-400/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={24} className="text-amber-400" />
              </motion.a>
              <motion.a
                href="mailto:said.aitennecer01@gmail.com"
                className="p-4 bg-amber-400/10 border border-amber-400/20 rounded-full hover:bg-amber-400/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} className="text-amber-400" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.button
                onClick={scrollToAbout}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                <ChevronDown size={32} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div id="about-section" className="min-h-screen relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400">
              Developer, Leader, Innovator
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl border border-amber-400/30 overflow-hidden">
                  {/* Replace with your actual image */}
                  <img 
                    src="/images/said-photo.jpg" 
                    alt="Said Ait Ennecer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to icon if image not found
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                    <User size={120} className="text-amber-400/50" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center">
                  <Award size={24} className="text-slate-900" />
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-slate-800/50 backdrop-blur-lg border border-amber-400/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                  <Target size={24} className="text-amber-400 mr-3" />
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  As a Computing & Information Technology student at the University of Surrey, I've dedicated myself to 
                  mastering both technical skills and leadership qualities. My journey spans from leading student 
                  representatives to competing in prestigious hackathons.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-amber-400 font-semibold">Leadership Excellence</h4>
                      <p className="text-gray-400 text-sm">Head of Course Representatives, managing 30+ representatives for 1,200+ students</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-amber-400 font-semibold">Technical Innovation</h4>
                      <p className="text-gray-400 text-sm">4th place in Microsoft Hackathon with AI-powered e-learning platform</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-amber-400 font-semibold">Community Impact</h4>
                      <p className="text-gray-400 text-sm">Former VP of Computer Science Society, organizing events and fostering student engagement</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-lg border border-amber-400/20 rounded-2xl p-6">
                <h4 className="text-amber-400 font-semibold mb-3">Core Values</h4>
                <div className="flex flex-wrap gap-2">
                  {["Innovation", "Leadership", "Collaboration", "Problem-Solving", "Continuous Learning"].map((value, index) => (
                    <motion.span
                      key={value}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-amber-400/20 text-amber-400 rounded-full text-sm font-medium border border-amber-400/30"
                    >
                      {value}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;