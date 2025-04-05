/** @format */

// Importing all images
import automa from "./automa.png";
import canva from "./canva.jpg";
import codee2 from "./codee2.jpeg";
import creed from "./creed.png";
import css from "./css3.jpg"; // Renamed from 'css3' for clarity
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
    tech: ["Django","Javascript","HTML", "CSS"],
    image: skonnect,
    liveDemo: "",
    github: "",
  },
  {
    id: 2,
    title: "Assasin Creed Game",
    description:
      "A responsive web showcase for the Assasin Creed franchise. Features include game guide, interactive quiz to help user find their ideal game.Contains news update,real-time comment section for community engagemen .",
    tech:["HTML5", "CSS3", "Javascript"],
    image: creed,
    liveDemo: "",
    github: "",
  },
  {
    id: 3,
    title: "KQ Flight Booking Website",
    description:
      "A modern flight booking platform  built for travelers. Users can easily search and filter flights, explore popular destination, and shop duty free. Designed with a clean interface and responsive layout, the platform blends intutive navigation for a seamless experience.",
    tech: ["Django","Javascript","HTML", "CSS","APIs"],
    image: homekq,
    liveDemo: "",
    github: "",
  },
  {
    id: 4,
    title: "Spotify Clone",
    description:
      "A fully responsive, pixel-perfect replicaof Spotify interface, built to provide an imersive, music streaming experinece.",
    tech: ["Javascript","HTML", "CSS"],
    image: spotify,
    liveDemo: "",
    github: "",
  },
];
