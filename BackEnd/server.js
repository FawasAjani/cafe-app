const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

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
    imageUrl: String, // ✅ Using image URL now
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
        const newItem = new Menu({
            name: req.body.name,
            imageUrl: req.body.imageUrl,  // ✅ Now using direct URL links
            description: req.body.description,
            category: req.body.category,
            price: req.body.price
        });
        await newItem.save();
        res.status(201).json({ message: 'Menu item added successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'Error adding menu item', error: err });
    }
});

// Delete all menu items (for resetting the menu)
app.delete('/api/menu/reset', async (req, res) => {
    await Menu.deleteMany({});
    res.json({ message: 'Menu has been reset!' });
});

// Server Listening
app.listen(port, () => {
    console.log(`CyberCafeX API running on port ${port}`);
});
