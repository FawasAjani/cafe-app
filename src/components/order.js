// FawasAjani-G00413222
import { useState, useEffect } from "react";
import axios from "axios";

function Order() {
    const [menuItems, setMenuItems] = useState([]);
    const [basket, setBasket] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [message, setMessage] = useState("");

    // Fetch menu items from API
    useEffect(() => {
        axios.get("http://localhost:4000/api/menu")
            .then(response => setMenuItems(response.data))
            .catch(error => console.log("Error fetching menu:", error));
    }, []);

    // Add item to basket
    const addToBasket = (item) => {
        setBasket([...basket, item]);
        setTotalPrice(totalPrice + item.price);
    };

    // Remove item from basket
    const removeFromBasket = (index) => {
        const updatedBasket = [...basket];
        setTotalPrice(totalPrice - updatedBasket[index].price);
        updatedBasket.splice(index, 1);
        setBasket(updatedBasket);
    };

    // Handle order submission
    const placeOrder = () => {
        if (basket.length === 0) {
            setMessage("Your basket is empty!");
            return;
        }

        setMessage("✅ Order placed successfully!");
        setBasket([]); // Clear the basket
        setTotalPrice(0); // Reset total price
    };

    return (
        <section className="custom-section">
            <div className="container">
                <h2>Order Your Food</h2>
                <div className="row">
                    {/* Menu Items Section */}
                    <div className="col-md-8">
                        <h3>Menu</h3>
                        <div className="row">
                            {menuItems.map((item) => (
                                <div key={item._id} className="col-md-4 mb-4">
                                    <div className="card">
                                        <img src={item.imageUrl} className="card-img-top" alt={item.name} style={{ height: '200px', objectFit: 'cover' }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <p><strong>€{item.price.toFixed(2)}</strong></p>
                                            <button className="btn btn-success" onClick={() => addToBasket(item)}>Add to Basket</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Shopping Basket Section */}
                    <div className="col-md-4">
                        <h3>Your Basket</h3>
                        {basket.length === 0 ? <p>Your basket is empty.</p> : (
                            <ul className="list-group">
                                {basket.map((item, index) => (
                                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                        {item.name} - €{item.price.toFixed(2)}
                                        <button className="btn btn-danger btn-sm" onClick={() => removeFromBasket(index)}>Remove</button>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <h4>Total: €{totalPrice.toFixed(2)}</h4>
                        <button className="btn btn-primary mt-3" onClick={placeOrder}>Order Now</button>
                        {message && <p className="mt-2">{message}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Order;
