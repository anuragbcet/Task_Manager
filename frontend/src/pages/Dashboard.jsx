import { ClipboardIcon } from "@heroicons/react/24/outline";
import React from "react";
import {MdAccountBox} from "react-icons/md"
import { Link, useNavigate } from "react-router-dom";
// import CreateTodo from "../components/CreateTodo";
// import ListTodo from "../components/ListTodo";

function Dashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    alert("logout clicked");
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  return (
    <>
      <nav>
        <div className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <ClipboardIcon className="h-8 w-8 text-blue-500" />
                <Link to={"/"}>
                  <h1 className="text-2xl font-bold text-blue-600">
                    Task Manager
                  </h1>
                </Link>
              </div>
              {/* Buttons */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                  Logout
                </button>
                <div className="">
                <MdAccountBox className="text-[45px] text-blue-500 ml-5"/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </nav>
     {/* <CreateTodo/>
     <ListTodo/> */}

      <div className="bg-red-200">
        <div className="card h-[450px] w-[200px] flex flex-wrap bg-amber-300 mt-2 rounded-2xl">
            hello
        </div>
      </div>
     
    </>
  );
}

export default Dashboard;
