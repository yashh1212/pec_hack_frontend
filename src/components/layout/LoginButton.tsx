import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./profile"; // Import Profile component

const LoginButton = () => {
  const { loginWithPopup, logout, user, isAuthenticated, isLoading } =
    useAuth0();
  const [isProfileOpen, setProfileOpen] = useState(false); // Track profile visibility
  const [isMenuOpen, setMenuOpen] = useState(false); // Track menu visibility
  const [userId, setUserId] = useState(null); // Store user ID from the backend

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLogin = async () => {
    try {
      await loginWithPopup(); // Open Auth0 login in a popup window
      // After successful login, call the API to store user data in the database
      storeUserDataInDatabase(user);
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  // Function to send user data to the backend API
  const storeUserDataInDatabase = async (userData) => {
    try {
      const response = await fetch("http://localhost:5000/user/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: {
            name: userData.name,
            email: userData.email,
            profilePicture: userData.picture,
          }, // You can add course data here if applicable
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save user data");
      }

      const data = await response.json();
      console.log("User data stored successfully:", data.userId);
      setUserId(data.userId); 
      sessionStorage.setItem("user_id",data.userId)
      sessionStorage.setItem("user_name", data.name);
    } catch (error) {
      console.error("Error storing user data:", error);
    }
  };

  useEffect(() => {
    // If the user is already authenticated, store user data in the database
    if (isAuthenticated && user) {
      storeUserDataInDatabase(user);
    }
  }, [isAuthenticated, user]);

  return (
    <div className="relative">
      {!isAuthenticated ? (
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
          onClick={handleLogin} // Use handleLogin for the popup login
          disabled={isLoading} // Disable the button while loading
        >
          Log In
        </button>
      ) : (
        <div className="relative">
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
      {isProfileOpen && (
        <Profile onClose={() => setProfileOpen(false)} userId={userId} />
      )}
    </div>
  );
};

export default LoginButton;
