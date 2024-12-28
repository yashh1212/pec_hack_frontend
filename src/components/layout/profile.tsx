import React from "react";
import { useAuth0 } from "@auth0/auth0-react"; // Import Auth0 hook

const Profile: React.FC<{ onClose: () => void; userId: string | null }> = ({
  onClose,
  userId,
}) => {
  const { user } = useAuth0(); // Access user object from Auth0

  if (!user) {
    return null; // Return null if user is not authenticated
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-20">
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">User Profile</h2>

        {/* Display user credentials */}
        <div className="mb-4">
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Nickname:</strong> {user.nickname}
          </p>
          {userId && (
            <p>
              <strong>Wallet ID:</strong> {userId}
            </p>
          )}
          <p>
            <strong>Picture:</strong>
          </p>
          <img
            src={user.picture}
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          {/* Display User ID */}
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Profile;
