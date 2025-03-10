import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//Food iteams
const foodItems = [
    { id: 1, category: "Starters", name: "Cheesy Garlic Pitta", price: 6.25, image: "garlic_pitta.jpg" },
    { id: 2, category: "Starters", name: "Halloumi Sticks & Dip", price: 6.25, image: "halloumi_sticks.jpg" },
    { id: 3, category: "Main Dishes", name: "Classic Burger", price: 9.99, image: "burger.jpg" },
    { id: 4, category: "Main Dishes", name: "Grilled Chicken", price: 12.99, image: "grilled_chicken.jpg" },
    { id: 5, category: "Desserts", name: "Chocolate Brownie", price: 4.99, image: "brownie.jpg" },
    { id: 6, category: "Desserts", name: "Ice Cream Sundae", price: 5.49, image: "ice_cream.jpg" },
];

