/** @format */

import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import AboutPage from "./components/AboutPage";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact  from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <About />
      {/* <AboutPage /> */}
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
};

export default App;
// import LandingPage from "./components/LandingPage";
// export default function App() {
//   return <LandingPage />;
// }
