import React, { useState } from "react";
import "./PhotoShowcase.css";

export const PhotoShowcase = () => {
  const [showImages, setShowImages] = useState(false);

  return (
    <div className="photo-showcase">
      <h3 onClick={() => setShowImages(!showImages)} className="images-hover">
        Moje podoba
      </h3>

      {showImages && (
        <div className="image-container">
          <div className="image">
            <img src="./assets/ja.jpg" alt="Dominika Jandorová" />
          </div>
        </div>
      )}
    </div>
  );
};
