import React from "react";
import { FaBook, FaAward, FaRegClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LearningHub = () => {
  const navigate = useNavigate(); // Initialize navigate function

  return (
    <div id="learn" className="bg-transperent min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Learning Hub</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Blockchain Fundamentals",
              description:
                "Learn the basics of blockchain technology and its environmental applications",
              duration: "2 hours",
              level: "Beginner",
            },
            {
              title: "Environmental Science",
              description:
                "Understand key environmental challenges and solutions",
              duration: "3 hours",
              level: "Intermediate",
            },
            {
              title: "Sustainable Practices",
              description:
                "Discover practical ways to contribute to environmental conservation",
              duration: "2.5 hours",
              level: "Beginner",
            },
          ].map((course) => (
            <div
              key={course.title}
              className="bg-gray-800 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="h-48 bg-green-700 flex items-center justify-center">
                <FaBook className="w-12 h-12 text-green-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-400 mb-4">{course.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <FaRegClock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaAward className="w-4 h-4" />
                    {course.level}
                  </div>
                </div>
                <button
                  className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  onClick={() => navigate("/course")} // Navigate to /course on click
                >
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningHub;
