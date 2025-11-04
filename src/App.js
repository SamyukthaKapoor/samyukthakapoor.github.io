import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Mail, Linkedin, Github, ExternalLink, ChevronDown, Menu, X, Code, Database, BarChart3, Award, Briefcase, GraduationCap, FileText, TrendingUp, Activity, Zap, BookOpen, Trophy } from 'lucide-react';

const portfolioData = {
  name: "Samyuktha Kapoor",
  title: "Data Analyst | Data Engineer | Business Analyst",
  tagline: "Transforming data into actionable insights",
  location: "Boston, MA",
  email: "rajeshkapoor.s@northeastern.edu",
  phone: "+1 (857) 867-1929",
  links: {
    linkedin: "https://www.linkedin.com/in/samyukthakapoor/",
    github: "https://github.com/samyukthakapoor",
    portfolio: "https://samyukthakapoor.com"
  }
};

const skills = [
  { category: "Languages", items: ["Python", "SQL", "R", "HTML/CSS"], level: 90 },
  { category: "BI Tools", items: ["Power BI", "Tableau", "Looker", "Excel"], level: 95 },
  { category: "Cloud & Data", items: ["AWS", "GCP", "PostgreSQL", "MongoDB"], level: 85 },
  { category: "MLOps", items: ["Apache Airflow", "Docker", "Kubernetes", "ML"], level: 80 }
];

const projects = [
  {
    title: "AudioSEEK ML Pipeline",
    description: "ML pipeline using Apache Airflow for timestamp-grounded Q&A on audiobooks. Reduced audio navigation time by 75%.",
    tech: ["Apache Airflow", "Python", "RAG", "NLP"],
    impact: "75% time reduction",
    github: "https://github.com/samyukthakapoor/audioseek",
    image: "/project-images/audioseek.png",
    color: "from-purple-400 to-pink-400"
  },
  {
    title: "Payroll Data Warehouse",
    description: "End-to-end data warehouse with Talend ETL pipelines analyzing compensation trends and attrition, identifying $50K optimization opportunities.",
    tech: ["Talend", "PostgreSQL", "Tableau"],
    impact: "$50K savings identified",
    github: "https://github.com/samyukthakapoor/payroll-warehouse",
    image: "/project-images/payroll.png",
    color: "from-blue-400 to-cyan-400"
  },
  {
    title: "YouTube Analytics Pipeline",
    description: "Scalable ETL pipeline on AWS analyzing 500+ videos with automated transformations. Increased view duration by 18%.",
    tech: ["AWS", "Lambda", "Glue", "Tableau"],
    impact: "18% engagement increase",
    github: "https://github.com/samyukthakapoor/youtube-pipeline",
    image: "/project-images/youtube.png",
    color: "from-red-400 to-orange-400"
  },
  {
    title: "Predictive Churn Management",
    description: "Churn prediction model using SVM and gradient boosting with regression analysis and random forests for data quality assurance.",
    tech: ["Python", "SVM", "Random Forest", "Data Mining"],
    impact: "Optimized accuracy",
    github: "https://github.com/samyukthakapoor/churn-prediction",
    image: "/project-images/churn.png",
    color: "from-emerald-400 to-teal-400"
  },
  {
    title: "Cloud Kitchen Data Management",
    description: "Database design with SQL and NoSQL implementation for cloud kitchen environment, enabling flexible queries and analytics.",
    tech: ["SQL", "NoSQL", "Database Design"],
    impact: "Flexible data management",
    github: "https://github.com/samyukthakapoor/cloud-kitchen",
    image: "/project-images/cloud-kitchen.png",
    color: "from-yellow-400 to-orange-400"
  },
  {
    title: "Environmental Sustainability Visualizer",
    description: "Interactive Power BI dashboard for powerplants with AI model to assess environmental impact and enhance sustainability insights.",
    tech: ["Power BI", "Python", "AI/ML"],
    impact: "Enhanced sustainability",
    github: "https://github.com/samyukthakapoor/sustainability-viz",
    image: "/project-images/sustainability.png",
    color: "from-green-400 to-emerald-400"
  },
  {
    title: "MassDOT Data Storytelling",
    description: "Data stories revealing transportation planning operations, supporting data-driven decision making with interactive user stories.",
    tech: ["Data Visualization", "Storytelling"],
    impact: "Actionable insights",
    github: "https://github.com/samyukthakapoor/massdot-stories",
    image: "/project-images/massdot.png",
    color: "from-indigo-400 to-purple-400"
  },
  {
    title: "Boston Airbnb Dashboard",
    description: "Tableau dashboard with advanced filters analyzing 3,000+ listings to uncover pricing trends and neighborhood dynamics.",
    tech: ["Tableau", "Python", "Data Analysis"],
    impact: "15% revenue potential",
    github: "https://github.com/samyukthakapoor/airbnb-dashboard",
    image: "/project-images/airbnb.png",
    color: "from-pink-400 to-rose-400"
  }
];

const experience = [
  {
    role: "Data Science Research Assistant",
    company: "Northeastern University",
    period: "Aug 2025 - Present",
    achievements: [
      "Built automated VEP signal analysis tools that cut diagnostic review time by 60% for neurophysiological assessments",
      "Developed Python pipelines using MNE-Python for healthcare data analysis, improving clinical workflow efficiency",
      "Applied m-sequence deconvolution algorithms to enhance P100 wave detection accuracy in diagnostic systems"
    ]
  },
  {
    role: "Data & BI Analyst",
    company: "Massachusetts Clean Energy Centre",
    period: "Jan 2025 - Sep 2025",
    achievements: [
      "Created Power BI dashboards tracking clean energy investments and grantee performance, reducing manual reporting time by 40%",
      "Designed SQL-based ETL pipelines that integrated CRM data with analytics platforms, eliminating data silos across teams",
      "Delivered technical training for 12 data liaisons, improving cross-departmental data literacy and standardization"
    ]
  },
  {
    role: "Business Data Analyst",
    company: "Rudra Enterprises",
    period: "Aug 2022 - Aug 2023",
    achievements: [
      "Built sales forecasting models that reduced inventory stockouts by 38% for 50+ retail clients",
      "Developed customer segmentation analysis that informed targeted marketing strategies, boosting retention by 24%",
      "Created Excel-based analytics dashboards integrated with ERP systems for real-time inventory tracking"
    ]
  },
  {
    role: "Data Engineer",
    company: "Corizo",
    period: "Nov 2022 - Apr 2023",
    achievements: [
      "Streamlined CRM data workflows through automated cleaning processes using VBA and Macros",
      "Designed and presented 100+ ad-hoc reports with KPI visualizations for stakeholder decision-making",
      "Optimized data warehouse architecture using Talend ETL pipelines and snowflake schema design"
    ]
  },
  {
    role: "Data Research Analyst",
    company: "Indian Institute of Technology",
    period: "Apr 2021 - Jul 2021",
    achievements: [
      "Standardized 10,000+ breast cancer diagnostic images achieving 97% data validation accuracy",
      "Collaborated on deep learning research for early cancer detection, published in IRO Journal",
      "Processed unstructured medical data using Pandas to support reliable ML model training"
    ]
  }
];

const education = [
  {
    degree: "Master of Science, Data Analytics Engineering",
    school: "Northeastern University",
    period: "Sep 2023 - Dec 2025",
    gpa: "3.8",
    achievements: [
      "Teaching Assistant for IE7275 - Data Mining in Engineering",
      "Research Assistant working on Visual Evoked Potential (VEP) neurological diagnostics",
      "Member of FirstByte (STEM education diversity initiative), DAESO (Data Analytics club), and Baking Community",
      "Active contributor to data science workshops and peer mentorship programs"
    ]
  },
  {
    degree: "Bachelor of Engineering, Electronics & Communication",
    school: "Anna University",
    period: "Aug 2019 - Apr 2023",
    gpa: "3.7",
    achievements: [
      "Public Relations Officer - Debating Union (Sep 2020 - Sep 2021)",
      "Secretary - Atrium Literary Club (Aug 2020 - Aug 2021)",
      "Led debate tournaments and literary events, developing leadership and public speaking skills"
    ]
  }
];

const publications = [
  {
    title: "Deep Learning based Breast Cancer Diagnostic System using Medical Images",
    type: "Journal Publication",
    venue: "Journal of Innovative Image Processing (IRO Journal)",
    date: "May 2023",
    authors: "Dr. Rajkumar S., Sairam V. A., Samyuktha Kapoor, Nithila J.",
    link: "https://irojournals.com/iroiip/article/view/5/2/3",
    description: "Developed an AI-powered diagnostic system achieving 97% accuracy in breast cancer detection using deep learning and medical imaging"
  },
  {
    title: "Application of Artificial Intelligence in Breast Cancer Diagnostics: A Review",
    type: "Book Chapter",
    venue: "Artificial Intelligence in Medicine and Healthcare (CRC Press)",
    date: "2025",
    authors: "N. Padmasini, V.A. Sairam, Samyuktha Kapoor, J. Nithila",
    link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003508595-9",
    description: "Comprehensive review of AI algorithms and CAD systems used in breast cancer diagnosis through medical imaging"
  }
];

const generateChartData = () => {
  return [
    { month: 'Jan', efficiency: 70 }, { month: 'Feb', efficiency: 72 }, { month: 'Mar', efficiency: 75 },
    { month: 'Apr', efficiency: 78 }, { month: 'May', efficiency: 82 }, { month: 'Jun', efficiency: 85 },
    { month: 'Jul', efficiency: 83 }, { month: 'Aug', efficiency: 87 }, { month: 'Sep', efficiency: 88 },
    { month: 'Oct', efficiency: 90 }, { month: 'Nov', efficiency: 92 }, { month: 'Dec', efficiency: 95 }
  ];
};

const skillsRadarData = [
  { skill: 'Python', value: 90 }, { skill: 'SQL', value: 95 }, { skill: 'Tableau', value: 90 },
  { skill: 'ML/AI', value: 85 }, { skill: 'ETL', value: 88 }, { skill: 'Cloud', value: 82 }
];

const projectMetrics = [
  { name: 'Time Saved', value: 75 }, { name: 'Accuracy', value: 97 },
  { name: 'Efficiency', value: 60 }, { name: 'ROI', value: 85 }
];

// CREATIVE ELEMENT 1: Animated Particle Network Background
const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 80;
    const connectionDistance = 150;
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.6)';
        ctx.fill();
      }
    }
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

// CREATIVE ELEMENT 2: Typing Animation Hook
const useTypingEffect = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
    
    return () => clearInterval(timer);
  }, [text, speed]);
  
  return displayText;
};

// CREATIVE ELEMENT 3: Scroll Reveal Animation
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  return [ref, isVisible];
};

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [chartData] = useState(generateChartData());
  const [scrollProgress, setScrollProgress] = useState(0);
  const typedText = useTypingEffect("Hey there! I'm a data enthusiast who loves turning messy datasets into clear, actionable stories.", 30);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const theme = {
    bg: 'bg-slate-900',
    card: 'bg-slate-800',
    text: 'text-slate-100',
    subtext: 'text-slate-400',
    accent: 'text-blue-400',
    border: 'border-slate-700',
    hover: 'hover:bg-slate-700'
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300 relative overflow-hidden`}>
      {/* Animated Particle Network Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <ParticleNetwork />
      </div>

      <div className="relative z-10">
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-40 bg-slate-900/80 border-b ${theme.border} backdrop-blur-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Database className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SK</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'publications', 'skills', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize ${theme.text} ${theme.hover} px-3 py-2 rounded-lg transition-all ${
                    activeSection === item ? 'text-blue-400 font-semibold' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden bg-slate-800 border-t ${theme.border}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'projects', 'publications', 'skills', 'education', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className={`block w-full text-left capitalize ${theme.text} ${theme.hover} px-3 py-2 rounded-lg`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1 animate-pulse">
                    <img 
                      src="/profile.jpg" 
                      alt="Samyuktha Kapoor"
                      className="w-full h-full rounded-full object-cover border-4 border-slate-900"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-full rounded-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center text-4xl font-bold text-blue-400">SK</div>';
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse"></div>
                </div>
                <div className="inline-block px-5 py-2.5 bg-blue-500/10 text-blue-400 rounded-full text-base font-medium animate-pulse">
                  Available for opportunities
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {portfolioData.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-slate-300">
                {portfolioData.title}
              </h2>
              {/* Typing Animation */}
              <p className={`text-lg ${theme.subtext} mb-2 leading-relaxed min-h-[6rem]`}>
                {typedText}<span className="animate-pulse">|</span>
              </p>
              <p className={`text-lg ${theme.subtext} mb-2 leading-relaxed`}>
                Whether it's building ETL pipelines in SQL, creating interactive dashboards in Tableau, or deploying ML models with Apache Airflow, I'm all about making data work smarter.
              </p>
              <p className={`text-lg ${theme.subtext} mb-8 leading-relaxed`}>
                Recently, I cut diagnostic processing time by 60% in a healthcare project and hit 97% accuracy. When I'm not neck-deep in Python or Power BI, you'll find me perfecting my matcha latte art or filming cozy home café content.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`mailto:${portfolioData.email}`}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all flex items-center space-x-2 shadow-lg hover:scale-105 transform"
                >
                  <Mail className="w-4 h-4" />
                  <span>Get in Touch</span>
                </a>
                <a 
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all flex items-center space-x-2 hover:scale-105 transform"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Resume</span>
                </a>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-all hover:scale-125 transform">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-purple-400 transition-all hover:scale-125 transform">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`${theme.card} p-6 rounded-2xl border ${theme.border} shadow-lg hover:shadow-2xl transition-all`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-slate-300">Performance Growth</h3>
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="month" stroke="#94a3b8" style={{fontSize: '12px'}} />
                    <YAxis stroke="#94a3b8" style={{fontSize: '12px'}} />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.3)', color: '#e2e8f0' }} />
                    <Area type="monotone" dataKey="efficiency" stroke="#3b82f6" fillOpacity={1} fill="url(#colorEfficiency)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className={`${theme.card} p-6 rounded-2xl border ${theme.border} shadow-lg hover:shadow-2xl transition-all`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-slate-300">Key Impact Metrics</h3>
                  <Activity className="w-5 h-5 text-purple-400" />
                </div>
                <ResponsiveContainer width="100%" height={180}>
                  <BarChart data={projectMetrics}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                    <XAxis dataKey="name" stroke="#94a3b8" style={{fontSize: '12px'}} />
                    <YAxis stroke="#94a3b8" style={{fontSize: '12px'}} />
                    <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#e2e8f0' }} />
                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                      {projectMetrics.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={['#3b82f6', '#8b5cf6', '#ec4899', '#10b981'][index]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About, Experience, Projects, etc. sections with scroll reveal */}
      <ScrollRevealSection id="about" theme={theme} />
      <ExperienceSection id="experience" theme={theme} experience={experience} />
      <ProjectsSection id="projects" theme={theme} projects={projects} />
      <PublicationsSection id="publications" theme={theme} publications={publications} />
      <SkillsSection id="skills" theme={theme} skills={skills} skillsRadarData={skillsRadarData} />
      <EducationSection id="education" theme={theme} education={education} />
      <ContactSection id="contact" theme={theme} portfolioData={portfolioData} />

      <footer className={`py-8 border-t ${theme.border} bg-slate-900/50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className={theme.subtext}>© 2025 Samyuktha Kapoor. Built with React & Tailwind CSS</p>
            <p className="text-sm text-slate-500 mt-2">Transforming data into insights, one analysis at a time ☕️</p>
          </div>
        </div>
      </footer>

      <button
        onClick={() => scrollToSection('home')}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg transition-all opacity-80 hover:opacity-100 z-50 hover:scale-110 transform"
        aria-label="Scroll to top"
      >
        <ChevronDown className="w-6 h-6 rotate-180" />
      </button>
      </div>
    </div>
  );
}

// Component for scroll-reveal animation on About section
function ScrollRevealSection({ id, theme }) {
  const [ref, isVisible] = useScrollReveal();
  
  return (
    <section ref={ref} id={id} className={`py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className={`${theme.card} p-8 rounded-2xl border ${theme.border} shadow-lg hover:shadow-2xl transition-all`}>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                I'm currently wrapping up my Master's in Data Analytics Engineering at Northeastern, and honestly, it's been quite the ride. What started as curiosity about patterns in numbers has turned into a full-blown obsession with making data tell better stories.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                At MassCEC, I got to work on clean energy projects, building dashboards that actually helped people make real funding decisions. Before that, at IIT, I worked on breast cancer diagnostics using deep learning (which ended up becoming a published paper, still pretty surreal). The best part? Seeing how data can genuinely improve healthcare outcomes and sustainability efforts.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Outside of the data world, I'm that person who spends way too much time perfecting matcha foam art and documenting it on Instagram. I'm also part of the baking community at NEU, where we stress-bake during finals week (highly recommend). Life's all about balance, right? Data analysis by day, creative experiments by night.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Code, label: "Coding Life", color: "blue" },
              { icon: TrendingUp, label: "Clean Energy", color: "green" },
              { icon: Award, label: "NEU Life", color: "purple" },
              { icon: Activity, label: "Matcha & More", color: "pink" }
            ].map((item, idx) => (
              <div key={idx} className={`${theme.card} rounded-xl border ${theme.border} p-4 flex items-center justify-center h-32 hover:scale-105 transform transition-all hover:shadow-lg`}>
                <div className="text-center">
                  <item.icon className={`w-12 h-12 text-${item.color}-400 mx-auto mb-2`} />
                  <p className="text-xs text-slate-400">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { value: "2+", label: "Years Experience", icon: Briefcase, gradient: "from-blue-400 to-blue-600" },
            { value: "15+", label: "Projects Completed", icon: Code, gradient: "from-purple-400 to-purple-600" },
            { value: "60%", label: "Time Reduction", icon: BarChart3, gradient: "from-pink-400 to-pink-600" },
            { value: "97%", label: "ML Accuracy", icon: Award, gradient: "from-green-400 to-green-600" }
          ].map((stat, idx) => (
            <div key={idx} className={`${theme.card} p-6 rounded-xl border ${theme.border} text-center hover:shadow-xl transition-all hover:scale-110 transform hover:border-blue-500`}>
              <stat.icon className={`w-8 h-8 mx-auto mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`} style={{WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text'}} />
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>{stat.value}</div>
              <div className={`text-sm ${theme.subtext}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`${theme.card} p-6 rounded-xl border ${theme.border} shadow-lg hover:border-blue-500 hover:shadow-2xl transition-all`}>
            <h3 className="text-xl font-semibold mb-4 text-center text-slate-200">Technical Expertise</h3>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={skillsRadarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="skill" stroke="#94a3b8" />
                <Radar name="Skills" dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#e2e8f0' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className={`${theme.card} p-6 rounded-xl border ${theme.border} hover:shadow-lg hover:border-blue-500 hover:scale-105 transform transition-all`}>
              <Database className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-slate-200">Data Engineering</h3>
              <p className={theme.subtext}>Building robust ETL pipelines and data warehouses with SQL, Python, and cloud platforms to drive business insights</p>
            </div>
            <div className={`${theme.card} p-6 rounded-xl border ${theme.border} hover:shadow-lg hover:border-purple-500 hover:scale-105 transform transition-all`}>
              <BarChart3 className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-slate-200">Business Intelligence</h3>
              <p className={theme.subtext}>Creating impactful visualizations with Tableau and Power BI that translate complex data into strategic decisions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simplified component functions for other sections (keeping file size manageable)
function ExperienceSection({ id, theme, experience }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section ref={ref} id={id} className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-12">
          <Briefcase className="w-8 h-8 text-blue-400" />
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div key={idx} className={`${theme.card} p-6 rounded-xl border-l-4 border-blue-600 shadow-lg hover:shadow-2xl hover:border-l-8 hover:scale-105 transform transition-all`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400">{exp.role}</h3>
                  <p className="text-lg text-slate-300">{exp.company}</p>
                </div>
                <span className={`${theme.subtext} text-sm mt-2 md:mt-0 bg-blue-500/10 px-3 py-1 rounded-full`}>{exp.period}</span>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className={`flex items-start ${theme.subtext}`}>
                    <Zap className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CREATIVE ELEMENT 4: 3D Tilt Effect on Project Cards
function ProjectsSection({ id, theme, projects }) {
  const [ref, isVisible] = useScrollReveal();
  
  const handleMouseMove = (e, cardRef) => {
    if (!cardRef) return;
    const card = cardRef;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };
  
  const handleMouseLeave = (cardRef) => {
    if (!cardRef) return;
    cardRef.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
  };
  
  return (
    <section ref={ref} id={id} className={`py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              ref={el => {
                if (el) {
                  el.addEventListener('mousemove', (e) => handleMouseMove(e, el));
                  el.addEventListener('mouseleave', () => handleMouseLeave(el));
                }
              }}
              className={`${theme.card} rounded-xl border ${theme.border} shadow-xl group overflow-hidden transition-all duration-200`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling.style.display = 'flex'; }} />
                ) : null}
                <div className="absolute inset-0 flex items-center justify-center" style={{display: project.image ? 'none' : 'flex'}}>
                  <Code className="w-20 h-20 text-white/30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 p-2 bg-slate-900/90 hover:bg-slate-800 rounded-full transition-all shadow-lg">
                  <Github className="w-5 h-5 text-slate-200" />
                </a>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className={`${theme.subtext} mb-4 text-sm line-clamp-3`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-700 text-slate-300 rounded-md text-xs font-medium">{tech}</span>
                  ))}
                </div>
                <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-400">🎯 {project.impact}</span>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-blue-400 transition-colors flex items-center space-x-1">
                    <span>View Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PublicationsSection({ id, theme, publications }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section ref={ref} id={id} className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-12">
          <BookOpen className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl font-bold">Publications & Research</h2>
        </div>
        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <div key={idx} className={`${theme.card} p-6 rounded-xl border-l-4 border-purple-600 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Trophy className="w-5 h-5 text-purple-400" />
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-medium">{pub.type}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2">{pub.title}</h3>
                  <p className="text-sm text-slate-300 mb-1">{pub.venue} • {pub.date}</p>
                  <p className="text-xs text-slate-400 mb-3">{pub.authors}</p>
                  <p className={`${theme.subtext} text-sm mb-3`}>{pub.description}</p>
                </div>
              </div>
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                <span>Read Publication</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection({ id, theme, skills }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section ref={ref} id={id} className={`py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills & Technologies</h2>
        <p className="text-center text-slate-400 mb-12">Proficiency levels based on project experience and professional application</p>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className={`${theme.card} p-6 rounded-xl border ${theme.border} shadow-lg hover:shadow-xl hover:border-blue-500 hover:scale-105 transform transition-all`}>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{skill.category}</h3>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {skill.items.map((item, i) => (
                    <span key={i} className={`px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-500/20 transition-all`}>{item}</span>
                  ))}
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                </div>
                <p className="text-xs text-slate-500 text-right">{skill.level}% proficiency</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection({ id, theme, education }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section ref={ref} id={id} className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-12">
          <GraduationCap className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl font-bold">Education</h2>
        </div>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className={`${theme.card} p-6 rounded-xl border-l-4 border-purple-500 shadow-lg hover:shadow-xl hover:border-l-8 hover:scale-105 transform transition-all`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-purple-400">{edu.degree}</h3>
                  <p className="text-lg text-slate-300">{edu.school}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className={`${theme.subtext} bg-purple-500/10 px-3 py-1 rounded-full inline-block mb-2`}>{edu.period}</p>
                  <p className="text-purple-400 font-semibold">GPA: {edu.gpa}</p>
                </div>
              </div>
              <div className="space-y-2">
                {edu.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <Award className="w-4 h-4 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                    <p className={`text-sm ${theme.subtext}`}>{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection({ id, theme, portfolioData }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section ref={ref} id={id} className={`py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</h2>
        <p className={`${theme.subtext} text-lg mb-8`}>
          I'm always interested in hearing about new opportunities, projects, or just chatting about data!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a href={`mailto:${portfolioData.email}`} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-all flex items-center justify-center space-x-2 shadow-lg hover:scale-105 transform">
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>
          <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all flex items-center justify-center space-x-2 hover:scale-105 transform">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-purple-400 transition-all hover:scale-125 transform">
            <Github className="w-8 h-8" />
          </a>
          <a href={`mailto:${portfolioData.email}`} className="text-slate-400 hover:text-blue-400 transition-all hover:scale-125 transform">
            <Mail className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
}