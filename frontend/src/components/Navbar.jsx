import { ClipboardIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <ClipboardIcon className="h-8 w-8 text-blue-500" />
            <Link to={"/"}>
              <h1 className="text-2xl font-bold text-blue-600">Task Manager</h1>
            </Link>
          </div>
          {/* Buttons */}
          <div className="flex items-center space-x-4">
            <Link to={"/login"}>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Login
              </button>
            </Link>
           <Link to={"/register"}>
           <button className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600">
              Register
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
