import { Cpu, Video, Users, CheckCircle } from 'lucide-react';
import { SkillCategory, Project, CreativeWork, LeadershipRole } from './types';

export const HERO_TITLES = [
  "EEE Undergrad",
  "Video Editor",
  "Tech Enthusiast"
];

export const EDUCATION = [
  {
    id: "edu1",
    degree: "BSc in Electrical & Electronic Engineering",
    institution: "Southeast University (SEU)",
    year: "Current",
    grade: "CGPA: 3.93",
    highlight: true,
    image: "https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/Southeast/432579696_3569625096699321_1526745588174815642_n.jpg?raw=true",
    ranking: "#1 Private University in EEE (Ranked by Scimago)",
    address: "251/A & 252, Tejgaon I/A, Dhaka 1208, Bangladesh"
  },
  {
    id: "edu2",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Science Group | Ideal College Dhanmondi",
    year: "2022",
    grade: "GPA: 4.83",
    highlight: false,
    image: "https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/Southeast/Gemini_Generated_Image_b7x3zjb7x3zjb7x3.png?raw=true",
    ranking: "Top 10 College in Dhaka Board",
    address: "65 Central Rd, Dhaka 1205, Bangladesh"
  },
  {
    id: "edu3",
    degree: "Secondary School Certificate (SSC)",
    institution: "Science Group | Ahmed Bawany Academy",
    year: "2020",
    grade: "GPA: 4.72",
    highlight: false,
    image: "https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/Southeast/gate-front.png?raw=true",
    ranking: "Best School in Old Dhaka Region",
    address: "Armanitola, Dhaka, Bangladesh"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Engineering & Tech",
    icon: Cpu,
    color: "text-neon-cyan",
    skills: [
      { name: "Python", level: 90 },
      { name: "AI Workflow Integration", level: 85 },
      { name: "IoT Development", level: 80 },
      { name: "Circuit Analysis", level: 85 },
      { name: "C/C++", level: 75 },
    ]
  },
  {
    title: "Creative & Video",
    icon: Video,
    color: "text-neon-purple",
    skills: [
      { name: "DaVinci Resolve", level: 90 },
      { name: "CapCut", level: 95 },
      { name: "Affinity Photo", level: 80 },
      { name: "Canva", level: 85 },
      { name: "Content Strategy", level: 80 },
    ]
  },
  {
    title: "Management",
    icon: Users,
    color: "text-neon-green",
    skills: [
      { name: "Project Management", level: 85 },
      { name: "Excel / Sheets", level: 90 },
      { name: "Documentation", level: 85 },
      { name: "Team Leadership", level: 80 },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "IoT Based Weight Machine",
    category: "IoT",
    description: "A smart weighing scale that logs data to the cloud for health monitoring and inventory tracking.",
    techStack: ["Arduino", "ESP8266", "Load Cells", "Cloud API"],
    image: "https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/Contest/20251228_120018.jpg?raw=true"
  },
  {
    id: "p2",
    title: "IoT Based Solar Inverter",
    category: "IoT",
    description: "Smart solar monitoring system optimizing energy conversion efficiency with real-time analytics.",
    techStack: ["IoT", "Power Electronics", "Sensors", "Python"],
    image: "https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/Contest/IMG-20250921-WA0017.jpg?raw=true"
  },
  {
    id: "p3",
    title: "Hybrid Incubator & Seed Germinator",
    category: "IoT",
    description: "Automated environment control system for agricultural optimization, controlling temp and humidity.",
    techStack: ["Microcontrollers", "Automation", "Sensors"],
    image: "https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/Contest/Screenshot%202026-03-30%20013925.png?raw=true"
  },
  {
    id: "r1",
    title: "Poster Presentation in SympSIST 2025",
    category: "Research",
    description: "Presented research on sustainable IoT solutions at IUBAT IEEE Symposium.",
    techStack: ["Research", "IEEE", "Poster Presentation"],
    highlight: "Joint 2nd Place Winner",
    image: "https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/Contest/Screenshot%202026-02-19%20200339.png?raw=true"
  },
  {
    id: "r2",
    title: "IEEE SEU Paper Presentation 1.0",
    category: "Research",
    description: "In-depth analysis of modern renewable energy integration strategies.",
    techStack: ["Public Speaking", "Technical Writing"],
    highlight: "1st Place Winner",
    image: "https://github.com/SalmanSanyJetu/Portfolio/blob/main/Portfolio/Contest/IMG-20251217-WA0021.jpg?raw=true"
  }
];

export const CREATIVE_WORKS: CreativeWork[] = [
  {
    id: "c1",
    title: "Freelance Music Videos",
    role: "Director & Editor",
    type: "Video",
    description: "Collaborated with music producers to visualize soundscapes through dynamic editing and VFX.",
    stats: "10+ Projects"
  },
  {
    id: "c2",
    title: "16-Bit Jitu",
    role: "Channel Manager",
    type: "Brand",
    description: "Managing a gaming and creative hub. Creating thumbnails, shorts, and community engagement strategies.",
    stats: "3M+ Views | 2.5k Followers"
  },
  {
    id: "c3",
    title: "Hoyoverse Shorts Challenge",
    role: "Content Creator",
    type: "Award",
    description: "Won 'Most Views on Shorts' competition organized by Genshin Impact officials.",
    stats: "$100 Prize Winner"
  }
];

export const LEADERSHIP: LeadershipRole[] = [
  {
    year: "2026",
    role: "Executive Webmaster",
    organization: "IEEE SEU Student Branch",
    description: "Leading the digital presence and technical web maintenance for the student branch."
  },
  {
    year: "2025",
    role: "Sub Executive",
    organization: "SEU EEE Club",
    description: "Organizing workshops, seminars, and bridging the gap between juniors and industry experts."
  }
];