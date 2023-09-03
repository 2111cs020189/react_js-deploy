import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import About from './pages/About.jsx';
import Education from './pages/Education.jsx';
import ContactMe from './pages/ContactMe.jsx';
import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;