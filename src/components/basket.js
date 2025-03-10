import { useNavigate } from "react-router-dom";

function Basket({ basket, removeFromBasket }) {
    const navigate = useNavigate();
//total price
    const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

    return (
        <section className="custom-section">
            <div className="container">
                <h2>Your Basket</h2>
                {basket.length === 0 ? (
                    <p>Your basket is empty.</p>
                ) : (