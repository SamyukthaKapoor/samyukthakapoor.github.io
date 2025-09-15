const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'VS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Varun Rishwandh Sekar',
  role: "Grad Student at ",
  description:"Hi! I'm pursuing Master's in Computer Science at Northeastern University. I have a professional experience of over 15 months in software development. I'm an innovative thinker, a problem solver and I'm skilled in building apps using Java, Python, JS.",
  resume: 'https://drive.google.com/file/d/1jfTq0LbnFmSZ5r7YgQcXiurNBPPfm6Ck/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/varunrishwandh/',
    github: 'https://github.com/vaarunx',
    leetcode: "https://leetcode.com/u/vaarunx/"
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Real-Time Content Filtering',
    description:
      'A cross-browser extension that redacts or blurs NSFW content in the form of images and text displayed in the website. This is achieved by scraping the content and sending the content to an ExpressJS server where the content is passed onto a classifier model to determine if the content is Safe or NSFW.',
    stack: ["Javascript", "Flask", "ExpressJS", "Transformers", "CNN", "Azure"],
    sourceCode: 'https://github.com/vaarunx/realtime-censorship',
  },
  {
    name: 'Web-app to share Cooking recipes',
    description:
      'Designed and developed a Recipe sharing and food media platform for users to store and share recipes. Added CRUD operations and allowed the users to either share the recipes either publicly or to privately store them. Implemented an email authentication system and the ability to reset passwords through OTPs',
    stack: ["Python" , "Django" , "MySQL", "HTML", "CSS", "Javascript"],
    sourceCode: 'https://github.com/vaarunx/CookingApp',
  },
  {
    name: 'Popularity Sentiment Index of World Leaders',
    description:
      'This project serves as a comparison of select rank world leaders based on popular opinion through popular reddit threads by using several machine learning models',
    stack: ["Python", "Keras", "MongoDB", "NLP", "Transformers"],
    sourceCode: 'https://github.com/thuhinkhanna/PoliticalLikeability',
  },
  {
    name: 'My Locality!',
    description:
      'Designed and built a web app that gathers the user’s location and presents the nearby attractions or events along with the optimized route and timings from the location using Google API.',
    stack: ["Google Maps API", "Google Events API", "Firebase", "Django", "React"],
    sourceCode: 'https://github.com/vaarunx/mylocality',
  },

  {
    name: 'A Personal News Feed',
    description:
      'Developed a personalized newsletter that presents the top news in various categories and locations. Used news.org’s news API and other news agencies RSS feeds to search for news articles for each category, and stored them in a local database.',
    stack: ["React" , "FastAPI" , "MySQL"],
    sourceCode: 'https://github.com/thuhinkhanna/when-where-what',
  },

]

const publications = [
  {
    name: 'Hybrid Perception Analysis of World Leaders in Reddit using Sentiment Analysis',
    authors: ['Varun Rishwandh Sekar', 'Thuhin Khanna R', 'Suraj N', 'Priya Vijay' ],
    livePreview: 'https://doi.org/10.1109/AICAPS57044.2023.10074005',
    isPublication: true,
    
  }
]

const workExperience = [
  {
    name: 'Software Engineer - I',
    company: "Mr. Cooper",
    work_years: 'May 2023 - Present',
    workExperiencePoints: ["Worked in developing the ruling engine and matching service for an audit application with several queues that compares extracted document data against available system data using text semantic similarity.",
    "Engineered solutions for identifying and converting the orientation of a document in real-time, resulting in 20% reduction in processing errors.",    
    "Reduced the dependency of manual human intervention and increased the efficiency of classifying and extracting select mortgage documents."],
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Graduate Intern',
    company: "Mr. Cooper",
    work_years: 'Nov 2022 - April 2023',

    workExperiencePoints: ["Developed the front-end website of a job portal (Naan Mudhalvan) using NuxtJS for the government of Tamil Nadu, India.", 
      "Trained a CRF model for key information extraction and integrated these models into a Java service for enhanced data processing and page clustering;.",
      "Increased code coverage of various Java and Python components from 0% to over 70% using JUnit and PyTest respectively."],
    // sourceCode: 'https://github.com/funcx-faas/funcX',
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Java Development Intern',
    company: "Ziroh Labs",
    work_years: 'Jan 2022 - March 2022',
    workExperiencePoints: [
      "Designed and developed a Java application to present historical facts based on date and location using Wikimedia and the Bing Search API.",
      "Implemented caching to avoid redundant API calls and secured data storage with 256-bit AES encryption."
    ],
    // sourceCode: 'https://github.com/funcx-faas/funcX',
    isPublication: true,
    isWork: true,
    isEducation: false,
  },
  {
    name: 'Backend Developer Intern',
    company: "Grey Scientific Labs",
    work_years: 'April 2021 - Dec 2021',
    workExperiencePoints: [
      "Developed RESTful APIs using Django Rest Framework for the backend of a hospital management platform including a canvas area where users could annotate and led the development of a passwordless authentication service.",
      "Deployed the backend server in an on-prem server using Proxmox and helped set up the development environment.",
  
    ],
    // sourceCode: 'https://github.com/funcx-faas/funcX',
    isPublication: true,
    isWork: true,
    isEducation: false,
  }


]

const education = [
  {
    name: 'Northeastern University',
    description: "Master's in Computer Science",
    // gpa: "9.04 / 10",
    years: '2024 - Present',
    isPublication: true,
    isEducation: true,
  },
  {
    name: 'Anna University',
    description: 'B.E in Computer Science and Engineering',
    gpa: "9.04 / 10",
    years: '2019 - 2023',
    isPublication: true,
    isEducation: true,
  }
]

const skills = {
  "Python": 90, 
  "Java": 80, 
  "JavaScript": 75,
  "C": 60,
  "SpringBoot": 80,
  "Unit Tests": 80,
  "CSS": 60,
  "HTML": 80,
  "Git": 80,
  "GCP": 80,
  "Azure": 65,
  "Django": 85,
  "FastAPI": 90,
  "Linux": 65,
  "NodeJS": 75,
  "VueJS": 60,
  "PostgreSQL": 80,
  "MySQL": 80,
  "MongoDB": 65,
  "Machine / Deep Learning": 65,
  "Kotlin": 35,
  "Rust": 35
}

// const skills = [
//   // skills can be added or removed
//   // if there are no skills, Skills section won't show up
//   "Java",
//   "Python",
//   "C",
//   "JavaScript",
//   "SpringBoot",
//   "FastAPI",
//   "Flask",
//   "Django",
//   "ReactJS",
//   "VueJS",
//   "ExpressJS",
//   "NodeJS",
//   "Git",
//   "Google Cloud",
//   "Microsoft Azure",
//   ""

// ]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'varunrishwandh10@gmail.com',
}

export { header, about, projects, skills, contact, publications, education, workExperience }
