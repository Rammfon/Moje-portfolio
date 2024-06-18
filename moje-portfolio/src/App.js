import React, { useEffect, useState, useRef } from "react";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { EdEx } from "./components/EdEx";
import { References } from "./components/References";
import "./App.css";
import Stars from "./components/Stars";
import GlobalStyle from "./components/GlobalStyle";
import { motion } from "framer-motion";
import { Footer } from "./components/Footer";
import { PhotoShowcase } from "./components/PhotoShowcase";
const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${event.pageX}px`;
        cursorRef.current.style.top = `${event.pageY}px`;

        // Vytvořte nový element pro ohnivou čáru
        const fireTrail = document.createElement("div");
        fireTrail.className = "fire-trail";
        fireTrail.style.left = `${event.pageX + 5}px`;
        fireTrail.style.top = `${event.pageY + 15}px`;

        // Přidejte ohnivou čáru do dokumentu
        document.body.appendChild(fireTrail);

        // Odstraňte ohnivou čáru po dokončení animace
        fireTrail.addEventListener("animationend", () => {
          fireTrail.remove();
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <Stars />
      <GlobalStyle />
      <motion.div
        className="custom-cursor"
        animate={{ x: cursorPosition.x - 15, y: cursorPosition.y - 15 }}
        transition={{ ease: "linear", duration: 0 }}
        ref={cursorRef}
      />
      <Header />
      <section class="container content">
        <Intro />
        <About />
        <PhotoShowcase />
        <Skills />
        <EdEx />
        <References />
      </section>
      <Footer />
    </div>
  );
};

export default App;
