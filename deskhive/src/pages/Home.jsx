import React from "react";
import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Clients from "../components/Clients";


function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Clients />
    </>
  );
}

export default Home;
