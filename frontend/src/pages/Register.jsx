import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name,setName]=useState("");
  const [success,setSuccess]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const navigate = useNavigate();

  // Handles login form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name,email, password }),
      });

      if (!response.ok) {
        throw new Error("Registration Failed");
      }

      setSuccess("User registration successfull");
      setError("")
      navigate("/login");
      
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-500 to-indigo-400">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-md"
      >
        <div className="flex flex-col items-center mb-4">
          <FaUserCircle className="text-6xl text-green-500 mb-1" />
          <h2 className="text-xl font-semibold text-green-700">Register</h2>
        </div>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
        <div className="mb-2">
          <label className="block text-gray-600 mb-1">Name</label>
          <input
            type="Name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        
        {/* Email Input */}
        <div className="mb-2">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        {/* Password Input */}
        <div className="mb-2">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block text-gray-600 mb-1">Confirm Password</label>
          <input
            type="text"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-green-400 text-white py-3 rounded-lg hover:bg-green-700 transition-all"
        >
          Register
        </button>
        <div className="text-center justify-center mt-4 text-green-500 ">
        Already registered ? <Link to={"/login"} className="font-bold">Login</Link>
      </div>
      </form>
      
    </div>
  );
};

export default Register;
