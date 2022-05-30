/** @format */
import React from "react";
import "./App.css";
import ContainerImages from "./components/ContainerImages";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SectionVideo from "./components/SectionVideo";
import Showcase from "./components/Showcase";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Showcase />
      <Features />
      <SectionVideo />
      <ContainerImages />
      <Footer />
    </React.Fragment>
  );
};

export default App;
