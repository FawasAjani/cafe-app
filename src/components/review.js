import React, { useState } from 'react';
import axios from 'axios';

function Review() {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(5);
    const [message, setMessage] = useState('');

    // Fetch reviews from backend (if applicable)
    const fetchReviews = () => {
        axios.get('http://localhost:4000/api/reviews')//it runs on the server page
            .then(response => setReviews(response.data))
            .catch(error => console.error('Error fetching reviews:', error));
    };

    // Handle review submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = { name, comment, rating };

        axios.post('http://localhost:4000/api/reviews', newReview)
            .then(() => {
                setMessage('Review submitted successfully!');
                setName('');//customer name
                setComment('');//comment
                setRating(5);//rating
                fetchReviews(); // Refresh the reviews
            })
            .catch(error => setMessage('Error submitting review: ' + error.message));
    };

    return (
        <section className="custom-section">
            <div className="container">
                <h2>Customer Reviews</h2>
                <form onSubmit={handleSubmit}>
                    <label>Your Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                    <label>Comment:</label>
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>

                    <label>Rating:</label>
                    <select value={rating} onChange={(e) => setRating(e.target.value)}>
                        {[1, 2, 3, 4, 5].map(num => (
                            <option key={num} value={num}>{num} Stars</option>
                        ))}
                    </select>

                    <button type="submit">Submit Review</button>
                </form>

                {message && <p>{message}</p>}

                <h3>Recent Reviews</h3>
                <ul>
                    {reviews.map((review, index) => (
                        <li key={index}><strong>{review.name}:</strong> {review.comment} ({review.rating} Stars)</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Review;
