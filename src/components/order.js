import { useState } from "react";
//images
import garlicpittaImage from '../images/garlic_pitta.jpg';
import olivesImage from '../images/olives.jpg';
import "bootstrap/dist/css/bootstrap.min.css";
//Food iteams
const foodItems = [
    { id: 1, category: "Starters", name: "Cheesy Garlic Pitta", price: 6.25, image: garlicpittaImage },
    { id: 2, category: "Starters", name: "Halloumi Sticks & Dip", price: 5.25, image: olivesImage },
    { id: 3, category: "Main Dishes", name: "Classic Burger", price: 9.99, image: "burger.jpg" },
    { id: 4, category: "Main Dishes", name: "Grilled Chicken", price: 12.99, image: "grilled_chicken.jpg" },
    { id: 5, category: "Desserts", name: "Chocolate Brownie", price: 4.99, image: "brownie.jpg" },
    { id: 6, category: "Desserts", name: "Ice Cream Sundae", price: 5.49, image: "ice_cream.jpg" },
];

function Order({ basket, setBasket }) {
    const addToBasket = (item) => {
        setBasket([...basket, item]);
    };

    return (
        <div className="container mt-4">
            <h2>Order Food</h2>
            {['Starters', 'Main Dishes', 'Desserts'].map((category) => (
                <div key={category} className="mb-4">
                    <h3>{category}</h3>
                    <div className="row">
                        {foodItems.filter(item => item.category === category).map((item) => (
                            <div key={item.id} className="col-md-4 mb-3">
                                <div className="card">
                                    <img src={item.image} className="card-img-top" alt={item.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">€{item.price.toFixed(2)}</p>
                                        <button className="btn btn-success" onClick={() => addToBasket(item)}>Add to Basket</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Order;
