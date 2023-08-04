import { StringKeyValueType } from '../types';
import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  instagram: 'https://www.instagram.com/_vaibhav__mishra_',
  github: 'https://github.com/VaibhavMishra1341',
  linkedin: 'https://www.linkedin.com/in/vaibhav-mishra-vm/',
  codestudio: 'https://www.codingninjas.com/studio/profile/vaibhav_mishra',
  gfg: 'https://auth.geeksforgeeks.org/user/vaibhavc608',
};

export const author = {
  name: 'Vaibhav Mishra',
  email: 'vaibhavc608@gmail.com@gmail.com',
};

export const seoData = {
  title: 'Vaibhav Mishra | Software Development Enthusiast',
  description:
    'Vaibhav Mishra is a front-end developer who specializes in building (and occasionally designing) exceptional visual interfaces, and loves silving challenging problems.',
  author: author.name,
  image:
    'https://user-images.githubusercontent.com/68834718/217467445-0b0d2d63-f8ad-4702-8474-814eb2cbb3be.png',
  url: 'https://vatsalsinghkv.vercel.app/',
  keywords: [
    'Vaibhav',
    'VaibahvMishra1341',
    'Vaibhav Mishra',
    'Portfolio',
    'Vaibhav Portfolio ',
    'Vaibhav Mishra Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Vaibhav Mishra.',
  tagline: 'Passionate Computer Science Senior',
  description:
    'I possess a strong command of Data Structures and Algorithms in C++ and Python, coupled with hands-on Full Stack experience in MERN, reflecting a holistic approach to software craftsmanship.',
  // description:
  //   "I'm a passionate Full Stack web developer having an experience of web  applications with React.js, Next.js and Blockchain development on Ethereum, Solidity and Web3.js.",
  specialText: 'Currently available for a full-time job or an internship',
  // either button or simple text (information)
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'C++',
      'Python',
      'SQL',
      'NextJs',
      'TailwindCSS',
      'ExpressJs',
      'ReactJS',
      'TypeScript',
      'MongoDB',
      'Figma',
    ],
  },
  img: '/vaibhav-mishra.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'C++ Problem Solving',
      lottie: {
        light: '/lotties/Coding12.json',
        dark: '/lotties/Coding12.json',
      },
      points: [
        'Tackling intricate Data Structures and Algorithmic challenges across diverse platforms',
        'Refining problem-solving through diverse optimizations, mastering algorithmic efficiency.',
        'Building Small games like TicTacToe and Rock Paper Scissor in C++',
      ],
      softwareSkills: [
        { name: 'c++', icon: 'vscode-icons:file-type-cpp2' },
        { name: 'leetcode', icon: 'simple-icons:leetcode' },
        { name: 'geeksForGeeks', icon: 'simple-icons:geeksforgeeks' },
        { name: 'hackerrank', icon: 'cib:hackerrank' },
        { name: 'CodeStudio', icon: 'simple-icons:codingninjas' },
      ],
    },
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Multiple Page Apps in React.js',
        'Building RESTful APIs in Express',
        'Building Security features for OTP & Session Management using JS',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'html-5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'python', icon: 'vscode-icons:file-type-python' },
        { name: 'nodejs', icon: 'logos:nodejs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        // { name: 'angularjs', icon: 'logos:angular-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
    {
      id: getId(),
      title: 'UI/UX designing',
      lottie: {
        light: '/lotties/designing.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Experience in designing user-friendly interfaces with figma',
        'Experience in developing design systems and style guides',
        'Providing user-friendly design solutions',
      ],
      softwareSkills: [
        { name: 'figma', icon: 'logos:figma' },
        { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Green Enterprise Institute',
      companyUrl: 'https://greenenterprise.group/',
      role: 'full-stack developer',
      started: 'november 2022',
      upto: 'march 2022',
      tasks: [
        'Worked to create the UI for OPUS using React TypeScript and Tailwind CSS',
        'Managed a team of 3 to complete tasks on time',
        'Designed and built pages like fully-editable profile page using multiple structured Modals',
        'Designed and built components like sidebar with multi-level links & drop-downs and detailed page.',
        "Learned more about sustainability and understood it's application",
        'Held interviews and hired other interns for OPUS',
      ],
    },
    {
      company: 'Green Enterprise Institute',
      companyUrl: 'https://greenenterprise.group/',
      role: 'front-end developer intern',
      started: 'june 2022',
      upto: 'november 2022',
      tasks: [
        "Revamped Organization's website using WordPress",
        'Used beginner HTML, CSS and JavaScript skills to build functional components',
        'Learned to collaborate with various teams, including content,marketing and PR teams',
      ],
    },
    {
      company: 'The Sparks Foundation',
      companyUrl: 'https://www.thesparksfoundationsingapore.org',
      role: 'frontend developer intern',
      started: 'january 2022',
      upto: 'march 2022',
      tasks: [
        'Built a Donation Website for the floods in Bihar and Assam',
        'Integrated payment gateway using Razorpay',
        'Learned about basics of Web Development',
        'Earned a Silver Badge, and celebratory Letter Of Recommendation',
      ],
    },
    {
      company: 'siNUsoid tech-Fest',
      companyUrl:
        'https://niituniversity.in/nu-experience/events-fests/sinusoid',
      role: 'digital design team lead',
      started: 'july 2021',
      upto: 'january 2022',
      tasks: [
        'Managed a team of 7 people to create digital design advertisements creating 1600 imprints',
        'Managed the Instagram, Facebook and LinkedIn promotion of the fest by providing consistent design posts',
        'Made PR Brochures for national level promotion of the event using Adobe Photoshop, Canva and Figma',
      ],
    },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    // {
    //   id: getId(),
    //   name: 'image animations',
    //   url: 'https://image-animations.vercel.app/',
    //   repo: 'https://github.com/vatsalsinghkv/image-animations',
    //   img: 'https://github-production-user-asset-6210df.s3.amazonaws.com/68834718/252267106-857c5341-1106-4e84-b7e6-80a668a20ba8.png',
    //   year: 2023,
    //   tags: ['CSS Animations', 'Sass'],
    // },
    // {
    //   id: getId(),
    //   name: 'fylo landing page',
    //   url: 'https://fylo-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/fylo',
    //   img: 'https://user-images.githubusercontent.com/68834718/212843973-ef864a5a-f393-4901-b422-6f775a043cdb.png',
    //   year: 2023,
    //   tags: ['Html', 'Tailwind', 'TS'],
    // },
    // {
    //   id: getId(),
    //   name: 'remotive jobs',
    //   url: 'https://remotive-jobs.vercel.app/',
    //   repo: 'https://github.com/vatsalsinghkv/remotive-jobs',
    //   img: 'https://user-images.githubusercontent.com/68834718/189035104-aa71647e-33e4-442a-a2f9-c0d50bba2db1.png',
    //   year: 2022,
    //   tags: ['Nextjs', 'Sass'],
    // },
    // {
    //   id: getId(),
    //   name: 'countries app',
    //   url: 'https://countries-app-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/rest-countries-api',
    //   img: 'https://user-images.githubusercontent.com/68834718/169527851-19fefb2e-e440-411a-a8a1-4767e2c8688a.png',
    //   year: 2022,
    //   tags: ['React', 'Sass'],
    // },
    // {
    //   id: getId(),
    //   name: 'rock paper scissors',
    //   url: 'https://rock-paper-scissors-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/rock-paper-scissors',
    //   img: 'https://user-images.githubusercontent.com/68834718/162578706-b9e57735-6fbc-4c7b-8243-2a6ba447404e.jpg',
    //   year: 2022,
    //   tags: ['React', 'Sass'],
    // },
    // {
    //   id: getId(),
    //   name: 'todo app',
    //   url: 'https://todo-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/todo-app',
    //   img: 'https://user-images.githubusercontent.com/68834718/152794002-0e7bc583-084b-4c39-83bb-d82d5dd642b2.png',
    //   year: 2022,
    //   tags: ['React', 'Sass', 'JS'],
    // },
    // {
    //   id: getId(),
    //   name: 'weather app',
    //   url: 'https://weather-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/weather-app',
    //   img: 'https://user-images.githubusercontent.com/68834718/148419702-491fa08d-e520-4e2f-b219-374ec7118b2b.png',
    //   year: 2022,
    //   tags: ['Html', 'sass', 'JS', 'jQuery'],
    // },
    // {
    //   id: getId(),
    //   name: 'blogr landing page',
    //   url: 'https://blogr-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/blogr-landing-page',
    //   img: 'https://user-images.githubusercontent.com/68834718/210222542-6455303d-c93e-430b-a5c8-96a431044184.png',
    //   year: 2021,
    //   tags: ['html', 'sass', 'JS'],
    // },
    // {
    //   id: getId(),
    //   name: 'natours',
    //   url: 'https://natours-kv.netlify.app/',
    //   repo: 'https://github.com/vatsalsinghkv/natours',
    //   img: 'https://user-images.githubusercontent.com/68834718/210223114-b4f64b44-2501-49c9-9fb7-b8e53fe654c6.png',
    //   year: 2021,
    //   tags: ['html', 'sass', 'JS'],
    // },
    // // {
    // //   name: 'nexter',
    // //   url: 'https://vatsalsinghkv.github.io/nexter/',
    // //   repo: 'https://github.com/vatsalsinghkv/nexter',
    // //   img: 'https://user-images.githubusercontent.com/68834718/210224671-5501c5d9-a8d2-4044-a14c-38fb7e46a113.png',
    // //   year: 2021,
    // //   tags: ['html', 'sass'],
    // // },
    // {
    //   id: getId(),
    //   name: 'IP address tracker',
    //   url: 'https://vatsalsinghkv.github.io/ip-address-tracker/',
    //   repo: 'https://github.com/vatsalsinghkv/ip-address-tracker',
    //   img: 'https://user-images.githubusercontent.com/68834718/210223386-03bcaa20-e649-4b3d-8709-59e42c6d685a.png',
    //   year: 2021,
    //   tags: ['html', 'bootstrap', 'JS'],
    // },
    // {
    //   id: getId(),
    //   name: 'calculator app',
    //   url: 'https://vatsalsinghkv.github.io/calculator-app/',
    //   repo: 'https://github.com/vatsalsinghkv/calculator-app/',
    //   img: 'https://user-images.githubusercontent.com/68834718/210223825-3b68d696-39c6-490c-9433-f315b7efccbd.png',
    //   year: 2021,
    //   tags: ['html', 'CSS', 'JS'],
    // },
    // {
    //   id: getId(),
    //   name: 'pig game',
    //   url: 'https://vatsalsinghkv.github.io/pig-game/',
    //   repo: 'https://github.com/vatsalsinghkv/pig-game',
    //   img: 'https://user-images.githubusercontent.com/68834718/210223527-de7fde7a-244e-4db5-8e33-d561afad6084.png',
    //   year: 2021,
    //   tags: ['html', 'CSS', 'JS'],
    // },
    // {
    //   id: getId(),
    //   name: 'bankist marketing',
    //   url: 'https://vatsalsinghkv.github.io/bankist-marketing/',
    //   repo: 'https://github.com/vatsalsinghkv/bankist-marketing',
    //   img: 'https://user-images.githubusercontent.com/68834718/210225545-989f79c3-cf05-4c53-b48e-b21f373b3734.png',
    //   year: 2021,
    //   tags: ['html', 'CSS', 'JS'],
    // },
    // {
    //   id: getId(),
    //   name: 'digital clock',
    //   url: 'https://vatsalsinghkv.github.io/digital-clock/',
    //   repo: 'https://github.com/vatsalsinghkv/digital-clock',
    //   img: 'https://user-images.githubusercontent.com/68834718/210226274-a453ba15-9b83-4577-a84d-e4b88e0a5605.png',
    //   year: 2021,
    //   tags: ['html', 'CSS', 'JS'],
    // },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    'I’m currently looking for a full-time job or any new opportunities.',
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'simple-icons:codingninjas',
      url: socialLinks.codestudio,
    },
    {
      icon: 'simple-icons:geeksforgeeks',
      url: socialLinks.gfg,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design & Built by Vaibhav Mishra',
  link: 'https://github.com/VaibhavMishra1341',
};
