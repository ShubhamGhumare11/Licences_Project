import React, { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import api1 from "../Utils/api1"; // Import your Axios instance
import { AuthContext } from "../Utils/AuthContext"; // Import AuthContext
import { showToast } from "../Utils/toastUtils"; // Import the global toast utility

const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Access the login function from context

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await api1.post("/jwt/login", { username, password });

      if (response.data) {
        await login(response.data); // Call login function from context
        showToast("Login successful!", "success");

        setTimeout(() => {
          navigate("/"); // Redirect after toast disappears
        }, 2000);
      } else {

        setError("Invalid login response from the server.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please try again.");
    }
  };


  // const handleLogout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("refreshToken");
  //   window.location.href = "/login"; // Redirect to login page
  // };
  

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg border border-purple-500 text-white">
      <h2 className="text-2xl font-bold text-center text-gray-100 mb-6">Login</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-100">Email</label>
            <input
              type="email"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              required
              className="w-full px-3 py-2 text-black border rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-100">Password</label>
            <input
            
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 text-black border rounded-lg"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-blue-600">
            Login
          </button>
        </form>
        {/* <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
  Logout
</button> */}

        <p className="text-sm text-center text-gray-200 mt-4">
          Don't have an account? <a href="/register" className="text-purple-600-500">Sign up</a>
        </p>
      </div>
      
    </div>
  );
};

export default Login;
