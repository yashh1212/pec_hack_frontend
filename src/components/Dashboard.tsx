import React from "react";
import { FaTrophy, FaBookOpen, FaUsers, FaLeaf } from "react-icons/fa"; // Import icons from react-icons
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import ProgressBar from "./ui/ProgressBar";

const Dashboard = () => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div className="bg-transperent min-h-screen p-6 text-gray-200">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { icon: FaTrophy, label: "Achievement Points", value: "2,450" },
            { icon: FaBookOpen, label: "Courses Completed", value: "12" },
            { icon: FaUsers, label: "Community Rank", value: "#126" },
            { icon: FaLeaf, label: "Carbon Credits", value: "345" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-700 rounded-lg group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-green-300" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Learning Progress
            </h2>
            <div className="space-y-4">
              {[
                { course: "Blockchain Basics", progress: 80 },
                { course: "Environmental Impact", progress: 60 },
                { course: "Sustainable Practices", progress: 40 },
              ].map((course) => (
                <div key={course.course} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{course.course}</span>
                    <span>{course.progress}%</span>
                  </div>
                  <ProgressBar progress={course.progress} />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Leaderboard
            </h2>
            <div className="space-y-4">
              {[
                { name: "Alex M.", points: "3,450" },
                { name: "Sarah K.", points: "3,200" },
                { name: "John D.", points: "2,980" },
              ].map((user, index) => (
                <div
                  key={user.name}
                  className="flex items-center gap-4 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-green-300 font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-white">{user.name}</div>
                    <div className="text-sm text-gray-400">
                      {user.points} pts
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
