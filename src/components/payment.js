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

        setMessage(" Payment Successful! Thank you for your order.");//If the payment is sucessfull it's going to read this message
        setTimeout(() => {
            clearBasket();
            navigate("/");
        }, 3000);
    };
//handle payment method
    return (
        <section className="custom-section">
            <div className="container">
                <h2>Payment</h2>
                <p>Total Amount: <strong>€{totalPrice.toFixed(2)}</strong></p>
                {message && <p className="mt-2">{message}</p>}
                <form onSubmit={handlePayment}>
                    <div className="form-group">
                        <label>Card Number</label>
                        <input type="text" className="form-control" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                    </div>
        
        
