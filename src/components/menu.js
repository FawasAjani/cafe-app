import axios from "axios";
import { useEffect, useState } from "react";

function Menu() {
    const [menuItems, setMenuItems] = useState([]);

    const fetchMenuItems = () => {
        axios.get("http://localhost:4000/api/menu")
            .then((response) => {
                setMenuItems(response.data);
            })
            .catch((error) => {
                console.log("Error fetching menu items:", error);
            });
    };

    const resetMenu = () => {
        axios.delete("http://localhost:4000/api/menu/reset")
            .then(() => {
                setMenuItems([]);
            })
            .catch((error) => {
                console.log("Error resetting menu:", error);
            });
    };

    useEffect(() => {
        fetchMenuItems();
    }, []);

    return (
        <section className="custom-section">
            <div className="container">
                <h2>CyberCafeX Menu</h2>
                <button onClick={resetMenu} className="btn btn-danger">Reset Menu</button>

                {menuItems.length === 0 ? (
                    <p>No menu items available</p>
                ) : (
                    <div className="row">
                        {menuItems.map(item => (
                            <div key={item._id} className="col-md-4 mb-4">
                                <div className="card">
                                    <img 
                                        src={item.imageUrl}  // ✅ Using URL instead of local path
                                        className="card-img-top" 
                                        alt={item.name} 
                                        style={{ height: '200px', objectFit: 'cover' }} 
                                        onError={(e) => { e.target.src = "https://via.placeholder.com/200"; }} 
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
