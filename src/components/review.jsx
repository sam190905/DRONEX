import React from "react";
import "../../public/Review.css";

function Review() {
  const reviews = [
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
  ];

  return (
    <div className="review-section">
      <h2>What DroneX Pilots Say</h2>
      <div className='focus right'></div>
      <div className='focus left'></div>

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
    </div>
  );
}

export default Review;