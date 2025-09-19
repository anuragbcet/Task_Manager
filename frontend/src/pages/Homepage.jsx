import React from "react";
import {
  CheckCircleIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  ClipboardIcon,
  FolderIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      {/* Navbar */}
      <Navbar/>

      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-5xl font-extrabold text-blue-600 text-center">
              Manage Your Tasks Like a Pro
            </h2>
            <p className="mt-6 text-lg text-gray-700 text-center max-w-2xl">
              Stay organized, productive, and focused with our powerful and
              secure todo application. Start managing your tasks today!
            </p>

            {/* Sample Todos */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Buy groceries",
                "Complete project report",
                "Schedule meetings",
              ].map((todo, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 border-l-4 border-blue-500"
                >
                  <FolderIcon className="h-6 w-6 text-green-500 mb-2" />
                  <h3 className="text-xl font-semibold text-gray-800">{todo}</h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Manage your tasks effectively with our user-friendly tools.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Why Choose Task manager Application?
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Experience the simplicity and efficiency of managing your tasks with
            features designed for you.
          </p>

          {/* Features */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Easy Login",
                description: "Quick and secure login experience for all users.",
                icon: <UserCircleIcon className="h-8 w-8 text-blue-500" />,
              },
              {
                title: "Safe Todo Storage",
                description: "Your tasks are stored securely in the cloud.",
                icon: <ShieldCheckIcon className="h-8 w-8 text-green-500" />,
              },
              {
                title: "Access Anywhere",
                description:
                  "Log in from any device to view, update, or delete tasks.",
                icon: <GlobeAltIcon className="h-8 w-8 text-indigo-500" />,
              },
              {
                title: "Manage Multiple Tasks",
                description:
                  "Organize multiple todos efficiently with separate task lists.",
                icon: <ClipboardIcon className="h-8 w-8 text-yellow-500" />,
              },
              {
                title: "Track Progress",
                description: "Mark tasks as completed and track progress seamlessly.",
                icon: <CheckCircleIcon className="h-8 w-8 text-teal-500" />,
              },
              {
                title: "Add Subtasks",
                description: "Each todo can have multiple tasks for better management.",
                icon: <FolderIcon className="h-8 w-8 text-red-500" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-lg rounded-lg p-6 hover:shadow-xl"
              >
                {feature.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="bg-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            Time Management Quotes
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Discover the wisdom of staying organized and efficient.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Time is what we want most but what we use worst. – William Penn",
              "The key is in not spending time, but in investing it. – Stephen R. Covey",
              "Lost time is never found again. – Benjamin Franklin",
            ].map((quote, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center border-l-4 border-green-500"
              >
                <StarIcon className="h-6 w-6 text-yellow-500 mb-2 mx-auto" />
                <p className="text-gray-700 italic">"{quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-800">
            What Our Users Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Hear from our happy users who love Todo App!
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alice",
                feedback: "This app completely changed the way I organize my life!",
                icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-500" />,
              },
              {
                name: "Bob",
                feedback: "Managing multiple todos has never been easier!",
                icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-500" />,
              },
              {
                name: "Charlie",
                feedback: "Secure, fast, and reliable. Highly recommend!",
                icon: <ChatBubbleLeftRightIcon className="h-6 w-6 text-red-500" />,
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 shadow-lg rounded-lg p-6 text-center"
              >
                {review.icon}
                <p className="text-gray-800 font-semibold">{review.name}</p>
                <p className="mt-2 text-gray-600 italic">"{review.feedback}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            Built by Anurag Kumar with{" "}
            <HeartIcon className="inline h-5 w-5 text-red-500" />
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
