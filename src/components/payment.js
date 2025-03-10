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

        if (!cardNumber || !expiry || !cvv) {
            setMessage("❌ Please fill in all payment details!");
            return;
        }

        setMessage("✅ Payment Successful! Thank you for your order.");
        setTimeout(() => {
            clearBasket();
            navigate("/");
        }, 3000);
    };

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
                    <div className="form-group">
                        <label>Expiry Date</label>
                        <input type="text" className="form-control" value={expiry} onChange={(e) => setExpiry(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>CVV</label>
                        <input type="text" className="form-control" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-success mt-3">Complete Payment</button>
                </form>
            </div>
        </section>
    );
}

export default Payment;
