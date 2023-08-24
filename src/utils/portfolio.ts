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
    'https://github.com/VaibhavMishra1341/Digital-Portfolio/assets/39896268/499f78c6-1bcf-4dbe-92ef-acae4cf777fb',
  url: 'https://vaibhav-mishra.vercel.app/',
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
    'I possess a strong command over Data Structures and Algorithms in C++ and Python, coupled with hands-on Full Stack experience in MERN, reflecting a holistic approach to software craftsmanship.',
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
      'R Script',
      'SQL',
      'Hadoop',
      'TailwindCSS',
      'MongoDB',
      'ExpressJs',
      'ReactJS',
      'NodeJS',
      'TypeScript',
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
        { name: 'canva', icon: 'devicon:canva' },
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
      upto: 'march 2023',
      tasks: [
        'Built the User Interface using React TypeScript and Tailwind CSS',
        'Designed and built pages like fully-editable profile page using multiple structured Modals',
        'Designed and built components like sidebar with multi-level links & drop-downs and detailed page.',
        'Gained sustainability insights and applied knowledge effectively',
        'Conducted interviews and recruited interns for OPUS',
        'Managed a team of 3 to complete tasks on time',
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
        'Built integral components using beginner HTML, CSS and Javascript',
        'Engaged with various teams including, Marketing and Public Relations',
        'Collaborated effectively in Agile teams, ensuring efficient project delivery',
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
    {
      id: getId(),
      name: 'NU GrubGrab',
      url: 'https://github.com/Akshat7274/NU_GrubGrab',
      repo: 'https://github.com/Akshat7274/NU_GrubGrab',
      img: 'https://user-images.githubusercontent.com/39896268/246042348-1c12f349-162a-4bc6-92f5-0771a49cbbc8.png',
      year: 2023,
      tags: ['MongoDB', 'Express', 'ReactJS', 'NodeJS'],
    },
    {
      id: getId(),
      name: 'Sentiment Analysis of Amazon Customer Reviews',
      url: 'https://github.com/VaibhavMishra1341/Sentiment-Analysis-of-Amazon-Reviews',
      repo: 'https://github.com/VaibhavMishra1341/Sentiment-Analysis-of-Amazon-Reviews',
      img: 'https://user-images.githubusercontent.com/39896268/258598947-822caf3b-b32e-4867-a908-06c865af5250.png',
      year: 2023,
      tags: ['Python', 'Matplotlib', 'VADER Sentiment'],
    },
    {
      id: getId(),
      name: 'Uber Data Analysis',
      url: 'https://github.com/VaibhavMishra1341/Uber-Data-Ananlysis',
      repo: 'https://github.com/VaibhavMishra1341/Uber-Data-Ananlysis',
      img: 'https://user-images.githubusercontent.com/39896268/258600463-8a94b539-6185-4186-b122-890a0100a753.png',
      year: 2023,
      tags: ['R', 'GGPLOT', 'Lubridate', 'dplyr', 'tidyr', 'tidyverse'],
    },
    {
      id: getId(),
      name: 'Reliance Mart Sale Dashboard',
      url: 'https://github.com/VaibhavMishra1341/Reliance-Mart-Sale-Dashboard/',
      repo: 'https://github.com/VaibhavMishra1341/Reliance-Mart-Sale-Dashboard/',
      img: 'https://user-images.githubusercontent.com/39896268/259313064-39b004bc-591e-47f3-9d4b-21561d5ba5e2.png',
      year: 2023,
      tags: ['PowerBI', 'Excel', 'Data Analysis'],
    },
    {
      id: getId(),
      name: 'Develop an Optimized Framework for Real-Time IOT data analysis',
      url: 'https://github.com/VaibhavMishra1341/IOT-Data-Analysis-Framework',
      repo: 'https://github.com/VaibhavMishra1341/IOT-Data-Analysis-Framework',
      img: 'https://user-images.githubusercontent.com/39896268/262639765-b3ad4d8b-9267-476a-b70c-5e5ffe67f707.png',
      year: 2023,
      tags: ['Hadoop', 'Flume', 'HiveQL'],
    },
    {
      id: getId(),
      name: 'Donation for Flood Relief in Assam and Bihar',
      url: 'https://vaibhavmishra1341.github.io/Flood-Relief/',
      repo: 'https://github.com/VaibhavMishra1341/Flood-Relief',
      img: 'https://user-images.githubusercontent.com/39896268/258600666-4c73aa37-138e-4a9b-acf0-e89c594dabe8.png',
      year: 2022,
      tags: ['HTML', 'CSS', 'JavaScript', 'RazorPay'],
    },
    {
      id: getId(),
      name: 'TinDog - Tinder for Dogs!',
      url: 'https://vaibhavmishra1341.github.io/TinDog/',
      repo: 'https://github.com/VaibhavMishra1341/TinDog',
      img: 'https://user-images.githubusercontent.com/39896268/258600775-c38891c6-1315-4ad5-acd1-8d5ba88525fc.png',
      year: 2022,
      tags: ['HTML', 'CSS', 'BootSrap'],
    },
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
