// import images
import garlicpittaImage from '../images/garlic_pitta.jpg';
import olivesImage from '../images/olives.jpg';
import SweetpotatoImage from '../images/sweet-potato-wedges.jpg';
import HalloumiImage from '../images/halloumi-sticks.jpg';
import almondsImage from '../images/almonds.jpg';
import maccheeseImage from '../images/Ajani mac&cheese.jpg';
import burgerImage from '../images/burger.jpg';
import chickenwingsImage from '../images/chickenwings.jpg';
import chickenliverportugueserollImage from '../images/chicken-liverportugueseroll.jpg';
import chickenbreastfilletImage from '../images/chicken-breast-fillet.jpg';
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

import "bootstrap/dist/css/bootstrap.min.css";

// Food items
const foodItems = [
    { id: 1, category: "Starters", name: "Cheesy Garlic Pitta", price: 6.25, image: garlicpittaImage },
    { id: 2, category: "Starters", name: "Olives", price: 5.25, image: olivesImage },
    { id: 3, category: "Starters", name: "Sweet Potato", price: 8.00, image: SweetpotatoImage },
    { id: 4, category: "Starters", name: "Halloumi Sticks & Dip", price: 9.60, image: HalloumiImage },
    { id: 5, category: "Starters", name: "Almonds", price: 1.90, image: almondsImage },
    { id: 6, category: "Starters", name: "Ajani Mac & Cheese", price: 12.00, image: maccheeseImage },
    { id: 7, category: "Main Dishes", name: "Classic Burger", price: 20.99, image: burgerImage },
    { id: 8, category: "Main Dishes", name: "3 Chicken Wings", price: 24.00, image: chickenwingsImage },
    { id: 9, category: "Main Dishes", name: "Chicken Livers & Portuguese Roll", price: 30.00, image: chickenliverportugueserollImage },
    { id: 10, category: "Main Dishes", name: "Chicken Breast Fillet", price: 24.00, image: chickenbreastfilletImage },
    { id: 11, category: "Main Dishes", name: "Double Chicken Wrap", price: 19.00, image: doublechickenwrapImage },
    { id: 12, category: "Main Dishes", name: "Vegan Spicy Rice", price: 40.00, image: veganspicyriceImage },
    { id: 13, category: "Sides", name: "Fully Loaded Chips", price: 9.00, image: fullyloadedchipsImage },
    { id: 15, category: "Sides", name: "Macho peas", price: 6.00, image: machoImage },
    { id: 16, category: "Sides", name: "Garlic bread", price: 5.00, image: garlicbreadImage },
    { id: 17, category: "Desserts", name: "Chocolate-cake", price: 12.00, image: chocolatecakeImage },
    { id: 18, category: "Desserts", name: "Cheese-cake", price: 7.00, image: cheesecakeImage },
    { id: 19, category: "Desserts", name: "Chocolate-ice-cream", price: 14.40, image: chocolateicecreamImage },
    { id: 19, category: "Drinks", name: "Water", price: 3.00, image:waterImage },
    { id: 19, category: "Drinks", name: "Sparkling-water", price: 3.50, image: sparklingwaterImage },
    { id: 19, category: "Drinks", name: "Fanta", price: 4.00, image: fantaImage },
];




function Order({ basket, setBasket }) {
    const addToBasket = (item) => {
        setBasket(prevBasket => [...prevBasket, item]);
        console.log("Basket updated:", basket);  
    };
    //useeffect 
    useEffect(() => {
        console.log("Updated Basket:", basket);//updated basket
    }, [basket]);


    return (
        <div className="container mt-4">
            <h2>Order Food</h2>
            {['Starters', 'Main Dishes','Sides', 'Desserts','Drinks'].map((category) => (
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
