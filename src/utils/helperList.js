// Change from .png to .PNG
const Ecommerce = "/static/images/Ecommerce.PNG";
const Islam = "/static/images/Islam.PNG";
const Login = "/static/images/Login.PNG";

export const projectsList = [
  {
    label: "ShopEasy E-commerce",
    description: "Fully functional e-commerce website with React",
    src: "https://ecommerce-website-react-dusky.vercel.app/",
    githubSrc: "https://github.com/beingtaha/ecommerce-website-react",
    stack: ["React", "JavaScript", "CSS", "Vercel"],
    imgSrc: "/static/images/Ecommerce.PNG", // ✅ Changed to .PNG
  },
  {
    label: "Islamic Guide Web",
    description: "Educational web application for Islamic resources",
    src: "https://islamic-guide-web.vercel.app/",
    githubSrc: "https://github.com/beingtaha/islamic-guide-web",
    stack: ["React", "CSS", "JavaScript", "Vercel"],
    imgSrc: "/static/images/Islam.PNG", // ✅ Changed to .PNG
  },
  {
    label: "Login System",
    description: "Secure authentication system",
    src: "https://login-system-mu-lilac.vercel.app/login",
    githubSrc: "https://github.com/beingtaha/login-system",
    stack: ["React", "Authentication", "CSS", "Vercel"],
    imgSrc: "/static/images/Login.PNG", // ✅ Changed to .PNG
  },
];

export const skillsData = [
  { name: "React.js", rating: 85 },
  { name: "JavaScript (ES6+)", rating: 80 },
  { name: "HTML5", rating: 90 },
  { name: "CSS3", rating: 85 },
  { name: "Git", rating: 75 },
  { name: "Odoo ERP", rating: 80 },
  { name: "Network Monitoring", rating: 75 },
  { name: "Troubleshooting", rating: 85 },
  { name: "MS Office", rating: 90 },
  { name: "WordPress", rating: 75 },
  { name: "Basic SQL", rating: 70 },
  { name: "System Security", rating: 75 },
  { name: "Data Management", rating: 85 },
  { name: "Inventory Management", rating: 85 },
  { name: "Customer Support", rating: 90 },
];

export const skillsList = [
  { label: "React.js", src: "/static/icons/reactjs.svg" },
  { label: "JavaScript", src: "/static/icons/javascript.png" },
  { label: "HTML5", src: "/static/icons/html.png" },
  { label: "CSS3", src: "/static/icons/css3.png" },
  { label: "Git", src: "/static/icons/git.svg" },
  { label: "Odoo ERP", src: "/static/icons/reactjs.svg" }, // Default icon
  { label: "Network Monitoring", src: "/static/icons/nodejs.svg" },
  { label: "Troubleshooting", src: "/static/icons/javascript.png" },
  { label: "MS Office", src: "/static/icons/bootstrap.png" },
  { label: "WordPress", src: "/static/icons/sass.svg" },
  { label: "Basic SQL", src: "/static/icons/postgres.png" },
  { label: "System Security", src: "/static/icons/material.svg" },
];

export const contactDetails = [
  {
    iconSrc: "static/icons/gmail.svg",
    type: "Email",
    data: "tahaahmed434@gmail.com",
    href: "mailto:tahaahmed434@gmail.com?subject='Hello !'",
  },
  {
    iconSrc: "static/icons/linkedin.svg",
    type: "LinkedIn",
    data: "Taha Ahmed",
    href: "https://www.linkedin.com/in/tahaa-ahmed/",
  },
  {
    iconSrc: "static/icons/phone.png",
    type: "Contact Number",
    data: "+92 316-2020727",
    href: "tel:+92162020727",
  },
];
