import React from 'react';
// import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import LearningHub from './components/LearningHub';
import Community from './components/Community';
import Navigation from "./components/layout/Navigation";
import background from "../images/a5afc9_47eb0f65530641ac9d02588eea0c8e69~mv2.avif"; 
function App() {
  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{
        backgroundImage: `url(${background})`,
        
         
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
