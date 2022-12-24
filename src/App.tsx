import React from "react";
import styles from "./styles/App.module.css";

import Footer from "./components/common/footer/footer";
import Pannel from "./components/common/pannel/pannel";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import About from "./pages/about";
import Certificates from "./pages/certificates";
import NotFound from "./pages/notFound";

import { DataWrapper } from "./context/sessionProj";

function App() {
  return (
    <DataWrapper>
      <div className={styles.App}>
        <Router>
          <Pannel />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </DataWrapper>
  );
}

export default App;
