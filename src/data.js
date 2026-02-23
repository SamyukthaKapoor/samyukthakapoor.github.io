export const portfolioData = {
    name: "Samyuktha Kapoor",
    role: "Data Systems & ML Engineer",
    location: "Boston, MA",
    email: "rajeshkapoor.s@northeastern.edu",
    links: {
        linkedin: "https://www.linkedin.com/in/samyukthakapoor/",
        github: "https://github.com/SamyukthaKapoor",
        portfolio: "https://samyukthakapoor.github.io",
        resume: "/resume.pdf"
    },
    bio: "I’ve always been driven by a curiosity for how information flows and transforms within a system. For me, building a data pipeline is about more than just moving bits; it’s about designing the invisible foundation that makes everything else work. I love the challenge of taking messy data and turning it into something reliable and clear—it’s like solving a puzzle that has real consequences. Whether I’m helping doctors detect health issues earlier or assisting businesses in making better investments, I use data as a way to find concrete answers to difficult questions. I enjoy the process of making complex systems scale because I know that a well-built pipeline can empower people to make better decisions every single day. I believe that when we treat data with precision and intent, it becomes our most powerful tool for meaningful change.",
    detailedBio: "My technical journey is centered on the intersection of large-scale data systems and advanced analytics. Currently, at Northeastern University, I am developing AI-driven solutions that leverage convolutional neural networks and brain signal analysis for next-generation diagnostics. Beyond my research, I have engineered data infrastructure at the Massachusetts Clean Energy Center, where I designed Power BI solutions and SQL-automated ETL workflows to monitor $M+ green energy investments. I am proficient in the Modern Data Stack—from Snowflake and dbt to Airflow and Docker—ensuring that every pipeline is as resilient as it is insightful."
};

export const skills = [
    {
        category: "Languages",
        items: ["Python", "Pandas", "Scikit-Learn", "TensorFlow", "PyTorch", "SQL", "R"]
    },
    {
        category: "Data Systems",
        items: ["Apache Airflow", "Docker", "Snowflake", "dbt", "PySpark", "Git"]
    },
    {
        category: "Cloud & Analytics",
        items: ["AWS (Lambda, Glue, Athena)", "GCP", "PostgreSQL", "MongoDB", "Power BI", "Tableau"]
    },
    {
        category: "Specialized Tools",
        items: ["Claude Code", "Agentic AI", "ArcGIS"]
    }
];

export const projects = [
    {
        title: "YouTube Lifecycle Metrics ETL",
        description: "Designed a serverless AWS ETL pipeline processing 10 million YouTube metrics. The system increased view duration by 18% through better data accessibility.",
        tech: ["AWS", "Lambda", "Glue", "Athena"],
        impact: "10M+ Metrics Processed",
        link: "https://github.com/SamyukthaKapoor/YouTube-Insight-Hub",
        isGithub: true,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "Snowflake Enterprise Warehouse",
        description: "Created a Snowflake data warehouse integrating four HR systems. This architecture identified $2M in potential cost savings for the organization.",
        tech: ["Snowflake", "PostgreSQL", "ETL", "Star Schema"],
        impact: "$2M Cost Savings Identified",
        link: "https://github.com/SamyukthaKapoor/Payroll-Management-System",
        isGithub: true,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "Audiobook Intelligence Platform",
        description: "Built an MLOps pipeline for audiobook search using Apache Airflow and Docker. This project earned 3rd place at the Google Cambridge demo day.",
        tech: ["Apache Airflow", "Docker", "Python"],
        impact: "3rd Place at Google Cambridge Demo Day",
        link: "https://github.com/SamyukthaKapoor/AudioSeek",
        isGithub: true,
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "Breast Cancer Diagnostic Research",
        description: "Published research on AI-based workflows for breast cancer detection. I focused on developing high-accuracy classification models that reduce false negatives in early diagnostics, ensuring that experimental ML research translates into reliable clinical decision support systems.",
        tech: ["Python", "ML", "Research", "Diagnostics"],
        impact: "97% Validation Accuracy",
        link: "https://irojournals.com/iroiip/article/view/5/2/3",
        isGithub: false,
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "MBTA Data Storytelling",
        description: "Data stories revealing transportation planning operations, supporting data-driven decision making with interactive user stories.",
        tech: ["Data Visualization", "Storytelling", "Python"],
        impact: "Actionable Insights",
        link: "https://github.com/SamyukthaKapoor",
        isGithub: true,
        image: "/project-images/massdot.png"
    },
    {
        title: "Medical Waste Segregation AI",
        description: "Two-stage CNN model using MobileNetV2 for classifying medical waste into clinical categories with a Streamlit interface.",
        tech: ["Python", "Keras", "TensorFlow", "Streamlit"],
        impact: "Clinical Reliability Focused",
        link: "https://github.com/SamyukthaKapoor/medical-waste-segregation",
        isGithub: true,
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "Predictive Churn Management",
        description: "Developed churn prediction models using SVM and gradient boosting to optimize accuracy in customer retention strategies.",
        tech: ["Python", "SVM", "Gradient Boosting"],
        impact: "Retention Optimization",
        link: "https://github.com/SamyukthaKapoor/Predictive-churn-Management",
        isGithub: true,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "Cloud Kitchen Data Management",
        description: "Database design and implementation for a cloud kitchen environment, enabling flexible queries and inventory analytics.",
        tech: ["SQL", "NoSQL", "Database Design"],
        impact: "Flexible Data Architecture",
        link: "https://github.com/SamyukthaKapoor/Cloud-Kitchen-Data-Management",
        isGithub: true,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "Boston Airbnb Analytics",
        description: "Tableau dashboard analyzing 3,000 listings to uncover pricing trends and neighborhood dynamics in the Boston area.",
        tech: ["Tableau", "Python", "Data Analysis"],
        impact: "15% Revenue Potential Found",
        link: "https://public.tableau.com/app/profile/samyuktha.kapoor/viz/BostonAirbnbDashboard_17036223994450/Dashboard1",
        isGithub: false,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=2000"
    },
    {
        title: "Environmental Sustainability Visualizer",
        description: "Interactive Power BI dashboard for powerplant environmental assessment and sustainability enhancement.",
        tech: ["Power BI", "Python", "Sustainability"],
        impact: "Actionable Insights Generated",
        link: "https://github.com/SamyukthaKapoor/Sustainable-Energy-Health-Visualizer",
        isGithub: true,
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=2000"
    }
];

export const experience = [
    {
        role: "Data Science Research Assistant",
        company: "Northeastern University",
        period: "Sep 2025 - Present",
        location: "Boston, MA",
        logoType: "research",
        impactToken: "CNN_SOTA",
        achievements: [
            "Developing binary classification models for visual evoked potential (VEP) analysis to detect vision field defects using PyTorch and CNNs.",
            "Building ML pipeline with data augmentation strategies and leave-one-subject-out cross-validation.",
            "Leveraging Claude Code agents to accelerate development and clinical reliability testing."
        ]
    },
    {
        role: "Data and Business Analyst",
        company: "Massachusetts Clean Energy Center",
        period: "Jan 2025 - Sep 2025",
        location: "Boston, MA",
        logoType: "energy",
        impactToken: "$M+_ALLOC",
        achievements: [
            "Built automated Power BI dashboards with DAX frameworks, elimination reporting bottlenecks and enabling real-time monitoring.",
            "Designed impact analytics infrastructure that informed million dollar reallocation decisions toward renewable energy initiatives.",
            "Automated SQL-based data quality checks and ETL workflows, reducing errors by 30%.",
            "Standardized data collection processes for renewable energy tracking across project sites."
        ]
    },
    {
        role: "Graduate Teaching Assistant",
        company: "Northeastern University",
        period: "Apr 2024 - Dec 2024",
        location: "Boston, MA",
        achievements: [
            "Instructed 45+ graduate students in data mining algorithms including Random Forests, SVM, and K-means clustering using scikit-learn."
        ]
    },
    {
        role: "Data Engineer",
        company: "Rudra Enterprises",
        period: "Aug 2022 - Aug 2023",
        location: "Remote",
        logoType: "database",
        impactToken: "$250K_RECOV",
        achievements: [
            "Analyzed 85 product lines on Oracle Systems, identifying underperforming SKUs that reduced stockouts by 38% and recovered $250K.",
            "Built customer segmentation models in Python improving retention from 31% to 38% through targeted campaigns.",
            "Designed Tableau dashboards with SQL pipelines visualizing sales trends across 15+ regional markets."
        ]
    },
    {
        role: "Data Science Intern",
        company: "Corizo",
        period: "Nov 2022 - Jan 2023",
        achievements: [
            "Implemented advanced ML algorithms like SVM and Gradient Boosting, delivering insights that improved forecasting accuracy by 25%."
        ]
    },
    {
        role: "Machine Learning Intern",
        company: "IIT Kanpur",
        period: "Nov 2021 - Jan 2022",
        achievements: [
            "Engineered data preprocessing pipeline for 10,000 histopathology images using Pandas and NumPy.",
            "Implemented quality checks that enabled a CNN model achieving 97% validation accuracy."
        ]
    }
];

export const education = [
    {
        degree: "Master of Science, Data Analytics Engineering",
        school: "Northeastern University",
        period: "2023 - 2025",
        gpa: "3.8"
    },
    {
        degree: "Bachelor of Engineering, Electrical & AI",
        school: "Anna University",
        period: "2019 - 2023",
        gpa: "3.7"
    }
];

export const publications = [
    {
        title: "Deep Learning based Breast Cancer Diagnostic System",
        type: "Journal Publication",
        venue: "Journal of Innovative Image Processing",
        date: "2023",
        link: "https://irojournals.com/iroiip/article/view/5/2/3",
        description: "97% validation accuracy achieved through rigorous feature extraction."
    },
    {
        title: "Application of Artificial Intelligence in Breast Cancer Diagnostics",
        type: "Book Chapter",
        venue: "CRC Press",
        date: "2025",
        link: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003508595-9",
        description: "Comprehensive review of AI algorithms used in clinical diagnostics."
    }
];

export const communities = [
    {
        name: "Women in AI",
        logo: "/community-images/women-in-ai.jpg",
        description: "Advocating for inclusive machine learning workflows and mentoring next-gen researchers. I actively participate in global summits and regional workshops to promote gender diversity in technical leadership, focusing on removing algorithmic bias from automated decision systems."
    },
    {
        name: "Snowflake BUILD",
        logo: "/community-images/snowflake.jpg",
        description: "Deep-diving into cloud data warehousing architectures and scalable ETL optimization. Through the Snowflake community, I explore advanced data sharing patterns and dbt-driven transformations to optimize cost-to-performance ratios for multi-terabyte datasets."
    },
    {
        name: "AWS User Group",
        logo: "/community-images/aws-usergroup.jpg",
        description: "Collaborating on serverless solutions and cloud-native architecture for high-throughput systems. My involvement focuses on leveraging AWS Glue and Lambda for event-driven processing, ensuring that data availability scales seamlessly with organizational growth."
    },
    {
        name: "QuickSight Community",
        logo: "/community-images/quicksight.jpg",
        description: "Mastering advanced visual analytics and automated insight generation for enterprise scaling. I focus on building self-service BI environments that empower stakeholders to query complex data models through intuitive, high-performance dashboards."
    }
];

export const aboutImages = [
    {
        url: "/about-images/neu-life.jpg",
        title: "The Northeastern Journey",
        caption: "Northeastern isn’t just where I study—it’s where I’ve learned to think like an engineer. Walking through Snell Quad or sitting in the research lab, I’m constantly reminded of why I chose this path: to build systems that solve real problems. My master’s in Data Analytics Engineering has been a journey through some of the most complex puzzles I’ve ever faced, from brain signal analysis to clinical diagnostics. Every lecture and every long night in the lab has been a step toward making better, more reliable technology a reality."
    },
    {
        url: "/about-images/matcha.jpg",
        title: "The Quiet Before the Solve",
        caption: "Every major breakthrough usually starts with a quiet moment. For me, it’s a cup of matcha. There’s something about the focus it brings that helps me see through the messy code of a long project. I’ve spent countless nights at this desk, with my favorite tea by my side, wrestling with a pipeline that won’t scale or a model that isn’t quite accurate yet. These are the moments where the real work happens—not in the highlight reels, but in the steady, focused persistence of a quiet night."
    },
    {
        url: "/about-images/workspace.jpg",
        title: "My Workspace",
        caption: "My workspace is where I bridge the gap between abstract math and tangible impact. It’s organized, because I believe a clear space leads to clear logic. This is where the systems on this site were born—where I sketched out ETL workflows on my monitor and debugged ML scripts until they were perfect. It’s more than just a desk; it’s my personal laboratory where I get to experiment, fail, and eventually succeed in building something that matters."
    },
    {
        url: "/about-images/dashboard.jpg",
        title: "Seeing the Impact",
        caption: "At the end of the day, all the code and data must amount to something real. Seeing a dashboard go live and seeing it actually inform a decision is the most rewarding part of my work. This visual represents a project where I helped monitor clean energy investments—it's a reminder that behind every data point is a real-world consequence. It’s what keeps me motivated to keep building, keep optimizing, and keep telling stories through data."
    }
];
export const communityInterests = [
    { title: "Inclusive AI", description: "Advocating for diversity in machine learning through Women in AI and local tech meetups." },
    { title: "Data Storytelling", description: "Sharing the 'why' behind the numbers through visual analytics and public dashboards." },
    { title: "Sustainable Tech", description: "Leveraging data to drive reallocation of resources toward renewable energy initiatives." },
    { title: "Mentorship", description: "Guiding graduate students through the complexities of data mining and career transitions." }
];
