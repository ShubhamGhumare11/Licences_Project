import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api1 from "../Utils/api1"; // Import your Axios instance

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await api1.post("/jwt/login", { username, password });

      if (response.data) {
        console.log(response.data)
        localStorage.setItem("token", response.data); // Store JWT
        localStorage.setItem("refreshToken", response.data.refreshToken); // Store Refresh Token (if applicable)
        navigate("/user"); // Redirect to the protected route
      } else {
        setError("Invalid login response from the server.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    window.location.href = "/login"; // Redirect to login page
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">username</label>
            <input
              type="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
  Logout
</button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don't have an account? <a href="/register" className="text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
