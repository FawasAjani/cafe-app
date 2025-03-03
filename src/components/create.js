// FawasAjani-G00413222
import { useState } from "react";
import axios from "axios";

function Create() {
    // useState hooks for managing the form fields and the submission message
    const [itemName, setItemName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState(''); // Main Dish, Dessert, or Drink
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState(''); // State for success or error message

    // Function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        // Construct the new menu item object
        const newMenuItem = {
            name: itemName,
            imageUrl: imageUrl,
            description: description,
            category: category, // Main Dish, Dessert, or Drink
            price: price
        };

        // Function to reset the form fields back to initial state
        const resetForm = () => {
            setItemName('');
            setImageUrl('');
            setDescription('');
            setCategory('');
            setPrice('');
        };

        // Making a POST request to the server to add the new menu item
        axios.post('http://localhost:4000/api/menu', newMenuItem)
        .then(() => {
            resetForm(); // Reset the form fields on successful submission
            setMessage('Menu item successfully added!'); // Success message
        })
        .catch((error) => {
            setMessage('An error occurred: ' + error.message); // Error message
        });
    };

    return (
        <section className="custom-section form-section">
            <div className="container">
                <div className="row">
                    <h2>Order Item</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row contact-form-text">
                            {/* Input for item name */}
                            <div className="col-12 col-sm-6">
                                <label htmlFor="item-name" className="contact-form-text">Item Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="item-name"
                                    value={itemName}
                                    onChange={(e) => setItemName(e.target.value)}
                                    required
                                />
                            </div>
                            {/* Input for item image URL */}
                            <div className="col-12 col-sm-6">
                                <label htmlFor="item-image-url" className="contact-form-text">Image URL:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="item-image-url"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    required
                                />
                            </div>
                            {/* Textarea for item description */}
                            <div className="col-12">
                                <label htmlFor="item-description" className="contact-form-text">Description:</label>
                                <textarea
                                    className="form-control"
                                    id="item-description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows="3"
                                    required
                                />
                            </div>
                            {/* Dropdown for selecting category */}
                            <div className="col-12 col-sm-6">
                                <label htmlFor="category" className="contact-form-text">Category:</label>
                                <select
                                    className="form-control"
                                    id="category"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required
                                >
                                    <option value="">Select Category</option>
                                    <option value="Main Dish">Main Dish</option>
                                    <option value="Dessert">Dessert</option>
                                    <option value="Drink">Drink</option>
                                </select>
                            </div>
                            {/* Input for item price */}
                            <div className="col-12 col-sm-6">
                                <label htmlFor="price" className="contact-form-text">Price (€):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                />
                            </div>
                            {/* Submit button */}
                            <div className="col-12">
                                <button type="submit" className="btn btn-light float-right" id="contact-btn-form">
                                    Add Item
                                </button>
                            </div>
                            {/* Display success or error messages */}
                            <div className="col-12">
                                {message && <p className={message.includes('error') ? 'error-message' : 'success-message'}>{message}</p>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Create;
