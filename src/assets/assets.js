/** @format */

// Importing all images
import { image } from "framer-motion/client";
import automa from "./automa.png";
import canva from "./canva.jpg";
import codee2 from "./codee2.jpeg";
import creed from "./creed.png";
import css from "./css3.jpg";
import django from "./django.jpg";
import figma from "./figma.jpg";
import gcc from "./gcc.jpeg";
import git from "./git.jpg";
import hellen from "./hellen.jpeg";
import homekq from "./homekq.png";
import html5 from "./html5.jpg";
import js from "./js.jpg";
import prj from "./prj.jpeg";
import python from "./python.jpg";
import react from "./react.png";
import skonnect from "./skonnect.png";
import spotify from "./spotify.png";
import toast from "./toast.jpeg";
import wordpress from "./wordpress.jpg";

// Exporting all images as an object
export const assets = {
  automa,
  canva,
  codee2,
  creed,
  css,
  django,
  figma,
  gcc,
  git,
  hellen,
  homekq,
  html5,
  js,
  prj,
  python,
  react,
  skonnect,
  spotify,
  toast,
  wordpress,
};

export const projects = [
  {
    id: 1,
    title: "Student Connection App",
    description:
      "A social web platform designed to help international students feel at home abroad. Students can connect with peers from their home country, send friend request,and chat in real-time using Django Websockets. The app includes secure authentication and profile customization and intergrates third party APIs to provide location-based updates on housing, transportation and cultural events.",
    tech: ["Django", "Javascript", "HTML", "CSS"],
    image: skonnect,
    liveDemo: "",
    github: "",
  },
  {
    id: 2,
    title: "Assasin Creed Game",
    description:
      "A responsive web showcase for the Assasin Creed franchise. Features include game guide, interactive quiz to help user find their ideal game.Contains news update,real-time comment section for community engagemen .",
    tech: ["HTML5", "CSS3", "Javascript"],
    image: creed,
    liveDemo: "",
    github: "",
  },
  {
    id: 3,
    title: "KQ Flight Booking Website",
    description:
      "A modern flight booking platform  built for travelers. Users can easily search and filter flights, explore popular destination, and shop duty free. Designed with a clean interface and responsive layout, the platform blends intutive navigation for a seamless experience.",
    tech: ["Django", "Javascript", "HTML", "CSS", "APIs"],
    image: homekq,
    liveDemo: "",
    github: "",
  },
  {
    id: 4,
    title: "Spotify Clone",
    description:
      "A fully responsive, pixel-perfect replicaof Spotify interface, built to provide an imersive, music streaming experinece.",
    tech: ["Javascript", "HTML", "CSS"],
    image: spotify,
    liveDemo: "",
    github: "",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Leadership in Toastmasters: Growing and Empowering Members",
    timeline: "2021",
    community: "Toastmasters - Moi University",
    description:
      "As an executive member of the Toastmasters Club, I played a vital role in nurturing the art of public speaking and effective communication. My contributions included helping the club grow to over 50 members, successfully launching the club, and officially registering it. This experience taught me the importance of leadership, teamwork, and fostering a supportive environment for members to develop and thrive.",
  },
  {
    id: 2,
    title: "Winning Second Place in Google Club Hackathon",
    timeline: "2021",
    community: "Google Club - Moi University",
    description:
      "During my time at the Google Club at Moi University, I participated in a hackathon to build a portfolio website in just one day. This design, which earned me second place, was celebrated for its creativity and responsiveness. It taught me how to craft clean layouts under tight deadlines while prioritizing accessibility and user experience.",
  },

  {
    id: 3,
    title: "Teaching Kids Basic Computer Skills with Project Digital Impact",
    timeline: "2022",
    community: "Project Digital Impact",
    description:
      "Volunteering with the Project Digital Impact Foundation allowed me to teach kids basic computer skills, creating a simple, engaging interface to help them learn. Designing layouts that fostered both creativity and ease of use remains one of my proudest achievements. I had the chance to share it with over five schools.",
  },

  {
    id: 4,
    title: "Teaching Web Design at CodeJIKA",
    timeline: "Feb 2024",
    community: "CodeJIKA",
    description:
      "Mentored high school students in web design, creating interactive projects and teaching them html",
    image: codee2,
  },

  {
    id: 5,
    title: "Automating Data Scraping and Workflow Management",
    timeline: "2023",
    community: "Nvision",
    description:
      "Automation is a core part of my skill set. This project involved designing a clean, minimal interface to automate scraping data from a website and populating it into a database. The interface simplified tracking and monitoring progress, saving time and improving workflow efficiency.",
  },
];
