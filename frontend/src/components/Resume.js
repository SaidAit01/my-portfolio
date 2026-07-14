import React from "react";
import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center">
      
      {/* Header - Cleaned up and centered */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl flex justify-center md:justify-start items-center mb-8"
      >
        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
          <FileText className="text-amber-400" size={32} />
           <span className="text-amber-400"> My Resume</span>
        </h1>
      </motion.div>

      {/* Embedded PDF Viewer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-5xl h-[80vh] bg-slate-800/50 backdrop-blur-lg border border-amber-400/20 rounded-2xl overflow-hidden shadow-2xl relative"
      >
        {/* Subtle loading text behind the viewer */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-500 -z-10">
          Loading document...
        </div>

        <object 
          data="/Said_Ait_Ennecer_CV.pdf#view=FitH" 
          type="application/pdf"
          className="w-full h-full relative z-10"
        >
          {/* Fallback for strict mobile browsers that block embedded PDFs completely */}
          <div className="flex flex-col items-center justify-center h-full bg-slate-900/90 text-center p-8">
            <p className="text-gray-300 mb-6 max-w-md">
              It looks like your browser doesn't support embedded PDFs. You can securely download my resume below.
            </p>
            <a 
              href="/Said_Ait_Ennecer_CV.pdf" 
              download="Said_Ait_Ennecer_CV.pdf"
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-600 text-slate-900 font-bold rounded-full hover:from-amber-500 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-400/20"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </object>
      </motion.div>

    </div>
  );
};

export default Resume;