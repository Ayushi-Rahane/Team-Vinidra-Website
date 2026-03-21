import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import KnowledgeHub from "./components/KnowledgeHub";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Landing page */}
        <Route
          path="/"
          element={
            <>
              <section id="home"><Hero /></section>
              <section id="about"><About /></section>
              <section id="contact"><Contact /></section>
            </>
          }
        />

        {/* Other pages */}
        <Route path="/team" element={<Team />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
      </Routes>
    </Router>
  );
}

export default App;