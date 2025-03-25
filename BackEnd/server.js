const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
const SECRET_KEY = "your_secret_key";

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Admin:Admin@cluster0.fu1gk.mongodb.net/DB11')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

// User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model("User", userSchema);

// Review Schema
const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }
});
const Review = mongoose.model("Review", reviewSchema);

// Signup Route
app.post("/api/signup", async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "Email is already taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
});

// Login Route
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
});

// Reviews
app.get("/api/reviews", async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: "Error fetching reviews" });
    }
});

// Submit a new review
app.post("/api/reviews", async (req, res) => {
    try {
        const { name, comment, rating } = req.body;
        if (!name || !comment || !rating) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const newReview = new Review({ name, comment, rating });
        await newReview.save();
        res.status(201).json({ message: "Review submitted successfully" });//successfully
    } catch (error) {
        res.status(500).json({ message: "Error submitting review" });//Error submitting review
    }
});
//Server running on port 4000
app.listen(port, () => console.log(`Server running on port ${port}`));


