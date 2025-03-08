// FawasAjani-G00413222
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css"; 
//login
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await axios.post("http://localhost:4000/api/login", {
                email,
                password
            });

            if (response.data.success) {
                localStorage.setItem("token", response.data.token); 
                navigate("/dashboard"); 
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError("Invalid email or password. Please try again.");
        }

        setLoading(false);
    };
