import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ExaminerDashboard from './pages/ExaminerDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Pricing from './pages/Pricing';
import ScheduleDemo from './pages/ScheduleDemo';

function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/examiner-dashboard" element={<ExaminerDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/schedule-demo" element={<ScheduleDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
