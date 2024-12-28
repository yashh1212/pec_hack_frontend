import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./profile"; // Import Profile component

const LoginButton = () => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [isProfileOpen, setProfileOpen] = useState(false); // Track profile visibility
  const [isMenuOpen, setMenuOpen] = useState(false); // Track menu visibility

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="relative">
      {!isAuthenticated ? (
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      ) : (
        <div>
          {/* Profile Menu Button */}
          <button
            onClick={toggleMenu}
            className="bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors flex items-center justify-center"
          >
            {user?.picture ? (
              <img
                src={user.picture}
                alt="Profile"
                className="w-8 h-8 rounded-full" // Set size and make it circular
              />
            ) : (
              <span>{user?.name || "Profile"}</span> // Fallback if no picture
            )}
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div
              className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-48 z-10"
              style={{ zIndex: 10 }}
            >
              <ul>
                <li>
                  <button
                    onClick={() => setProfileOpen(true)} // Open profile modal
                    className="block px-4 py-2 w-full text-left hover:bg-gray-100"
                  >
                    Profile
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="block px-4 py-2 w-full text-left hover:bg-gray-100 text-red-600"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Show Profile Modal if isProfileOpen is true */}
      {isProfileOpen && <Profile onClose={() => setProfileOpen(false)} />}
    </div>
  );
};

export default LoginButton;
