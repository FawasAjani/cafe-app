import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//Signup
const Signup = () => {
  const [email, setEmail] = useState("");//Email
  const [password, setPassword] = useState("");//password
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to register. Please try again.");
      }

      const data = await response.json();
      setMessage(data.message);
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      setMessage(error.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;
