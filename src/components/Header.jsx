import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="flex justify-between">
      <Link to="/" className="text-xl">
        CommunionHub
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-400">
          Home
        </Link>
        <Link to="/events" className="hover:text-gray-400">
          Events
        </Link>
        <Link to="/about" className="hover:text-gray-400">
          About
        </Link>
      </div>
    </nav>
  </header>
);

export default Header;
