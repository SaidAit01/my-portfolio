import React from "react";
import { motion } from "framer-motion";
import QRCode from "react-qr-code";
import { User, Briefcase, Mail } from "lucide-react";

const DigitalCard = () => {
    // Replace this with your actual Vercel URL
    const portfolioUrl = "https://said-portfolio-2026.vercel.app/.vercel.app";

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-900/80 backdrop-blur-xl border border-amber-400/30 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl shadow-amber-400/10"
            >
                <div className="w-24 h-24 bg-slate-800 rounded-full mx-auto mb-6 flex items-center justify-center border-2 border-amber-400">
                    <User size={40} className="text-amber-400" />
                </div>

                <h1 className="text-2xl font-bold text-white mb-1">Said Ait-Ennecer</h1>
                <p className="text-amber-400 font-medium mb-6 flex items-center justify-center gap-2">
                    <Briefcase size={16} />
                    Full-Stack AI Engineer
                </p>

                {/* The QR Code */}
                <div className="bg-white p-4 rounded-2xl inline-block mb-6">
                    <QRCode
                        value={portfolioUrl}
                        size={200}
                        bgColor="#ffffff"
                        fgColor="#020617" // slate-950
                    />
                </div>

                <p className="text-gray-400 text-sm mb-4">
                    Scan to view my portfolio, projects, and CV.
                </p>

                <a
                    href="mailto:your.email@example.com"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-amber-400/10 hover:bg-amber-400/20 text-amber-400 rounded-xl transition-colors border border-amber-400/30 font-semibold"
                >
                    <Mail size={18} />
                    Get in touch
                </a>
            </motion.div>
        </div>
    );
};

export default DigitalCard;