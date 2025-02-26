

const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MongoDB Connection
async function main() {
    await mongoose.connect('mongodb+srv://Admin:Admin@cluster0.fu1gk.mongodb.net/DB11');
    console.log('Connected to MongoDB');
}
main().catch(err => console.log(err));

// Schema and Model
const menuSchema = new mongoose.Schema({
    name: String,
    imageUrl: String,
    description: String,
    category: String,
    price: Number
});
const Menu = mongoose.model('Menu', menuSchema);

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to CyberCafeX API!');
});

// Get All Menu Items
app.get('/api/menu', async (req, res) => {
    const menu = await Menu.find({});
    res.json(menu);
});

// Get Single Item by ID
app.get('/api/menu/:id', async (req, res) => {
    const item = await Menu.findById(req.params.id);
    res.json(item);
});

// Create New Menu Item
app.post('/api/menu', async (req, res) => {
    try {
        const newItem = new Menu(req.body);
        await newItem.save();
        res.status(201).json({ message: 'Menu item added successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding menu item', error: err });
    }
});

// Update Menu Item by ID
app.put('/api/menu/:id', async (req, res) => {
    const updatedItem = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
});

// Delete Menu Item by ID
app.delete('/api/menu/:id', async (req, res) => {
    await Menu.findByIdAndDelete(req.params.id);
    res.json({ message: 'Menu item deleted successfully!' });
});

// Server Listening
app.listen(port, () => {
    console.log(CyberCafeX API running on port ${port});
});