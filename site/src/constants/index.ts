// constants/index.ts

// ---------- Types ----------
export interface Tag {
  id: number;
  name: string;
  path: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  logo: string;
  image: string;
  tags: Tag[];
}

export interface Social {
  name: string;
  href: string;
  icon: string;
}

export interface ContentItem {
  type: "header" | "point" | "spacer";
  text?: string;
}

export interface Experience {
  title: string;
  job: string;
  date: string;
  contents: ContentItem[];
}


export interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

// ---------- Data ----------
export const myProjects: Project[] = [
  {
    id: 1,
    title: "Automated Portfolio Deployment (DevOps Pipeline)",
    description:
      "Custom File Storage Application",
    subDescription: [
      "●	Designed and implemented a complete CI/CD pipeline for my personal web portfolio using GitHub Actions, Docker, and Vercel.",
      "●	The workflow automatically builds, containerizes, and deploys the latest version of the portfolio whenever I push changes to GitHub.",
      "●	The system includes secure Docker Hub integration with secret tokens and automated production deployment to Vercel.",
      "•	This setup demonstrates practical experience with continuous integration, Docker image management, and automated cloud deployment in a real-world environment.",
    ],
    href: "https://github.com/Khez16/DIGIBOX-Custom-File-Storage-System-",
    logo: "",
    image: "/assets/projects/DigiBox.png",
    tags: [
      { id: 1, name: "Github", path: "/assets/logos/Github.png" }, //Change the assets logo to python
      { id: 2, name: "Docker", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Node.js", path: "/assets/logos/HTML.png" },
      { id: 4, name: "Vercel", path: "/assets/logos/tailwindcss.svg" },
      { id: 5, name: "YAML", path: "/assets/logos/tailwindcss.svg" },
      { id: 6, name: "CI/CD", path: "/assets/logos/tailwindcss.svg" },  
    ],
  },
  {
    id: 2,
    title: "Digibox",
    description:
      "Custom File Storage Application",
    subDescription: [
      "●	Built core UI components (sidebar, trash, dropdowns) and integrated routing/navigation.",
      "●	Implemented file operations (upload, rename, download, delete, restore)..",
      "●	Delivered a responsive, user-friendly interface with clean layouts and icon libraries.",
      "•	Collaborated in a 5-person team, using Git workflows to manage version control and contributions",
    ],
    href: "https://github.com/Khez16/DIGIBOX-Custom-File-Storage-System-",
    logo: "",
    image: "/assets/projects/DigiBox.png",
    tags: [
      { id: 1, name: "TypeScript", path: "/assets/logos/Typescript.png" }, //Change the assets logo to python
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "HTML", path: "/assets/logos/HTML.png" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "Unreal Engine Game",
    description:
      "Solo developing a single-player game with advanced mechanics, including cover, inventory, weapon, and movement systems.",
    subDescription: [
      "●	Designed a Game Design Document to streamline and expedite development.",
      "●	Implemented player character equipment, featuring a rifle with ray tracing for hit detection and damage, and a bow and arrow with sound effects and a crosshair.",
      "●	Developed a sophisticated enemy system with two types of enemies with multiple senses, utilizing different behavior tree classes with inheritance through blueprint logic.",
      "●	Designed a Game Design Document to streamline and expedite development.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/GameWorld.png",
    tags: [
      { id: 1, name: "C++", path: "/assets/logos/cplusplus.svg" },
      { id: 2, name: "Unreal Engine", path: "/assets/logos/Unreal Engine.png" },
      { id: 3, name: "Unreal Blueprints", path: "/assets/logos/Unreal Engine.png" },
      { id: 4, name: "Unreal Editor", path: "/assets/logos/Unreal Engine.png" },
    ],
  },
  {
    id: 4,
    title: "Causes of Death - Research",
    description:
      "Exploratory Data Analysis.",
    subDescription: [
      "●	Analyzed and visualized a comprehensive dataset of 17,000+ records on leading death causes globally from 1990 to 2019, identifying which diseases caused the most deaths over this 29-year period, seeing which diseases affected certain countries more than others. ",
      "●	Cleaned and preprocessed the dataset by removing duplicates, handling missing data, and improving column naming conventions for clearer analysis, improving data reliability and readability.",
      "●	Utilized Python libraries such as Pandas for data manipulation, Matplotlib and Seaborn for data visualization, and Jupyter Notebooks for interactive analysis and presentation of findings.",
    ],
    href: "https://moez-research-causes-of-death.streamlit.app/",
    logo: "",
    image: "/assets/projects/Research.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/Python.png" }, //Change the assets logo to python
      { id: 2, name: "Streamlit", path: "/assets/logos/Streamlit.png" },
      { id: 2, name: "Pandas", path: "/assets/logos/Pandas.png" },
      { id: 3, name: "Seaborn", path: "/assets/logos/Seaborn.png" },
      { id: 4, name: "matplotlib", path: "/assets/logos/Python.png" },
    ],
  },
  {
    id: 5,
    title: "Arcade Game",
    description:
      "UI/UX + real-time features project.",
    subDescription: [
      "●	Built a browser-based multiplayer Rock, Paper, Scissors game with an 8-bit arcade theme. ",
      "●	A multiplayer web app with routing, state management, chat, and API experimentation.",
      "●	Designed and implemented a retro 8-bit arcade theme with consistent typography, colors, and borders.",
      "●	Built a clear navigation flow (homepage → player selection → game screen → about page).",
      "●	Implementing routing/navigation to manage different game modes and pages.",
      "●	Managing state and UI updates for player turns, scores, and game flow.",
    ],
    href: "https://github.com/Khez16/Arcade-Games",
    logo: "",
    image: "/assets/projects/Arcade Game.png",
    tags: [
      { id: 1, name: "HTML", path: "/assets/logos/HTML.png" }, //Change the assets logo to python
      { id: 2, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "Java", path: "/assets/logos/Java.png" },
      { id: 4, name: "CSS", path: "/assets/logos/css3.svg" },
    ],
  },
];

export const mySocials: Social[] = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/moezk/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Github",
    href: "https://github.com/Khez16",
    icon: "/assets/socials/Github.png",
  },
];

export const experiences: Experience[] = [
  {
    title: "Cybersecurity & IT Intern",
    job: "Professional Engineers Ontario (PEO)",
    date: "May 2025 - August 2025",
   contents: [
  { type: "header", text: "CYBERSECURITY RESPONSIBILITIES:" },
  { type: "point", text: "Monitored threat intelligence feeds to identify vulnerabilities and emerging threats impacting company systems." },
  { type: "point", text: "Researched and documented recent threat trends using sources like Feedly, VirusTotal, and JoeSandbox." },
  { type: "point", text: "Investigated and responded to active phishing incidents; collaborated with eSentire to remediate compromised endpoints." },
  { type: "point", text: "Monitored and escalated security alerts using SentinelOne and Microsoft Defender." },
  { type: "point", text: "Maintained cybersecurity bulletin board and threat tracker for IT team visibility." },
  { type: "point", text: "Contributed to security operations aligned with CompTIA Security+ principles" },

  { type: "spacer" },
  { type: "header", text: "IT RESPONSIBILITIES:" },
  { type: "point", text: "Provided help desk support: triaged and resolved IT support tickets, assigned tasks, and scheduled on-site support." },
  { type: "point", text: "Set up and configured laptops and company-approved software for new hires." },
  { type: "point", text: "Deployed and configured mobile devices; assisted users with account setups and technical issues." }, 
  { type: "point", text: "Supported remote connectivity by assisting users in connecting to company devices securely." }, 
  { type: "point", text: "Migrated employee data from personal OneDrive accounts to company NAS for secure archiving." }, 
  { type: "point", text: "Tracked and documented company-issued devices used for remote work." }, 
  { type: "point", text: "Reorganized and optimized server room and IT storage for efficiency." },
  
]
  },
  {
    title: "Cybersecurity and IT Network Analyst",
    job: "Firan Technology Group Corporation (FTG)",
    date: "May 2024 - August 2024",
    contents: [
      { type: "point", text: "Developed Comprehensive Network Cabling Maps." },
      { type: "point", text: "Identified network segments for different divisions, tested VLAN access, and configured routing for both DHCP/DNS and static IP addresses." },
      { type: "point", text: "Assigned switch ports to specific VLANs, reconfigured equipment and machines to align with updated VLAN settings, and implemented new VLANS to enhance network security." },
      { type: "point", text: "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks." },
      { type: "point", text: "Assisted the LAN administrator with daily network management tasks, including creating and adjusting VLANs to improve security and performance." },
      
    ],
  },
  {
    title: "Programming Team Member",
    job: "Ontario Tech RoboMaster",
    date: "Sept 2023 - June 2024",
    contents: [
      { type: "point", text: "Developed C++ computer vision algorithms to enhance navigation and functionality."},
      { type: "point", text: "Collaborated with teammates to integrate and debug code with real-time hardware systems."},

    ],
  },
];

export const reviews: Review[] = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
