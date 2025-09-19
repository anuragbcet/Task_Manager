import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handles login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const { token } = await response.json();
      localStorage.setItem("token", token);
      navigate("/dashboard");
      
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-indigo-400">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-6">
          <FaUserCircle className="text-6xl text-blue-500 mb-2" />
          <h2 className="text-2xl font-semibold text-gray-700">Login</h2>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all"
        >
          Login
        </button>
        <div className="text-center justify-center mt-4 text-blue-500 ">
        Don't have an account ? <Link to={"/register"} className="font-bold">Register</Link>
      </div>
      </form>
      
    </div>
  );
};

export default Login;
