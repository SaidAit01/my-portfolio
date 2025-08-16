import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Smartphone, 
  Cloud, 
  Cpu, 
  Terminal,
  Zap,
  Globe,
  Layers,
  GitBranch,
  Settings,
  Workflow
} from "lucide-react";

const FloatingIcons = () => {
  const icons = [
    { Icon: Code, delay: 0, x: "10%", y: "20%" },
    { Icon: Database, delay: 0.5, x: "80%", y: "15%" },
    { Icon: Smartphone, delay: 1, x: "15%", y: "70%" },
    { Icon: Cloud, delay: 1.5, x: "85%", y: "80%" },
    { Icon: Cpu, delay: 2, x: "50%", y: "10%" },
    { Icon: Terminal, delay: 2.5, x: "20%", y: "50%" },
    { Icon: Zap, delay: 3, x: "70%", y: "45%" },
    { Icon: Globe, delay: 0.8, x: "90%", y: "60%" },
    { Icon: Layers, delay: 1.8, x: "5%", y: "90%" },
    { Icon: GitBranch, delay: 2.2, x: "60%", y: "85%" },
    { Icon: Settings, delay: 1.2, x: "40%", y: "25%" },
    { Icon: Workflow, delay: 2.8, x: "75%", y: "25%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0.1, 0.4, 0.2],
            scale: [0, 1.2, 0.8, 1, 0.9],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <motion.div
            animate={{
              y: [0, -20, 20, 0],
              x: [0, 10, -10, 0],
            }}
            transition={{
              duration: 8 + (index % 3) * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            className="text-amber-400/20 hover:text-amber-400/40 transition-colors duration-300"
          >
            <Icon size={24 + (index % 3) * 8} />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingIcons;