import React from "react";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Clients from "../components/Clients";
import DeskSelection from "../components/DeskSelection";


function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
      <DeskSelection />
    </>
  );
}

export default Home;
