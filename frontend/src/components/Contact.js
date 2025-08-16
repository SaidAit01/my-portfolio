import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram,
  MessageCircle,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+44 7440676534",
      link: "https://wa.me/447440676534",
      color: "from-green-400 to-green-600",
      description: "Message me on WhatsApp"
    },
    {
      icon: Mail,
      label: "Email",
      value: "said.aitennecer01@gmail.com",
      link: "mailto:said.aitennecer01@gmail.com",
      color: "from-red-400 to-red-600",
      description: "Send me an email"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "said-aitennecer",
      link: "https://www.linkedin.com/in/said-aitennecer/",
      color: "from-blue-400 to-blue-600",
      description: "Connect with me professionally"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@saiid._.aiit_00",
      link: "https://www.instagram.com/saiid._.aiit_00/",
      color: "from-pink-400 to-purple-600",
      description: "Follow me on Instagram"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Surrey, Guildford, United Kingdom",
      color: "from-amber-400 to-amber-600",
      description: "Where I'm based"
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
        duration: 0.8
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Let's connect and create something amazing!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                {contact.link ? (
                  <motion.a
                    href={contact.link}
                    target={contact.link.startsWith('http') ? "_blank" : "_self"}
                    rel={contact.link.startsWith('http') ? "noopener noreferrer" : ""}
                    className="block bg-slate-800/50 backdrop-blur-lg border border-amber-400/20 rounded-2xl p-6 hover:border-amber-400/40 transition-all duration-300 group-hover:scale-105"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${contact.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                        <Icon size={28} className="text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors">
                            {contact.label}
                          </h3>
                          {contact.link && (
                            <ExternalLink size={16} className="text-gray-400 group-hover:text-amber-400 transition-colors" />
                          )}
                        </div>
                        
                        <p className="text-amber-400 font-medium mb-2">
                          {contact.value}
                        </p>
                        
                        <p className="text-gray-400 text-sm">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ) : (
                  <div className="bg-slate-800/50 backdrop-blur-lg border border-amber-400/20 rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${contact.color} bg-opacity-20`}>
                        <Icon size={28} className="text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {contact.label}
                        </h3>
                        
                        <p className="text-amber-400 font-medium mb-2">
                          {contact.value}
                        </p>
                        
                        <p className="text-gray-400 text-sm">
                          {contact.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-lg border border-amber-400/20 rounded-2xl p-8">
            <MessageCircle size={48} className="text-amber-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Build Something Together
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'm always excited to connect with fellow developers and innovators.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:said.aitennecer01@gmail.com"
                className="px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-semibold rounded-full hover:from-amber-500 hover:to-amber-700 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Email
              </motion.a>
              
              <motion.a
                href="https://wa.me/447440676534"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-slate-700/50 text-white font-semibold rounded-full border border-amber-400/30 hover:bg-amber-400/20 hover:border-amber-400/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                WhatsApp
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;