// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Home"; 
import AboutPage from "./AboutPage"; 
import ServicesPage from "./ServicesPage";
import ModelPage from "./ModelPage";
import ProjectsPage from "./ProjectsPage";
import CareersPage from "./CareersPage";
import ContactPage from "./ContactPage";
import NotFoundPage from "./NotFoundPage";
import CallenticaPage from './CallenticaPage';
import FloatingChatbot from './FloatingChatbot';

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ourmodel" element={<ModelPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/callentica" element={<CallenticaPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* Floating chatbot always visible */}
        <FloatingChatbot />
      </>
    </Router>
  );
}

export default App;
