import { useState } from "react";
import { useNavigate } from "react-router-dom";

//function for payment.js
function Payment({ basket, clearBasket }) {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

    const handlePayment = (e) => {
        e.preventDefault();

        if (!cardNumber || !expiry || !cvv) {
            setMessage(" Please fill in all payment details!");//payment details
            return;
        }