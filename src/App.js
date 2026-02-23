import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Research from './pages/Research';
import Community from './pages/Community';
import Connect from './pages/Connect';
import Footer from './components/Footer';
import Background from './components/Background';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen theme-slate-800 selection:bg-blue-100 selection:text-blue-900">
        <Background />
        <ScrollToTop />
        <Navbar />

        <main className="relative z-10 page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/research" element={<Research />} />
            <Route path="/community" element={<Community />} />
            <Route path="/connect" element={<Connect />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;