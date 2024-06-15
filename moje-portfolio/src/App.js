import React, { useEffect, useState } from "react";
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
const App = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setCursorPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
      />
      <Header />
      <section className="container content">
        <Intro />
        <About />
        <Skills />
        <EdEx />
        <References />
      </section>
    </div>
  );
};

export default App;
