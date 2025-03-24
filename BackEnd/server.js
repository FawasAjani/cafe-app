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

mongoose.connect('mongodb+srv://Admin:Admin@cluster0.fu1gk.mongodb.net/DB11')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

// User Schema (Updated to use 'email' instead of 'username')
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },  // 'email' is unique
    password: { type: String, required: true }
});
const User = mongoose.model("User", userSchema);

// Signup Route
app.post("/api/signup", async (req, res) => {
    const { email, password } = req.body;

    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "Email is already taken" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });//registered succesfully
});

// Login Route
app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });//invalid credentials
    }

    const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
