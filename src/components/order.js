import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images directly in this file
import garlicpittaImage from '../images/garlic_pitta.jpg';
import olivesImage from '../images/olives.jpg';
import sweetpotatoImage from '../images/sweet-potato-wedges.jpg';
import halloumiImage from '../images/halloumi-sticks.jpg';
import almondsImage from '../images/almonds.jpg';
import maccheeseImage from '../images/Ajani mac&cheese.jpg';
import burgerImage from '../images/burger.jpg';
import chickenwingsImage from '../images/chickenwings.jpg';
import chickenliverImage from '../images/chicken-liverportugueseroll.jpg';
import chickenbreastImage from '../images/chicken-breast-fillet.jpg';
import doublechickenwrapImage from '../images/double-chicken-wrap.jpg';
import veganspicyriceImage from '../images/spicy-rice-bowl.jpg';
import fullyloadedchipsImage from '../images/fully-loaded-chips.jpg';
import machoImage from '../images/macho-peas-.jpg';
import garlicbreadImage from '../images/garlic-bread.jpg';
import chocolatecakeImage from '../images/chocolatecake.jpg';
import cheesecakeImage from '../images/cheesecake.jpg';
import chocolateicecreamImage from '../images/chocolate-ice-cream.jpg';
import waterImage from '../images/water.jpg';
import sparklingwaterImage from '../images/sparkling-water.jpg';
import fantaImage from '../images/fanta.jpg';

//  list of food items with calories and allergens
const foodItems = [
  { id: 1, category: "Starters", name: "Cheesy Garlic Pitta", price: 6.25, calories: 350, allergens: ["Dairy", "Gluten"], image: garlicpittaImage },
  { id: 2, category: "Starters", name: "Olives", price: 5.25, calories: 100, allergens: ["None"], image: olivesImage },
  { id: 3, category: "Starters", name: "Sweet Potato", price: 8.00, calories: 250, allergens: ["None"], image: sweetpotatoImage },
  { id: 4, category: "Starters", name: "Halloumi Sticks & Dip", price: 9.60, calories: 400, allergens: ["Dairy"], image: halloumiImage },
  { id: 5, category: "Starters", name: "Almonds", price: 1.90, calories: 200, allergens: ["Nuts"], image: almondsImage },
  { id: 6, category: "Starters", name: "Ajani Mac & Cheese", price: 12.00, calories: 600, allergens: ["Dairy", "Gluten"], image: maccheeseImage },
  { id: 7, category: "Main Dishes", name: "Classic Burger", price: 20.99, calories: 1750, allergens: ["Gluten", "Dairy"], image: burgerImage },
  { id: 8, category: "Main Dishes", name: "3 Chicken Wings", price: 24.00, calories: 450, allergens: ["None"], image: chickenwingsImage },
  { id: 9, category: "Main Dishes", name: "Chicken Livers & Portuguese Roll", price: 30.00, calories: 550, allergens: ["Gluten"], image: chickenliverImage },
  { id: 10, category: "Main Dishes", name: "Chicken Breast Fillet", price: 24.00, calories: 300, allergens: ["None"], image: chickenbreastImage },
  { id: 11, category: "Main Dishes", name: "Double Chicken Wrap", price: 19.00, calories: 680, allergens: ["Gluten"], image: doublechickenwrapImage },
  { id: 12, category: "Main Dishes", name: "Vegan Spicy Rice", price: 40.00, calories: 450, allergens: ["None"], image: veganspicyriceImage },
  { id: 13, category: "Sides", name: "Fully Loaded Chips", price: 9.00, calories: 500, allergens: ["None"], image: fullyloadedchipsImage },
  { id: 14, category: "Sides", name: "Macho Peas", price: 6.00, calories: 250, allergens: ["None"], image: machoImage },
  { id: 15, category: "Sides", name: "Garlic Bread", price: 15.00, calories: 330, allergens: ["Gluten", "Dairy"], image: garlicbreadImage },
  { id: 16, category: "Desserts", name: "Chocolate Cake", price: 12.00, calories: 600, allergens: ["Gluten", "Dairy", "Eggs"], image: chocolatecakeImage },
  { id: 17, category: "Desserts", name: "Cheese Cake", price: 7.00, calories: 450, allergens: ["Dairy", "Gluten"], image: cheesecakeImage },
  { id: 18, category: "Desserts", name: "Chocolate Ice Cream", price: 14.40, calories: 320, allergens: ["Dairy"], image: chocolateicecreamImage },
  { id: 19, category: "Drinks", name: "Water", price: 3.00, calories: 0, allergens: ["None"], image: waterImage },
  { id: 20, category: "Drinks", name: "Sparkling Water", price: 3.50, calories: 0, allergens: ["None"], image: sparklingwaterImage },
  { id: 21, category: "Drinks", name: "Fanta", price: 4.00, calories: 150, allergens: ["None"], image: fantaImage },
];

function Order({ basket, setBasket }) {
  const [message, setMessage] = useState(""); // For showing success message

  // Function to add items to the basket
  const addToBasket = (item) => {
    console.log("Adding to basket:", item);
    setBasket((prevBasket) => [...prevBasket, item]); // Updates basket
    //Displaying a message saying added to basket
    setMessage(`${item.name} added to the basket`);
    setTimeout(() => setMessage(""), 2500); //Message dissapers aftert 2.5 seconds
  };

  useEffect(() => {
    console.log("Updated Basket:", basket);
  }, [basket]);

  return (
    <div className="container mt-4">
      <h2>Order Food</h2>

      {message && (
        <div className="alert alert-success text-center" role="alert">
          {message}
        </div>
      )}

      {['Starters', 'Main Dishes', 'Sides', 'Desserts', 'Drinks'].map((category) => (
        <div key={category} className="mb-4">
          <h3>{category}</h3>
          <div className="row">
            {foodItems.filter(item => item.category === category).map((item) => (
              <div key={item.id} className="col-md-4 mb-3">
                <div className="card">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text"><strong>Price:</strong> €{item.price.toFixed(2)}</p>
                    <p className="card-text"><strong>Calories:</strong> {item.calories} kcal</p>
                    <p className="card-text"><strong>Allergens:</strong> {item.allergens.join(", ")}</p>
                    <button className="btn btn-success" onClick={() => addToBasket(item)}>
                      Add to Basket
                    </button>
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
