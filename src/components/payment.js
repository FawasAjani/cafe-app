import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment({ basket, clearBasket }) {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

    const handlePayment = (e) => {
        e.preventDefault();

        //  Card Number (16 digits), Expiry (MM/YY), CVV (3 digits)
        if (!/^\d{16}$/.test(cardNumber)) {
            setMessage(" Invalid Card Number! Must be 16 digits.");
            return;
        }
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
            setMessage(" Invalid Expiry Date! Use MM/YY format.");//Expire date
            return;
        }
        if (!/^\d{3}$/.test(cvv)) {
            setMessage(" Invalid CVV! Must be 3 digits.");//must be 3 digit 
            return;
        }

        // Payment successful
        setMessage(" Payment Successful! Thank you for your order.");
        setCardNumber("");//setcardnumber
        setExpiry("");//set expiry
        setCvv("");//setCvv

        setTimeout(() => {
            clearBasket(); // Clear basket after payment
            navigate("/"); // Redirect to home
        }, 3000);
    };

    return (
        <section className="custom-section d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
            <div className="container p-4" style={{ maxWidth: "500px", background: "#f8f9fa", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <h2 className="text-center mb-3">Payment</h2>
                <p className="text-center mb-3"><strong>Total: €{totalPrice.toFixed(2)}</strong></p>
                
                {message && <div className={`alert ${message.includes("") ? "alert-danger" : "alert-success"}`} role="alert">{message}</div>}

                <form onSubmit={handlePayment}>
                    <div className="form-group mb-3">
                        <label>Card Number</label>
                        <input type="text" className="form-control" placeholder="Enter 16-digit card number" value={cardNumber} //Enter 16-digit card number
                            onChange={(e) => setCardNumber(e.target.value.replace(/\D/, ''))} maxLength="16" required />
                    </div>
                    <div className="form-group mb-3">
                        <label>Expiry Date (MM/YY)</label>
                        <input type="text" className="form-control" placeholder="MM/YY" value={expiry} 
                            onChange={(e) => setExpiry(e.target.value)} maxLength="5" required />
                    </div>
                    <div className="form-group mb-3">
                        <label>CVV</label>
                        <input type="text" className="form-control" placeholder="3-digit CVV" value={cvv} 
                            onChange={(e) => setCvv(e.target.value.replace(/\D/, ''))} maxLength="3" required />
                    </div>
                    <button type="submit" className="btn btn-success w-100">Complete Payment</button>
                </form>
            </div>
        </section>
    );
}

export default Payment;//payment
