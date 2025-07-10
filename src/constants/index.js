import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  aws,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  coinpanda,
  l3matrix,
  universalprinters,
  rainstream,
  maxgen,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer Laravel | React",
    icon: web,
  },
  {
    title: "Backend Developer Laravel | PHP | NodeJS",
    icon: backend,
  },
  {
    title: "AWS & Cloud Deployment",
    icon: docker,
  },
  {
    title: "Database Design & Optimization",
    icon: mongodb,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "Laravel",
    icon: typescript,
  },
  {
    name: "PHP",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Redis",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: mongodb,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "aws",
  //   icon: aws,
  // },
];

const experiences = [
  {
    title: "PHP Developer",
    company_name: "Maxgen Technologies",
    icon: maxgen, // image file: /src/assets/maxgen.png
    iconBg: "#383E56",
    date: "Sep 2020 - Mar 2021",
    points: [
      "Completed 6-month internship focused on Core PHP and MySQL.",
      "Built basic modules and worked on small live projects under guidance.",
      "Learned CRUD operations, form handling, and HTML/CSS integration.",
      "Collaborated with seniors for code improvement and debugging.",
    ],
  },
  {
    title: "Senior Backend Developer",
    company_name: "Rainstream Web",
    icon: rainstream, // image file: /src/assets/rainstream.png
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Present",
    points: [
      "Built and maintained scalable backend systems using Laravel and MySQL.",
      "Delivered features for Coinpanda (Laravel + React crypto tax platform).",
      "Integrated Stripe payments, Google 2FA, JWT Auth, and multi-role APIs.",
      "Managed deployments using AWS EC2, RDS, Cloudflare, and CodePipeline.",
      "Worked in agile teams using Git, Slack, and Trello.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  // {
  //   name: "Car Rent",
  //   description:
  //     "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Coinpanda",
    description:
      "Crypto tax platform built with Laravel + React. I developed wallet sync logic, multi-role APIs, multilingual report export, and Google/Coinbase login integration.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
    ],
    image: coinpanda, // replace with actual image if available
    source_code_link: "https://coinpanda.io",
  },
  {
    name: "L3 Matrix",
    description:
      "E-learning system with Admin, Teacher, Student, Salesperson roles. Developed full backend including courses, quizzes, live user tracking, and Stripe integration.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "stripe", color: "pink-text-gradient" },
    ],
    image: l3matrix, // replace with actual image
    source_code_link: "https://l3matrix.com",
  },
  {
    name: "Universal Printers",
    description:
      "Online ID card ordering platform with multi-role dashboard, order management, and backend logic for large print volume processing.",
    tags: [
      { name: "php", color: "yellow-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: universalprinters, // replace with actual image
    source_code_link: "https://universalprinters.in",
  },
];

export { services, technologies, experiences, testimonials, projects };
