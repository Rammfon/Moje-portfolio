import React, { useState } from "react";
import "./EdEx.css";

export const EdEx = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      name: "Flowee",
      url: "https://www.flowee.cz/index.php/profily?id=9279",
    },
    {
      name: "Onlio APS",
      url: "https://www.onlioaps.com/akce-a-blog/jak-evidovat-nepritomnost-v-jira/",
    },
    {
      name: "KB SmartPay",
      url: "https://www.facebook.com/photo?fbid=327717373636682&set=a.139686215773133",
    },
    {
      name: "Bylinkopedie",
      url: "https://bylinkopedie.cz/zlaten-vencova-informace/",
    },
    {
      name: "Můj blog na Seznam Medium",
      url: "https://medium.seznam.cz/autor/dominika-jandorova-2471",
    },
    {
      name: "OilStop",
      url: "https://medium.seznam.cz/clanek/oilstop-za-jakych-podminek-muzete-dat-pouzity-jedly-olej-do-kompostu-9149",
    },
    {
      name: "Fauna portál",
      url: "https://www.faunaportal.cz/clanek/sklipkan_kralovsky",
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div id="edex" className="pl-6 pr-4 pb-5 pt-5">
      <h1>Přečtěte si mě</h1>
      <p>
        Za ty <strong>čtyři roky</strong>, co se copywriterství věnuji, jsem
        toho napsala už docela hodně. Přečíst si mě můžete třeba na:
      </p>
      <div className="slider-container">
        <button onClick={handlePrevSlide} className="slider-button">
          &lt;
        </button>
        <div className="slider-content">
          <a
            href={slides[currentSlide].url}
            target="_blank"
            rel="noopener noreferrer"
            className="slide-link"
            class="has-text-primary-45 is-size-3"
          >
            {slides[currentSlide].name}
          </a>
        </div>
        <button onClick={handleNextSlide} className="slider-button">
          &gt;
        </button>
      </div>
    </div>
  );
};
