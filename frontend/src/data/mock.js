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
    { name: "Python", level: 90, icon: "🐍" },
    { name: "JavaScript", level: 85, icon: "⚡" },
    { name: "Java", level: 80, icon: "☕" },
    { name: "C++", level: 75, icon: "⚙️" },
    { name: "MATLAB", level: 70, icon: "📊" }
  ],
  "Web Technologies": [
    { name: "React", level: 85, icon: "⚛️" },
    { name: "HTML5", level: 90, icon: "🌐" },
    { name: "Django", level: 80, icon: "🎯" },
    { name: "Bootstrap", level: 75, icon: "🎨" },
    { name: "REST APIs", level: 85, icon: "🔗" }
  ],
  "Database & Tools": [
    { name: "MySQL", level: 80, icon: "🗄️" },
    { name: "Git", level: 85, icon: "📱" },
    { name: "Microsoft Office 365", level: 90, icon: "📄" }
  ]
};

export const experiences = [
  {
    title: "Head of Course Representatives",
    organization: "University of Surrey Students' Union",
    period: "Current",
    type: "leadership",
    description: "Leading a team of 30 representatives, advocating for the academic interests of over 1,200 students.",
    achievements: [
      "Organize regular meetings with university leadership",
      "Enhanced communication between students and faculty", 
      "Successfully increased student satisfaction within the department",
      "Developed strong leadership and organizational skills"
    ]
  },
  {
    title: "Bright Network Internship Experience",
    organization: "Technology & Engineering Programme", 
    period: "July 14-17, 2025",
    type: "internship",
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
    period: "Former",
    type: "leadership",
    description: "Managed a committee of 10 members, organizing technical events and fostering student engagement.",
    achievements: [
      "Planned and executed hackathons and game jams",
      "Organized guest talks with industry professionals", 
      "Ensured maximum student attendance at events",
      "Managed sponsorship opportunities with companies",
      "Coordinated with senior academics and department representatives"
    ]
  }
];

export const projects = [
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
    subtitle: "University Hackathon Project",
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
    technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Gemini AI"],
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "My Music Maestro",
    subtitle: "Label Music Manager",
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
  }
];

export default {
  personalInfo,
  skills,
  experiences,
  projects
};