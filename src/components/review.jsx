import React, { useState } from "react";
import "../../public/review.css";

function Review() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Alex Turner",
      image: "/media/profiles/profile1.jpg",
      text: "The DroneX drones are incredible! Amazing flight time and crystal-clear camera quality. Best drone I've ever owned!",
      rating: 5,
      product: "DJI Air 3s"
    },
    {
      id: 2,
      name: "Lisa Hamilton",
      image: "/media/profiles/profile2.jpg",
      text: "Perfect beginner drone from DroneX. Easy to fly and the customer support team was super helpful!",
      rating: 4.5,
      product: "DJI Neo"
    },
    {
      id: 3,
      name: "Jake Morrison",
      image: "/media/profiles/profile3.jpg",
      text: "DroneX's racing drones are unreal! Lightning-fast and durable - worth every penny.",
      rating: 5,
      product: "DJI Mavic 3 pro"
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    text: "",
    rating: 0,
    product: "",
    image: "/media/profiles/default.jpg"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleRating = (ratingValue) => {
    setNewReview({ ...newReview, rating: ratingValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewToAdd = {
      ...newReview,
      id: reviews.length + 1,
    };
    setReviews([reviewToAdd, ...reviews]); // Add to top
    setNewReview({ name: "", text: "", rating: 0, product: "", image: "/media/profiles/default.jpg" });
  };

  return (
    <div className="review-section">
      <h2>What DroneX Pilots Say</h2>

      <div className="reviews-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img
              src={review.image}
              alt={`${review.name}'s profile`}
              className="review-image"
            />
            <div className="review-content">
              <h3>{review.name}</h3>
              <p className="review-product">Product: {review.product}</p>
              <p className="review-text">"{review.text}"</p>
              <div className="rating">
                {"★".repeat(Math.floor(review.rating))}
                {review.rating % 1 !== 0 && "½"}
                {"☆".repeat(5 - Math.ceil(review.rating))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <form className="review-form" onSubmit={handleSubmit}>
        <h3>Share your review</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="product"
          placeholder="Product Name"
          value={newReview.product}
          onChange={handleChange}
          required
        />
        <textarea
          name="text"
          placeholder="Write your review..."
          value={newReview.text}
          onChange={handleChange}
          required
        ></textarea>
        <div className="rating-input">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRating(star)}
              style={{ cursor: "pointer", color: star <= newReview.rating ? "gold" : "gray" }}
            >
              ★
            </span>
          ))}
        </div>
        <button type="submit">Submit Review</button>
      </form>


    </div>
  );
}

export default Review;
