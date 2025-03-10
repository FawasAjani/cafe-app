//G00413222
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

                    <>
                    <ul className="list-group">
                        {basket.map((item, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {item.name} - €{item.price.toFixed(2)}
                                <button className="btn btn-danger btn-sm" onClick={() => removeFromBasket(index)}>Remove</button>
                            </li>
                        ))}

</ul>                  
                        <h4>Total: €{totalPrice.toFixed(2)}</h4>
                
                        <button className="btn btn-primary mt-3" onClick={() => navigate("/payment")}>Proceed to Payment</button>{}
                    </>
                )}
            </div>
        </section>
    );
}

export default Basket;//Basket