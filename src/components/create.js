import { useState } from "react";
import axios from "axios";

function Create() {
    const [itemName, setItemName] = useState('');//item eg. chips
    const [imageUrl, setImageUrl] = useState(''); //image url
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [message, setMessage] = useState('');

    const resetForm = () => {
        setItemName('');
        setImageUrl('');
        setDescription('');
        setCategory('');
        setPrice('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMenuItem = {
            name: itemName,
            imageUrl: imageUrl, //url is working
            description: description,
            category: category,
            price: price
        };

        axios.post('http://localhost:4000/api/menu', newMenuItem)
        .then(() => {
            resetForm();
            setMessage('Menu item successfully added!');
        })
        .catch((error) => {
            setMessage('An error occurred: ' + error.message);
        });
    };

    return (
        <section className="custom-section form-section">
            <div className="container">
                <div className="row">
                    <h2>Add New Menu Item</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row contact-form-text">
                            <div className="col-12 col-sm-6">
                                <label htmlFor="item-name">Item Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="item-name"
                                    value={itemName}
                                    onChange={(e) => setItemName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="item-image-url">Image URL:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="item-image-url"
                                    placeholder="https://example.com/image.jpg"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="item-description">Description:</label>
                                <textarea
                                    className="form-control"
                                    id="item-description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows="3"
                                    required
                                />
                            </div>
                            <div className="col-12 col-sm-6">
                                <label htmlFor="category">Category:</label>
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
                            <div className="col-12 col-sm-6">
                                <label htmlFor="price">Price (€):</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-light float-right">
                                    Add Item
                                </button>
                            </div>
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
