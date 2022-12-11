import React from "react";
import styles from "./styles/App.module.css";

import Footer from "./components/common/footer";
import Pannel from "./components/common/pannel";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import About from "./pages/about";
import NotFound from "./pages/notFound";

function App() {
  return (
    <div className={styles.App}>
      <Pannel />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
