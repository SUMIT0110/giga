import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  benefitImage6,
  benefitImage7,
  benefitImage8,
  benefitImage9,
  benefitImage10,
  benefitImage11,

  benefitCard1,
  benefitCard2,
  benefitCard3,
  benefitCard4,
  benefitCard5, 
  benefitCard6,

  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,

  mongo,
  express,
  react,
  node,


  Figma,
  github,
  tensor,
  mathlab,

  llm,


  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,

  service3,

  icon_inst,
  icon_face,
  icon_tele,
  icon_link,
  icon_x,

  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  

} from "../assets";



export const Work = [
  {
    imgSrc: project1,
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: '#'
  },
  {
    imgSrc: project2,
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: '#'
  },
  {
    imgSrc: project3,
    title: 'Recipe app',
    tags: ['Development', 'API'],
    projectLink: '#'
  },
  {
    imgSrc: project4,
    title: 'Real state website',
    tags: ['Web-design', 'Development'],
    projectLink: '#'
  },
  {
    imgSrc: project5,
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: '#'
  },
  {
    imgSrc: project6,
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: '#'
  },
];




export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "Services",
    url: "#Services",
  },
  {
    id: "2",
    title: "Project",
    url: "#roadmap",
  },
  {
    id: "3",
    title: "Contact",
    url: "#footer",
  },
  
];

export const heroIcons = [mongo, express, react, node];

export const heroIcons1 = [Figma, github, tensor,  mathlab];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "LLM (Large Language Model)",
    text: "We are developing AI models based on Sanskrit's structured grammar to enhance accuracy in NLP tasks, generating precise outputs in English while leveraging Sanskrit's linguistic rules.",
    date: "May 2025",
    status: "progress",
    imageUrl: llm,
    colorful: true,
  },
  {
    id: "1",
    title: "E-Commerce",
    text: "Developing a robust and user-friendly e-commerce platform with seamless navigation and secure transactions. Enhancing performance, scalability, and user experience for a smooth online shopping journey.",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap2,
    colorful: true,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "Feb 2025",
    status: "done",
    imageUrl: roadmap3,
    colorful: true,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2025",
    status: "progress",
    imageUrl: roadmap4,
    colorful: true,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];
export const benefits = [
  {
    id: "0",
    title: "Web Development",
    text: "Create modern, responsive, and SEO-friendly websites tailored to businesses and personal brands.",
    backgroundUrl: benefitCard1,
    iconUrl: benefitImage6,
    imageUrl: service3,
    head_1: "Web Development Process",
    process: [
      { stage: "Requirement Gathering & Analysis", description: "Understand project scope, goals, and target audience." },
      { stage: "Planning & Strategy", description: "Create a roadmap, define technology stack, and allocate resources." },
      { stage: "Design Phase", description: "Create wireframes and prototypes, focus on UI/UX design." },
      { stage: "Development Phase", description: "Build front-end (HTML, CSS, JS) and back-end (server, database)." },
      { stage: "Testing & Quality Assurance", description: "Ensure functionality, performance, security, and cross-browser compatibility." },
      { stage: "Deployment", description: "Deploy to live server, set up domain, and ensure mobile responsiveness." },
      { stage: "SEO Optimization", description: "Optimize site for search engines with proper tags, URLs, and content." },
      { stage: "Launch & Post-Launch Support", description: "Monitor performance, fix bugs, and gather user feedback." },
      { stage: "Maintenance & Optimization", description: "Regular updates, security patches, and performance enhancements." }
    ]
  },
  {
    id: "1",
    title: "App Development",
    text: "Build high-performance mobile and web apps with intuitive UI/UX and cross-platform compatibility.",
    backgroundUrl: benefitCard2,
    iconUrl: benefitImage7,
    imageUrl: benefitImage2,
    light: true,
    head_1: "App Development Process",
    process: [
      { stage: "Requirement Gathering & Analysis", description: "Understand project scope, goals, and target audience." },
      { stage: "Planning & Strategy", description: "Create a roadmap, define technology stack, and allocate resources." },
      { stage: "Design Phase", description: "Create wireframes and prototypes, focus on UI/UX design." },
      { stage: "Development Phase", description: "Build front-end (HTML, CSS, JS) and back-end (server, database)." },
      { stage: "Testing & Quality Assurance", description: "Ensure functionality, performance, security, and cross-browser compatibility." },
      { stage: "Deployment", description: "Deploy to live server, set up domain, and ensure mobile responsiveness." },
      { stage: "SEO Optimization", description: "Optimize site for search engines with proper tags, URLs, and content." },
      { stage: "Launch & Post-Launch Support", description: "Monitor performance, fix bugs, and gather user feedback." },
      { stage: "Maintenance & Optimization", description: "Regular updates, security patches, and performance enhancements." }
    ]
  },
  {
    id: "2",
    title: "Data Science & Analytics",
    text: "Extract actionable insights from data using predictive analytics, visualization, and business intelligence.",
    backgroundUrl: benefitCard3,
    iconUrl: benefitImage8,
    imageUrl: service3,
    head_1: "Data Science & Analytics Process",
    process: [
      { stage: "Problem Definition", description: "Identify business problems and determine how data can solve them." },
      { stage: "Data Collection", description: "Gather data from various sources like databases, APIs, and surveys." },
      { stage: "Data Cleaning & Preprocessing", description: "Clean, filter, and preprocess raw data for analysis." },
      { stage: "Exploratory Data Analysis (EDA)", description: "Analyze data patterns, trends, and outliers using statistical methods." },
      { stage: "Model Building", description: "Use machine learning algorithms to build predictive models." },
      { stage: "Model Evaluation", description: "Evaluate model performance using metrics like accuracy, precision, and recall." },
      { stage: "Data Visualization", description: "Visualize data insights using graphs, charts, and dashboards for better understanding." },
      { stage: "Deployment", description: "Deploy the model into production systems for real-time analysis or decision-making." },
      { stage: "Monitoring & Maintenance", description: "Monitor model performance and retrain as necessary to ensure optimal performance." }
    ]
  },
  {
    id: "3",
    title: "AI & Machine Learning Solutions",
    text: "Develop AI-powered solutions like recommendation systems, fraud detection, and automation models.",
    backgroundUrl: benefitCard4,
    iconUrl: benefitImage9,
    imageUrl: benefitImage2,
    light: true,
    head_1: "AI & Machine Learning Process",
    process: [
      { stage: "Problem Identification", description: "Identify business problems that AI/ML can solve." },
      { stage: "Data Collection", description: "Gather and prepare data for training AI models." },
      { stage: "Model Selection & Training", description: "Choose the right machine learning model and train it on the data." },
      { stage: "Model Evaluation", description: "Evaluate model performance using various metrics like precision, recall, and F1 score." },
      { stage: "Deployment", description: "Deploy the trained model into production for real-time predictions." },
      { stage: "Monitoring & Optimization", description: "Monitor the performance of the deployed model and optimize it for better results." },
      { stage: "Continuous Learning", description: "Implement feedback loops and retrain the model with new data to improve accuracy." }
    ]
  },
  {
    id: "4",
    title: "Chatbots & Virtual Assistants",
    text: "Automate customer interactions with intelligent chatbots and AI-driven virtual assistants for various industries.",
    backgroundUrl: benefitCard5,
    iconUrl: benefitImage10,
    imageUrl: service3,
    head_1: "Chatbot Development Process",
    process: [
      { stage: "Requirement Analysis", description: "Identify the needs and goals of the chatbot or virtual assistant." },
      { stage: "Designing Conversations", description: "Design the conversational flow and user intents for interaction." },
      { stage: "Platform Selection", description: "Choose the right platform and tools to build the chatbot (e.g., Messenger, WhatsApp)." },
      { stage: "Development", description: "Develop the chatbot with natural language processing (NLP) capabilities." },
      { stage: "Testing", description: "Test the chatbot for accuracy, response time, and handling diverse inputs." },
      { stage: "Deployment", description: "Deploy the chatbot across channels (e.g., websites, apps, social media)." },
      { stage: "Monitoring & Optimization", description: "Monitor chatbot performance and improve with user feedback and analytics." }
    ]
  },
  {
    id: "5",
    title: "Digital Marketing",
    text: "Boost online presence with SEO, social media marketing, paid ads, content creation, and branding strategies.",
    backgroundUrl: benefitCard6,
    iconUrl: benefitImage11,
    imageUrl: benefitImage2,
    head_1: "Digital Marketing Process",
    process: [
      { stage: "Market Research", description: "Identify target audience, competitors, and industry trends." },
      { stage: "SEO Strategy", description: "Develop an SEO strategy to improve organic traffic and search engine rankings." },
      { stage: "Content Creation", description: "Create engaging and valuable content for blogs, social media, and ads." },
      { stage: "Social Media Marketing", description: "Promote brand through social media platforms, build engagement, and foster community." },
      { stage: "Paid Advertising", description: "Run targeted paid ads on platforms like Google, Facebook, and Instagram." },
      { stage: "Analytics & Reporting", description: "Track performance through analytics tools, adjust strategies based on data." },
      { stage: "Continuous Improvement", description: "Refine marketing strategies based on feedback and performance metrics." }
    ]
  },
];




export const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9,
    name: "Casey Harper",
    username: "@casey09",
  },
];





export const faqs_items = [
  {
    question: "What services does your startup offer?",
    answer: "We specialize in web development, app development (both iOS and Android), and AI integration to create innovative, scalable, and user-friendly solutions tailored to your business needs.",

  },
  {
    question: "How can AI integration benefit my business?",
    answer: "AI can automate repetitive tasks, enhance decision-making with data-driven insights, improve customer experiences with chatbots, and personalize services to boost engagement and efficiency.",

  },
  {
    question: "Do you work with startups or established businesses?",
    answer: "We work with businesses of all sizes, from startups looking to build their first platform to established enterprises aiming to enhance their digital capabilities.",

  },
  {
    question: "How long does it take to develop a web or mobile application?",
    answer: "The timeline depends on the project's complexity and requirements. A basic application may take 4–8 weeks, while more complex solutions can take several months.",

  },
];




export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: icon_inst,
    link: "https://www.instagram.com/giganxtsolutions/",
  },
  {
    id: "social-media-2",
    icon: icon_face,
    link: "https://www.facebook.com/people/Giganxt-Solutions/61573524953182/",
  },
  {
    id: "social-media-3",
    icon: icon_x,
    link: "https://x.com/giganxtsolution",
  },
  {
    id: "social-media-4",
    icon: icon_link,
    link: "https://www.linkedin.com/company/giganxt-solutions",
  },
];





