import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
   // useState to store user's email input
  const [email, setEmail] = useState("");
    // useState  to store user's password input
  const [password, setPassword] = useState("");
    // useState  to store and display any message 
  const [message, setMessage] = useState("");
    // Hook to navigate between routes
  const navigate = useNavigate();
// function to handle login form submission
  const handleLogin = async (e) => {
     // Prevents the default form submissio
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",// HTTP method for sending data to the server
        headers: { "Content-Type": "application/json" },// // Tells the server we're sending JSON data
        body: JSON.stringify({ email, password }),///// Converts email and password to JSON format
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setAuth(true);
        navigate("/"); // Redirect to home
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again."); // This block catches any network errors during fetch
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;//Login
