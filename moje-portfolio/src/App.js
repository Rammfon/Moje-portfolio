import React, { useState } from "react";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { EdEx } from "./components/EdEx";
import { References } from "./components/References";
import "./App.css";
const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      <EdEx />
      <References />
    </>
  );
};

export default App;
