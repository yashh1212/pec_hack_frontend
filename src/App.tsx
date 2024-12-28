import React from 'react';
// import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import LearningHub from './components/LearningHub';
import Community from './components/Community';
import Navigation from "./components/layout/Navigation";
import background from "C://Users//asus//OneDrive//Pictures//Screenshots//Screenshot 2024-12-28 102433.png"; // Import background image

function App() {
  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{
        backgroundImage: `url(${background})`,
         backgroundAttachment: "fixed",
         
      }}
    >
      <Navigation />
      <main>
        <Hero />
        <Dashboard />
        <LearningHub />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;
