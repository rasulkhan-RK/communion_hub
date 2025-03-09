import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-center p-6">
    <h1 className="text-5xl font-bold mb-4">
      Connecting People Across Faiths & Interests
    </h1>
    <p className="text-lg mb-6">
      Connecting people of all faiths through events and community support.
    </p>
    <Link to="/events">
      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-500 transition">
        Explore Events
      </button>
    </Link>
  </div>
);

export default HomePage;
