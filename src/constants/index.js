import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  laravel,
  php,
  mysql,
  postgressql,
  redis,
  jquery,
  angular,
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
  { id: "about", title: "About", type: "section" },
  { id: "work", title: "Work", type: "section" },
  { id: "contact", title: "Contact", type: "section" },
  { id: "github", title: "GitHub", type: "external", link: "https://github.com/sagar-dudhat" },
  { id: "linkedin", title: "LinkedIn", type: "external", link: "https://linkedin.com/in/sagar-dudhat" },
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
  // {
  //   name: "PHP",
  //   icon: php,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Laravel",
  //   icon: laravel,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Angular",
  //   icon: angular,
  // },
  // {
  //   name: "jQuery",
  //   icon: jquery,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Redis",
    icon: redis,
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "PostgreSQL",
    icon: postgressql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
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
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
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
      "Sagar consistently delivered clean and maintainable Laravel code across multiple projects. A dependable team player.",
    name: "Pratik Patel",
    designation: "Tech Lead",
    company: "Rainstream Web",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Working with Sagar was a great experience. He quickly understood the business logic and implemented scalable APIs efficiently.",
    name: "Ashish Odich",
    designation: "Project Manager",
    company: "Rainstream Web",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    testimonial:
      "Testimonials are coming soon – actively collecting feedback from my previous team members and collaborators.",
    name: "Nileshkumar Singh",
    designation: "Full-Stack Developer",
    company: "Portfolio Placeholder",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
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
    name: "Coinpanda (Team Project)",
    description:
      "A crypto tax platform built with Laravel + React during my time at Rainstream Web. I worked on wallet sync logic, multi-role APIs, multilingual PDF reports, and Google/Coinbase login integrations.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "aws", color: "green-text-gradient" },
    ],
    image: coinpanda,
    source_code_link: "https://coinpanda.io",
  },
  {
    name: "L3 Matrix (Team Project)",
    description:
      "Developed as part of a team at Rainstream Web. It’s an e-learning platform with Admin, Teacher, Student, and Salesperson roles. I was responsible for full backend including course & quiz modules, user tracking, and Stripe payment integration.",
    tags: [
      { name: "laravel", color: "red-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
      { name: "stripe", color: "pink-text-gradient" },
    ],
    image: l3matrix,
    source_code_link: "https://l3matrix.com",
  },
  {
    name: "Universal Printers",
    description:
      "ID card ordering and management platform. My contributions included building multi-role dashboard logic, order handling APIs, and scalable backend architecture for bulk print processing.",
    tags: [
      { name: "php", color: "yellow-text-gradient" },
      { name: "mysql", color: "green-text-gradient" },
    ],
    image: universalprinters,
    source_code_link: "https://universalprinters.in",
  },
];

export { services, technologies, experiences, testimonials, projects };
