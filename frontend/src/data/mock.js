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
    { name: "PyTorch", level: 90, icon: "🔥" }, // From LoRA project
    { name: "Hugging Face", level: 85, icon: "🤗" }, // From LoRA/NLP
    { name: "Pandas & NumPy", level: 90, icon: "🐼" }, // From StockTok/Research
    { name: "Scikit-learn", level: 85, icon: "🧠" }, // From ISAS
    { name: "Generative AI APIs", level: 80, icon: "✨" } // Gemini/OpenAI
  ],
  "Web Technologies": [
    { name: "React & Next.js", level: 90, icon: "⚛️" }, // Combined & Updated
    { name: "FastAPI", level: 85, icon: "🚀" }, // From StockTok
    { name: "Django (DRF)", level: 85, icon: "🎯" }, // From ISAS
    { name: "Tailwind CSS", level: 90, icon: "🎨" }, // From DataVizor
    { name: "Microservices", level: 80, icon: "🏗️" } // Architecture skill
  ],
  "DevOps & Tools": [ // RENAMED from "Database & Tools"
    { name: "Docker", level: 80, icon: "🐳" }, // From DataVizor
    { name: "PostgreSQL", level: 85, icon: "🐘" }, // Better than MySQL
    { name: "Redis", level: 75, icon: "🔴" }, // From StockTok
    { name: "Git & GitHub", level: 90, icon: "🐙" },
    { name: "Azure / Cloud", level: 75, icon: "☁️" } // From Hackathon
  ]
};

export const experiences = [
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
    subtitle: "AI-Powered Privacy Policy Analyzer",
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
  {
    title: "Intelligent Supervisor Allocation System (ISAS)",
    subtitle: "Final Year Project",
    period: "In Progress - 2026",
    type: "Full-Stack AI Application",
    description: "A full-stack, AI-powered allocation system designed to automate and optimize the complex process of matching students with supervisors based on research interests and capacity constraints.",
    achievements: [
      "Architected a scalable full-stack solution using Django (DRF) and React to replace manual allocation processes.",
      "Designed a novel hybrid recommendation engine combining Sentence-BERT for semantic text analysis with explicit user preferences via a tunable weighted model.",
      "Engineered a capacity-constrained assignment algorithm and benchmarked its performance on a synthetic dataset to scientifically evaluate and tune model weights."
    ],
    technologies: ["Python", "Django (DRF)", "React", "Sentence-BERT", "Pandas", "Scikit-learn"],
    links: {
      github: "" // Don't forget to update this link!
    }
  },
  
];

export default {
  personalInfo,
  skills,
  experiences,
  projects
};
