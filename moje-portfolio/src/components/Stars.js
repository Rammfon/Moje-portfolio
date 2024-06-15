import React, { useState, useEffect } from "react";
import "./Stars.css";

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const numStars = 100; // Počet hvězd
    const generatedStars = Array.from({ length: numStars }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Stars;
