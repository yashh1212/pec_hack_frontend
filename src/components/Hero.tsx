import React from "react";
import { FaLeaf, FaWallet } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 hook
import { useParallax } from "../hooks/useParallax";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import AnimatedCounter from "./ui/AnimatedCounter";
import ParticleBackground from "./ui/ParticleBackground"; // Import ParticleBackground

const Hero = () => {
  const parallaxOffset = useParallax(0.5);
  const { ref, isVisible } = useIntersectionObserver();
  const { loginWithPopup, logout, user, isAuthenticated, isLoading } =
    useAuth0(); // Auth0 hooks

  const handleConnectWallet = async () => {
    if (!isAuthenticated) {
      try {
        await loginWithPopup(); // Open Auth0 login in a popup window
      } catch (err) {
        console.error("Login failed", err);
      }
    } else {
      // Proceed with the wallet connection logic if already logged in
      console.log("Proceed to connect wallet...");
    }
  };

  return (
    <div className="relative min-h-screen bg-transperent text-white overflow-hidden">
      <ParticleBackground />

      {/* Parallax effect */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div
          ref={ref}
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nurture Nature with{" "}
            <span className="text-[#0f9d58] inline-block hover:scale-105 transition-transform">
              Blockchain
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our community of environmental champions. Learn, earn, and make
            a real impact on our planet's future through blockchain technology.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all hover:scale-105 hover:shadow-lg">
              <span className="flex items-center gap-2">
                <FaLeaf className="w-5 h-5 group-hover:rotate-12 transition-transform" />{" "}
                Join Now
              </span>
            </button>

            <button
              className="group px-8 py-3 bg-gray-800 text-white rounded-full border-2 border-green-500 hover:bg-gray-700 transition-all hover:scale-105 hover:shadow-lg"
              onClick={handleConnectWallet} // Trigger login or wallet connection
            >
              <span className="flex items-center gap-2">
                <FaWallet className="w-5 h-5 group-hover:rotate-12 transition-transform" />{" "}
                Connect Wallet
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: 100, label: "Active Members", suffix: "+" },
              { number: 500, label: "Trees Planted", suffix: "+" },
              { number: 100, label: "Course Modules", suffix: "+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl font-bold text-[#0f9d58]">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
