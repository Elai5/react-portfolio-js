/** @format */

import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <About />
    </div>
  );
};

export default App;
// import LandingPage from "./components/LandingPage";
// export default function App() {
//   return <LandingPage />;
// }
