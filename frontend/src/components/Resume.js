import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center">
      
      {/* Header and Download Button */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl flex justify-between items-center mb-8"
      >
        <h1 className="text-3xl font-bold text-white">My <span className="text-amber-400">Resume</span></h1>
        
        {/* We keep the download button for mobile users or offline saving! */}
        <a 
          href="/Said_Ait_Ennecer_CV.pdf" 
          download="Said_Ait_Ennecer_CV.pdf"
          className="flex items-center gap-2 px-6 py-3 bg-amber-400 text-slate-900 font-semibold rounded-full hover:bg-amber-500 transition-colors"
        >
          <Download size={18} />
          Download PDF
        </a>
      </motion.div>

{/* Embedded PDF Viewer */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-5xl h-[80vh] bg-slate-800/50 backdrop-blur-lg border border-amber-400/20 rounded-2xl overflow-hidden shadow-2xl"
      >
        <object 
          data="/Said_Ait_Ennecer_CV.pdf#view=FitH" 
          type="application/pdf"
          className="w-full h-full"
        >
          {/* Fallback for browsers that block embedded PDFs */}
          <div className="flex flex-col items-center justify-center h-full text-center p-8">
            <p className="text-gray-300 mb-4">
              It looks like your browser doesn't support embedded PDFs.
            </p>
            <a 
              href="/Said_Ait_Ennecer_CV.pdf" 
              download="Said_Ait_Ennecer_CV.pdf"
              className="px-6 py-2 bg-amber-400 text-slate-900 font-semibold rounded-full hover:bg-amber-500 transition-colors"
            >
              Download PDF Instead
            </a>
          </div>
        </object>
      </motion.div>

    </div>
  );
};

export default Resume;