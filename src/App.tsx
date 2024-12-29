import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import LearningHub from './components/LearningHub';
import Community from './components/Community';
import Navigation from "./components/layout/Navigation";
import CourseComponent from "./components/course/Enviro";
import background from "../images/a5afc9_47eb0f65530641ac9d02588eea0c8e69mv2.jpg"; 
import EventPage from './components/layout/Event';
import UpcomingEvents from './components/layout/Upcomingevents';
import ReportSection from './components/layout/ReportSection';

function App() {
  return (
    <Router>
      <div
        className="min-h-screen bg-gray-50"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <Navigation />
        <main>
          <Routes>
            {/* Wrap multiple components in a parent element */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Dashboard />
                  <LearningHub />
                  <Community />
                  <EventPage />
                </>
              }
            />
            <Route path="/course" element={<CourseComponent />} />
            <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
            <Route path="/ReportSection" element={<ReportSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
