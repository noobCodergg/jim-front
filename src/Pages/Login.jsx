import React, { useState } from "react";
import { userLogin } from "../Api/ProjectApi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        const response=await userLogin(username,password)
        localStorage.setItem('role',response.data)
       navigate('/')
    }catch(error){
        alert('Error during login')
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-3xl font-extrabold text-center text-white mb-8">
          Login
        </h2>

        {error && (
          <div className="text-red-500 text-sm text-center mb-4">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter username"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
              placeholder="Enter password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300 ease-in-out"
          >
            Log In
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login;
