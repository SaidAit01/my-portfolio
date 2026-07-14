import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Briefcase, 
  Code, 
  Database, 
  Brain, 
  Shield, 
  Server,
  LineChart
} from "lucide-react";

const Education = () => {
  const technicalModules = [
    {
      title: "Internet Scale Systems",
      icon: Server,
      tech: ["C#", ".NET", "Next.js", "FastAPI", "Docker"],
      description: "Collaborated in a team to build a microservice-based stock social web app, mastering containerization and distributed system architecture."
    },
    {
      title: "Software Engineering Project",
      icon: Code,
      tech: ["Next.js", "Docker", "Prisma", "Agile"],
      description: "Worked in an Agile team to build a fully functional, intelligent system for privacy policy analysis."
    },
    {
      title: "Artificial Intelligence",
      icon: Brain,
      tech: ["Python", "scikit-learn", "pandas", "NLP", "CNN", "LLM"],
      description: "Applied machine learning branches (NLP, CNNs, LLMs) through practical Google Colab labs and data manipulation."
    },
    {
      title: "Business Analytics & Data Visualisation",
      icon: LineChart,
      tech: ["Machine Learning", "CRISP-DM", "Data Viz"],
      description: "Engineered a business analytics solution transforming raw data into actionable executive insights using the CRISP-DM framework."
    },
    {
      title: "Information Security Management",
      icon: Shield,
      tech: ["STRIDE", "NIST", "ALE/CBA Risk Assessment"],
      description: "Mastered strategic risk governance, threat modelling, and Business Continuity Planning to ensure organizational resilience."
    },
    {
      title: "Computational Intelligence",
      icon: Brain,
      tech: ["Python", "Evolutionary Algorithms", "Neural Networks"],
      description: "Implemented Swarm Intelligence and Deep Learning algorithms to solve complex engineering and optimization problems."
    },
    {
      title: "Web and Database",
      icon: Database,
      tech: ["JavaScript", "HTML/CSS", "SQL", "Git"],
      description: "Developed a university society management system, demonstrating strong database schema design and full-stack integration."
    },
    {
      title: "Programming Fundamentals & Paradigms",
      icon: Code,
      tech: ["Java", "C++", "Haskell", "Prolog"],
      description: "Mastered Object-Oriented, Functional, and Logical programming paradigms. Built a comprehensive housing management system."
    }
  ];

  const businessModules = [
    {
      title: "Project Management",
      description: "Applied core methodologies using MS Project to develop full project plans, managing scope, risk, and stakeholders."
    },
    {
      title: "Finance & Accounting",
      description: "Learned core finance principles and gained practical skills in interpreting and analyzing financial statements."
    },
    {
      title: "Marketing",
      description: "Conducted deep-dive research to optimize and propose new marketing strategies for Spotify."
    },
    {
      title: "Business Law",
      description: "Analyzed complex business cases to deeply understand customer rights and employer legal duties."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-amber-400/20 rounded-full border border-amber-400/30">
              <GraduationCap size={48} className="text-amber-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
            University of Surrey
          </h1>
          <h2 className="text-2xl text-white font-semibold mb-4">
            BSc Computing & Information Technology
          </h2>
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 font-bold tracking-wide">
            <Award size={20} />
            First Class Honours (1st)
          </div>
        </motion.div>

        {/* Technical Modules Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
            <Code className="text-amber-400" /> 
            Core Technical Modules
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalModules.map((mod, index) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 hover:border-amber-400/40 rounded-2xl p-6 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-slate-900 rounded-lg text-amber-400">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{mod.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {mod.tech.map((t, i) => (
                          <span key={i} className="px-2 py-1 bg-amber-400/10 text-amber-400 text-xs rounded border border-amber-400/20">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {mod.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Business Modules Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3 border-b border-slate-800 pb-4">
            <Briefcase className="text-amber-400" /> 
            Business & Management Modules
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessModules.map((mod, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/30 backdrop-blur-lg border border-slate-700/50 hover:border-amber-400/30 rounded-2xl p-6 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <BookOpen size={18} className="text-amber-400" />
                  {mod.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {mod.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Education;