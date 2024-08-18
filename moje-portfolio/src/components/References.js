import React, { useState } from "react";
import "./EdEx";
export const References = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      text: "I worked with Dominika for more than 1 year. She is a really talented content creator and translator. What sets Dominika apart from others is her responsibility and reliability. She is prompt in communication, creative and always meets deadlines. Dominika is a great part of the team and I definitely recommend her.",
      name: "Daniel Škatuľár – Chief Marketing Officer at Staffino",
    },
    {
      text: "Dominika nám již rok pravidelně píše články z různých chovatelských kategorií na faunaportal.cz. Musím velice ocenit její aktivní a zodpovědný přístup z pohledu plnění domluvených termínů. Články jsou obsahově velmi dobře zpracovány. Velice si cením naší spolupráce.",
      name: "Petr Kopeček – Fauna portál",
    },
  ];
  const NextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const PrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };
  return (
    <div id="references" className="pl-6 pr-4 pb-5 pt-5">
      <h1>Co o mně říkají ostatní</h1>

      <div className="slider-container">
        <button onClick={PrevSlide} className="slider-button">
          &lt;
        </button>
        <div className="slider-content">
          <p>{slides[currentSlide].text}</p>
          <p className="slide-link" class="has-text-primary-45 is-size-5">
            {slides[currentSlide].name}
          </p>
        </div>
        <button onClick={NextSlide} className="slider-button">
          &gt;
        </button>
      </div>
    </div>
  );
};
