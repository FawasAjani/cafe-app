import { useState } from "react";
import { useNavigate } from "react-router-dom";

//function for payment.js
function Payment({ basket, clearBasket }) {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
