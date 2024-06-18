import React, { useState } from "react";
import "./PhotoShowcase.css";

export const PhotoShowcase = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showImages, setShowImages] = useState(false);

  const images = [
    {
      src: "./assets/ja_nomakeup.jpeg",
      caption: "Bez make-upu",
    },
    {
      src: "./assets/ja.jpg",
      caption: "S make-upem",
    },
  ];

  const handleNextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="photo-showcase">
      <h1 onClick={() => setShowImages(!showImages)} className="images-hover">
        Moje podoba (na vlastní nebezpečí)
      </h1>

      {showImages && (
        <div className="image-container">
          <button onClick={handlePrevImage}>&lt;</button>
          <div className="image">
            <p>{images[currentImage].caption}</p>
            <img
              src={images[currentImage].src}
              alt={images[currentImage].caption}
            />
          </div>
          <button onClick={handleNextImage}>&gt;</button>
        </div>
      )}
    </div>
  );
};
