// Mock data for Said Ait Ennecer's Portfolio
// This file contains static data that would typically come from a backend/CMS

export const personalInfo = {
  name: "Said Ait Ennecer",
  title: "Software Engineer & AI Enthusiast",
  description: "Passionate about building innovative software solutions and exploring the latest in AI. Currently studying Computing & Information Technology at the University of Surrey.",
  location: "Surrey, Guildford, United Kingdom",
  email: "said.aitennecer01@gmail.com",
  phone: "+44 7440676534",
  social: {
    github: "https://github.com/SaidAit01",
    linkedin: "https://www.linkedin.com/in/said-aitennecer/",
    instagram: "https://www.instagram.com/saiid._.aiit_00/",
    whatsapp: "https://wa.me/447440676534"
  }
};

export const skills = {
  "Programming Languages": [
    { name: "Python", level: 95, icon: "🐍" }, // Increased confidence based on AI projects
    { name: "JavaScript", level: 85, icon: "⚡" },
    { name: "TypeScript", level: 80, icon: "📘" }, // Added from StockTok
    { name: "Java", level: 80, icon: "☕" },
    { name: "C++", level: 75, icon: "⚙️" }
  ],
  "AI & Data Science": [ // NEW CATEGORY
    { name: "PyTorch", icon: "🔥" }, // From LoRA project
    { name: "Hugging Face", icon: "🤗" }, // From LoRA/NLP
    { name: "Pandas & NumPy", icon: "🐼" }, // From StockTok/Research
    { name: "Scikit-learn", icon: "🧠" }, // From ISAS
    { name: "Generative AI APIs", icon: "✨" }, // Gemini/OpenAI
    { name: "AI Agents", icon: "🤖" },
    { name: "n8n", icon: "💻" }
  ],
  "Web Technologies": [
    { name: "React & Next.js", level: 90, icon: "⚛️" }, // Combined & Updated
    { name: "FastAPI", level: 85, icon: "🚀" }, // From StockTok
    { name: "Django (DRF)", level: 85, icon: "🎯" }, // From ISAS
    { name: "Tailwind CSS", level: 90, icon: "🎨" }, // From DataVizor
    { name: "Microservices", level: 80, icon: "🏗️" } // Architecture skill
  ],
  "DevOps & Tools": [ // RENAMED from "Database & Tools"
    { name: "Docker", icon: "🐳" }, // From DataVizor
    { name: "PostgreSQL", icon: "🐘" }, // Better than MySQL
    { name: "Git & GitHub", icon: "🐙" },
    { name: "Azure / Cloud", icon: "☁️" } // From Hackathon
  ]
};

export const experiences = [
  {
    title: "Academic Lab Assistant (Computer Networking)",
    organization: "University of Surrey",
    period: "Jan 2026 - May 2026",
    type: "work",
    logo: "/images/university-of-surrey-logo.jpeg",
    description: "Facilitating practical laboratory sessions and providing hands-on technical guidance for second-year undergraduates in Computer Networking.",
    achievements: [
      "Facilitated practical laboratory sessions for second-year undergraduates in the COM2022 module, providing hands-on technical guidance regarding network architectures, protocols, and infrastructure configurations.",
      "Troubleshot and debugged complex student network implementations in real-time, demonstrating the ability to rapidly diagnose technical issues and articulate clear, actionable solutions."
    ],
    skills: ["Computer Networking", "Troubleshooting", "Technical Communication", "Infrastructure Configuration", "Mentoring"]
  },
  {
    title: "Campus Brand Ambassador",
    organization: "BDO UK (Guildford, UK)",
    period: "Jan 2026 - May 2026",
    type: "leadership",
    logo: "/images/bdo-logo.png",
    description: "Executing a strategic on-campus marketing campaign to increase graduate applications for a top-tier accountancy and business advisory firm.",
    achievements: [
      "Selected to represent BDO, executing a strategic on-campus marketing campaign to increase graduate applications.",
      "Leveraged my position as Vice President of the CS Society to specifically target STEM students, bridging the gap between technical talent and advisory roles.",
      "Delivered public presentations (lecture shout-outs) to large audiences and organised 'meet and greet' events to promote the firm's culture and opportunities.",
      "Reported weekly to Sanctuary Graduates management, providing data-driven feedback on student sentiment and campaign reach."
    ],
    skills: ["Public Speaking", "Strategic Marketing", "Data Analysis", "Event Organization", "Leadership"]
  },

  {
    title: "Head of Course Representatives",
    organization: "University of Surrey Students' Union",
    period: "September 2024 - June 2025",
    type: "leadership",
    logo: "/images/university-of-surrey-logo.jpeg",
    description: "Leading a team of 30 representatives, advocating for the academic interests of over 1,200 students.",
    achievements: [
      "Organize regular meetings with university leadership",
      "Enhanced communication between students and faculty", 
      "Successfully increased student satisfaction within the department",
      "Developed strong leadership and organizational skills"
    ],
    skills: ["Team Leadership", "Stakeholder Management", "Public Speaking", "Conflict Resolution", "Strategic Communication"]
  },
  {
    title: "Bright Network Internship Experience",
    organization: "Technology & Engineering Programme", 
    period: "July 14-17, 2025",
    type: "internship",
    logo: "/images/bright_network_logo.jpeg",
    description: "4-day virtual internship programme with industry leaders including Google, Cisco, Lloyds Banking Group, and MBDA.",
    achievements: [
      "Interactive workshops on AI applications and design thinking",
      "Completed sector skills project with peer feedback",
      "Panel discussions on social mobility and DEI in tech",
      "Networking with professionals from top firms",
      "Received certificate of completion"
    ],
    skills: ["Problem-solving & critical thinking", "Project management & agile concepts", "AI & technology awareness", "Professional networking"]
  },
  {
    title: "Vice President",
    organization: "Computer Science Society - University of Surrey",
    period: "September 2024 - June 2025",
    type: "leadership",
    logo: "/images/compsoc.jpeg", 
    description: "Managed a committee of 10 members, organizing technical events and fostering student engagement.",
    achievements: [
      "Planned and executed hackathons and game jams",
      "Organized guest talks with industry professionals", 
      "Ensured maximum student attendance at events",
      "Managed sponsorship opportunities with companies",
      "Coordinated with senior academics and department representatives"
    ],
    skills: ["Event Management", "Team Coordination", "Budget Planning", "Leadership"]
  },
  {
    title: "Barista",
    organization: "Costa Coffee UK",
    period: "May 2024 - September 2024", 
    type: "part-time",
    logo: "/images/costa-coffee-logo.jpeg",
    description: "Delivered friendly and efficient customer service, ensuring a welcoming atmosphere for a diverse range of customers.",
    achievements: [
      "Worked closely with team members during high-pressure periods to maintain fast, consistent service and smooth operations.",
      "Recognised with multiple ‘Star of the Week’ awards for excellent teamwork, initiative, and customer satisfaction."
    ],
    skills: ["Customer Service", "Time Management", "Teamwork", "High-Pressure Adaptability", "Communication"]
  }
];

export const projects = [

  {
    title: "Intelligent Supervisor Allocation System - A Hybrid Semantic & Stable Matching Approach",
    subtitle: "Final Year Project",
    period: "2026",
    description: "Architected and deployed a decoupled full-stack web application designed to solve the computationally complex Student-Project Allocation (SPA) problem. The system integrates a Sentence-BERT (SBERT) neural network for semantic NLP with an adapted Gale-Shapley algorithm to ensure mathematically stable, student-optimal matching. The architecture actively mitigates algorithm aversion by preserving user sovereignty and significantly reduces departmental administrative overhead.",
    achievements: [
      "Engineered a Python Hybrid Scoring Engine utilising a Sentence-BERT neural network for semantic text evaluation, boosting matching accuracy by 50.2% via custom data-fallback mechanisms.",
      "Implemented an adapted Gale-Shapley algorithm to optimise complex resource allocation, computing a mathematically stable matching for a 400-user market in 1.33 milliseconds (a 22x speed increase).",
      "Architected a decoupled React and Django REST application, enforcing strict JSON Web Token (JWT) authentication to guarantee GDPR-compliant Role-Based Access Control."
    ],
    technologies: ["Python", "Django (DRF)", "React", "Sentence-BERT", "Pandas", "Scikit-learn"],
    links: {
      github: "https://github.com/SaidAit01/YOUR-REPO-NAME", // Remember to update this!
      demo: "" 
    }
  },

  {
    title: "Predictive Analytics for Marine Ecology",
    subtitle: "University Project",
    period: "2026",
    description: "Developed a supervised machine learning pipeline to forecast the recovery trajectories of Pacific coral reef fish populations following severe thermal bleaching events. The project evaluated multiple predictive algorithms against a highly imbalanced environmental dataset to design a data-driven 2026 rotational fishing schedule, successfully balancing marine conservation efforts with the economic sustainability of local fisheries.",
    achievements: [
      "Engineered and benchmarked predictive models (K-Nearest Neighbours and Random Forest) using Python and Scikit-learn, implementing SMOTE and rigorous feature scaling to resolve severe minority-class imbalance across 97,000+ marine spatial records.",
      "Optimised model performance for deployment by executing 3-fold cross-validated GridSearchCV and custom probability threshold calibration (0.47), maximising minority-class sensitivity to achieve a peak recall of 75% and a leading group F1-score of 0.3158.",
      "Translated complex statistical outputs into actionable business strategy by generating a tiered fishery management schedule and extracting feature importance metrics to prove that immediate thermal stress and turbidity are the primary drivers of reef viability."
    ],
    technologies: ["Python", "Scikit-learn", "Random Forest", "KNN", "SMOTE", "Data Analytics"],
  },

  {
    title: "Multi-Agent School System",
    subtitle: "Google ADK DevCamp Project",
    period: "2026",
    description: "Architected a hierarchical Agent-to-Agent (A2A) framework using the Google Agent Development Kit. Deployed a Root Agent to intelligently classify and route user queries to domain-specific sub-agents, directly mirroring enterprise-grade AI agent workflows with persistent memory and tool-use.",
    achievements: [
      "Architected a hierarchical Agent-to-Agent (A2A) framework using the Google Agent Development Kit, deploying a Root Agent to intelligently classify and route user queries to domain-specific sub-agents.",
      "Engineered dynamic tool-use capabilities, integrating external tools (search and calculation) to allow sub-agents to retrieve real-time data and execute complex, multi-step reasoning tasks.",
      "Implemented persistent conversation memory to maintain state and context across multi-turn interactions, directly mirroring enterprise-grade AI agent workflows."
    ],
    technologies: ["Google ADK", "Multi-Agent Systems (A2A)", "LLMs", "Python", "API Integration"],
    links: {
      github: "https://github.com/SaidAit01/SchoolMulti-AgentSystem", 
      demo: "" 
    }
  },

    {
    title: "Metaheuristic Hyperparameter Optimisation for LoRA",
    subtitle: "Computational Intelligence Project",
    period: "2025",
    type: "Machine Learning Research", 
    description: "An automated framework for tuning Low-Rank Adaptation (LoRA) hyperparameters to fine-tune DistilBERT on the Emotion dataset. The project systematically compares swarm intelligence algorithms (PSO, GWO) against evolutionary methods (GA) and random baselines to maximise validation accuracy and generalisation.",
    achievements: [
      "Achieved a peak test accuracy of 90.95% using the Grey Wolf Optimizer (GWO), outperforming standard Random Search and Genetic Algorithms.",
      "Implemented a robust multi-objective solution (NSGA-II) that successfully identified models with 50% fewer trainable parameters while maintaining competitive accuracy.",
      "Developed a distributed experimental pipeline to evaluate 5 distinct algorithms across multiple random seeds using high-performance A100 GPUs."
    ],
    technologies: ["Python", "PyTorch", "Hugging Face Transformers", "PEFT (LoRA)", "DEAP", "Pandas", "Matplotlib", "Google Colab"],
    links: {
      github: "https://github.com/SaidAit01/COM3013-LoRA-Optimisation"
    }
  },


  {
  title: "StockTok: Microservices-Based Social Trading Platform",
  subtitle: "Internet Scale systems Project)",
  period: "2025",
  type: "Full-Stack Microservice Architecture",
  description: "A distributed web application enabling users to track real-time stock market data and share financial insights. The system utilizes a microservices architecture to decouple market data processing from user management and social interactions.",
  achievements: [
    "Developed a high-performance Market Data Microservice using Python (FastAPI) to serve historical OHLC data and complex financial fundamentals.",
    "Engineered a robust data processing pipeline using Pandas to calculate key valuation metrics (LTM Net Debt, EV/EBITDA) and implemented Redis caching to optimize API latency.",
    "Built a responsive Next.js (TypeScript) frontend module featuring interactive candlestick charts (Lightweight Charts) and a dynamic financial dashboard.",
    "Integrated the Python service into a larger .NET ecosystem via a YARP (Yet Another Reverse Proxy) API Gateway, ensuring seamless routing and Auth0 security compliance."
  ],
  technologies: [
    "Python", 
    "FastAPI", 
    "Next.js", 
    "TypeScript", 
    "Redis", 
    "Pandas", 
    "yfinance", 
    ".NET (YARP)", 
    "Auth0"
  ],
  links: {
    "github": "https://github.com/SaidAit01/StockTok/tree/market-service" 
  }
},
{
    title: "DataVizor",
    subtitle: "AI-Powered Privacy Policy Analyser",
    period: "2025", 
    type: "web-app",
    description: "Full-stack web application that analyzes and summarizes privacy policies in real-time using Gemini AI API.",
    achievements: [
      "Real-time privacy policy analysis",
      "Accessible UI with dark/light mode",
      "Text-to-speech implementation",
      "GDPR risk scoring system"
    ],
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Gemini AI, Docker"],
    links: {
      demo: "https://github.com/Group18-babylon/demo-repository",
      github: "https://github.com/Group18-babylon/softeng-gp18"
    }
  },
  
  {
    title: "AI-Powered E-Learning Platform",
    subtitle: "Microsoft Hackathon - 4th Place",
    period: "2024",
    type: "hackathon",
    description: "Led a team of 5 to develop an innovative e-learning platform for neurodiverse students using Python and Azure OpenAI Service.",
    achievements: [
      "Secured 4th place among 100+ developers",
      "Personalised explanations with popular culture references", 
      "Enhanced accessibility in education",
      "Team leadership and project management"
    ],
    technologies: ["Python", "Azure OpenAI", "Figma", "Machine Learning"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  

  {
    title: "University Moderating System", 
    subtitle: "University Hackathon Project - 2nd Place",
    period: "2024",
    type: "hackathon",
    description: "Built a comprehensive web application in 72 hours for student project management and academic evaluation with a team of 4.",
    achievements: [
      "Role-based access for conveners and academics",
      "Project assignment and evaluation system",
      "Workflow automation implementation", 
      "Bug diagnosis and deployment resolution"
    ],
    technologies: ["Python", "Django", "React", "Tailwind CSS", "MongoDB", "Git"],
    links: {
      github: "https://github.com/devdyanmos-surrey/website"
    }
  },
 
  {
    title: "My Music Maestro",
    subtitle: "University Coursework Project",
    period: "2024",
    type: "web-app", 
    description: "Web application designed to manage albums for artists, allowing creation, editing, and removal of albums with intuitive interface.",
    achievements: [
      "Complete CRUD operations for albums",
      "Artist management system",
      "Responsive design implementation",
      "User-friendly interface design"
    ],
    technologies: ["Django", "React", "Python", "CSS", "SQLite"],
    links: {
      github: "https://github.com/SaidAit01/Album-Music-Manager"
    }
  },

];

export default {
  personalInfo,
  skills,
  experiences,
  projects
};


