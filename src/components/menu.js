import axios from "axios";
import { useState } from "react";

/* Fawas-Ajani-G00413222 */
function Menu() {
    // State to store menu items
    const [menuItems, setMenuItems] = useState([]);

    // Function to fetch menu items from the API
    const fetchMenuItems = () => {
        axios.get("http://localhost:4000/api/menu") // Correct endpoint
            .then((response) => {
                setMenuItems(response.data); // Store menu items correctly
            })
            .catch((error) => {
                console.log("Error fetching menu items:", error);
            });
    };

    // Function to handle the refresh button click
    const refreshMenu = () => {
        // Reset the menuItems to empty (clear the menu)
        setMenuItems([]);

        // Fetch the menu items again from the server after clearing the list
        fetchMenuItems();
    };

    return (
        <section className="custom-section">
            <div className="container">
                <h2>CyberCafeX Menu</h2>

                {/* Button to manually refresh/reload the menu */}
                <button onClick={refreshMenu} className="btn btn-primary mb-4">
                    Refresh Menu
                </button>

                {/* Display message if no menu items */}
                {menuItems.length === 0 ? (
                    <p>No menu items available</p>
                ) : (
                    <div className="row">
                        {menuItems.map(item => (
                            <div key={item._id} className="col-md-4 mb-4">
                                <div className="card">
                                    <img
                                        src={item.imageUrl}
                                        className="card-img-top"
                                        alt={item.name}
                                        style={{ height: '200px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <p><strong>Category:</strong> {item.category}</p>
                                        <p><strong>Price:</strong> €{item.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Menu;
