import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code"; // Import react-qr-code

const ReportSection = () => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState(""); // New state for location
  const [qrCode, setQrCode] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isQrGenerated, setIsQrGenerated] = useState(false); // Track if QR code is generated

  useEffect(() => {
    // Check if username is stored in session storage
    const storedUsername = sessionStorage.getItem("user_name");
    if (storedUsername) {
      setUsername(storedUsername);
      setIsLoggedIn(true);
      alert(storedUsername);
    }
  }, []); // This hook will run once when the component mounts

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Report data object with location
    const reportData = {
      username,
      description,
      location, // Include location in the report data
      image,
    };

    // Generate QR code with report data (for simplicity, using JSON stringify)
    setQrCode(JSON.stringify(reportData));

    // Set QR code generated state to true
    setIsQrGenerated(true);

    // Save username in session if not logged in
    if (!isLoggedIn) {
      sessionStorage.setItem("username", username);
    }

    // Reset form after submission
    setDescription("");
    setImage(null);
    setLocation(""); // Reset location
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-transparent text-white rounded-lg border-2 border-green-500 shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Report Dirtiness in Area
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="mt-1 block w-full px-3 py-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent text-white placeholder-gray-400"
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-white"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the issue"
            className="mt-1 block w-full px-3 py-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent text-white placeholder-gray-400"
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-white"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter the location"
            className="mt-1 block w-full px-3 py-2 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent text-white placeholder-gray-400"
            required
          />
        </div>

        <div className="form-group">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-white"
          >
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full text-sm text-white file:bg-green-500 file:border-0 file:px-4 file:py-2 file:text-sm file:font-semibold file:rounded-lg file:bg-green-500 file:hover:bg-green-400"
            required
          />
          {image && (
            <div className="mt-4">
              <img
                src={image}
                alt="Uploaded Preview"
                className="w-full h-auto rounded-md"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          disabled={isQrGenerated} // Disable the submit button after QR is generated
        >
          Submit Report
        </button>
      </form>

      {/* QR Code Modal */}
      {qrCode && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-medium text-gray-900">
            Your Report QR Code
          </h3>
          <QRCode value={qrCode} size={256} />
        </div>
      )}
    </div>
  );
};

export default ReportSection;
