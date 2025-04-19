import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Basket({ basket, setBasket }) {
  const navigate = useNavigate();

  useEffect(() => {
    //load basket from local storage
    const savedBasket = localStorage.getItem("basket");
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket));
    }
  }, [setBasket]);

  const totalPrice = basket.reduce((acc, item) => acc + item.price, 0);

  const removeFromBasket = (index) => {
    const updatedBasket = basket.filter((_, i) => i !== index);
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));//updates to local storage
  };

  return (
    <section className="custom-section">
      <div className="container">
        <h2>Your Basket</h2>
        {basket.length === 0 ? (
          //It will display this message  when you don't add anything to your basket
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
            <button className="btn btn-primary mt-3" onClick={() => navigate("/payment")}>
              Proceed to Payment
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default Basket;
