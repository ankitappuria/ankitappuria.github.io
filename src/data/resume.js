export const personal = {
  name: "Ankita Parasrampuria",
  title: "Senior Staff Engineer",
  tagline: "12+ years crafting scalable web experiences",
  location: "Chennai, India",
  phone: "+91 7405557289",
  email: "ankitappuria@gmail.com",
  linkedin: "https://www.linkedin.com/in/ankita-parasrampuria/",
  github: "https://github.com/ankitappuria",
  summary:
    "Senior Staff Engineer with 12+ years of experience designing and building scalable, high-performance web applications using React, Node.js, and modern JavaScript frameworks. Proven expertise in leading engineering teams, architecting microfrontend and full-stack solutions, and delivering enterprise-grade applications for global clients including PayPal and Citi.",
};

export const experience = [
  {
    company: "Altimetrik",
    role: "Senior Staff Engineer",
    period: "Apr 2021 – Present",
    location: "Chennai, India",
    projects: [
      {
        name: "ProxyEdge — Broadridge Platform",
        highlights: [
          "Designed and delivered scalable, responsive, and accessible form interfaces using React, TypeScript, and Node.js, serving 10,000+ enterprise users across the Broadridge platform",

          "Architected RESTful API integrations between React frontend and Node.js/Express backend, reducing average data-fetch latency by ~30% through efficient payload structuring",

          "Integrated MongoDB with Mongoose for dynamic form data persistence, enabling flexible schema evolution without downtime",

          "Implemented Redux-based state management to handle complex multi-step form workflows, eliminating redundant API calls and improving UI responsiveness",

          "Built robust unit and integration testing frameworks using Jest and Mocha, achieving ~85% code coverage and reducing post-release defects by 40%",

          "Led code reviews for a team of 6 engineers and enforced engineering best practices, cutting PR cycle time from 3 days to under 1 day",

          "Migrated and refactored Vercel-generated code to WSF-compliant architecture, improving maintainability across 15+ modules",

          "Implemented WAI-ARIA standards (aria-label, aria-live), validated with NVDA screen reader, achieving WCAG 2.1 AA compliance",

          "Designed scalable i18n support with dynamic language switching supporting 5+ locales for global enterprise users",

          "Built AI agents using the Claude model to automate code review and generate project documentation, saving ~8 hours/week of manual effort",

          "Optimised CI/CD pipelines using GitLab CI/CD and Docker, reducing deployment time by 25%",

          "Developed internal automation tools for code review and created Copilot instruction files to auto-generate inline comments and unit tests"

        ],
      },
      {
        name: "Citi Multi-Country Client Onboarding Platform",
        highlights: [
          "Architected and scaled microfrontend applications using Module Federation and Webpack 5, supporting 3 independent teams deploying autonomously",

          "Built a reusable React component and validation library for dynamic form handling, reducing code duplication by ~35% across 8 country-specific onboarding flows",

          "Designed and integrated RESTful APIs with Node.js/Express backend for efficient frontend-backend data exchange supporting multi-country regulatory requirements",

          "Leveraged MongoDB for storing flexible onboarding form configurations, enabling country-specific schema variations without codebase changes",

          "Established comprehensive testing strategies using Jest and Mocha across React and Node.js, achieving ~85% coverage across the platform",

          "Led a team of 4 UI engineers — driving performance reviews, mentorship, and technical growth — with zero attrition over 2 years",

          "Managed sprint planning and delivery coordination in Agile/Scrum, consistently achieving on-time delivery across quarterly releases"
        ],
      },
      {
        name: "PayPal – Connect on ICE (OAuth Integration)",
        highlights: [
          "Designed a React-based user consent and authorization interface for OAuth2 account linking, improving conversion rate of the authorization flow by ~20%",

          "Implemented functional testing for GraphQL queries and mutations using Jest, validating permission handling across 50+ test cases",

          "Optimized UI performance via lazy loading, code splitting, and efficient resource management, reducing initial bundle size by ~35%",

          "Streamlined build, test, and deployment workflows by integrating CI/CD pipelines, reducing release cycle time by 30%",

          "Developed backend test suites using Mocha and Nock to mock external APIs, covering 90+ integration scenarios",

          "Built unit testing strategies using Jest snapshot testing, achieving ~85% coverage across React and Node.js components",

          "Designed end-to-end test suites using Cypress covering ~85% of critical user journeys across 3 product lines"
        ],
      },
    ],
  },
  {
    company: "SmarTek21",
    role: "Senior Software Developer",
    period: "Oct 2017 – Mar 2021",
    location: "Chennai, India",
    projects: [
      {
        name: "Video Conferencing Platform (WebRTC-based)",
        highlights: [
          "Integrated Janus WebRTC client for real-time management of local and remote video streams supporting 500+ concurrent users",

          "Developed reusable React component architecture and built a React Native mobile app extending the platform to Android users",

          "Optimized Webpack build configuration for multiple environments, reducing build time by ~40%"
        ],
      },
      {
        name: "BotBuilderWizard — Chatbot Platform",
        highlights: [
          "Engineered scalable Node.js/Express backend services and RESTful APIs for multi-channel chatbot integrations across WhatsApp, Facebook, and web",

          "Built a dynamic drag-and-drop workflow builder using Angular for visual chatbot interaction design",

          "Architected a standalone JWT-based authentication microservice with security middleware (Helmet), reducing unauthorized access incidents to zero",

          "Persisted chatbot conversation state and user data in MongoDB, supporting 10,000+ monthly active chatbot interactions, leveraging WebSocket for real-time communication and Redis for efficient chat caching"
        ],
      },
    ],
  },
  {
    company: "Raksan",
    role: "Software Developer",
    period: "Jun 2016 – Oct 2017",
    location: "Hyderabad, India",
    projects: [
      {
        name: "FieldEagles",
        highlights: [
          "Developed core modules: tour planning, appointment management, reporting, and expense tracking for 200+ field officers",

          "Built real-time and offline data synchronization for low-connectivity environments using Meteor and MongoDB",

          "Integrated Google Maps API for location tracking and route planning, reducing field officer travel time by 15%"
        ],
      },
    ],
  },
  {
    company: "smartData Enterprise Pvt Ltd ",
    role: "Senior Associate",
    period: "Jan 2016 – May 2016",
    location: "Nagpur, India",
    projects: [
      {
        name: "Performance Evaluation Survey System(PESA)",
        highlights: [
          "Developed a full-stack survey management system for agent performance evaluation",
          "Built RESTful APIs and backend services to handle survey workflows and data processing",
          "Designed interactive frontend interfaces using AngularJS for survey creation and reporting",
          "Delivered end-to-end features in a 2-member team, owning both client-side and server-side"
        ],
      },
    ],
  },
  {
    company: "JumpByte",
    role: "Web & Mobile Application Developer",
    period: "Jan 2014 – Jan 2016",
    location: "Surat, India",
    projects: [
      {
        name: "Cross-Platform Development",
        highlights: [
          "Developed cross-platform mobile and web apps using AngularJS, Ionic, Cordova, and Firebase",
          "Integrated third-party services and APIs (Firebase, Shopify, Twilio)",
          "Independently owned full-stack development across multiple startup projects",
        ],
      },
    ],
  },
];

export const skills = {
  Frontend: ["React", "Angular", "TypeScript", "JavaScript (ES6)", "HTML", "CSS"],
  Backend: ["Node.js", "Express", "GraphQL"],
  Databases: ["MongoDB", "PostgreSQL", "SQL Server"],
  Architecture: ["Microfrontends", "Module Federation", "REST APIs"],
  "Cloud & DevOps": ["AWS S3", "EC2", "Docker", "GitLab CI/CD"],
  Testing: ["Jest", "Mocha", "Cypress"],
  Tools: ["Webpack", "GitHub", "JIRA"],
  Practices: ["Agile/Scrum", "TDD", "CI/CD"],
};

export const education = [
  {
    degree: "MSCA – Computer Applications",
    institution: "SRKI, Surat",
    period: "2012 – 2014",
  },
  {
    degree: "BSc – Computer Science",
    institution: "SRKI, Surat",
    period: "2009 – 2012",
  },
];

export const certifications = [
  { name: "Salesforce JavaScript Developer", date: "March 2024" },
  { name: "Python Developer (Basic)", date: "March 2024" },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
