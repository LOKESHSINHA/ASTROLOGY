import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Horoscope from './pages/Horoscope';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import ZodiacSigns from './pages/ZodiacSigns';
import Blog from './pages/Blog';
import BirthChart from './pages/BirthChart';
import LoveRelationship from './pages/LoveRelationship';
import CareerGuidance from './pages/CareerGuidance';
import AboutAditya from './pages/AboutAditya';
import OurStory from './pages/OurStory';
import Testimonials from './pages/Testimonials';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AdminProfile from './pages/AdminProfile';
import MyReadings from './pages/MyReadings';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/horoscope" element={<Layout><Horoscope /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/zodiac-signs" element={<Layout><ZodiacSigns /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />

        {/* Services Pages */}
        <Route path="/services/birth-chart" element={<Layout><BirthChart /></Layout>} />
        <Route path="/services/love" element={<Layout><LoveRelationship /></Layout>} />
        <Route path="/services/career" element={<Layout><CareerGuidance /></Layout>} />

        {/* About Pages */}
        <Route path="/about/aditya" element={<Layout><AboutAditya /></Layout>} />
        <Route path="/about/story" element={<Layout><OurStory /></Layout>} />
        <Route path="/about/testimonials" element={<Layout><Testimonials /></Layout>} />

        {/* User Authentication & Profile Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminProfile />} />
        <Route path="/my-readings" element={<MyReadings />} />
      </Routes>
    </Router>
  );
}

export default App;

