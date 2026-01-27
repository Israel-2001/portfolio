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
  meta,
  starbucks,
  tesla,
  shopify,
  dragndrop,
  movie,
  realestate,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  }
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Enoverlab",
    icon: starbucks,
    iconBg: "#FFFF",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "HNG",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "LinkedIn",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Israel proved me wrong.",
    name: "Sarah favour",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Israel does.",
    name: "Emmanuel Eze",
  },
  {
    testimonial:
      "After Israel optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Aisha Musa",
  },
];

const projects = [
  {
    name: "Drag and Drop Website",
    description:
      "Web-based platform that allows users to drag and drop web components in a web page.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: dragndrop,
    source_code_link: "https://hng-drag-and-drop-task3.vercel.app/",
  },
  {
    name: "Movie Website",
    description:
      "Web application that show list of movies ranking them top rated from top to bottom",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://hng-task2-movie-app.vercel.app/",
  },
  {
    name: "Realtor Website",
    description:
      "A website that allows users to sell and also rent house, apartment, lands, shops, property from any part of the world",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: realestate,
    source_code_link: "https://realtor-react-app-chi.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
