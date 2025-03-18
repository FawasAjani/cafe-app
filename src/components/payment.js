import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment({ basket, clearBasket }) {
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

    const handlePayment = (e) => {
        e.preventDefault();

        //  Card Number (16 digits)
        if (!/^\d{16}$/.test(cardNumber)) {
            setMessage("Invalid Card Number! Must be 16 digits.");
            return;
        }
        //  Expiry Date (MM/YY)
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
            setMessage(" Invalid Expiry Date! Use MM/YY format.");
            return;
        }
        //  CVV (3 digits)
        if (!/^\d{3}$/.test(cvv)) {
            setMessage(" Invalid CVV! Must be 3 digits.");
            return;
        }
        //   Address 
        if (!address || !city || !zipCode || !country) {
            setMessage(" Please fill in all address!");
            return;
        }

        // ✅ Save address details in localStorage (optional)
        localStorage.setItem("address", JSON.stringify({ address, city, zipCode, country }));

        // ✅ Payment successful
        setMessage("✅ Payment Successful! Thank you for your order, Enjoy your food.");
        setCardNumber("");//setCard
        setExpiry("");//setEXpiry
        setCvv("");//setCvv
        setAddress("");//setAddress
        setCity("");
        setZipCode("");
        setCountry("");

        setTimeout(() => {
            clearBasket(); //  Clear basket 
            navigate("/"); // Redirect to home page
        }, 3000);
    };

    return (
        <section className="custom-section d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
            <div className="container p-4" style={{ maxWidth: "500px", background: "#f8f9fa", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <h2 className="text-center mb-3">Payment</h2>
                <p className="text-center mb-3"><strong>Total: €{totalPrice.toFixed(2)}</strong></p>

                {message && <div className={`alert ${message.includes("❌") ? "alert-danger" : "alert-success"}`} role="alert">{message}</div>}

                <form onSubmit={handlePayment}>
                    {/* ✅ Address  */}
                    <div className="form-group mb-3">
                        <label>Street Address</label>
                        <input type="text" className="form-control" placeholder="Enter your street address" value={address}
                            onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div className="form-group mb-3">
                        <label>City</label>
                        <input type="text" className="form-control" placeholder="Enter your city" value={city}
                            onChange={(e) => setCity(e.target.value)} required />
                    </div>
                    <div className="form-group mb-3">
                        <label>Zip Code</label>
                        <input type="text" className="form-control" placeholder="Enter zip code" value={zipCode}
                            onChange={(e) => setZipCode(e.target.value.replace(/\D/, ''))} required />
                    </div>
                    <div className="form-group mb-3">
                        <label>Country</label>
                        <input type="text" className="form-control" placeholder="Enter your country" value={country}
                            onChange={(e) => setCountry(e.target.value)} required />
                    </div>

                    {/* ✅ Payment  */}
                    <div className="form-group mb-3">
                        <label>Card Number</label>
                        <input type="text" className="form-control" placeholder="Enter 16-digit card number" value={cardNumber}
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

                    {/* Submit Button */}
                    <button type="submit" className="btn btn-success w-100">Complete Payment</button>
                </form>
            </div>
        </section>
    );
}

export default Payment;//Payment
